// Compiled by ClojureScript 0.0-3126 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
 * @param {...*} var_args
 */
figwheel.client.heads_up.node = (function() { 
var figwheel$client$heads_up$node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24270_24278 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24271_24279 = null;
var count__24272_24280 = (0);
var i__24273_24281 = (0);
while(true){
if((i__24273_24281 < count__24272_24280)){
var k_24282 = cljs.core._nth.call(null,chunk__24271_24279,i__24273_24281);
e.setAttribute(cljs.core.name.call(null,k_24282),cljs.core.get.call(null,attrs,k_24282));

var G__24283 = seq__24270_24278;
var G__24284 = chunk__24271_24279;
var G__24285 = count__24272_24280;
var G__24286 = (i__24273_24281 + (1));
seq__24270_24278 = G__24283;
chunk__24271_24279 = G__24284;
count__24272_24280 = G__24285;
i__24273_24281 = G__24286;
continue;
} else {
var temp__4126__auto___24287 = cljs.core.seq.call(null,seq__24270_24278);
if(temp__4126__auto___24287){
var seq__24270_24288__$1 = temp__4126__auto___24287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24270_24288__$1)){
var c__17274__auto___24289 = cljs.core.chunk_first.call(null,seq__24270_24288__$1);
var G__24290 = cljs.core.chunk_rest.call(null,seq__24270_24288__$1);
var G__24291 = c__17274__auto___24289;
var G__24292 = cljs.core.count.call(null,c__17274__auto___24289);
var G__24293 = (0);
seq__24270_24278 = G__24290;
chunk__24271_24279 = G__24291;
count__24272_24280 = G__24292;
i__24273_24281 = G__24293;
continue;
} else {
var k_24294 = cljs.core.first.call(null,seq__24270_24288__$1);
e.setAttribute(cljs.core.name.call(null,k_24294),cljs.core.get.call(null,attrs,k_24294));

var G__24295 = cljs.core.next.call(null,seq__24270_24288__$1);
var G__24296 = null;
var G__24297 = (0);
var G__24298 = (0);
seq__24270_24278 = G__24295;
chunk__24271_24279 = G__24296;
count__24272_24280 = G__24297;
i__24273_24281 = G__24298;
continue;
}
} else {
}
}
break;
}

var seq__24274_24299 = cljs.core.seq.call(null,children);
var chunk__24275_24300 = null;
var count__24276_24301 = (0);
var i__24277_24302 = (0);
while(true){
if((i__24277_24302 < count__24276_24301)){
var ch_24303 = cljs.core._nth.call(null,chunk__24275_24300,i__24277_24302);
e.appendChild(ch_24303);

var G__24304 = seq__24274_24299;
var G__24305 = chunk__24275_24300;
var G__24306 = count__24276_24301;
var G__24307 = (i__24277_24302 + (1));
seq__24274_24299 = G__24304;
chunk__24275_24300 = G__24305;
count__24276_24301 = G__24306;
i__24277_24302 = G__24307;
continue;
} else {
var temp__4126__auto___24308 = cljs.core.seq.call(null,seq__24274_24299);
if(temp__4126__auto___24308){
var seq__24274_24309__$1 = temp__4126__auto___24308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24274_24309__$1)){
var c__17274__auto___24310 = cljs.core.chunk_first.call(null,seq__24274_24309__$1);
var G__24311 = cljs.core.chunk_rest.call(null,seq__24274_24309__$1);
var G__24312 = c__17274__auto___24310;
var G__24313 = cljs.core.count.call(null,c__17274__auto___24310);
var G__24314 = (0);
seq__24274_24299 = G__24311;
chunk__24275_24300 = G__24312;
count__24276_24301 = G__24313;
i__24277_24302 = G__24314;
continue;
} else {
var ch_24315 = cljs.core.first.call(null,seq__24274_24309__$1);
e.appendChild(ch_24315);

var G__24316 = cljs.core.next.call(null,seq__24274_24309__$1);
var G__24317 = null;
var G__24318 = (0);
var G__24319 = (0);
seq__24274_24299 = G__24316;
chunk__24275_24300 = G__24317;
count__24276_24301 = G__24318;
i__24277_24302 = G__24319;
continue;
}
} else {
}
}
break;
}

