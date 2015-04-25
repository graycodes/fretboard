// Compiled by ClojureScript 0.0-3126 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23614__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23615__i = 0, G__23615__a = new Array(arguments.length -  0);
while (G__23615__i < G__23615__a.length) {G__23615__a[G__23615__i] = arguments[G__23615__i + 0]; ++G__23615__i;}
  args = new cljs.core.IndexedSeq(G__23615__a,0);
} 
return G__23614__delegate.call(this,args);};
G__23614.cljs$lang$maxFixedArity = 0;
G__23614.cljs$lang$applyTo = (function (arglist__23616){
var args = cljs.core.seq(arglist__23616);
return G__23614__delegate(args);
});
G__23614.cljs$core$IFn$_invoke$arity$variadic = G__23614__delegate;
return G__23614;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23617){
var map__23619 = p__23617;
var map__23619__$1 = ((cljs.core.seq_QMARK_.call(null,map__23619))?cljs.core.apply.call(null,cljs.core.hash_map,map__23619):map__23619);
var class$ = cljs.core.get.call(null,map__23619__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__23619__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16489__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16489__auto__)){
return or__16489__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16477__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16477__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16477__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18867__auto___23748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___23748,ch){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___23748,ch){
return (function (state_23722){
var state_val_23723 = (state_23722[(1)]);
if((state_val_23723 === (7))){
var inst_23718 = (state_23722[(2)]);
var state_23722__$1 = state_23722;
var statearr_23724_23749 = state_23722__$1;
(statearr_23724_23749[(2)] = inst_23718);

(statearr_23724_23749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (1))){
var state_23722__$1 = state_23722;
var statearr_23725_23750 = state_23722__$1;
(statearr_23725_23750[(2)] = null);

(statearr_23725_23750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (4))){
var inst_23686 = (state_23722[(7)]);
var inst_23686__$1 = (state_23722[(2)]);
var state_23722__$1 = (function (){var statearr_23726 = state_23722;
(statearr_23726[(7)] = inst_23686__$1);

return statearr_23726;
})();
if(cljs.core.truth_(inst_23686__$1)){
var statearr_23727_23751 = state_23722__$1;
(statearr_23727_23751[(1)] = (5));

} else {
var statearr_23728_23752 = state_23722__$1;
(statearr_23728_23752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (13))){
var state_23722__$1 = state_23722;
var statearr_23729_23753 = state_23722__$1;
(statearr_23729_23753[(2)] = null);

(statearr_23729_23753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (6))){
var state_23722__$1 = state_23722;
var statearr_23730_23754 = state_23722__$1;
(statearr_23730_23754[(2)] = null);

(statearr_23730_23754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (3))){
var inst_23720 = (state_23722[(2)]);
var state_23722__$1 = state_23722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23722__$1,inst_23720);
} else {
if((state_val_23723 === (12))){
var inst_23693 = (state_23722[(8)]);
var inst_23706 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23693);
var inst_23707 = cljs.core.first.call(null,inst_23706);
var inst_23708 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23707);
var inst_23709 = console.warn("Figwheel: Not loading code with warnings - ",inst_23708);
var state_23722__$1 = state_23722;
var statearr_23731_23755 = state_23722__$1;
(statearr_23731_23755[(2)] = inst_23709);

(statearr_23731_23755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (2))){
var state_23722__$1 = state_23722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23722__$1,(4),ch);
} else {
if((state_val_23723 === (11))){
var inst_23702 = (state_23722[(2)]);
var state_23722__$1 = state_23722;
var statearr_23732_23756 = state_23722__$1;
(statearr_23732_23756[(2)] = inst_23702);

(statearr_23732_23756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (9))){
var inst_23692 = (state_23722[(9)]);
var inst_23704 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23692,opts);
var state_23722__$1 = state_23722;
if(inst_23704){
var statearr_23733_23757 = state_23722__$1;
(statearr_23733_23757[(1)] = (12));

} else {
var statearr_23734_23758 = state_23722__$1;
(statearr_23734_23758[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (5))){
var inst_23686 = (state_23722[(7)]);
var inst_23692 = (state_23722[(9)]);
var inst_23688 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23689 = (new cljs.core.PersistentArrayMap(null,2,inst_23688,null));
var inst_23690 = (new cljs.core.PersistentHashSet(null,inst_23689,null));
var inst_23691 = figwheel.client.focus_msgs.call(null,inst_23690,inst_23686);
var inst_23692__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23691);
var inst_23693 = cljs.core.first.call(null,inst_23691);
var inst_23694 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23692__$1,opts);
var state_23722__$1 = (function (){var statearr_23735 = state_23722;
(statearr_23735[(8)] = inst_23693);

(statearr_23735[(9)] = inst_23692__$1);

return statearr_23735;
})();
if(cljs.core.truth_(inst_23694)){
var statearr_23736_23759 = state_23722__$1;
(statearr_23736_23759[(1)] = (8));

} else {
var statearr_23737_23760 = state_23722__$1;
(statearr_23737_23760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (14))){
var inst_23712 = (state_23722[(2)]);
var state_23722__$1 = state_23722;
var statearr_23738_23761 = state_23722__$1;
(statearr_23738_23761[(2)] = inst_23712);

(statearr_23738_23761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (10))){
var inst_23714 = (state_23722[(2)]);
var state_23722__$1 = (function (){var statearr_23739 = state_23722;
(statearr_23739[(10)] = inst_23714);

return statearr_23739;
})();
var statearr_23740_23762 = state_23722__$1;
(statearr_23740_23762[(2)] = null);

(statearr_23740_23762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (8))){
var inst_23693 = (state_23722[(8)]);
var inst_23696 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23697 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23693);
var inst_23698 = cljs.core.async.timeout.call(null,(1000));
var inst_23699 = [inst_23697,inst_23698];
var inst_23700 = (new cljs.core.PersistentVector(null,2,(5),inst_23696,inst_23699,null));
var state_23722__$1 = state_23722;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23722__$1,(11),inst_23700);
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
});})(c__18867__auto___23748,ch))
;
return ((function (switch__18811__auto__,c__18867__auto___23748,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18812__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18812__auto____0 = (function (){
var statearr_23744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23744[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18812__auto__);

(statearr_23744[(1)] = (1));

return statearr_23744;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18812__auto____1 = (function (state_23722){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_23722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e23745){if((e23745 instanceof Object)){
var ex__18815__auto__ = e23745;
var statearr_23746_23763 = state_23722;
(statearr_23746_23763[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23764 = state_23722;
state_23722 = G__23764;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18812__auto__ = function(state_23722){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18812__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18812__auto____1.call(this,state_23722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18812__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18812__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___23748,ch))
})();
var state__18869__auto__ = (function (){var statearr_23747 = f__18868__auto__.call(null);
(statearr_23747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___23748);

return statearr_23747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___23748,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23765_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23765_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_23774 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__23767_SHARP_,p2__23766_SHARP_){
return [cljs.core.str(p2__23766_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23774){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_23772 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23773 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_23772,_STAR_print_newline_STAR_23773,base_path_23774){
return (function() { 
var G__23775__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23776__i = 0, G__23776__a = new Array(arguments.length -  0);
while (G__23776__i < G__23776__a.length) {G__23776__a[G__23776__i] = arguments[G__23776__i + 0]; ++G__23776__i;}
  args = new cljs.core.IndexedSeq(G__23776__a,0);
} 
return G__23775__delegate.call(this,args);};
G__23775.cljs$lang$maxFixedArity = 0;
G__23775.cljs$lang$applyTo = (function (arglist__23777){
var args = cljs.core.seq(arglist__23777);
return G__23775__delegate(args);
});
G__23775.cljs$core$IFn$_invoke$arity$variadic = G__23775__delegate;
return G__23775;
})()
;})(_STAR_print_fn_STAR_23772,_STAR_print_newline_STAR_23773,base_path_23774))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23773;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23772;
}}catch (e23771){if((e23771 instanceof Error)){
var e = e23771;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23774], null));
} else {
var e = e23771;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23774))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23778){
var map__23783 = p__23778;
var map__23783__$1 = ((cljs.core.seq_QMARK_.call(null,map__23783))?cljs.core.apply.call(null,cljs.core.hash_map,map__23783):map__23783);
var opts = map__23783__$1;
var build_id = cljs.core.get.call(null,map__23783__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23783,map__23783__$1,opts,build_id){
return (function (p__23784){
var vec__23785 = p__23784;
var map__23786 = cljs.core.nth.call(null,vec__23785,(0),null);
var map__23786__$1 = ((cljs.core.seq_QMARK_.call(null,map__23786))?cljs.core.apply.call(null,cljs.core.hash_map,map__23786):map__23786);
var msg = map__23786__$1;
var msg_name = cljs.core.get.call(null,map__23786__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23785,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__23785,map__23786,map__23786__$1,msg,msg_name,_,map__23783,map__23783__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23785,map__23786,map__23786__$1,msg,msg_name,_,map__23783,map__23783__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23783,map__23783__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23790){
var vec__23791 = p__23790;
var map__23792 = cljs.core.nth.call(null,vec__23791,(0),null);
var map__23792__$1 = ((cljs.core.seq_QMARK_.call(null,map__23792))?cljs.core.apply.call(null,cljs.core.hash_map,map__23792):map__23792);
var msg = map__23792__$1;
var msg_name = cljs.core.get.call(null,map__23792__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23791,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23793){
var map__23801 = p__23793;
var map__23801__$1 = ((cljs.core.seq_QMARK_.call(null,map__23801))?cljs.core.apply.call(null,cljs.core.hash_map,map__23801):map__23801);
var on_compile_fail = cljs.core.get.call(null,map__23801__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__23801__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__23801,map__23801__$1,on_compile_fail,on_compile_warning){
return (function (p__23802){
var vec__23803 = p__23802;
var map__23804 = cljs.core.nth.call(null,vec__23803,(0),null);
var map__23804__$1 = ((cljs.core.seq_QMARK_.call(null,map__23804))?cljs.core.apply.call(null,cljs.core.hash_map,map__23804):map__23804);
var msg = map__23804__$1;
var msg_name = cljs.core.get.call(null,map__23804__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23803,(1));
var pred__23805 = cljs.core._EQ_;
var expr__23806 = msg_name;
if(cljs.core.truth_(pred__23805.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23806))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23805.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23806))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23801,map__23801__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,msg_hist,msg_names,msg){
return (function (state_24003){
var state_val_24004 = (state_24003[(1)]);
if((state_val_24004 === (7))){
var inst_23939 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24005_24046 = state_24003__$1;
(statearr_24005_24046[(2)] = inst_23939);

(statearr_24005_24046[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (20))){
var inst_23965 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24003__$1 = state_24003;
if(inst_23965){
var statearr_24006_24047 = state_24003__$1;
(statearr_24006_24047[(1)] = (22));

} else {
var statearr_24007_24048 = state_24003__$1;
(statearr_24007_24048[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (27))){
var inst_23977 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23978 = figwheel.client.heads_up.display_warning.call(null,inst_23977);
var state_24003__$1 = state_24003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24003__$1,(30),inst_23978);
} else {
if((state_val_24004 === (1))){
var inst_23927 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24003__$1 = state_24003;
if(cljs.core.truth_(inst_23927)){
var statearr_24008_24049 = state_24003__$1;
(statearr_24008_24049[(1)] = (2));

} else {
var statearr_24009_24050 = state_24003__$1;
(statearr_24009_24050[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (24))){
var inst_23993 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24010_24051 = state_24003__$1;
(statearr_24010_24051[(2)] = inst_23993);

(statearr_24010_24051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (4))){
var inst_24001 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24003__$1,inst_24001);
} else {
if((state_val_24004 === (15))){
var inst_23954 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23955 = figwheel.client.format_messages.call(null,inst_23954);
var inst_23956 = figwheel.client.heads_up.display_error.call(null,inst_23955);
var state_24003__$1 = state_24003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24003__$1,(18),inst_23956);
} else {
if((state_val_24004 === (21))){
var inst_23995 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24011_24052 = state_24003__$1;
(statearr_24011_24052[(2)] = inst_23995);

(statearr_24011_24052[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (31))){
var inst_23984 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24003__$1 = state_24003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24003__$1,(34),inst_23984);
} else {
if((state_val_24004 === (32))){
var state_24003__$1 = state_24003;
var statearr_24012_24053 = state_24003__$1;
(statearr_24012_24053[(2)] = null);

(statearr_24012_24053[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (33))){
var inst_23989 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24013_24054 = state_24003__$1;
(statearr_24013_24054[(2)] = inst_23989);

(statearr_24013_24054[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (13))){
var inst_23945 = (state_24003[(2)]);
var inst_23946 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23947 = figwheel.client.format_messages.call(null,inst_23946);
var inst_23948 = figwheel.client.heads_up.display_error.call(null,inst_23947);
var state_24003__$1 = (function (){var statearr_24014 = state_24003;
(statearr_24014[(7)] = inst_23945);

return statearr_24014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24003__$1,(14),inst_23948);
} else {
if((state_val_24004 === (22))){
var inst_23967 = figwheel.client.heads_up.clear.call(null);
var state_24003__$1 = state_24003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24003__$1,(25),inst_23967);
} else {
if((state_val_24004 === (29))){
var inst_23991 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24015_24055 = state_24003__$1;
(statearr_24015_24055[(2)] = inst_23991);

(statearr_24015_24055[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (6))){
var inst_23935 = figwheel.client.heads_up.clear.call(null);
var state_24003__$1 = state_24003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24003__$1,(9),inst_23935);
} else {
if((state_val_24004 === (28))){
var inst_23982 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24003__$1 = state_24003;
if(inst_23982){
var statearr_24016_24056 = state_24003__$1;
(statearr_24016_24056[(1)] = (31));

} else {
var statearr_24017_24057 = state_24003__$1;
(statearr_24017_24057[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (25))){
var inst_23969 = (state_24003[(2)]);
var inst_23970 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23971 = figwheel.client.heads_up.display_warning.call(null,inst_23970);
var state_24003__$1 = (function (){var statearr_24018 = state_24003;
(statearr_24018[(8)] = inst_23969);

return statearr_24018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24003__$1,(26),inst_23971);
} else {
if((state_val_24004 === (34))){
var inst_23986 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24019_24058 = state_24003__$1;
(statearr_24019_24058[(2)] = inst_23986);

(statearr_24019_24058[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (17))){
var inst_23997 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24020_24059 = state_24003__$1;
(statearr_24020_24059[(2)] = inst_23997);

(statearr_24020_24059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (3))){
var inst_23941 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24003__$1 = state_24003;
if(inst_23941){
var statearr_24021_24060 = state_24003__$1;
(statearr_24021_24060[(1)] = (10));

} else {
var statearr_24022_24061 = state_24003__$1;
(statearr_24022_24061[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (12))){
var inst_23999 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24023_24062 = state_24003__$1;
(statearr_24023_24062[(2)] = inst_23999);

(statearr_24023_24062[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (2))){
var inst_23929 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24003__$1 = state_24003;
if(cljs.core.truth_(inst_23929)){
var statearr_24024_24063 = state_24003__$1;
(statearr_24024_24063[(1)] = (5));

} else {
var statearr_24025_24064 = state_24003__$1;
(statearr_24025_24064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (23))){
var inst_23975 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24003__$1 = state_24003;
if(inst_23975){
var statearr_24026_24065 = state_24003__$1;
(statearr_24026_24065[(1)] = (27));

} else {
var statearr_24027_24066 = state_24003__$1;
(statearr_24027_24066[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (19))){
var inst_23962 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23963 = figwheel.client.heads_up.append_message.call(null,inst_23962);
var state_24003__$1 = state_24003;
var statearr_24028_24067 = state_24003__$1;
(statearr_24028_24067[(2)] = inst_23963);

(statearr_24028_24067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (11))){
var inst_23952 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24003__$1 = state_24003;
if(inst_23952){
var statearr_24029_24068 = state_24003__$1;
(statearr_24029_24068[(1)] = (15));

} else {
var statearr_24030_24069 = state_24003__$1;
(statearr_24030_24069[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (9))){
var inst_23937 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24031_24070 = state_24003__$1;
(statearr_24031_24070[(2)] = inst_23937);

(statearr_24031_24070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (5))){
var inst_23931 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24003__$1 = state_24003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24003__$1,(8),inst_23931);
} else {
if((state_val_24004 === (14))){
var inst_23950 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24032_24071 = state_24003__$1;
(statearr_24032_24071[(2)] = inst_23950);

(statearr_24032_24071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (26))){
var inst_23973 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24033_24072 = state_24003__$1;
(statearr_24033_24072[(2)] = inst_23973);

(statearr_24033_24072[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (16))){
var inst_23960 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24003__$1 = state_24003;
if(inst_23960){
var statearr_24034_24073 = state_24003__$1;
(statearr_24034_24073[(1)] = (19));

} else {
var statearr_24035_24074 = state_24003__$1;
(statearr_24035_24074[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (30))){
var inst_23980 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24036_24075 = state_24003__$1;
(statearr_24036_24075[(2)] = inst_23980);

(statearr_24036_24075[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (10))){
var inst_23943 = figwheel.client.heads_up.clear.call(null);
var state_24003__$1 = state_24003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24003__$1,(13),inst_23943);
} else {
if((state_val_24004 === (18))){
var inst_23958 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24037_24076 = state_24003__$1;
(statearr_24037_24076[(2)] = inst_23958);

(statearr_24037_24076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (8))){
var inst_23933 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24038_24077 = state_24003__$1;
(statearr_24038_24077[(2)] = inst_23933);

(statearr_24038_24077[(1)] = (7));


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
});})(c__18867__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18811__auto__,c__18867__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18812__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18812__auto____0 = (function (){
var statearr_24042 = [null,null,null,null,null,null,null,null,null];
(statearr_24042[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18812__auto__);

(statearr_24042[(1)] = (1));

return statearr_24042;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18812__auto____1 = (function (state_24003){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_24003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e24043){if((e24043 instanceof Object)){
var ex__18815__auto__ = e24043;
var statearr_24044_24078 = state_24003;
(statearr_24044_24078[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24079 = state_24003;
state_24003 = G__24079;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18812__auto__ = function(state_24003){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18812__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18812__auto____1.call(this,state_24003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18812__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18812__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,msg_hist,msg_names,msg))
})();
var state__18869__auto__ = (function (){var statearr_24045 = f__18868__auto__.call(null);
(statearr_24045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);

return statearr_24045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,msg_hist,msg_names,msg))
);

return c__18867__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18867__auto___24142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___24142,ch){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___24142,ch){
return (function (state_24125){
var state_val_24126 = (state_24125[(1)]);
if((state_val_24126 === (8))){
var inst_24117 = (state_24125[(2)]);
var state_24125__$1 = (function (){var statearr_24127 = state_24125;
(statearr_24127[(7)] = inst_24117);

return statearr_24127;
})();
var statearr_24128_24143 = state_24125__$1;
(statearr_24128_24143[(2)] = null);

(statearr_24128_24143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (7))){
var inst_24121 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
var statearr_24129_24144 = state_24125__$1;
(statearr_24129_24144[(2)] = inst_24121);

(statearr_24129_24144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (6))){
var state_24125__$1 = state_24125;
var statearr_24130_24145 = state_24125__$1;
(statearr_24130_24145[(2)] = null);

(statearr_24130_24145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (5))){
var inst_24113 = (state_24125[(8)]);
var inst_24115 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24113);
var state_24125__$1 = state_24125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24125__$1,(8),inst_24115);
} else {
if((state_val_24126 === (4))){
var inst_24113 = (state_24125[(8)]);
var inst_24113__$1 = (state_24125[(2)]);
var state_24125__$1 = (function (){var statearr_24131 = state_24125;
(statearr_24131[(8)] = inst_24113__$1);

return statearr_24131;
})();
if(cljs.core.truth_(inst_24113__$1)){
var statearr_24132_24146 = state_24125__$1;
(statearr_24132_24146[(1)] = (5));

} else {
var statearr_24133_24147 = state_24125__$1;
(statearr_24133_24147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (3))){
var inst_24123 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24125__$1,inst_24123);
} else {
if((state_val_24126 === (2))){
var state_24125__$1 = state_24125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24125__$1,(4),ch);
} else {
if((state_val_24126 === (1))){
var state_24125__$1 = state_24125;
var statearr_24134_24148 = state_24125__$1;
(statearr_24134_24148[(2)] = null);

(statearr_24134_24148[(1)] = (2));


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
});})(c__18867__auto___24142,ch))
;
return ((function (switch__18811__auto__,c__18867__auto___24142,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18812__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18812__auto____0 = (function (){
var statearr_24138 = [null,null,null,null,null,null,null,null,null];
(statearr_24138[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18812__auto__);

(statearr_24138[(1)] = (1));

return statearr_24138;
});
var figwheel$client$heads_up_plugin_$_state_machine__18812__auto____1 = (function (state_24125){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_24125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e24139){if((e24139 instanceof Object)){
var ex__18815__auto__ = e24139;
var statearr_24140_24149 = state_24125;
(statearr_24140_24149[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24150 = state_24125;
state_24125 = G__24150;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18812__auto__ = function(state_24125){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18812__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18812__auto____1.call(this,state_24125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18812__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18812__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___24142,ch))
})();
var state__18869__auto__ = (function (){var statearr_24141 = f__18868__auto__.call(null);
(statearr_24141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___24142);

return statearr_24141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___24142,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__){
return (function (state_24171){
var state_val_24172 = (state_24171[(1)]);
if((state_val_24172 === (2))){
var inst_24168 = (state_24171[(2)]);
var inst_24169 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24171__$1 = (function (){var statearr_24173 = state_24171;
(statearr_24173[(7)] = inst_24168);

return statearr_24173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24171__$1,inst_24169);
} else {
if((state_val_24172 === (1))){
var inst_24166 = cljs.core.async.timeout.call(null,(3000));
var state_24171__$1 = state_24171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24171__$1,(2),inst_24166);
} else {
return null;
}
}
});})(c__18867__auto__))
;
return ((function (switch__18811__auto__,c__18867__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18812__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18812__auto____0 = (function (){
var statearr_24177 = [null,null,null,null,null,null,null,null];
(statearr_24177[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18812__auto__);

(statearr_24177[(1)] = (1));

return statearr_24177;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18812__auto____1 = (function (state_24171){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_24171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e24178){if((e24178 instanceof Object)){
var ex__18815__auto__ = e24178;
var statearr_24179_24181 = state_24171;
(statearr_24179_24181[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24182 = state_24171;
state_24171 = G__24182;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18812__auto__ = function(state_24171){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18812__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18812__auto____1.call(this,state_24171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18812__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18812__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__))
})();
var state__18869__auto__ = (function (){var statearr_24180 = f__18868__auto__.call(null);
(statearr_24180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);

return statearr_24180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__))
);

return c__18867__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__16477__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__16477__auto__)){
return ("CustomEvent" in window);
} else {
return and__16477__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj24186 = {"detail":url};
return obj24186;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24187){
var map__24193 = p__24187;
var map__24193__$1 = ((cljs.core.seq_QMARK_.call(null,map__24193))?cljs.core.apply.call(null,cljs.core.hash_map,map__24193):map__24193);
var ed = map__24193__$1;
var exception_data = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24194_24198 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24195_24199 = null;
var count__24196_24200 = (0);
var i__24197_24201 = (0);
while(true){
if((i__24197_24201 < count__24196_24200)){
var msg_24202 = cljs.core._nth.call(null,chunk__24195_24199,i__24197_24201);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24202);

var G__24203 = seq__24194_24198;
var G__24204 = chunk__24195_24199;
var G__24205 = count__24196_24200;
var G__24206 = (i__24197_24201 + (1));
seq__24194_24198 = G__24203;
chunk__24195_24199 = G__24204;
count__24196_24200 = G__24205;
i__24197_24201 = G__24206;
continue;
} else {
var temp__4126__auto___24207 = cljs.core.seq.call(null,seq__24194_24198);
if(temp__4126__auto___24207){
var seq__24194_24208__$1 = temp__4126__auto___24207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24194_24208__$1)){
var c__17274__auto___24209 = cljs.core.chunk_first.call(null,seq__24194_24208__$1);
var G__24210 = cljs.core.chunk_rest.call(null,seq__24194_24208__$1);
var G__24211 = c__17274__auto___24209;
var G__24212 = cljs.core.count.call(null,c__17274__auto___24209);
var G__24213 = (0);
seq__24194_24198 = G__24210;
chunk__24195_24199 = G__24211;
count__24196_24200 = G__24212;
i__24197_24201 = G__24213;
continue;
} else {
var msg_24214 = cljs.core.first.call(null,seq__24194_24208__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24214);

var G__24215 = cljs.core.next.call(null,seq__24194_24208__$1);
var G__24216 = null;
var G__24217 = (0);
var G__24218 = (0);
seq__24194_24198 = G__24215;
chunk__24195_24199 = G__24216;
count__24196_24200 = G__24217;
i__24197_24201 = G__24218;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24219){
var map__24221 = p__24219;
var map__24221__$1 = ((cljs.core.seq_QMARK_.call(null,map__24221))?cljs.core.apply.call(null,cljs.core.hash_map,map__24221):map__24221);
var w = map__24221__$1;
var message = cljs.core.get.call(null,map__24221__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16477__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16477__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16477__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24228 = cljs.core.seq.call(null,plugins);
var chunk__24229 = null;
var count__24230 = (0);
var i__24231 = (0);
while(true){
if((i__24231 < count__24230)){
var vec__24232 = cljs.core._nth.call(null,chunk__24229,i__24231);
var k = cljs.core.nth.call(null,vec__24232,(0),null);
var plugin = cljs.core.nth.call(null,vec__24232,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24234 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24228,chunk__24229,count__24230,i__24231,pl_24234,vec__24232,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24234.call(null,msg_hist);
});})(seq__24228,chunk__24229,count__24230,i__24231,pl_24234,vec__24232,k,plugin))
);
} else {
}

var G__24235 = seq__24228;
var G__24236 = chunk__24229;
var G__24237 = count__24230;
var G__24238 = (i__24231 + (1));
seq__24228 = G__24235;
chunk__24229 = G__24236;
count__24230 = G__24237;
i__24231 = G__24238;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__24228);
if(temp__4126__auto__){
var seq__24228__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24228__$1)){
var c__17274__auto__ = cljs.core.chunk_first.call(null,seq__24228__$1);
var G__24239 = cljs.core.chunk_rest.call(null,seq__24228__$1);
var G__24240 = c__17274__auto__;
var G__24241 = cljs.core.count.call(null,c__17274__auto__);
var G__24242 = (0);
seq__24228 = G__24239;
chunk__24229 = G__24240;
count__24230 = G__24241;
i__24231 = G__24242;
continue;
} else {
var vec__24233 = cljs.core.first.call(null,seq__24228__$1);
var k = cljs.core.nth.call(null,vec__24233,(0),null);
var plugin = cljs.core.nth.call(null,vec__24233,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24243 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24228,chunk__24229,count__24230,i__24231,pl_24243,vec__24233,k,plugin,seq__24228__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24243.call(null,msg_hist);
});})(seq__24228,chunk__24229,count__24230,i__24231,pl_24243,vec__24233,k,plugin,seq__24228__$1,temp__4126__auto__))
);
} else {
}

var G__24244 = cljs.core.next.call(null,seq__24228__$1);
var G__24245 = null;
var G__24246 = (0);
var G__24247 = (0);
seq__24228 = G__24244;
chunk__24229 = G__24245;
count__24230 = G__24246;
i__24231 = G__24247;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var figwheel$client$start = null;
var figwheel$client$start__0 = (function (){
return figwheel$client$start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var figwheel$client$start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
figwheel$client$start = function(opts){
switch(arguments.length){
case 0:
return figwheel$client$start__0.call(this);
case 1:
return figwheel$client$start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$start.cljs$core$IFn$_invoke$arity$0 = figwheel$client$start__0;
figwheel$client$start.cljs$core$IFn$_invoke$arity$1 = figwheel$client$start__1;
return figwheel$client$start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
 * @param {...*} var_args
 */
figwheel.client.watch_and_reload = (function() { 
var figwheel$client$watch_and_reload__delegate = function (p__24248){
var map__24250 = p__24248;
var map__24250__$1 = ((cljs.core.seq_QMARK_.call(null,map__24250))?cljs.core.apply.call(null,cljs.core.hash_map,map__24250):map__24250);
var opts = map__24250__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__24248 = null;
if (arguments.length > 0) {
var G__24251__i = 0, G__24251__a = new Array(arguments.length -  0);
while (G__24251__i < G__24251__a.length) {G__24251__a[G__24251__i] = arguments[G__24251__i + 0]; ++G__24251__i;}
  p__24248 = new cljs.core.IndexedSeq(G__24251__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__24248);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__24252){
var p__24248 = cljs.core.seq(arglist__24252);
return figwheel$client$watch_and_reload__delegate(p__24248);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map