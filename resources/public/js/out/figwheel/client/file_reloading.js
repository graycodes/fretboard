// Compiled by ClojureScript 0.0-3126 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__24574_SHARP_,p2__24575_SHARP_){
var and__16477__auto__ = p1__24574_SHARP_;
if(cljs.core.truth_(and__16477__auto__)){
return p2__24575_SHARP_;
} else {
return and__16477__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16489__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16489__auto__){
return or__16489__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__24577_SHARP_,p2__24576_SHARP_){
return [cljs.core.str(p2__24576_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16489__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16489__auto__){
return or__16489__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16489__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16489__auto__)){
return or__16489__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17388__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17388__auto__,method_table__17384__auto__,prefer_table__17385__auto__,method_cache__17386__auto__,cached_hierarchy__17387__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__24578){
var map__24579 = p__24578;
var map__24579__$1 = ((cljs.core.seq_QMARK_.call(null,map__24579))?cljs.core.apply.call(null,cljs.core.hash_map,map__24579):map__24579);
var file = cljs.core.get.call(null,map__24579__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__24580){
var map__24581 = p__24580;
var map__24581__$1 = ((cljs.core.seq_QMARK_.call(null,map__24581))?cljs.core.apply.call(null,cljs.core.hash_map,map__24581):map__24581);
var namespace = cljs.core.get.call(null,map__24581__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__17384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17388__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17388__auto__,method_table__17384__auto__,prefer_table__17385__auto__,method_cache__17386__auto__,cached_hierarchy__17387__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e24582){if((e24582 instanceof Error)){
var e = e24582;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24582;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var figwheel$client$file_reloading$reload_file_STAR_ = null;
var figwheel$client$file_reloading$reload_file_STAR___1 = (function (request_url){
return figwheel$client$file_reloading$reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var figwheel$client$file_reloading$reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
figwheel$client$file_reloading$reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$reload_file_STAR___1.call(this,request_url);
case 2:
return figwheel$client$file_reloading$reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_file_STAR___1;
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$reload_file_STAR___2;
return figwheel$client$file_reloading$reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24583,callback){
var map__24585 = p__24583;
var map__24585__$1 = ((cljs.core.seq_QMARK_.call(null,map__24585))?cljs.core.apply.call(null,cljs.core.hash_map,map__24585):map__24585);
var file_msg = map__24585__$1;
var request_url = cljs.core.get.call(null,map__24585__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24585,map__24585__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24585,map__24585__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24586){
var map__24588 = p__24586;
var map__24588__$1 = ((cljs.core.seq_QMARK_.call(null,map__24588))?cljs.core.apply.call(null,cljs.core.hash_map,map__24588):map__24588);
var file_msg = map__24588__$1;
var meta_data = cljs.core.get.call(null,map__24588__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__24588__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__16489__auto__ = meta_data;
if(cljs.core.truth_(or__16489__auto__)){
return or__16489__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16477__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16477__auto__){
var or__16489__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16489__auto__)){
return or__16489__auto__;
} else {
var or__16489__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16489__auto____$1)){
return or__16489__auto____$1;
} else {
var and__16477__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16477__auto____$1){
var or__16489__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16489__auto____$2){
return or__16489__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16477__auto____$1;
}
}
}
} else {
return and__16477__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24589,callback){
var map__24591 = p__24589;
var map__24591__$1 = ((cljs.core.seq_QMARK_.call(null,map__24591))?cljs.core.apply.call(null,cljs.core.hash_map,map__24591):map__24591);
var file_msg = map__24591__$1;
var namespace = cljs.core.get.call(null,map__24591__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__24591__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18867__auto___24678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___24678,out){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___24678,out){
return (function (state_24660){
var state_val_24661 = (state_24660[(1)]);
if((state_val_24661 === (7))){
var inst_24644 = (state_24660[(7)]);
var inst_24650 = (state_24660[(2)]);
var inst_24651 = cljs.core.async.put_BANG_.call(null,out,inst_24650);
var inst_24640 = inst_24644;
var state_24660__$1 = (function (){var statearr_24662 = state_24660;
(statearr_24662[(8)] = inst_24640);

(statearr_24662[(9)] = inst_24651);

return statearr_24662;
})();
var statearr_24663_24679 = state_24660__$1;
(statearr_24663_24679[(2)] = null);

(statearr_24663_24679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24661 === (6))){
var inst_24656 = (state_24660[(2)]);
var state_24660__$1 = state_24660;
var statearr_24664_24680 = state_24660__$1;
(statearr_24664_24680[(2)] = inst_24656);

(statearr_24664_24680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24661 === (5))){
var inst_24654 = cljs.core.async.close_BANG_.call(null,out);
var state_24660__$1 = state_24660;
var statearr_24665_24681 = state_24660__$1;
(statearr_24665_24681[(2)] = inst_24654);

(statearr_24665_24681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24661 === (4))){
var inst_24643 = (state_24660[(10)]);
var inst_24648 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24643);
var state_24660__$1 = state_24660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24660__$1,(7),inst_24648);
} else {
if((state_val_24661 === (3))){
var inst_24658 = (state_24660[(2)]);
var state_24660__$1 = state_24660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24660__$1,inst_24658);
} else {
if((state_val_24661 === (2))){
var inst_24640 = (state_24660[(8)]);
var inst_24643 = (state_24660[(10)]);
var inst_24643__$1 = cljs.core.nth.call(null,inst_24640,(0),null);
var inst_24644 = cljs.core.nthnext.call(null,inst_24640,(1));
var inst_24645 = (inst_24643__$1 == null);
var inst_24646 = cljs.core.not.call(null,inst_24645);
var state_24660__$1 = (function (){var statearr_24666 = state_24660;
(statearr_24666[(7)] = inst_24644);

(statearr_24666[(10)] = inst_24643__$1);

return statearr_24666;
})();
if(inst_24646){
var statearr_24667_24682 = state_24660__$1;
(statearr_24667_24682[(1)] = (4));

} else {
var statearr_24668_24683 = state_24660__$1;
(statearr_24668_24683[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24661 === (1))){
var inst_24638 = cljs.core.nth.call(null,files,(0),null);
var inst_24639 = cljs.core.nthnext.call(null,files,(1));
var inst_24640 = files;
var state_24660__$1 = (function (){var statearr_24669 = state_24660;
(statearr_24669[(8)] = inst_24640);

(statearr_24669[(11)] = inst_24638);

(statearr_24669[(12)] = inst_24639);

return statearr_24669;
})();
var statearr_24670_24684 = state_24660__$1;
(statearr_24670_24684[(2)] = null);

(statearr_24670_24684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18867__auto___24678,out))
;
return ((function (switch__18811__auto__,c__18867__auto___24678,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18812__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18812__auto____0 = (function (){
var statearr_24674 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24674[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18812__auto__);

(statearr_24674[(1)] = (1));

return statearr_24674;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18812__auto____1 = (function (state_24660){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_24660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e24675){if((e24675 instanceof Object)){
var ex__18815__auto__ = e24675;
var statearr_24676_24685 = state_24660;
(statearr_24676_24685[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24686 = state_24660;
state_24660 = G__24686;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18812__auto__ = function(state_24660){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18812__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18812__auto____1.call(this,state_24660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18812__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18812__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___24678,out))
})();
var state__18869__auto__ = (function (){var statearr_24677 = f__18868__auto__.call(null);
(statearr_24677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___24678);

return statearr_24677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___24678,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__24687,p__24688){
var map__24691 = p__24687;
var map__24691__$1 = ((cljs.core.seq_QMARK_.call(null,map__24691))?cljs.core.apply.call(null,cljs.core.hash_map,map__24691):map__24691);
var opts = map__24691__$1;
var url_rewriter = cljs.core.get.call(null,map__24691__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__24692 = p__24688;
var map__24692__$1 = ((cljs.core.seq_QMARK_.call(null,map__24692))?cljs.core.apply.call(null,cljs.core.hash_map,map__24692):map__24692);
var file_msg = map__24692__$1;
var file = cljs.core.get.call(null,map__24692__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24693){
var map__24696 = p__24693;
var map__24696__$1 = ((cljs.core.seq_QMARK_.call(null,map__24696))?cljs.core.apply.call(null,cljs.core.hash_map,map__24696):map__24696);
var file = cljs.core.get.call(null,map__24696__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__24696__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__16477__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16477__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16477__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e24697){var e = e24697;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24702,p__24703){
var map__24904 = p__24702;
var map__24904__$1 = ((cljs.core.seq_QMARK_.call(null,map__24904))?cljs.core.apply.call(null,cljs.core.hash_map,map__24904):map__24904);
var opts = map__24904__$1;
var load_unchanged_files = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__24905 = p__24703;
var map__24905__$1 = ((cljs.core.seq_QMARK_.call(null,map__24905))?cljs.core.apply.call(null,cljs.core.hash_map,map__24905):map__24905);
var msg = map__24905__$1;
var files = cljs.core.get.call(null,map__24905__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__18867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files){
return (function (state_25029){
var state_val_25030 = (state_25029[(1)]);
if((state_val_25030 === (7))){
var inst_24918 = (state_25029[(7)]);
var inst_24916 = (state_25029[(8)]);
var inst_24919 = (state_25029[(9)]);
var inst_24917 = (state_25029[(10)]);
var inst_24924 = cljs.core._nth.call(null,inst_24917,inst_24919);
var inst_24925 = figwheel.client.file_reloading.eval_body.call(null,inst_24924);
var inst_24926 = (inst_24919 + (1));
var tmp25031 = inst_24918;
var tmp25032 = inst_24916;
var tmp25033 = inst_24917;
var inst_24916__$1 = tmp25032;
var inst_24917__$1 = tmp25033;
var inst_24918__$1 = tmp25031;
var inst_24919__$1 = inst_24926;
var state_25029__$1 = (function (){var statearr_25034 = state_25029;
(statearr_25034[(7)] = inst_24918__$1);

(statearr_25034[(8)] = inst_24916__$1);

(statearr_25034[(9)] = inst_24919__$1);

(statearr_25034[(10)] = inst_24917__$1);

(statearr_25034[(11)] = inst_24925);

return statearr_25034;
})();
var statearr_25035_25104 = state_25029__$1;
(statearr_25035_25104[(2)] = null);

(statearr_25035_25104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (20))){
var inst_24962 = (state_25029[(12)]);
var inst_24961 = (state_25029[(13)]);
var inst_24966 = (state_25029[(14)]);
var inst_24965 = (state_25029[(15)]);
var inst_24968 = (state_25029[(16)]);
var inst_24971 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24973 = (function (){var files_not_loaded = inst_24968;
var res = inst_24966;
var res_SINGLEQUOTE_ = inst_24965;
var files_SINGLEQUOTE_ = inst_24962;
var all_files = inst_24961;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24962,inst_24961,inst_24966,inst_24965,inst_24968,inst_24971,state_val_25030,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files){
return (function (p__24972){
var map__25036 = p__24972;
var map__25036__$1 = ((cljs.core.seq_QMARK_.call(null,map__25036))?cljs.core.apply.call(null,cljs.core.hash_map,map__25036):map__25036);
var file = cljs.core.get.call(null,map__25036__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__25036__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24962,inst_24961,inst_24966,inst_24965,inst_24968,inst_24971,state_val_25030,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files))
})();
var inst_24974 = cljs.core.map.call(null,inst_24973,inst_24966);
var inst_24975 = cljs.core.pr_str.call(null,inst_24974);
var inst_24976 = figwheel.client.utils.log.call(null,inst_24975);
var inst_24977 = (function (){var files_not_loaded = inst_24968;
var res = inst_24966;
var res_SINGLEQUOTE_ = inst_24965;
var files_SINGLEQUOTE_ = inst_24962;
var all_files = inst_24961;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24962,inst_24961,inst_24966,inst_24965,inst_24968,inst_24971,inst_24973,inst_24974,inst_24975,inst_24976,state_val_25030,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24962,inst_24961,inst_24966,inst_24965,inst_24968,inst_24971,inst_24973,inst_24974,inst_24975,inst_24976,state_val_25030,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files))
})();
var inst_24978 = setTimeout(inst_24977,(10));
var state_25029__$1 = (function (){var statearr_25037 = state_25029;
(statearr_25037[(17)] = inst_24976);

(statearr_25037[(18)] = inst_24971);

return statearr_25037;
})();
var statearr_25038_25105 = state_25029__$1;
(statearr_25038_25105[(2)] = inst_24978);

(statearr_25038_25105[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (27))){
var inst_24988 = (state_25029[(19)]);
var state_25029__$1 = state_25029;
var statearr_25039_25106 = state_25029__$1;
(statearr_25039_25106[(2)] = inst_24988);

(statearr_25039_25106[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (1))){
var inst_24908 = (state_25029[(20)]);
var inst_24906 = before_jsload.call(null,files);
var inst_24907 = (function (){return ((function (inst_24908,inst_24906,state_val_25030,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files){
return (function (p1__24698_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24698_SHARP_);
});
;})(inst_24908,inst_24906,state_val_25030,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files))
})();
var inst_24908__$1 = cljs.core.filter.call(null,inst_24907,files);
var inst_24909 = cljs.core.not_empty.call(null,inst_24908__$1);
var state_25029__$1 = (function (){var statearr_25040 = state_25029;
(statearr_25040[(21)] = inst_24906);

(statearr_25040[(20)] = inst_24908__$1);

return statearr_25040;
})();
if(cljs.core.truth_(inst_24909)){
var statearr_25041_25107 = state_25029__$1;
(statearr_25041_25107[(1)] = (2));

} else {
var statearr_25042_25108 = state_25029__$1;
(statearr_25042_25108[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (24))){
var state_25029__$1 = state_25029;
var statearr_25043_25109 = state_25029__$1;
(statearr_25043_25109[(2)] = null);

(statearr_25043_25109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (4))){
var inst_24953 = (state_25029[(2)]);
var inst_24954 = (function (){return ((function (inst_24953,state_val_25030,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files){
return (function (p1__24699_SHARP_){
var and__16477__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24699_SHARP_);
if(cljs.core.truth_(and__16477__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24699_SHARP_));
} else {
return and__16477__auto__;
}
});
;})(inst_24953,state_val_25030,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files))
})();
var inst_24955 = cljs.core.filter.call(null,inst_24954,files);
var state_25029__$1 = (function (){var statearr_25044 = state_25029;
(statearr_25044[(22)] = inst_24955);

(statearr_25044[(23)] = inst_24953);

return statearr_25044;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_25045_25110 = state_25029__$1;
(statearr_25045_25110[(1)] = (16));

} else {
var statearr_25046_25111 = state_25029__$1;
(statearr_25046_25111[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (15))){
var inst_24943 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
var statearr_25047_25112 = state_25029__$1;
(statearr_25047_25112[(2)] = inst_24943);

(statearr_25047_25112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (21))){
var state_25029__$1 = state_25029;
var statearr_25048_25113 = state_25029__$1;
(statearr_25048_25113[(2)] = null);

(statearr_25048_25113[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (31))){
var inst_24996 = (state_25029[(24)]);
var inst_25006 = (state_25029[(2)]);
var inst_25007 = cljs.core.not_empty.call(null,inst_24996);
var state_25029__$1 = (function (){var statearr_25049 = state_25029;
(statearr_25049[(25)] = inst_25006);

return statearr_25049;
})();
if(cljs.core.truth_(inst_25007)){
var statearr_25050_25114 = state_25029__$1;
(statearr_25050_25114[(1)] = (32));

} else {
var statearr_25051_25115 = state_25029__$1;
(statearr_25051_25115[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (32))){
var inst_24996 = (state_25029[(24)]);
var inst_25009 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24996);
var inst_25010 = cljs.core.pr_str.call(null,inst_25009);
var inst_25011 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_25010)].join('');
var inst_25012 = figwheel.client.utils.log.call(null,inst_25011);
var state_25029__$1 = state_25029;
var statearr_25052_25116 = state_25029__$1;
(statearr_25052_25116[(2)] = inst_25012);

(statearr_25052_25116[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (33))){
var state_25029__$1 = state_25029;
var statearr_25053_25117 = state_25029__$1;
(statearr_25053_25117[(2)] = null);

(statearr_25053_25117[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (13))){
var inst_24929 = (state_25029[(26)]);
var inst_24933 = cljs.core.chunk_first.call(null,inst_24929);
var inst_24934 = cljs.core.chunk_rest.call(null,inst_24929);
var inst_24935 = cljs.core.count.call(null,inst_24933);
var inst_24916 = inst_24934;
var inst_24917 = inst_24933;
var inst_24918 = inst_24935;
var inst_24919 = (0);
var state_25029__$1 = (function (){var statearr_25054 = state_25029;
(statearr_25054[(7)] = inst_24918);

(statearr_25054[(8)] = inst_24916);

(statearr_25054[(9)] = inst_24919);

(statearr_25054[(10)] = inst_24917);

return statearr_25054;
})();
var statearr_25055_25118 = state_25029__$1;
(statearr_25055_25118[(2)] = null);

(statearr_25055_25118[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (22))){
var inst_24968 = (state_25029[(16)]);
var inst_24981 = (state_25029[(2)]);
var inst_24982 = cljs.core.not_empty.call(null,inst_24968);
var state_25029__$1 = (function (){var statearr_25056 = state_25029;
(statearr_25056[(27)] = inst_24981);

return statearr_25056;
})();
if(cljs.core.truth_(inst_24982)){
var statearr_25057_25119 = state_25029__$1;
(statearr_25057_25119[(1)] = (23));

} else {
var statearr_25058_25120 = state_25029__$1;
(statearr_25058_25120[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (36))){
var state_25029__$1 = state_25029;
var statearr_25059_25121 = state_25029__$1;
(statearr_25059_25121[(2)] = null);

(statearr_25059_25121[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (29))){
var inst_24997 = (state_25029[(28)]);
var inst_25000 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24997);
var inst_25001 = cljs.core.pr_str.call(null,inst_25000);
var inst_25002 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25001)].join('');
var inst_25003 = figwheel.client.utils.log.call(null,inst_25002);
var state_25029__$1 = state_25029;
var statearr_25060_25122 = state_25029__$1;
(statearr_25060_25122[(2)] = inst_25003);

(statearr_25060_25122[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (6))){
var inst_24950 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
var statearr_25061_25123 = state_25029__$1;
(statearr_25061_25123[(2)] = inst_24950);

(statearr_25061_25123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (28))){
var inst_24997 = (state_25029[(28)]);
var inst_24994 = (state_25029[(2)]);
var inst_24995 = cljs.core.get.call(null,inst_24994,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24996 = cljs.core.get.call(null,inst_24994,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_24997__$1 = cljs.core.get.call(null,inst_24994,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24998 = cljs.core.not_empty.call(null,inst_24997__$1);
var state_25029__$1 = (function (){var statearr_25062 = state_25029;
(statearr_25062[(28)] = inst_24997__$1);

(statearr_25062[(29)] = inst_24995);

(statearr_25062[(24)] = inst_24996);

return statearr_25062;
})();
if(cljs.core.truth_(inst_24998)){
var statearr_25063_25124 = state_25029__$1;
(statearr_25063_25124[(1)] = (29));

} else {
var statearr_25064_25125 = state_25029__$1;
(statearr_25064_25125[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (25))){
var inst_25027 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25029__$1,inst_25027);
} else {
if((state_val_25030 === (34))){
var inst_24995 = (state_25029[(29)]);
var inst_25015 = (state_25029[(2)]);
var inst_25016 = cljs.core.not_empty.call(null,inst_24995);
var state_25029__$1 = (function (){var statearr_25065 = state_25029;
(statearr_25065[(30)] = inst_25015);

return statearr_25065;
})();
if(cljs.core.truth_(inst_25016)){
var statearr_25066_25126 = state_25029__$1;
(statearr_25066_25126[(1)] = (35));

} else {
var statearr_25067_25127 = state_25029__$1;
(statearr_25067_25127[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (17))){
var inst_24955 = (state_25029[(22)]);
var state_25029__$1 = state_25029;
var statearr_25068_25128 = state_25029__$1;
(statearr_25068_25128[(2)] = inst_24955);

(statearr_25068_25128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (3))){
var state_25029__$1 = state_25029;
var statearr_25069_25129 = state_25029__$1;
(statearr_25069_25129[(2)] = null);

(statearr_25069_25129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (12))){
var inst_24946 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
var statearr_25070_25130 = state_25029__$1;
(statearr_25070_25130[(2)] = inst_24946);

(statearr_25070_25130[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (2))){
var inst_24908 = (state_25029[(20)]);
var inst_24915 = cljs.core.seq.call(null,inst_24908);
var inst_24916 = inst_24915;
var inst_24917 = null;
var inst_24918 = (0);
var inst_24919 = (0);
var state_25029__$1 = (function (){var statearr_25071 = state_25029;
(statearr_25071[(7)] = inst_24918);

(statearr_25071[(8)] = inst_24916);

(statearr_25071[(9)] = inst_24919);

(statearr_25071[(10)] = inst_24917);

return statearr_25071;
})();
var statearr_25072_25131 = state_25029__$1;
(statearr_25072_25131[(2)] = null);

(statearr_25072_25131[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (23))){
var inst_24962 = (state_25029[(12)]);
var inst_24961 = (state_25029[(13)]);
var inst_24966 = (state_25029[(14)]);
var inst_24965 = (state_25029[(15)]);
var inst_24988 = (state_25029[(19)]);
var inst_24968 = (state_25029[(16)]);
var inst_24984 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24987 = (function (){var files_not_loaded = inst_24968;
var res = inst_24966;
var res_SINGLEQUOTE_ = inst_24965;
var files_SINGLEQUOTE_ = inst_24962;
var all_files = inst_24961;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24962,inst_24961,inst_24966,inst_24965,inst_24988,inst_24968,inst_24984,state_val_25030,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files){
return (function (p__24986){
var map__25073 = p__24986;
var map__25073__$1 = ((cljs.core.seq_QMARK_.call(null,map__25073))?cljs.core.apply.call(null,cljs.core.hash_map,map__25073):map__25073);
var meta_data = cljs.core.get.call(null,map__25073__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24962,inst_24961,inst_24966,inst_24965,inst_24988,inst_24968,inst_24984,state_val_25030,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files))
})();
var inst_24988__$1 = cljs.core.group_by.call(null,inst_24987,inst_24968);
var inst_24989 = cljs.core.seq_QMARK_.call(null,inst_24988__$1);
var state_25029__$1 = (function (){var statearr_25074 = state_25029;
(statearr_25074[(31)] = inst_24984);

(statearr_25074[(19)] = inst_24988__$1);

return statearr_25074;
})();
if(inst_24989){
var statearr_25075_25132 = state_25029__$1;
(statearr_25075_25132[(1)] = (26));

} else {
var statearr_25076_25133 = state_25029__$1;
(statearr_25076_25133[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (35))){
var inst_24995 = (state_25029[(29)]);
var inst_25018 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24995);
var inst_25019 = cljs.core.pr_str.call(null,inst_25018);
var inst_25020 = [cljs.core.str("not required: "),cljs.core.str(inst_25019)].join('');
var inst_25021 = figwheel.client.utils.log.call(null,inst_25020);
var state_25029__$1 = state_25029;
var statearr_25077_25134 = state_25029__$1;
(statearr_25077_25134[(2)] = inst_25021);

(statearr_25077_25134[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (19))){
var inst_24962 = (state_25029[(12)]);
var inst_24961 = (state_25029[(13)]);
var inst_24966 = (state_25029[(14)]);
var inst_24965 = (state_25029[(15)]);
var inst_24965__$1 = (state_25029[(2)]);
var inst_24966__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24965__$1);
var inst_24967 = (function (){var res = inst_24966__$1;
var res_SINGLEQUOTE_ = inst_24965__$1;
var files_SINGLEQUOTE_ = inst_24962;
var all_files = inst_24961;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24962,inst_24961,inst_24966,inst_24965,inst_24965__$1,inst_24966__$1,state_val_25030,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files){
return (function (p1__24701_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24701_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24962,inst_24961,inst_24966,inst_24965,inst_24965__$1,inst_24966__$1,state_val_25030,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files))
})();
var inst_24968 = cljs.core.filter.call(null,inst_24967,inst_24965__$1);
var inst_24969 = cljs.core.not_empty.call(null,inst_24966__$1);
var state_25029__$1 = (function (){var statearr_25078 = state_25029;
(statearr_25078[(14)] = inst_24966__$1);

(statearr_25078[(15)] = inst_24965__$1);

(statearr_25078[(16)] = inst_24968);

return statearr_25078;
})();
if(cljs.core.truth_(inst_24969)){
var statearr_25079_25135 = state_25029__$1;
(statearr_25079_25135[(1)] = (20));

} else {
var statearr_25080_25136 = state_25029__$1;
(statearr_25080_25136[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (11))){
var state_25029__$1 = state_25029;
var statearr_25081_25137 = state_25029__$1;
(statearr_25081_25137[(2)] = null);

(statearr_25081_25137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (9))){
var inst_24948 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
var statearr_25082_25138 = state_25029__$1;
(statearr_25082_25138[(2)] = inst_24948);

(statearr_25082_25138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (5))){
var inst_24918 = (state_25029[(7)]);
var inst_24919 = (state_25029[(9)]);
var inst_24921 = (inst_24919 < inst_24918);
var inst_24922 = inst_24921;
var state_25029__$1 = state_25029;
if(cljs.core.truth_(inst_24922)){
var statearr_25083_25139 = state_25029__$1;
(statearr_25083_25139[(1)] = (7));

} else {
var statearr_25084_25140 = state_25029__$1;
(statearr_25084_25140[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (14))){
var inst_24929 = (state_25029[(26)]);
var inst_24938 = cljs.core.first.call(null,inst_24929);
var inst_24939 = figwheel.client.file_reloading.eval_body.call(null,inst_24938);
var inst_24940 = cljs.core.next.call(null,inst_24929);
var inst_24916 = inst_24940;
var inst_24917 = null;
var inst_24918 = (0);
var inst_24919 = (0);
var state_25029__$1 = (function (){var statearr_25085 = state_25029;
(statearr_25085[(7)] = inst_24918);

(statearr_25085[(32)] = inst_24939);

(statearr_25085[(8)] = inst_24916);

(statearr_25085[(9)] = inst_24919);

(statearr_25085[(10)] = inst_24917);

return statearr_25085;
})();
var statearr_25086_25141 = state_25029__$1;
(statearr_25086_25141[(2)] = null);

(statearr_25086_25141[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (26))){
var inst_24988 = (state_25029[(19)]);
var inst_24991 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24988);
var state_25029__$1 = state_25029;
var statearr_25087_25142 = state_25029__$1;
(statearr_25087_25142[(2)] = inst_24991);

(statearr_25087_25142[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (16))){
var inst_24955 = (state_25029[(22)]);
var inst_24957 = (function (){var all_files = inst_24955;
return ((function (all_files,inst_24955,state_val_25030,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files){
return (function (p1__24700_SHARP_){
return cljs.core.update_in.call(null,p1__24700_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_24955,state_val_25030,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files))
})();
var inst_24958 = cljs.core.map.call(null,inst_24957,inst_24955);
var state_25029__$1 = state_25029;
var statearr_25088_25143 = state_25029__$1;
(statearr_25088_25143[(2)] = inst_24958);

(statearr_25088_25143[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (30))){
var state_25029__$1 = state_25029;
var statearr_25089_25144 = state_25029__$1;
(statearr_25089_25144[(2)] = null);

(statearr_25089_25144[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (10))){
var inst_24929 = (state_25029[(26)]);
var inst_24931 = cljs.core.chunked_seq_QMARK_.call(null,inst_24929);
var state_25029__$1 = state_25029;
if(inst_24931){
var statearr_25090_25145 = state_25029__$1;
(statearr_25090_25145[(1)] = (13));

} else {
var statearr_25091_25146 = state_25029__$1;
(statearr_25091_25146[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (18))){
var inst_24962 = (state_25029[(12)]);
var inst_24961 = (state_25029[(13)]);
var inst_24961__$1 = (state_25029[(2)]);
var inst_24962__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_24961__$1);
var inst_24963 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24962__$1);
var state_25029__$1 = (function (){var statearr_25092 = state_25029;
(statearr_25092[(12)] = inst_24962__$1);

(statearr_25092[(13)] = inst_24961__$1);

return statearr_25092;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25029__$1,(19),inst_24963);
} else {
if((state_val_25030 === (37))){
var inst_25024 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
var statearr_25093_25147 = state_25029__$1;
(statearr_25093_25147[(2)] = inst_25024);

(statearr_25093_25147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (8))){
var inst_24929 = (state_25029[(26)]);
var inst_24916 = (state_25029[(8)]);
var inst_24929__$1 = cljs.core.seq.call(null,inst_24916);
var state_25029__$1 = (function (){var statearr_25094 = state_25029;
(statearr_25094[(26)] = inst_24929__$1);

return statearr_25094;
})();
if(inst_24929__$1){
var statearr_25095_25148 = state_25029__$1;
(statearr_25095_25148[(1)] = (10));

} else {
var statearr_25096_25149 = state_25029__$1;
(statearr_25096_25149[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files))
;
return ((function (switch__18811__auto__,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18812__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18812__auto____0 = (function (){
var statearr_25100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25100[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18812__auto__);

(statearr_25100[(1)] = (1));

return statearr_25100;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18812__auto____1 = (function (state_25029){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_25029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e25101){if((e25101 instanceof Object)){
var ex__18815__auto__ = e25101;
var statearr_25102_25150 = state_25029;
(statearr_25102_25150[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25151 = state_25029;
state_25029 = G__25151;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18812__auto__ = function(state_25029){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18812__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18812__auto____1.call(this,state_25029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18812__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18812__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files))
})();
var state__18869__auto__ = (function (){var statearr_25103 = f__18868__auto__.call(null);
(statearr_25103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);

return statearr_25103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,map__24904,map__24904__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24905,map__24905__$1,msg,files))
);

return c__18867__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25154,link){
var map__25156 = p__25154;
var map__25156__$1 = ((cljs.core.seq_QMARK_.call(null,map__25156))?cljs.core.apply.call(null,cljs.core.hash_map,map__25156):map__25156);
var file = cljs.core.get.call(null,map__25156__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__25156,map__25156__$1,file){
return (function (p1__25152_SHARP_,p2__25153_SHARP_){
if(cljs.core._EQ_.call(null,p1__25152_SHARP_,p2__25153_SHARP_)){
return p1__25152_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__25156,map__25156__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25160){
var map__25161 = p__25160;
var map__25161__$1 = ((cljs.core.seq_QMARK_.call(null,map__25161))?cljs.core.apply.call(null,cljs.core.hash_map,map__25161):map__25161);
var current_url_length = cljs.core.get.call(null,map__25161__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__25161__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25157_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25157_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var figwheel$client$file_reloading$add_link_to_doc = null;
var figwheel$client$file_reloading$add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var figwheel$client$file_reloading$add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
figwheel$client$file_reloading$add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$add_link_to_doc__1.call(this,orig_link);
case 2:
return figwheel$client$file_reloading$add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$add_link_to_doc__1;
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$add_link_to_doc__2;
return figwheel$client$file_reloading$add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25162){
var map__25164 = p__25162;
var map__25164__$1 = ((cljs.core.seq_QMARK_.call(null,map__25164))?cljs.core.apply.call(null,cljs.core.hash_map,map__25164):map__25164);
var f_data = map__25164__$1;
var request_url = cljs.core.get.call(null,map__25164__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__25164__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16489__auto__ = request_url;
if(cljs.core.truth_(or__16489__auto__)){
return or__16489__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25165,files_msg){
var map__25187 = p__25165;
var map__25187__$1 = ((cljs.core.seq_QMARK_.call(null,map__25187))?cljs.core.apply.call(null,cljs.core.hash_map,map__25187):map__25187);
var opts = map__25187__$1;
var on_cssload = cljs.core.get.call(null,map__25187__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25188_25208 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25189_25209 = null;
var count__25190_25210 = (0);
var i__25191_25211 = (0);
while(true){
if((i__25191_25211 < count__25190_25210)){
var f_25212 = cljs.core._nth.call(null,chunk__25189_25209,i__25191_25211);
figwheel.client.file_reloading.reload_css_file.call(null,f_25212);

var G__25213 = seq__25188_25208;
var G__25214 = chunk__25189_25209;
var G__25215 = count__25190_25210;
var G__25216 = (i__25191_25211 + (1));
seq__25188_25208 = G__25213;
chunk__25189_25209 = G__25214;
count__25190_25210 = G__25215;
i__25191_25211 = G__25216;
continue;
} else {
var temp__4126__auto___25217 = cljs.core.seq.call(null,seq__25188_25208);
if(temp__4126__auto___25217){
var seq__25188_25218__$1 = temp__4126__auto___25217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25188_25218__$1)){
var c__17274__auto___25219 = cljs.core.chunk_first.call(null,seq__25188_25218__$1);
var G__25220 = cljs.core.chunk_rest.call(null,seq__25188_25218__$1);
var G__25221 = c__17274__auto___25219;
var G__25222 = cljs.core.count.call(null,c__17274__auto___25219);
var G__25223 = (0);
seq__25188_25208 = G__25220;
chunk__25189_25209 = G__25221;
count__25190_25210 = G__25222;
i__25191_25211 = G__25223;
continue;
} else {
var f_25224 = cljs.core.first.call(null,seq__25188_25218__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25224);

var G__25225 = cljs.core.next.call(null,seq__25188_25218__$1);
var G__25226 = null;
var G__25227 = (0);
var G__25228 = (0);
seq__25188_25208 = G__25225;
chunk__25189_25209 = G__25226;
count__25190_25210 = G__25227;
i__25191_25211 = G__25228;
continue;
}
} else {
}
}
break;
}

var c__18867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,map__25187,map__25187__$1,opts,on_cssload){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,map__25187,map__25187__$1,opts,on_cssload){
return (function (state_25198){
var state_val_25199 = (state_25198[(1)]);
if((state_val_25199 === (2))){
var inst_25194 = (state_25198[(2)]);
var inst_25195 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_25196 = on_cssload.call(null,inst_25195);
var state_25198__$1 = (function (){var statearr_25200 = state_25198;
(statearr_25200[(7)] = inst_25194);

return statearr_25200;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25198__$1,inst_25196);
} else {
if((state_val_25199 === (1))){
var inst_25192 = cljs.core.async.timeout.call(null,(100));
var state_25198__$1 = state_25198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25198__$1,(2),inst_25192);
} else {
return null;
}
}
});})(c__18867__auto__,map__25187,map__25187__$1,opts,on_cssload))
;
return ((function (switch__18811__auto__,c__18867__auto__,map__25187,map__25187__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18812__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18812__auto____0 = (function (){
var statearr_25204 = [null,null,null,null,null,null,null,null];
(statearr_25204[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__18812__auto__);

(statearr_25204[(1)] = (1));

return statearr_25204;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18812__auto____1 = (function (state_25198){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_25198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e25205){if((e25205 instanceof Object)){
var ex__18815__auto__ = e25205;
var statearr_25206_25229 = state_25198;
(statearr_25206_25229[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25230 = state_25198;
state_25198 = G__25230;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__18812__auto__ = function(state_25198){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18812__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18812__auto____1.call(this,state_25198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__18812__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__18812__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,map__25187,map__25187__$1,opts,on_cssload))
})();
var state__18869__auto__ = (function (){var statearr_25207 = f__18868__auto__.call(null);
(statearr_25207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);

return statearr_25207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,map__25187,map__25187__$1,opts,on_cssload))
);

return c__18867__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map