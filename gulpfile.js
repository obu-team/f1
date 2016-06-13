const gulp = require('gulp')
const gutil = require('gulp-util')
const gulpif = require('gulp-if')
const streamify = require('gulp-streamify')
const source = require('vinyl-source-stream')
const babelify = require('babelify')
const browserify = require('browserify')
const uglify = require('gulp-uglify')
const livereload = require('gulp-livereload')

const production = process.env.NODE_ENV === 'production'

var dependencies = [
  'async',
  'bcrypt-nodejs',
  'cron',
  'immutable',
  'jquery',
  'jsonwebtoken',
  'lodash',
  'maplace-js',
  'moment',
  'moment-timezone',
  'node-uuid',
  'normalizr',
  'numeral',
  'superagent',
  'superagent-jsonp',
  'validator',
  'radium',
  'react',
  'react-addons-css-transition-group',
  'react-dom',
  'react-router',
  'react-tap-event-plugin',
  'reflux'
]

var scriptsCount = 0

function createApp() {
  scriptsCount++
  var appBundler = browserify({
    entries: './react/app.js',
    debug: true
  })
  if (!production && scriptsCount === 1){
    browserify({
      require: dependencies,
      debug: true
    })
    .bundle()
    .on('error', err => gutil.log(gutil.colors.red('Vendor: ', err.toString())))
    .on('end', () => gutil.log(gutil.colors.green('Finished building vendors')))
    .pipe(source('vendors.js'))
    .pipe(gulpif(production, streamify(uglify())))
    .pipe(gulp.dest('./public/js/'))
  }
  if (!production){
    dependencies.forEach(function(dep){
      appBundler.external(dep)
    })
  }

  appBundler
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .on('error', err => gutil.log(gutil.colors.red('App: ', err.toString())))
    .on('end', () => gutil.log(gutil.colors.green('Finished building app')))
    .pipe(source('app.js'))
    .pipe(gulpif(production, streamify(uglify())))
    .pipe(gulp.dest('./public/js/'))
    .pipe(livereload({ start: true }))
}

gulp.task('scripts', () => createApp())

gulp.task('watch', () => {
  livereload.listen()
  gulp.watch(['./react/**/*.js'], ['scripts'])
})

gulp.task('default', ['scripts','watch']);
