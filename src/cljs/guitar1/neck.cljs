(ns guitar1.neck
  (:require [reagent.core :as r :refer [atom]]
            [goog.events :as events]
            [cljsjs.react :as react]))
;; TODOS: 
;; Add keys to seqs to make react happy.  http://reagent-project.github.io/
;; Add all the modes.
;; Add arpeggios.
;; See below TODOs too.

;; TODO - Move to core
(defn index-of
  [coll v]
  (let [i (count (take-while #(not= v %) coll))]
    (when (or (< i (count coll)) 
              (= v (last coll)))
      i)))

;; TODO - Move to core
(defn contains [item coll] (some #{item} coll))

(defn scale-nth
  [scale n]
  ;; (if (pos? n)
  ;;   (recur (rest scale) (if (first scale)
  ;;                         (- n 1)
  ;;                         n))
  ;;   (- 12 (count (rest scale))))
  (nth [0 2 4 5 7 9 11] n))

(def pairs (partial partition 2))
(def chromatic [:A :A# :B :C :C# :D :D# :E :F :F# :G :G#])
(def strings [:E :A :D :G :B :E])
(def lydian
  '(true false true false true false true true false true false true))
(def ionian
  '(true false true false true true false true false true false true))
(def pentatonic-minor 
  '(true false false true false true false true false false true false))
(def mode-names [:Ionian :Dorian :Phrygian :Lydian :Mixolydian :Aeolian :Locrian])
(defn mode
  [mode-name]
  (take 12
        (subvec (into [] (take 24 (cycle ionian)))
                (scale-nth ionian (index-of mode-names mode-name)))))

(def modes (zipmap mode-names (map mode mode-names)))

;; Set Initial State
(def neck-scale (atom pentatonic-minor))
(def neck-key (atom :A))

(defn set-key [key] (reset! neck-key key))

(defn set-scale [scale] (reset! neck-scale scale))

(defn neck-string
  [start-note]
  (take 24 (cycle
            (subvec (into [] (take 50 (cycle chromatic)))
                    (index-of chromatic start-note)))))

(defn scaleify
  [start-note scale]
  (map first (filter #(= true (second %))
                     (pairs (interleave (neck-string start-note) scale)))))

(defn make-fret [key scale note]
  [:li
   {:on-click (fn [event] (set-key (keyword (-> event .-target .-textContent))))
    :class (str "fret "
                (if (contains note (scaleify key scale)) "scale-note ")
                (if (= key note) "root")
                (if (= note (nth (scaleify key scale) (dec 3))) "third")
                (if (= note (nth (scaleify key scale) (dec 5))) "fifth"))}
   (name note)])

(defn build-string
  [start-note]
  [:ul.string
   (map
    (partial make-fret @neck-key @neck-scale)
    (neck-string start-note))])

(defn render-neck
  [key scale]
  [:div.neck
   [:button {:on-click #(set-scale pentatonic-minor)} "Pentatonic Minor"]
   (map (fn [mode] [:button {:on-click #(set-scale (mode modes))} (name mode)]) (keys modes))
   (conj (map build-string (reverse strings))
         [:ul.string.frets (map #(vector :li %) (into [] (range 24)))])])

(defn neck [] (render-neck @neck-key @neck-scale))
