/**
 * Create prompts for project info
 */

'use strict';

var chalk       = require('chalk'),
    printTitle  = require('./../../helpers/printTitle');

var projectPrompt = function projectPrompt() {
  this.log(printTitle('Project Details'))
  var done = this.async();
  this.prompt([{
    name: 'projectUrl',
    message: 'Local URL to use:',
    default: 'mynewawesomeapp.localhost'
  }, {
    name: 'projectName',
    message: 'Name your project:',
    default: this.appname,
  }, {
    name: 'projectDescription',
    message: 'Describe your project:',
    default: 'My new awesome app',
  }, {
    name: 'projectVersion',
    message: 'Project version:',
    default: '0.0.0'
  }, {
    name: 'projectAuthor',
    message: 'Author:',
    default: ''
  }, {
    name: 'authorEmail',
    message: 'Author\'s Email Address:',
    default: ''
  }], function (answers) {
    this.projectPrompt = answers

    done();
  }.bind(this));
}

module.exports = projectPrompt;