return e;
};
var figwheel$client$heads_up$node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__24320__i = 0, G__24320__a = new Array(arguments.length -  2);
while (G__24320__i < G__24320__a.length) {G__24320__a[G__24320__i] = arguments[G__24320__i + 2]; ++G__24320__i;}
  children = new cljs.core.IndexedSeq(G__24320__a,0);
} 
return figwheel$client$heads_up$node__delegate.call(this,t,attrs,children);};
figwheel$client$heads_up$node.cljs$lang$maxFixedArity = 2;
figwheel$client$heads_up$node.cljs$lang$applyTo = (function (arglist__24321){
var t = cljs.core.first(arglist__24321);
arglist__24321 = cljs.core.next(arglist__24321);
var attrs = cljs.core.first(arglist__24321);
var children = cljs.core.rest(arglist__24321);
return figwheel$client$heads_up$node__delegate(t,attrs,children);
});
figwheel$client$heads_up$node.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$heads_up$node__delegate;
return figwheel$client$heads_up$node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17388__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17384__auto__,prefer_table__17385__auto__,method_cache__17386__auto__,cached_hierarchy__17387__auto__,hierarchy__17388__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17384__auto__,prefer_table__17385__auto__,method_cache__17386__auto__,cached_hierarchy__17387__auto__,hierarchy__17388__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17388__auto__,method_table__17384__auto__,prefer_table__17385__auto__,method_cache__17386__auto__,cached_hierarchy__17387__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_24322 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24322.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24322.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_24322.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24322);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24323,st_map){
var map__24327 = p__24323;
var map__24327__$1 = ((cljs.core.seq_QMARK_.call(null,map__24327))?cljs.core.apply.call(null,cljs.core.hash_map,map__24327):map__24327);
var container_el = cljs.core.get.call(null,map__24327__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24327,map__24327__$1,container_el){
return (function (p__24328){
var vec__24329 = p__24328;
var k = cljs.core.nth.call(null,vec__24329,(0),null);
var v = cljs.core.nth.call(null,vec__24329,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24327,map__24327__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24330,dom_str){
var map__24332 = p__24330;
var map__24332__$1 = ((cljs.core.seq_QMARK_.call(null,map__24332))?cljs.core.apply.call(null,cljs.core.hash_map,map__24332):map__24332);
var c = map__24332__$1;
var content_area_el = cljs.core.get.call(null,map__24332__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24333){
var map__24335 = p__24333;
var map__24335__$1 = ((cljs.core.seq_QMARK_.call(null,map__24335))?cljs.core.apply.call(null,cljs.core.hash_map,map__24335):map__24335);
var content_area_el = cljs.core.get.call(null,map__24335__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__){
return (function (state_24377){
var state_val_24378 = (state_24377[(1)]);
if((state_val_24378 === (2))){
var inst_24362 = (state_24377[(7)]);
var inst_24371 = (state_24377[(2)]);
var inst_24372 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24373 = ["auto"];
var inst_24374 = cljs.core.PersistentHashMap.fromArrays(inst_24372,inst_24373);
var inst_24375 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24362,inst_24374);
var state_24377__$1 = (function (){var statearr_24379 = state_24377;
(statearr_24379[(8)] = inst_24371);

return statearr_24379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24377__$1,inst_24375);
} else {
if((state_val_24378 === (1))){
var inst_24362 = (state_24377[(7)]);
var inst_24362__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24363 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24364 = ["10px","10px","100%","68px","1.0"];
var inst_24365 = cljs.core.PersistentHashMap.fromArrays(inst_24363,inst_24364);
var inst_24366 = cljs.core.merge.call(null,inst_24365,style);
var inst_24367 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24362__$1,inst_24366);
var inst_24368 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24362__$1,msg);
var inst_24369 = cljs.core.async.timeout.call(null,(300));
var state_24377__$1 = (function (){var statearr_24380 = state_24377;
(statearr_24380[(9)] = inst_24367);

(statearr_24380[(7)] = inst_24362__$1);

(statearr_24380[(10)] = inst_24368);

return statearr_24380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24377__$1,(2),inst_24369);
} else {
return null;
}
}
});})(c__18867__auto__))
;
return ((function (switch__18811__auto__,c__18867__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18812__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18812__auto____0 = (function (){
var statearr_24384 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24384[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18812__auto__);

(statearr_24384[(1)] = (1));

return statearr_24384;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18812__auto____1 = (function (state_24377){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_24377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e24385){if((e24385 instanceof Object)){
var ex__18815__auto__ = e24385;
var statearr_24386_24388 = state_24377;
(statearr_24386_24388[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24389 = state_24377;
state_24377 = G__24389;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18812__auto__ = function(state_24377){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18812__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18812__auto____1.call(this,state_24377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18812__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18812__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__))
})();
var state__18869__auto__ = (function (){var statearr_24387 = f__18868__auto__.call(null);
(statearr_24387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);

return statearr_24387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__))
);

return c__18867__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__24391 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__24391,(0),null);
var ln = cljs.core.nth.call(null,vec__24391,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__24394 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__24394,(0),null);
var file_line = cljs.core.nth.call(null,vec__24394,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24394,file_name,file_line){
return (function (p1__24392_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__24392_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__24394,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__24396 = figwheel.client.heads_up.ensure_container.call(null);
var map__24396__$1 = ((cljs.core.seq_QMARK_.call(null,map__24396))?cljs.core.apply.call(null,cljs.core.hash_map,map__24396):map__24396);
var content_area_el = cljs.core.get.call(null,map__24396__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__){
return (function (state_24443){
var state_val_24444 = (state_24443[(1)]);
if((state_val_24444 === (3))){
var inst_24426 = (state_24443[(7)]);
var inst_24440 = (state_24443[(2)]);
var inst_24441 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24426,"");
var state_24443__$1 = (function (){var statearr_24445 = state_24443;
(statearr_24445[(8)] = inst_24440);

return statearr_24445;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24443__$1,inst_24441);
} else {
if((state_val_24444 === (2))){
var inst_24426 = (state_24443[(7)]);
var inst_24433 = (state_24443[(2)]);
var inst_24434 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24435 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24436 = cljs.core.PersistentHashMap.fromArrays(inst_24434,inst_24435);
var inst_24437 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24426,inst_24436);
var inst_24438 = cljs.core.async.timeout.call(null,(200));
var state_24443__$1 = (function (){var statearr_24446 = state_24443;
(statearr_24446[(9)] = inst_24437);

(statearr_24446[(10)] = inst_24433);

return statearr_24446;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24443__$1,(3),inst_24438);
} else {
if((state_val_24444 === (1))){
var inst_24426 = (state_24443[(7)]);
var inst_24426__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24427 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24428 = ["0.0"];
var inst_24429 = cljs.core.PersistentHashMap.fromArrays(inst_24427,inst_24428);
var inst_24430 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24426__$1,inst_24429);
var inst_24431 = cljs.core.async.timeout.call(null,(300));
var state_24443__$1 = (function (){var statearr_24447 = state_24443;
(statearr_24447[(7)] = inst_24426__$1);

(statearr_24447[(11)] = inst_24430);

return statearr_24447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24443__$1,(2),inst_24431);
} else {
return null;
}
}
}
});})(c__18867__auto__))
;
return ((function (switch__18811__auto__,c__18867__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18812__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18812__auto____0 = (function (){
var statearr_24451 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24451[(0)] = figwheel$client$heads_up$clear_$_state_machine__18812__auto__);

(statearr_24451[(1)] = (1));

return statearr_24451;
});
var figwheel$client$heads_up$clear_$_state_machine__18812__auto____1 = (function (state_24443){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_24443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e24452){if((e24452 instanceof Object)){
var ex__18815__auto__ = e24452;
var statearr_24453_24455 = state_24443;
(statearr_24453_24455[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24456 = state_24443;
state_24443 = G__24456;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18812__auto__ = function(state_24443){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18812__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18812__auto____1.call(this,state_24443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18812__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18812__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__))
})();
var state__18869__auto__ = (function (){var statearr_24454 = f__18868__auto__.call(null);
(statearr_24454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);

return statearr_24454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__))
);

return c__18867__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__){
return (function (){
var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__){
return (function (state_24488){
var state_val_24489 = (state_24488[(1)]);
if((state_val_24489 === (4))){
var inst_24486 = (state_24488[(2)]);
var state_24488__$1 = state_24488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24488__$1,inst_24486);
} else {
if((state_val_24489 === (3))){
var inst_24483 = (state_24488[(2)]);
var inst_24484 = figwheel.client.heads_up.clear.call(null);
var state_24488__$1 = (function (){var statearr_24490 = state_24488;
(statearr_24490[(7)] = inst_24483);

return statearr_24490;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24488__$1,(4),inst_24484);
} else {
if((state_val_24489 === (2))){
var inst_24480 = (state_24488[(2)]);
var inst_24481 = cljs.core.async.timeout.call(null,(400));
var state_24488__$1 = (function (){var statearr_24491 = state_24488;
(statearr_24491[(8)] = inst_24480);

return statearr_24491;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24488__$1,(3),inst_24481);
} else {
if((state_val_24489 === (1))){
var inst_24478 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24488__$1 = state_24488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24488__$1,(2),inst_24478);
} else {
return null;
}
}
}
}
});})(c__18867__auto__))
;
return ((function (switch__18811__auto__,c__18867__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18812__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18812__auto____0 = (function (){
var statearr_24495 = [null,null,null,null,null,null,null,null,null];
(statearr_24495[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18812__auto__);

(statearr_24495[(1)] = (1));

return statearr_24495;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18812__auto____1 = (function (state_24488){
while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_24488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18814__auto__;
}
break;
}
}catch (e24496){if((e24496 instanceof Object)){
var ex__18815__auto__ = e24496;
var statearr_24497_24499 = state_24488;
(statearr_24497_24499[(5)] = ex__18815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24500 = state_24488;
state_24488 = G__24500;
continue;
} else {
return ret_value__18813__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18812__auto__ = function(state_24488){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18812__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18812__auto____1.call(this,state_24488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18812__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18812__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__))
})();
var state__18869__auto__ = (function (){var statearr_24498 = f__18868__auto__.call(null);
(statearr_24498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);

return statearr_24498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__))
);

return c__18867__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map