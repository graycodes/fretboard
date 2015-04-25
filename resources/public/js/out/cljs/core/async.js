// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t25277 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25277 = (function (f,fn_handler,meta25278){
this.f = f;
this.fn_handler = fn_handler;
this.meta25278 = meta25278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25277.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25279){
var self__ = this;
var _25279__$1 = this;
return self__.meta25278;
});

cljs.core.async.t25277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25279,meta25278__$1){
var self__ = this;
var _25279__$1 = this;
return (new cljs.core.async.t25277(self__.f,self__.fn_handler,meta25278__$1));
});

cljs.core.async.t25277.cljs$lang$type = true;

cljs.core.async.t25277.cljs$lang$ctorStr = "cljs.core.async/t25277";

cljs.core.async.t25277.cljs$lang$ctorPrWriter = (function (this__17068__auto__,writer__17069__auto__,opt__17070__auto__){
return cljs.core._write.call(null,writer__17069__auto__,"cljs.core.async/t25277");
});

cljs.core.async.__GT_t25277 = (function cljs$core$async$fn_handler_$___GT_t25277(f__$1,fn_handler__$1,meta25278){
return (new cljs.core.async.t25277(f__$1,fn_handler__$1,meta25278));
});

}

return (new cljs.core.async.t25277(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__25281 = buff;
if(G__25281){
var bit__17163__auto__ = null;
if(cljs.core.truth_((function (){var or__16489__auto__ = bit__17163__auto__;
if(cljs.core.truth_(or__16489__auto__)){
return or__16489__auto__;
} else {
return G__25281.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25281.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25281);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25281);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.call(null,buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.call(null,buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25282 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25282);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25282,ret){
return (function (){
return fn1.call(null,val_25282);
});})(val_25282,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17374__auto___25283 = n;
var x_25284 = (0);
while(true){
if((x_25284 < n__17374__auto___25283)){
(a[x_25284] = (0));

var G__25285 = (x_25284 + (1));
x_25284 = G__25285;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25286 = (i + (1));
i = G__25286;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25290 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25290 = (function (flag,alt_flag,meta25291){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25291 = meta25291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25290.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25290.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25290.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25292){
var self__ = this;
var _25292__$1 = this;
return self__.meta25291;
});})(flag))
;

cljs.core.async.t25290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25292,meta25291__$1){
var self__ = this;
var _25292__$1 = this;
return (new cljs.core.async.t25290(self__.flag,self__.alt_flag,meta25291__$1));
});})(flag))
;

cljs.core.async.t25290.cljs$lang$type = true;

cljs.core.async.t25290.cljs$lang$ctorStr = "cljs.core.async/t25290";

cljs.core.async.t25290.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17068__auto__,writer__17069__auto__,opt__17070__auto__){
return cljs.core._write.call(null,writer__17069__auto__,"cljs.core.async/t25290");
});})(flag))
;

cljs.core.async.__GT_t25290 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25290(flag__$1,alt_flag__$1,meta25291){
return (new cljs.core.async.t25290(flag__$1,alt_flag__$1,meta25291));
});})(flag))
;

}

return (new cljs.core.async.t25290(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25296 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25296 = (function (cb,flag,alt_handler,meta25297){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25297 = meta25297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25296.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25298){
var self__ = this;
var _25298__$1 = this;
return self__.meta25297;
});

cljs.core.async.t25296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25298,meta25297__$1){
var self__ = this;
var _25298__$1 = this;
return (new cljs.core.async.t25296(self__.cb,self__.flag,self__.alt_handler,meta25297__$1));
});

cljs.core.async.t25296.cljs$lang$type = true;

cljs.core.async.t25296.cljs$lang$ctorStr = "cljs.core.async/t25296";

cljs.core.async.t25296.cljs$lang$ctorPrWriter = (function (this__17068__auto__,writer__17069__auto__,opt__17070__auto__){
return cljs.core._write.call(null,writer__17069__auto__,"cljs.core.async/t25296");
});

cljs.core.async.__GT_t25296 = (function cljs$core$async$alt_handler_$___GT_t25296(cb__$1,flag__$1,alt_handler__$1,meta25297){
return (new cljs.core.async.t25296(cb__$1,flag__$1,alt_handler__$1,meta25297));
});

}

