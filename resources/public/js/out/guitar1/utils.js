// Compiled by ClojureScript 0.0-3126 {}
goog.provide('guitar1.utils');
goog.require('cljs.core');
guitar1.utils.index_of = (function guitar1$utils$index_of(coll,v){
var i = cljs.core.count.call(null,cljs.core.take_while.call(null,(function (p1__17637_SHARP_){
return cljs.core.not_EQ_.call(null,v,p1__17637_SHARP_);
}),coll));
if(((i < cljs.core.count.call(null,coll))) || (cljs.core._EQ_.call(null,v,cljs.core.last.call(null,coll)))){
return i;
} else {
return null;
}
});
guitar1.utils.contains = (function guitar1$utils$contains(item,coll){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([item], true),coll);
});

//# sourceMappingURL=utils.js.map