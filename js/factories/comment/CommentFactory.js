// angular.module('Blogfront')
  blogFront
  .factory('CommentFactory', ['$http', 'GET_COMMENTS', function ($http, GET_COMMENTS) {
    'use strict';

    var exports = {};


    exports.getComments_forArtical = function (articleId) {
      return $http.get(GET_COMMENTS+'/'+articleId).then(function(response){
        return response.data;
      });
    };


    return exports;
  }]);
