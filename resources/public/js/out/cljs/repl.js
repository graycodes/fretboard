// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24515_24527 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24516_24528 = null;
var count__24517_24529 = (0);
var i__24518_24530 = (0);
while(true){
if((i__24518_24530 < count__24517_24529)){
var f_24531 = cljs.core._nth.call(null,chunk__24516_24528,i__24518_24530);
cljs.core.println.call(null,"  ",f_24531);

var G__24532 = seq__24515_24527;
var G__24533 = chunk__24516_24528;
var G__24534 = count__24517_24529;
var G__24535 = (i__24518_24530 + (1));
seq__24515_24527 = G__24532;
chunk__24516_24528 = G__24533;
count__24517_24529 = G__24534;
i__24518_24530 = G__24535;
continue;
} else {
var temp__4126__auto___24536 = cljs.core.seq.call(null,seq__24515_24527);
if(temp__4126__auto___24536){
var seq__24515_24537__$1 = temp__4126__auto___24536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24515_24537__$1)){
var c__17274__auto___24538 = cljs.core.chunk_first.call(null,seq__24515_24537__$1);
var G__24539 = cljs.core.chunk_rest.call(null,seq__24515_24537__$1);
var G__24540 = c__17274__auto___24538;
var G__24541 = cljs.core.count.call(null,c__17274__auto___24538);
var G__24542 = (0);
seq__24515_24527 = G__24539;
chunk__24516_24528 = G__24540;
count__24517_24529 = G__24541;
i__24518_24530 = G__24542;
continue;
} else {
var f_24543 = cljs.core.first.call(null,seq__24515_24537__$1);
cljs.core.println.call(null,"  ",f_24543);

var G__24544 = cljs.core.next.call(null,seq__24515_24537__$1);
var G__24545 = null;
var G__24546 = (0);
var G__24547 = (0);
seq__24515_24527 = G__24544;
chunk__24516_24528 = G__24545;
count__24517_24529 = G__24546;
i__24518_24530 = G__24547;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__16489__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16489__auto__)){
return or__16489__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24519 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24520 = null;
var count__24521 = (0);
var i__24522 = (0);
while(true){
if((i__24522 < count__24521)){
var vec__24523 = cljs.core._nth.call(null,chunk__24520,i__24522);
var name = cljs.core.nth.call(null,vec__24523,(0),null);
var map__24524 = cljs.core.nth.call(null,vec__24523,(1),null);
var map__24524__$1 = ((cljs.core.seq_QMARK_.call(null,map__24524))?cljs.core.apply.call(null,cljs.core.hash_map,map__24524):map__24524);
var arglists = cljs.core.get.call(null,map__24524__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__24524__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24548 = seq__24519;
var G__24549 = chunk__24520;
var G__24550 = count__24521;
var G__24551 = (i__24522 + (1));
seq__24519 = G__24548;
chunk__24520 = G__24549;
count__24521 = G__24550;
i__24522 = G__24551;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__24519);
if(temp__4126__auto__){
var seq__24519__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24519__$1)){
var c__17274__auto__ = cljs.core.chunk_first.call(null,seq__24519__$1);
var G__24552 = cljs.core.chunk_rest.call(null,seq__24519__$1);
var G__24553 = c__17274__auto__;
var G__24554 = cljs.core.count.call(null,c__17274__auto__);
var G__24555 = (0);
seq__24519 = G__24552;
chunk__24520 = G__24553;
count__24521 = G__24554;
i__24522 = G__24555;
continue;
} else {
var vec__24525 = cljs.core.first.call(null,seq__24519__$1);
var name = cljs.core.nth.call(null,vec__24525,(0),null);
var map__24526 = cljs.core.nth.call(null,vec__24525,(1),null);
var map__24526__$1 = ((cljs.core.seq_QMARK_.call(null,map__24526))?cljs.core.apply.call(null,cljs.core.hash_map,map__24526):map__24526);
var arglists = cljs.core.get.call(null,map__24526__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__24526__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24556 = cljs.core.next.call(null,seq__24519__$1);
var G__24557 = null;
var G__24558 = (0);
var G__24559 = (0);
seq__24519 = G__24556;
chunk__24520 = G__24557;
count__24521 = G__24558;
i__24522 = G__24559;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map