'use strict';

/**
 * @ngdoc function
 * @name photosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the photosApp
 */
angular.module('photosApp')
  .controller('MainCtrl', function ($scope, photos) {
  console.log('main', photos);
    //$scope.photos = photos;
  var latest3Albums = [];
  var albums = {};
    for(var i = 0, len = photos.length; i<len; i++){
      if(!albums[photos[i].albumId]){
        albums[photos[i].albumId]=[];
      }
      albums[photos[i].albumId].push(photos[i]);
    }
  
  $scope.albums = albums;
  
  console.log(albums);
  
  });
