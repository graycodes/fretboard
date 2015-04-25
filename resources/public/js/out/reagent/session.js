// Compiled by ClojureScript 0.0-3126 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 * @param {...*} var_args
 */
reagent.session.get = (function() { 
var reagent$session$get__delegate = function (k,p__23586){
var vec__23588 = p__23586;
var default$ = cljs.core.nth.call(null,vec__23588,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var reagent$session$get = function (k,var_args){
var p__23586 = null;
if (arguments.length > 1) {
var G__23589__i = 0, G__23589__a = new Array(arguments.length -  1);
while (G__23589__i < G__23589__a.length) {G__23589__a[G__23589__i] = arguments[G__23589__i + 1]; ++G__23589__i;}
  p__23586 = new cljs.core.IndexedSeq(G__23589__a,0);
} 
return reagent$session$get__delegate.call(this,k,p__23586);};
reagent$session$get.cljs$lang$maxFixedArity = 1;
reagent$session$get.cljs$lang$applyTo = (function (arglist__23590){
var k = cljs.core.first(arglist__23590);
var p__23586 = cljs.core.rest(arglist__23590);
return reagent$session$get__delegate(k,p__23586);
});
reagent$session$get.cljs$core$IFn$_invoke$arity$variadic = reagent$session$get__delegate;
return reagent$session$get;
})()
;
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 * returns nil if it doesn't exist.
 * @param {...*} var_args
 */
reagent.session.get_in = (function() { 
var reagent$session$get_in__delegate = function (ks,p__23591){
var vec__23593 = p__23591;
var default$ = cljs.core.nth.call(null,vec__23593,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var reagent$session$get_in = function (ks,var_args){
var p__23591 = null;
if (arguments.length > 1) {
var G__23594__i = 0, G__23594__a = new Array(arguments.length -  1);
while (G__23594__i < G__23594__a.length) {G__23594__a[G__23594__i] = arguments[G__23594__i + 1]; ++G__23594__i;}
  p__23591 = new cljs.core.IndexedSeq(G__23594__a,0);
} 
return reagent$session$get_in__delegate.call(this,ks,p__23591);};
reagent$session$get_in.cljs$lang$maxFixedArity = 1;
reagent$session$get_in.cljs$lang$applyTo = (function (arglist__23595){
var ks = cljs.core.first(arglist__23595);
var p__23591 = cljs.core.rest(arglist__23595);
return reagent$session$get_in__delegate(ks,p__23591);
});
reagent$session$get_in.cljs$core$IFn$_invoke$arity$variadic = reagent$session$get_in__delegate;
return reagent$session$get_in;
})()
;
/**
 * Replace the current session's value with the result of executing f with
 * the current value and args.
 * @param {...*} var_args
 */
reagent.session.swap_BANG_ = (function() { 
var reagent$session$swap_BANG___delegate = function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
};
var reagent$session$swap_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__23596__i = 0, G__23596__a = new Array(arguments.length -  1);
while (G__23596__i < G__23596__a.length) {G__23596__a[G__23596__i] = arguments[G__23596__i + 1]; ++G__23596__i;}
  args = new cljs.core.IndexedSeq(G__23596__a,0);
} 
return reagent$session$swap_BANG___delegate.call(this,f,args);};
reagent$session$swap_BANG_.cljs$lang$maxFixedArity = 1;
reagent$session$swap_BANG_.cljs$lang$applyTo = (function (arglist__23597){
var f = cljs.core.first(arglist__23597);
var args = cljs.core.rest(arglist__23597);
return reagent$session$swap_BANG___delegate(f,args);
});
reagent$session$swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = reagent$session$swap_BANG___delegate;
return reagent$session$swap_BANG_;
})()
;
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__23598_SHARP_){
return cljs.core.assoc_in.call(null,p1__23598_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 * and then removes it from the session.
 * @param {...*} var_args
 */
reagent.session.get_BANG_ = (function() { 
var reagent$session$get_BANG___delegate = function (k,p__23599){
var vec__23601 = p__23599;
var default$ = cljs.core.nth.call(null,vec__23601,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var reagent$session$get_BANG_ = function (k,var_args){
var p__23599 = null;
if (arguments.length > 1) {
var G__23602__i = 0, G__23602__a = new Array(arguments.length -  1);
while (G__23602__i < G__23602__a.length) {G__23602__a[G__23602__i] = arguments[G__23602__i + 1]; ++G__23602__i;}
  p__23599 = new cljs.core.IndexedSeq(G__23602__a,0);
} 
return reagent$session$get_BANG___delegate.call(this,k,p__23599);};
reagent$session$get_BANG_.cljs$lang$maxFixedArity = 1;
reagent$session$get_BANG_.cljs$lang$applyTo = (function (arglist__23603){
var k = cljs.core.first(arglist__23603);
var p__23599 = cljs.core.rest(arglist__23603);
return reagent$session$get_BANG___delegate(k,p__23599);
});
reagent$session$get_BANG_.cljs$core$IFn$_invoke$arity$variadic = reagent$session$get_BANG___delegate;
return reagent$session$get_BANG_;
})()
;
/**
 * Destructive get from the session. This returns the current value of the path
 * specified by the vector ks and then removes it from the session.
 * @param {...*} var_args
 */
reagent.session.get_in_BANG_ = (function() { 
var reagent$session$get_in_BANG___delegate = function (ks,p__23604){
var vec__23606 = p__23604;
var default$ = cljs.core.nth.call(null,vec__23606,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var reagent$session$get_in_BANG_ = function (ks,var_args){
var p__23604 = null;
if (arguments.length > 1) {
var G__23607__i = 0, G__23607__a = new Array(arguments.length -  1);
while (G__23607__i < G__23607__a.length) {G__23607__a[G__23607__i] = arguments[G__23607__i + 1]; ++G__23607__i;}
  p__23604 = new cljs.core.IndexedSeq(G__23607__a,0);
} 
return reagent$session$get_in_BANG___delegate.call(this,ks,p__23604);};
reagent$session$get_in_BANG_.cljs$lang$maxFixedArity = 1;
reagent$session$get_in_BANG_.cljs$lang$applyTo = (function (arglist__23608){
var ks = cljs.core.first(arglist__23608);
var p__23604 = cljs.core.rest(arglist__23608);
return reagent$session$get_in_BANG___delegate(ks,p__23604);
});
reagent$session$get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = reagent$session$get_in_BANG___delegate;
return reagent$session$get_in_BANG_;
})()
;
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 * @param {...*} var_args
 */
reagent.session.update_in_BANG_ = (function() { 
var reagent$session$update_in_BANG___delegate = function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__23609_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__23609_SHARP_,ks,f),args);
}));
};
var reagent$session$update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__23610__i = 0, G__23610__a = new Array(arguments.length -  2);
while (G__23610__i < G__23610__a.length) {G__23610__a[G__23610__i] = arguments[G__23610__i + 2]; ++G__23610__i;}
  args = new cljs.core.IndexedSeq(G__23610__a,0);
} 
return reagent$session$update_in_BANG___delegate.call(this,ks,f,args);};
reagent$session$update_in_BANG_.cljs$lang$maxFixedArity = 2;
reagent$session$update_in_BANG_.cljs$lang$applyTo = (function (arglist__23611){
var ks = cljs.core.first(arglist__23611);
arglist__23611 = cljs.core.next(arglist__23611);
var f = cljs.core.first(arglist__23611);
var args = cljs.core.rest(arglist__23611);
return reagent$session$update_in_BANG___delegate(ks,f,args);
});
reagent$session$update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = reagent$session$update_in_BANG___delegate;
return reagent$session$update_in_BANG_;
})()
;

//# sourceMappingURL=session.js.map