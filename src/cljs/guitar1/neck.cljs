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
(def ionian-c [:C :D :E :F :G :A :B])

(defn stri
  [start-note]
  (take 12 (cycle
            (subvec (into [] (take 50 (cycle chromatic)))
                    (index-of chromatic start-note)))))

(def pairs (partial partition 2))

(def ionian-c2 (map first (filter #(= true (second %))
                                  (pairs (interleave (stri :C) ionian)))))
(defn scaleify
  [start-note scale]
  (map first (filter #(= true (second %))
                     (pairs (interleave (stri start-note) scale)))))

(def neck-state (atom [1]))

(defn string-html
  [start-note]
  [:ul.string
   (map #(vector (keyword (str "li" (if (some #{%} (scaleify start-note ionian)) ".scale" ""))) (name %)) (stri start-note))])

(defn set-ionian
  []
  (println "hello mum")
  [:span])

(defn neck []
  [:div.neck
   (println (str "interleave" (interleave (stri :C) ionian)))
   (println (str "ionian-c2" (scaleify :D ionian)))

   [:button {:on-click set-ionian} "Set Ionian"]
   (conj (map string-html (reverse strings))
         [:ul.string.frets (map #(vector :li %) (into [] (range 24)))]
         [:div])])

