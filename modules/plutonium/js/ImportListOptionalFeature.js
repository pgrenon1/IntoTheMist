var _0x4e8e=['_pImportEntry_pImportToDirectoryGeneric','sourceJsonToColor','Prerequisite','Type','Importing\x20other\x20option/feature\x20\x22','SOURCE_TYP_CUSTOM','mutateForFilters','_pImportEntry_pImportToActor','DataSourceUrl','level','_titleButtonRun','utils','sourceLong','isToken','Upload\x20File','Level','\x22\x20(from\x20\x22','Item','get','pGetOptionalFeatureItem','source','name','SOURCE_TYP_BREW','_content','pGetSources','TASK_EXIT_COMPLETE','Name','PG_OPT_FEATURES','getListPrerequisiteLevelText','prerequisite','log','_pageFilter','sourceJsonToAbv','_vPrerequisite','absorbFnGetData','_page','items','getData','pImportEntry','_vLevel','text-center','sourceClassName','_titleSearch','_lFeatureType','optionalfeature','options\x20and\x20features','isTemp','5etools','pGetHomebrewSources','SRD','_isPreviewable','_actor','_list','sourceJsonToFull','_activateListeners_absorbListItems','isStreamerMode','DATA_URL_OPTIONALFEATURES','createEmbeddedEntity','absorbFnBindListeners','Custom\x20URL','render','OwnedItem','DataSourceFile','doAbsorbItems'];(function(_0x4131bb,_0x4e8e5f){var _0x3ac288=function(_0x70b4d2){while(--_0x70b4d2){_0x4131bb['push'](_0x4131bb['shift']());}};_0x3ac288(++_0x4e8e5f);}(_0x4e8e,0x1b9));var _0x3ac2=function(_0x4131bb,_0x4e8e5f){_0x4131bb=_0x4131bb-0x0;var _0x3ac288=_0x4e8e[_0x4131bb];return _0x3ac288;};var _0x3ce900=_0x3ac2;'use strict';import{ImportList}from'./ImportList.js';import{Vetools}from'./Vetools.js';import{LGT}from'./Util.js';import{Config}from'./Config.js';import{UtilList2}from'./UtilList2.js';import{DataConverterOptionalfeature}from'./DataConverterOptionalfeature.js';import{UtilApplications}from'./UtilApplications.js';class ImportListOptionalFeature extends ImportList{constructor(_0x70b4d2){var _0x52d39a=_0x3ac2;_0x70b4d2=_0x70b4d2||{},super({'title':'Import\x20Other\x20Options\x20and\x20Features'},_0x70b4d2,{'props':[_0x52d39a('0x33')],'titleSearch':_0x52d39a('0x34'),'sidebarTab':_0x52d39a('0x2b'),'gameProp':_0x52d39a('0x2b'),'defaultFolderPath':['Other\x20Options\x20and\x20Features'],'folderType':_0x52d39a('0x18'),'pageFilter':new PageFilterOptionalFeatures(),'page':UrlUtil[_0x52d39a('0x22')],'isPreviewable':!![],'isDedupable':!![]});}async[_0x3ce900('0x1f')](){var _0x485f10=_0x3ce900;return[new ImportList[(_0x485f10('0xf'))](Config[_0x485f10('0x19')]('ui',_0x485f10('0x3e'))?_0x485f10('0x38'):_0x485f10('0x36'),Vetools[_0x485f10('0x3f')],{'filterTypes':[ImportList['SOURCE_TYP_OFFICIAL_ALL']],'isDefault':!![]}),new ImportList[(_0x485f10('0xf'))](_0x485f10('0x2'),'',{'filterTypes':[ImportList[_0x485f10('0xc')]]}),new ImportList[(_0x485f10('0x5'))](_0x485f10('0x15'),{'filterTypes':[ImportList[_0x485f10('0xc')]]}),...(await Vetools[_0x485f10('0x37')](_0x485f10('0x33')))['map'](({name:_0x2fb1b0,url:_0x35b7dc})=>new ImportList[(_0x485f10('0xf'))](_0x2fb1b0,_0x35b7dc,{'filterTypes':[ImportList[_0x485f10('0x1d')]]}))];}[_0x3ce900('0x2c')](){var _0x1d5e63=_0x3ce900;return{'isPreviewable':this[_0x1d5e63('0x39')],'titleButtonRun':this[_0x1d5e63('0x11')],'titleSearch':this[_0x1d5e63('0x31')],'cols':[{'name':_0x1d5e63('0x21'),'width':0x4,'field':_0x1d5e63('0x1c')},{'name':_0x1d5e63('0xa'),'width':0x2,'field':'type','rowClassName':_0x1d5e63('0x2f')},{'name':_0x1d5e63('0x9'),'width':0x3,'field':'prerequisite','rowClassName':'text-center'},{'name':_0x1d5e63('0x16'),'width':0x1,'field':_0x1d5e63('0x10'),'rowClassName':'text-center'},{'name':'Source','width':0x1,'field':_0x1d5e63('0x1b'),'titleProp':_0x1d5e63('0x13'),'displayProp':'sourceShort','classNameProp':_0x1d5e63('0x30'),'rowClassName':'text-center'}],'rows':this[_0x1d5e63('0x1e')]['map']((_0x327524,_0x502684)=>{var _0x11b6c2=_0x1d5e63;return this[_0x11b6c2('0x26')][_0x11b6c2('0xd')](_0x327524),_0x327524['_vPrerequisite']=Renderer[_0x11b6c2('0x12')]['getPrerequisiteText'](_0x327524[_0x11b6c2('0x24')],!![],new Set([_0x11b6c2('0x10')])),_0x327524['_vLevel']=Renderer[_0x11b6c2('0x33')][_0x11b6c2('0x23')](_0x327524[_0x11b6c2('0x24')]),{'name':_0x327524[_0x11b6c2('0x1c')],'type':_0x327524['_lFeatureType'],'prerequisite':_0x327524[_0x11b6c2('0x28')],'level':_0x327524[_0x11b6c2('0x2e')],'source':_0x327524[_0x11b6c2('0x1b')],'sourceShort':Parser[_0x11b6c2('0x27')](_0x327524[_0x11b6c2('0x1b')]),'sourceLong':Parser[_0x11b6c2('0x3c')](_0x327524['source']),'sourceClassName':Parser[_0x11b6c2('0x8')](_0x327524[_0x11b6c2('0x1b')]),'ix':_0x502684};})};}[_0x3ce900('0x3d')](){var _0x5cc3e2=_0x3ce900;this[_0x5cc3e2('0x3b')][_0x5cc3e2('0x6')](this[_0x5cc3e2('0x1e')],{'fnGetName':_0x1c20fc=>_0x1c20fc[_0x5cc3e2('0x1c')],'fnGetValues':_0x104170=>({'source':_0x104170[_0x5cc3e2('0x1b')],'prerequisite':_0x104170[_0x5cc3e2('0x28')],'level':_0x104170['_vLevel'],'type':_0x104170[_0x5cc3e2('0x32')],'hash':UrlUtil['URL_TO_HASH_BUILDER'][this[_0x5cc3e2('0x2a')]](_0x104170)}),'fnGetData':UtilList2[_0x5cc3e2('0x29')],'fnBindListeners':_0x96af3a=>UtilList2[_0x5cc3e2('0x1')](this['_list'],_0x96af3a)});}async[_0x3ce900('0x2d')](_0x57ff2d,_0x525217){var _0x4a8fa4=_0x3ce900;_0x525217=_0x525217||{},console[_0x4a8fa4('0x25')](...LGT,_0x4a8fa4('0xb')+_0x57ff2d[_0x4a8fa4('0x1c')]+_0x4a8fa4('0x17')+Parser['sourceJsonToAbv'](_0x57ff2d['source'])+'\x22)');if(_0x525217[_0x4a8fa4('0x35')])return this[_0x4a8fa4('0x7')](_0x57ff2d,_0x525217);else{if(this['_actor'])return this[_0x4a8fa4('0xe')](_0x57ff2d,_0x525217);else return this[_0x4a8fa4('0x7')](_0x57ff2d,_0x525217);}}async[_0x3ce900('0xe')](_0x47bd80,_0x68255){var _0x4e64f2=_0x3ce900;await this[_0x4e64f2('0x3a')][_0x4e64f2('0x0')](_0x4e64f2('0x4'),await DataConverterOptionalfeature['pGetOptionalFeatureItem'](_0x47bd80),{});if(this['_actor'][_0x4e64f2('0x14')])this['_actor']['sheet'][_0x4e64f2('0x3')]();return{'imported':{'name':_0x47bd80[_0x4e64f2('0x1c')],'actor':this[_0x4e64f2('0x3a')]},'status':UtilApplications[_0x4e64f2('0x20')]};}['_pImportEntry_pImportToDirectoryGeneric_pGetImportableData'](_0x4c01c9,_0x33bbae){var _0x29f2ce=_0x3ce900;return DataConverterOptionalfeature[_0x29f2ce('0x1a')](_0x4c01c9,_0x33bbae);}}export{ImportListOptionalFeature};