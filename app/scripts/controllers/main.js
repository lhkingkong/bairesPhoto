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
  
    var albums = {};
    var latest = 0;
    for(var i = 0, len = photos.length; i<len; i++){
      if(!albums[photos[i].albumId]){
        albums[photos[i].albumId]=[];
      }
      albums[photos[i].albumId].push(photos[i]);
      if(latest < photos[i].albumId){
        latest = photos[i].albumId;
      }
    }
  
  $scope.albums = albums;

    $scope.newAlbums = [$scope.albums[latest]];
  
    while($scope.newAlbums.length<3 && latest >0){
      latest--;
      if($scope.albums[latest]){
        $scope.newAlbums.push($scope.albums[latest]);
      }
    }
  
    
  
  
  
    console.log(albums);
  });
