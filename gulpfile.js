const { src, dest, watch, series, parallel} = require('gulp')
const browsersync = require('browser-sync').create()
const terser = require('gulp-terser')
const extender = require('gulp-html-extend')

const files = {
  htmlPath: './src/html/*.html',
  subHtmlPath: './src/html/include/*.html',
  layoutHtmlPath: './src/layout/*.html',
  jsPath: './src/js/*.js'
}

function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: './dist/'
    },
    port: 8080,
    host: '0.0.0.0',
    ui: {
      port: 8081
    }
  })
  cb()
}

function browsersyncReload(cb) {
  browsersync.reload()
  cb()
}

function extend() {
  return src(files.htmlPath)
    .pipe(extender({annotations:false,verbose:false}))
    .pipe(dest('./dist'))
}

function jsTask() {
  return src(files.jsPath)
    .pipe(terser()) 
    .pipe(dest('./dist'))
}

function watchTask() {
  watch([files.htmlPath, files.subHtmlPath, files.layoutHtmlPath], series(extend, browsersyncReload))
  watch([files.jsPath], series(jsTask, browsersyncReload))
}

exports.default = parallel(
  jsTask,
  extend,
  watchTask,
  browsersyncServe
)