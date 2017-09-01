// angular.module('Blogfront')
  blogFront
  .controller('ArticleDetailsCtrl', function($routeParams, $scope, ArticleFactory, moment) {
    'use strict';

      ArticleFactory.getArtical_details($routeParams.id).then(function(response) {
        //nekad mi vrati upit kao listu iako je jedan element, pa moram da koristim response.data[0]
        $scope.details = response.article;

      });
  });
