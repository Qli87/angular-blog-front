// angular.module('Blogfront')
  blogFront
  .directive('footer', function() {
    'use strict';

    return {
      restrict: 'E',
      replace : 'true',
      scope: {},
      templateUrl: 'js/directives/footer/footer.tmpl.html',
      controllerAs: 'footer',

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
