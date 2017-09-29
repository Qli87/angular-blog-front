// angular.module('Blogfront')
  blogFront
  .directive('header', function() {
    'use strict';

    return {
      restrict: 'E',
      replace : 'true',
      scope: {},
      templateUrl: 'js/directives/header/header.tmpl.html',
      controllerAs: 'header',

      controller: function ($route) {

        var ctrl = this;

        this.reloadPage = function() {
          $route.reload();
        }

      },
      link : function(scope, element, attrs, ctrl) {

      }
    }
  });
