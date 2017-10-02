// angular.module('Blogfront')
  blogFront
  .factory('ArticleFactory', ['$http', 'GET_ARTICALS', '$translate', '$window', function ($http, GET_ARTICALS, $translate, $window) {
    'use strict';

    var exports = {};


    // return all artilces depending of parameters
    //NOTE request should be http://localhost:8000/articleson/SR?per_page=3&page=1&sort=title
    //NOTE the most important is language slag
    exports.getArticles = function (per_page, page, sort) {
      // http://www.mocky.io/v2/599b6a75120000e402d64587
      // 'http://localhost:8000/articles'
      //get currnet language slag
      var slag = $translate.use();
      // Implement pagination parameters...
      return $http.get(GET_ARTICALS+"on/"+slag+"?per_page="+per_page+"&page="+page+"&sort="+sort).then(function(response){
        // console.log(GET_ARTICALS+"on/"+slag+"?per_page="+per_page+"&page="+page+"&sort="+sort);
        // console.log(response.data);
        return response.data;
      });
    };

    //NOTE should be changed based on slag language request
    exports.getArticleDetails = function (id) {
      return $http.get(GET_ARTICALS+"/"+id).then(function(response){
        return response.data;
      });
    };


    exports.testFunction = function () {
      return $http.get('http://localhost:8000/articles').then(function(response){
          return response.data;
      });
    };


    return exports;
  }]);