return (new cljs.core.async.t25296(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25299_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25299_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25300_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25300_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16489__auto__ = wport;
if(cljs.core.truth_(or__16489__auto__)){
return or__16489__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25301 = (i + (1));
i = G__25301;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16489__auto__ = ret;
if(cljs.core.truth_(or__16489__auto__)){
return or__16489__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__16477__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16477__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16477__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__25302){
var map__25304 = p__25302;
var map__25304__$1 = ((cljs.core.seq_QMARK_.call(null,map__25304))?cljs.core.apply.call(null,cljs.core.hash_map,map__25304):map__25304);
var opts = map__25304__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__25302 = null;
if (arguments.length > 1) {
var G__25305__i = 0, G__25305__a = new Array(arguments.length -  1);
while (G__25305__i < G__25305__a.length) {G__25305__a[G__25305__i] = arguments[G__25305__i + 1]; ++G__25305__i;}
  p__25302 = new cljs.core.IndexedSeq(G__25305__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__25302);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__25306){
var ports = cljs.core.first(arglist__25306);
var p__25302 = cljs.core.rest(arglist__25306);
return cljs$core$async$alts_BANG___delegate(ports,p__25302);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__18867__auto___25401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___25401){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___25401){
return (function (state_25377){
var state_val_25378 = (state_25377[(1)]);
if((state_val_25378 === (7))){
var inst_25373 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
var statearr_25379_25402 = state_25377__$1;
(statearr_25379_25402[(2)] = inst_25373);

(statearr_25379_25402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (1))){
var state_25377__$1 = state_25377;
var statearr_25380_25403 = state_25377__$1;
(statearr_25380_25403[(2)] = null);

(statearr_25380_25403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (4))){
var inst_25356 = (state_25377[(7)]);
var inst_25356__$1 = (state_25377[(2)]);
var inst_25357 = (inst_25356__$1 == null);
var state_25377__$1 = (function (){var statearr_25381 = state_25377;
(statearr_25381[(7)] = inst_25356__$1);

return statearr_25381;
})();
if(cljs.core.truth_(inst_25357)){
var statearr_25382_25404 = state_25377__$1;
(statearr_25382_25404[(1)] = (5));

} else {
var statearr_25383_25405 = state_25377__$1;
(statearr_25383_25405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (13))){
var state_25377__$1 = state_25377;
var statearr_25384_25406 = state_25377__$1;
(statearr_25384_25406[(2)] = null);

(statearr_25384_25406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (6))){
var inst_25356 = (state_25377[(7)]);
var state_25377__$1 = state_25377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25377__$1,(11),to,inst_25356);
} else {
if((state_val_25378 === (3))){
var inst_25375 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25377__$1,inst_25375);
} else {
if((state_val_25378 === (12))){
var state_25377__$1 = state_25377;
var statearr_25385_25407 = state_25377__$1;
(statearr_25385_25407[(2)] = null);

(statearr_25385_25407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (2))){
var state_25377__$1 = state_25377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25377__$1,(4),from);
} else {
if((state_val_25378 === (11))){
var inst_25366 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
if(cljs.core.truth_(inst_25366)){
var statearr_25386_25408 = state_25377__$1;
(statearr_25386_25408[(1)] = (12));

} else {
var statearr_25387_25409 = state_25377__$1;
(statearr_25387_25409[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (9))){
var state_25377__$1 = state_25377;
var statearr_25388_25410 = state_25377__$1;
(statearr_25388_25410[(2)] = null);

(statearr_25388_25410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (5))){
var state_25377__$1 = state_25377;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25389_25411 = state_25377__$1;
(statearr_25389_25411[(1)] = (8));

} else {
var statearr_25390_25412 = state_25377__$1;
(statearr_25390_25412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (14))){
var inst_25371 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
var statearr_25391_25413 = state_25377__$1;
(statearr_25391_25413[(2)] = inst_25371);

(statearr_25391_25413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (10))){
var inst_25363 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
var statearr_25392_25414 = state_25377__$1;
(statearr_25392_25414[(2)] = inst_25363);

(statearr_25392_25414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (8))){
var inst_25360 = cljs.core.async.close_BANG_.call(null,to);
var state_25377__$1 = state_25377;
var statearr_25393_25415 = state_25377__$1;
(statearr_25393_25415[(2)] = inst_25360);

(statearr_25393_25415[(1)] = (10));


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
});})(c__18867__auto___25401))
;
return ((function (switch__18811__auto__,c__18867__auto___25401){
return (function() {
var cljs$core$async$pipe_$_state_machine__18812__auto__ = null;
var cljs$core$async$pipe_$_state_machine__18812__auto____0 = (function (){
var statearr_25397 = [null,null,null,null,null,null,null,null];
(statearr_25397[(0)] = cljs$core$async$pipe_$_state_machine__18812__auto__);

(statearr_25397[(1)] = (1));

return statearr_25397;
});
var cljs$core$async$pipe_$_state_machine__18812__auto____1 = (function (state_25377){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_25377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e25398){if((e25398 instanceof Object)){
var ex__18815__auto__ = e25398;
var statearr_25399_25416 = state_25377;
(statearr_25399_25416[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25417 = state_25377;
state_25377 = G__25417;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__18812__auto__ = function(state_25377){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__18812__auto____1.call(this,state_25377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__18812__auto____0;
cljs$core$async$pipe_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__18812__auto____1;
return cljs$core$async$pipe_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___25401))
})();
var state__18869__auto__ = (function (){var statearr_25400 = f__18868__auto__.call(null);
(statearr_25400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___25401);

return statearr_25400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___25401))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25601){
var vec__25602 = p__25601;
var v = cljs.core.nth.call(null,vec__25602,(0),null);
var p = cljs.core.nth.call(null,vec__25602,(1),null);
var job = vec__25602;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18867__auto___25784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___25784,res,vec__25602,v,p,job,jobs,results){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___25784,res,vec__25602,v,p,job,jobs,results){
return (function (state_25607){
var state_val_25608 = (state_25607[(1)]);
if((state_val_25608 === (2))){
var inst_25604 = (state_25607[(2)]);
var inst_25605 = cljs.core.async.close_BANG_.call(null,res);
var state_25607__$1 = (function (){var statearr_25609 = state_25607;
(statearr_25609[(7)] = inst_25604);

return statearr_25609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25607__$1,inst_25605);
} else {
if((state_val_25608 === (1))){
var state_25607__$1 = state_25607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25607__$1,(2),res,v);
} else {
return null;
}
}
});})(c__18867__auto___25784,res,vec__25602,v,p,job,jobs,results))
;
return ((function (switch__18811__auto__,c__18867__auto___25784,res,vec__25602,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____0 = (function (){
var statearr_25613 = [null,null,null,null,null,null,null,null];
(statearr_25613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__);

(statearr_25613[(1)] = (1));

return statearr_25613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____1 = (function (state_25607){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_25607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e25614){if((e25614 instanceof Object)){
var ex__18815__auto__ = e25614;
var statearr_25615_25785 = state_25607;
(statearr_25615_25785[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25786 = state_25607;
state_25607 = G__25786;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__ = function(state_25607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____1.call(this,state_25607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___25784,res,vec__25602,v,p,job,jobs,results))
})();
var state__18869__auto__ = (function (){var statearr_25616 = f__18868__auto__.call(null);
(statearr_25616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___25784);

return statearr_25616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___25784,res,vec__25602,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25617){
var vec__25618 = p__25617;
var v = cljs.core.nth.call(null,vec__25618,(0),null);
var p = cljs.core.nth.call(null,vec__25618,(1),null);
var job = vec__25618;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17374__auto___25787 = n;
var __25788 = (0);
while(true){
if((__25788 < n__17374__auto___25787)){
var G__25619_25789 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25619_25789) {
case "async":
var c__18867__auto___25791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25788,c__18867__auto___25791,G__25619_25789,n__17374__auto___25787,jobs,results,process,async){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (__25788,c__18867__auto___25791,G__25619_25789,n__17374__auto___25787,jobs,results,process,async){
return (function (state_25632){
var state_val_25633 = (state_25632[(1)]);
if((state_val_25633 === (7))){
var inst_25628 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
var statearr_25634_25792 = state_25632__$1;
(statearr_25634_25792[(2)] = inst_25628);

(statearr_25634_25792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (6))){
var state_25632__$1 = state_25632;
var statearr_25635_25793 = state_25632__$1;
(statearr_25635_25793[(2)] = null);

(statearr_25635_25793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (5))){
var state_25632__$1 = state_25632;
var statearr_25636_25794 = state_25632__$1;
(statearr_25636_25794[(2)] = null);

(statearr_25636_25794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (4))){
var inst_25622 = (state_25632[(2)]);
var inst_25623 = async.call(null,inst_25622);
var state_25632__$1 = state_25632;
if(cljs.core.truth_(inst_25623)){
var statearr_25637_25795 = state_25632__$1;
(statearr_25637_25795[(1)] = (5));

} else {
var statearr_25638_25796 = state_25632__$1;
(statearr_25638_25796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (3))){
var inst_25630 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25632__$1,inst_25630);
} else {
if((state_val_25633 === (2))){
var state_25632__$1 = state_25632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25632__$1,(4),jobs);
} else {
if((state_val_25633 === (1))){
var state_25632__$1 = state_25632;
var statearr_25639_25797 = state_25632__$1;
(statearr_25639_25797[(2)] = null);

(statearr_25639_25797[(1)] = (2));


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
});})(__25788,c__18867__auto___25791,G__25619_25789,n__17374__auto___25787,jobs,results,process,async))
;
return ((function (__25788,switch__18811__auto__,c__18867__auto___25791,G__25619_25789,n__17374__auto___25787,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____0 = (function (){
var statearr_25643 = [null,null,null,null,null,null,null];
(statearr_25643[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__);

(statearr_25643[(1)] = (1));

return statearr_25643;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____1 = (function (state_25632){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_25632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e25644){if((e25644 instanceof Object)){
var ex__18815__auto__ = e25644;
var statearr_25645_25798 = state_25632;
(statearr_25645_25798[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25799 = state_25632;
state_25632 = G__25799;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__ = function(state_25632){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____1.call(this,state_25632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__;
})()
;})(__25788,switch__18811__auto__,c__18867__auto___25791,G__25619_25789,n__17374__auto___25787,jobs,results,process,async))
})();
var state__18869__auto__ = (function (){var statearr_25646 = f__18868__auto__.call(null);
(statearr_25646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___25791);

return statearr_25646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(__25788,c__18867__auto___25791,G__25619_25789,n__17374__auto___25787,jobs,results,process,async))
);


break;
case "compute":
var c__18867__auto___25800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25788,c__18867__auto___25800,G__25619_25789,n__17374__auto___25787,jobs,results,process,async){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (__25788,c__18867__auto___25800,G__25619_25789,n__17374__auto___25787,jobs,results,process,async){
return (function (state_25659){
var state_val_25660 = (state_25659[(1)]);
if((state_val_25660 === (7))){
var inst_25655 = (state_25659[(2)]);
var state_25659__$1 = state_25659;
var statearr_25661_25801 = state_25659__$1;
(statearr_25661_25801[(2)] = inst_25655);

(statearr_25661_25801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (6))){
var state_25659__$1 = state_25659;
var statearr_25662_25802 = state_25659__$1;
(statearr_25662_25802[(2)] = null);

(statearr_25662_25802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (5))){
var state_25659__$1 = state_25659;
var statearr_25663_25803 = state_25659__$1;
(statearr_25663_25803[(2)] = null);

(statearr_25663_25803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (4))){
var inst_25649 = (state_25659[(2)]);
var inst_25650 = process.call(null,inst_25649);
var state_25659__$1 = state_25659;
if(cljs.core.truth_(inst_25650)){
var statearr_25664_25804 = state_25659__$1;
(statearr_25664_25804[(1)] = (5));

} else {
var statearr_25665_25805 = state_25659__$1;
(statearr_25665_25805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (3))){
var inst_25657 = (state_25659[(2)]);
var state_25659__$1 = state_25659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25659__$1,inst_25657);
} else {
if((state_val_25660 === (2))){
var state_25659__$1 = state_25659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25659__$1,(4),jobs);
} else {
if((state_val_25660 === (1))){
var state_25659__$1 = state_25659;
var statearr_25666_25806 = state_25659__$1;
(statearr_25666_25806[(2)] = null);

(statearr_25666_25806[(1)] = (2));


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
});})(__25788,c__18867__auto___25800,G__25619_25789,n__17374__auto___25787,jobs,results,process,async))
;
return ((function (__25788,switch__18811__auto__,c__18867__auto___25800,G__25619_25789,n__17374__auto___25787,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____0 = (function (){
var statearr_25670 = [null,null,null,null,null,null,null];
(statearr_25670[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__);

(statearr_25670[(1)] = (1));

return statearr_25670;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____1 = (function (state_25659){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_25659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e25671){if((e25671 instanceof Object)){
var ex__18815__auto__ = e25671;
var statearr_25672_25807 = state_25659;
(statearr_25672_25807[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25808 = state_25659;
state_25659 = G__25808;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__ = function(state_25659){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____1.call(this,state_25659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__;
})()
;})(__25788,switch__18811__auto__,c__18867__auto___25800,G__25619_25789,n__17374__auto___25787,jobs,results,process,async))
})();
var state__18869__auto__ = (function (){var statearr_25673 = f__18868__auto__.call(null);
(statearr_25673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___25800);

return statearr_25673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(__25788,c__18867__auto___25800,G__25619_25789,n__17374__auto___25787,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25809 = (__25788 + (1));
__25788 = G__25809;
continue;
} else {
}
break;
}

var c__18867__auto___25810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___25810,jobs,results,process,async){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___25810,jobs,results,process,async){
return (function (state_25695){
var state_val_25696 = (state_25695[(1)]);
if((state_val_25696 === (9))){
var inst_25688 = (state_25695[(2)]);
var state_25695__$1 = (function (){var statearr_25697 = state_25695;
(statearr_25697[(7)] = inst_25688);

return statearr_25697;
})();
var statearr_25698_25811 = state_25695__$1;
(statearr_25698_25811[(2)] = null);

(statearr_25698_25811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (8))){
var inst_25681 = (state_25695[(8)]);
var inst_25686 = (state_25695[(2)]);
var state_25695__$1 = (function (){var statearr_25699 = state_25695;
(statearr_25699[(9)] = inst_25686);

return statearr_25699;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25695__$1,(9),results,inst_25681);
} else {
if((state_val_25696 === (7))){
var inst_25691 = (state_25695[(2)]);
var state_25695__$1 = state_25695;
var statearr_25700_25812 = state_25695__$1;
(statearr_25700_25812[(2)] = inst_25691);

(statearr_25700_25812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (6))){
var inst_25676 = (state_25695[(10)]);
var inst_25681 = (state_25695[(8)]);
var inst_25681__$1 = cljs.core.async.chan.call(null,(1));
var inst_25682 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25683 = [inst_25676,inst_25681__$1];
var inst_25684 = (new cljs.core.PersistentVector(null,2,(5),inst_25682,inst_25683,null));
var state_25695__$1 = (function (){var statearr_25701 = state_25695;
(statearr_25701[(8)] = inst_25681__$1);

return statearr_25701;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25695__$1,(8),jobs,inst_25684);
} else {
if((state_val_25696 === (5))){
var inst_25679 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25695__$1 = state_25695;
var statearr_25702_25813 = state_25695__$1;
(statearr_25702_25813[(2)] = inst_25679);

(statearr_25702_25813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (4))){
var inst_25676 = (state_25695[(10)]);
var inst_25676__$1 = (state_25695[(2)]);
var inst_25677 = (inst_25676__$1 == null);
var state_25695__$1 = (function (){var statearr_25703 = state_25695;
(statearr_25703[(10)] = inst_25676__$1);

return statearr_25703;
})();
if(cljs.core.truth_(inst_25677)){
var statearr_25704_25814 = state_25695__$1;
(statearr_25704_25814[(1)] = (5));

} else {
var statearr_25705_25815 = state_25695__$1;
(statearr_25705_25815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (3))){
var inst_25693 = (state_25695[(2)]);
var state_25695__$1 = state_25695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25695__$1,inst_25693);
} else {
if((state_val_25696 === (2))){
var state_25695__$1 = state_25695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25695__$1,(4),from);
} else {
if((state_val_25696 === (1))){
var state_25695__$1 = state_25695;
var statearr_25706_25816 = state_25695__$1;
(statearr_25706_25816[(2)] = null);

(statearr_25706_25816[(1)] = (2));


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
});})(c__18867__auto___25810,jobs,results,process,async))
;
return ((function (switch__18811__auto__,c__18867__auto___25810,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____0 = (function (){
var statearr_25710 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25710[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__);

(statearr_25710[(1)] = (1));

return statearr_25710;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____1 = (function (state_25695){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_25695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e25711){if((e25711 instanceof Object)){
var ex__18815__auto__ = e25711;
var statearr_25712_25817 = state_25695;
(statearr_25712_25817[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25818 = state_25695;
state_25695 = G__25818;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__ = function(state_25695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____1.call(this,state_25695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___25810,jobs,results,process,async))
})();
var state__18869__auto__ = (function (){var statearr_25713 = f__18868__auto__.call(null);
(statearr_25713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___25810);

return statearr_25713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___25810,jobs,results,process,async))
);


var c__18867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,jobs,results,process,async){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,jobs,results,process,async){
return (function (state_25751){
var state_val_25752 = (state_25751[(1)]);
if((state_val_25752 === (7))){
var inst_25747 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
var statearr_25753_25819 = state_25751__$1;
(statearr_25753_25819[(2)] = inst_25747);

(statearr_25753_25819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (20))){
var state_25751__$1 = state_25751;
var statearr_25754_25820 = state_25751__$1;
(statearr_25754_25820[(2)] = null);

(statearr_25754_25820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (1))){
var state_25751__$1 = state_25751;
var statearr_25755_25821 = state_25751__$1;
(statearr_25755_25821[(2)] = null);

(statearr_25755_25821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (4))){
var inst_25716 = (state_25751[(7)]);
var inst_25716__$1 = (state_25751[(2)]);
var inst_25717 = (inst_25716__$1 == null);
var state_25751__$1 = (function (){var statearr_25756 = state_25751;
(statearr_25756[(7)] = inst_25716__$1);

return statearr_25756;
})();
if(cljs.core.truth_(inst_25717)){
var statearr_25757_25822 = state_25751__$1;
(statearr_25757_25822[(1)] = (5));

} else {
var statearr_25758_25823 = state_25751__$1;
(statearr_25758_25823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (15))){
var inst_25729 = (state_25751[(8)]);
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25751__$1,(18),to,inst_25729);
} else {
if((state_val_25752 === (21))){
var inst_25742 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
var statearr_25759_25824 = state_25751__$1;
(statearr_25759_25824[(2)] = inst_25742);

(statearr_25759_25824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (13))){
var inst_25744 = (state_25751[(2)]);
var state_25751__$1 = (function (){var statearr_25760 = state_25751;
(statearr_25760[(9)] = inst_25744);

return statearr_25760;
})();
var statearr_25761_25825 = state_25751__$1;
(statearr_25761_25825[(2)] = null);

(statearr_25761_25825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (6))){
var inst_25716 = (state_25751[(7)]);
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25751__$1,(11),inst_25716);
} else {
if((state_val_25752 === (17))){
var inst_25737 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
if(cljs.core.truth_(inst_25737)){
var statearr_25762_25826 = state_25751__$1;
(statearr_25762_25826[(1)] = (19));

} else {
var statearr_25763_25827 = state_25751__$1;
(statearr_25763_25827[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (3))){
var inst_25749 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25751__$1,inst_25749);
} else {
if((state_val_25752 === (12))){
var inst_25726 = (state_25751[(10)]);
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25751__$1,(14),inst_25726);
} else {
if((state_val_25752 === (2))){
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25751__$1,(4),results);
} else {
if((state_val_25752 === (19))){
var state_25751__$1 = state_25751;
var statearr_25764_25828 = state_25751__$1;
(statearr_25764_25828[(2)] = null);

(statearr_25764_25828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (11))){
var inst_25726 = (state_25751[(2)]);
var state_25751__$1 = (function (){var statearr_25765 = state_25751;
(statearr_25765[(10)] = inst_25726);

return statearr_25765;
})();
var statearr_25766_25829 = state_25751__$1;
(statearr_25766_25829[(2)] = null);

(statearr_25766_25829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (9))){
var state_25751__$1 = state_25751;
var statearr_25767_25830 = state_25751__$1;
(statearr_25767_25830[(2)] = null);

(statearr_25767_25830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (5))){
var state_25751__$1 = state_25751;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25768_25831 = state_25751__$1;
(statearr_25768_25831[(1)] = (8));

} else {
var statearr_25769_25832 = state_25751__$1;
(statearr_25769_25832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (14))){
var inst_25731 = (state_25751[(11)]);
var inst_25729 = (state_25751[(8)]);
var inst_25729__$1 = (state_25751[(2)]);
var inst_25730 = (inst_25729__$1 == null);
var inst_25731__$1 = cljs.core.not.call(null,inst_25730);
var state_25751__$1 = (function (){var statearr_25770 = state_25751;
(statearr_25770[(11)] = inst_25731__$1);

(statearr_25770[(8)] = inst_25729__$1);

return statearr_25770;
})();
if(inst_25731__$1){
var statearr_25771_25833 = state_25751__$1;
(statearr_25771_25833[(1)] = (15));

} else {
var statearr_25772_25834 = state_25751__$1;
(statearr_25772_25834[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (16))){
var inst_25731 = (state_25751[(11)]);
var state_25751__$1 = state_25751;
var statearr_25773_25835 = state_25751__$1;
(statearr_25773_25835[(2)] = inst_25731);

(statearr_25773_25835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (10))){
var inst_25723 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
var statearr_25774_25836 = state_25751__$1;
(statearr_25774_25836[(2)] = inst_25723);

(statearr_25774_25836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (18))){
var inst_25734 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
var statearr_25775_25837 = state_25751__$1;
(statearr_25775_25837[(2)] = inst_25734);

(statearr_25775_25837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (8))){
var inst_25720 = cljs.core.async.close_BANG_.call(null,to);
var state_25751__$1 = state_25751;
var statearr_25776_25838 = state_25751__$1;
(statearr_25776_25838[(2)] = inst_25720);

(statearr_25776_25838[(1)] = (10));


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
});})(c__18867__auto__,jobs,results,process,async))
;
return ((function (switch__18811__auto__,c__18867__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____0 = (function (){
var statearr_25780 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__);

(statearr_25780[(1)] = (1));

return statearr_25780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____1 = (function (state_25751){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_25751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e25781){if((e25781 instanceof Object)){
var ex__18815__auto__ = e25781;
var statearr_25782_25839 = state_25751;
(statearr_25782_25839[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25840 = state_25751;
state_25751 = G__25840;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__ = function(state_25751){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____1.call(this,state_25751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,jobs,results,process,async))
})();
var state__18869__auto__ = (function (){var statearr_25783 = f__18868__auto__.call(null);
(statearr_25783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);

return statearr_25783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,jobs,results,process,async))
);

return c__18867__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.call(null,n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.call(null,n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18867__auto___25941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___25941,tc,fc){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___25941,tc,fc){
return (function (state_25916){
var state_val_25917 = (state_25916[(1)]);
if((state_val_25917 === (7))){
var inst_25912 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
var statearr_25918_25942 = state_25916__$1;
(statearr_25918_25942[(2)] = inst_25912);

(statearr_25918_25942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (1))){
var state_25916__$1 = state_25916;
var statearr_25919_25943 = state_25916__$1;
(statearr_25919_25943[(2)] = null);

(statearr_25919_25943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (4))){
var inst_25893 = (state_25916[(7)]);
var inst_25893__$1 = (state_25916[(2)]);
var inst_25894 = (inst_25893__$1 == null);
var state_25916__$1 = (function (){var statearr_25920 = state_25916;
(statearr_25920[(7)] = inst_25893__$1);

return statearr_25920;
})();
if(cljs.core.truth_(inst_25894)){
var statearr_25921_25944 = state_25916__$1;
(statearr_25921_25944[(1)] = (5));

} else {
var statearr_25922_25945 = state_25916__$1;
(statearr_25922_25945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (13))){
var state_25916__$1 = state_25916;
var statearr_25923_25946 = state_25916__$1;
(statearr_25923_25946[(2)] = null);

(statearr_25923_25946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (6))){
var inst_25893 = (state_25916[(7)]);
var inst_25899 = p.call(null,inst_25893);
var state_25916__$1 = state_25916;
if(cljs.core.truth_(inst_25899)){
var statearr_25924_25947 = state_25916__$1;
(statearr_25924_25947[(1)] = (9));

} else {
var statearr_25925_25948 = state_25916__$1;
(statearr_25925_25948[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (3))){
var inst_25914 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25916__$1,inst_25914);
} else {
if((state_val_25917 === (12))){
var state_25916__$1 = state_25916;
var statearr_25926_25949 = state_25916__$1;
(statearr_25926_25949[(2)] = null);

(statearr_25926_25949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (2))){
var state_25916__$1 = state_25916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25916__$1,(4),ch);
} else {
if((state_val_25917 === (11))){
var inst_25893 = (state_25916[(7)]);
var inst_25903 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25916__$1,(8),inst_25903,inst_25893);
} else {
if((state_val_25917 === (9))){
var state_25916__$1 = state_25916;
var statearr_25927_25950 = state_25916__$1;
(statearr_25927_25950[(2)] = tc);

(statearr_25927_25950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (5))){
var inst_25896 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25897 = cljs.core.async.close_BANG_.call(null,fc);
var state_25916__$1 = (function (){var statearr_25928 = state_25916;
(statearr_25928[(8)] = inst_25896);

return statearr_25928;
})();
var statearr_25929_25951 = state_25916__$1;
(statearr_25929_25951[(2)] = inst_25897);

(statearr_25929_25951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (14))){
var inst_25910 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
var statearr_25930_25952 = state_25916__$1;
(statearr_25930_25952[(2)] = inst_25910);

(statearr_25930_25952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (10))){
var state_25916__$1 = state_25916;
var statearr_25931_25953 = state_25916__$1;
(statearr_25931_25953[(2)] = fc);

(statearr_25931_25953[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (8))){
var inst_25905 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
if(cljs.core.truth_(inst_25905)){
var statearr_25932_25954 = state_25916__$1;
(statearr_25932_25954[(1)] = (12));

} else {
var statearr_25933_25955 = state_25916__$1;
(statearr_25933_25955[(1)] = (13));

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
});})(c__18867__auto___25941,tc,fc))
;
return ((function (switch__18811__auto__,c__18867__auto___25941,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__18812__auto__ = null;
var cljs$core$async$split_$_state_machine__18812__auto____0 = (function (){
var statearr_25937 = [null,null,null,null,null,null,null,null,null];
(statearr_25937[(0)] = cljs$core$async$split_$_state_machine__18812__auto__);

(statearr_25937[(1)] = (1));

return statearr_25937;
});
var cljs$core$async$split_$_state_machine__18812__auto____1 = (function (state_25916){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_25916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e25938){if((e25938 instanceof Object)){
var ex__18815__auto__ = e25938;
var statearr_25939_25956 = state_25916;
(statearr_25939_25956[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25957 = state_25916;
state_25916 = G__25957;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__18812__auto__ = function(state_25916){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__18812__auto____1.call(this,state_25916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__18812__auto____0;
cljs$core$async$split_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__18812__auto____1;
return cljs$core$async$split_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___25941,tc,fc))
})();
var state__18869__auto__ = (function (){var statearr_25940 = f__18868__auto__.call(null);
(statearr_25940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___25941);

return statearr_25940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___25941,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__){
return (function (state_26004){
var state_val_26005 = (state_26004[(1)]);
if((state_val_26005 === (7))){
var inst_26000 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
var statearr_26006_26022 = state_26004__$1;
(statearr_26006_26022[(2)] = inst_26000);

(statearr_26006_26022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (6))){
var inst_25990 = (state_26004[(7)]);
var inst_25993 = (state_26004[(8)]);
var inst_25997 = f.call(null,inst_25990,inst_25993);
var inst_25990__$1 = inst_25997;
var state_26004__$1 = (function (){var statearr_26007 = state_26004;
(statearr_26007[(7)] = inst_25990__$1);

return statearr_26007;
})();
var statearr_26008_26023 = state_26004__$1;
(statearr_26008_26023[(2)] = null);

(statearr_26008_26023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (5))){
var inst_25990 = (state_26004[(7)]);
var state_26004__$1 = state_26004;
var statearr_26009_26024 = state_26004__$1;
(statearr_26009_26024[(2)] = inst_25990);

(statearr_26009_26024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (4))){
var inst_25993 = (state_26004[(8)]);
var inst_25993__$1 = (state_26004[(2)]);
var inst_25994 = (inst_25993__$1 == null);
var state_26004__$1 = (function (){var statearr_26010 = state_26004;
(statearr_26010[(8)] = inst_25993__$1);

return statearr_26010;
})();
if(cljs.core.truth_(inst_25994)){
var statearr_26011_26025 = state_26004__$1;
(statearr_26011_26025[(1)] = (5));

} else {
var statearr_26012_26026 = state_26004__$1;
(statearr_26012_26026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (3))){
var inst_26002 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26004__$1,inst_26002);
} else {
if((state_val_26005 === (2))){
var state_26004__$1 = state_26004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26004__$1,(4),ch);
} else {
if((state_val_26005 === (1))){
var inst_25990 = init;
var state_26004__$1 = (function (){var statearr_26013 = state_26004;
(statearr_26013[(7)] = inst_25990);

return statearr_26013;
})();
var statearr_26014_26027 = state_26004__$1;
(statearr_26014_26027[(2)] = null);

(statearr_26014_26027[(1)] = (2));


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
});})(c__18867__auto__))
;
return ((function (switch__18811__auto__,c__18867__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18812__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18812__auto____0 = (function (){
var statearr_26018 = [null,null,null,null,null,null,null,null,null];
(statearr_26018[(0)] = cljs$core$async$reduce_$_state_machine__18812__auto__);

(statearr_26018[(1)] = (1));

return statearr_26018;
});
var cljs$core$async$reduce_$_state_machine__18812__auto____1 = (function (state_26004){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_26004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e26019){if((e26019 instanceof Object)){
var ex__18815__auto__ = e26019;
var statearr_26020_26028 = state_26004;
(statearr_26020_26028[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26029 = state_26004;
state_26004 = G__26029;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18812__auto__ = function(state_26004){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18812__auto____1.call(this,state_26004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18812__auto____0;
cljs$core$async$reduce_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18812__auto____1;
return cljs$core$async$reduce_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__))
})();
var state__18869__auto__ = (function (){var statearr_26021 = f__18868__auto__.call(null);
(statearr_26021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);

return statearr_26021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__))
);

return c__18867__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__18867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__){
return (function (state_26103){
var state_val_26104 = (state_26103[(1)]);
if((state_val_26104 === (7))){
var inst_26085 = (state_26103[(2)]);
var state_26103__$1 = state_26103;
var statearr_26105_26128 = state_26103__$1;
(statearr_26105_26128[(2)] = inst_26085);

(statearr_26105_26128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26104 === (1))){
var inst_26079 = cljs.core.seq.call(null,coll);
var inst_26080 = inst_26079;
var state_26103__$1 = (function (){var statearr_26106 = state_26103;
(statearr_26106[(7)] = inst_26080);

return statearr_26106;
})();
var statearr_26107_26129 = state_26103__$1;
(statearr_26107_26129[(2)] = null);

(statearr_26107_26129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26104 === (4))){
var inst_26080 = (state_26103[(7)]);
var inst_26083 = cljs.core.first.call(null,inst_26080);
var state_26103__$1 = state_26103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26103__$1,(7),ch,inst_26083);
} else {
if((state_val_26104 === (13))){
var inst_26097 = (state_26103[(2)]);
var state_26103__$1 = state_26103;
var statearr_26108_26130 = state_26103__$1;
(statearr_26108_26130[(2)] = inst_26097);

(statearr_26108_26130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26104 === (6))){
var inst_26088 = (state_26103[(2)]);
var state_26103__$1 = state_26103;
if(cljs.core.truth_(inst_26088)){
var statearr_26109_26131 = state_26103__$1;
(statearr_26109_26131[(1)] = (8));

} else {
var statearr_26110_26132 = state_26103__$1;
(statearr_26110_26132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26104 === (3))){
var inst_26101 = (state_26103[(2)]);
var state_26103__$1 = state_26103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26103__$1,inst_26101);
} else {
if((state_val_26104 === (12))){
var state_26103__$1 = state_26103;
var statearr_26111_26133 = state_26103__$1;
(statearr_26111_26133[(2)] = null);

(statearr_26111_26133[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26104 === (2))){
var inst_26080 = (state_26103[(7)]);
var state_26103__$1 = state_26103;
if(cljs.core.truth_(inst_26080)){
var statearr_26112_26134 = state_26103__$1;
(statearr_26112_26134[(1)] = (4));

} else {
var statearr_26113_26135 = state_26103__$1;
(statearr_26113_26135[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26104 === (11))){
var inst_26094 = cljs.core.async.close_BANG_.call(null,ch);
var state_26103__$1 = state_26103;
var statearr_26114_26136 = state_26103__$1;
(statearr_26114_26136[(2)] = inst_26094);

(statearr_26114_26136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26104 === (9))){
var state_26103__$1 = state_26103;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26115_26137 = state_26103__$1;
(statearr_26115_26137[(1)] = (11));

} else {
var statearr_26116_26138 = state_26103__$1;
(statearr_26116_26138[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26104 === (5))){
var inst_26080 = (state_26103[(7)]);
var state_26103__$1 = state_26103;
var statearr_26117_26139 = state_26103__$1;
(statearr_26117_26139[(2)] = inst_26080);

(statearr_26117_26139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26104 === (10))){
var inst_26099 = (state_26103[(2)]);
var state_26103__$1 = state_26103;
var statearr_26118_26140 = state_26103__$1;
(statearr_26118_26140[(2)] = inst_26099);

(statearr_26118_26140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26104 === (8))){
var inst_26080 = (state_26103[(7)]);
var inst_26090 = cljs.core.next.call(null,inst_26080);
var inst_26080__$1 = inst_26090;
var state_26103__$1 = (function (){var statearr_26119 = state_26103;
(statearr_26119[(7)] = inst_26080__$1);

return statearr_26119;
})();
var statearr_26120_26141 = state_26103__$1;
(statearr_26120_26141[(2)] = null);

(statearr_26120_26141[(1)] = (2));


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
});})(c__18867__auto__))
;
return ((function (switch__18811__auto__,c__18867__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__18812__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__18812__auto____0 = (function (){
var statearr_26124 = [null,null,null,null,null,null,null,null];
(statearr_26124[(0)] = cljs$core$async$onto_chan_$_state_machine__18812__auto__);

(statearr_26124[(1)] = (1));

return statearr_26124;
});
var cljs$core$async$onto_chan_$_state_machine__18812__auto____1 = (function (state_26103){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_26103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e26125){if((e26125 instanceof Object)){
var ex__18815__auto__ = e26125;
var statearr_26126_26142 = state_26103;
(statearr_26126_26142[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26143 = state_26103;
state_26103 = G__26143;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__18812__auto__ = function(state_26103){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__18812__auto____1.call(this,state_26103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__18812__auto____0;
cljs$core$async$onto_chan_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__18812__auto____1;
return cljs$core$async$onto_chan_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__))
})();
var state__18869__auto__ = (function (){var statearr_26127 = f__18868__auto__.call(null);
(statearr_26127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);

return statearr_26127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__))
);

return c__18867__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj26145 = {};
return obj26145;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16477__auto__ = _;
if(and__16477__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16477__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17125__auto__ = (((_ == null))?null:_);
return (function (){var or__16489__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17125__auto__)]);
if(or__16489__auto__){
return or__16489__auto__;
} else {
var or__16489__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16489__auto____$1){
return or__16489__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26147 = {};
return obj26147;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16477__auto__ = m;
if(and__16477__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16477__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17125__auto__ = (((m == null))?null:m);
return (function (){var or__16489__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17125__auto__)]);
if(or__16489__auto__){
return or__16489__auto__;
} else {
var or__16489__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16489__auto____$1){
return or__16489__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16477__auto__ = m;
if(and__16477__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16477__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17125__auto__ = (((m == null))?null:m);
return (function (){var or__16489__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17125__auto__)]);
if(or__16489__auto__){
return or__16489__auto__;
} else {
var or__16489__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16489__auto____$1){
return or__16489__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16477__auto__ = m;
if(and__16477__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16477__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17125__auto__ = (((m == null))?null:m);
return (function (){var or__16489__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17125__auto__)]);
if(or__16489__auto__){
return or__16489__auto__;
} else {
var or__16489__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16489__auto____$1){
return or__16489__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t26369 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26369 = (function (cs,ch,mult,meta26370){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26370 = meta26370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26369.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26369.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26369.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26369.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26369.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26369.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26369.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26371){
var self__ = this;
var _26371__$1 = this;
return self__.meta26370;
});})(cs))
;

cljs.core.async.t26369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26371,meta26370__$1){
var self__ = this;
var _26371__$1 = this;
return (new cljs.core.async.t26369(self__.cs,self__.ch,self__.mult,meta26370__$1));
});})(cs))
;

cljs.core.async.t26369.cljs$lang$type = true;

cljs.core.async.t26369.cljs$lang$ctorStr = "cljs.core.async/t26369";

cljs.core.async.t26369.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17068__auto__,writer__17069__auto__,opt__17070__auto__){
return cljs.core._write.call(null,writer__17069__auto__,"cljs.core.async/t26369");
});})(cs))
;

cljs.core.async.__GT_t26369 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26369(cs__$1,ch__$1,mult__$1,meta26370){
return (new cljs.core.async.t26369(cs__$1,ch__$1,mult__$1,meta26370));
});})(cs))
;

}

return (new cljs.core.async.t26369(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18867__auto___26590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___26590,cs,m,dchan,dctr,done){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___26590,cs,m,dchan,dctr,done){
return (function (state_26502){
var state_val_26503 = (state_26502[(1)]);
if((state_val_26503 === (7))){
var inst_26498 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26504_26591 = state_26502__$1;
(statearr_26504_26591[(2)] = inst_26498);

(statearr_26504_26591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (20))){
var inst_26403 = (state_26502[(7)]);
var inst_26413 = cljs.core.first.call(null,inst_26403);
var inst_26414 = cljs.core.nth.call(null,inst_26413,(0),null);
var inst_26415 = cljs.core.nth.call(null,inst_26413,(1),null);
var state_26502__$1 = (function (){var statearr_26505 = state_26502;
(statearr_26505[(8)] = inst_26414);

return statearr_26505;
})();
if(cljs.core.truth_(inst_26415)){
var statearr_26506_26592 = state_26502__$1;
(statearr_26506_26592[(1)] = (22));

} else {
var statearr_26507_26593 = state_26502__$1;
(statearr_26507_26593[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (27))){
var inst_26450 = (state_26502[(9)]);
var inst_26445 = (state_26502[(10)]);
var inst_26374 = (state_26502[(11)]);
var inst_26443 = (state_26502[(12)]);
var inst_26450__$1 = cljs.core._nth.call(null,inst_26443,inst_26445);
var inst_26451 = cljs.core.async.put_BANG_.call(null,inst_26450__$1,inst_26374,done);
var state_26502__$1 = (function (){var statearr_26508 = state_26502;
(statearr_26508[(9)] = inst_26450__$1);

return statearr_26508;
})();
if(cljs.core.truth_(inst_26451)){
var statearr_26509_26594 = state_26502__$1;
(statearr_26509_26594[(1)] = (30));

} else {
var statearr_26510_26595 = state_26502__$1;
(statearr_26510_26595[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (1))){
var state_26502__$1 = state_26502;
var statearr_26511_26596 = state_26502__$1;
(statearr_26511_26596[(2)] = null);

(statearr_26511_26596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (24))){
var inst_26403 = (state_26502[(7)]);
var inst_26420 = (state_26502[(2)]);
var inst_26421 = cljs.core.next.call(null,inst_26403);
var inst_26383 = inst_26421;
var inst_26384 = null;
var inst_26385 = (0);
var inst_26386 = (0);
var state_26502__$1 = (function (){var statearr_26512 = state_26502;
(statearr_26512[(13)] = inst_26386);

(statearr_26512[(14)] = inst_26384);

(statearr_26512[(15)] = inst_26420);

(statearr_26512[(16)] = inst_26383);

(statearr_26512[(17)] = inst_26385);

return statearr_26512;
})();
var statearr_26513_26597 = state_26502__$1;
(statearr_26513_26597[(2)] = null);

(statearr_26513_26597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (39))){
var state_26502__$1 = state_26502;
var statearr_26517_26598 = state_26502__$1;
(statearr_26517_26598[(2)] = null);

(statearr_26517_26598[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (4))){
var inst_26374 = (state_26502[(11)]);
var inst_26374__$1 = (state_26502[(2)]);
var inst_26375 = (inst_26374__$1 == null);
var state_26502__$1 = (function (){var statearr_26518 = state_26502;
(statearr_26518[(11)] = inst_26374__$1);

return statearr_26518;
})();
if(cljs.core.truth_(inst_26375)){
var statearr_26519_26599 = state_26502__$1;
(statearr_26519_26599[(1)] = (5));

} else {
var statearr_26520_26600 = state_26502__$1;
(statearr_26520_26600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (15))){
var inst_26386 = (state_26502[(13)]);
var inst_26384 = (state_26502[(14)]);
var inst_26383 = (state_26502[(16)]);
var inst_26385 = (state_26502[(17)]);
var inst_26399 = (state_26502[(2)]);
var inst_26400 = (inst_26386 + (1));
var tmp26514 = inst_26384;
var tmp26515 = inst_26383;
var tmp26516 = inst_26385;
var inst_26383__$1 = tmp26515;
var inst_26384__$1 = tmp26514;
var inst_26385__$1 = tmp26516;
var inst_26386__$1 = inst_26400;
var state_26502__$1 = (function (){var statearr_26521 = state_26502;
(statearr_26521[(13)] = inst_26386__$1);

(statearr_26521[(14)] = inst_26384__$1);

(statearr_26521[(18)] = inst_26399);

(statearr_26521[(16)] = inst_26383__$1);

(statearr_26521[(17)] = inst_26385__$1);

return statearr_26521;
})();
var statearr_26522_26601 = state_26502__$1;
(statearr_26522_26601[(2)] = null);

(statearr_26522_26601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (21))){
var inst_26424 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26526_26602 = state_26502__$1;
(statearr_26526_26602[(2)] = inst_26424);

(statearr_26526_26602[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (31))){
var inst_26450 = (state_26502[(9)]);
var inst_26454 = done.call(null,null);
var inst_26455 = cljs.core.async.untap_STAR_.call(null,m,inst_26450);
var state_26502__$1 = (function (){var statearr_26527 = state_26502;
(statearr_26527[(19)] = inst_26454);

return statearr_26527;
})();
var statearr_26528_26603 = state_26502__$1;
(statearr_26528_26603[(2)] = inst_26455);

(statearr_26528_26603[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (32))){
var inst_26445 = (state_26502[(10)]);
var inst_26444 = (state_26502[(20)]);
var inst_26442 = (state_26502[(21)]);
var inst_26443 = (state_26502[(12)]);
var inst_26457 = (state_26502[(2)]);
var inst_26458 = (inst_26445 + (1));
var tmp26523 = inst_26444;
var tmp26524 = inst_26442;
var tmp26525 = inst_26443;
var inst_26442__$1 = tmp26524;
var inst_26443__$1 = tmp26525;
var inst_26444__$1 = tmp26523;
var inst_26445__$1 = inst_26458;
var state_26502__$1 = (function (){var statearr_26529 = state_26502;
(statearr_26529[(10)] = inst_26445__$1);

(statearr_26529[(20)] = inst_26444__$1);

(statearr_26529[(21)] = inst_26442__$1);

(statearr_26529[(12)] = inst_26443__$1);

(statearr_26529[(22)] = inst_26457);

return statearr_26529;
})();
var statearr_26530_26604 = state_26502__$1;
(statearr_26530_26604[(2)] = null);

(statearr_26530_26604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (40))){
var inst_26470 = (state_26502[(23)]);
var inst_26474 = done.call(null,null);
var inst_26475 = cljs.core.async.untap_STAR_.call(null,m,inst_26470);
var state_26502__$1 = (function (){var statearr_26531 = state_26502;
(statearr_26531[(24)] = inst_26474);

return statearr_26531;
})();
var statearr_26532_26605 = state_26502__$1;
(statearr_26532_26605[(2)] = inst_26475);

(statearr_26532_26605[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (33))){
var inst_26461 = (state_26502[(25)]);
var inst_26463 = cljs.core.chunked_seq_QMARK_.call(null,inst_26461);
var state_26502__$1 = state_26502;
if(inst_26463){
var statearr_26533_26606 = state_26502__$1;
(statearr_26533_26606[(1)] = (36));

} else {
var statearr_26534_26607 = state_26502__$1;
(statearr_26534_26607[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (13))){
var inst_26393 = (state_26502[(26)]);
var inst_26396 = cljs.core.async.close_BANG_.call(null,inst_26393);
var state_26502__$1 = state_26502;
var statearr_26535_26608 = state_26502__$1;
(statearr_26535_26608[(2)] = inst_26396);

(statearr_26535_26608[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (22))){
var inst_26414 = (state_26502[(8)]);
var inst_26417 = cljs.core.async.close_BANG_.call(null,inst_26414);
var state_26502__$1 = state_26502;
var statearr_26536_26609 = state_26502__$1;
(statearr_26536_26609[(2)] = inst_26417);

(statearr_26536_26609[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (36))){
var inst_26461 = (state_26502[(25)]);
var inst_26465 = cljs.core.chunk_first.call(null,inst_26461);
var inst_26466 = cljs.core.chunk_rest.call(null,inst_26461);
var inst_26467 = cljs.core.count.call(null,inst_26465);
var inst_26442 = inst_26466;
var inst_26443 = inst_26465;
var inst_26444 = inst_26467;
var inst_26445 = (0);
var state_26502__$1 = (function (){var statearr_26537 = state_26502;
(statearr_26537[(10)] = inst_26445);

(statearr_26537[(20)] = inst_26444);

(statearr_26537[(21)] = inst_26442);

(statearr_26537[(12)] = inst_26443);

return statearr_26537;
})();
var statearr_26538_26610 = state_26502__$1;
(statearr_26538_26610[(2)] = null);

(statearr_26538_26610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (41))){
var inst_26461 = (state_26502[(25)]);
var inst_26477 = (state_26502[(2)]);
var inst_26478 = cljs.core.next.call(null,inst_26461);
var inst_26442 = inst_26478;
var inst_26443 = null;
var inst_26444 = (0);
var inst_26445 = (0);
var state_26502__$1 = (function (){var statearr_26539 = state_26502;
(statearr_26539[(27)] = inst_26477);

(statearr_26539[(10)] = inst_26445);

(statearr_26539[(20)] = inst_26444);

(statearr_26539[(21)] = inst_26442);

(statearr_26539[(12)] = inst_26443);

return statearr_26539;
})();
var statearr_26540_26611 = state_26502__$1;
(statearr_26540_26611[(2)] = null);

(statearr_26540_26611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (43))){
var state_26502__$1 = state_26502;
var statearr_26541_26612 = state_26502__$1;
(statearr_26541_26612[(2)] = null);

(statearr_26541_26612[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (29))){
var inst_26486 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26542_26613 = state_26502__$1;
(statearr_26542_26613[(2)] = inst_26486);

(statearr_26542_26613[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (44))){
var inst_26495 = (state_26502[(2)]);
var state_26502__$1 = (function (){var statearr_26543 = state_26502;
(statearr_26543[(28)] = inst_26495);

return statearr_26543;
})();
var statearr_26544_26614 = state_26502__$1;
(statearr_26544_26614[(2)] = null);

(statearr_26544_26614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (6))){
var inst_26434 = (state_26502[(29)]);
var inst_26433 = cljs.core.deref.call(null,cs);
var inst_26434__$1 = cljs.core.keys.call(null,inst_26433);
var inst_26435 = cljs.core.count.call(null,inst_26434__$1);
var inst_26436 = cljs.core.reset_BANG_.call(null,dctr,inst_26435);
var inst_26441 = cljs.core.seq.call(null,inst_26434__$1);
var inst_26442 = inst_26441;
var inst_26443 = null;
var inst_26444 = (0);
var inst_26445 = (0);
var state_26502__$1 = (function (){var statearr_26545 = state_26502;
(statearr_26545[(10)] = inst_26445);

(statearr_26545[(20)] = inst_26444);

(statearr_26545[(21)] = inst_26442);

(statearr_26545[(12)] = inst_26443);

(statearr_26545[(29)] = inst_26434__$1);

(statearr_26545[(30)] = inst_26436);

return statearr_26545;
})();
var statearr_26546_26615 = state_26502__$1;
(statearr_26546_26615[(2)] = null);

(statearr_26546_26615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (28))){
var inst_26442 = (state_26502[(21)]);
var inst_26461 = (state_26502[(25)]);
var inst_26461__$1 = cljs.core.seq.call(null,inst_26442);
var state_26502__$1 = (function (){var statearr_26547 = state_26502;
(statearr_26547[(25)] = inst_26461__$1);

return statearr_26547;
})();
if(inst_26461__$1){
var statearr_26548_26616 = state_26502__$1;
(statearr_26548_26616[(1)] = (33));

} else {
var statearr_26549_26617 = state_26502__$1;
(statearr_26549_26617[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (25))){
var inst_26445 = (state_26502[(10)]);
var inst_26444 = (state_26502[(20)]);
var inst_26447 = (inst_26445 < inst_26444);
var inst_26448 = inst_26447;
var state_26502__$1 = state_26502;
if(cljs.core.truth_(inst_26448)){
var statearr_26550_26618 = state_26502__$1;
(statearr_26550_26618[(1)] = (27));

} else {
var statearr_26551_26619 = state_26502__$1;
(statearr_26551_26619[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (34))){
var state_26502__$1 = state_26502;
var statearr_26552_26620 = state_26502__$1;
(statearr_26552_26620[(2)] = null);

(statearr_26552_26620[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (17))){
var state_26502__$1 = state_26502;
var statearr_26553_26621 = state_26502__$1;
(statearr_26553_26621[(2)] = null);

(statearr_26553_26621[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (3))){
var inst_26500 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26502__$1,inst_26500);
} else {
if((state_val_26503 === (12))){
var inst_26429 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26554_26622 = state_26502__$1;
(statearr_26554_26622[(2)] = inst_26429);

(statearr_26554_26622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (2))){
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26502__$1,(4),ch);
} else {
if((state_val_26503 === (23))){
var state_26502__$1 = state_26502;
var statearr_26555_26623 = state_26502__$1;
(statearr_26555_26623[(2)] = null);

(statearr_26555_26623[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (35))){
var inst_26484 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26556_26624 = state_26502__$1;
(statearr_26556_26624[(2)] = inst_26484);

(statearr_26556_26624[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (19))){
var inst_26403 = (state_26502[(7)]);
var inst_26407 = cljs.core.chunk_first.call(null,inst_26403);
var inst_26408 = cljs.core.chunk_rest.call(null,inst_26403);
var inst_26409 = cljs.core.count.call(null,inst_26407);
var inst_26383 = inst_26408;
var inst_26384 = inst_26407;
var inst_26385 = inst_26409;
var inst_26386 = (0);
var state_26502__$1 = (function (){var statearr_26557 = state_26502;
(statearr_26557[(13)] = inst_26386);

(statearr_26557[(14)] = inst_26384);

(statearr_26557[(16)] = inst_26383);

(statearr_26557[(17)] = inst_26385);

return statearr_26557;
})();
var statearr_26558_26625 = state_26502__$1;
(statearr_26558_26625[(2)] = null);

(statearr_26558_26625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (11))){
var inst_26403 = (state_26502[(7)]);
var inst_26383 = (state_26502[(16)]);
var inst_26403__$1 = cljs.core.seq.call(null,inst_26383);
var state_26502__$1 = (function (){var statearr_26559 = state_26502;
(statearr_26559[(7)] = inst_26403__$1);

return statearr_26559;
})();
if(inst_26403__$1){
var statearr_26560_26626 = state_26502__$1;
(statearr_26560_26626[(1)] = (16));

} else {
var statearr_26561_26627 = state_26502__$1;
(statearr_26561_26627[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (9))){
var inst_26431 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26562_26628 = state_26502__$1;
(statearr_26562_26628[(2)] = inst_26431);

(statearr_26562_26628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (5))){
var inst_26381 = cljs.core.deref.call(null,cs);
var inst_26382 = cljs.core.seq.call(null,inst_26381);
var inst_26383 = inst_26382;
var inst_26384 = null;
var inst_26385 = (0);
var inst_26386 = (0);
var state_26502__$1 = (function (){var statearr_26563 = state_26502;
(statearr_26563[(13)] = inst_26386);

(statearr_26563[(14)] = inst_26384);

(statearr_26563[(16)] = inst_26383);

(statearr_26563[(17)] = inst_26385);

return statearr_26563;
})();
var statearr_26564_26629 = state_26502__$1;
(statearr_26564_26629[(2)] = null);

(statearr_26564_26629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (14))){
var state_26502__$1 = state_26502;
var statearr_26565_26630 = state_26502__$1;
(statearr_26565_26630[(2)] = null);

(statearr_26565_26630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (45))){
var inst_26492 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26566_26631 = state_26502__$1;
(statearr_26566_26631[(2)] = inst_26492);

(statearr_26566_26631[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (26))){
var inst_26434 = (state_26502[(29)]);
var inst_26488 = (state_26502[(2)]);
var inst_26489 = cljs.core.seq.call(null,inst_26434);
var state_26502__$1 = (function (){var statearr_26567 = state_26502;
(statearr_26567[(31)] = inst_26488);

return statearr_26567;
})();
if(inst_26489){
var statearr_26568_26632 = state_26502__$1;
(statearr_26568_26632[(1)] = (42));

} else {
var statearr_26569_26633 = state_26502__$1;
(statearr_26569_26633[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (16))){
var inst_26403 = (state_26502[(7)]);
var inst_26405 = cljs.core.chunked_seq_QMARK_.call(null,inst_26403);
var state_26502__$1 = state_26502;
if(inst_26405){
var statearr_26570_26634 = state_26502__$1;
(statearr_26570_26634[(1)] = (19));

} else {
var statearr_26571_26635 = state_26502__$1;
(statearr_26571_26635[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (38))){
var inst_26481 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26572_26636 = state_26502__$1;
(statearr_26572_26636[(2)] = inst_26481);

(statearr_26572_26636[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (30))){
var state_26502__$1 = state_26502;
var statearr_26573_26637 = state_26502__$1;
(statearr_26573_26637[(2)] = null);

(statearr_26573_26637[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (10))){
var inst_26386 = (state_26502[(13)]);
var inst_26384 = (state_26502[(14)]);
var inst_26392 = cljs.core._nth.call(null,inst_26384,inst_26386);
var inst_26393 = cljs.core.nth.call(null,inst_26392,(0),null);
var inst_26394 = cljs.core.nth.call(null,inst_26392,(1),null);
var state_26502__$1 = (function (){var statearr_26574 = state_26502;
(statearr_26574[(26)] = inst_26393);

return statearr_26574;
})();
if(cljs.core.truth_(inst_26394)){
var statearr_26575_26638 = state_26502__$1;
(statearr_26575_26638[(1)] = (13));

} else {
var statearr_26576_26639 = state_26502__$1;
(statearr_26576_26639[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (18))){
var inst_26427 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26577_26640 = state_26502__$1;
(statearr_26577_26640[(2)] = inst_26427);

(statearr_26577_26640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (42))){
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26502__$1,(45),dchan);
} else {
if((state_val_26503 === (37))){
var inst_26470 = (state_26502[(23)]);
var inst_26461 = (state_26502[(25)]);
var inst_26374 = (state_26502[(11)]);
var inst_26470__$1 = cljs.core.first.call(null,inst_26461);
var inst_26471 = cljs.core.async.put_BANG_.call(null,inst_26470__$1,inst_26374,done);
var state_26502__$1 = (function (){var statearr_26578 = state_26502;
(statearr_26578[(23)] = inst_26470__$1);

return statearr_26578;
})();
if(cljs.core.truth_(inst_26471)){
var statearr_26579_26641 = state_26502__$1;
(statearr_26579_26641[(1)] = (39));

} else {
var statearr_26580_26642 = state_26502__$1;
(statearr_26580_26642[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (8))){
var inst_26386 = (state_26502[(13)]);
var inst_26385 = (state_26502[(17)]);
var inst_26388 = (inst_26386 < inst_26385);
var inst_26389 = inst_26388;
var state_26502__$1 = state_26502;
if(cljs.core.truth_(inst_26389)){
var statearr_26581_26643 = state_26502__$1;
(statearr_26581_26643[(1)] = (10));

} else {
var statearr_26582_26644 = state_26502__$1;
(statearr_26582_26644[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__18867__auto___26590,cs,m,dchan,dctr,done))
;
return ((function (switch__18811__auto__,c__18867__auto___26590,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18812__auto__ = null;
var cljs$core$async$mult_$_state_machine__18812__auto____0 = (function (){
var statearr_26586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26586[(0)] = cljs$core$async$mult_$_state_machine__18812__auto__);

(statearr_26586[(1)] = (1));

return statearr_26586;
});
var cljs$core$async$mult_$_state_machine__18812__auto____1 = (function (state_26502){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_26502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e26587){if((e26587 instanceof Object)){
var ex__18815__auto__ = e26587;
var statearr_26588_26645 = state_26502;
(statearr_26588_26645[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26646 = state_26502;
state_26502 = G__26646;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18812__auto__ = function(state_26502){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18812__auto____1.call(this,state_26502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18812__auto____0;
cljs$core$async$mult_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18812__auto____1;
return cljs$core$async$mult_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___26590,cs,m,dchan,dctr,done))
})();
var state__18869__auto__ = (function (){var statearr_26589 = f__18868__auto__.call(null);
(statearr_26589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___26590);

return statearr_26589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___26590,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj26648 = {};
return obj26648;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16477__auto__ = m;
if(and__16477__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16477__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17125__auto__ = (((m == null))?null:m);
return (function (){var or__16489__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17125__auto__)]);
if(or__16489__auto__){
return or__16489__auto__;
} else {
var or__16489__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16489__auto____$1){
return or__16489__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16477__auto__ = m;
if(and__16477__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16477__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17125__auto__ = (((m == null))?null:m);
return (function (){var or__16489__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17125__auto__)]);
if(or__16489__auto__){
return or__16489__auto__;
} else {
var or__16489__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16489__auto____$1){
return or__16489__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16477__auto__ = m;
if(and__16477__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16477__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17125__auto__ = (((m == null))?null:m);
return (function (){var or__16489__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17125__auto__)]);
if(or__16489__auto__){
return or__16489__auto__;
} else {
var or__16489__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16489__auto____$1){
return or__16489__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16477__auto__ = m;
if(and__16477__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16477__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17125__auto__ = (((m == null))?null:m);
return (function (){var or__16489__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17125__auto__)]);
if(or__16489__auto__){
return or__16489__auto__;
} else {
var or__16489__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16489__auto____$1){
return or__16489__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16477__auto__ = m;
if(and__16477__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16477__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17125__auto__ = (((m == null))?null:m);
return (function (){var or__16489__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17125__auto__)]);
if(or__16489__auto__){
return or__16489__auto__;
} else {
var or__16489__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16489__auto____$1){
return or__16489__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26649){
var map__26654 = p__26649;
var map__26654__$1 = ((cljs.core.seq_QMARK_.call(null,map__26654))?cljs.core.apply.call(null,cljs.core.hash_map,map__26654):map__26654);
var opts = map__26654__$1;
var statearr_26655_26658 = state;
(statearr_26655_26658[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26654,map__26654__$1,opts){
return (function (val){
var statearr_26656_26659 = state;
(statearr_26656_26659[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26654,map__26654__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26657_26660 = state;
(statearr_26657_26660[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26649 = null;
if (arguments.length > 3) {
var G__26661__i = 0, G__26661__a = new Array(arguments.length -  3);
while (G__26661__i < G__26661__a.length) {G__26661__a[G__26661__i] = arguments[G__26661__i + 3]; ++G__26661__i;}
  p__26649 = new cljs.core.IndexedSeq(G__26661__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26649);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26662){
var state = cljs.core.first(arglist__26662);
arglist__26662 = cljs.core.next(arglist__26662);
var cont_block = cljs.core.first(arglist__26662);
arglist__26662 = cljs.core.next(arglist__26662);
var ports = cljs.core.first(arglist__26662);
var p__26649 = cljs.core.rest(arglist__26662);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__26649);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t26782 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26782 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26783){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26783 = meta26783;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26782.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26782.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26782.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26782.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26782.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26782.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26782.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26782.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26784){
var self__ = this;
var _26784__$1 = this;
return self__.meta26783;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26784,meta26783__$1){
var self__ = this;
var _26784__$1 = this;
return (new cljs.core.async.t26782(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26783__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26782.cljs$lang$type = true;

cljs.core.async.t26782.cljs$lang$ctorStr = "cljs.core.async/t26782";

cljs.core.async.t26782.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17068__auto__,writer__17069__auto__,opt__17070__auto__){
return cljs.core._write.call(null,writer__17069__auto__,"cljs.core.async/t26782");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26782 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26782(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26783){
return (new cljs.core.async.t26782(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26783));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26782(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18867__auto___26901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___26901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___26901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26854){
var state_val_26855 = (state_26854[(1)]);
if((state_val_26855 === (7))){
var inst_26798 = (state_26854[(7)]);
var inst_26803 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26798);
var state_26854__$1 = state_26854;
var statearr_26856_26902 = state_26854__$1;
(statearr_26856_26902[(2)] = inst_26803);

(statearr_26856_26902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (20))){
var inst_26813 = (state_26854[(8)]);
var state_26854__$1 = state_26854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26854__$1,(23),out,inst_26813);
} else {
if((state_val_26855 === (1))){
var inst_26788 = (state_26854[(9)]);
var inst_26788__$1 = calc_state.call(null);
var inst_26789 = cljs.core.seq_QMARK_.call(null,inst_26788__$1);
var state_26854__$1 = (function (){var statearr_26857 = state_26854;
(statearr_26857[(9)] = inst_26788__$1);

return statearr_26857;
})();
if(inst_26789){
var statearr_26858_26903 = state_26854__$1;
(statearr_26858_26903[(1)] = (2));

} else {
var statearr_26859_26904 = state_26854__$1;
(statearr_26859_26904[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (24))){
var inst_26806 = (state_26854[(10)]);
var inst_26798 = inst_26806;
var state_26854__$1 = (function (){var statearr_26860 = state_26854;
(statearr_26860[(7)] = inst_26798);

return statearr_26860;
})();
var statearr_26861_26905 = state_26854__$1;
(statearr_26861_26905[(2)] = null);

(statearr_26861_26905[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (4))){
var inst_26788 = (state_26854[(9)]);
var inst_26794 = (state_26854[(2)]);
var inst_26795 = cljs.core.get.call(null,inst_26794,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26796 = cljs.core.get.call(null,inst_26794,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26797 = cljs.core.get.call(null,inst_26794,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26798 = inst_26788;
var state_26854__$1 = (function (){var statearr_26862 = state_26854;
(statearr_26862[(11)] = inst_26795);

(statearr_26862[(12)] = inst_26797);

(statearr_26862[(13)] = inst_26796);

(statearr_26862[(7)] = inst_26798);

return statearr_26862;
})();
var statearr_26863_26906 = state_26854__$1;
(statearr_26863_26906[(2)] = null);

(statearr_26863_26906[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (15))){
var state_26854__$1 = state_26854;
var statearr_26864_26907 = state_26854__$1;
(statearr_26864_26907[(2)] = null);

(statearr_26864_26907[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (21))){
var inst_26806 = (state_26854[(10)]);
var inst_26798 = inst_26806;
var state_26854__$1 = (function (){var statearr_26865 = state_26854;
(statearr_26865[(7)] = inst_26798);

return statearr_26865;
})();
var statearr_26866_26908 = state_26854__$1;
(statearr_26866_26908[(2)] = null);

(statearr_26866_26908[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (13))){
var inst_26850 = (state_26854[(2)]);
var state_26854__$1 = state_26854;
var statearr_26867_26909 = state_26854__$1;
(statearr_26867_26909[(2)] = inst_26850);

(statearr_26867_26909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (22))){
var inst_26848 = (state_26854[(2)]);
var state_26854__$1 = state_26854;
var statearr_26868_26910 = state_26854__$1;
(statearr_26868_26910[(2)] = inst_26848);

(statearr_26868_26910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (6))){
var inst_26852 = (state_26854[(2)]);
var state_26854__$1 = state_26854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26854__$1,inst_26852);
} else {
if((state_val_26855 === (25))){
var state_26854__$1 = state_26854;
var statearr_26869_26911 = state_26854__$1;
(statearr_26869_26911[(2)] = null);

(statearr_26869_26911[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (17))){
var inst_26828 = (state_26854[(14)]);
var state_26854__$1 = state_26854;
var statearr_26870_26912 = state_26854__$1;
(statearr_26870_26912[(2)] = inst_26828);

(statearr_26870_26912[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (3))){
var inst_26788 = (state_26854[(9)]);
var state_26854__$1 = state_26854;
var statearr_26871_26913 = state_26854__$1;
(statearr_26871_26913[(2)] = inst_26788);

(statearr_26871_26913[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (12))){
var inst_26814 = (state_26854[(15)]);
var inst_26828 = (state_26854[(14)]);
var inst_26809 = (state_26854[(16)]);
var inst_26828__$1 = inst_26809.call(null,inst_26814);
var state_26854__$1 = (function (){var statearr_26872 = state_26854;
(statearr_26872[(14)] = inst_26828__$1);

return statearr_26872;
})();
if(cljs.core.truth_(inst_26828__$1)){
var statearr_26873_26914 = state_26854__$1;
(statearr_26873_26914[(1)] = (17));

} else {
var statearr_26874_26915 = state_26854__$1;
(statearr_26874_26915[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (2))){
var inst_26788 = (state_26854[(9)]);
var inst_26791 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26788);
var state_26854__$1 = state_26854;
var statearr_26875_26916 = state_26854__$1;
(statearr_26875_26916[(2)] = inst_26791);

(statearr_26875_26916[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (23))){
var inst_26839 = (state_26854[(2)]);
var state_26854__$1 = state_26854;
if(cljs.core.truth_(inst_26839)){
var statearr_26876_26917 = state_26854__$1;
(statearr_26876_26917[(1)] = (24));

} else {
var statearr_26877_26918 = state_26854__$1;
(statearr_26877_26918[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (19))){
var inst_26836 = (state_26854[(2)]);
var state_26854__$1 = state_26854;
if(cljs.core.truth_(inst_26836)){
var statearr_26878_26919 = state_26854__$1;
(statearr_26878_26919[(1)] = (20));

} else {
var statearr_26879_26920 = state_26854__$1;
(statearr_26879_26920[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (11))){
var inst_26813 = (state_26854[(8)]);
var inst_26819 = (inst_26813 == null);
var state_26854__$1 = state_26854;
if(cljs.core.truth_(inst_26819)){
var statearr_26880_26921 = state_26854__$1;
(statearr_26880_26921[(1)] = (14));

} else {
var statearr_26881_26922 = state_26854__$1;
(statearr_26881_26922[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (9))){
var inst_26806 = (state_26854[(10)]);
var inst_26806__$1 = (state_26854[(2)]);
var inst_26807 = cljs.core.get.call(null,inst_26806__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26808 = cljs.core.get.call(null,inst_26806__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26809 = cljs.core.get.call(null,inst_26806__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_26854__$1 = (function (){var statearr_26882 = state_26854;
(statearr_26882[(10)] = inst_26806__$1);

(statearr_26882[(17)] = inst_26808);

(statearr_26882[(16)] = inst_26809);

return statearr_26882;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26854__$1,(10),inst_26807);
} else {
if((state_val_26855 === (5))){
var inst_26798 = (state_26854[(7)]);
var inst_26801 = cljs.core.seq_QMARK_.call(null,inst_26798);
var state_26854__$1 = state_26854;
if(inst_26801){
var statearr_26883_26923 = state_26854__$1;
(statearr_26883_26923[(1)] = (7));

} else {
var statearr_26884_26924 = state_26854__$1;
(statearr_26884_26924[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (14))){
var inst_26814 = (state_26854[(15)]);
var inst_26821 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26814);
var state_26854__$1 = state_26854;
var statearr_26885_26925 = state_26854__$1;
(statearr_26885_26925[(2)] = inst_26821);

(statearr_26885_26925[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (26))){
var inst_26844 = (state_26854[(2)]);
var state_26854__$1 = state_26854;
var statearr_26886_26926 = state_26854__$1;
(statearr_26886_26926[(2)] = inst_26844);

(statearr_26886_26926[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (16))){
var inst_26824 = (state_26854[(2)]);
var inst_26825 = calc_state.call(null);
var inst_26798 = inst_26825;
var state_26854__$1 = (function (){var statearr_26887 = state_26854;
(statearr_26887[(7)] = inst_26798);

(statearr_26887[(18)] = inst_26824);

return statearr_26887;
})();
var statearr_26888_26927 = state_26854__$1;
(statearr_26888_26927[(2)] = null);

(statearr_26888_26927[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (10))){
var inst_26814 = (state_26854[(15)]);
var inst_26813 = (state_26854[(8)]);
var inst_26812 = (state_26854[(2)]);
var inst_26813__$1 = cljs.core.nth.call(null,inst_26812,(0),null);
var inst_26814__$1 = cljs.core.nth.call(null,inst_26812,(1),null);
var inst_26815 = (inst_26813__$1 == null);
var inst_26816 = cljs.core._EQ_.call(null,inst_26814__$1,change);
var inst_26817 = (inst_26815) || (inst_26816);
var state_26854__$1 = (function (){var statearr_26889 = state_26854;
(statearr_26889[(15)] = inst_26814__$1);

(statearr_26889[(8)] = inst_26813__$1);

return statearr_26889;
})();
if(cljs.core.truth_(inst_26817)){
var statearr_26890_26928 = state_26854__$1;
(statearr_26890_26928[(1)] = (11));

} else {
var statearr_26891_26929 = state_26854__$1;
(statearr_26891_26929[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (18))){
var inst_26814 = (state_26854[(15)]);
var inst_26808 = (state_26854[(17)]);
var inst_26809 = (state_26854[(16)]);
var inst_26831 = cljs.core.empty_QMARK_.call(null,inst_26809);
var inst_26832 = inst_26808.call(null,inst_26814);
var inst_26833 = cljs.core.not.call(null,inst_26832);
var inst_26834 = (inst_26831) && (inst_26833);
var state_26854__$1 = state_26854;
var statearr_26892_26930 = state_26854__$1;
(statearr_26892_26930[(2)] = inst_26834);

(statearr_26892_26930[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (8))){
var inst_26798 = (state_26854[(7)]);
var state_26854__$1 = state_26854;
var statearr_26893_26931 = state_26854__$1;
(statearr_26893_26931[(2)] = inst_26798);

(statearr_26893_26931[(1)] = (9));


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
});})(c__18867__auto___26901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18811__auto__,c__18867__auto___26901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18812__auto__ = null;
var cljs$core$async$mix_$_state_machine__18812__auto____0 = (function (){
var statearr_26897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26897[(0)] = cljs$core$async$mix_$_state_machine__18812__auto__);

(statearr_26897[(1)] = (1));

return statearr_26897;
});
var cljs$core$async$mix_$_state_machine__18812__auto____1 = (function (state_26854){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_26854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e26898){if((e26898 instanceof Object)){
var ex__18815__auto__ = e26898;
var statearr_26899_26932 = state_26854;
(statearr_26899_26932[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26933 = state_26854;
state_26854 = G__26933;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18812__auto__ = function(state_26854){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18812__auto____1.call(this,state_26854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18812__auto____0;
cljs$core$async$mix_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18812__auto____1;
return cljs$core$async$mix_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___26901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18869__auto__ = (function (){var statearr_26900 = f__18868__auto__.call(null);
(statearr_26900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___26901);

return statearr_26900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___26901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj26935 = {};
return obj26935;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16477__auto__ = p;
if(and__16477__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16477__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17125__auto__ = (((p == null))?null:p);
return (function (){var or__16489__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17125__auto__)]);
if(or__16489__auto__){
return or__16489__auto__;
} else {
var or__16489__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16489__auto____$1){
return or__16489__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16477__auto__ = p;
if(and__16477__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16477__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17125__auto__ = (((p == null))?null:p);
return (function (){var or__16489__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17125__auto__)]);
if(or__16489__auto__){
return or__16489__auto__;
} else {
var or__16489__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16489__auto____$1){
return or__16489__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__16477__auto__ = p;
if(and__16477__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16477__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17125__auto__ = (((p == null))?null:p);
return (function (){var or__16489__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17125__auto__)]);
if(or__16489__auto__){
return or__16489__auto__;
} else {
var or__16489__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16489__auto____$1){
return or__16489__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__16477__auto__ = p;
if(and__16477__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16477__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17125__auto__ = (((p == null))?null:p);
return (function (){var or__16489__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17125__auto__)]);
if(or__16489__auto__){
return or__16489__auto__;
} else {
var or__16489__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16489__auto____$1){
return or__16489__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16489__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16489__auto__)){
return or__16489__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16489__auto__,mults){
return (function (p1__26936_SHARP_){
if(cljs.core.truth_(p1__26936_SHARP_.call(null,topic))){
return p1__26936_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26936_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16489__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27059 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27059 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27060){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27060 = meta27060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27059.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27059.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27059.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27059.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27059.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27059.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27059.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27061){
var self__ = this;
var _27061__$1 = this;
return self__.meta27060;
});})(mults,ensure_mult))
;

cljs.core.async.t27059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27061,meta27060__$1){
var self__ = this;
var _27061__$1 = this;
return (new cljs.core.async.t27059(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27060__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27059.cljs$lang$type = true;

cljs.core.async.t27059.cljs$lang$ctorStr = "cljs.core.async/t27059";

cljs.core.async.t27059.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17068__auto__,writer__17069__auto__,opt__17070__auto__){
return cljs.core._write.call(null,writer__17069__auto__,"cljs.core.async/t27059");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27059 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t27059(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27060){
return (new cljs.core.async.t27059(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27060));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27059(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18867__auto___27181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___27181,mults,ensure_mult,p){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___27181,mults,ensure_mult,p){
return (function (state_27133){
var state_val_27134 = (state_27133[(1)]);
if((state_val_27134 === (7))){
var inst_27129 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
var statearr_27135_27182 = state_27133__$1;
(statearr_27135_27182[(2)] = inst_27129);

(statearr_27135_27182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (20))){
var state_27133__$1 = state_27133;
var statearr_27136_27183 = state_27133__$1;
(statearr_27136_27183[(2)] = null);

(statearr_27136_27183[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (1))){
var state_27133__$1 = state_27133;
var statearr_27137_27184 = state_27133__$1;
(statearr_27137_27184[(2)] = null);

(statearr_27137_27184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (24))){
var inst_27112 = (state_27133[(7)]);
var inst_27121 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27112);
var state_27133__$1 = state_27133;
var statearr_27138_27185 = state_27133__$1;
(statearr_27138_27185[(2)] = inst_27121);

(statearr_27138_27185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (4))){
var inst_27064 = (state_27133[(8)]);
var inst_27064__$1 = (state_27133[(2)]);
var inst_27065 = (inst_27064__$1 == null);
var state_27133__$1 = (function (){var statearr_27139 = state_27133;
(statearr_27139[(8)] = inst_27064__$1);

return statearr_27139;
})();
if(cljs.core.truth_(inst_27065)){
var statearr_27140_27186 = state_27133__$1;
(statearr_27140_27186[(1)] = (5));

} else {
var statearr_27141_27187 = state_27133__$1;
(statearr_27141_27187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (15))){
var inst_27106 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
var statearr_27142_27188 = state_27133__$1;
(statearr_27142_27188[(2)] = inst_27106);

(statearr_27142_27188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (21))){
var inst_27126 = (state_27133[(2)]);
var state_27133__$1 = (function (){var statearr_27143 = state_27133;
(statearr_27143[(9)] = inst_27126);

return statearr_27143;
})();
var statearr_27144_27189 = state_27133__$1;
(statearr_27144_27189[(2)] = null);

(statearr_27144_27189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (13))){
var inst_27088 = (state_27133[(10)]);
var inst_27090 = cljs.core.chunked_seq_QMARK_.call(null,inst_27088);
var state_27133__$1 = state_27133;
if(inst_27090){
var statearr_27145_27190 = state_27133__$1;
(statearr_27145_27190[(1)] = (16));

} else {
var statearr_27146_27191 = state_27133__$1;
(statearr_27146_27191[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (22))){
var inst_27118 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
if(cljs.core.truth_(inst_27118)){
var statearr_27147_27192 = state_27133__$1;
(statearr_27147_27192[(1)] = (23));

} else {
var statearr_27148_27193 = state_27133__$1;
(statearr_27148_27193[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (6))){
var inst_27112 = (state_27133[(7)]);
var inst_27064 = (state_27133[(8)]);
var inst_27114 = (state_27133[(11)]);
var inst_27112__$1 = topic_fn.call(null,inst_27064);
var inst_27113 = cljs.core.deref.call(null,mults);
var inst_27114__$1 = cljs.core.get.call(null,inst_27113,inst_27112__$1);
var state_27133__$1 = (function (){var statearr_27149 = state_27133;
(statearr_27149[(7)] = inst_27112__$1);

(statearr_27149[(11)] = inst_27114__$1);

return statearr_27149;
})();
if(cljs.core.truth_(inst_27114__$1)){
var statearr_27150_27194 = state_27133__$1;
(statearr_27150_27194[(1)] = (19));

} else {
var statearr_27151_27195 = state_27133__$1;
(statearr_27151_27195[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (25))){
var inst_27123 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
var statearr_27152_27196 = state_27133__$1;
(statearr_27152_27196[(2)] = inst_27123);

(statearr_27152_27196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (17))){
var inst_27088 = (state_27133[(10)]);
var inst_27097 = cljs.core.first.call(null,inst_27088);
var inst_27098 = cljs.core.async.muxch_STAR_.call(null,inst_27097);
var inst_27099 = cljs.core.async.close_BANG_.call(null,inst_27098);
var inst_27100 = cljs.core.next.call(null,inst_27088);
var inst_27074 = inst_27100;
var inst_27075 = null;
var inst_27076 = (0);
var inst_27077 = (0);
var state_27133__$1 = (function (){var statearr_27153 = state_27133;
(statearr_27153[(12)] = inst_27075);

(statearr_27153[(13)] = inst_27076);

(statearr_27153[(14)] = inst_27074);

(statearr_27153[(15)] = inst_27099);

(statearr_27153[(16)] = inst_27077);

return statearr_27153;
})();
var statearr_27154_27197 = state_27133__$1;
(statearr_27154_27197[(2)] = null);

(statearr_27154_27197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (3))){
var inst_27131 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27133__$1,inst_27131);
} else {
if((state_val_27134 === (12))){
var inst_27108 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
var statearr_27155_27198 = state_27133__$1;
(statearr_27155_27198[(2)] = inst_27108);

(statearr_27155_27198[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (2))){
var state_27133__$1 = state_27133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27133__$1,(4),ch);
} else {
if((state_val_27134 === (23))){
var state_27133__$1 = state_27133;
var statearr_27156_27199 = state_27133__$1;
(statearr_27156_27199[(2)] = null);

(statearr_27156_27199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (19))){
var inst_27064 = (state_27133[(8)]);
var inst_27114 = (state_27133[(11)]);
var inst_27116 = cljs.core.async.muxch_STAR_.call(null,inst_27114);
var state_27133__$1 = state_27133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27133__$1,(22),inst_27116,inst_27064);
} else {
if((state_val_27134 === (11))){
var inst_27088 = (state_27133[(10)]);
var inst_27074 = (state_27133[(14)]);
var inst_27088__$1 = cljs.core.seq.call(null,inst_27074);
var state_27133__$1 = (function (){var statearr_27157 = state_27133;
(statearr_27157[(10)] = inst_27088__$1);

return statearr_27157;
})();
if(inst_27088__$1){
var statearr_27158_27200 = state_27133__$1;
(statearr_27158_27200[(1)] = (13));

} else {
var statearr_27159_27201 = state_27133__$1;
(statearr_27159_27201[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (9))){
var inst_27110 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
var statearr_27160_27202 = state_27133__$1;
(statearr_27160_27202[(2)] = inst_27110);

(statearr_27160_27202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (5))){
var inst_27071 = cljs.core.deref.call(null,mults);
var inst_27072 = cljs.core.vals.call(null,inst_27071);
var inst_27073 = cljs.core.seq.call(null,inst_27072);
var inst_27074 = inst_27073;
var inst_27075 = null;
var inst_27076 = (0);
var inst_27077 = (0);
var state_27133__$1 = (function (){var statearr_27161 = state_27133;
(statearr_27161[(12)] = inst_27075);

(statearr_27161[(13)] = inst_27076);

(statearr_27161[(14)] = inst_27074);

(statearr_27161[(16)] = inst_27077);

return statearr_27161;
})();
var statearr_27162_27203 = state_27133__$1;
(statearr_27162_27203[(2)] = null);

(statearr_27162_27203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (14))){
var state_27133__$1 = state_27133;
var statearr_27166_27204 = state_27133__$1;
(statearr_27166_27204[(2)] = null);

(statearr_27166_27204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (16))){
var inst_27088 = (state_27133[(10)]);
var inst_27092 = cljs.core.chunk_first.call(null,inst_27088);
var inst_27093 = cljs.core.chunk_rest.call(null,inst_27088);
var inst_27094 = cljs.core.count.call(null,inst_27092);
var inst_27074 = inst_27093;
var inst_27075 = inst_27092;
var inst_27076 = inst_27094;
var inst_27077 = (0);
var state_27133__$1 = (function (){var statearr_27167 = state_27133;
(statearr_27167[(12)] = inst_27075);

(statearr_27167[(13)] = inst_27076);

(statearr_27167[(14)] = inst_27074);

(statearr_27167[(16)] = inst_27077);

return statearr_27167;
})();
var statearr_27168_27205 = state_27133__$1;
(statearr_27168_27205[(2)] = null);

(statearr_27168_27205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (10))){
var inst_27075 = (state_27133[(12)]);
var inst_27076 = (state_27133[(13)]);
var inst_27074 = (state_27133[(14)]);
var inst_27077 = (state_27133[(16)]);
var inst_27082 = cljs.core._nth.call(null,inst_27075,inst_27077);
var inst_27083 = cljs.core.async.muxch_STAR_.call(null,inst_27082);
var inst_27084 = cljs.core.async.close_BANG_.call(null,inst_27083);
var inst_27085 = (inst_27077 + (1));
var tmp27163 = inst_27075;
var tmp27164 = inst_27076;
var tmp27165 = inst_27074;
var inst_27074__$1 = tmp27165;
var inst_27075__$1 = tmp27163;
var inst_27076__$1 = tmp27164;
var inst_27077__$1 = inst_27085;
var state_27133__$1 = (function (){var statearr_27169 = state_27133;
(statearr_27169[(12)] = inst_27075__$1);

(statearr_27169[(13)] = inst_27076__$1);

(statearr_27169[(14)] = inst_27074__$1);

(statearr_27169[(17)] = inst_27084);

(statearr_27169[(16)] = inst_27077__$1);

return statearr_27169;
})();
var statearr_27170_27206 = state_27133__$1;
(statearr_27170_27206[(2)] = null);

(statearr_27170_27206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (18))){
var inst_27103 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
var statearr_27171_27207 = state_27133__$1;
(statearr_27171_27207[(2)] = inst_27103);

(statearr_27171_27207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (8))){
var inst_27076 = (state_27133[(13)]);
var inst_27077 = (state_27133[(16)]);
var inst_27079 = (inst_27077 < inst_27076);
var inst_27080 = inst_27079;
var state_27133__$1 = state_27133;
if(cljs.core.truth_(inst_27080)){
var statearr_27172_27208 = state_27133__$1;
(statearr_27172_27208[(1)] = (10));

} else {
var statearr_27173_27209 = state_27133__$1;
(statearr_27173_27209[(1)] = (11));

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
});})(c__18867__auto___27181,mults,ensure_mult,p))
;
return ((function (switch__18811__auto__,c__18867__auto___27181,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__18812__auto__ = null;
var cljs$core$async$pub_$_state_machine__18812__auto____0 = (function (){
var statearr_27177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27177[(0)] = cljs$core$async$pub_$_state_machine__18812__auto__);

(statearr_27177[(1)] = (1));

return statearr_27177;
});
var cljs$core$async$pub_$_state_machine__18812__auto____1 = (function (state_27133){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_27133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e27178){if((e27178 instanceof Object)){
var ex__18815__auto__ = e27178;
var statearr_27179_27210 = state_27133;
(statearr_27179_27210[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27211 = state_27133;
state_27133 = G__27211;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__18812__auto__ = function(state_27133){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__18812__auto____1.call(this,state_27133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__18812__auto____0;
cljs$core$async$pub_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__18812__auto____1;
return cljs$core$async$pub_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___27181,mults,ensure_mult,p))
})();
var state__18869__auto__ = (function (){var statearr_27180 = f__18868__auto__.call(null);
(statearr_27180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___27181);

return statearr_27180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___27181,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18867__auto___27348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___27348,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___27348,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27318){
var state_val_27319 = (state_27318[(1)]);
if((state_val_27319 === (7))){
var state_27318__$1 = state_27318;
var statearr_27320_27349 = state_27318__$1;
(statearr_27320_27349[(2)] = null);

(statearr_27320_27349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (1))){
var state_27318__$1 = state_27318;
var statearr_27321_27350 = state_27318__$1;
(statearr_27321_27350[(2)] = null);

(statearr_27321_27350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (4))){
var inst_27282 = (state_27318[(7)]);
var inst_27284 = (inst_27282 < cnt);
var state_27318__$1 = state_27318;
if(cljs.core.truth_(inst_27284)){
var statearr_27322_27351 = state_27318__$1;
(statearr_27322_27351[(1)] = (6));

} else {
var statearr_27323_27352 = state_27318__$1;
(statearr_27323_27352[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (15))){
var inst_27314 = (state_27318[(2)]);
var state_27318__$1 = state_27318;
var statearr_27324_27353 = state_27318__$1;
(statearr_27324_27353[(2)] = inst_27314);

(statearr_27324_27353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (13))){
var inst_27307 = cljs.core.async.close_BANG_.call(null,out);
var state_27318__$1 = state_27318;
var statearr_27325_27354 = state_27318__$1;
(statearr_27325_27354[(2)] = inst_27307);

(statearr_27325_27354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (6))){
var state_27318__$1 = state_27318;
var statearr_27326_27355 = state_27318__$1;
(statearr_27326_27355[(2)] = null);

(statearr_27326_27355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (3))){
var inst_27316 = (state_27318[(2)]);
var state_27318__$1 = state_27318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27318__$1,inst_27316);
} else {
if((state_val_27319 === (12))){
var inst_27304 = (state_27318[(8)]);
var inst_27304__$1 = (state_27318[(2)]);
var inst_27305 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27304__$1);
var state_27318__$1 = (function (){var statearr_27327 = state_27318;
(statearr_27327[(8)] = inst_27304__$1);

return statearr_27327;
})();
if(cljs.core.truth_(inst_27305)){
var statearr_27328_27356 = state_27318__$1;
(statearr_27328_27356[(1)] = (13));

} else {
var statearr_27329_27357 = state_27318__$1;
(statearr_27329_27357[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (2))){
var inst_27281 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27282 = (0);
var state_27318__$1 = (function (){var statearr_27330 = state_27318;
(statearr_27330[(7)] = inst_27282);

(statearr_27330[(9)] = inst_27281);

return statearr_27330;
})();
var statearr_27331_27358 = state_27318__$1;
(statearr_27331_27358[(2)] = null);

(statearr_27331_27358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (11))){
var inst_27282 = (state_27318[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27318,(10),Object,null,(9));
var inst_27291 = chs__$1.call(null,inst_27282);
var inst_27292 = done.call(null,inst_27282);
var inst_27293 = cljs.core.async.take_BANG_.call(null,inst_27291,inst_27292);
var state_27318__$1 = state_27318;
var statearr_27332_27359 = state_27318__$1;
(statearr_27332_27359[(2)] = inst_27293);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27318__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (9))){
var inst_27282 = (state_27318[(7)]);
var inst_27295 = (state_27318[(2)]);
var inst_27296 = (inst_27282 + (1));
var inst_27282__$1 = inst_27296;
var state_27318__$1 = (function (){var statearr_27333 = state_27318;
(statearr_27333[(10)] = inst_27295);

(statearr_27333[(7)] = inst_27282__$1);

return statearr_27333;
})();
var statearr_27334_27360 = state_27318__$1;
(statearr_27334_27360[(2)] = null);

(statearr_27334_27360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (5))){
var inst_27302 = (state_27318[(2)]);
var state_27318__$1 = (function (){var statearr_27335 = state_27318;
(statearr_27335[(11)] = inst_27302);

return statearr_27335;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27318__$1,(12),dchan);
} else {
if((state_val_27319 === (14))){
var inst_27304 = (state_27318[(8)]);
var inst_27309 = cljs.core.apply.call(null,f,inst_27304);
var state_27318__$1 = state_27318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27318__$1,(16),out,inst_27309);
} else {
if((state_val_27319 === (16))){
var inst_27311 = (state_27318[(2)]);
var state_27318__$1 = (function (){var statearr_27336 = state_27318;
(statearr_27336[(12)] = inst_27311);

return statearr_27336;
})();
var statearr_27337_27361 = state_27318__$1;
(statearr_27337_27361[(2)] = null);

(statearr_27337_27361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (10))){
var inst_27286 = (state_27318[(2)]);
var inst_27287 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27318__$1 = (function (){var statearr_27338 = state_27318;
(statearr_27338[(13)] = inst_27286);

return statearr_27338;
})();
var statearr_27339_27362 = state_27318__$1;
(statearr_27339_27362[(2)] = inst_27287);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27318__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (8))){
var inst_27300 = (state_27318[(2)]);
var state_27318__$1 = state_27318;
var statearr_27340_27363 = state_27318__$1;
(statearr_27340_27363[(2)] = inst_27300);

(statearr_27340_27363[(1)] = (5));


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
});})(c__18867__auto___27348,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18811__auto__,c__18867__auto___27348,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__18812__auto__ = null;
var cljs$core$async$map_$_state_machine__18812__auto____0 = (function (){
var statearr_27344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27344[(0)] = cljs$core$async$map_$_state_machine__18812__auto__);

(statearr_27344[(1)] = (1));

return statearr_27344;
});
var cljs$core$async$map_$_state_machine__18812__auto____1 = (function (state_27318){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_27318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e27345){if((e27345 instanceof Object)){
var ex__18815__auto__ = e27345;
var statearr_27346_27364 = state_27318;
(statearr_27346_27364[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27365 = state_27318;
state_27318 = G__27365;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__18812__auto__ = function(state_27318){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__18812__auto____1.call(this,state_27318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__18812__auto____0;
cljs$core$async$map_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__18812__auto____1;
return cljs$core$async$map_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___27348,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18869__auto__ = (function (){var statearr_27347 = f__18868__auto__.call(null);
(statearr_27347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___27348);

return statearr_27347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___27348,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18867__auto___27473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___27473,out){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___27473,out){
return (function (state_27449){
var state_val_27450 = (state_27449[(1)]);
if((state_val_27450 === (7))){
var inst_27428 = (state_27449[(7)]);
var inst_27429 = (state_27449[(8)]);
var inst_27428__$1 = (state_27449[(2)]);
var inst_27429__$1 = cljs.core.nth.call(null,inst_27428__$1,(0),null);
var inst_27430 = cljs.core.nth.call(null,inst_27428__$1,(1),null);
var inst_27431 = (inst_27429__$1 == null);
var state_27449__$1 = (function (){var statearr_27451 = state_27449;
(statearr_27451[(7)] = inst_27428__$1);

(statearr_27451[(9)] = inst_27430);

(statearr_27451[(8)] = inst_27429__$1);

return statearr_27451;
})();
if(cljs.core.truth_(inst_27431)){
var statearr_27452_27474 = state_27449__$1;
(statearr_27452_27474[(1)] = (8));

} else {
var statearr_27453_27475 = state_27449__$1;
(statearr_27453_27475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (1))){
var inst_27420 = cljs.core.vec.call(null,chs);
var inst_27421 = inst_27420;
var state_27449__$1 = (function (){var statearr_27454 = state_27449;
(statearr_27454[(10)] = inst_27421);

return statearr_27454;
})();
var statearr_27455_27476 = state_27449__$1;
(statearr_27455_27476[(2)] = null);

(statearr_27455_27476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (4))){
var inst_27421 = (state_27449[(10)]);
var state_27449__$1 = state_27449;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27449__$1,(7),inst_27421);
} else {
if((state_val_27450 === (6))){
var inst_27445 = (state_27449[(2)]);
var state_27449__$1 = state_27449;
var statearr_27456_27477 = state_27449__$1;
(statearr_27456_27477[(2)] = inst_27445);

(statearr_27456_27477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (3))){
var inst_27447 = (state_27449[(2)]);
var state_27449__$1 = state_27449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27449__$1,inst_27447);
} else {
if((state_val_27450 === (2))){
var inst_27421 = (state_27449[(10)]);
var inst_27423 = cljs.core.count.call(null,inst_27421);
var inst_27424 = (inst_27423 > (0));
var state_27449__$1 = state_27449;
if(cljs.core.truth_(inst_27424)){
var statearr_27458_27478 = state_27449__$1;
(statearr_27458_27478[(1)] = (4));

} else {
var statearr_27459_27479 = state_27449__$1;
(statearr_27459_27479[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (11))){
var inst_27421 = (state_27449[(10)]);
var inst_27438 = (state_27449[(2)]);
var tmp27457 = inst_27421;
var inst_27421__$1 = tmp27457;
var state_27449__$1 = (function (){var statearr_27460 = state_27449;
(statearr_27460[(11)] = inst_27438);

(statearr_27460[(10)] = inst_27421__$1);

return statearr_27460;
})();
var statearr_27461_27480 = state_27449__$1;
(statearr_27461_27480[(2)] = null);

(statearr_27461_27480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (9))){
var inst_27429 = (state_27449[(8)]);
var state_27449__$1 = state_27449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27449__$1,(11),out,inst_27429);
} else {
if((state_val_27450 === (5))){
var inst_27443 = cljs.core.async.close_BANG_.call(null,out);
var state_27449__$1 = state_27449;
var statearr_27462_27481 = state_27449__$1;
(statearr_27462_27481[(2)] = inst_27443);

(statearr_27462_27481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (10))){
var inst_27441 = (state_27449[(2)]);
var state_27449__$1 = state_27449;
var statearr_27463_27482 = state_27449__$1;
(statearr_27463_27482[(2)] = inst_27441);

(statearr_27463_27482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (8))){
var inst_27428 = (state_27449[(7)]);
var inst_27430 = (state_27449[(9)]);
var inst_27429 = (state_27449[(8)]);
var inst_27421 = (state_27449[(10)]);
var inst_27433 = (function (){var c = inst_27430;
var v = inst_27429;
var vec__27426 = inst_27428;
var cs = inst_27421;
return ((function (c,v,vec__27426,cs,inst_27428,inst_27430,inst_27429,inst_27421,state_val_27450,c__18867__auto___27473,out){
return (function (p1__27366_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27366_SHARP_);
});
;})(c,v,vec__27426,cs,inst_27428,inst_27430,inst_27429,inst_27421,state_val_27450,c__18867__auto___27473,out))
})();
var inst_27434 = cljs.core.filterv.call(null,inst_27433,inst_27421);
var inst_27421__$1 = inst_27434;
var state_27449__$1 = (function (){var statearr_27464 = state_27449;
(statearr_27464[(10)] = inst_27421__$1);

return statearr_27464;
})();
var statearr_27465_27483 = state_27449__$1;
(statearr_27465_27483[(2)] = null);

(statearr_27465_27483[(1)] = (2));


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
});})(c__18867__auto___27473,out))
;
return ((function (switch__18811__auto__,c__18867__auto___27473,out){
return (function() {
var cljs$core$async$merge_$_state_machine__18812__auto__ = null;
var cljs$core$async$merge_$_state_machine__18812__auto____0 = (function (){
var statearr_27469 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27469[(0)] = cljs$core$async$merge_$_state_machine__18812__auto__);

(statearr_27469[(1)] = (1));

return statearr_27469;
});
var cljs$core$async$merge_$_state_machine__18812__auto____1 = (function (state_27449){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_27449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e27470){if((e27470 instanceof Object)){
var ex__18815__auto__ = e27470;
var statearr_27471_27484 = state_27449;
(statearr_27471_27484[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27485 = state_27449;
state_27449 = G__27485;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__18812__auto__ = function(state_27449){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__18812__auto____1.call(this,state_27449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__18812__auto____0;
cljs$core$async$merge_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__18812__auto____1;
return cljs$core$async$merge_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___27473,out))
})();
var state__18869__auto__ = (function (){var statearr_27472 = f__18868__auto__.call(null);
(statearr_27472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___27473);

return statearr_27472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___27473,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18867__auto___27578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___27578,out){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___27578,out){
return (function (state_27555){
var state_val_27556 = (state_27555[(1)]);
if((state_val_27556 === (7))){
var inst_27537 = (state_27555[(7)]);
var inst_27537__$1 = (state_27555[(2)]);
var inst_27538 = (inst_27537__$1 == null);
var inst_27539 = cljs.core.not.call(null,inst_27538);
var state_27555__$1 = (function (){var statearr_27557 = state_27555;
(statearr_27557[(7)] = inst_27537__$1);

return statearr_27557;
})();
if(inst_27539){
var statearr_27558_27579 = state_27555__$1;
(statearr_27558_27579[(1)] = (8));

} else {
var statearr_27559_27580 = state_27555__$1;
(statearr_27559_27580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (1))){
var inst_27532 = (0);
var state_27555__$1 = (function (){var statearr_27560 = state_27555;
(statearr_27560[(8)] = inst_27532);

return statearr_27560;
})();
var statearr_27561_27581 = state_27555__$1;
(statearr_27561_27581[(2)] = null);

(statearr_27561_27581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (4))){
var state_27555__$1 = state_27555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27555__$1,(7),ch);
} else {
if((state_val_27556 === (6))){
var inst_27550 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
var statearr_27562_27582 = state_27555__$1;
(statearr_27562_27582[(2)] = inst_27550);

(statearr_27562_27582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (3))){
var inst_27552 = (state_27555[(2)]);
var inst_27553 = cljs.core.async.close_BANG_.call(null,out);
var state_27555__$1 = (function (){var statearr_27563 = state_27555;
(statearr_27563[(9)] = inst_27552);

return statearr_27563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27555__$1,inst_27553);
} else {
if((state_val_27556 === (2))){
var inst_27532 = (state_27555[(8)]);
var inst_27534 = (inst_27532 < n);
var state_27555__$1 = state_27555;
if(cljs.core.truth_(inst_27534)){
var statearr_27564_27583 = state_27555__$1;
(statearr_27564_27583[(1)] = (4));

} else {
var statearr_27565_27584 = state_27555__$1;
(statearr_27565_27584[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (11))){
var inst_27532 = (state_27555[(8)]);
var inst_27542 = (state_27555[(2)]);
var inst_27543 = (inst_27532 + (1));
var inst_27532__$1 = inst_27543;
var state_27555__$1 = (function (){var statearr_27566 = state_27555;
(statearr_27566[(10)] = inst_27542);

(statearr_27566[(8)] = inst_27532__$1);

return statearr_27566;
})();
var statearr_27567_27585 = state_27555__$1;
(statearr_27567_27585[(2)] = null);

(statearr_27567_27585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (9))){
var state_27555__$1 = state_27555;
var statearr_27568_27586 = state_27555__$1;
(statearr_27568_27586[(2)] = null);

(statearr_27568_27586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (5))){
var state_27555__$1 = state_27555;
var statearr_27569_27587 = state_27555__$1;
(statearr_27569_27587[(2)] = null);

(statearr_27569_27587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (10))){
var inst_27547 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
var statearr_27570_27588 = state_27555__$1;
(statearr_27570_27588[(2)] = inst_27547);

(statearr_27570_27588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (8))){
var inst_27537 = (state_27555[(7)]);
var state_27555__$1 = state_27555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27555__$1,(11),out,inst_27537);
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
});})(c__18867__auto___27578,out))
;
return ((function (switch__18811__auto__,c__18867__auto___27578,out){
return (function() {
var cljs$core$async$take_$_state_machine__18812__auto__ = null;
var cljs$core$async$take_$_state_machine__18812__auto____0 = (function (){
var statearr_27574 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27574[(0)] = cljs$core$async$take_$_state_machine__18812__auto__);

(statearr_27574[(1)] = (1));

return statearr_27574;
});
var cljs$core$async$take_$_state_machine__18812__auto____1 = (function (state_27555){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_27555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e27575){if((e27575 instanceof Object)){
var ex__18815__auto__ = e27575;
var statearr_27576_27589 = state_27555;
(statearr_27576_27589[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27590 = state_27555;
state_27555 = G__27590;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__18812__auto__ = function(state_27555){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__18812__auto____1.call(this,state_27555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__18812__auto____0;
cljs$core$async$take_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__18812__auto____1;
return cljs$core$async$take_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___27578,out))
})();
var state__18869__auto__ = (function (){var statearr_27577 = f__18868__auto__.call(null);
(statearr_27577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___27578);

return statearr_27577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___27578,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27598 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27598 = (function (ch,f,map_LT_,meta27599){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27599 = meta27599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27598.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27598.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27598.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27598.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27601 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27601 = (function (fn1,_,meta27599,map_LT_,f,ch,meta27602){
this.fn1 = fn1;
this._ = _;
this.meta27599 = meta27599;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27602 = meta27602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27601.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27591_SHARP_){
return f1.call(null,(((p1__27591_SHARP_ == null))?null:self__.f.call(null,p1__27591_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27603){
var self__ = this;
var _27603__$1 = this;
return self__.meta27602;
});})(___$1))
;

cljs.core.async.t27601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27603,meta27602__$1){
var self__ = this;
var _27603__$1 = this;
return (new cljs.core.async.t27601(self__.fn1,self__._,self__.meta27599,self__.map_LT_,self__.f,self__.ch,meta27602__$1));
});})(___$1))
;

cljs.core.async.t27601.cljs$lang$type = true;

cljs.core.async.t27601.cljs$lang$ctorStr = "cljs.core.async/t27601";

cljs.core.async.t27601.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17068__auto__,writer__17069__auto__,opt__17070__auto__){
return cljs.core._write.call(null,writer__17069__auto__,"cljs.core.async/t27601");
});})(___$1))
;

cljs.core.async.__GT_t27601 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27601(fn1__$1,___$2,meta27599__$1,map_LT___$1,f__$1,ch__$1,meta27602){
return (new cljs.core.async.t27601(fn1__$1,___$2,meta27599__$1,map_LT___$1,f__$1,ch__$1,meta27602));
});})(___$1))
;

}

return (new cljs.core.async.t27601(fn1,___$1,self__.meta27599,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16477__auto__ = ret;
if(cljs.core.truth_(and__16477__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16477__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27598.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27598.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27598.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27600){
var self__ = this;
var _27600__$1 = this;
return self__.meta27599;
});

cljs.core.async.t27598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27600,meta27599__$1){
var self__ = this;
var _27600__$1 = this;
return (new cljs.core.async.t27598(self__.ch,self__.f,self__.map_LT_,meta27599__$1));
});

cljs.core.async.t27598.cljs$lang$type = true;

cljs.core.async.t27598.cljs$lang$ctorStr = "cljs.core.async/t27598";

cljs.core.async.t27598.cljs$lang$ctorPrWriter = (function (this__17068__auto__,writer__17069__auto__,opt__17070__auto__){
return cljs.core._write.call(null,writer__17069__auto__,"cljs.core.async/t27598");
});

cljs.core.async.__GT_t27598 = (function cljs$core$async$map_LT__$___GT_t27598(ch__$1,f__$1,map_LT___$1,meta27599){
return (new cljs.core.async.t27598(ch__$1,f__$1,map_LT___$1,meta27599));
});

}

return (new cljs.core.async.t27598(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27607 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27607 = (function (ch,f,map_GT_,meta27608){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27608 = meta27608;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27607.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27607.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27607.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27607.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27607.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27607.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27609){
var self__ = this;
var _27609__$1 = this;
return self__.meta27608;
});

cljs.core.async.t27607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27609,meta27608__$1){
var self__ = this;
var _27609__$1 = this;
return (new cljs.core.async.t27607(self__.ch,self__.f,self__.map_GT_,meta27608__$1));
});

cljs.core.async.t27607.cljs$lang$type = true;

cljs.core.async.t27607.cljs$lang$ctorStr = "cljs.core.async/t27607";

cljs.core.async.t27607.cljs$lang$ctorPrWriter = (function (this__17068__auto__,writer__17069__auto__,opt__17070__auto__){
return cljs.core._write.call(null,writer__17069__auto__,"cljs.core.async/t27607");
});

cljs.core.async.__GT_t27607 = (function cljs$core$async$map_GT__$___GT_t27607(ch__$1,f__$1,map_GT___$1,meta27608){
return (new cljs.core.async.t27607(ch__$1,f__$1,map_GT___$1,meta27608));
});

}

return (new cljs.core.async.t27607(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27613 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27613 = (function (ch,p,filter_GT_,meta27614){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27614 = meta27614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27613.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27613.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27613.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27613.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27613.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27613.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27613.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27615){
var self__ = this;
var _27615__$1 = this;
return self__.meta27614;
});

cljs.core.async.t27613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27615,meta27614__$1){
var self__ = this;
var _27615__$1 = this;
return (new cljs.core.async.t27613(self__.ch,self__.p,self__.filter_GT_,meta27614__$1));
});

cljs.core.async.t27613.cljs$lang$type = true;

cljs.core.async.t27613.cljs$lang$ctorStr = "cljs.core.async/t27613";

cljs.core.async.t27613.cljs$lang$ctorPrWriter = (function (this__17068__auto__,writer__17069__auto__,opt__17070__auto__){
return cljs.core._write.call(null,writer__17069__auto__,"cljs.core.async/t27613");
});

cljs.core.async.__GT_t27613 = (function cljs$core$async$filter_GT__$___GT_t27613(ch__$1,p__$1,filter_GT___$1,meta27614){
return (new cljs.core.async.t27613(ch__$1,p__$1,filter_GT___$1,meta27614));
});

}

return (new cljs.core.async.t27613(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18867__auto___27698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___27698,out){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___27698,out){
return (function (state_27677){
var state_val_27678 = (state_27677[(1)]);
if((state_val_27678 === (7))){
var inst_27673 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
var statearr_27679_27699 = state_27677__$1;
(statearr_27679_27699[(2)] = inst_27673);

(statearr_27679_27699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (1))){
var state_27677__$1 = state_27677;
var statearr_27680_27700 = state_27677__$1;
(statearr_27680_27700[(2)] = null);

(statearr_27680_27700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (4))){
var inst_27659 = (state_27677[(7)]);
var inst_27659__$1 = (state_27677[(2)]);
var inst_27660 = (inst_27659__$1 == null);
var state_27677__$1 = (function (){var statearr_27681 = state_27677;
(statearr_27681[(7)] = inst_27659__$1);

return statearr_27681;
})();
if(cljs.core.truth_(inst_27660)){
var statearr_27682_27701 = state_27677__$1;
(statearr_27682_27701[(1)] = (5));

} else {
var statearr_27683_27702 = state_27677__$1;
(statearr_27683_27702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (6))){
var inst_27659 = (state_27677[(7)]);
var inst_27664 = p.call(null,inst_27659);
var state_27677__$1 = state_27677;
if(cljs.core.truth_(inst_27664)){
var statearr_27684_27703 = state_27677__$1;
(statearr_27684_27703[(1)] = (8));

} else {
var statearr_27685_27704 = state_27677__$1;
(statearr_27685_27704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (3))){
var inst_27675 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27677__$1,inst_27675);
} else {
if((state_val_27678 === (2))){
var state_27677__$1 = state_27677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27677__$1,(4),ch);
} else {
if((state_val_27678 === (11))){
var inst_27667 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
var statearr_27686_27705 = state_27677__$1;
(statearr_27686_27705[(2)] = inst_27667);

(statearr_27686_27705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (9))){
var state_27677__$1 = state_27677;
var statearr_27687_27706 = state_27677__$1;
(statearr_27687_27706[(2)] = null);

(statearr_27687_27706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (5))){
var inst_27662 = cljs.core.async.close_BANG_.call(null,out);
var state_27677__$1 = state_27677;
var statearr_27688_27707 = state_27677__$1;
(statearr_27688_27707[(2)] = inst_27662);

(statearr_27688_27707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (10))){
var inst_27670 = (state_27677[(2)]);
var state_27677__$1 = (function (){var statearr_27689 = state_27677;
(statearr_27689[(8)] = inst_27670);

return statearr_27689;
})();
var statearr_27690_27708 = state_27677__$1;
(statearr_27690_27708[(2)] = null);

(statearr_27690_27708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (8))){
var inst_27659 = (state_27677[(7)]);
var state_27677__$1 = state_27677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27677__$1,(11),out,inst_27659);
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
});})(c__18867__auto___27698,out))
;
return ((function (switch__18811__auto__,c__18867__auto___27698,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__18812__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__18812__auto____0 = (function (){
var statearr_27694 = [null,null,null,null,null,null,null,null,null];
(statearr_27694[(0)] = cljs$core$async$filter_LT__$_state_machine__18812__auto__);

(statearr_27694[(1)] = (1));

return statearr_27694;
});
var cljs$core$async$filter_LT__$_state_machine__18812__auto____1 = (function (state_27677){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_27677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e27695){if((e27695 instanceof Object)){
var ex__18815__auto__ = e27695;
var statearr_27696_27709 = state_27677;
(statearr_27696_27709[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27710 = state_27677;
state_27677 = G__27710;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__18812__auto__ = function(state_27677){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__18812__auto____1.call(this,state_27677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__18812__auto____0;
cljs$core$async$filter_LT__$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__18812__auto____1;
return cljs$core$async$filter_LT__$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___27698,out))
})();
var state__18869__auto__ = (function (){var statearr_27697 = f__18868__auto__.call(null);
(statearr_27697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___27698);

return statearr_27697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___27698,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__){
return (function (state_27876){
var state_val_27877 = (state_27876[(1)]);
if((state_val_27877 === (7))){
var inst_27872 = (state_27876[(2)]);
var state_27876__$1 = state_27876;
var statearr_27878_27919 = state_27876__$1;
(statearr_27878_27919[(2)] = inst_27872);

(statearr_27878_27919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (20))){
var inst_27842 = (state_27876[(7)]);
var inst_27853 = (state_27876[(2)]);
var inst_27854 = cljs.core.next.call(null,inst_27842);
var inst_27828 = inst_27854;
var inst_27829 = null;
var inst_27830 = (0);
var inst_27831 = (0);
var state_27876__$1 = (function (){var statearr_27879 = state_27876;
(statearr_27879[(8)] = inst_27830);

(statearr_27879[(9)] = inst_27828);

(statearr_27879[(10)] = inst_27831);

(statearr_27879[(11)] = inst_27853);

(statearr_27879[(12)] = inst_27829);

return statearr_27879;
})();
var statearr_27880_27920 = state_27876__$1;
(statearr_27880_27920[(2)] = null);

(statearr_27880_27920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (1))){
var state_27876__$1 = state_27876;
var statearr_27881_27921 = state_27876__$1;
(statearr_27881_27921[(2)] = null);

(statearr_27881_27921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (4))){
var inst_27817 = (state_27876[(13)]);
var inst_27817__$1 = (state_27876[(2)]);
var inst_27818 = (inst_27817__$1 == null);
var state_27876__$1 = (function (){var statearr_27882 = state_27876;
(statearr_27882[(13)] = inst_27817__$1);

return statearr_27882;
})();
if(cljs.core.truth_(inst_27818)){
var statearr_27883_27922 = state_27876__$1;
(statearr_27883_27922[(1)] = (5));

} else {
var statearr_27884_27923 = state_27876__$1;
(statearr_27884_27923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (15))){
var state_27876__$1 = state_27876;
var statearr_27888_27924 = state_27876__$1;
(statearr_27888_27924[(2)] = null);

(statearr_27888_27924[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (21))){
var state_27876__$1 = state_27876;
var statearr_27889_27925 = state_27876__$1;
(statearr_27889_27925[(2)] = null);

(statearr_27889_27925[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (13))){
var inst_27830 = (state_27876[(8)]);
var inst_27828 = (state_27876[(9)]);
var inst_27831 = (state_27876[(10)]);
var inst_27829 = (state_27876[(12)]);
var inst_27838 = (state_27876[(2)]);
var inst_27839 = (inst_27831 + (1));
var tmp27885 = inst_27830;
var tmp27886 = inst_27828;
var tmp27887 = inst_27829;
var inst_27828__$1 = tmp27886;
var inst_27829__$1 = tmp27887;
var inst_27830__$1 = tmp27885;
var inst_27831__$1 = inst_27839;
var state_27876__$1 = (function (){var statearr_27890 = state_27876;
(statearr_27890[(14)] = inst_27838);

(statearr_27890[(8)] = inst_27830__$1);

(statearr_27890[(9)] = inst_27828__$1);

(statearr_27890[(10)] = inst_27831__$1);

(statearr_27890[(12)] = inst_27829__$1);

return statearr_27890;
})();
var statearr_27891_27926 = state_27876__$1;
(statearr_27891_27926[(2)] = null);

(statearr_27891_27926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (22))){
var state_27876__$1 = state_27876;
var statearr_27892_27927 = state_27876__$1;
(statearr_27892_27927[(2)] = null);

(statearr_27892_27927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (6))){
var inst_27817 = (state_27876[(13)]);
var inst_27826 = f.call(null,inst_27817);
var inst_27827 = cljs.core.seq.call(null,inst_27826);
var inst_27828 = inst_27827;
var inst_27829 = null;
var inst_27830 = (0);
var inst_27831 = (0);
var state_27876__$1 = (function (){var statearr_27893 = state_27876;
(statearr_27893[(8)] = inst_27830);

(statearr_27893[(9)] = inst_27828);

(statearr_27893[(10)] = inst_27831);

(statearr_27893[(12)] = inst_27829);

return statearr_27893;
})();
var statearr_27894_27928 = state_27876__$1;
(statearr_27894_27928[(2)] = null);

(statearr_27894_27928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (17))){
var inst_27842 = (state_27876[(7)]);
var inst_27846 = cljs.core.chunk_first.call(null,inst_27842);
var inst_27847 = cljs.core.chunk_rest.call(null,inst_27842);
var inst_27848 = cljs.core.count.call(null,inst_27846);
var inst_27828 = inst_27847;
var inst_27829 = inst_27846;
var inst_27830 = inst_27848;
var inst_27831 = (0);
var state_27876__$1 = (function (){var statearr_27895 = state_27876;
(statearr_27895[(8)] = inst_27830);

(statearr_27895[(9)] = inst_27828);

(statearr_27895[(10)] = inst_27831);

(statearr_27895[(12)] = inst_27829);

return statearr_27895;
})();
var statearr_27896_27929 = state_27876__$1;
(statearr_27896_27929[(2)] = null);

(statearr_27896_27929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (3))){
var inst_27874 = (state_27876[(2)]);
var state_27876__$1 = state_27876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27876__$1,inst_27874);
} else {
if((state_val_27877 === (12))){
var inst_27862 = (state_27876[(2)]);
var state_27876__$1 = state_27876;
var statearr_27897_27930 = state_27876__$1;
(statearr_27897_27930[(2)] = inst_27862);

(statearr_27897_27930[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (2))){
var state_27876__$1 = state_27876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27876__$1,(4),in$);
} else {
if((state_val_27877 === (23))){
var inst_27870 = (state_27876[(2)]);
var state_27876__$1 = state_27876;
var statearr_27898_27931 = state_27876__$1;
(statearr_27898_27931[(2)] = inst_27870);

(statearr_27898_27931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (19))){
var inst_27857 = (state_27876[(2)]);
var state_27876__$1 = state_27876;
var statearr_27899_27932 = state_27876__$1;
(statearr_27899_27932[(2)] = inst_27857);

(statearr_27899_27932[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (11))){
var inst_27828 = (state_27876[(9)]);
var inst_27842 = (state_27876[(7)]);
var inst_27842__$1 = cljs.core.seq.call(null,inst_27828);
var state_27876__$1 = (function (){var statearr_27900 = state_27876;
(statearr_27900[(7)] = inst_27842__$1);

return statearr_27900;
})();
if(inst_27842__$1){
var statearr_27901_27933 = state_27876__$1;
(statearr_27901_27933[(1)] = (14));

} else {
var statearr_27902_27934 = state_27876__$1;
(statearr_27902_27934[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (9))){
var inst_27864 = (state_27876[(2)]);
var inst_27865 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27876__$1 = (function (){var statearr_27903 = state_27876;
(statearr_27903[(15)] = inst_27864);

return statearr_27903;
})();
if(cljs.core.truth_(inst_27865)){
var statearr_27904_27935 = state_27876__$1;
(statearr_27904_27935[(1)] = (21));

} else {
var statearr_27905_27936 = state_27876__$1;
(statearr_27905_27936[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (5))){
var inst_27820 = cljs.core.async.close_BANG_.call(null,out);
var state_27876__$1 = state_27876;
var statearr_27906_27937 = state_27876__$1;
(statearr_27906_27937[(2)] = inst_27820);

(statearr_27906_27937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (14))){
var inst_27842 = (state_27876[(7)]);
var inst_27844 = cljs.core.chunked_seq_QMARK_.call(null,inst_27842);
var state_27876__$1 = state_27876;
if(inst_27844){
var statearr_27907_27938 = state_27876__$1;
(statearr_27907_27938[(1)] = (17));

} else {
var statearr_27908_27939 = state_27876__$1;
(statearr_27908_27939[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (16))){
var inst_27860 = (state_27876[(2)]);
var state_27876__$1 = state_27876;
var statearr_27909_27940 = state_27876__$1;
(statearr_27909_27940[(2)] = inst_27860);

(statearr_27909_27940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27877 === (10))){
var inst_27831 = (state_27876[(10)]);
var inst_27829 = (state_27876[(12)]);
var inst_27836 = cljs.core._nth.call(null,inst_27829,inst_27831);
var state_27876__$1 = state_27876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27876__$1,(13),out,inst_27836);
} else {
if((state_val_27877 === (18))){
var inst_27842 = (state_27876[(7)]);
var inst_27851 = cljs.core.first.call(null,inst_27842);
var state_27876__$1 = state_27876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27876__$1,(20),out,inst_27851);
} else {
if((state_val_27877 === (8))){
var inst_27830 = (state_27876[(8)]);
var inst_27831 = (state_27876[(10)]);
var inst_27833 = (inst_27831 < inst_27830);
var inst_27834 = inst_27833;
var state_27876__$1 = state_27876;
if(cljs.core.truth_(inst_27834)){
var statearr_27910_27941 = state_27876__$1;
(statearr_27910_27941[(1)] = (10));

} else {
var statearr_27911_27942 = state_27876__$1;
(statearr_27911_27942[(1)] = (11));

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
});})(c__18867__auto__))
;
return ((function (switch__18811__auto__,c__18867__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18812__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18812__auto____0 = (function (){
var statearr_27915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27915[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18812__auto__);

(statearr_27915[(1)] = (1));

return statearr_27915;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18812__auto____1 = (function (state_27876){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_27876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e27916){if((e27916 instanceof Object)){
var ex__18815__auto__ = e27916;
var statearr_27917_27943 = state_27876;
(statearr_27917_27943[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27944 = state_27876;
state_27876 = G__27944;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18812__auto__ = function(state_27876){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18812__auto____1.call(this,state_27876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18812__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18812__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__))
})();
var state__18869__auto__ = (function (){var statearr_27918 = f__18868__auto__.call(null);
(statearr_27918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);

return statearr_27918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__))
);

return c__18867__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18867__auto___28041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___28041,out){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___28041,out){
return (function (state_28016){
var state_val_28017 = (state_28016[(1)]);
if((state_val_28017 === (7))){
var inst_28011 = (state_28016[(2)]);
var state_28016__$1 = state_28016;
var statearr_28018_28042 = state_28016__$1;
(statearr_28018_28042[(2)] = inst_28011);

(statearr_28018_28042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28017 === (1))){
var inst_27993 = null;
var state_28016__$1 = (function (){var statearr_28019 = state_28016;
(statearr_28019[(7)] = inst_27993);

return statearr_28019;
})();
var statearr_28020_28043 = state_28016__$1;
(statearr_28020_28043[(2)] = null);

(statearr_28020_28043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28017 === (4))){
var inst_27996 = (state_28016[(8)]);
var inst_27996__$1 = (state_28016[(2)]);
var inst_27997 = (inst_27996__$1 == null);
var inst_27998 = cljs.core.not.call(null,inst_27997);
var state_28016__$1 = (function (){var statearr_28021 = state_28016;
(statearr_28021[(8)] = inst_27996__$1);

return statearr_28021;
})();
if(inst_27998){
var statearr_28022_28044 = state_28016__$1;
(statearr_28022_28044[(1)] = (5));

} else {
var statearr_28023_28045 = state_28016__$1;
(statearr_28023_28045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28017 === (6))){
var state_28016__$1 = state_28016;
var statearr_28024_28046 = state_28016__$1;
(statearr_28024_28046[(2)] = null);

(statearr_28024_28046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28017 === (3))){
var inst_28013 = (state_28016[(2)]);
var inst_28014 = cljs.core.async.close_BANG_.call(null,out);
var state_28016__$1 = (function (){var statearr_28025 = state_28016;
(statearr_28025[(9)] = inst_28013);

return statearr_28025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28016__$1,inst_28014);
} else {
if((state_val_28017 === (2))){
var state_28016__$1 = state_28016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28016__$1,(4),ch);
} else {
if((state_val_28017 === (11))){
var inst_27996 = (state_28016[(8)]);
var inst_28005 = (state_28016[(2)]);
var inst_27993 = inst_27996;
var state_28016__$1 = (function (){var statearr_28026 = state_28016;
(statearr_28026[(7)] = inst_27993);

(statearr_28026[(10)] = inst_28005);

return statearr_28026;
})();
var statearr_28027_28047 = state_28016__$1;
(statearr_28027_28047[(2)] = null);

(statearr_28027_28047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28017 === (9))){
var inst_27996 = (state_28016[(8)]);
var state_28016__$1 = state_28016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28016__$1,(11),out,inst_27996);
} else {
if((state_val_28017 === (5))){
var inst_27996 = (state_28016[(8)]);
var inst_27993 = (state_28016[(7)]);
var inst_28000 = cljs.core._EQ_.call(null,inst_27996,inst_27993);
var state_28016__$1 = state_28016;
if(inst_28000){
var statearr_28029_28048 = state_28016__$1;
(statearr_28029_28048[(1)] = (8));

} else {
var statearr_28030_28049 = state_28016__$1;
(statearr_28030_28049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28017 === (10))){
var inst_28008 = (state_28016[(2)]);
var state_28016__$1 = state_28016;
var statearr_28031_28050 = state_28016__$1;
(statearr_28031_28050[(2)] = inst_28008);

(statearr_28031_28050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28017 === (8))){
var inst_27993 = (state_28016[(7)]);
var tmp28028 = inst_27993;
var inst_27993__$1 = tmp28028;
var state_28016__$1 = (function (){var statearr_28032 = state_28016;
(statearr_28032[(7)] = inst_27993__$1);

return statearr_28032;
})();
var statearr_28033_28051 = state_28016__$1;
(statearr_28033_28051[(2)] = null);

(statearr_28033_28051[(1)] = (2));


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
});})(c__18867__auto___28041,out))
;
return ((function (switch__18811__auto__,c__18867__auto___28041,out){
return (function() {
var cljs$core$async$unique_$_state_machine__18812__auto__ = null;
var cljs$core$async$unique_$_state_machine__18812__auto____0 = (function (){
var statearr_28037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28037[(0)] = cljs$core$async$unique_$_state_machine__18812__auto__);

(statearr_28037[(1)] = (1));

return statearr_28037;
});
var cljs$core$async$unique_$_state_machine__18812__auto____1 = (function (state_28016){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_28016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e28038){if((e28038 instanceof Object)){
var ex__18815__auto__ = e28038;
var statearr_28039_28052 = state_28016;
(statearr_28039_28052[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28053 = state_28016;
state_28016 = G__28053;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__18812__auto__ = function(state_28016){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__18812__auto____1.call(this,state_28016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__18812__auto____0;
cljs$core$async$unique_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__18812__auto____1;
return cljs$core$async$unique_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___28041,out))
})();
var state__18869__auto__ = (function (){var statearr_28040 = f__18868__auto__.call(null);
(statearr_28040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___28041);

return statearr_28040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___28041,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18867__auto___28188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___28188,out){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___28188,out){
return (function (state_28158){
var state_val_28159 = (state_28158[(1)]);
if((state_val_28159 === (7))){
var inst_28154 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
var statearr_28160_28189 = state_28158__$1;
(statearr_28160_28189[(2)] = inst_28154);

(statearr_28160_28189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (1))){
var inst_28121 = (new Array(n));
var inst_28122 = inst_28121;
var inst_28123 = (0);
var state_28158__$1 = (function (){var statearr_28161 = state_28158;
(statearr_28161[(7)] = inst_28123);

(statearr_28161[(8)] = inst_28122);

return statearr_28161;
})();
var statearr_28162_28190 = state_28158__$1;
(statearr_28162_28190[(2)] = null);

(statearr_28162_28190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (4))){
var inst_28126 = (state_28158[(9)]);
var inst_28126__$1 = (state_28158[(2)]);
var inst_28127 = (inst_28126__$1 == null);
var inst_28128 = cljs.core.not.call(null,inst_28127);
var state_28158__$1 = (function (){var statearr_28163 = state_28158;
(statearr_28163[(9)] = inst_28126__$1);

return statearr_28163;
})();
if(inst_28128){
var statearr_28164_28191 = state_28158__$1;
(statearr_28164_28191[(1)] = (5));

} else {
var statearr_28165_28192 = state_28158__$1;
(statearr_28165_28192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (15))){
var inst_28148 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
var statearr_28166_28193 = state_28158__$1;
(statearr_28166_28193[(2)] = inst_28148);

(statearr_28166_28193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (13))){
var state_28158__$1 = state_28158;
var statearr_28167_28194 = state_28158__$1;
(statearr_28167_28194[(2)] = null);

(statearr_28167_28194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (6))){
var inst_28123 = (state_28158[(7)]);
var inst_28144 = (inst_28123 > (0));
var state_28158__$1 = state_28158;
if(cljs.core.truth_(inst_28144)){
var statearr_28168_28195 = state_28158__$1;
(statearr_28168_28195[(1)] = (12));

} else {
var statearr_28169_28196 = state_28158__$1;
(statearr_28169_28196[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (3))){
var inst_28156 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28158__$1,inst_28156);
} else {
if((state_val_28159 === (12))){
var inst_28122 = (state_28158[(8)]);
var inst_28146 = cljs.core.vec.call(null,inst_28122);
var state_28158__$1 = state_28158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28158__$1,(15),out,inst_28146);
} else {
if((state_val_28159 === (2))){
var state_28158__$1 = state_28158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28158__$1,(4),ch);
} else {
if((state_val_28159 === (11))){
var inst_28138 = (state_28158[(2)]);
var inst_28139 = (new Array(n));
var inst_28122 = inst_28139;
var inst_28123 = (0);
var state_28158__$1 = (function (){var statearr_28170 = state_28158;
(statearr_28170[(7)] = inst_28123);

(statearr_28170[(10)] = inst_28138);

(statearr_28170[(8)] = inst_28122);

return statearr_28170;
})();
var statearr_28171_28197 = state_28158__$1;
(statearr_28171_28197[(2)] = null);

(statearr_28171_28197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (9))){
var inst_28122 = (state_28158[(8)]);
var inst_28136 = cljs.core.vec.call(null,inst_28122);
var state_28158__$1 = state_28158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28158__$1,(11),out,inst_28136);
} else {
if((state_val_28159 === (5))){
var inst_28123 = (state_28158[(7)]);
var inst_28126 = (state_28158[(9)]);
var inst_28131 = (state_28158[(11)]);
var inst_28122 = (state_28158[(8)]);
var inst_28130 = (inst_28122[inst_28123] = inst_28126);
var inst_28131__$1 = (inst_28123 + (1));
var inst_28132 = (inst_28131__$1 < n);
var state_28158__$1 = (function (){var statearr_28172 = state_28158;
(statearr_28172[(11)] = inst_28131__$1);

(statearr_28172[(12)] = inst_28130);

return statearr_28172;
})();
if(cljs.core.truth_(inst_28132)){
var statearr_28173_28198 = state_28158__$1;
(statearr_28173_28198[(1)] = (8));

} else {
var statearr_28174_28199 = state_28158__$1;
(statearr_28174_28199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (14))){
var inst_28151 = (state_28158[(2)]);
var inst_28152 = cljs.core.async.close_BANG_.call(null,out);
var state_28158__$1 = (function (){var statearr_28176 = state_28158;
(statearr_28176[(13)] = inst_28151);

return statearr_28176;
})();
var statearr_28177_28200 = state_28158__$1;
(statearr_28177_28200[(2)] = inst_28152);

(statearr_28177_28200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (10))){
var inst_28142 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
var statearr_28178_28201 = state_28158__$1;
(statearr_28178_28201[(2)] = inst_28142);

(statearr_28178_28201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (8))){
var inst_28131 = (state_28158[(11)]);
var inst_28122 = (state_28158[(8)]);
var tmp28175 = inst_28122;
var inst_28122__$1 = tmp28175;
var inst_28123 = inst_28131;
var state_28158__$1 = (function (){var statearr_28179 = state_28158;
(statearr_28179[(7)] = inst_28123);

(statearr_28179[(8)] = inst_28122__$1);

return statearr_28179;
})();
var statearr_28180_28202 = state_28158__$1;
(statearr_28180_28202[(2)] = null);

(statearr_28180_28202[(1)] = (2));


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
});})(c__18867__auto___28188,out))
;
return ((function (switch__18811__auto__,c__18867__auto___28188,out){
return (function() {
var cljs$core$async$partition_$_state_machine__18812__auto__ = null;
var cljs$core$async$partition_$_state_machine__18812__auto____0 = (function (){
var statearr_28184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28184[(0)] = cljs$core$async$partition_$_state_machine__18812__auto__);

(statearr_28184[(1)] = (1));

return statearr_28184;
});
var cljs$core$async$partition_$_state_machine__18812__auto____1 = (function (state_28158){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_28158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e28185){if((e28185 instanceof Object)){
var ex__18815__auto__ = e28185;
var statearr_28186_28203 = state_28158;
(statearr_28186_28203[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28204 = state_28158;
state_28158 = G__28204;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__18812__auto__ = function(state_28158){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__18812__auto____1.call(this,state_28158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__18812__auto____0;
cljs$core$async$partition_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__18812__auto____1;
return cljs$core$async$partition_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___28188,out))
})();
var state__18869__auto__ = (function (){var statearr_28187 = f__18868__auto__.call(null);
(statearr_28187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___28188);

return statearr_28187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___28188,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18867__auto___28347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___28347,out){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___28347,out){
return (function (state_28317){
var state_val_28318 = (state_28317[(1)]);
if((state_val_28318 === (7))){
var inst_28313 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28319_28348 = state_28317__$1;
(statearr_28319_28348[(2)] = inst_28313);

(statearr_28319_28348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (1))){
var inst_28276 = [];
var inst_28277 = inst_28276;
var inst_28278 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28317__$1 = (function (){var statearr_28320 = state_28317;
(statearr_28320[(7)] = inst_28278);

(statearr_28320[(8)] = inst_28277);

return statearr_28320;
})();
var statearr_28321_28349 = state_28317__$1;
(statearr_28321_28349[(2)] = null);

(statearr_28321_28349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (4))){
var inst_28281 = (state_28317[(9)]);
var inst_28281__$1 = (state_28317[(2)]);
var inst_28282 = (inst_28281__$1 == null);
var inst_28283 = cljs.core.not.call(null,inst_28282);
var state_28317__$1 = (function (){var statearr_28322 = state_28317;
(statearr_28322[(9)] = inst_28281__$1);

return statearr_28322;
})();
if(inst_28283){
var statearr_28323_28350 = state_28317__$1;
(statearr_28323_28350[(1)] = (5));

} else {
var statearr_28324_28351 = state_28317__$1;
(statearr_28324_28351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (15))){
var inst_28307 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28325_28352 = state_28317__$1;
(statearr_28325_28352[(2)] = inst_28307);

(statearr_28325_28352[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (13))){
var state_28317__$1 = state_28317;
var statearr_28326_28353 = state_28317__$1;
(statearr_28326_28353[(2)] = null);

(statearr_28326_28353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (6))){
var inst_28277 = (state_28317[(8)]);
var inst_28302 = inst_28277.length;
var inst_28303 = (inst_28302 > (0));
var state_28317__$1 = state_28317;
if(cljs.core.truth_(inst_28303)){
var statearr_28327_28354 = state_28317__$1;
(statearr_28327_28354[(1)] = (12));

} else {
var statearr_28328_28355 = state_28317__$1;
(statearr_28328_28355[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (3))){
var inst_28315 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28317__$1,inst_28315);
} else {
if((state_val_28318 === (12))){
var inst_28277 = (state_28317[(8)]);
var inst_28305 = cljs.core.vec.call(null,inst_28277);
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28317__$1,(15),out,inst_28305);
} else {
if((state_val_28318 === (2))){
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28317__$1,(4),ch);
} else {
if((state_val_28318 === (11))){
var inst_28285 = (state_28317[(10)]);
var inst_28281 = (state_28317[(9)]);
var inst_28295 = (state_28317[(2)]);
var inst_28296 = [];
var inst_28297 = inst_28296.push(inst_28281);
var inst_28277 = inst_28296;
var inst_28278 = inst_28285;
var state_28317__$1 = (function (){var statearr_28329 = state_28317;
(statearr_28329[(11)] = inst_28297);

(statearr_28329[(7)] = inst_28278);

(statearr_28329[(12)] = inst_28295);

(statearr_28329[(8)] = inst_28277);

return statearr_28329;
})();
var statearr_28330_28356 = state_28317__$1;
(statearr_28330_28356[(2)] = null);

(statearr_28330_28356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (9))){
var inst_28277 = (state_28317[(8)]);
var inst_28293 = cljs.core.vec.call(null,inst_28277);
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28317__$1,(11),out,inst_28293);
} else {
if((state_val_28318 === (5))){
var inst_28285 = (state_28317[(10)]);
var inst_28278 = (state_28317[(7)]);
var inst_28281 = (state_28317[(9)]);
var inst_28285__$1 = f.call(null,inst_28281);
var inst_28286 = cljs.core._EQ_.call(null,inst_28285__$1,inst_28278);
var inst_28287 = cljs.core.keyword_identical_QMARK_.call(null,inst_28278,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28288 = (inst_28286) || (inst_28287);
var state_28317__$1 = (function (){var statearr_28331 = state_28317;
(statearr_28331[(10)] = inst_28285__$1);

return statearr_28331;
})();
if(cljs.core.truth_(inst_28288)){
var statearr_28332_28357 = state_28317__$1;
(statearr_28332_28357[(1)] = (8));

} else {
var statearr_28333_28358 = state_28317__$1;
(statearr_28333_28358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (14))){
var inst_28310 = (state_28317[(2)]);
var inst_28311 = cljs.core.async.close_BANG_.call(null,out);
var state_28317__$1 = (function (){var statearr_28335 = state_28317;
(statearr_28335[(13)] = inst_28310);

return statearr_28335;
})();
var statearr_28336_28359 = state_28317__$1;
(statearr_28336_28359[(2)] = inst_28311);

(statearr_28336_28359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (10))){
var inst_28300 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28337_28360 = state_28317__$1;
(statearr_28337_28360[(2)] = inst_28300);

(statearr_28337_28360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (8))){
var inst_28285 = (state_28317[(10)]);
var inst_28281 = (state_28317[(9)]);
var inst_28277 = (state_28317[(8)]);
var inst_28290 = inst_28277.push(inst_28281);
var tmp28334 = inst_28277;
var inst_28277__$1 = tmp28334;
var inst_28278 = inst_28285;
var state_28317__$1 = (function (){var statearr_28338 = state_28317;
(statearr_28338[(7)] = inst_28278);

(statearr_28338[(8)] = inst_28277__$1);

(statearr_28338[(14)] = inst_28290);

return statearr_28338;
})();
var statearr_28339_28361 = state_28317__$1;
(statearr_28339_28361[(2)] = null);

(statearr_28339_28361[(1)] = (2));


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
});})(c__18867__auto___28347,out))
;
return ((function (switch__18811__auto__,c__18867__auto___28347,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__18812__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__18812__auto____0 = (function (){
var statearr_28343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28343[(0)] = cljs$core$async$partition_by_$_state_machine__18812__auto__);

(statearr_28343[(1)] = (1));

return statearr_28343;
});
var cljs$core$async$partition_by_$_state_machine__18812__auto____1 = (function (state_28317){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_28317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e28344){if((e28344 instanceof Object)){
var ex__18815__auto__ = e28344;
var statearr_28345_28362 = state_28317;
(statearr_28345_28362[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28363 = state_28317;
state_28317 = G__28363;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__18812__auto__ = function(state_28317){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__18812__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__18812__auto____1.call(this,state_28317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__18812__auto____0;
cljs$core$async$partition_by_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__18812__auto____1;
return cljs$core$async$partition_by_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___28347,out))
})();
var state__18869__auto__ = (function (){var statearr_28346 = f__18868__auto__.call(null);
(statearr_28346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___28347);

return statearr_28346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___28347,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;

//# sourceMappingURL=async.js.map