define(["log","db","collection","db","ui"],function(a,b,c,b,d){var e=a.getLogger("xebiaprogram");e.info("Loading xebiaprogram.js");var f="xebiaprogram";e.info("Defining xebiaprogram object");var g={};return e.info("Loaded xebiaprogram"),g.onError=function(a,b){console.log("Registration error")},g.beforePageShow=function(){e.info("Refreshing xebia program"),g.refreshDataList({page:"#xebiaprogram",title:"Xebia Program",el:"#xebiaprogram-list",view:"xebiaprogram",template:$("#xebiaprogram-list-tpl").html(),url:"file://localhost/Users/karesti/Documents/workspace/devoxx-mobile/data/xebia-program.json",cacheKey:"/xebiaprogram",parse:function(a){return a}})},g.refreshDataList=function(a){$.mobile.showPageLoadingMsg(),e.info("Show "+a.title+" page message!"),d.showFlashMessage(a),e.info("Loading "+a.title+" View"),c.views[a.view]=new c.EntryListView({fetchUrl:a.url,el:a.el,collectionTemplate:a.template,parse:a.parse,beforeParse:a.beforeParse,afterParse:function(c){a.cacheKey&&!c.statusCode&&b.save(a.cacheKey,c),a.afterParse&&a.afterParse(c)}}),c.views[a.view].collection.length!==0&&c.views[a.view].collection.reset([]),e.info("Fetch "+a.title+" Data from url: '"+c.views[a.view].collection.url+"'");var f={success:function(b,c){a.success&&a.success(b,c),core.onFetchSuccess(b,c,a)},error:function(b,c,d){core.onFetchError(b,c,d,a)},fetchUrl:a.url};OFFLINE&&(f.jsonpCallback=DEBUG_JSON_CALLBACK),b.getOrFetch(a.cacheKey,function(b){c.views[a.view].collection.reset(b),d.hideFlashMessage(a)},function(){c.views[a.view].collection.fetch(f)})},g})