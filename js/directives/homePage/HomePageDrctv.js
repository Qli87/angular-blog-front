// angular.module('Blogfront')
  blogFront
  .directive('homepage', function() {
    'use strict';

    return {
      restrict: 'E',
      replace : 'true',
      scope: {
      },
      templateUrl: 'js/directives/homePage/homePage.tmpl.html',
      controllerAs: 'homepage',

      controller: function ($location) {

        var ctrl = this;

        this.readMore = function(article_id) {
          $location.path('/articles/'+article_id);
        }

      },
      link : function(scope, element, attrs, ctrl) {

      }
    }
  });
