const _0x3678=['filter','name','int','values','type','none','_getPsionicFlags','modes','exec',')[^.]+damage','_getPsionicItems_getTalentItem','feat','bonus','psi)','push','hour','copy','cost','getSourceWithPagePart','length','isAddPermission','list','setFirstSection','map','<div>','cantrip','<p><i>','data','getPsionicItems','\x20-\x20','replace','\x0a\x09\x09\x09\x09\x09\x09\x09','MODULE_NAME','evo','spell','render','_getPsionicItems_getSaveFromString','getBodyText','(Only\x20one\x20focus\x20may\x20be\x20active\x20at\x20a\x20time)','list-hang-notitle','entries','\x20-\x20Focus','unit','source','_getPsionicItems_getDisciplineFocusItem','\x0a\x09\x09\x09\x09\x09\x09</div>','concentration','minute','</i></p>','min','PG_PSIONICS','ATB_ABV_TO_FULL','join','prepared','isImportDescription','submodes','/media/icon/brain.svg','_getPsionicItems_getDamageTypeFromString','</div>','toLowerCase','round','level','_getPsionicItems_getDisciplineActiveItems','test','permission','importPsionic','max','item','get','getNameWithSourcePart','getTypeOrderString','_getPsionicItems_getActionTypeFromString','_PSI_DURATION_MAP','stringify','psionic','slice','filterValues','find','URL_TO_HASH_BUILDER','modules/','getCleanEntityName','isAddDataFlags'];(function(_0x44faf4,_0x367878){const _0x3120dd=function(_0x26e3f4){while(--_0x26e3f4){_0x44faf4['push'](_0x44faf4['shift']());}};_0x3120dd(++_0x367878);}(_0x3678,0x1df));const _0x3120=function(_0x44faf4,_0x367878){_0x44faf4=_0x44faf4-0x0;let _0x3120dd=_0x3678[_0x44faf4];return _0x3120dd;};const _0x30ebf7=_0x3120;import{UtilApplications}from'./UtilApplications.js';import{SharedConsts}from'../shared/SharedConsts.js';import{Config}from'./Config.js';import{DataConverter}from'./DataConverter.js';class DataConverterPsionic{static[_0x30ebf7('0x29')](_0x26e3f4,_0x35e02e){const _0x1f736b=_0x30ebf7;return _0x35e02e=_0x35e02e||{},[this[_0x1f736b('0x17')](_0x26e3f4,_0x35e02e),this[_0x1f736b('0x39')](_0x26e3f4,_0x35e02e),...this[_0x1f736b('0x4b')](_0x26e3f4,_0x35e02e)][_0x1f736b('0xd')](Boolean);}static[_0x30ebf7('0x13')](_0x391037,_0x342cea){const _0x5d54d1=_0x30ebf7;_0x342cea=_0x342cea||{};const _0x213595={[SharedConsts['MODULE_NAME']]:{'page':UrlUtil[_0x5d54d1('0x3f')],'source':_0x391037[_0x5d54d1('0x38')],'hash':UrlUtil[_0x5d54d1('0x9')][UrlUtil['PG_PSIONICS']](_0x391037)}};return _0x342cea[_0x5d54d1('0xc')]&&(_0x213595[SharedConsts[_0x5d54d1('0x2d')]][_0x5d54d1('0x28')]={'psionic':MiscUtil[_0x5d54d1('0x1d')](_0x391037)},_0x213595[SharedConsts[_0x5d54d1('0x2d')]][_0x5d54d1('0x7')]=_0x342cea[_0x5d54d1('0x7')]),_0x213595;}static[_0x30ebf7('0x17')](_0x1cb6da,_0x1b9ef2){const _0x5d0874=_0x30ebf7;if(_0x1cb6da[_0x5d0874('0x11')]!=='T')return null;const _0x191d28=JSON[_0x5d0874('0x4')](_0x1cb6da[_0x5d0874('0x35')]),_0x4fc013=this[_0x5d0874('0x2')](_0x191d28);let _0x139f01='',_0x125e26=null;const _0x227289=[];_0x191d28['replace'](/\({@damage ([^}]+)}\)/g,(..._0x435ef2)=>_0x227289[_0x5d0874('0x1b')](_0x435ef2[0x1]));const _0x17ad23=/(?:^|[^(]){@dice ([^}]+)}(?:[^)]|$)/[_0x5d0874('0x15')](_0x191d28);if(_0x227289[_0x5d0874('0x20')]===0x3){if(_0x17ad23)_0x125e26=_0x17ad23[0x1];else _0x125e26=_0x227289[0x0];}if(_0x17ad23)_0x139f01=_0x17ad23;else{if(_0x227289[_0x5d0874('0x20')])_0x139f01=_0x227289[0x0];}const _0x19548d=this[_0x5d0874('0x46')](_0x191d28),_0x2f994f=_0x139f01?[_0x139f01,_0x19548d][_0x5d0874('0xd')](Boolean):null,_0x3fc3df=this['_getPsionicItems_getSaveFromString'](_0x191d28);return{'name':UtilApplications[_0x5d0874('0xb')](DataConverter[_0x5d0874('0x0')](_0x1cb6da)),'type':_0x5d0874('0x2f'),'data':{'source':DataConverter[_0x5d0874('0x1f')](_0x1cb6da),'description':{'value':Config[_0x5d0874('0x51')](_0x5d0874('0x4e'),_0x5d0874('0x43'))?_0x5d0874('0x25')+Renderer[_0x5d0874('0x5')][_0x5d0874('0x32')](_0x1cb6da,Renderer[_0x5d0874('0x51')]())+_0x5d0874('0x47'):'','chat':'','unidentified':''},'actionType':_0x4fc013,'level':0x0,'school':_0x5d0874('0x2e'),'components':{'value':'','vocal':![],'somatic':![],'material':![],'ritual':![],'concentration':![]},'materials':{'value':'','consumed':![],'cost':0x0,'supply':0x0},'target':{'value':0x0,'units':'','type':''},'range':{'value':null,'units':'','long':null},'activation':{'type':_0x4fc013,'cost':0x1,'condition':''},'duration':{'value':0x0,'units':''},'damage':{'parts':[_0x2f994f][_0x5d0874('0xd')](Boolean),'versatile':''},'scaling':{'mode':_0x125e26?_0x5d0874('0x26'):_0x5d0874('0x12'),'formula':_0x125e26||''},'save':{'ability':_0x3fc3df,'dc':null},'ability':_0x5d0874('0xf'),'uses':{'value':0x0,'max':0x0,'per':''},'attackBonus':0x0,'chatFlavor':'','critical':null,'formula':'','preparation':{'mode':_0x5d0874('0x42'),'prepared':!![]}},'img':_0x5d0874('0xa')+SharedConsts[_0x5d0874('0x2d')]+_0x5d0874('0x45'),'flags':{...this[_0x5d0874('0x13')](_0x1cb6da,_0x1b9ef2)},'effects':[]};}static[_0x30ebf7('0x39')](_0x98c869,_0x3ec3a6){const _0x42732a=_0x30ebf7;if(_0x98c869[_0x42732a('0x11')]!=='D')return null;return{'name':UtilApplications[_0x42732a('0xb')](DataConverter[_0x42732a('0x0')](_0x98c869,_0x98c869['name']+_0x42732a('0x36'))),'type':'spell','data':{'source':DataConverter[_0x42732a('0x1f')](_0x98c869),'description':{'value':Config[_0x42732a('0x51')]('importPsionic',_0x42732a('0x43'))?'<div>'+Renderer[_0x42732a('0x51')]()['setFirstSection'](!![])[_0x42732a('0x30')]({'entries':[_0x98c869['focus']]})+'</div>':'','chat':'','unidentified':''},'actionType':_0x42732a('0x19'),'level':0x0,'school':_0x42732a('0x2e'),'components':{'value':'','vocal':![],'somatic':![],'material':![],'ritual':![],'concentration':![]},'materials':{'value':'','consumed':![],'cost':0x0,'supply':0x0},'target':{'value':0x0,'units':'','type':''},'range':{'value':null,'units':'','long':null},'activation':{'type':_0x42732a('0x19'),'cost':0x1,'condition':_0x42732a('0x33')},'duration':{'value':0x0,'units':''},'damage':{'parts':[],'versatile':''},'scaling':{'mode':_0x42732a('0x12'),'formula':''},'save':{'ability':null,'dc':null},'ability':_0x42732a('0xf'),'uses':{'value':0x0,'max':0x0,'per':''},'attackBonus':0x0,'chatFlavor':'','critical':null,'formula':'','preparation':{'mode':_0x42732a('0x42'),'prepared':!![]}},'img':_0x42732a('0xa')+SharedConsts[_0x42732a('0x2d')]+'/media/icon/brain.svg','flags':{...this['_getPsionicFlags'](_0x98c869,_0x3ec3a6)},'effects':[]};}static[_0x30ebf7('0x4b')](_0xb34dc2,_0x30c285){const _0x3b494f=_0x30ebf7,_0xa826ef=_0x4d851c=>{const _0x53842f=_0x3120,_0x2157f9=_0x4856c4=>_0x4856c4['cost']?'\x20('+(_0x4856c4[_0x53842f('0x1e')][_0x53842f('0x3e')]===_0x4856c4['cost']['max']?_0x4856c4[_0x53842f('0x1e')][_0x53842f('0x3e')]:_0x4856c4[_0x53842f('0x1e')]['min']+'-'+_0x4856c4[_0x53842f('0x1e')][_0x53842f('0x4f')])+_0x53842f('0x1a'):'',_0x4c0320=_0x2157f9(_0x4d851c),_0x257bb3=_0x4d851c['submodes']?Renderer[_0x53842f('0x51')]()[_0x53842f('0x23')](!![])[_0x53842f('0x30')]({'type':_0x53842f('0x22'),'style':_0x53842f('0x34'),'items':_0x4d851c[_0x53842f('0x44')][_0x53842f('0x24')](_0x53488a=>({'type':_0x53842f('0x50'),'name':''+_0x53488a['name']+_0x2157f9(_0x53488a),'entry':_0x53488a['entries'][_0x53842f('0x41')]('<br>')}))},0x2):'',_0x228c25=JSON[_0x53842f('0x4')](_0x4d851c[_0x53842f('0x35')]),_0x1129c2=this[_0x53842f('0x2')](_0x228c25);let _0x373a44=null;const _0x242405=[],_0xd6820e=this['_getPsionicItems_getDamageTypeFromString'](_0x228c25);_0x228c25['replace'](/{@(?:scaledice|scaledamage) ([^}]+)}/,(..._0x1514d2)=>{const _0xdcbe0c=_0x53842f,[_0x1e0941,_0x4fe89b,_0x2b0543]=_0x1514d2[0x1]['split']('|');_0x242405[_0xdcbe0c('0x1b')](_0x1e0941),_0x373a44=_0x2b0543;});!_0x242405[_0x53842f('0x20')]&&_0x228c25[_0x53842f('0x2b')](/{@damage ([^}]+)}/g,(..._0x104de8)=>_0x242405[_0x53842f('0x1b')](_0x104de8[0x1]));const _0x516e09=_0x242405[_0x53842f('0x24')](_0x28aa62=>[_0x28aa62,_0xd6820e][_0x53842f('0xd')](Boolean)),_0x9e6d=this[_0x53842f('0x31')](_0x228c25),_0x2ee5c8=_0x4d851c[_0x53842f('0x1e')]?_0x4d851c[_0x53842f('0x1e')]['min']:_0x4d851c['submodes']?MiscUtil['get'](_0x4d851c[_0x53842f('0x44')][_0x53842f('0x8')](_0x18469a=>_0x18469a[_0x53842f('0x1e')]),_0x53842f('0x1e'),_0x53842f('0x3e'))||0x1:0x1,_0x3ada0c=_0x4d851c['concentration']?_0x4d851c[_0x53842f('0x3b')]['duration']:0x0,_0x1127eb=(_0x4d851c[_0x53842f('0x3b')]?DataConverterPsionic[_0x53842f('0x3')][_0x4d851c[_0x53842f('0x3b')][_0x53842f('0x37')]]:'')||'';return{'name':UtilApplications['getCleanEntityName'](DataConverter['getNameWithSourcePart'](_0xb34dc2,_0xb34dc2[_0x53842f('0xe')]+_0x53842f('0x2a')+_0x4d851c['name']+_0x4c0320)),'type':_0x53842f('0x2f'),'data':{'source':DataConverter[_0x53842f('0x1f')](_0xb34dc2),'description':{'value':Config[_0x53842f('0x51')](_0x53842f('0x4e'),'isImportDescription')?'<div>\x0a\x09\x09\x09\x09\x09\x09\x09'+Renderer['get']()[_0x53842f('0x23')](!![])[_0x53842f('0x30')]({'entries':_0x4d851c[_0x53842f('0x35')]},0x2)+_0x53842f('0x2c')+_0x257bb3+_0x53842f('0x3a'):'','chat':'','unidentified':''},'actionType':_0x1129c2,'level':_0x2ee5c8,'school':_0x53842f('0x2e'),'components':{'value':'','vocal':![],'somatic':![],'material':![],'ritual':![],'concentration':!!_0x4d851c[_0x53842f('0x3b')]},'materials':{'value':'','consumed':![],'cost':0x0,'supply':0x0},'target':{'value':0x0,'units':'','type':''},'range':{'value':null,'units':'','long':null},'activation':{'type':_0x1129c2,'cost':0x1,'condition':''},'duration':{'value':_0x3ada0c,'units':_0x1127eb},'damage':{'parts':_0x516e09,'versatile':''},'scaling':{'mode':_0x373a44?_0x53842f('0x4a'):_0x53842f('0x12'),'formula':_0x373a44||''},'save':{'ability':_0x9e6d,'dc':null},'ability':_0x53842f('0xf'),'uses':{'value':0x0,'max':0x0,'per':''},'attackBonus':0x0,'chatFlavor':'','critical':null,'formula':'','preparation':{'mode':'prepared','prepared':!![]}},'img':_0x53842f('0xa')+SharedConsts[_0x53842f('0x2d')]+_0x53842f('0x45'),'flags':{...this[_0x53842f('0x13')](_0xb34dc2,_0x30c285)},'effects':[]};};if(_0xb34dc2[_0x3b494f('0x11')]==='T')return[];else return _0xb34dc2[_0x3b494f('0x14')]['map'](_0x3b8056=>_0xa826ef(_0x3b8056));}static[_0x30ebf7('0x2')](_0x4107a7){const _0x3b735d=_0x30ebf7,_0x5ab61d=/bonus action/i[_0x3b735d('0x4c')](_0x4107a7),_0x460f00=/as an action|using your action/i[_0x3b735d('0x4c')](_0x4107a7);return _0x5ab61d?_0x3b735d('0x19'):_0x460f00?'action':'';}static['_getPsionicItems_getDamageTypeFromString'](_0x71f93d){const _0x432ca3=_0x30ebf7,_0x2046ad=Parser['DMG_TYPES'][_0x432ca3('0x24')](_0x1db7ca=>new RegExp('('+_0x1db7ca+_0x432ca3('0x16'),'ig')['exec'](_0x71f93d)),_0xc1015b=_0x2046ad[_0x432ca3('0xd')](Boolean)[_0x432ca3('0x24')](_0x5568fc=>_0x5568fc[0x1][_0x432ca3('0x48')]());return _0xc1015b[0x0]||null;}static[_0x30ebf7('0x31')](_0x5d8af0){const _0x241ac9=_0x30ebf7,_0x3f55b2=Object[_0x241ac9('0x10')](Parser[_0x241ac9('0x40')])[_0x241ac9('0x24')](_0x465aee=>new RegExp('('+_0x465aee+')\x20saving\x20throw','ig')[_0x241ac9('0x15')](_0x5d8af0)),_0x17027c=_0x3f55b2[_0x241ac9('0xd')](Boolean)['map'](_0x48cdea=>_0x48cdea[0x1][_0x241ac9('0x6')](0x0,0x3)[_0x241ac9('0x48')]());return _0x17027c[0x0]||null;}static['getPsionicItem'](_0x33dff6,_0x53601b){const _0x2be674=_0x30ebf7;_0x53601b=_0x53601b||{};const _0x3621d2=Renderer['psionic'][_0x2be674('0x1')](_0x33dff6),_0x4e37f5=_0x2be674('0x27')+_0x3621d2+_0x2be674('0x3d')+Renderer['psionic'][_0x2be674('0x32')](_0x33dff6,Renderer['get']()[_0x2be674('0x23')](!![])),_0x11041a={'name':_0x33dff6[_0x2be674('0xe')],'type':_0x2be674('0x18'),'data':{'description':{'value':Config[_0x2be674('0x51')]('importPsionic',_0x2be674('0x43'))?_0x2be674('0x25')+_0x4e37f5+_0x2be674('0x47'):'','chat':'','unidentified':''},'source':DataConverter[_0x2be674('0x1f')](_0x33dff6),'damage':{'parts':[]},'activation':{'type':'','cost':0x0,'condition':''},'duration':{'value':null,'units':''},'target':{'value':null,'units':'','type':''},'range':{'value':null,'long':null,'units':''},'uses':{'value':0x0,'max':0x0,'per':null},'ability':null,'actionType':'','attackBonus':0x0,'chatFlavor':'','critical':null,'formula':'','save':{'ability':'','dc':null},'requirements':'','recharge':{'value':null,'charged':![]}},'flags':{...this['_getPsionicFlags'](_0x33dff6,_0x53601b)},'effects':[],'img':'modules/'+SharedConsts[_0x2be674('0x2d')]+_0x2be674('0x45')};if(_0x53601b[_0x2be674('0x21')])_0x11041a[_0x2be674('0x4d')]={'default':Config[_0x2be674('0x51')](_0x2be674('0x4e'),'permissions')};return _0x11041a;}}DataConverterPsionic[_0x30ebf7('0x3')]={'min':_0x30ebf7('0x3c'),'hr':_0x30ebf7('0x1c'),'rnd':_0x30ebf7('0x49')};export{DataConverterPsionic};