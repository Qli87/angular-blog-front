//providers
//['angularMoment']

var dependecies = ['ngRoute', 'CONFIGURATION', 'angularMoment',  'ui.bootstrap', 'pascalprecht.translate', 'ngDisqus', 'ngMeta'];
var blogFront = angular.module('Blogfront', dependecies);

// angular.module('Blogfront', dependecies)
  blogFront
  .config(function($routeProvider, $translateProvider, $windowProvider, ngMetaProvider, $provide) {

    //get translations from database
    //NOTE should
    $provide.service('translationService', function ($http, GET_TRANSLATIONS) {
      this.test = function() {
        var config = {
          headers : {
            "X-Auth-Key": 'admin',
            'X-Auth-Secret' : 'sifra2017'
          }
        }
        $http.get(GET_TRANSLATIONS, config).then(function (response){
          console.log('translation service works!');
          console.log(response);
        });
      }
    });
    //end of translations


    // default language for our website
    var defaultLang = 'en';

    // if language is present in localStorage, use it as default language
    var $window = $windowProvider.$get();
    var slag = $window.localStorage.getItem('slag');
    if(slag != undefined){
      if(slag.length > 0) {
        defaultLang = slag;
      }
    }

    // translations objects start - NOTE : should be pulled from datebase
    var en_translations = {
      'home' : 'Home',
      'about' : 'About',
      'contact' : 'Contact',
      'Read more' : 'Read more',
      'rus' : 'Russian',
      'sr' : 'Serbian',
      'en' : 'English'
    }

    var sr_translations = {
      'home' : 'Pocetna',
      'about' : 'O nama',
      'contact' : 'Kontakt',
      'Read more' : 'Detaljnije',
      'rus' : 'Ruski',
      'sr' : 'Srpski',
      'en' : 'Engleski'
    }

    var rus_translations = {
      'home' : 'Pocetna rus',
      'about' : 'O nama rus',
      'contact' : 'Kontakt rus',
      'Read more' : 'Detaljnije RUS',
      'rus' : 'Russ',
      'sr' : 'Srb',
      'en' : 'Eng',
      'hours ago': 'ranije'
    }
    // traslations objects ends


    // all translations with prefix for actual translations process
    var languages = [
      {slag: 'en', trans: en_translations},
      {slag: 'sr', trans: sr_translations},
      {slag: 'rus', trans: rus_translations}
    ];


    // main function to inject all translations objects into trasnaltion provider
    var setAllLanguages = function () {
      for(var i=0; i<languages.length; i++) {
        $translateProvider.translations(languages[i].slag, languages[i].trans);
        // console.log($translateProvider.translations());
      }
       $translateProvider.preferredLanguage(defaultLang);
    }();


    $routeProvider
    .when('/articles', {
      templateUrl: 'views/homePage/homePage.html',
      resolve : {
        data : function (translationService) {
          translationService.test();
        }
      }
      // controller: 'HomePageCtrl',
    })
    .when('/articles/:id', {
      templateUrl: 'views/article/articleDetails.html',
      controller: 'ArticleDetailsCtrl'
    })
    .otherwise({
      redirectTo: '/articles'
    });
});
