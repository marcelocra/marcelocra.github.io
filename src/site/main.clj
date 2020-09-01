(ns site.main
  (:require [clojure.java.io :as io]
            [clojure.pprint :refer [pprint]])
  (:import [org.asciidoctor Asciidoctor$Factory SafeMode]
           org.asciidoctor.jruby.AsciiDocDirectoryWalker))

;; (defn -main [])

(import '[java.nio.file WatchService FileSystem FileSystems StandardWatchEventKinds])
(def watcher (.. FileSystems (getDefault) (newWatchService)))
(def watch-key)

(comment
  ;; Convert all docs in content/** from adoc to html
  ;; and put them in a common location.
  (def ad (Asciidoctor$Factory/create))
  (.convertDirectory ad
                     (AsciiDocDirectoryWalker. "content/pages")
                     {"safe" (.getLevel SafeMode/SAFE)
                      "to_dir" "out/content"
                      "mkdirs" "true"
                      "backend" "html"})
  (filter #(.isFile %) (file-seq (io/file "content/pages"))))

(System/getProperty "user.dir")