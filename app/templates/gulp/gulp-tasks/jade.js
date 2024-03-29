var fs              = require('fs');
var cfg             = JSON.parse(fs.readFileSync('./config.json'));
var gulp            = require('gulp');
var plumber         = require('gulp-plumber');
var jade            = require('gulp-jade');
var prettify        = require('gulp-prettify');
var htmlreplace     = require("gulp-html-replace");

var jadeOptions = {
  // pretty: true
};

// Compile jade files
gulp.task('html', function() {
  gulp.src(cfg.jade.src)
    .pipe(plumber(onHtmlError))
    .pipe(jade(jadeOptions))
    .pipe(prettify({indent_size: 2}))
    .pipe(gulp.dest(cfg.jade.build));
});

gulp.task('html-build', function() {
  gulp.src(cfg.jade.src)
    .pipe(plumber(onHtmlError))
    .pipe(jade(jadeOptions))
    .pipe(htmlreplace({
      js: '<%= jsDirPath %>/script.min.js',
      css: '<%= cssDirPath %>/style.min.css'
    }))
    .pipe(prettify({indent_size: 2}))
    .pipe(gulp.dest(cfg.jade.build));
});

function onHtmlError(e) {
  console.log('Html Error:', e.message, 'lineNumber:', e.lineNumber);
}
