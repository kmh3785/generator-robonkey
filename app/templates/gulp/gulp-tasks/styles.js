var fs              = require('fs');
var cfg             = JSON.parse(fs.readFileSync('./config.json'));
var paths           = JSON.parse(fs.readFileSync('./paths.json'));
var gulp            = require('gulp');
var plumber         = require('gulp-plumber');
var concat          = require('gulp-concat');
var sass            = require('gulp-sass');
var sassGlob        = require('gulp-sass-glob');
var sourcemaps      = require('gulp-sourcemaps');


<% if(includePostCSS){ %>// postprocessing<% } %><% if(includePostCSS){ %>
var postcss         = require('gulp-postcss');<% } %><% if(includePostCSS){ %>
var autoprefixer    = require('autoprefixer');<% } %><% if(includePostCSS && includePcssMQPacker){ %>
var mqPacker        = require('css-mqpacker');<% } %><% if(includePostCSS && includePcssScopify){ %>
var scopify         = require('postcss-scopify');<% } %><% if(includePostCSS && includePcssSelectorNot){ %>
var selectorNot     = require('postcss-selector-not');<% } %><% if(includePostCSS && includePcssSelectorMatches){ %>
var selectorMatches = require('postcss-selector-matches');<% } %><% if(includePostCSS && includePcssClassPrefix){ %>
var classPrfx       = require('postcss-class-prefix');<% } %><% if(includePostCSS && includePcssGradientFix){ %>
var gradientFix     = require('postcss-gradient-transparency-fix');<% } %><% if(includePostCSS && includePcssMQKeyframes){ %>
var mqKeyframes     = require('postcss-mq-keyframes');<% } %><% if(includePostCSS && includePcssNano){ %>
var cssnano         = require('cssnano');<% } %>

<% if(includePostCSS){ %>var postCssConfig = [<% } %><% if(includePostCSS && includePcssSelectorNot){ %>
  selectorNot,<% } %><% if(includePostCSS && includePcssSelectorMatches){ %>
  selectorMatches,<% } %><% if(includePostCSS && includePcssGradientFix){ %>
  gradientFix,<% } %><% if(includePostCSS && includePcssClassPrefix){ %>
  classPrfx('dc-'),<% } %><% if(includePostCSS && includePcssScopify){ %>
  scopify('#scope'),<% } %><% if(includePostCSS && includePcssMQKeyframes){ %>
  mqKeyframes,<% } %><% if(includePostCSS && includePcssMQPacker){ %>
  mqPacker,<% } %><% if(includePostCSS && includePcssNano){ %>
  cssnano({autoprefixer: false, zindex: false}),<% } %><% if(includePostCSS){ %>
  autoprefixer({browsers: ['last 3 versions', '> 1%']})<% } %><% if(includePostCSS){ %>
];<% } %>


// SCSS convert to CSS, CSS concat, create sourcefile and minify
gulp.task('styles', function() {
  gulp.src(paths.styles.src)
    .pipe(sassGlob())
    .pipe(plumber(onStyleError))
    .pipe(sourcemaps.init())
    .pipe(sass())
    <% if(includePostCSS){ %>.pipe(postcss(postCssConfig))<% } %>
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.styles.build));
});




function onStyleError(e) {
  console.log('CSS Error:', e.message, 'lineNumber:', e.lineNumber);
}