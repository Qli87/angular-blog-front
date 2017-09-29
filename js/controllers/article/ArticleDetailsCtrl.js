// angular.module('Blogfront')
  blogFront
  .controller('ArticleDetailsCtrl', function($routeParams, $scope, ArticleFactory, moment) {
      //getting all details for article from database
      ArticleFactory.getArticleDetails($routeParams.id).then(function(response) {
        $scope.details = response.data;
        console.log(response);
        });
  });
