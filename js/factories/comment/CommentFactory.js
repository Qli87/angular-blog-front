// angular.module('Blogfront')
  blogFront
  .factory('CommentFactory', ['$http', 'GET_COMMENTS', function ($http, GET_COMMENTS) {
    'use strict';

    var exports = {};


    exports.getComments_forArtical = function (articleId) {
      return $http.get(GET_COMMENTS+'/'+articleId).then(function(response){
        return response.data;
      });
    }



    exports.sendComment = function (commentDetails) {

      var transform = function(data){
        return $.param(data);
      }

      var config =  {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        transformRequest: transform
    }

      return $http.post('http://localhost:8000/comments', commentDetails, config).then(function(response) {
        console.log(response.data);
        return response.data;
      });
    }


    return exports;

  }]);
