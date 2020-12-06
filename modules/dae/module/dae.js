import { requestGMAction, GMAction, applyActiveEffects } from "./GMAction.js";
import { debug, setDebugLevel } from "../dae.js";
import { ActiveEffects } from "./apps/ActiveEffects.js";
import { DAEActiveEffectConfig } from "./apps/DAEActiveEffectConfig.js";
import { procStatusEffects } from "./statusEffects.js";
export let _characterSpec = { data: {}, flags: {} };
let templates = {};
export var aboutTimeInstalled = false;
export var timesUpInstalled = false;
export var requireItemTarget = true;
export var playersCanSeeEffects = "view";
export var cubActive;
export var furnaceActive;
export var itemacroActive;
export var calculateArmor;
export var applyBaseAC;
export var debugEnabled;
export var useAbilitySave;
export var activeConditions;
export var confirmDelete;
export var ehnanceStatusEffects;
let debugLog = true;
let acAffectingArmorTypes = [];
export class ValidSpec {
    constructor(fs, sv, forcedMode = -1) {
        this._fieldSpec = fs;
        this._sampleValue = sv;
        this._label = fs;
        this._forcedMode = forcedMode;
    }
    get fieldSpec() { return this._fieldSpec; }
    ;
    set fieldSpec(spec) { this._fieldSpec = spec; }
    get sampleValue() { return this._sampleValue; }
    set sampleValue(value) { this._sampleValue = value; }
    get label() { return this._label; }
    set label(label) { this._label = label; }
    get forcedMode() { return this._forcedMode; }
    set forcedMode(mode) { this._forcedMode = mode; }
    static createValidMods(characterSpec = game.system.model.Actor.character) {
        _characterSpec["data"] = duplicate(characterSpec);
        let baseValues = flattenObject(_characterSpec);
        //@ts-ignore
        if (game.modules.get("gm-notes")?.active) {
            baseValues["flags.gm-notes.notes"] = "";
        }
        //@ts-ignore
        const ACTIVE_EFFECT_MODES = CONST.ACTIVE_EFFECT_MODES;
        if (["dnd5e", "sw5e"].includes(game.system.id)) {
            var specials = {
                //@ts-ignore - come back to this
                "flags.dnd5e.initiativeHalfProf": [false, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.attributes.ac.value": [0, -1],
                "data.attributes.ac.min": [0, -1],
                "data.attributes.hp.max": [0, -1],
                "data.attributes.hp.tempmax": [0, -1],
                "data.attributes.hp.min": [0, -1],
                "data.attributes.init.total": [0, -1],
                "data.attributes.hd": [0, -1],
                "data.attributes.prof": [0, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.abilities.str.dc": [0, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.abilities.dex.dc": [0, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.abilities.int.dc": [0, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.abilities.wis.dc": [0, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.abilities.cha.dc": [0, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.abilities.con.dc": [0, ACTIVE_EFFECT_MODES.CUSTOM],
                // "data.attributes.dc": [0, -1], Use bonuses.spell.dc instead
                "data.attributes.encumbrance.max": [0, -1],
                // "data.attributes.spelllevel":  0,
                // "skills.all": [false, ACTIVE_EFFECT_MODES.CUSTOM],
                "macro.execute": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "macro.itemMacro": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "data.bonuses.All-Attacks": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "data.bonuses.weapon.attack": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "data.bonuses.spell.attack": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "data.bonuses.All-Damage": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "data.bonuses.weapon.damage": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "data.bonuses.spell.damage": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.languages.all": [false, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.languages.value": ["", -1],
                "data.traits.languages.custom": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.di.all": [false, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.di.value": ["", -1],
                "data.traits.di.custom": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.dr.all": [false, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.dr.value": ["", -1],
                "data.traits.dr.custom": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.dv.all": [false, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.dv.value": ["", -1],
                "data.traits.dv.custom": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.ci.all": [false, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.ci.value": ["", -1],
                "data.traits.ci.custom": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.toolProf.all": [false, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.toolProf.value": ["", -1],
                "data.traits.toolProf.custom": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.armorProf.all": [false, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.armorProf.value": ["", -1],
                "data.traits.armorProf.custom": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.weaponProf.all": [false, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.weaponProf.value": ["", -1],
                "data.traits.weaponProf.custom": ["", ACTIVE_EFFECT_MODES.CUSTOM],
                "data.traits.size": ["", ACTIVE_EFFECT_MODES.OVERRIDE],
                "data.resources.primary.max": [0, -1],
                "data.resources.primary.label": ["", ACTIVE_EFFECT_MODES.OVERRIDE],
                "data.resources.secondary.max": [0, -1],
                "data.resources.secondary.label": ["", ACTIVE_EFFECT_MODES.OVERRIDE],
                "data.resources.tertiary.max": [0, -1],
                "data.resources.tertiary.label": ["", ACTIVE_EFFECT_MODES.OVERRIDE],
                "data.resources.legact.max": [0, -1],
                "data.resources.legres.max": [0, -1],
                "data.spells.pact.level": [0, -1],
                // "flags.midi-qol.forceCritical": [false, ACTIVE_EFFECT_MODES.CUSTOM],
                "data.bonuses.heal.damage": ["", -1],
                "data.bonuses.heal.attack": ["", -1],
                "flags.dae": ["", ACTIVE_EFFECT_MODES.CUSTOM]
            };
            /* try moving this to basevalues pass
            ["check", "save", "skill"].forEach(id => {
              specials[`data.bonuses.abilities.${id}`] = ["", ACTIVE_EFFECT_MODES.CUSTOM];
            });
            */
            ["mwak", "rwak", "msak", "rsak"].forEach(id => {
                specials[`data.bonuses.${id}.attack`] = ["", ACTIVE_EFFECT_MODES.CUSTOM];
                specials[`data.bonuses.${id}.damage`] = ["", ACTIVE_EFFECT_MODES.CUSTOM];
            });
            // move all the characteer flags to specials so that the can be custom effects only
            Object.keys(CONFIG.DND5E.characterFlags).forEach(key => {
                let theKey = `flags.dnd5e.${key}`;
                if (["flags.dnd5e.weaponCriticalThreshold",
                    "flags.d5e.spellCriticalThreshold",
                    "flags.dnd5e.meleeCriticalDamageDice"].includes(theKey)) {
                    specials[theKey] = [0, -1];
                    delete baseValues[theKey];
                }
                else
                    baseValues[theKey] = false;
            });
            // patch for missing fields
            // needs to be int and in base values since it is used in prepare derived data 
            // to calc ability spell dcs
            //TODO work out how to evaluate this to a number in prepare data - it looks like this is wrong
            baseValues["data.bonuses.spell.dc"] = 0;
            baseValues["data.spells.pact.override"] = 0;
            Object.keys(baseValues).forEach(key => {
                // can't modify all spell details.
                if (key.includes("data.spells")) {
                    delete baseValues[key];
                }
                if (key.includes("data.spells") && key.includes("override")) {
                    baseValues[key] = 0;
                }
            });
            Object.keys(specials).forEach(key => {
                delete baseValues[key];
            });
            delete baseValues["data.attributes.init.bonus"];
            delete baseValues["data.attributes.init.mod"];
            delete baseValues["flags"];
        }
        // baseSpecs are all those fields defined in template.json game.system.model and are things the user can directly change
        this.baseSpecs = Object.keys(baseValues).map(spec => {
            let validSpec = new ValidSpec(spec, baseValues[spec], -1);
            if (spec.includes("data.skills") && spec.includes("ability")) {
                validSpec.forcedMode = ACTIVE_EFFECT_MODES.OVERRIDE;
            }
            if (spec.includes("data.bonuses.abilities")) {
                validSpec.forcedMode = ACTIVE_EFFECT_MODES.CUSTOM;
            }
            this.baseSpecsObj[spec] = validSpec;
            return validSpec;
        });
        //@ts-ignore
        if (game.modules.get("tokenmagic")?.active) {
            specials["macro.tokenMagic"] = ["", ACTIVE_EFFECT_MODES.CUSTOM];
        }
        // Do the system specific part
        if (["dnd5e", "sw5e"].includes(game.system.id)) {
            // 1. abilities add mod and save to each;
            Object.keys(_characterSpec.data.abilities).forEach(ablKey => {
                let abl = _characterSpec.data.abilities[ablKey];
                this.derivedSpecs.push(new ValidSpec(`data.abilities.${ablKey}.mod`, 0));
                this.derivedSpecs.push(new ValidSpec(`data.abilities.${ablKey}.save`, 0));
                this.derivedSpecs.push(new ValidSpec(`data.abilities.${ablKey}.min`, 0));
            });
            // adjust specs for bonuses - these are strings, @fields are looked up but dice are not rolled.
            // Skills add mod, passive and bonus fields
            Object.keys(_characterSpec.data.skills).forEach(sklKey => {
                let skl = _characterSpec.data.skills[sklKey];
                this.derivedSpecs.push(new ValidSpec(`data.skills.${sklKey}.mod`, 0));
                this.derivedSpecs.push(new ValidSpec(`data.skills.${sklKey}.passive`, 0));
            });
            Object.entries(specials).forEach(special => {
                let validSpec = new ValidSpec(special[0], special[1][0], special[1][1]);
                this.derivedSpecs.push(validSpec);
            });
        }
        this.allSpecs = this.baseSpecs.concat(this.derivedSpecs);
        if (["dnd5e", "sw5e"].includes(game.system.id)) {
            // Special case for armor/hp which can depend on derived attributes - like dexterity mod or constituion mod
            // and initiative bonus depends on advantage on initiative
            this.allSpecs.forEach(m => {
                if (["attributes.hp", "attributes.ac"].includes(m._fieldSpec)) {
                    m._sampleValue = 0;
                }
            });
        }
        this.allSpecs.sort((a, b) => { return a._fieldSpec < b._fieldSpec ? -1 : 1; });
        this.baseSpecs.sort((a, b) => { return a._fieldSpec < b._fieldSpec ? -1 : 1; });
        this.derivedSpecs.sort((a, b) => { return a._fieldSpec < b._fieldSpec ? -1 : 1; });
        this.allSpecs.forEach(ms => this.allSpecsObj[ms._fieldSpec] = ms);
        this.baseSpecs.forEach(ms => this.baseSpecsObj[ms._fieldSpec] = ms);
        this.derivedSpecs.forEach(ms => this.derivedSpecsObj[ms._fieldSpec] = ms);
    }
    static localizeSpecs() {
        this.allSpecs = this.allSpecs.map(m => {
            m._label = m._label.replace("data.", "").replace("dnd5e.", "").replace(".value", "").split(".").map(str => game.i18n.localize(`dae.${str}`)).join(" ");
            return m;
        });
    }
}
ValidSpec.allSpecs = [];
ValidSpec.allSpecsObj = {};
ValidSpec.baseSpecs = [];
ValidSpec.derivedSpecsObj = {};
ValidSpec.baseSpecsObj = {};
ValidSpec.derivedSpecs = [];
// Is the item disalbed?
export function isActive(itemData) {
    // Get the dae flags from the item.
    const daeFlags = itemData.flags?.dae;
    if (!daeFlags)
        return false;
    let active = daeFlags.alwaysActive
        || (daeFlags.activeEquipped && itemData.data.equipped)
        || (itemData.data.attuned && itemData.data.equipped);
    return active;
}
function effectDisabled(actor, efData, itemData = null) {
    let disabled = efData.disabled;
    const ci = actor.data.data.traits?.ci?.value;
    const statusId = efData.flags?.core?.statusId;
    disabled = disabled || (ci && ci.includes(statusId));
    /* TODO revist this
    const alternate = statusId && daeAlternateStatus[statusId];
    disabled  = disabled || (ci && ci.includes(alternate));
    */
    // transfer effects with an origin will override default enable/disable
    //  if (efData.origin && efData.flags?.dae?.transfer) {
    if (efData.flags?.dae?.transfer) {
        if (!itemData && efData.origin) {
            let [actorType, actorId, itemType, itemId] = efData.origin.split(".");
            itemData = itemId && actor.items.get(itemId);
        }
        // for transfer effects this take priority over disabled setting
        if (itemData) {
            disabled = !isActive(itemData);
        }
    }
    // if not calcullating armor disable armor effects
    if (efData.flags.dae?.armorEffect)
        disabled = disabled || !calculateArmor;
    return disabled;
}
var oldPrepareData;
// this function replaces applyActiveEffects in Actor
function applyBaseActiveEffects() {
    applyDaeEffects.bind(this)(ValidSpec.baseSpecsObj, {}, false);
}
/*
 * Replace default appplyAffects to do value lookups
 */
function applyDaeEffects(specList, completedSpecs, allowAllSpecs) {
    const overrides = {};
    if (!this.effects || this.effects.size === 0)
        return this.overrides || {};
    // Organize non-disabled effects by their application priority
    const changes = this.effects.reduce((changes, e) => {
        // e.data.disabled = effectDisabled(this, e.data)
        if (e.data.disabled)
            return changes;
        // TODO find a solution for flags.? perhaps just a generic speclist
        return changes.concat(e.data.changes
            .filter(c => { return !completedSpecs[c.key] && (allowAllSpecs || specList[c.key] !== undefined); })
            .map(c => {
            c = duplicate(c);
            c.effect = e;
            c.priority = c.priority ?? (c.mode * 10);
            return c;
        }));
    }, []);
    changes.sort((a, b) => a.priority - b.priority);
    if (changes.length > 0)
        debug("Applying change ", this.name, changes);
    // Apply all changes
    for (let c of changes) {
        if (typeof specList[c.key]?.sampleValue === "number" && typeof c.value === "string") {
            const rollData = daeRollData(this);
            debug("appplyDaeEffects: Doing eval of ", c, c.value);
            try {
                c.value = new Roll(c.value, rollData).roll().total;
            }
            catch (err) {
                console.warn("change value calculation failed for", this, c);
                console.warn(err);
            }
            ;
        }
        const result = c.effect.apply(this, c);
        if (result !== null)
            overrides[c.key] = result;
    }
    // Expand the set of final overrides
    this.overrides = mergeObject(this.overrides || {}, expandObject(overrides) || {}, { inplace: true, overwrite: true });
}
/*
 * do custom effefct applications
 * damage resistance/immunity/vulnerabilities
 * languages
 */
function daeCustomEffect(actor, change) {
    const current = getProperty(actor.data, change.key);
    var validValues;
    var value;
    if (change.key.includes("flags.dnd5e")) {
        const value = ["1", "true"].includes(change.value);
        setProperty(actor.data, change.key, value);
        return true;
    }
    switch (change.key) {
        case "data.traits.di.all":
        case "data.traits.dr.all":
        case "data.traits.dv.all":
            const key = change.key.replace(".all", ".value");
            setProperty(actor.data, key, Object.keys(CONFIG.DND5E.damageResistanceTypes));
            return true;
        case "data.traits.di.value":
        case "data.traits.dr.value":
        case "data.traits.dv.value":
            return doCustomValue(actor, current, change, Object.keys(CONFIG.DND5E.damageResistanceTypes));
        case "data.traits.di.custom":
        case "data.traits.dr.custom":
        case "data.traits.dv.custom":
        case "data.traits.ci.custom":
        case "data.traits.languages.custom":
        case "data.traits.toolProf.custom":
        case "data.traits.armorProf.custom":
        case "data.traits.weaponProf.custom":
            value = current.concat(current.length === 0 ? `${change.value}` : `; ${change.value}`);
            setProperty(actor.data, change.key, value);
            return true;
        case "data.traits.languages.all":
            setProperty(actor.data, "data.traits.languages.value", Object.keys(CONFIG.DND5E.languages));
            return true;
        case "data.traits.languages.value":
            return doCustomValue(actor, current, change, Object.keys(CONFIG.DND5E.languages));
        case "data.traits.ci.all":
            setProperty(actor.data, "data.traits.ci.value", Object.keys(CONFIG.DND5E.conditionTypes));
            return true;
        case "data.traits.ci.value":
            return doCustomValue(actor, current, change, Object.keys(CONFIG.DND5E.conditionTypes));
        case "data.traits.toolProf.value":
            return doCustomValue(actor, current, change, Object.keys(CONFIG.DND5E.toolProficiencies));
        case "data.traits.toolProf.all":
            setProperty(actor.data, "data.traits.toolProf.value", Object.keys(CONFIG.DND5E.toolProficiencies));
            return true;
        case "data.traits.armorProf.value":
            return doCustomValue(actor, current, change, Object.keys(CONFIG.DND5E.armorProficiencies));
        case "data.traits.armorProf.all":
            setProperty(actor.data, "data.traits.armorProf.value", Object.keys(CONFIG.DND5E.armorProficiencies));
            return true;
        case "data.traits.weaponProf.value":
            return doCustomValue(actor, current, change, Object.keys(CONFIG.DND5E.weaponProficiencies));
        case "data.traits.weaponProf.all":
            setProperty(actor.data, "data.traits.weaponProf.value", Object.keys(CONFIG.DND5E.weaponProficiencies));
            return true;
        case "data.bonuses.All-Attacks":
            value = attackDamageBonusEval(change.value, actor);
            value = (change.value.startsWith("+") || change.value.startsWith("-")) ? value : "+" + value;
            ["mwak", "rwak", "msak", "rsak"].forEach(atType => actor.data.data.bonuses[atType].attack += value);
            return true;
        case "data.bonuses.spell.attack":
            value = attackDamageBonusEval(change.value, actor);
            value = (change.value.startsWith("+") || change.value.startsWith("-")) ? value : "+" + value;
            ["msak", "rsak"].forEach(atType => actor.data.data.bonuses[atType].attack += value);
            return true;
        case "data.bonuses.weapon.attacks":
            value = attackDamageBonusEval(change.value, actor);
            value = (change.value.startsWith("+") || change.value.startsWith("-")) ? value : "+" + value;
            ["mwak", "rwak"].forEach(atType => actor.data.data.bonuses[atType].attack += value);
            return true;
        case "data.bonuses.All-Damage":
            value = attackDamageBonusEval(change.value, actor);
            value = (change.value.startsWith("+") || change.value.startsWith("-")) ? value : "+" + value;
            ["mwak", "rwak", "msak", "rsak"].forEach(atType => actor.data.data.bonuses[atType].damage += value);
            return true;
        case "data.bonuses.weapon.damage":
            value = attackDamageBonusEval(change.value, actor);
            value = (change.value.startsWith("+") || change.value.startsWith("-")) ? value : "+" + value;
            ["mwak", "rwak"].forEach(atType => actor.data.data.bonuses[atType].damage += value);
            return true;
        case "data.bonuses.spell.damage":
            value = attackDamageBonusEval(change.value, actor);
            value = (change.value.startsWith("+") || change.value.startsWith("-")) ? value : "+" + value;
            ["msak", "rsak"].forEach(atType => actor.data.data.bonuses[atType].damage += value);
            return true;
        case "data.bonuses.mwak.attack":
        case "data.bonuses.mwak.damage":
        case "data.bonuses.rwak.attack":
        case "data.bonuses.rwak.damage":
        case "data.bonuses.msak.attack":
        case "data.bonuses.msak.damage":
        case "data.bonuses.rsak.attack":
        case "data.bonuses.rsak.damage":
        case "data.bonuses.abilities.save":
        case "data.bonuses.abilities.check":
        case "data.bonuses.abilities.skill":
            // TODO: remove if fixed in core
            const result = attackDamageBonusEval(change.value, actor);
            value = (result.startsWith("+") || result.startsWith("-")) ? result : "+" + result;
            setProperty(actor.data, change.key, current + value);
            return true;
        case "data.abilities.str.dc":
        case "data.abilities.dex.dc":
        case "data.abilities.int.dc":
        case "data.abilities.wis.dc":
        case "data.abilities.cha.dc":
        case "data.abilities.con.dc":
            //@ts-ignore
            value = Number.isNumeric(change.value) ? parseInt(change.value) : 0;
            if (value) {
                setProperty(actor.data, change.key, current + value);
            }
            actor._computeSpellcastingDC(actor.data);
            return true;
        case "data.attributes.prof":
            // update data.attributes.prof
            //@ts-ignore
            if (!Number.isNumeric(change.value)) {
                ui.notifications.warn("Changes to proficiency must be numeric");
                return true;
            }
            const actorData = actor.data;
            const data = actorData.data;
            value = parseInt(change.value);
            data.attributes.prof += value;
            // update ability mods/saves if proficient
            //@ts-ignore
            const dcBonus = Number.isNumeric(data.bonuses.spell.dc) ? parseInt(data.bonuses.spell.dc) : 0;
            for (let [id, abl] of Object.entries(data.abilities)) {
                //@ts-ignore
                abl.prof += (abl.proficient || 0) * value;
                //@ts-ignore
                abl.save += (abl.proficient || 0) * value;
                //@ts-ignore
                abl.dc += value;
            }
            // update spell dcs
            actor._computeSpellcastingDC(actor.data);
            const bonuses = getProperty(data, "bonuses.abilities") || {};
            if (actor.data.type === "vehicle")
                return true;
            // update skills if proficient
            const flags = actorData.flags.dnd5e || {};
            const feats = CONFIG.DND5E.characterFlags;
            const athlete = flags.remarkableAthlete;
            const joat = flags.jackOfAllTrades;
            let round = Math.floor;
            let add = 0.5;
            for (let [id, skl] of Object.entries(data.skills)) {
                //@ts-ignore
                let sklValue = parseFloat(skl.value || 0);
                // Apply Remarkable Athlete or Jack of all Trades
                let multi = sklValue;
                //@ts-ignore
                if (athlete && (sklValue === 0) && feats.remarkableAthlete.abilities.includes(skl.ability)) {
                    multi = 0.5;
                    round = Math.ceil;
                    add = 0.5;
                }
                if (joat && (sklValue === 0))
                    multi = 0.5;
                // Compute updated skill value
                //@ts-ignore
                skl.total = round(skl.total + multi * value + add);
                //@ts-ignore
                skl.prof = round(skl.prof + multi * value + add);
                // Compute passive bonus
                //@ts-ignore
                skl.passive = round(skl.passive + multi * value + add);
            }
            return true;
        case "flags.dae":
            let list = change.value.split(" ");
            setProperty(actor.data, `flags.dae.${list[0]}`, list.splice(1).join(" "));
            return true;
    }
}
// Special case handling of (expr)dX
function attackDamageBonusEval(bonusString, actor) {
    if (typeof bonusString === "string") {
        const special = bonusString.match(/\((.*)\)d([0-9]*)/);
        if (special && special.length === 3) {
            try {
                return new Roll(special[1], daeRollData(actor)).roll().total + "d" + special[2];
            }
            catch (err) {
                console.warn(`DAE eval error for: ${special[1]} in actor ${actor.name}`);
                return bonusString;
            }
        }
    }
    return `${bonusString}`;
}
function doCustomValue(actor, current, change, validValues) {
    if ((current || []).includes(change.value))
        return true;
    if (!validValues.includes(change.value))
        return true;
    setProperty(actor.data, change.key, current.concat([change.value]));
    return true;
}
/*
* replace the default actor prepareData
* call applyDaeEffects
* add an additional pass after derivfed data
*/
function prepareData() {
    debug("prepare data: before passes", this.name, this._data);
    oldPrepareData.bind(this)();
    if (["dnd5e", "sw5e"].includes(game.system.id)) {
        if (applyBaseAC && this.data.type === "character" && !this.data.flags.dnd5e?.isPolymorphed) {
            this.data.data.attributes.ac.value = 10 + Number(this.data.data.abilities.dex.mod);
        }
    }
    applyDaeEffects.bind(this)(ValidSpec.derivedSpecsObj, ValidSpec.baseSpecsObj, true);
    debug("prepare data: after passes", this.data);
}
export function daeCreateActiveEffectActions(actor, effects) {
    daeMacro(true, actor, effects);
    daeTokenMagic(true, actor, effects);
}
export function daeDeleteActiveEffectActions(actor, effects) {
    if (actor.__proto__.constructor.name !== CONFIG.Actor.entityClass.name)
        return;
    if (!Array.isArray(effects))
        effects = [effects];
    effects.forEach(effect => {
        if (!effect.transfer)
            return; //TODO find out why this is here
    });
    daeMacro(false, actor, effects);
    daeTokenMagic(false, actor, effects);
}
function daeUpdateActiveEffectActions(...args) {
    //consider toggling according to isactive
}
async function daeMacro(enable, actor, effects) {
    if (actor.__proto__.constructor.name === CONFIG.Item.entityClass.name)
        return;
    debug("dae macro ", enable, actor, effects);
    if (!Array.isArray(effects))
        effects = [effects];
    effects.forEach(async (effect) => {
        let item = (effect.origin && await fromUuid(effect.origin)) || null;
        effect.changes?.forEach(async (change) => {
            if (!["macro.execute", "macro.itemMacro"].includes(change.key))
                return;
            if (typeof change.value === "string") { //args have not been evaled yet
                let rollData = daeRollData(actor);
                change.value = evalArgs.bind(item)({ context: rollData, actor, change, doRolls: true });
            }
            if (change.key === "macro.execute") {
                const macro = game.macros.getName(change.value[0]);
                if (!macro) {
                    console.error(`No macro ${change.value[0]} found`);
                    //TODO localize this
                    ui.notifications.warn(`No macro ${change.value[0]} found`);
                }
                if (furnaceActive) {
                    //@ts-ignore
                    await macro.execute(enable ? "on" : "off", ...duplicate(change.value).splice(1));
                }
                else {
                    console.warn("Furnace not active - so no macro arguments supported");
                    await macro.execute();
                }
            }
            else if (change.key === "macro.itemMacro") {
                let macroCommand = change.value[0]; // this is populated in evalArgs
                // macroCommand = `ChatMessage.create({content: "Item macro for ${itemData.name} called"})\n` + macroCommand;
                if (!macroCommand) {
                    macroCommand = `ChatMessage.create({content: "No Item Macro for ${item?.name}"})`;
                    return;
                }
                let macro = await CONFIG.Macro.entityClass.create({
                    name: "DAE-Item-Macro",
                    type: "script",
                    img: null,
                    command: macroCommand,
                    flags: { "dnd5e.itemMacro": true }
                }, { displaySheet: false, temporary: true });
                if (furnaceActive) {
                    await macro.execute(enable ? "on" : "off", ...duplicate(change.value).splice(1));
                }
                else {
                    console.warn("Furnace not active - so no macro arguments supported");
                    await macro.execute();
                }
            }
        });
    });
    return true;
}
function daeTokenMagic(enable, actor, effects) {
    // TODO lookup enabled from the item.isActive
    if (actor.__proto__.constructor.name !== CONFIG.Actor.entityClass.name)
        return;
    debug("dae token magic ", actor, effects, enable);
    if (!Array.isArray(effects))
        effects = [effects];
    effects.forEach(effect => {
        effect.changes?.forEach(change => {
            if (change.key === "macro.tokenMagic") {
                let tokens = [actor.token];
                if (!actor.token)
                    tokens = actor.getActiveTokens();
                //@ts-ignore
                let tokenMagic = window.TokenMagic;
                tokens.forEach(token => {
                    if (tokenMagic && token && enable) {
                        tokenMagic.addFilters(token, change.value);
                    }
                    else if (tokenMagic && token && !enable) {
                        tokenMagic.deleteFilters(token, change.value);
                    }
                });
            }
        });
    });
}
function daeRollData(actor) {
    let rollData = actor.getRollData();
    rollData.data = rollData;
    rollData.flags = actor.flags;
    return rollData;
}
function evalArgs({ context, actor, change, spellLevel = 0, damageTotal = 0, doRolls = false, critical = false, fumble = false, whisper = false, itemCardId = null }) {
    //@ts-ignore
    let filteredChanges = [];
    //@ts-ignore effects not defined
    let fields = [];
    let value;
    switch (change.key) {
        case "macro.itemMacro":
        case "macro.execute":
            tokenizer.tokenize(change.value, (token) => fields.push(token));
            fields = fields.map(f => {
                if (f === "@scene")
                    return canvas.scene.id;
                else if (f === "@token")
                    return ChatMessage.getSpeaker().token;
                else if (f === "@item")
                    return this?.data;
                else if (f === "@spellLevel")
                    return spellLevel;
                else if (f === "@item.level")
                    return spellLevel;
                else if (f === "@damage")
                    return damageTotal;
                else if (f === "@target")
                    return "@target";
                else if (f === "@itemCardId")
                    return itemCardId;
                else if (f === "@unique")
                    return randomID();
                else if (f === "@actor")
                    return actor.data;
                else if (f === "@critical")
                    return critical;
                else if (f === "@fumble")
                    return fumble;
                else if (f === "@whisper")
                    return whisper;
                else if (typeof f === "string" && f.startsWith("@")) {
                    return getProperty(context, f.slice(1));
                }
                else
                    return f;
            });
            if (change.key === "macro.itemMacro") {
                let macroCommand = this?.data?.flags?.itemacro?.macro?.data.command || 'console.warn("No macro defined for item")';
                value = [macroCommand].concat(fields);
            }
            else
                value = fields;
            break;
        default:
            tokenizer.tokenize(`${change.value}`, (token) => fields.push(token));
            fields = fields.map(f => {
                if (f === "@scene")
                    return canvas.scene.id;
                else if (f === "@token")
                    return ChatMessage.getSpeaker().token;
                else if (f === "@item")
                    return this?.data;
                else if (f === "@spellLevel")
                    return spellLevel;
                else if (f === "@item.level")
                    return spellLevel;
                else if (f === "@damage")
                    return damageTotal;
                else if (f === "@target")
                    return "<not-defined>";
                else if (f === "@unique")
                    return randomID();
                else if (f === "@actor")
                    return actor.id;
                else if (doRolls && typeof f === "string" && f.startsWith("@")) {
                    return getProperty(context, f.slice(1));
                }
                else
                    return f;
            });
            change.value = fields.join("");
            // context.actor = actor.data;
            if (doRolls && typeof ValidSpec.allSpecsObj[change.key]?.sampleValue === "number") {
                value = new Roll(change.value, context).roll().total;
            }
            else
                value = change.value;
            break;
    }
    ;
    debug("evalargs: change is ", change);
    return value;
}
/*
 * appply non-transfer effects to target tokens - provided for backwards compat
 */
export function doEffects(item, activate, targets = undefined, { whisper = false, spellLevel = 0, damageTotal = null, itemCardId = null, critical = false, fumble = false }) {
    applyNonTransferEffects.bind(item)(activate, targets, { whisper, spellLevel, damageTotal, itemCardId, critical, fumble });
}
// Apply non-transfer effects to targets.
// macro arguments are evaluated in the context of the actor applying to the targets
// @target is left unevaluated.
// request is passed to a GM client if the token is not owned
export function applyNonTransferEffects(activate, targets, { whisper = false, spellLevel = 0, damageTotal = null, itemCardId = null, critical = false, fumble = false }) {
    if (!targets)
        return;
    let appliedEffects = duplicate(this.data.effects.filter(aeData => aeData.transfer === false));
    if (appliedEffects.length === 0)
        return;
    const rollData = daeRollData(this.actor); //TODO if not caster eval move to evalArgs call
    appliedEffects.forEach(activeEffectData => {
        activeEffectData.changes.forEach(change => {
            let doRolls = (["macro.execute", "macro.itemMacro"].includes(change.key));
            // eval args before calling GMAction so macro arguments are evaled in the casting context.
            // Any @fields for macros are looked up in actor context and left unchanged otherwise
            change.value = evalArgs.bind(this)({ context: rollData, actor: this.actor, change, spellLevel, damageTotal, doRolls, critical, fumble, itemCardId, whisper });
        });
        activeEffectData.origin = this.uuid;
        activeEffectData.duration.startTime = game.time.worldTime;
        activeEffectData.transfer = false;
        activeEffectData.disabled = false;
    });
    // Split up targets according to whether they are owned on not. Owned targets have effects applied locally, only unowned are passed ot the GM
    const targetList = Array.from(targets);
    //@ts-ignore
    let ownedTargets = targetList.filter(t => t.actor?.permission === 3).map(t => typeof t === "string" ? t : t.id);
    //@ts-ignore
    let unOwnedTargets = targetList.filter(t => t.actor?.permission !== 3).map(t => typeof t === "string" ? t : t.id);
    ;
    debug("About to call gmaction ", activate, appliedEffects, targets, ownedTargets, unOwnedTargets);
    requestGMAction(GMAction.actions.applyActiveEffects, { activate, activeEffects: appliedEffects, targets: unOwnedTargets, itemDuration: this.data.data.duration, itemCardId });
    applyActiveEffects(activate, ownedTargets, appliedEffects, this.data.data.duration, itemCardId);
}
// Update the actor active effects when editing an owned item
function ownedItemUpdate(actor, ownedItem, updates) {
    const updatedItem = mergeObject(ownedItem, updates, { overwrite: true, inplace: false });
    if (updates.effects) {
        let additions = updatedItem.effects;
        additions = additions.filter(ef => ef.transfer) || [];
        debug("additions post filter are ", updates.effects, additions);
        const itemUuid = actor.items.get(ownedItem._id).uuid;
        let deletions = actor.effects.filter(aef => {
            const isTransfer = aef.data.flags?.dae?.transfer || aef.data.transfer === undefined;
            return isTransfer && (aef.data.origin === itemUuid);
        });
        deletions = deletions.map(ef => ef.id || ef._id);
        const origin = `Actor.${actor.id}.OwnedItem.${updates._id}`;
        additions.forEach(efData => {
            efData.disabled = effectDisabled(actor, efData, updatedItem);
            efData.origin = origin;
        });
        debug("owneditemupdate ", additions, deletions);
        //TODO: change this so we can do an updateEmbeddedEntitty.
        // It does require matching the active effect ids to the source item
        if (deletions.length > 0) {
            actor.deleteEmbeddedEntity("ActiveEffect", deletions).then(() => {
                if (additions.length > 0)
                    actor.createEmbeddedEntity("ActiveEffect", additions);
            });
        }
        else if (additions.length > 0) {
            actor.createEmbeddedEntity("ActiveEffect", additions);
        }
    }
    else {
        const origin = `Actor.${actor.id}.OwnedItem.${updates._id}`;
        let effects = actor.effects.filter(aef => {
            let isTransfer = aef.data.flags?.dae?.transfer || aef.data.transfer === undefined;
            return (aef.data.origin === origin) && isTransfer;
        }).map(aef => {
            const data = duplicate(aef.data);
            data.disabled = effectDisabled(actor, aef.data, updatedItem);
            return data;
        });
        if (effects.length > 0)
            actor.updateEmbeddedEntity("ActiveEffect", effects);
    }
    return true;
}
export function updateArmorEffect(actor, itemData, updateData, ...args) {
    if (updateData.data?.armor) {
        // Armor value has been changed so recrreate owned item and actor effects
        let theEffects = duplicate(itemData.effects?.filter(efData => !efData.flags?.dae?.armorEffect)) || [];
        let existingEffect = duplicate(itemData.effects?.find(efData => efData.flags?.dae?.armorEffect) || {});
        const origin = `Actor.${actor.id}.OwnedItem.${itemData._id}`;
        // const origin = actor.items.get(itemData._id)
        let armorEffect = generateArmorEffect(itemData, origin, mergeObject(itemData.data.armor, updateData.data.armor, { overwrite: true }));
        let newEffect = mergeObject(existingEffect, armorEffect, { overwrite: true, inplace: true, insertKeys: true, insertValues: true });
        if (!newEffect.duration)
            newEffect.duration = { startTime: game.time.worldTime };
        theEffects.push(newEffect);
        updateData.effects = theEffects;
        // Since this runs in the preUpdateOwneditem chain just modifyiing the update data is enough
    }
    return true;
}
export function ownedItemCreate(actor, itemData) {
    // create armor effects if required
    createArmorEffect(actor, itemData);
    // set the disabled/enabled flag
    for (let i = 0; i < itemData.effects?.length || 0; i++) {
        itemData.effects[i].disabled = effectDisabled(actor, itemData.effects[i], itemData);
    }
    ;
    return true;
}
export function createArmorEffect(actor, itemData) {
    if (!itemData.effects && itemData.data.effects)
        itemData = itemData.data;
    if (!calculateArmor || itemData.type !== "equipment")
        return true;
    // armor created on actor, screae armor effect.
    const origin = `Actor.${actor.id}.OwnedItem.${itemData._id}`;
    // const origin = actor.items.get(itemData._id).uuid;
    itemData.effects = itemData.effects?.filter(efData => !efData.flags.dae?.armorEffect) || [];
    switch (itemData.data.armor.type) {
        case "natural":
            setProperty(itemData, "flags.dae.alwaysActive", true);
            //@ts-ignore
            itemData.effects.push(generateArmorEffect(itemData, origin, itemData.data.armor));
            break;
        case "shield":
        case "light":
        case "medium":
        case "heavy":
            setProperty(itemData, "flags.dae.activeEquipped", true);
            itemData.effects.push(generateArmorEffect(itemData, origin, itemData.data.armor));
            break;
        default:
            break;
    }
    return true;
}
export function generateArmorEffect(itemData, origin, armorData) {
    switch (armorData.type) {
        case "shield":
            //@ts-ignore
            let ae = armorEffectFromFormula(`${armorData.value}`, CONST.ACTIVE_EFFECT_MODES.ADD, itemData, origin);
            ae.changes.forEach(c => c.priority = 7);
            return ae;
        case "natural":
            //@ts-ignore
            return armorEffectFromFormula(`@abilities.dex.mod + ${armorData.value}`, CONST.ACTIVE_EFFECT_MODES.OVERRIDE, itemData, origin);
        case "light":
            //@ts-ignore
            return armorEffectFromFormula(`@abilities.dex.mod > ${armorData.dex || 99} ? ${armorData.dex || 99} + ${armorData.value} : @abilities.dex.mod + ${armorData.value}`, CONST.ACTIVE_EFFECT_MODES.OVERRIDE, itemData, origin);
        case "medium":
            //@ts-ignore
            return armorEffectFromFormula(`@abilities.dex.mod > ${armorData.dex || 2} ? ${armorData.dex || 2} + ${armorData.value}: @abilities.dex.mod + ${armorData.value}`, CONST.ACTIVE_EFFECT_MODES.OVERRIDE, itemData, origin);
        case "heavy":
            //@ts-ignore
            return armorEffectFromFormula(`${armorData.value}`, CONST.ACTIVE_EFFECT_MODES.OVERRIDE, itemData, origin);
        default:
            return null;
            break;
    }
}
function armorEffectFromFormula(formula, mode, itemData, origin) {
    let label = `AC${itemData.data.armor.type === "shield" ? "+" : "="}${itemData.data.armor.value}`;
    if (["light", "medium"].includes(itemData.data.armor.type))
        label += "+dex.mod";
    return {
        label,
        icon: itemData.img,
        changes: [
            {
                key: "data.attributes.ac.value",
                value: formula,
                mode,
                priority: 4
            },
        ],
        transfer: true,
        origin,
        flags: { dae: { transfer: true, armorEffect: true } }
    };
}
export function daeReadyActions() {
    ValidSpec.localizeSpecs();
    // initSheetTab();
    //@ts-ignore
    aboutTimeInstalled = game.modules.get("about-time")?.active;
    timesUpInstalled = game.modules.get("times-up")?.active;
}
export function localDeleteFilters(tokenId, filterName) {
    //@ts-ignore
    let tokenMagic = window.TokenMagic;
    let token = canvas.tokens.get(tokenId);
    tokenMagic.deleteFilters(token, filterName);
}
export var tokenizer;
export function daeInitActions() {
    if (["dnd5e", "sw5e"].includes(game.system.id)) {
        acAffectingArmorTypes = ["light", "medium", "heavy", "bonus", "natural", "shield"];
    }
    ValidSpec.createValidMods();
    // We will call this in prepareData
    oldPrepareData = CONFIG.Actor.entityClass.prototype.prepareData;
    CONFIG.Actor.entityClass.prototype.prepareData = prepareData;
    // replace the default applyActiveEffects with the dae one so that prepareData will call us
    // Adds some extra field maniuplations and supports lookups
    //@ts-ignore
    CONFIG.Actor.entityClass.prototype.applyActiveEffects = applyBaseActiveEffects;
    // This supplies DAE custom effects
    Hooks.on("applyActiveEffect", daeCustomEffect);
    // Updating an owned item - first update any actor effects
    Hooks.on("preUpdateOwnedItem", updateArmorEffect);
    // If updating effects recreate actor effects for updated item.
    // Toggle equip active as well
    Hooks.on("preUpdateOwnedItem", ownedItemUpdate);
    // Do any create effects, .e.g. enabled/disaabled, armor
    Hooks.on("preCreateOwnedItem", ownedItemCreate);
    // macros are called on active effect creationg and deletion
    Hooks.on("preCreateActiveEffect", daeCreateActiveEffectActions);
    Hooks.on("preDeleteActiveEffect", daeDeleteActiveEffectActions);
    // Hooks.on("preUpdateOwnedItem", daeUpdateActiveEffectActions) //consider on/off for enable/disable
    // Add the active effects title bar actions
    Hooks.on('renderActorSheet', initActorSheetHook);
    Hooks.on('renderItemSheet', initItemSheetHook);
    //@ts-ignore
    tokenizer = new DETokenizeThis({
        shouldTokenize: ['(', ')', ',', '*', '/', '%', '+', '=', '!=', '!', '<', '> ', '<=', '>=', '^']
    });
}
function initActorSheetHook(app, html, data) {
    let title = game.i18n.localize('dae.ActiveEffectName');
    let openBtn = $(`<a class="open-actor-effect" title="${title}"><i class="fas fa-clipboard"></i>${title}</a>`);
    openBtn.click(ev => {
        new ActiveEffects(app.entity, {}).render(true);
    });
    html.closest('.app').find('.open-actor-effect').remove();
    let titleElement = html.closest('.app').find('.window-title');
    if (!app._minimized)
        openBtn.insertAfter(titleElement);
}
function initItemSheetHook(app, html, data) {
    // if (app.entity.isOwned) return;
    let title = game.i18n.localize('dae.ActiveEffectName');
    let openBtn = $(`<a class="open-item-effect" title="${title}"><i class="fas fa-clipboard"></i>${title}</a>`);
    openBtn.click(ev => {
        new ActiveEffects(app.entity, {}).render(true);
    });
    html.closest('.app').find('.open-item-effect').remove();
    let titleElement = html.closest('.app').find('.window-title');
    openBtn.insertAfter(titleElement);
}
export function daeSetupActions() {
    //@ts-ignore
    cubActive = game.modules.get("combat-utility-belt")?.active;
    //@ts-ignore
    debug("Combat utility belt active ", cubActive, " and cub version is ", game.modules.get("combat-utility-belt")?.data.version);
    //@ts-ignore
    if (cubActive && !isNewerVersion(game.modules.get("combat-utility-belt")?.data.version, "1.1.2")) {
        ui.notifications.warn("Combat Utility Belt needs to be version 1.1.3 or later - conditions disabled");
        console.warn("Combat Utility Belt needs to be version 1.1.3 or later - conditions disabled");
        cubActive = false;
    }
    else if (cubActive) {
        debug("dae | Combat Utility Belt active and conditions enabled");
    }
    //@ts-ignore
    itemacroActive = game.modules.get("itemacro")?.active;
    furnaceActive = game.modules.get("furnace")?.active;
}
export function fetchParams() {
    requireItemTarget = game.settings.get("dae", "requireItemTarget");
    playersCanSeeEffects = game.settings.get("dae", "playersCanSeeEffects");
    calculateArmor = game.settings.get("dae", "calculateArmor");
    applyBaseAC = game.settings.get("dae", "applyBaseAC");
    debugEnabled = setDebugLevel(game.settings.get("dae", "ZZDebug"));
    useAbilitySave = game.settings.get("dae", "useAbilitySave");
    confirmDelete = game.settings.get("dae", "confirmDelete");
    ehnanceStatusEffects = game.settings.get("dae", "ehnanceStatusEffects");
    procStatusEffects(ehnanceStatusEffects);
    let useDAESheet = game.settings.get("dae", "useDAESheet");
    if (useDAESheet) {
        CONFIG.ActiveEffect.sheetClass = DAEActiveEffectConfig;
    }
    else {
        CONFIG.ActiveEffect.sheetClass = ActiveEffectConfig;
    }
}
