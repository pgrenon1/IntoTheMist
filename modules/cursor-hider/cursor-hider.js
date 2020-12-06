(async () => {
	async function preRequisitesReady() {
		return Promise.all([areSettingsLoaded(), isCanvasReady()]);
	}

	async function areSettingsLoaded() {
		return new Promise(resolve => {
			Hooks.once('cursorHiderSettingsReady', resolve);
		});
	}
	async function isCanvasReady() {
		return new Promise(resolve => {
			Hooks.once('ready', resolve);
		});
	}



	function addCursorHiderBehavior() {
		const hiddenUsers = new Set();
		patchControlsLayer(hiddenUsers);

		Net.onUserHidden((userId) => {
			addHiddenUser(hiddenUsers, userId);
			hideCanvasCursor(userId);
		});
		Net.onUserShown((userId) => {
			deleteHiddenUser(hiddenUsers, userId);
		});
		window.addEventListener('keydown', (e) => {
			if (isAnElementFocused()) {
				return;
			}

			const KeyBinding = window.Azzu.SettingsTypes.KeyBinding;
			const binding = Settings.toggleCursor;
			const noPermission = !binding;
			if (noPermission || !KeyBinding.eventIsForBinding(e, binding)) {
				return;
			}

			if (hiddenUsers.has(game.user._id)) {
				showCursor(hiddenUsers);
			} else {
				hideCursor(hiddenUsers);
			}
		});
		Hooks.on('renderPlayerList', (playerList, $html, data) => {
			hiddenUsers.forEach((userId) => {
				const styles = `flex:0 0 17px;width:17px;height:16px;border:0`;
				const src = `modules/cursor-hider/nocursor.png`;
				const alt = `Cursor is being hidden`;
				const img = `<img style="${styles}" src="${src}" alt="${alt}" title="${alt}" />`;
				$html.find(`[data-user-id="${userId}"]`)
					.append(img);
			});
		});
		setInterval(() => {
			if (hiddenUsers.has(game.user._id)) {
				Net.hideCursor();
			}
		}, 5000);

		if (Settings.hideByDefault) {
			hideCursor(hiddenUsers);
		}
	}

	function isAnElementFocused() {
		return !!$(':focus').length;
	}

	function hideCursor(hiddenUsers) {
		Net.hideCursor();
		addHiddenUser(hiddenUsers, game.user._id);
	}

	function showCursor(hiddenUsers) {
		Net.showCursor();
		deleteHiddenUser(hiddenUsers, game.user._id);
		Net.broadcastCursorPos();
	}

	function addHiddenUser(hiddenUsers, userId) {
		hiddenUsers.add(userId);
		ui.players.render();
	}
	function deleteHiddenUser(hiddenUsers, userId) {
		hiddenUsers.delete(userId);
		ui.players.render();
	}

	function getMousePos(){
		const mouse = canvas.app.renderer.plugins.interaction.mouse.global;
		const t = canvas.controls.worldTransform;
		function calcCoord(axis) {
			return (mouse[axis] - t['t' + axis]) / canvas.stage.scale[axis];
		}
		return {
			x: calcCoord('x'),
			y: calcCoord('y')
		};
	}

	function hideCanvasCursor(userId) {
		const cursor = canvas.controls._cursors[userId];
		if (cursor) {
			cursor.visible = false;
		}
	}

	function patchControlsLayer(hiddenUsers) {
		const oldUpdateCursor = canvas.controls.updateCursor;
		// needs to be a function for correct "this"
		canvas.controls.updateCursor = function(user, position) {
			if (hiddenUsers.has(user._id)) {
				return;
			}

			oldUpdateCursor.call(this, user, position);
		};

		const oldOnMoveCursor = canvas.controls._onMoveCursor;
		canvas.controls._onMoveCursor = function () {
			if (!hiddenUsers.has(game.user._id)) {
				oldOnMoveCursor.apply(this, arguments);
			}
		}
	}

	class Net {
		static get SOCKET_NAME() {
			return 'module.cursor-hider';
		}

		static _emit(...args) {
			game.socket.emit(Net.SOCKET_NAME, ...args)
		}

		static hideCursor() {
			Net._emit({
				cmd: 'hideCursor',
				userId: game.user._id
			});
		}

		static showCursor() {
			Net._emit({
				cmd: 'showCursor',
				userId: game.user._id
			});
		}

		static onUserHidden(func) {
			game.socket.on(Net.SOCKET_NAME, (data) => {
				if (data.cmd !== 'hideCursor') return;
				func(data.userId);
			});
		}

		static onUserShown(func) {
			game.socket.on(Net.SOCKET_NAME, (data) => {
				if (data.cmd !== 'showCursor') return;
				func(data.userId);
			});
		}

		static broadcastCursorPos() {
			canvas.controls._onMoveCursor({data: {
				getLocalPosition() { return getMousePos(); }
			}});
		}
	}
	window.Azzu = window.Azzu || {};
	const [Settings] = await preRequisitesReady();
	addCursorHiderBehavior();
})();
