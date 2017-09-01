// angular.module('Blogfront')
  blogFront
  .factory('ArticleFactory', ['$http', 'GET_ARTICALS', function ($http, GET_ARTICALS) {
    'use strict';

    var exports = {};


    exports.getArticals = function () {
      // http://www.mocky.io/v2/599b6a75120000e402d64587
      // 'http://localhost:8000/articles'
      return $http.get(GET_ARTICALS).then(function(response){
        return response.data;
      });
    };

    exports.getArtical_details = function (id) {

      // var config = {
      //   params : {
      //     id : id
      //   }
      // };

      // var data;
      //  'http://www.mocky.io/v2/599b6bfd120000ed02d64588'
      // $http.post(GET_ARTICAL_DETAILS, data, config)

      return $http.get(GET_ARTICALS+"/"+id).then(function(response){
        // console.log(response.data);
        return response.data;
      });
    };




    return exports;
  }]);
