class TokenInfoIcons {


    static async addTokenInfoButtons(app, html, data) {
        
        let actor = canvas.tokens.get(data._id).actor;
        //let actor = game.actors.get(data.actorId);
        if (actor === undefined) return;

        let ac = 10
        if (game.world.system === "pf1") {
          ac = actor.data.data.attributes.ac.normal.total
        } else {
          ac = (isNaN(parseInt(actor.data.data.attributes.ac.value)) || parseInt(actor.data.data.attributes.ac.value) === 0) ? 10 : parseInt(actor.data.data.attributes.ac.value);
        }

        let perception = 10;
        if (game.world.system === "pf1") {
            perception = actor.data.data.skills.per.mod
        } else if (game.world.system === "pf2e") {
            const proficiency = actor.data.data.attributes.perception.rank ? actor.data.data.attributes.perception.rank * 2 + actor.data.data.details.level.value : 0;
            perception = perception + actor.data.data.abilities[actor.data.data.attributes.perception.ability].mod + proficiency + actor.data.data.attributes.perception.item;
        } else {
            perception = actor.data.data.skills.prc.passive;
        }

        console.log("TokenInfoIcons", actor);

        let speed = "";

        if (game.world.system === "pf2e") {
            speed = '<span style="white-space: pre;" title="Land"><i class="fas fa-walking"></i> ' + actor.data.data.attributes.speed.total + '</span>';
        } else if (game.world.system === "pf1") {
            speed = '<span style="white-space: pre;" title="Land"><i class="fas fa-walking"></i> ' + actor.data.data.attributes.speed.land.total + '</span>';
        } else {
            if (actor.data.data.attributes.movement.walk != 0 && actor.data.data.attributes.movement.walk != null) speed += '<span style="white-space: pre;" title="Walk"><i class="fas fa-walking"></i> ' + actor.data.data.attributes.movement.walk + '<span style="font-size: 0.5em;"> ' + actor.data.data.attributes.movement.units + "</span></span>";
            if (actor.data.data.attributes.movement.swim != 0 && actor.data.data.attributes.movement.swim != null) speed += '<span style="white-space: pre;" title="Swim"><i class="fas fa-swimmer"></i> ' + actor.data.data.attributes.movement.swim + '<span style="font-size: 0.5em;"> ' + actor.data.data.attributes.movement.units + "</span></span>";
            if (actor.data.data.attributes.movement.fly != 0 && actor.data.data.attributes.movement.fly != null) speed += '<span style="white-space: pre;" title="Fly"><i class="fas fa-crow"></i> ' + actor.data.data.attributes.movement.fly + '<span style="font-size: 0.5em;"> ' + actor.data.data.attributes.movement.units + "</span></span>";
            if (actor.data.data.attributes.movement.burrow != 0 && actor.data.data.attributes.movement.burrow != null) speed += '<span style="white-space: pre;" title="Burrow"><i class="fas fa-mountain"></i> ' + actor.data.data.attributes.movement.burrow + '<span style="font-size: 0.5em;"> ' + actor.data.data.attributes.movement.units + "</span></span>";
            if (actor.data.data.attributes.movement.climb != 0 && actor.data.data.attributes.movement.climb != null) speed += '<span style="white-space: pre;" title="Climb"><i class="fas fa-grip-lines"></i> ' + actor.data.data.attributes.movement.climb + '<span style="font-size: 0.5em;"> ' + actor.data.data.attributes.movement.units + "</span></span>";
        }

        let newdiv = '<div class="token-info-container">';

        let position = game.settings.get("token-info-icons", "position");

        let buttons = $('<div class="col token-info-column-' + position + '"><div class="control-icon token-info-icon">' + speed + '</div><div class="control-icon token-info-icon" title="Armor Class: ' + ac + '"><i class="fas fa-shield-alt"></i> ' + ac + '</div><div class="control-icon token-info-icon" title="Passive Perception: ' + perception + '"><i class="fas fa-eye"></i> ' + perception + '</div></div>');

        html.find('.col.left').wrap(newdiv);
        html.find('.col.left').before(buttons);
    }

}

Hooks.on('ready', () => {
    let gmOnly = game.settings.get("token-info-icons", "gmOnly");

    if (gmOnly) {
        if (game.user.isGM) {
            Hooks.on('renderTokenHUD', (app, html, data) => { TokenInfoIcons.addTokenInfoButtons(app, html, data) });
        }
    } else {
        Hooks.on('renderTokenHUD', (app, html, data) => { TokenInfoIcons.addTokenInfoButtons(app, html, data) });
    }
    
	
});

Hooks.once("init", () => {
	game.settings.register("token-info-icons", "gmOnly", {
		name: "GM only?",
		hint: "Show the token info to the GM only or to all players?",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
    });
    
    const choices = new Array("Left", "Right");

    game.settings.register("token-info-icons", "position", {
		name: "Token Position",
		hint: "Which side of the token should the info appear on?",
        scope: "world",
        config: true,
		type: String,
        default: "left",
        choices: {
            "left": "left",
            "right": "right",
        }
	});
});

console.log("Token Info Icons loaded");
