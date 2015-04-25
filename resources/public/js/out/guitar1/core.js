// Compiled by ClojureScript 0.0-3126 {}
goog.provide('guitar1.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('cljsjs.react');
goog.require('goog.History');
goog.require('goog.events');
goog.require('guitar1.neck');
guitar1.core.neck_page = (function guitar1$core$neck_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Fretboard"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),guitar1.neck.neck.call(null)], null)], null);
});
guitar1.core.current_page = (function guitar1$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__17635__auto___17658 = (function (params__17636__auto__){
if(cljs.core.map_QMARK_.call(null,params__17636__auto__)){
var map__17656 = params__17636__auto__;
var map__17656__$1 = ((cljs.core.seq_QMARK_.call(null,map__17656))?cljs.core.apply.call(null,cljs.core.hash_map,map__17656):map__17656);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return guitar1.core.neck_page;},new cljs.core.Symbol("guitar1.core","neck-page","guitar1.core/neck-page",1227616799,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"guitar1.core","guitar1.core",-586849719,null),new cljs.core.Symbol(null,"neck-page","neck-page",-2139258303,null),"/Users/xin/code/Clojure/guitar1/src/cljs/guitar1/core.cljs",16,7,15,15,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(guitar1.core.neck_page)?guitar1.core.neck_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__17636__auto__)){
var vec__17657 = params__17636__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return guitar1.core.neck_page;},new cljs.core.Symbol("guitar1.core","neck-page","guitar1.core/neck-page",1227616799,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"guitar1.core","guitar1.core",-586849719,null),new cljs.core.Symbol(null,"neck-page","neck-page",-2139258303,null),"/Users/xin/code/Clojure/guitar1/src/cljs/guitar1/core.cljs",16,7,15,15,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(guitar1.core.neck_page)?guitar1.core.neck_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__17635__auto___17658);

guitar1.core.hook_browser_navigation_BANG_ = (function guitar1$core$hook_browser_navigation_BANG_(){
var G__17660 = (new goog.History());
goog.events.listen(G__17660,goog.history.EventType.NAVIGATE,((function (G__17660){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__17660))
);

G__17660.setEnabled(true);

return G__17660;
});
guitar1.core.mount_root = (function guitar1$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [guitar1.core.current_page], null),document.getElementById("app"));
});
guitar1.core.init_BANG_ = (function guitar1$core$init_BANG_(){
guitar1.core.hook_browser_navigation_BANG_.call(null);

return guitar1.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map