angular.module('Blogfront')
  .factory('ArticleDetailsFactory', function ($http) {
    'use strict';

    var exports = {};

    exports.getArtical_details = function (id) {

      var config = {
        params : {
          id : id
        }
      };

      return $http.get('http://www.mocky.io/v2/599b6bfd120000ed02d64588').then(function(response){
        console.log(response.data);
        return response.data;
      });
    };

    return exports;
  });
