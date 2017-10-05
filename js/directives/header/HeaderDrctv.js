// angular.module('Blogfront')
  blogFront
  .directive('header', [ 'TEMPLATE_NUMBER',  function(TEMPLATE_NUMBER) {
    'use strict';

    return {
      restrict: 'E',
      replace : 'true',
      scope: {},
      // templateUrl: 'js/directives/header/header.tmpl.html',
      templateUrl: function (templateNumber) {
          return 'js/directives/header/header'+TEMPLATE_NUMBER+'.tmpl.html';
      },
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
  }]);
