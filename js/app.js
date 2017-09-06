//providers
//['angularMoment']

var dependecies = ['ngRoute', 'CONFIGURATION', 'angularMoment',  'ui.bootstrap', 'pascalprecht.translate'];
var blogFront = angular.module('Blogfront', dependecies);

// angular.module('Blogfront', dependecies)
  blogFront
  .config(function($routeProvider, $httpProvider, $translateProvider) {
    'use strict';

    // allPossible languages - start setting languages
    var languages = [
      {slag: 'en', trans: 'en_translations'},
      {slag: 'sr', trans: 'sr_translations'},
      {slag: 'rus', trans: 'rus_translations'}
    ];

    var setLanguages = function () {
      console.log(languages.length);
      for(var i=0; i<languages.length; i++) {
        $translateProvider.translations(languages[i].slag, languages[i].trans);
      }
       $translateProvider.preferredLanguage('en');
    }

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

    var rus_translations = {
      'home' : 'Pocetna rus',
      'about' : 'O nama rus',
      'contact' : 'Kontakt rus'
    }

    setLanguages();

    // $translateProvider.translations('en', en_translations);
    // $translateProvider.translations('sr', sr_translations);
    // $translateProvider.preferredLanguage('en');

    // end setting languages

    $routeProvider
    .when('/articles', {
      templateUrl: 'views/homePage/homePage.html'
      // controller: 'HomePageCtrl',
    })
    .when('/articles/:id', {
      templateUrl: 'views/article/articleDetails.html',
      controller: 'ArticleDetailsCtrl',
    })
    .otherwise({
      redirectTo: '/articles'
    })

});
