const _0x4ad6=['body','@font-face','.window-header','\x0a\x09\x09\x09</style>','\x0a}\x0a','name','\x20{\x0a','addClass','element','renderJournalSheet','<link\x20rel=\x22stylesheet\x22\x20href=\x22','ve-hidden','append','removeClass','replace','renderSceneConfig','click','forEach','pop__window','className','init','renderActorSheet','actor','minimize','\x0a\x09\x09</head><body\x20class=\x22flex-col\x20','selectorText','width=800,height=800,location=0,menubar=0,status=0,titlebar=0,toolbar=0,directories=0','includes','preventDefault','close','error','document','startsWith','_doAddButtonSheet','pathname','find','.pop__btn-open','push','unload','pHandleButtonClick','styleSheets','insertBefore','remove','.window-resizable-handle','_plut_IsPopout','href','join','rules','renderRollTableConfig','get','<a\x20class=\x22pop__btn-open\x22\x20title=\x22Pop\x20Out\x20(Warning:\x20Experimental)\x22><span\x20class=\x22fas\x20fa-external-link-alt\x22></span></a>','_getDocumentStyleHtml','_handlePopoutClick','renderArtBrowserApp','cssRules','cssText','renderItemSheet'];(function(_0x25119c,_0x4ad669){const _0xb8d1ec=function(_0xd03a3e){while(--_0xd03a3e){_0x25119c['push'](_0x25119c['shift']());}};_0xb8d1ec(++_0x4ad669);}(_0x4ad6,0x176));const _0xb8d1=function(_0x25119c,_0x4ad669){_0x25119c=_0x25119c-0x0;let _0xb8d1ec=_0x4ad6[_0x25119c];return _0xb8d1ec;};const _0x24d0fe=_0xb8d1;'use strict';import{LGT}from'./Util.js';class PopoutSheet{static[_0x24d0fe('0x2d')](){const _0x5365c6=_0x24d0fe;Hooks['on'](_0x5365c6('0x28'),(_0xd03a3e,_0x401604,_0x5888ae)=>PopoutSheet['_doAddButtonSheet'](_0xd03a3e,_0x401604,_0x5888ae)),Hooks['on'](_0x5365c6('0x2e'),(_0x134708,_0x801566,_0x1aaa79)=>PopoutSheet[_0x5365c6('0x1')](_0x134708,_0x801566,_0x1aaa79)),Hooks['on'](_0x5365c6('0x18'),(_0x369807,_0x36747b,_0x399ce6)=>PopoutSheet[_0x5365c6('0x1')](_0x369807,_0x36747b,_0x399ce6)),Hooks['on'](_0x5365c6('0x22'),(_0x59eff2,_0x3cffb8,_0x4813f7)=>PopoutSheet['_doAddButtonSheet'](_0x59eff2,_0x3cffb8,_0x4813f7)),Hooks['on'](_0x5365c6('0x10'),(_0x430b68,_0xc2de7a,_0x2e2305)=>PopoutSheet[_0x5365c6('0x1')](_0x430b68,_0xc2de7a,_0x2e2305)),Hooks['on'](_0x5365c6('0x15'),(_0x31b110,_0x570bd3,_0x3b46aa)=>PopoutSheet[_0x5365c6('0x1')](_0x31b110,_0x570bd3,_0x3b46aa));}static[_0x24d0fe('0x1')](_0x19850e,_0x4a5eae,_0x4d74f1){const _0x24d7bd=_0x24d0fe,_0x31b166=_0x19850e[_0x24d7bd('0x21')][_0x24d7bd('0x3')](_0x24d7bd('0x1b'));_0x31b166[_0x24d7bd('0x3')](_0x24d7bd('0x4'))[_0x24d7bd('0xa')](),$(_0x24d7bd('0x12'))[_0x24d7bd('0x29')](_0x9c1e15=>this['pHandleButtonClick'](_0x9c1e15,_0x19850e,_0x4a5eae,_0x4d74f1))[_0x24d7bd('0x9')](_0x31b166['find']('.close'));}static[_0x24d0fe('0x7')](_0xeb5d7c,_0x36e981,_0x52007d,_0x9fc468){const _0x38ff47=_0x24d0fe;_0xeb5d7c[_0x38ff47('0x35')](),this['_handlePopoutClick'](_0x36e981,_0x9fc468);}static[_0x24d0fe('0x13')](){const _0x8f2bce=_0x24d0fe,_0x23da15=[],_0x3c75a8=_0x32128d=>{const _0x290071=_0xb8d1,_0x17d7e1=_0x290071('0x16')in _0x32128d?_0x32128d[_0x290071('0x16')]:_0x32128d[_0x290071('0xf')];if(!_0x17d7e1)return;const _0x2f850b=[];[..._0x17d7e1||[]][_0x290071('0x2a')](_0x4990cf=>{const _0x71fa6=_0x290071;let _0x43c377='cssText'in _0x4990cf?_0x4990cf[_0x71fa6('0x17')]:_0x4990cf[_0x71fa6('0x32')]+_0x71fa6('0x1f')+_0x4990cf['style'][_0x71fa6('0x17')]+_0x71fa6('0x1d');_0x43c377[_0x71fa6('0x34')](_0x71fa6('0x1a'))&&(_0x43c377=_0x43c377[_0x71fa6('0x27')](/(url\(")([^"]+)("\))/g,(..._0x415907)=>{const _0x432940=_0x71fa6;if(_0x415907[0x2][_0x432940('0x0')]('/')||!_0x32128d['href'])return''+_0x415907[0x1]+_0x415907[0x2]+_0x415907[0x3];else{const _0x5bc51d=new URL(_0x32128d[_0x432940('0xd')])[_0x432940('0x2')]['split']('/')['slice'](0x0,-0x1)[_0x432940('0xe')]('/');return''+_0x415907[0x1]+_0x5bc51d+'/'+_0x415907[0x2]+_0x415907[0x3];}})),_0x2f850b[_0x71fa6('0x5')](_0x43c377);}),_0x23da15[_0x290071('0x5')]('<style>\x0a\x09\x09\x09\x09'+_0x2f850b[_0x290071('0xe')]('\x0a')+_0x290071('0x1c'));};return[...document[_0x8f2bce('0x8')]||[]][_0x8f2bce('0x2a')](_0x23ea3f=>{const _0x202a81=_0x8f2bce;try{_0x3c75a8(_0x23ea3f);}catch(_0x39340e){console[_0x202a81('0x37')](...LGT,_0x39340e);if(_0x23ea3f[_0x202a81('0xd')])_0x23da15[_0x202a81('0x5')](_0x202a81('0x23')+_0x23ea3f[_0x202a81('0xd')]+'\x22>');}}),_0x23da15[_0x8f2bce('0xe')]('\x0a');}static[_0x24d0fe('0x14')](_0x55a929,_0x84aed2){const _0x54ee46=_0x24d0fe,_0x570e07=MiscUtil[_0x54ee46('0x11')](_0x84aed2,_0x54ee46('0x2f'),_0x54ee46('0x1e'))||MiscUtil[_0x54ee46('0x11')](_0x84aed2,'entity','name')||'',_0x2837f7=open('',_0x570e07,_0x54ee46('0x33'));_0x2837f7[_0x54ee46('0x38')]['write']('\x0a\x09\x09<!DOCTYPE\x20html>\x0a\x09\x09<html\x20lang=\x22en\x22><head>\x0a\x09\x09\x09<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a\x09\x09\x09<title>'+_0x570e07+'</title>\x0a\x0a\x09\x09\x09'+this[_0x54ee46('0x13')]()+_0x54ee46('0x31')+document[_0x54ee46('0x19')][_0x54ee46('0x2c')]+'\x22></body></html>\x0a\x09\x09');const _0x340964=$(_0x2837f7[_0x54ee46('0x38')][_0x54ee46('0x19')]);_0x55a929[_0x54ee46('0xc')]=!![];const _0x1d9749=_0x55a929[_0x54ee46('0x30')];_0x55a929[_0x54ee46('0x30')]=async()=>{},_0x55a929[_0x54ee46('0x21')][_0x54ee46('0x20')](_0x54ee46('0x2b')),_0x340964[_0x54ee46('0x25')](_0x55a929[_0x54ee46('0x21')]);const _0x453c46=_0x55a929['element']['find'](_0x54ee46('0xb'))[_0x54ee46('0x20')](_0x54ee46('0x24'));_0x2837f7['addEventListener'](_0x54ee46('0x6'),()=>{const _0x4d0748=_0x54ee46;$(document[_0x4d0748('0x19')])[_0x4d0748('0x25')](_0x55a929['element']),_0x55a929[_0x4d0748('0x21')]['removeClass']('pop__window'),_0x453c46[_0x4d0748('0x26')](_0x4d0748('0x24')),_0x55a929[_0x4d0748('0xc')]=![],_0x55a929[_0x4d0748('0x30')]=_0x1d9749,_0x55a929[_0x4d0748('0x36')]();});}}export{PopoutSheet};