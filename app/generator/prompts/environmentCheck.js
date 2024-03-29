/**
 * Create prompts for environments
 */

'use strict';

var chalk       = require('chalk'),
    printTitle  = require('./../../helpers/printTitle'),
    walk        = require('./../../helpers/walk'),
    fs          = require('fs'),
    path        = require('path');

var environmentCheckPrompt = function environmentCheckPrompt() {
  var done = this.async();

  var destRoot = this.destinationRoot();
  var self = this;


  function runFramework(name, key) {
    self.log(printTitle(' ' + name + ' '));
    self.prompt([{
      type: 'confirm',
      name: 'skipEnvironment',
      message: chalk.bgGreen.white( ' ' + name + ' is detected. Skip environment prompt? '),
      default: true
    }], function (answers) {
      // console.log(answers.skipEnvironment);
      self.skipEnvironment = answers.skipEnvironment;
      self.environmentOption = key;
      self.environmentName = name;
      self.environmentCheckPrompt = answers;
      done();
    }.bind(this));
  }



  function checkFrameworks( cb ){
    var filesToCheck = ['wp-load.php', 'CodeIgniter.php', 'drupal.js', 'www', 'artisan'];

    // Check if Wordpress is installed
    walk(destRoot, filesToCheck, function(err, data){
       if ( data.length > 0 ){
        var framework = data[0].split('/').pop();

        switch(framework){
          case 'wp-load.php':
            cb('Wordpress');
          break;

          case 'CodeIgniter.php':
            cb('CodeIgniter');
          break;

          case 'drupal.js':
            cb('Drupal');
          break;

          case 'www':
            cb('Express');
          break;

          case 'artisan':
            cb('Laravel');
          break;

          default:
            cb('custom');
          break;
        }
       } else {
       cb('custom');
       }
    });
  }


  function prepareInstall(){

    checkFrameworks( function(framework){
      switch(framework){
        case 'Wordpress':
          // console.log('Wordpress');
          runFramework('Wordpress', 'wordpress');
        break;

        case 'Drupal':
          // console.log('Drupal');
          runFramework('Drupal', 'drupal');
        break;

        case 'CodeIgniter':
          // console.log('CodeIgniter')
          runFramework('CodeIgniter', 'codeigniter');
        break;

        case 'Express':
          // console.log('Express')
          runFramework('Express', 'express');
        break;

        case 'Laravel':
          // console.log('Express')
          runFramework('Laravel', 'laravel');
        break;

        case 'custom':
          done();
          // runDefault();
        break;
      }
    });
  }

  prepareInstall();
};

module.exports = environmentCheckPrompt;
