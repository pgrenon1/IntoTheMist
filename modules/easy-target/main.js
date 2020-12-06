// For Zamrod.
// Special thanks to Reaver.

if (typeof FunctionPatcher === 'undefined') {
	// noinspection ES6ConvertVarToLetConst
	var FunctionPatcher = class {
		constructor (proto, name) {
			this.proto = proto;
			this.name = name;

			const str = proto[name].toString();
			const startBrace = str.indexOf('{');
			const endBrace = str.lastIndexOf('}');

			if (startBrace < 0 || endBrace < 0) {
				console.error('Function patching failed: no curly braces found.');
				return;
			}

			this.header = str.substring(0, startBrace).trim();
			const startParen = this.header.indexOf('(');
			const endParen = this.header.lastIndexOf(')');

			if (startParen < 0 || endParen < 0) {
				console.error('Function patching failed: no parentheses in function header.');
				return;
			}

			const minified = str.indexOf('\n') < 0;
			const splitChar = minified ? ';' : '\n';
			this.params = this.header.substring(startParen, endParen + 1);
			this.lines =
				str.substring(startBrace + 1, endBrace)
				.trim()
				.replace(/\r/g, '')
				.split(splitChar)
				.map(line => line.trim())
				.map(line => minified || !line.length ? `${line};` : line);
		}

		insertBefore (target, line) {
			const idx = this._findTarget(target);
			if (idx < 0) {
				return;
			}

			this.lines.splice(idx, 0, line);
		}

		insertAfter (target, line) {
			const idx = this._findTarget(target);
			if (idx < 0) {
				return;
			}

			this.lines.splice(idx + 1, 0, line);
		}

		patch () {
			const isAsync = this.header.includes('async ');
			this.proto[this.name] =
				eval(`(${isAsync ? 'async ': ''}function ${this.params} {${this.lines.join('\n')}})`);
		}

		replace (target, line) {
			const idx = this._findTarget(target);
			this.lines[idx] = line;
		}

		_findTarget(target) {
			target = Array.isArray(target) ? target : [target];
			const idx = this.lines.findIndex(line => target.includes(line));

			if (idx < 0) {
				console.warn(`Function patching failed: no line '${target}' found.`);
			}

			return idx;
		}
	}
}

const EasyTarget = {
	active: false,
	holdingAlt: false,
	html: {
		tokenTools: function () {
			const tokenControls = $('li.scene-control[data-control="token"]');
			return {
				select: tokenControls.find('[data-tool="select"]')[0],
				target: tokenControls.find('[data-tool="target"]')[0]
			};
		}
	},

	getTemplateShape: function (template) {
		let shape = template.data.t;
		shape = shape[0].toUpperCase() + shape.substring(1);

		const fn = MeasuredTemplate.prototype[`_get${shape}Shape`];
		const dim = canvas.dimensions;
		let {direction, distance, angle, width} = template.data;

		distance *= (dim.size / dim.distance);
		width *= (dim.size / dim.distance);
		direction = toRadians(direction);

		switch (shape) {
			case 'Circle': return fn.apply(template, [distance]);
			case 'Cone': return fn.apply(template, [direction, angle, distance]);
			case 'Rect': return fn.apply(template, [direction, distance]);
			case 'Ray': return fn.apply(template, [direction, distance, width]);
		}
	},

	patchTokenClick: function () {
		const patcher = new FunctionPatcher(Token.prototype, '_onClickLeft');

		patcher.replace(
			[
				'if ( tool === "target" ) return this.setTarget(!this.isTargeted, {releaseOthers: !oe.shiftKey});',
				'if(tool==="target")return this.setTarget(!this.isTargeted,{releaseOthers:!oe.shiftKey});',
			],
			'if ( tool === "target" ) return this.setTarget(!this.isTargeted, {releaseOthers: EasyTarget.releaseBehaviour(oe)});'
		);

		patcher.replace(
			'super._onClickLeft(event);',
			'PlaceableObject.prototype._onClickLeft.call(this, event);'
		);

		patcher.patch();
	},

	releaseBehaviour: function (oe) {
		const mode = game.settings.get('easy-target', 'release');
		if (mode === 'sticky') {
			return !oe.shiftKey && !oe.altKey;
		}

		return !oe.shiftKey;
	},

	targetTokensInArea: function (templates) {
		canvas.tokens.objects.children.filter(token => {
			const {x: ox, y: oy} = token.center;
			return templates.some(template => {
				const {x: cx, y: cy} = template.center;
				return template.shape.contains(ox - cx, oy - cy);
			});
		}).forEach(token => token.setTarget(true, {releaseOthers: false, groupSelection: true}));
		game.user.broadcastActivity({targets: game.user.targets.ids});
	},

	toggleTargetOn: function () {
		const tools = EasyTarget.html.tokenTools();
		ui.controls.control.activeTool = 'target';
		tools.select.classList.remove('active');
		tools.target.classList.add('active');
	},

	toggleTargetOff: function () {
		const tools = EasyTarget.html.tokenTools();
		ui.controls.control.activeTool = 'select';
		tools.select.classList.add('active');
		tools.target.classList.remove('active');
	}
};

