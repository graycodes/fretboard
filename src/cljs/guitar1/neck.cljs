(ns guitar1.neck
    (:require [reagent.core :as r :refer [atom]]
              [goog.events :as events]
              [cljsjs.react :as react]))

(defn index-of
  [coll v]
  (let [i (count (take-while #(not= v %) coll))]
    (when (or (< i (count coll)) 
              (= v (last coll)))
      i)))

(def chromatic [:A :A# :B :C :C# :D :D# :E :F :F# :G :G#])
(def strings [:E :A :D :G :B :E])
(def ionian '(true false true false true true false true false true false true))

(defn stri
  [start-note]
  (take 24 (cycle
            (subvec (into [] (take 50 (cycle chromatic)))
                    (index-of chromatic start-note)))))

(defn string-html
  [start-note]
  [:ul.string
   (map #(vector :li (name %)) (stri start-note))])

(defn neck []
  [:div.neck
   (println (interleave (stri :C) ionian))
   (conj (map string-html (reverse strings))
         [:ul.string.frets
          (map #(vector :li %) (into [] (range 24)))])])

