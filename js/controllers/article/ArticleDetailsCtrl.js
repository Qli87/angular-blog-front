angular.module('Blogfront')
  .controller('ArticleDetailsCtrl', function($routeParams, $scope, ArticleDetailsFactory) {
    'use strict';

      ArticleDetailsFactory.getArtical_details($routeParams.id).then(function(response) {
        $scope.details = response.article;
        console.log($scope.details);

      });

  });
