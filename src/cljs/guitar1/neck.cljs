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

(defn contains [item coll]
  (some #{item} coll))

(def pairs (partial partition 2))

(def chromatic [:A :A# :B :C :C# :D :D# :E :F :F# :G :G#])
(def strings [:E :A :D :G :B :E])
(def ionian '(true false true false true true false true false true false true))
(def neck-scale (atom ionian))
(def neck-key (atom :F#))

(defn set-key
  [key]
  (println "rawr" key "foo")
  (reset! neck-key key))

(defn neck-string
  [start-note]
  (take 24 (cycle
            (subvec (into [] (take 50 (cycle chromatic)))
                    (index-of chromatic start-note)))))

(defn scaleify
  [start-note scale]
  (map first (filter #(= true (second %))
                     (pairs (interleave (neck-string start-note) scale)))))

(defn make-fret [note]
  [:li
   {:on-click (fn [event] (set-key (keyword (-> event .-target .-textContent))))
    :class (str "fret "
                (if (contains note (scaleify @neck-key @neck-scale)) "scale-note ")
                (if (= @neck-key note) "root"))}
   (name note)])

(defn string-html
  [start-note]
  [:ul.string
   (map
    make-fret
    (neck-string start-note))])

(defn neck []
  [:div.neck
;   [:button {:on-click set-ionian} "Set Ionian"]
   (conj (map string-html (reverse strings))
         [:ul.string.frets (map #(vector :li %) (into [] (range 24)))]
         [:div])])

