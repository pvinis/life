(ns app.data
  (:require ["luxon" :refer [DateTime Interval]]))


(def now (.local DateTime))

(def data
  (flatten [{:text "birth" :date (.setZone (.local DateTime 1988 2 25) "Europe/Athens" {:keepLocalTime true}) :tags ["general"]}
            (map (fn [year]
                   {:text (str year " birthday") :date (.local DateTime (+ 1988 year) 2 25) :tags ["general"]}) (range  1 40))
            {:text "now" :date now}

            {:text "di uoa" :interval (.fromDateTimes Interval  (.local DateTime 2005 9 4) (.local DateTime 2010 7 10))}]))



;; export const Data: Entry[] = [
;; 		interval: Interval.fromDateTimes(DateTime.local(2005, 9, 4), DateTime.local(2010, 7, 10)),
;; 		text: 'di uoa',
;; 		tags: ['studies'],
;; 	},
;; 	{
;; 		interval: Interval.fromDateTimes(DateTime.local(2010, 9, 4), DateTime.local(2015, 7, 10)),
;; 		text: 'di uoa master',
;; 		tags: ['studies'],
;; 	},
;; 	{
;; 		interval: Interval.fromDateTimes(DateTime.local(1988, 2, 25), DateTime.local(2014, 3, 3)),
;; 		text: 'live in Athens',
;; 		tags: ['living-place'],
;; 	},
;; 	{
;; 		interval: Interval.fromDateTimes(DateTime.local(2014, 3, 3), DateTime.local(2016, 11, 3)),
;; 		text: 'live in Vienna',
;; 		tags: ['living-place'],
;; 	},
;; 	{
;; 		interval: Interval.fromDateTimes(DateTime.local(2016, 11, 3), DateTime.local(2018, 11, 3)),
;; 		text: 'live in Amsterdam',
;; 		tags: ['living-place'],
;; 	},
;; 	{
;; 		interval: Interval.fromDateTimes(DateTime.local(2018, 11, 3), DateTime.local(2020, 11, 3)),
;; 		text: 'live in Rotterdam',
;; 		tags: ['living-place'],
;; 	},
;; 	{
;; 		interval: Interval.fromDateTimes(DateTime.local(2020, 11, 3), now),
;; 		text: 'live in London',
;; 		tags: ['living-place'],
;; 	},
;; ]
