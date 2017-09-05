blogFront
  .controller('HomePageCtrl', function($scope, ArticleFactory, $http) {

    $scope.filteredArticles = [],
    $scope.currentPage = 1,
    $scope.numPerPage = 1,
    $scope.maxSize = 1;


    ArticleFactory.getArticals().then(function(response){
     $scope.articles = response.data;
    });

    console.log($scope.articles);

    $scope.$watch('currentPage + numPerPage', function () {
      //  ArticleFactory.getArticals().then(function(response){
      //   $scope.articles = response.data;

        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
        , end = begin + $scope.numPerPage;

        $scope.filteredArticles = $scope.articles.slice(begin, end);
      // });
    });

  });
