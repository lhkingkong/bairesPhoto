'use strict';

/**
 * @ngdoc service
 * @name photosApp.service
 * @description
 * # service
 * Service in the photosApp.
 */
angular.module('photosApp')
  .service('myService', function ($http, $q, $timeout, $resource) {
  $http.defaults.useXDomain = true;
  var baseURL = 'https://jsonplaceholder.typicode.com/photos';

  var api = {
    get: get
  };

  return api;

  function get(url, params) {
    var resource = $resource(baseURL + url, {}, {
      'get': {
        method: 'GET',
        cache: false,
        responseType: 'application/json'
      }
    });

    return resource.query(params).$promise;
  };
  
  
  });
