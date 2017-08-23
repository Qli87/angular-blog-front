angular.module('Blogfront', ['ngRoute'])
  .config(function($routeProvider, $httpProvider) {
    'use strict';

    $routeProvider
    .when('/articles', {
      templateUrl: 'views/homePage/homePage.html',
      controller: 'HomePageCtrl',
    })
    .when('/articles/:id', {
      templateUrl: 'views/article/articleDetails.html',
      controller: 'ArticleDetailsCtrl',
    })
    .otherwise({
      redirectTo: '/articles'
    });


  });
