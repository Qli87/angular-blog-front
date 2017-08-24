var app = angular.module('Blogfront', ['ngRoute']);

//add some configuration here
//TODO investigate how to store this in separate file!!!
app.constant('CONFIG', {
    baseUrl: 'http://localhost:8000',
    dbName: 'ascrum'
});



app.config(function($routeProvider, $httpProvider) {
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
