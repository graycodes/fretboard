// Compiled by ClojureScript 0.0-3126 {}
goog.provide('guitar1.neck');
goog.require('cljs.core');
goog.require('guitar1.utils');
goog.require('cljsjs.react');
goog.require('goog.events');
goog.require('reagent.core');
guitar1.neck.scale_nth = (function guitar1$neck$scale_nth(scale,n){
return cljs.core.nth.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(5),(7),(9),(11)], null),n);
});
guitar1.neck.pairs = cljs.core.partial.call(null,cljs.core.partition,(2));
guitar1.neck.chromatic = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"A#","A#",-2010499415),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"C#","C#",-362204290),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"D#","D#",-978177328),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"F#","F#",2099594331),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"G#","G#",-2019479838)], null);
guitar1.neck.strings = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"E","E",230849842)], null);
guitar1.neck.ionian = cljs.core.list(true,false,true,false,true,true,false,true,false,true,false,true);
guitar1.neck.pentatonic_minor = cljs.core.list(true,false,false,true,false,true,false,true,false,false,true,false);
guitar1.neck.pentatonic_major = cljs.core.list(true,false,true,false,true,false,false,true,false,true,false,false);
guitar1.neck.mode_names = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Ionian","Ionian",789143080),new cljs.core.Keyword(null,"Dorian","Dorian",269335044),new cljs.core.Keyword(null,"Phrygian","Phrygian",754708184),new cljs.core.Keyword(null,"Lydian","Lydian",499573956),new cljs.core.Keyword(null,"Mixolydian","Mixolydian",1913885595),new cljs.core.Keyword(null,"Aeolian","Aeolian",1440681826),new cljs.core.Keyword(null,"Locrian","Locrian",-618485581)], null);
guitar1.neck.mode = (function guitar1$neck$mode(mode_name){
return cljs.core.take.call(null,(12),cljs.core.subvec.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,(24),cljs.core.cycle.call(null,guitar1.neck.ionian))),guitar1.neck.scale_nth.call(null,guitar1.neck.ionian,guitar1.utils.index_of.call(null,guitar1.neck.mode_names,mode_name))));
});
guitar1.neck.modes = cljs.core.zipmap.call(null,guitar1.neck.mode_names,cljs.core.map.call(null,guitar1.neck.mode,guitar1.neck.mode_names));
guitar1.neck.neck_scale = reagent.core.atom.call(null,guitar1.neck.pentatonic_minor);
guitar1.neck.neck_key = reagent.core.atom.call(null,new cljs.core.Keyword(null,"A","A",-1688942394));
guitar1.neck.set_key = (function guitar1$neck$set_key(key){
return cljs.core.reset_BANG_.call(null,guitar1.neck.neck_key,key);
});
guitar1.neck.set_scale = (function guitar1$neck$set_scale(scale){
return cljs.core.reset_BANG_.call(null,guitar1.neck.neck_scale,scale);
});
guitar1.neck.neck_string = (function guitar1$neck$neck_string(start_note){
return cljs.core.take.call(null,(24),cljs.core.cycle.call(null,cljs.core.subvec.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,(50),cljs.core.cycle.call(null,guitar1.neck.chromatic))),guitar1.utils.index_of.call(null,guitar1.neck.chromatic,start_note))));
});
guitar1.neck.scaleify = (function guitar1$neck$scaleify(start_note,scale){
return cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p1__17628_SHARP_){
return cljs.core._EQ_.call(null,true,cljs.core.second.call(null,p1__17628_SHARP_));
}),guitar1.neck.pairs.call(null,cljs.core.interleave.call(null,guitar1.neck.neck_string.call(null,start_note),scale))));
});
guitar1.neck.make_fret = (function guitar1$neck$make_fret(key,scale,note){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return guitar1.neck.set_key.call(null,cljs.core.keyword.call(null,event.target.textContent));
}),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("fret "),cljs.core.str((cljs.core.truth_(guitar1.utils.contains.call(null,note,guitar1.neck.scaleify.call(null,key,scale)))?"scale-note ":null)),cljs.core.str(((cljs.core._EQ_.call(null,key,note))?"root":null)),cljs.core.str(((cljs.core._EQ_.call(null,note,cljs.core.nth.call(null,guitar1.neck.scaleify.call(null,key,scale),((3) - (1)))))?"third":null)),cljs.core.str(((cljs.core._EQ_.call(null,note,cljs.core.nth.call(null,guitar1.neck.scaleify.call(null,key,scale),((5) - (1)))))?"fifth":null))].join('')], null),cljs.core.name.call(null,note)], null);
});
guitar1.neck.build_string = (function guitar1$neck$build_string(start_note){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.string","ul.string",55205676),cljs.core.map.call(null,cljs.core.partial.call(null,guitar1.neck.make_fret,cljs.core.deref.call(null,guitar1.neck.neck_key),cljs.core.deref.call(null,guitar1.neck.neck_scale)),guitar1.neck.neck_string.call(null,start_note))], null);
});
guitar1.neck.render_neck = (function guitar1$neck$render_neck(key,scale){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fretboard","div.fretboard",2070969500),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Click on any of the scales to show the notes on the fretboard."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You can also click on any of the notes, to change to root note of the scale."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.scales","div.scales",54588548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return guitar1.neck.set_scale.call(null,guitar1.neck.pentatonic_minor);
})], null),"Pentatonic Minor"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return guitar1.neck.set_scale.call(null,guitar1.neck.pentatonic_major);
})], null),"Pentatonic Major"], null),cljs.core.map.call(null,(function (mode){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return guitar1.neck.set_scale.call(null,mode.call(null,guitar1.neck.modes));
})], null),cljs.core.name.call(null,mode)], null);
}),cljs.core.keys.call(null,guitar1.neck.modes))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.neck","div.neck",24186376),cljs.core.conj.call(null,cljs.core.map.call(null,guitar1.neck.build_string,cljs.core.reverse.call(null,guitar1.neck.strings)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.string.frets","ul.string.frets",-624475347),cljs.core.map.call(null,(function (p1__17629_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"li","li",723558921),p1__17629_SHARP_],null));
}),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.range.call(null,(24))))], null))], null)], null);
});
guitar1.neck.neck = (function guitar1$neck$neck(){
return guitar1.neck.render_neck.call(null,cljs.core.deref.call(null,guitar1.neck.neck_key),cljs.core.deref.call(null,guitar1.neck.neck_scale));
});

//# sourceMappingURL=neck.js.map