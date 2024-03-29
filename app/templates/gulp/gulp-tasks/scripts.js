var fs              = require('fs');
var cfg             = JSON.parse(fs.readFileSync('./config.json'));
var gulp            = require('gulp');
var plumber         = require('gulp-plumber');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var sourcemaps      = require('gulp-sourcemaps');<% if(javascriptOption === 'coffee') { %>
var coffee          = require('gulp-coffee');<% } %>



// JS Dev Task
gulp.task('scripts', function() {
  gulp.src(cfg.scripts.src)
    .pipe(plumber(onScriptError))<% if(javascriptOption === 'coffee') { %>
    .pipe(coffee({bare: true}))<% } %>
    .pipe(concat('script.js'))
    .pipe(gulp.dest(cfg.scripts.build));
});




// JS Build Task
gulp.task('scripts-build', function() {
  gulp.src(cfg.scripts.src)
    .pipe(plumber(onScriptError))<% if(javascriptOption === 'coffee') { %>
    .pipe(coffee({bare: true}))<% } %>
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(cfg.scripts.build));
});




function onScriptError(e) {
  console.log('JavaScript Error:', e.message, 'lineNumber:', e.lineNumber);
}
