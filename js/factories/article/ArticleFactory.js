// angular.module('Blogfront')
  blogFront
  .factory('ArticleFactory', ['$http', 'GET_ARTICALS', '$translate', '$window', function ($http, GET_ARTICALS, $translate, $window) {
    'use strict';

    var exports = {};


    // return all artilces depending of parameters
    //NOTE the most important is language slag
    exports.getArticles = function (per_page, page, sort) {

      var config = {
        headers : {
          "X-Auth-Key": 'admin',
          'X-Auth-Secret' : 'sifra2017'
        }
      }
      //get currnet language slag
      var slag = $translate.use();
      // Implement pagination parameters...
      return $http.get(GET_ARTICALS+"on/"+slag+"?per_page="+per_page+"&page="+page+"&sort="+sort, config).then(function(response){
        return response.data;
      });
    };


    //NOTE should be changed based on slag language request
    exports.getArticleDetails = function (id) {

      var config = {
        headers : {
          "X-Auth-Key": 'admin',
          'X-Auth-Secret' : 'sifra2017'
        }
      }

      return $http.get(GET_ARTICALS+"/"+id, config).then(function(response){
        return response.data;
      });
    };


    return exports;
  }]);
