/**
 * Generate files specific to gulp files
 */

'use strict';
var mkdirp = require('mkdirp'),
    fs = require('fs');


var gulpFiles = function gulpFiles() {
  var destRoot = this.destinationRoot(),
      sourceRoot = this.sourceRoot();

  if(this.gulpDirOption) {
    destRoot = destRoot + '/gulp';
  }
  // Dynamic
  this.fs.copyTpl(sourceRoot + '/gulp/package.json', destRoot + '/package.json', this.templateContext);
  this.fs.copyTpl(sourceRoot + '/gulp/config.json', destRoot + '/config.json', this.templateContext);
  this.fs.copyTpl(sourceRoot + '/gulp/gulpfile.js', destRoot + '/gulpfile.js', this.templateContext);
  this.fs.copyTpl(sourceRoot + '/gulp/gulp-tasks/images.js', destRoot + '/gulp-tasks/images.js', this.templateContext);
  this.fs.copyTpl(sourceRoot + '/gulp/gulp-tasks/bower.js', destRoot + '/gulp-tasks/bower.js', this.templateContext);
  this.fs.copyTpl(sourceRoot + '/gulp/gulp-tasks/clean.js', destRoot + '/gulp-tasks/clean.js', this.templateContext);
  this.fs.copyTpl(sourceRoot + '/gulp/gulp-tasks/styles.js', destRoot + '/gulp-tasks/styles.js', this.templateContext);
  this.fs.copyTpl(sourceRoot + '/gulp/gulp-tasks/scripts.js', destRoot + '/gulp-tasks/scripts.js', this.templateContext);
  console.log(this.javascriptOption);

  if(this.browsersyncOption) {
    this.fs.copyTpl(sourceRoot + '/gulp/gulp-tasks/browsersync.js', destRoot + '/gulp-tasks/browsersync.js', this.templateContext);
  }

  if(this.customIconfontOption) {
    this.fs.copyTpl(sourceRoot + '/gulp/gulp-tasks/iconfont.js', destRoot + '/gulp-tasks/iconfont.js', this.templateContext);
  }

  switch (this.templateOption){
    case 'html':
      this.fs.copyTpl(sourceRoot + '/gulp/gulp-tasks/html.js', destRoot + '/gulp-tasks/html.js', this.templateContext);
    break;

    case 'jade':
      this.fs.copyTpl(sourceRoot + '/gulp/gulp-tasks/jade.js', destRoot + '/gulp-tasks/html.js', this.templateContext);
    break;

    case 'nunjucks':
      this.fs.copyTpl(sourceRoot + '/gulp/gulp-tasks/nunjucks.js', destRoot + '/gulp-tasks/html.js', this.templateContext);
    break;

    case 'haml':
      this.fs.copyTpl(sourceRoot + '/gulp/gulp-tasks/haml.js', destRoot + '/gulp-tasks/html.js', this.templateContext);
    break;

    case 'handlebars':
      this.fs.copyTpl(sourceRoot + '/gulp/gulp-tasks/handlebars.js', destRoot + '/gulp-tasks/html.js', this.templateContext);
    break;
  }

  if(this.modernizrOption) {
    this.fs.copyTpl(sourceRoot + '/gulp/gulp-tasks/modernizr.js', destRoot + '/gulp-tasks/modernizr.js', this.templateContext);
  }

};

module.exports = gulpFiles;
