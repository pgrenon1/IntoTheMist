var _0x5221=['fa-atom','Feature/Spell\x20Cleaner','_TOOL_LIST','Import','fa-check-square','minimumRole','fa-shopping-cart','_HOOK_NAME','pop__mnu-btn-open','get','plutonium-actor-title-menu','Pop\x20Out','_EVT_NAMESPACE','Plutonium\x20Import','fa-paw','StartingEquipment'];(function(_0x44c50e,_0x5221bd){var _0x40f2db=function(_0x304680){while(--_0x304680){_0x44c50e['push'](_0x44c50e['shift']());}};_0x40f2db(++_0x5221bd);}(_0x5221,0x124));var _0x40f2=function(_0x44c50e,_0x5221bd){_0x44c50e=_0x44c50e-0x0;var _0x40f2db=_0x5221[_0x44c50e];return _0x40f2db;};var _0x1f535f=_0x40f2;'use strict';import{MenuTitle}from'./MenuTitle.js';import{ChooseImporter}from'./ChooseImporter.js';import{PopoutSheet}from'./PopoutSheet.js';import{ActorItemCleaner}from'./ActorItemCleaner.js';import{ActorSpellPreparedToggler}from'./ActorSpellPreparedToggler.js';import{ActorPolymorpher}from'./ActorPolymorpher.js';import{ImportListCharacter}from'./ImportListCharacter.js';import{ActorCharactermancerSourceSelector}from'./ActorCharactermancer.js';import{Config}from'./Config.js';class MenuTitleActor extends MenuTitle{}MenuTitleActor[_0x1f535f('0x3')]='renderActorSheet',MenuTitleActor[_0x1f535f('0x8')]=_0x1f535f('0x6'),MenuTitleActor[_0x1f535f('0xe')]=[{'name':_0x1f535f('0x9'),'streamerName':_0x1f535f('0xf'),'Class':ChooseImporter,'iconClass':_0x1f535f('0xc'),'getMinRole':()=>Config[_0x1f535f('0x5')]('import',_0x1f535f('0x1'))},{'name':'Equipment\x20Shop','Class':ImportListCharacter[_0x1f535f('0xb')],'iconClass':_0x1f535f('0x2')},{'name':'Polymorpher','Class':ActorPolymorpher,'iconClass':_0x1f535f('0xa')},{'name':_0x1f535f('0xd'),'Class':ActorItemCleaner,'iconClass':'fa-trash-alt'},{'name':'Prepared\x20Spell\x20Mass-Toggler','Class':ActorSpellPreparedToggler,'iconClass':_0x1f535f('0x0')},{'name':_0x1f535f('0x7'),'Class':PopoutSheet,'iconClass':'fa-external-link-alt','additionalClassesButton':_0x1f535f('0x4'),'additionalClassesPreSpacer':_0x1f535f('0x4')}];export{MenuTitleActor};