EasyTarget.patchTokenClick();
Canvas.prototype._onClickLeft = (function () {
	const cached = Canvas.prototype._onClickLeft;
	return function (evt) {
		const selectState = evt.data._selectState;
		cached.apply(this, arguments);

		if (evt.data.originalEvent.altKey && selectState !== 2) {
			const {x: ox, y: oy} = evt.data.origin;
			const templates = canvas.templates.objects.children.filter(template => {
				const {x: cx, y: cy} = template.center;
				return template.shape.contains(ox - cx, oy - cy);
			});

			EasyTarget.targetTokensInArea(templates);
		}

		if (game.modules.get('deselection')?.active
			&& ['select', 'target'].includes(game.activeTool)
			&& !game.keyboard.isCtrl(evt)
			&& this.activeLayer instanceof PlaceablesLayer)
		{
			if (game.activeTool === 'select') {
				this.activeLayer._onClickLeft(evt);
			} else if (game.activeTool === 'target') {
				this.activeLayer.targetObjects({}, {releaseOthers: true});
			}
		}
	};
})();

Hooks.on('ready', function () {
	game.settings.register('easy-target', 'release', {
		name: 'EASYTGT.ReleaseBehaviour',
		hint: 'EASYTGT.ReleaseBehaviourHint',
		scope: 'user',
		config: true,
		default: 'sticky',
		type: String,
		choices: {
			'sticky': 'EASYTGT.Sticky',
			'standard': 'EASYTGT.Standard'
		}
	});
});

Hooks.on('createMeasuredTemplate', (scene, template) => {
	if (EasyTarget.holdingAlt) {
		template = new MeasuredTemplate(template);
		template.shape = EasyTarget.getTemplateShape(template);
		EasyTarget.targetTokensInArea([template]);
	}
});

document.addEventListener('keydown', evt => {
	if (evt.key === 'Alt') {
		EasyTarget.holdingAlt = true;

		if (!EasyTarget.active
			&& ui.controls.control.name === 'token'
			&& game.activeTool === 'select')
		{
			EasyTarget.toggleTargetOn();
			EasyTarget.active = true;
		}
	}
});

document.addEventListener('keyup', evt => {
	if (evt.key === 'Alt') {
		if (ui.controls.control.name === 'token' && EasyTarget.active) {
			EasyTarget.toggleTargetOff();
		}

		EasyTarget.holdingAlt = false;
		EasyTarget.active = false;
	}

	if (evt.altKey && evt.key === 'C') {
		game.user.targets.forEach(t =>
			t.setTarget(false, {releaseOthers: false, groupSelection: true}));
		game.user.broadcastActivity({targets: game.user.targets.ids});
	}
});
