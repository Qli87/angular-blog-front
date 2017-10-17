// angular.module('Blogfront')
  blogFront
  .factory('CommentFactory', ['$http', 'GET_COMMENTS', 'ADD_COMMENT', function ($http, GET_COMMENTS, ADD_COMMENT) {
    'use strict';

    var exports = {};

    //loading all comments for article
    exports.getArticleComments = function (articleId) {

      var config = {
        headers : {
          "X-Auth-Key": 'admin',
          'X-Auth-Secret' : 'sifra2017'
        }
      }

      return $http.get(GET_COMMENTS+'/'+articleId, config).then(function(response){
        return response.data;
      });
    }

    //problem with post method resolved on this way
    exports.sendComment = function (commentDetails) {
      var transform = function(data){
        return $.param(data);
      }
      var config =  {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        "X-Auth-Key": 'admin',
        'X-Auth-Secret' : 'sifra2017'
        },
        transformRequest: transform
      }
      return $http.post(ADD_COMMENT, commentDetails, config).then(function(response) {
        console.log(response.data);
        return response.data;
      });
    }

    return exports;
  }]);
