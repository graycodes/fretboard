(ns guitar1.utils)

(defn index-of
  [coll v]
  (let [i (count (take-while #(not= v %) coll))]
    (when (or (< i (count coll)) 
              (= v (last coll)))
      i)))

(defn contains [item coll] (some #{item} coll))
