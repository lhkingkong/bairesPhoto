'use strict';

/**
 * @ngdoc service
 * @name practiceBApp.apiService
 * @description
 * # apiService
 * Service in the practiceBApp.
 */
angular.module('photosApp')
  .service('apiService', function ($http, $q, $timeout, $resource) {
    $http.defaults.useXDomain = true;
  var baseURL = 'https://jsonplaceholder.typicode.com/photos';

    var api = {
      get: get,
      wait: wait
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

      return resource.get(params).$promise;
    };

    var serviceTimeout;

    function wait(milliseconds) {
      var defer = $q.defer();
      $timeout.cancel(serviceTimeout);
      serviceTimeout = $timeout(function () {
        defer.resolve('variable to be returned');
      }, milliseconds);
      return defer.promise;
    }

  });