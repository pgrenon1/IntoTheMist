/**
 * window.Azzu.CursorHiderSettings is guaranteed to be initialized after Hooks->init
 */
(() => {
	window.Azzu = window.Azzu || {};

	function CursorHiderSettings() {}

	const KEYS = {
		CURSOR_HIDER: 'cursor-hider',
		MINIMUM_PERMISSION: 'minimumPermission',
		LAST_VERSION: 'lastVersion'
	};

	const LATEST_VERSION = '1.1.2';

	const MIGRATION = {
		UNNECESSARY: 0,
		FAILED: 1
	};

	async function migrate() {
		let result = MIGRATION.UNNECESSARY;
		game.settings.register(KEYS.CURSOR_HIDER, KEYS.LAST_VERSION, {
			config: false,
			scope: 'client',
			type: String,
			default: ''
		});
		let lastVersion = game.settings.get(KEYS.CURSOR_HIDER, KEYS.LAST_VERSION);
		if (!lastVersion) {
			const updateVersion = '1.1.2';
			if (game.user.isGM && game.settings.get(KEYS.CURSOR_HIDER, KEYS.MINIMUM_PERMISSION) === 0) {
				await game.settings.set(KEYS.CURSOR_HIDER, KEYS.MINIMUM_PERMISSION, 1);
			}

			registerCursorHiderSettings();

			await game.settings.set(KEYS.CURSOR_HIDER, KEYS.LAST_VERSION, updateVersion);
			result = lastVersion = updateVersion;
		}
		return lastVersion === LATEST_VERSION ? result : MIGRATION.FAILED;
	}

	Hooks.once('ready', async () => {
		registerCursorHiderSettings();
		const migrationResult = await migrate();
		if (migrationResult === MIGRATION.FAILED) {
			alert('The settings of the "Cursor Hider" module could not be updated after you installed a new version.' +
				' If you encounter any issues or this message keeps showing up, please disable the module and contact ' +
				'me on Discord (Azzurite#2004) or file an issue at https://gitlab.com/foundry-azzurite/cursor-hider/issues');
		} else if (!Object.values(MIGRATION).includes(migrationResult)) {
			const chatMessage = new ChatMessage({
				speaker: {alias: 'Cursor Hider Module Notification'},
				content: `You have updated the Cursor Hider module to v${migrationResult}. The module settings ` +
					'structure has changed, so the settings were successfully migrated. You may have to reload this ' +
					'page for the settings menu to work correctly.',
				whisper: [],
				timestamp: Date.now()
			});
			ui.chat.postOne(chatMessage, false);
		}
		Hooks.call('cursorHiderSettingsReady', CursorHiderSettings);
	});

	// Definitions

	function registerCursorHiderSettings() {
		const extraTypes = window.Azzu.SettingsTypes;

		const choices = Object.entries(CONST.USER_ROLES)
			.filter(([key, val]) => val !== 0)
			.reduce((choices, [permission, val]) => {
				choices[val] = permission;
				return choices;
			}, {});
		register(KEYS.MINIMUM_PERMISSION, {
			name: game.i18n.localize('CURSOR-HIDER.minimumPermission.title'),
			hint: game.i18n.localize('CURSOR-HIDER.minimumPermission.hint'),
			default: 1,
			isSelect: true,
			choices: choices,
			type: Number,
			scope: "world"
		});

		const minPermission = CursorHiderSettings[KEYS.MINIMUM_PERMISSION];
		if (game.user.hasRole(minPermission)) {
			register('toggleCursor', {
				name: game.i18n.localize('CURSOR-HIDER.toggleCursor.title'),
				hint: game.i18n.localize('CURSOR-HIDER.toggleCursor.hint'),
				default: 'Alt + c',
				type: extraTypes.KeyBinding
			});
			register('hideByDefault', {
				name: game.i18n.localize('CURSOR-HIDER.hideByDefault.title'),
				hint: game.i18n.localize('CURSOR-HIDER.hideByDefault.hint'),
				default: false,
				type: Boolean
			})
		}

	}

	function register(key, data) {
		const dataWithDefaults = {
			scope: 'client',
			type: String,
			config: true,
			...data
		};
		defineSetting(key, dataWithDefaults.type);
		game.settings.register(KEYS.CURSOR_HIDER, key, dataWithDefaults);
	}

	function defineSetting(key, type) {
		const get = () => game.settings.get(KEYS.CURSOR_HIDER, key);
		const set = (val) => game.settings.set(KEYS.CURSOR_HIDER, key, val);
		let getset;
		if (type.parse && Object.values(window.Azzu.SettingsTypes).includes(type)) {
			getset = {
				get: () => type.parse(get()),
				set: (val) => set(type.format(val))
			};
		} else {
			getset = {
				get,
				set
			};
		}
		if (!CursorHiderSettings.hasOwnProperty(key)) Object.defineProperty(CursorHiderSettings, key, getset);
	}
})();
