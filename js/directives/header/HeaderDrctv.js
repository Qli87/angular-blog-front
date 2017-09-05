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

      controller: function () {

        var ctrl = this;

      },
      link : function(scope, element, attrs, ctrl) {

      }
    }
  });
