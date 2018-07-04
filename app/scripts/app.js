'use strict';

/**
 * @ngdoc overview
 * @name photosApp
 * @description
 * # photosApp
 *
 * Main module of the application.
 */
angular
  .module('photosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
      resolve: {
        photos: function (myService) {
          return myService.get('');
        }
      }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
