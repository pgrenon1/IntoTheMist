const _0x8f9d=['data','sphere','usesMax','concentration','rsak','stripTags','map','target','getActorSpellItemOpts','when\x20you\x20reach\x205th\x20level','min','durationUnit','meta','usesPer','none','target.value','homebrew','save','hashToIdMap','Failed\x20to\x20import\x20spell\x20with\x20hash\x20\x22','hover','msak','mode','level','copy','LINK_DATA_SHEET_ITEM','text','day','amount','hashPreEncoded','_pGetAdditionalData','pGetSpellItem','isImportDescription','getActorSpell','isAddPermission','getMetricNumber','prepared','components','importSpell','get','preparation','set','flat','hour','getCleanEntityName','cost','condition','optsGetSpellItem','range','VET_SPELL_SCHOOL_TO_ABV','savingThrow','pGetCompendiumImage','stringify','scaling','\x20+\x20@mod','melee\x20spell\x20attack','MODULE_NAME','damageInflict','timed','_id','split','pCacheAndGet','getItemSource','toLowerCase','entriesHigherLevel','label','permission','touch','pGetSpellHashToItemPosMapAndFillSpells','filter','time','URL_TO_HASH_BUILDER','uid','length','year','ritual','self','replace','perm','unit','_pFillSpellPromises_pUpdateSpellItem','util','substring','ranged\x20spell\x20attack','heal','value','turn','_getDescription','number','includes','join','href','isTemporary','_pFillSpellPromises_pAddSpellItem','durationAmount','/media/icon/scroll-unfurled.svg','always','getSrdCompendiumEntity','items','exec','name','foundrySpell','doHookSpellLinkRender','healing','spell','isStrictMatching','modules/','round','scalingLevelDice','abilityAbv','import','spec','permissions','isIgnoreExisting','instant','page','hash','week','error','push','find','keys','assign','VALID_DAMAGE_TYPES','minute','isPrepared','pGetSpellHashToItemPosMapAndFillSpellsFromTagIds','type','getEntryDescription','miscTags','entries','distance','OwnedItem','PG_SPELLS','usesCurrent','duration','source','units','getSourceWithPagePart','pGetIconImage','createEmbeddedEntity'];(function(_0x293ecf,_0x8f9d67){const _0x5852ac=function(_0x494619){while(--_0x494619){_0x293ecf['push'](_0x293ecf['shift']());}};_0x5852ac(++_0x8f9d67);}(_0x8f9d,0x71));const _0x5852=function(_0x293ecf,_0x8f9d67){_0x293ecf=_0x293ecf-0x0;let _0x5852ac=_0x8f9d[_0x293ecf];return _0x5852ac;};const _0x9629c5=_0x5852;import{Vetools}from'./Vetools.js';import{UtilActors}from'./UtilActors.js';import{Config}from'./Config.js';import{SharedConsts}from'../shared/SharedConsts.js';import{UtilApplications}from'./UtilApplications.js';import{LGT}from'./Util.js';import{UtilEvents}from'./UtilEvents.js';import{DataConverter}from'./DataConverter.js';class DataConverterSpell{static async['pGetSpellItem'](_0x494619,_0xda873a){const _0x5a13de=_0x5852;_0xda873a=_0xda873a||{};const _0x296a7d=this[_0x5a13de('0x73')](_0x494619),_0x1089cc=JSON[_0x5a13de('0x50')](_0x494619[_0x5a13de('0x11')]);let _0xf53177='';if(_0x494619[_0x5a13de('0x10')]&&_0x494619['miscTags'][_0x5a13de('0x75')]('HL'))_0xf53177=_0x5a13de('0x70');if(_0x494619[_0x5a13de('0x4e')]&&_0x494619[_0x5a13de('0x4e')][_0x5a13de('0x65')])_0xf53177=_0x5a13de('0x2d');if(_0x1089cc[_0x5a13de('0x5b')]()['includes'](_0x5a13de('0x53')))_0xf53177=_0x5a13de('0x31');if(_0x1089cc[_0x5a13de('0x5b')]()[_0x5a13de('0x75')](_0x5a13de('0x6f')))_0xf53177=_0x5a13de('0x20');_0xf53177=_0xf53177||_0x5a13de('0x6d');const _0x45917f=UtilActors[_0x5a13de('0x4d')][_0x494619['school']]||'',_0x4792bc=_0x494619[_0x5a13de('0x41')]&&_0x494619['components']['m']?_0x494619[_0x5a13de('0x41')]['m']!==!![]?''+(_0x494619[_0x5a13de('0x41')]['m'][_0x5a13de('0x36')]||_0x494619[_0x5a13de('0x41')]['m']):'':'';let _0xda6f0d=0x0,_0x197377='';const _0x4b21be=_0x494619['duration'][0x0];switch(_0x4b21be[_0x5a13de('0xe')]){case _0x5a13de('0x1'):_0x197377='inst';break;case _0x5a13de('0x56'):{switch(_0x4b21be[_0x5a13de('0x16')][_0x5a13de('0xe')]){case'turn':_0x197377=_0x5a13de('0x72'),_0xda6f0d=_0x4b21be[_0x5a13de('0x16')][_0x5a13de('0x38')];break;case _0x5a13de('0x87'):_0x197377=_0x5a13de('0x87'),_0xda6f0d=_0x4b21be[_0x5a13de('0x16')][_0x5a13de('0x38')];break;case'minute':_0x197377=_0x5a13de('0xb'),_0xda6f0d=_0x4b21be[_0x5a13de('0x16')][_0x5a13de('0x38')];break;case _0x5a13de('0x47'):_0x197377=_0x5a13de('0x47'),_0xda6f0d=_0x4b21be[_0x5a13de('0x16')][_0x5a13de('0x38')];break;case _0x5a13de('0x37'):_0x197377=_0x5a13de('0x37'),_0xda6f0d=_0x4b21be[_0x5a13de('0x16')]['amount'];break;case _0x5a13de('0x4'):_0x197377=_0x5a13de('0x37'),_0xda6f0d=_0x4b21be['duration'][_0x5a13de('0x38')]*0x7;break;case _0x5a13de('0x66'):_0x197377=_0x5a13de('0x66'),_0xda6f0d=_0x4b21be[_0x5a13de('0x16')]['amount'];break;}break;}case'permanent':_0x197377=_0x5a13de('0x6a');break;case'special':_0x197377=_0x5a13de('0x8b');break;}let _0x51e97b=0x0,_0x3e20de='',_0xc24900=0x0,_0x36219f='',_0x32a52e='';switch(_0x494619[_0x5a13de('0x4c')][_0x5a13de('0xe')]){case RNG_SPECIAL:_0x3e20de=_0x5a13de('0x8b');break;case RNG_POINT:{const _0x1ec331=_0x494619[_0x5a13de('0x4c')][_0x5a13de('0x12')];switch(_0x1ec331[_0x5a13de('0xe')]){case RNG_SELF:{_0x36219f=_0x5a13de('0x68'),_0x32a52e=_0x5a13de('0x68'),_0x3e20de=_0x5a13de('0x68');break;}case RNG_UNLIMITED:case RNG_UNLIMITED_SAME_PLANE:case RNG_SIGHT:case RNG_SPECIAL:{_0x36219f=_0x5a13de('0x8b'),_0x3e20de=_0x5a13de('0x8b');break;}case RNG_TOUCH:{_0x36219f=_0x5a13de('0x5f'),_0x3e20de='touch';break;}case UNT_MILES:{_0x51e97b=Config[_0x5a13de('0x3f')](_0x5a13de('0x42'),_0x1ec331[_0x5a13de('0x38')],UNT_MILES),_0x3e20de='mi';break;}case UNT_FEET:default:{_0x51e97b=Config['getMetricNumber'](_0x5a13de('0x42'),_0x1ec331['amount'],UNT_FEET),_0x3e20de='ft';break;}}break;}case RNG_LINE:case RNG_CUBE:case RNG_CONE:case RNG_RADIUS:case RNG_SPHERE:case RNG_HEMISPHERE:case RNG_CYLINDER:{_0xc24900=Config[_0x5a13de('0x3f')]('importSpell',_0x494619[_0x5a13de('0x4c')][_0x5a13de('0x12')]['amount'],_0x494619[_0x5a13de('0x4c')]['distance'][_0x5a13de('0xe')]);if(_0x494619[_0x5a13de('0x4c')]['distance'][_0x5a13de('0xe')]==='miles')_0x36219f='mi';else _0x36219f='ft';if(_0x494619['range'][_0x5a13de('0xe')]===RNG_HEMISPHERE)_0x32a52e=_0x5a13de('0x1d');else _0x32a52e=_0x494619[_0x5a13de('0x4c')][_0x5a13de('0xe')];}}let _0x1c91c7=[],_0x4759a2=null,_0x5ce81c=null;if(_0x494619[_0x5a13de('0x88')]){const _0x20cfbf=[_0x494619['scalingLevelDice']][_0x5a13de('0x46')](),_0x356f24=_0x15f23c=>Math[_0x5a13de('0x26')](...Object[_0x5a13de('0x8')](_0x15f23c)[_0x5a13de('0x22')](_0x3ba40a=>Number(_0x3ba40a))),_0xff36a6=new RegExp('('+UtilActors[_0x5a13de('0xa')]['join']('|')+')','i');_0x1c91c7[_0x5a13de('0x6')](..._0x20cfbf[_0x5a13de('0x22')](_0x4f66e4=>{const _0x55fd98=_0x5a13de,_0x7ade3a=_0x356f24(_0x4f66e4[_0x55fd98('0x51')]),_0x20d84b=_0x4f66e4[_0x55fd98('0x51')][_0x7ade3a],_0x3b1aeb=_0xff36a6[_0x55fd98('0x7f')](_0x4f66e4[_0x55fd98('0x5d')]||'');return[(_0x20d84b||'')['replace'](/{{spellcasting_mod}}/g,'@mod'),_0x3b1aeb?_0x3b1aeb[0x1][_0x55fd98('0x5b')]():null];}));const _0x1f1953=_0x20cfbf[0x0],_0x1d5e74=_0x356f24(_0x1f1953[_0x5a13de('0x51')]);_0x4759a2=_0x1f1953['scaling'][_0x1d5e74];}else{const _0x2057cb=[];if(_0x494619[_0x5a13de('0x55')]&&_0x494619[_0x5a13de('0x55')][_0x5a13de('0x65')]){if(_0x1089cc['toLowerCase']()['includes'](_0x5a13de('0x25'))){const _0x1e86f0=[];_0x1089cc[_0x5a13de('0x69')](/\({@damage ([^}]+)}\)/g,(..._0x390d03)=>_0x1e86f0[_0x5a13de('0x6')](_0x390d03[0x1]));if(_0x1e86f0[_0x5a13de('0x65')]===0x3){const _0xd0fc7=/(?:^|[^(]){@damage ([^}]+)}(?:[^)]|$)/[_0x5a13de('0x7f')](_0x1089cc);if(_0xd0fc7)_0x4759a2=_0xd0fc7[0x1];else _0x4759a2=_0x1e86f0[0x0];}}_0x1089cc[_0x5a13de('0x69')](/{@damage ([^}]+)} ([^ ]+)(, [^ ]+)*(,? or [^ ]+)? damage/ig,(..._0x3fb51b)=>{const _0x4f2ef1=_0x5a13de;_0x2057cb[_0x4f2ef1('0x6')]([_0x3fb51b[0x1],_0x3fb51b[0x2]]);});}if(_0x494619[_0x5a13de('0x10')]&&_0x494619[_0x5a13de('0x10')]['some'](_0x16b33e=>_0x16b33e==='HL')){const _0x3ae49a=['',_0x5a13de('0x83')];_0x1089cc[_0x5a13de('0x69')](/{@dice ([^}]+)}(\s*\+\s*your\s+spellcasting\s+ability\s+modifier)/i,(..._0x3fe9b6)=>{const _0x51b390=_0x5a13de;_0x3ae49a[0x0]=_0x3fe9b6[0x1],_0x3fe9b6[0x1]&&(_0x3ae49a[0x0]=_0x3ae49a[0x0]+_0x51b390('0x52'));}),_0x2057cb[_0x5a13de('0x6')](_0x3ae49a);}_0x494619[_0x5a13de('0x5c')]&&JSON['stringify'](_0x494619[_0x5a13de('0x5c')])[_0x5a13de('0x69')](/{@(?:scaledice|scaledamage) ([^}]+)}/i,(..._0x50149c)=>{const _0x54f898=_0x5a13de,[_0x438cb8,_0x196a08,_0x2f8ad8]=_0x50149c[0x1][_0x54f898('0x58')]('|');_0x5ce81c=_0x2f8ad8;}),_0x1c91c7[_0x5a13de('0x6')](..._0x2057cb);}_0x1c91c7=_0x1c91c7[_0x5a13de('0x61')](Boolean);let _0x5e195d='';if(_0x494619['savingThrow']&&_0x494619[_0x5a13de('0x4e')]['length'])_0x5e195d=_0x494619[_0x5a13de('0x4e')][0x0][_0x5a13de('0x6e')](0x0,0x3)['toLowerCase']();const _0x4a0f0d=await DataConverter[_0x5a13de('0x1a')](_0x5a13de('0x84'),_0x494619)||await DataConverter[_0x5a13de('0x4f')]('spell',_0x494619)||_0x5a13de('0x86')+SharedConsts[_0x5a13de('0x54')]+_0x5a13de('0x7b'),_0x4bac49=await DataConverter[_0x5a13de('0x7d')]('spell',_0x494619);_0x4bac49&&(_0xc24900=MiscUtil[_0x5a13de('0x43')](_0x4bac49,_0x5a13de('0x1c'),_0x5a13de('0x23'),_0x5a13de('0x71'))||_0xc24900,_0x36219f=MiscUtil[_0x5a13de('0x43')](_0x4bac49,_0x5a13de('0x1c'),_0x5a13de('0x23'),_0x5a13de('0x18'))||_0x36219f,_0x32a52e=MiscUtil[_0x5a13de('0x43')](_0x4bac49,_0x5a13de('0x1c'),_0x5a13de('0x23'),'type')||_0x32a52e,_0x1c91c7=MiscUtil[_0x5a13de('0x43')](_0x4bac49,_0x5a13de('0x1c'),'damage','parts')||_0x1c91c7);const _0x428789=await this['_pGetAdditionalData'](_0x494619,_0x36219f);if(_0xda873a[_0x5a13de('0x7a')]!==undefined)_0xda6f0d=_0xda873a[_0x5a13de('0x7a')];if(_0xda873a[_0x5a13de('0x27')]!==undefined)_0x197377=_0xda873a[_0x5a13de('0x27')];const _0x2717a1={'name':UtilApplications[_0x5a13de('0x48')](DataConverter['getNameWithSourcePart'](_0x494619)),'type':'spell','data':{'source':DataConverter[_0x5a13de('0x19')](_0x494619),'description':{'value':_0x296a7d,'chat':'','unidentified':''},'actionType':_0xf53177,'level':_0x494619[_0x5a13de('0x33')],'school':_0x45917f,'components':{'value':'','vocal':_0x494619[_0x5a13de('0x41')]&&_0x494619[_0x5a13de('0x41')]['v'],'somatic':_0x494619[_0x5a13de('0x41')]&&_0x494619[_0x5a13de('0x41')]['s'],'material':!!(_0x494619[_0x5a13de('0x41')]&&_0x494619['components']['m']),'ritual':_0x494619[_0x5a13de('0x28')]&&_0x494619[_0x5a13de('0x28')][_0x5a13de('0x67')],'concentration':!!MiscUtil[_0x5a13de('0x43')](_0x494619,'duration','0',_0x5a13de('0x1f'))},'materials':{'value':_0x4792bc,'consumed':!!MiscUtil['get'](_0x494619,_0x5a13de('0x41'),'m','consume'),'cost':Math['round']((MiscUtil[_0x5a13de('0x43')](_0x494619,_0x5a13de('0x41'),'m',_0x5a13de('0x49'))||0x0)/0x64),'supply':0x0},'target':{'value':_0xc24900,'units':_0x36219f,'type':_0x32a52e},'range':{'value':_0x51e97b,'units':_0x3e20de,'long':0x0},'activation':{'type':_0x494619[_0x5a13de('0x62')][0x0][_0x5a13de('0x6b')],'cost':_0x494619[_0x5a13de('0x62')][0x0][_0x5a13de('0x74')],'condition':Renderer[_0x5a13de('0x21')](_0x494619[_0x5a13de('0x62')][0x0][_0x5a13de('0x4a')]||'')},'duration':{'value':_0xda6f0d,'units':_0x197377},'damage':{'parts':_0x1c91c7,'versatile':''},'scaling':{'mode':_0x4759a2?'cantrip':_0x5ce81c?_0x5a13de('0x33'):_0x5a13de('0x2a'),'formula':_0x4759a2||_0x5ce81c||''},'save':{'ability':_0x5e195d,'dc':null},'ability':_0xda873a[_0x5a13de('0x89')]||'','uses':{'value':_0xda873a[_0x5a13de('0x15')]||0x0,'max':_0xda873a[_0x5a13de('0x1e')]||0x0,'per':_0xda873a[_0x5a13de('0x29')]||''},'attackBonus':0x0,'chatFlavor':'','critical':null,'formula':'','preparation':{'mode':_0x494619['level']===0x0?'always':_0xda873a['preparationMode']||_0x5a13de('0x40'),'prepared':_0x494619[_0x5a13de('0x33')]===0x0?!![]:!!_0xda873a[_0x5a13de('0xc')]},..._0x428789||{}},'img':_0x4a0f0d,'flags':{},'effects':[]};if(_0xda873a[_0x5a13de('0x3e')])_0x2717a1[_0x5a13de('0x5e')]={'default':Config[_0x5a13de('0x43')](_0x5a13de('0x42'),_0x5a13de('0x8c'))};return _0x2717a1;}static[_0x9629c5('0x73')](_0x1dc5ae){const _0x290e66=_0x9629c5;if(!Config[_0x290e66('0x43')]('importSpell',_0x290e66('0x3c')))return'';const _0x433a5f=DataConverter['getEntryDescription'](_0x1dc5ae),_0x22c0d2=_0x1dc5ae['entriesHigherLevel']?DataConverter[_0x290e66('0xf')](_0x1dc5ae,{'prop':_0x290e66('0x5c')}):'';return[_0x433a5f,_0x22c0d2][_0x290e66('0x61')](Boolean)[_0x290e66('0x76')]('');}static async[_0x9629c5('0x3a')](_0xfcf373,_0x40e6b7){const _0x240ad3=_0x9629c5;let _0x109191=(MiscUtil[_0x240ad3('0x43')](BrewUtil,_0x240ad3('0x2c'),_0x240ad3('0x81'))||[])[_0x240ad3('0x7')](_0x37211f=>_0x37211f[_0x240ad3('0x80')]===_0xfcf373[_0x240ad3('0x80')]&&_0x37211f[_0x240ad3('0x17')]===_0xfcf373[_0x240ad3('0x17')]);if(!_0x109191){const _0xefe95=await Vetools['pGetSpellAdditionalData']();_0x109191=_0xefe95['spell']['find'](_0x3ffff0=>_0x3ffff0[_0x240ad3('0x80')]===_0xfcf373[_0x240ad3('0x80')]&&_0x3ffff0[_0x240ad3('0x17')]===_0xfcf373[_0x240ad3('0x17')]);}const _0x2ff35c=_0xfcf373['foundryData'];if(!_0x109191&&!_0x2ff35c)return null;const _0x5ebdcc=MiscUtil['copy'](_0x109191?_0x109191['data']:_0x2ff35c);if(_0x109191&&_0x2ff35c)Object[_0x240ad3('0x9')](_0x5ebdcc,MiscUtil[_0x240ad3('0x34')](_0x2ff35c));if(_0x5ebdcc['target.value'])_0x5ebdcc[_0x240ad3('0x2b')]=Config[_0x240ad3('0x3f')](_0x240ad3('0x42'),_0x5ebdcc['target.value'],_0x40e6b7);return _0x5ebdcc;}static async['pGetSpellHashToItemPosMapAndFillSpellsFromTagIds'](_0x55e870,_0x3a0ec6,_0x5924fc){const _0x5b409f=_0x9629c5;_0x5924fc=_0x5924fc||{};const _0xdf0339=_0x5924fc[_0x5b409f('0x2e')]||{};for(const _0x506bdd of _0x3a0ec6){const _0x9a49b2=_0x506bdd['uid']||_0x506bdd,_0x5adfa2=_0x506bdd[_0x5b409f('0x64')]?_0x506bdd:null;let [_0x8efe6f,_0x33ee3c]=_0x9a49b2[_0x5b409f('0x58')]('|');if(!_0x33ee3c)_0x33ee3c=SRC_PHB;const _0x464315=UrlUtil[_0x5b409f('0x63')][UrlUtil['PG_SPELLS']]({'name':_0x8efe6f,'source':_0x33ee3c});if(_0xdf0339[_0x464315]!=null&&!_0x5adfa2){await this[_0x5b409f('0x6c')](_0x55e870,_0xdf0339[_0x464315],_0x33ee3c,_0x464315,_0x5924fc);continue;}_0x5adfa2&&(_0x5924fc={..._0x5924fc},_0x5924fc[_0x5b409f('0x4b')]=MiscUtil['copy'](_0x5924fc['optsGetSpellItem']||{}),_0x5924fc[_0x5b409f('0x4b')][_0x5b409f('0x15')]=_0x5adfa2['uses'],_0x5924fc[_0x5b409f('0x4b')][_0x5b409f('0x1e')]=_0x5adfa2['uses'],_0x5924fc[_0x5b409f('0x4b')][_0x5b409f('0x29')]=_0x5adfa2['usesPer'],_0x5924fc[_0x5b409f('0x0')]=!![]);const _0x14c37d=await DataConverterSpell[_0x5b409f('0x79')](_0x55e870,_0x33ee3c,_0x464315,_0x5924fc);if(_0x14c37d==null||_0x5adfa2)continue;_0xdf0339[_0x464315]=_0x14c37d;}return _0xdf0339;}static async[_0x9629c5('0x6c')](_0x5b8885,_0x5ea0b8,_0x390894,_0x54c041,_0x4f2c32){const _0x30a28e=_0x9629c5,_0x1570ce=_0x5b8885['items'][_0x30a28e('0x7')](_0x54737b=>_0x54737b['_id']===_0x5ea0b8||_0x54737b['id']===_0x5ea0b8);if(!_0x1570ce)return;const _0x343dcc=_0x1570ce[_0x30a28e('0x1c')];_0x4f2c32=_0x4f2c32||{};let _0x98767a;try{_0x98767a=await Renderer[_0x30a28e('0x30')][_0x30a28e('0x59')](UrlUtil[_0x30a28e('0x14')],_0x390894,_0x54c041);}catch(_0x4de4cc){console[_0x30a28e('0x5')](...LGT,_0x30a28e('0x2f')+_0x54c041+'\x22!',_0x4de4cc);return;}if(!_0x98767a)return;const _0xd0460d=await DataConverterSpell[_0x30a28e('0x3b')](_0x98767a,{...UtilActors['getActorSpellItemOpts'](_0x5b8885),..._0x4f2c32[_0x30a28e('0x4b')]||{}}),_0x2fd0eb={'_id':_0x1570ce[_0x30a28e('0x57')],'data':{}};let _0x345229=![];MiscUtil[_0x30a28e('0x43')](_0x343dcc[_0x30a28e('0x1c')],_0x30a28e('0x44'),_0x30a28e('0x32'))==='prepared'&&MiscUtil[_0x30a28e('0x43')](_0xd0460d[_0x30a28e('0x1c')],_0x30a28e('0x44'),'mode')===_0x30a28e('0x7c')&&(_0x345229=!![],MiscUtil[_0x30a28e('0x45')](_0x2fd0eb[_0x30a28e('0x1c')],_0x30a28e('0x44'),'mode',_0x30a28e('0x7c'))),MiscUtil['get'](_0x343dcc['data'],'preparation',_0x30a28e('0x40'))!==!![]&&MiscUtil[_0x30a28e('0x43')](_0xd0460d[_0x30a28e('0x1c')],'preparation','prepared')===!![]&&(_0x345229=!![],MiscUtil['set'](_0x2fd0eb[_0x30a28e('0x1c')],_0x30a28e('0x44'),_0x30a28e('0x40'),!![])),_0x345229&&await _0x5b8885['updateEmbeddedEntity']('OwnedItem',_0x2fd0eb);}static async[_0x9629c5('0x60')](_0x35b5f1,_0x10105e,_0xa4f1d8){const _0xdb5a4a=_0x9629c5;_0xa4f1d8=_0xa4f1d8||{};const _0x3e37a4=[],_0x1f9d95=/{@spell ([^}]+)}/gi;let _0x42da9f;while(_0x42da9f=_0x1f9d95['exec'](_0x10105e)){_0x3e37a4[_0xdb5a4a('0x6')](_0x42da9f[0x1]);}return this[_0xdb5a4a('0xd')](_0x35b5f1,_0x3e37a4,_0xa4f1d8);}static async[_0x9629c5('0x79')](_0x1dae18,_0xa5ad42,_0x270252,_0x2eb9b3){const _0x12449c=_0x9629c5;_0x2eb9b3=_0x2eb9b3||{};let _0x401bde;try{_0x401bde=await Renderer[_0x12449c('0x30')][_0x12449c('0x59')](UrlUtil[_0x12449c('0x14')],_0xa5ad42,_0x270252);}catch(_0x3ef21d){return console[_0x12449c('0x5')](...LGT,_0x12449c('0x2f')+_0x270252+'\x22!',_0x3ef21d),null;}if(!_0x401bde)return null;if(!_0x2eb9b3[_0x12449c('0x0')]){const _0x5774d5=DataConverterSpell[_0x12449c('0x3d')](_0x1dae18,_0x401bde[_0x12449c('0x80')],_0x401bde['source']);if(_0x5774d5)return _0x5774d5[_0x12449c('0x57')]||_0x5774d5[_0x12449c('0x1c')][_0x12449c('0x57')];}const _0x129032=await DataConverterSpell[_0x12449c('0x3b')](_0x401bde,{...UtilActors[_0x12449c('0x24')](_0x1dae18),..._0x2eb9b3[_0x12449c('0x4b')]||{}});if(_0x2eb9b3[_0x12449c('0x78')]){const _0x2e3e96=await Item['create'](_0x129032,{'temporary':!![]});(_0x1dae18['data']['items']=_0x1dae18[_0x12449c('0x1c')][_0x12449c('0x7e')]||[])[_0x12449c('0x6')](_0x2e3e96);}else{const _0xf24a0d=await _0x1dae18[_0x12449c('0x1b')](_0x12449c('0x13'),_0x129032,{});return _0xf24a0d[_0x12449c('0x57')]||_0xf24a0d[_0x12449c('0x1c')]['_id'];}}static[_0x9629c5('0x3d')](_0x100fb5,_0x14119e,_0x52e6eb){const _0x2f8d05=_0x9629c5;if(!_0x14119e||!_0x52e6eb)return null;return _0x100fb5[_0x2f8d05('0x7e')]&&_0x100fb5[_0x2f8d05('0x7e')]['find'](_0x3418f8=>(_0x3418f8['name']||'')[_0x2f8d05('0x5b')]()===_0x14119e[_0x2f8d05('0x5b')]()&&(!Config[_0x2f8d05('0x43')](_0x2f8d05('0x8a'),_0x2f8d05('0x85'))||(DataConverter[_0x2f8d05('0x5a')](_0x3418f8)||'')['toLowerCase']()===_0x52e6eb['toLowerCase']()));}static[_0x9629c5('0x82')](_0x434d70,_0x5e51cd,_0x22bf6b){const _0x54a4b8=_0x9629c5;if(_0x22bf6b['href']&&_0x22bf6b[_0x54a4b8('0x77')]['hover']){if(_0x22bf6b[_0x54a4b8('0x77')][_0x54a4b8('0x30')][_0x54a4b8('0x2')]===UrlUtil[_0x54a4b8('0x14')]){const _0x529260=_0x22bf6b[_0x54a4b8('0x77')][_0x54a4b8('0x39')]?_0x22bf6b['href'][_0x54a4b8('0x3')]:UrlUtil['encodeForHash'](_0x22bf6b[_0x54a4b8('0x77')][_0x54a4b8('0x3')]),_0x15b46f=_0x5e51cd[_0x529260];if(_0x15b46f!=null){const _0xa6f63b=JSON[_0x54a4b8('0x50')]({'actorId':_0x434d70,'itemId':_0x15b46f})['escapeQuotes']();return{'isDisableEvents':!![],'string':UtilEvents[_0x54a4b8('0x35')]+'=\x22'+_0xa6f63b+'\x22'};}}}return null;}}export{DataConverterSpell};