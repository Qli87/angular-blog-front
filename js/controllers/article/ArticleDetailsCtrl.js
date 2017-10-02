// angular.module('Blogfront')
  blogFront
  .controller('ArticleDetailsCtrl', function($routeParams, $scope, ArticleFactory, moment, ngMeta) {
      //getting all details for article from database
      ArticleFactory.getArticleDetails($routeParams.id).then(function(response) {
        $scope.details = response.data;
        console.log(response);


        //initializing meta tags, setting values for title, description and author
        ngMeta.init();
        ngMeta.setTitle($scope.details.title);
        ngMeta.setTag('description', $scope.details.intro);
        ngMeta.setTag('authorName', $scope.details.authorName);
        ngMeta.setTag('keywords', $scope.details.tags);
        //end meta tags

      });


  });
