const _0x2275=['replace','checked','map','Creatures','pHandleButtonClick','userId','body','DND5E.PolymorphKeepBio','Actor\x20\x22','accept','<p>','DND5E.PolymorphKeepFeats','DND5E.PolymorphMergeSaves','pGetUserChoice','ACTOR_CREATE','dnd5e','.\x22\x20Proceed?</p><div><button\x20data-plut-actor-delete=\x22','_init_player','DND5E.PolymorphKeepSaves','actor-','DND5E.PolymorphMergeSkills','Open\x20List','click','currentTarget','info','i18n','[data-plut-actor-delete]','Cannot\x20polymorph:\x20','you\x20lack\x20actor\x20creation\x20permissions','data-plut-actor-delete','collection','Creature','with','Select\x20Creature','system-wide\x20player\x20polymorphing\x20is\x20disabled','DND5E.PolymorphKeepClass','name','length','mix','dialog','user','users','notifications','<i\x20class=\x22fas\x20fa-times\x22></i>','isGM','polymorphSettings','get','systems/dnd5e/templates/apps/polymorph-prompt.html','filter','settings','sourceActor','init','<i\x20class=\x22fas\x20fa-check\x22></i>','render','transformTokens','join','_init_gm','creatures-actorPolymorpher','\x22>Delete</button></div>','Select\x20Source','entities','can','actorPolymorpher','escapeQuotes','_actor','\x22\x20not\x20found!','Cancel','DND5E.PolymorphKeepVision','attr','DND5E.PolymorphKeepSkills','Configure\x20and\x20Open\x20List','localize','transformInto','ImportList','DND5E.PolymorphWildShape','actor','warn','sounds/notify.wav','<i\x20class=\x22fas\x20fa-pastafarianism\x22></i>','DND5E.PolymorphAcceptSettings','_sourceActor','ITEM_CREATE','DND5E.Polymorph','DND5E.PolymorphKeepItems','\x20has\x20transformed\x20back\x20into\x20their\x20original\x20form,\x20and\x20requests\x20you\x20delete\x20their\x20temporary\x20polymorphed\x20actor\x20\x22','isToken'];(function(_0x4e67f9,_0x227561){const _0x5e6689=function(_0x258eea){while(--_0x258eea){_0x4e67f9['push'](_0x4e67f9['shift']());}};_0x5e6689(++_0x227561);}(_0x2275,0x186));const _0x5e66=function(_0x4e67f9,_0x227561){_0x4e67f9=_0x4e67f9-0x0;let _0x5e6689=_0x2275[_0x4e67f9];return _0x5e6689;};const _0x53fa85=_0x5e66;import{ImportListCreature}from'./ImportListCreature.js';import{MixinUserChooseImporter}from'./ImportList.js';class ActorPolymorpher extends Dialog{static[_0x53fa85('0x5')](){const _0x4d72a1=_0x53fa85;if(game[_0x4d72a1('0x50')][_0x4d72a1('0x54')])this[_0x4d72a1('0xa')]();else this[_0x4d72a1('0x39')]();}static[_0x53fa85('0x39')](){const _0x489a86=_0x53fa85;$(document[_0x489a86('0x2e')])['on'](_0x489a86('0x3e'),'.restore-transformation',_0x258eea=>{const _0x32c315=_0x489a86,_0x5ee987=$(_0x258eea[_0x32c315('0x3f')])['closest']('.sheet.actor')['attr']('id')[_0x32c315('0x28')](_0x32c315('0x3b'),''),_0x1ffc04=Actor[_0x32c315('0x46')][_0x32c315('0x0')](_0x5ee987);ChatMessage['create']({'sound':_0x32c315('0x1f'),'content':_0x32c315('0x32')+game[_0x32c315('0x50')][_0x32c315('0x4c')]+_0x32c315('0x26')+_0x1ffc04[_0x32c315('0x4c')][_0x32c315('0x11')]()+_0x32c315('0x38')+_0x5ee987+_0x32c315('0xc'),'user':game[_0x32c315('0x2d')],'type':0x4,'whisper':game[_0x32c315('0x51')][_0x32c315('0xe')][_0x32c315('0x2')](_0x21522a=>_0x21522a[_0x32c315('0x54')])[_0x32c315('0x2a')](_0x117763=>_0x117763['id'])});});}static[_0x53fa85('0xa')](){const _0x1cc513=_0x53fa85;$(document[_0x1cc513('0x2e')])['on'](_0x1cc513('0x3e'),_0x1cc513('0x42'),async _0x1bcb26=>{const _0x488fd6=_0x1cc513,_0x4a9172=$(_0x1bcb26[_0x488fd6('0x3f')])[_0x488fd6('0x16')](_0x488fd6('0x45')),_0x52a3ff=Actor[_0x488fd6('0x46')][_0x488fd6('0x0')](_0x4a9172);if(!_0x52a3ff)return ui[_0x488fd6('0x52')][_0x488fd6('0x1e')](_0x488fd6('0x30')+_0x4a9172+_0x488fd6('0x13'));await _0x52a3ff['delete'](),ui['notifications'][_0x488fd6('0x40')]('Deleted\x20actor\x20\x22'+_0x52a3ff['name']+'\x22');});}static async[_0x53fa85('0x2c')](_0x5c1c08,_0x390cf7,_0x54b7a6,_0x535eab){const _0x5b6143=_0x53fa85;if(!game['user'][_0x5b6143('0x54')]){const _0x152a98=[game['user'][_0x5b6143('0xf')](_0x5b6143('0x36'))?'':_0x5b6143('0x44'),game[_0x5b6143('0x50')][_0x5b6143('0xf')](_0x5b6143('0x23'))?'':'you\x20lack\x20item\x20creation\x20permissions',game[_0x5b6143('0x3')][_0x5b6143('0x0')](_0x5b6143('0x37'),'allowPolymorphing')?'':_0x5b6143('0x4a')][_0x5b6143('0x2')](Boolean);if(_0x152a98[_0x5b6143('0x4d')])return ui['notifications']['warn'](_0x5b6143('0x43')+_0x152a98[_0x5b6143('0x9')](';\x20'));}const _0xfa13a1=new ActorPolymorpher(_0x390cf7[_0x5b6143('0x1d')]),_0x5d313e=await ActorPolymorpher[_0x5b6143('0x1b')][_0x5b6143('0x35')]({'id':_0x5b6143('0xb'),'name':_0x5b6143('0x2b'),'singleName':_0x5b6143('0x47'),'wizardTitleWindow':_0x5b6143('0xd'),'wizardTitlePanel3':_0x5b6143('0x18'),'wizardTitleButtonOpenImporter':_0x5b6143('0x3d')},_0x5b6143('0x10'));if(_0x5d313e==null)return;_0xfa13a1[_0x5b6143('0x4')]=_0x5d313e,_0xfa13a1[_0x5b6143('0x7')](!![]);}constructor(_0x3ba3b7){const _0x4976ed=_0x53fa85,_0xa52880=_0xf23531=>{const _0x26ab3b=_0x5e66,_0x3d2db8={};_0xf23531['find']('input')['each']((_0x286ebb,_0x250fd7)=>{const _0x1b0c9f=_0x5e66;_0x3d2db8[_0x250fd7[_0x1b0c9f('0x4c')]]=_0x250fd7[_0x1b0c9f('0x29')];});const _0x23d6bf=mergeObject(game[_0x26ab3b('0x3')][_0x26ab3b('0x0')](_0x26ab3b('0x37'),_0x26ab3b('0x55'))||{},_0x3d2db8);return game[_0x26ab3b('0x3')]['set'](_0x26ab3b('0x37'),'polymorphSettings',_0x23d6bf),_0x23d6bf;};super({'title':game[_0x4976ed('0x41')]['localize']('DND5E.PolymorphPromptTitle'),'content':{'options':game[_0x4976ed('0x3')][_0x4976ed('0x0')](_0x4976ed('0x37'),_0x4976ed('0x55')),'i18n':{'keepPhysical':game[_0x4976ed('0x41')]['localize']('DND5E.PolymorphKeepPhysical'),'keepMental':game[_0x4976ed('0x41')][_0x4976ed('0x19')]('DND5E.PolymorphKeepMental'),'keepSaves':game[_0x4976ed('0x41')]['localize'](_0x4976ed('0x3a')),'keepSkills':game['i18n'][_0x4976ed('0x19')](_0x4976ed('0x17')),'mergeSaves':game['i18n'][_0x4976ed('0x19')](_0x4976ed('0x34')),'mergeSkills':game['i18n'][_0x4976ed('0x19')](_0x4976ed('0x3c')),'keepClass':game[_0x4976ed('0x41')][_0x4976ed('0x19')](_0x4976ed('0x4b')),'keepFeats':game[_0x4976ed('0x41')][_0x4976ed('0x19')](_0x4976ed('0x33')),'keepSpells':game[_0x4976ed('0x41')][_0x4976ed('0x19')]('DND5E.PolymorphKeepSpells'),'keepItems':game[_0x4976ed('0x41')][_0x4976ed('0x19')](_0x4976ed('0x25')),'keepBio':game[_0x4976ed('0x41')][_0x4976ed('0x19')](_0x4976ed('0x2f')),'keepVision':game[_0x4976ed('0x41')][_0x4976ed('0x19')](_0x4976ed('0x15'))},'isToken':_0x3ba3b7[_0x4976ed('0x27')]},'default':_0x4976ed('0x31'),'buttons':{'accept':{'icon':_0x4976ed('0x6'),'label':game[_0x4976ed('0x41')][_0x4976ed('0x19')](_0x4976ed('0x21')),'callback':_0x57f151=>this[_0x4976ed('0x12')][_0x4976ed('0x1a')](this[_0x4976ed('0x22')],_0xa52880(_0x57f151))},'wildshape':{'icon':'<i\x20class=\x22fas\x20fa-paw\x22></i>','label':game[_0x4976ed('0x41')][_0x4976ed('0x19')](_0x4976ed('0x1c')),'callback':_0x4a6220=>this[_0x4976ed('0x12')][_0x4976ed('0x1a')](this['_sourceActor'],{'keepMental':!![],'mergeSaves':!![],'mergeSkills':!![],'transformTokens':_0xa52880(_0x4a6220)['transformTokens']})},'polymorph':{'icon':_0x4976ed('0x20'),'label':game['i18n'][_0x4976ed('0x19')](_0x4976ed('0x24')),'callback':_0x59f739=>this['_actor'][_0x4976ed('0x1a')](this['_sourceActor'],{'transformTokens':_0xa52880(_0x59f739)[_0x4976ed('0x8')]})},'cancel':{'icon':_0x4976ed('0x53'),'label':game[_0x4976ed('0x41')]['localize'](_0x4976ed('0x14'))}}},{'classes':[_0x4976ed('0x4f'),_0x4976ed('0x37')],'width':0x258,'template':_0x4976ed('0x1')}),this['_actor']=_0x3ba3b7,this[_0x4976ed('0x22')]=null;}set[_0x53fa85('0x4')](_0x227d66){this['_sourceActor']=_0x227d66;}}ActorPolymorpher[_0x53fa85('0x1b')]=class extends MiscUtil[_0x53fa85('0x4e')](ImportListCreature)[_0x53fa85('0x48')](MixinUserChooseImporter){constructor(_0x4b78e7){const _0x2011a6=_0x53fa85;super(_0x4b78e7,{'title':_0x2011a6('0x49')},{'titleButtonRun':'Select'});}};export{ActorPolymorpher};