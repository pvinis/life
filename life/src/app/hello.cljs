(ns app.hello
  (:require [reagent.core :as r]
            [app.data :refer [data]]))


(defn click-counter [click-count]
  [:div
   "The tom " [:code "click-count"] " as value: "
   @click-count ". "
   [:input {:type "button" :value "Click me!"
            :on-click #(swap! click-count inc)}]])

(def click-count (r/atom 0))

(defn hello []
  (let [showingDebug (r/atom true)]
    (fn []
      [:div
       [:a {:href "https://github.com/pvinis/life"} "See source code"]
       [click-counter click-count]
       [:div
        [:button {:type "button"
                  :on-click #(swap! showingDebug not)}
         (str (if @showingDebug "Hide" "Show") " debug data")]
        (if @showingDebug
          [:ul
           (map
            (fn [entry] [:li [:p (str (entry :text) ": " (entry :date))]])
            data)]
          nil)]])))
