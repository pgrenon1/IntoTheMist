const _0x3006=['stealth','halfling','type','navg','conditionTypes','common','data','fa-check','insight','</div>','auran','Choose\x20Additional\x20Spell\x20Set','preparationMode','items','localize','Unhandled\x20additional\x20spell\x20data\x20prop\x20\x22','con','history','details','fa-check-double','deep','languages','push','description','intimidation','actorSpellPreparationMode','arcana','level','pAddActorItems','useSpell','game','ability','enc','gnomish','shiftKey','cant','VET_SIZE_TO_ABV','getTrackedAttributes','<div>','disguise\x20kit','performance','goblin','flat','forgery\x20kit','vehicles\x20(water)','max','disg','abilities','_pFillItemArrayAdditionalSpells_isObjectInLevelRange','athletics','TOKEN.BarAttributes','gaming\x20set','orc','primordial','draconic','artisan\x27s\x20tools','_VALID_LANGUAGES','getMappedLanguage','sourceHintText','getActorSpellItemOpts','abilityAbv','prepared','navigator\x27s\x20tools','art','pGetSpellHashToItemPosMapAndFillSpellsFromTagIds','CASTER_TYPE_TO_PROGRESSION','med','SKILL_ABV_TO_FULL','toSpellCase','ill','investigation','thieves\x27\x20tools','_pFillItemArrayAdditionalSpells_getSpellsInLevelRange','_VET_CASTER_TYPE_TO_FVTT','aquan','huge','prepareActorSpells','undercommon','ignan','TOKEN.BarValues','prepareSpellItems','class','get','trs','bar','aarakocra','third','PROF_TO_ICON_CLASS','infernal','thief','maxLevel','keys','values','innate','replace','filter','abyssal','tiny','religion','hashToIdMap','...','createEmbeddedEntity','alchemist\x27s\x20supplies','music','casterLevel','fa-adjust','getMappedTool','spellcasting','join','VALID_LANGUAGES','acrobatics','DND5E','entries','_VALID_TOOL_PROFICIENCIES','sort','forEach','localeCompare','MAX_SAFE_INTEGER','roll','split','spellItemPreparationMode','name','isFinite','importSpell','toLowerCase','value','minLevel','VALID_CONDITIONS','herbalism\x20kit','i18n','damageTypes','full','map','div','druidic','pois','getOwnedItem','sleight\x20of\x20hand','grg','includes','elvish','length','gnoll','getMappedCasterType','gith','getAbilityScore','half','animal\x20handling','VALID_DAMAGE_TYPES','giant','getCasterLevel','_TOOL_PROFICIENCIES','pFillItemArrayAdditionalSpells','getModelBarAttributes','evo','VET_SPELL_SCHOOL_TO_ABV','uppercaseFirst','trim'];(function(_0xe4dd8d,_0x300618){const _0x556971=function(_0x5e2b7e){while(--_0x5e2b7e){_0xe4dd8d['push'](_0xe4dd8d['shift']());}};_0x556971(++_0x300618);}(_0x3006,0x1b1));const _0x5569=function(_0xe4dd8d,_0x300618){_0xe4dd8d=_0xe4dd8d-0x0;let _0x556971=_0x3006[_0xe4dd8d];return _0x556971;};const _0x457c87=_0x5569;'use strict';import{Config}from'./Config.js';import{DataConverterSpell}from'./DataConverterSpell.js';import{Consts}from'./Consts.js';class UtilActors{static['init'](){const _0x19201c=_0x5569;UtilActors[_0x19201c('0x96')]=Object[_0x19201c('0x84')](MiscUtil[_0x19201c('0x7b')](CONFIG,_0x19201c('0x98'),_0x19201c('0x3e'))||{}),UtilActors[_0x19201c('0x1f')]=Object['keys'](MiscUtil[_0x19201c('0x7b')](CONFIG,_0x19201c('0x98'),_0x19201c('0xd'))||{}),UtilActors[_0x19201c('0xa')]=Object[_0x19201c('0x84')](MiscUtil[_0x19201c('0x7b')](CONFIG,_0x19201c('0x98'),_0x19201c('0x2d'))||{});}static['doShowSheetItem'](_0x5e2b7e,_0x459044,_0x5476fc){const _0x204820=_0x5569,_0xf9df04=Actor['collection'][_0x204820('0x7b')](_0x459044);if(!_0xf9df04)return;const _0xe6f38f=_0xf9df04[_0x204820('0x13')](_0x5476fc);if(!_0xe6f38f)return;if(_0xe6f38f['data'][_0x204820('0x2b')]==='spell')return _0xf9df04[_0x204820('0x46')](_0xe6f38f,{'configureDialog':!_0x5e2b7e[_0x204820('0x4b')]});else return _0xe6f38f[_0x204820('0x1')]();}static[_0x457c87('0x21')](_0x2cda5b){const _0x4dded4=_0x457c87,_0x2d6e77=MiscUtil['get'](_0x2cda5b,_0x4dded4('0x2f'),_0x4dded4('0x36'));if(!_0x2d6e77)return 0x0;return Math[_0x4dded4('0x56')](0x0,..._0x2d6e77[_0x4dded4('0xf')](_0x9be393=>{const _0x11fe00=_0x4dded4;if(_0x9be393['name']&&_0x9be393[_0x11fe00('0x4')][_0x11fe00('0x7')]()[_0x11fe00('0x16')]('spellcasting')){const _0x3b105e=MiscUtil['get'](_0x9be393,_0x11fe00('0x2f'),_0x11fe00('0x40'));if(_0x3b105e){let _0x40db88=_0x3b105e[_0x11fe00('0x8')]||'';try{_0x40db88=$(_0x11fe00('0x4f')+_0x40db88+_0x11fe00('0x32'))['text']();}catch(_0x3140cb){console['warn']('Failed\x20to\x20parse\x20spellcasting\x20description\x20as\x20HTML!');}_0x40db88=_0x40db88['trim']();if(!_0x40db88)return 0x0;let _0x34f048=0x0;return _0x40db88[_0x11fe00('0x87')](/an? (\d+)[A-Za-z]+-level/i,(..._0x8996bf)=>{const _0x11b96c=Number(_0x8996bf[0x1]);if(!isNaN(_0x11b96c))_0x34f048=_0x11b96c;}),_0x34f048;}}else return 0x0;})[_0x4dded4('0x88')](Boolean));}static[_0x457c87('0x1c')](_0x2ba6e0,_0x5ae9a8){const _0x9cf359=_0x457c87,_0x1bdb86=MiscUtil['get'](_0x2ba6e0,_0x9cf359('0x2f'),'data',_0x9cf359('0x58'),_0x5ae9a8,_0x9cf359('0x8'));return _0x1bdb86==null||isNaN(_0x1bdb86)?0xa:Number(_0x1bdb86);}static[_0x457c87('0x64')](_0x1964fa){const _0x248a5b=_0x457c87,_0xb54544={'isPrepared':!!Config['get'](_0x248a5b('0x6'),_0x248a5b('0x75')),'preparationMode':Config[_0x248a5b('0x7b')](_0x248a5b('0x6'),_0x248a5b('0x42'))};if(!_0x1964fa||MiscUtil['get'](_0x1964fa,_0x248a5b('0x2f'),_0x248a5b('0x4'))===Consts['ACTOR_TEMP_NAME'])return _0xb54544;const _0x66c5b8=MiscUtil[_0x248a5b('0x7b')](_0x1964fa,'data',_0x248a5b('0x2f'),'attributes',_0x248a5b('0x94'));if(_0x66c5b8)_0xb54544['abilityAbv']=_0x66c5b8[_0x248a5b('0x8')];const _0xdab3cf=MiscUtil[_0x248a5b('0x7b')](_0x1964fa,_0x248a5b('0x2f'),'data',_0x248a5b('0x3b'),_0x248a5b('0x7a'),_0x248a5b('0x44'));if(_0xdab3cf)_0xb54544['casterLevel']=_0xdab3cf;else _0xb54544[_0x248a5b('0x91')]=UtilActors[_0x248a5b('0x21')](_0x1964fa);return _0xb54544;}static['getSpellItemItemOpts'](){const _0x59c1af=_0x457c87,_0x261963={};return _0x261963['isPrepared']=!!Config[_0x59c1af('0x7b')](_0x59c1af('0x6'),_0x59c1af('0x79')),_0x261963[_0x59c1af('0x35')]=Config['get'](_0x59c1af('0x6'),_0x59c1af('0x3')),_0x261963;}static async[_0x457c87('0x45')](_0x363105,_0x4a5a74,_0x95dc7b){const _0x4b855c=_0x457c87;if(_0x95dc7b){const _0x189454=await Item['create'](_0x4a5a74,{'temporary':!![]});(_0x363105[_0x4b855c('0x2f')]['items']=_0x363105[_0x4b855c('0x2f')]['items']||[])['push'](...[_0x189454][_0x4b855c('0x53')]()[_0x4b855c('0xf')](_0x5de8de=>_0x5de8de[_0x4b855c('0x2f')]));}else await _0x363105[_0x4b855c('0x8e')]('OwnedItem',_0x4a5a74,{});}static[_0x457c87('0x93')](_0x2f7972){const _0x5bed56=_0x457c87;return _0x2f7972=_0x2f7972['toLowerCase']()[_0x5bed56('0x28')](),this['_VALID_TOOL_PROFICIENCIES'][_0x2f7972];}static[_0x457c87('0x62')](_0x289f5e){const _0x169b61=_0x457c87;return _0x289f5e=_0x289f5e[_0x169b61('0x7')]()[_0x169b61('0x28')](),this[_0x169b61('0x61')][_0x289f5e];}static[_0x457c87('0x1a')](_0x20e191){if(!_0x20e191)return _0x20e191;return UtilActors['_VET_CASTER_TYPE_TO_FVTT'][_0x20e191];}static[_0x457c87('0x24')](_0x2bcd6b){const _0xe790ba=_0x457c87;function _0x1b7dd4(_0x596e88,_0x5bd55e,_0x29a44f){const _0x542d1d=_0x5569;for(let [_0x12d202,_0x15cdd6]of Object[_0x542d1d('0x99')](_0x5bd55e)){const _0x2491f1=[..._0x29a44f,_0x12d202];if(_0x15cdd6 instanceof Object){const _0x31b21d=Number[_0x542d1d('0x5')](parseFloat(_0x15cdd6['value']))&&Number[_0x542d1d('0x5')](parseFloat(_0x15cdd6[_0x542d1d('0x56')]));if(_0x31b21d)_0x596e88[_0x542d1d('0x3f')](_0x2491f1);else _0x1b7dd4(_0x596e88,_0x5bd55e[_0x12d202],_0x2491f1);}else Number['isFinite'](_0x15cdd6)&&_0x596e88[_0x542d1d('0x3f')](_0x2491f1);}}const _0x4e40e6=[];return _0x1b7dd4(_0x4e40e6,_0x2bcd6b,[]),_0x4e40e6[_0xe790ba('0xf')](_0x1532c2=>_0x1532c2[_0xe790ba('0x95')]('.'));}static['getActorBarAttributes'](_0x1afee3){const _0x19df29=_0x457c87;if(!_0x1afee3)return[];const _0x54be7a=TokenConfig[_0x19df29('0x4e')](_0x1afee3['data']['data'],[]);return _0x54be7a[_0x19df29('0x7d')]=_0x54be7a[_0x19df29('0x7d')][_0x19df29('0xf')](_0x3b9a10=>_0x3b9a10[_0x19df29('0x95')]('.')),_0x54be7a[_0x19df29('0x7d')]['sort']((_0x32346d,_0x19b00a)=>_0x32346d[_0x19df29('0x9d')](_0x19b00a)),_0x54be7a[_0x19df29('0x8')]=_0x54be7a['value'][_0x19df29('0xf')](_0xb5ef62=>_0xb5ef62[_0x19df29('0x95')]('.')),_0x54be7a[_0x19df29('0x8')][_0x19df29('0x9b')]((_0x33d2c1,_0x57d101)=>_0x33d2c1['localeCompare'](_0x57d101)),{[game['i18n']['localize'](_0x19df29('0x5b'))]:_0x54be7a[_0x19df29('0x7d')],[game[_0x19df29('0xc')][_0x19df29('0x37')](_0x19df29('0x78'))]:_0x54be7a[_0x19df29('0x8')]};}static async[_0x457c87('0x23')](_0x3b9e30,_0x2acfd2,_0x1a6640){const _0x4383ee=_0x457c87;_0x1a6640=_0x1a6640||{},_0x1a6640['minLevel']=_0x1a6640['minLevel']==null?Number['MIN_SAFE_INTEGER']:_0x1a6640['minLevel'],_0x1a6640[_0x4383ee('0x83')]=_0x1a6640[_0x4383ee('0x83')]==null?Number[_0x4383ee('0x0')]:_0x1a6640[_0x4383ee('0x83')];if(!_0x2acfd2)return![];_0x2acfd2=_0x2acfd2[_0x4383ee('0x88')](_0x2d6d55=>_0x2d6d55['prepared']||_0x2d6d55[_0x4383ee('0x86')]);if(!_0x2acfd2[_0x4383ee('0x18')])return![];_0x2acfd2=MiscUtil['copy'](_0x2acfd2),_0x2acfd2=_0x2acfd2[_0x4383ee('0x88')](_0x791fdb=>{const _0x570575=_0x4383ee;return _0x791fdb[_0x570575('0x66')]&&(!this[_0x570575('0x59')](_0x791fdb[_0x570575('0x66')],_0x1a6640[_0x570575('0x9')],_0x1a6640['maxLevel'])&&delete _0x791fdb[_0x570575('0x66')]),_0x791fdb[_0x570575('0x86')]&&(!this['_pFillItemArrayAdditionalSpells_isObjectInLevelRange'](_0x791fdb[_0x570575('0x86')],_0x1a6640[_0x570575('0x9')],_0x1a6640[_0x570575('0x83')])&&delete _0x791fdb['innate']),_0x791fdb['prepared']||_0x791fdb['innate'];});if(!_0x2acfd2[_0x4383ee('0x18')])return![];let _0x174c40=_0x2acfd2[_0x4383ee('0x18')]===0x1?[_0x2acfd2[0x0]]:await InputUiUtil['pGetUserMultipleChoice']({'title':_0x4383ee('0x34')+(_0x1a6640[_0x4383ee('0x63')]?'\x20('+_0x1a6640['sourceHintText']+')':''),'values':_0x2acfd2,'isResolveItems':!![],'fnDisplay':_0x259a56=>{const _0x972ab=_0x4383ee,_0x11a47b={'prepared':_0x259a56['prepared'],'innate':_0x259a56[_0x972ab('0x86')]},_0x12db39=Object[_0x972ab('0x85')](_0x11a47b)['filter'](Boolean)['map'](_0x81a71e=>Object[_0x972ab('0x85')](_0x81a71e)[_0x972ab('0x53')]())[_0x972ab('0x53')]()['map'](_0x5a786e=>_0x5a786e[_0x972ab('0x2')]('|')[0x0][_0x972ab('0x6d')]());let _0x42d111='';for(let _0x1ee0e3=0x0;_0x1ee0e3<_0x12db39[_0x972ab('0x18')];++_0x1ee0e3){if(_0x42d111[_0x972ab('0x18')]>0x46){_0x42d111+=_0x972ab('0x8d');break;}const _0x268d6b=''+(_0x1ee0e3>0x0?',\x20':'')+_0x12db39[_0x1ee0e3];if(_0x42d111[_0x972ab('0x18')]+_0x268d6b[_0x972ab('0x18')]>0x46){_0x42d111+=_0x972ab('0x8d');break;}_0x42d111+=_0x268d6b;}return _0x42d111[_0x972ab('0x27')]();},'isSkippable':!![]});if(_0x174c40==null)return!![];if(_0x174c40===VeCt['SYM_UI_SKIP'])return![];_0x174c40=_0x174c40[0x0];if(_0x174c40[_0x4383ee('0x66')]){const _0x54f9c7=this['_pFillItemArrayAdditionalSpells_getSpellsInLevelRange'](_0x174c40[_0x4383ee('0x66')],_0x1a6640['minLevel'],_0x1a6640[_0x4383ee('0x83')]);await DataConverterSpell[_0x4383ee('0x69')](_0x3b9e30,_0x54f9c7,{'optsGetSpellItem':{'casterLevel':_0x1a6640['casterLevel'],'abilityAbv':_0x174c40[_0x4383ee('0x48')]||_0x1a6640[_0x4383ee('0x65')],'isPrepared':!![],'preparationMode':'always'},'hashToIdMap':_0x1a6640[_0x4383ee('0x8c')]});}if(_0x174c40[_0x4383ee('0x86')]){const _0x2d117b=this[_0x4383ee('0x71')](_0x174c40[_0x4383ee('0x86')],_0x1a6640['minLevel'],_0x1a6640['maxLevel']);await DataConverterSpell['pGetSpellHashToItemPosMapAndFillSpellsFromTagIds'](_0x3b9e30,_0x2d117b,{'optsGetSpellItem':{'casterLevel':_0x1a6640[_0x4383ee('0x91')],'abilityAbv':_0x174c40['ability']||_0x1a6640['abilityAbv'],'isPrepared':!![],'preparationMode':_0x4383ee('0x86')}});}return![];}static[_0x457c87('0x59')](_0x5ede3e,_0x1938c6,_0x4c6d5f){const _0x23bb5b=_0x457c87;return!!this['_pFillItemArrayAdditionalSpells_getSpellsInLevelRange'](_0x5ede3e,_0x1938c6,_0x4c6d5f)[_0x23bb5b('0x18')];}static[_0x457c87('0x71')](_0x134328,_0x18e3b0,_0x13fd2e){const _0x3c18ff=_0x457c87,_0x1734bf=[];return Object[_0x3c18ff('0x84')](_0x134328)[_0x3c18ff('0x9c')](_0xf3f4a6=>{const _0x37f736=_0x3c18ff,_0x4b0b2f=Number(_0xf3f4a6);if(isNaN(_0x4b0b2f))return;if(!(_0x18e3b0<=_0x4b0b2f&&_0x4b0b2f<=_0x13fd2e))return;const _0x3900e9=_0x134328[_0xf3f4a6];if(_0x3900e9 instanceof Array)return _0x1734bf[_0x37f736('0x3f')](..._0x3900e9);Object['entries'](_0x3900e9)[_0x37f736('0x9c')](([_0x4209c9,_0xaff6a0])=>{const _0x5af773=_0x37f736;switch(_0x4209c9){case'rest':{Object['entries'](_0xaff6a0)[_0x5af773('0x9c')](([_0x8c7f84,_0x7e07bd])=>{_0x7e07bd['forEach'](_0x432271=>{const _0x2ce10b=_0x5569;_0x1734bf[_0x2ce10b('0x3f')]({'uid':_0x432271,'uses':Number(_0x8c7f84),'usesPer':'lr'});});});break;}default:throw new Error(_0x5af773('0x38')+_0x4209c9+'\x22');}});}),_0x1734bf;}}UtilActors[_0x457c87('0x6c')]={'acr':_0x457c87('0x97'),'ani':_0x457c87('0x1e'),'arc':_0x457c87('0x43'),'ath':_0x457c87('0x5a'),'dec':'deception','his':_0x457c87('0x3a'),'ins':_0x457c87('0x31'),'itm':_0x457c87('0x41'),'inv':_0x457c87('0x6f'),'med':'medicine','nat':'nature','prc':'perception','prf':_0x457c87('0x51'),'per':'persuasion','rel':_0x457c87('0x8b'),'slt':_0x457c87('0x14'),'ste':_0x457c87('0x29'),'sur':'survival'},UtilActors[_0x457c87('0x80')]={'1':_0x457c87('0x30'),'2':_0x457c87('0x3c'),'0.5':_0x457c87('0x92')},UtilActors[_0x457c87('0x4d')]={[SZ_TINY]:_0x457c87('0x8a'),[SZ_SMALL]:'sm',[SZ_MEDIUM]:_0x457c87('0x6b'),[SZ_LARGE]:'lg',[SZ_HUGE]:_0x457c87('0x74'),[SZ_GARGANTUAN]:_0x457c87('0x15')},UtilActors[_0x457c87('0x26')]={'A':'abj','C':_0x457c87('0x39'),'D':_0x457c87('0x10'),'E':_0x457c87('0x49'),'V':_0x457c87('0x25'),'I':_0x457c87('0x6e'),'N':'nec','T':_0x457c87('0x7c')},UtilActors[_0x457c87('0x6a')]={'full':[[0x2,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x3,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x4,0x2,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x4,0x3,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x4,0x3,0x2,0x0,0x0,0x0,0x0,0x0,0x0],[0x4,0x3,0x3,0x0,0x0,0x0,0x0,0x0,0x0],[0x4,0x3,0x3,0x1,0x0,0x0,0x0,0x0,0x0],[0x4,0x3,0x3,0x2,0x0,0x0,0x0,0x0,0x0],[0x4,0x3,0x3,0x3,0x1,0x0,0x0,0x0,0x0],[0x4,0x3,0x3,0x3,0x2,0x0,0x0,0x0,0x0],[0x4,0x3,0x3,0x3,0x2,0x1,0x0,0x0,0x0],[0x4,0x3,0x3,0x3,0x2,0x1,0x0,0x0,0x0],[0x4,0x3,0x3,0x3,0x2,0x1,0x1,0x0,0x0],[0x4,0x3,0x3,0x3,0x2,0x1,0x1,0x0,0x0],[0x4,0x3,0x3,0x3,0x2,0x1,0x1,0x1,0x0],[0x4,0x3,0x3,0x3,0x2,0x1,0x1,0x1,0x0],[0x4,0x3,0x3,0x3,0x2,0x1,0x1,0x1,0x1],[0x4,0x3,0x3,0x3,0x3,0x1,0x1,0x1,0x1],[0x4,0x3,0x3,0x3,0x3,0x2,0x1,0x1,0x1],[0x4,0x3,0x3,0x3,0x3,0x2,0x2,0x1,0x1]],'artificer':[[0x2,0x0,0x0,0x0,0x0],[0x2,0x0,0x0,0x0,0x0],[0x3,0x0,0x0,0x0,0x0],[0x3,0x0,0x0,0x0,0x0],[0x4,0x2,0x0,0x0,0x0],[0x4,0x2,0x0,0x0,0x0],[0x4,0x3,0x0,0x0,0x0],[0x4,0x3,0x0,0x0,0x0],[0x4,0x3,0x2,0x0,0x0],[0x4,0x3,0x2,0x0,0x0],[0x4,0x3,0x3,0x0,0x0],[0x4,0x3,0x3,0x0,0x0],[0x4,0x3,0x3,0x1,0x0],[0x4,0x3,0x3,0x1,0x0],[0x4,0x3,0x3,0x2,0x0],[0x4,0x3,0x3,0x2,0x0],[0x4,0x3,0x3,0x3,0x1],[0x4,0x3,0x3,0x3,0x1],[0x4,0x3,0x3,0x3,0x2],[0x4,0x3,0x3,0x3,0x2]],'1/2':[[0x0,0x0,0x0,0x0,0x0],[0x2,0x0,0x0,0x0,0x0],[0x3,0x0,0x0,0x0,0x0],[0x3,0x0,0x0,0x0,0x0],[0x4,0x2,0x0,0x0,0x0],[0x4,0x2,0x0,0x0,0x0],[0x4,0x3,0x0,0x0,0x0],[0x4,0x3,0x0,0x0,0x0],[0x4,0x3,0x2,0x0,0x0],[0x4,0x3,0x2,0x0,0x0],[0x4,0x3,0x3,0x0,0x0],[0x4,0x3,0x3,0x0,0x0],[0x4,0x3,0x3,0x1,0x0],[0x4,0x3,0x3,0x1,0x0],[0x4,0x3,0x3,0x2,0x0],[0x4,0x3,0x3,0x2,0x0],[0x4,0x3,0x3,0x3,0x1],[0x4,0x3,0x3,0x3,0x1],[0x4,0x3,0x3,0x3,0x2],[0x4,0x3,0x3,0x3,0x2]],'1/3':[[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x2,0x0,0x0,0x0],[0x3,0x0,0x0,0x0],[0x3,0x0,0x0,0x0],[0x3,0x0,0x0,0x0],[0x4,0x2,0x0,0x0],[0x4,0x2,0x0,0x0],[0x4,0x2,0x0,0x0],[0x4,0x3,0x0,0x0],[0x4,0x3,0x0,0x0],[0x4,0x3,0x0,0x0],[0x4,0x3,0x2,0x0],[0x4,0x3,0x2,0x0],[0x4,0x3,0x2,0x0],[0x4,0x3,0x3,0x0],[0x4,0x3,0x3,0x0],[0x4,0x3,0x3,0x0],[0x4,0x3,0x3,0x1],[0x4,0x3,0x3,0x1]],'pact':[0x1,0x2,0x2,0x2,0x2,0x2,0x2,0x2,0x2,0x2,0x3,0x3,0x3,0x3,0x3,0x3,0x4,0x4,0x4,0x4]},UtilActors['VALID_LANGUAGES']=null,UtilActors[_0x457c87('0x1f')]=null,UtilActors[_0x457c87('0xa')]=null,UtilActors[_0x457c87('0x22')]=[_0x457c87('0x60'),'cartographer\x27s\x20tools',_0x457c87('0x50'),_0x457c87('0x54'),_0x457c87('0x5c'),_0x457c87('0xb'),'musical\x20instrument',_0x457c87('0x67'),_0x457c87('0x70'),'vehicles\x20(land)',_0x457c87('0x55'),_0x457c87('0x8f')],UtilActors[_0x457c87('0x9a')]={'artisan\x27s\x20tools':_0x457c87('0x68'),'disguise\x20kit':_0x457c87('0x57'),'forgery\x20kit':'forg','gaming\x20set':'game','dice\x20set':'game','dragonchess\x20set':'game','playing\x20card\x20set':_0x457c87('0x47'),'three-dragon\x20ante\x20set':'game','herbalism\x20kit':'herb','musical\x20instrument':_0x457c87('0x90'),'bagpipes':_0x457c87('0x90'),'drum':_0x457c87('0x90'),'dulcimer':_0x457c87('0x90'),'flute':_0x457c87('0x90'),'lute':_0x457c87('0x90'),'lyre':'music','horn':_0x457c87('0x90'),'pan\x20flute':_0x457c87('0x90'),'shawm':_0x457c87('0x90'),'viol':_0x457c87('0x90'),'navigator\x27s\x20tools':_0x457c87('0x2c'),'poisoner\x27s\x20kit':_0x457c87('0x12'),'thieves\x27\x20tools':_0x457c87('0x82'),'vehicle\x20(land\x20or\x20water)':'vehicle'},UtilActors['_VALID_LANGUAGES']={'common':_0x457c87('0x2e'),'aarakocra':_0x457c87('0x7e'),'abyssal':_0x457c87('0x89'),'aquan':_0x457c87('0x73'),'auran':_0x457c87('0x33'),'celestial':'celestial','deep\x20speech':_0x457c87('0x3d'),'draconic':_0x457c87('0x5f'),'druidic':_0x457c87('0x11'),'dwarvish':'dwarvish','elvish':_0x457c87('0x17'),'giant':_0x457c87('0x20'),'gith':_0x457c87('0x1b'),'gnomish':_0x457c87('0x4a'),'goblin':_0x457c87('0x52'),'gnoll':_0x457c87('0x19'),'halfling':_0x457c87('0x2a'),'ignan':_0x457c87('0x77'),'infernal':_0x457c87('0x81'),'orc':_0x457c87('0x5d'),'primordial':_0x457c87('0x5e'),'sylvan':'sylvan','terran':'terran','thieves\x27\x20cant':_0x457c87('0x4c'),'undercommon':_0x457c87('0x76')},UtilActors[_0x457c87('0x72')]={'full':_0x457c87('0xe'),'1/2':_0x457c87('0x1d'),'1/3':_0x457c87('0x7f'),'pact':'pact'};export{UtilActors};