angular.module('Blogfront')
  .factory('HomePageFactory', function ($http, CONFIG) {
    'use strict';

    var exports = {};

    exports.getArticals = function () {
      return $http.get(CONFIG['baseUrl']+'/articles').then(function(response){
        return response.data;
      });
    };

    return exports;
  });
