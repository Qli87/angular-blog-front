angular.module('Blogfront')
  .factory('HomePageFactory', function ($http) {
    'use strict';

    var exports = {};

    exports.getArticals = function () {
      return $http.get('http://www.mocky.io/v2/599b6a75120000e402d64587').then(function(response){
        return response.data;
      });
    };

    return exports;
  });
