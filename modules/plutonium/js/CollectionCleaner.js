const _0x1c2c=['_activateListeners_initBtnRun','_pageFilter','getMaxWindowHeight','Directory\x20Cleaner','_list','_activateListeners_initBtnReset','click','[name=\x22btn-run\x22]','getData','_activateListeners_pInitListAndFilters','_rows','MODULE_LOCATION','[name=\x22cb-prune-auto\x22]','teardown','_collectionName','close','/template/CollectionCleaner.handlebars','_activateListeners_initBtnPrune','find','activateListeners'];(function(_0x3306f5,_0x1c2c05){const _0x4c8cae=function(_0x15741e){while(--_0x15741e){_0x3306f5['push'](_0x3306f5['shift']());}};_0x4c8cae(++_0x1c2c05);}(_0x1c2c,0x1ed));const _0x4c8c=function(_0x3306f5,_0x1c2c05){_0x3306f5=_0x3306f5-0x0;let _0x4c8cae=_0x1c2c[_0x3306f5];return _0x4c8cae;};const _0x170f14=_0x4c8c;'use strict';import{SharedConsts}from'../shared/SharedConsts.js';import{UtilApplications}from'./UtilApplications.js';import{Util}from'./Util.js';import{BaseCollectionTool}from'./BaseCollectionTool.js';import{AppFilterBasic}from'./FilterApplications.js';class CollectionCleaner extends BaseCollectionTool{constructor(_0x15741e){const _0x3897aa=_0x4c8c;super({'title':_0x3897aa('0xa'),'template':SharedConsts[_0x3897aa('0x12')]+_0x3897aa('0x3'),'height':Util[_0x3897aa('0x9')](),'width':0x280,'resizable':!![]},_0x15741e),this[_0x3897aa('0x8')]=new AppFilterBasic(),this[_0x3897aa('0xb')]=null,this['_$btnReset']=null;}[_0x170f14('0x6')](_0x14f185){const _0x523b00=_0x170f14;super[_0x523b00('0x6')](_0x14f185),this[_0x523b00('0x7')](_0x14f185),this[_0x523b00('0x4')](_0x14f185),this[_0x523b00('0xc')](_0x14f185),this[_0x523b00('0x10')](_0x14f185);}[_0x170f14('0x7')](_0x33ebd8){const _0x4698c8=_0x170f14,_0x2d066c=_0x33ebd8[_0x4698c8('0x5')](_0x4698c8('0x13'));_0x33ebd8[_0x4698c8('0x5')](_0x4698c8('0xe'))[_0x4698c8('0xd')](()=>this['_pDoDelete'](_0x2d066c));}[_0x170f14('0xf')](){const _0x3fa5bd=_0x170f14;return this['_rows']=this[_0x3fa5bd('0x11')]=this['_mapEntitiesToRows'](),{...super['getData'](),'titleSearch':this[_0x3fa5bd('0x1')]+'s','rows':this['_rows']};}[_0x170f14('0x2')](..._0x50742a){const _0x596523=_0x170f14;return this[_0x596523('0x8')][_0x596523('0x0')](),super[_0x596523('0x2')](..._0x50742a);}}export{CollectionCleaner};