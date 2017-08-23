angular.module('Blogfront')
  .directive('articledetails', function() {
    'use strict';

    return {
      restrict: 'E',
      replace : 'true',
      scope: {
        details : '='
      },
      templateUrl: 'js/directives/article/articleDetails.tmpl.html',
      controllerAs: 'articledetails',

      controller: function (HomePageFactory, $filter) {

        var ctrl = this;


      },
      link : function(scope, element, attrs, ctrl) {

      }
    }
  });
