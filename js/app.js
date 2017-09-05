//providers
//['angularMoment']

var dependecies = ['ngRoute', 'CONFIGURATION', 'angularMoment',  'ui.bootstrap', 'pascalprecht.translate'];
var blogFront = angular.module('Blogfront', dependecies);

// angular.module('Blogfront', dependecies)
  blogFront
  .config(function($routeProvider, $httpProvider, $translateProvider) {
    'use strict';

    var en_translations = {
      'home' : 'Home',
      'about' : 'About',
      'contact' : 'Contact'
    }

    var sr_translations = {
      'home' : 'Pocetna',
      'about' : 'O nama',
      'contact' : 'Kontakt'
    }

    $translateProvider.translations('en', en_translations);
    $translateProvider.translations('sr', sr_translations);
    $translateProvider.preferredLanguage('en');

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
    })

});
