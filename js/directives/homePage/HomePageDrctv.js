angular.module('Blogfront')
  .directive('homepage', function() {
    'use strict';

    return {
      restrict: 'E',
      replace : 'true',
      scope: {},
      templateUrl: 'js/directives/homePage/homePage.tmpl.html',
      controllerAs: 'homepage',

      controller: function (HomePageFactory, $filter, $location) {

        var ctrl = this;
        this.articals = [];
        this.showBody = false;


        HomePageFactory.getArticals().then(function(response) {
          ctrl.articals = response.data;
          // ctrl.articals.dateAdded = $filter('date')(new Date(),'yyyy-MM-dd');
          console.log(ctrl.articals);
        });

        this.readMore = function(article_id) {
          $location.path('/articles/'+article_id);
        }

        //testing for translations
        this.READ_MORE_TXT = "<<< Detaljnije";

      },
      link : function(scope, element, attrs, ctrl) {

      }
    }
  });
