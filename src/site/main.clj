(ns site.main
  (:require [clojure.java.io :as io]
            [clojure.pprint :refer [pprint]])
  (:import [org.asciidoctor Asciidoctor$Factory SafeMode]
           org.asciidoctor.jruby.AsciiDocDirectoryWalker))

(defn main [])

(comment
  ;; Convert all docs in content/** from adoc to html
  ;; and put them in a common location.
  (def ad (Asciidoctor$Factory/create))
  (.convertDirectory ad
                     (AsciiDocDirectoryWalker. "content/pages")
                     {"safe" (.getLevel SafeMode/SAFE)
                      "to_dir" "out/content"
                      "mkdirs" "true"})
  (filter #(.isFile %) (file-seq (io/file "content/pages"))))