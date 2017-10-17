blogFront
  .controller('HomePageCtrl', function($scope, ArticleFactory, $http, $route, $window, ngMeta, HOME_PAGE_TITLE, HOME_PAGE_KEYWORDS) {
    'use strict';

    $scope.filteredArticles = [],
    $scope.currentPage = 1,
    $scope.numPerPage = 3,
    $scope.maxSize = 1;
    $scope.sort = 'title';

    $scope.hideNext = false;
    $scope.hidePrev = true;
    $scope.showPagination = true;

    var ctrl = this;
    this.paginationDetails = [];

    //initializing meta tags, set title for home page
    ngMeta.init();
    ngMeta.setTitle(HOME_PAGE_TITLE);
    ngMeta.setTag('keywords', HOME_PAGE_KEYWORDS);
    // end meta tags

    //function whitch react on currentPage change, and calculate begin and end of list
    //NOTE should be implemented maxSize for pagination
    $scope.$watch('currentPage', function() {
       var begin = 0;
       var end = 0;
       ArticleFactory.getArticles($scope.numPerPage, $scope.currentPage, $scope.sort).then(function(response){
       $scope.articles = response.data.articles;
       ctrl.paginationDetails = response.data.pagination;

       //NOTE calculate a total number per_page
       $scope.totalPages = Math.ceil($scope.numPerPage,$scope.articles);
      //  console.log($scope.totalPages);

       // NOTE on the pagination details set visibiliti of next and prev button
       if(ctrl.paginationDetails.total_count <= ctrl.paginationDetails.per_page){
         $scope.showPagination = false;
       }
      });
    });

    //setting pagination for next page
    $scope.next = function(currentPage) {
      $scope.currentPage = currentPage + 1;
      $scope.hidePrev = false;
      if($scope.currentPage == $scope.articles.length){
        $scope.hideNext = true;
        return false;
      }
    }

    //setting pagination for previous page
    $scope.prev = function(currentPage) {
      $scope.currentPage = currentPage -1;
      if($scope.currentPage == 1){
        $scope.hidePrev = true;
      }
      $scope.hideNext = false;
      if(currentPage == 1){
        $scope.hidePrev = true;
        return false;
      }
    }

  });
