'use strict';

/**
 * @ngdoc function
 * @name photosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the photosApp
 */
angular.module('photosApp')
  .controller('MainCtrl', function (photos) {
  console.log('main', photos);
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
