// angular.module('Blogfront')
  blogFront
  .directive('homepage', function() {
    'use strict';

    return {
      restrict: 'E',
      replace : 'true',
      scope: {},
      templateUrl: 'js/directives/homePage/homePage.tmpl.html',
      controllerAs: 'homepage',

      controller: function (ArticleFactory, $filter, $location, $scope) {

        var ctrl = this;
        this.articles = [];
        this.showBody = false;

        ArticleFactory.getArticals().then(function(response) {
          ctrl.articles = response.data;
          // ctrl.articles.dateAdded = $filter('date')(new Date(),'yyyy-MM-dd');
          // console.log(ctrl.articles);
        });


        //start pagination
        $scope.filtredArticles = [],
        $scope.currentPage = 1,
        $scope.numPerPage = 1,
        $scope.maxSize = 5;

        $scope.makeTodos = function() {

          $scope.todos = [];

          // for (i=1;i<=ctrl.articles;i++) {
          //   $scope.todos.push({ text:'todo '+i, done:false});
          // }
          $scope.todos = ctrl.articles;
        };

        $scope.makeTodos();

        $scope.$watch('currentPage + numPerPage', function() {

          //vjestacki sam ga napunio sam da vidim oce li da radi ako ima nesto u listi
          // ArticleFactory.getArticals().then(function(response) {
          //   $scope.todos = response.data;
          //   // ctrl.articles.dateAdded = $filter('date')(new Date(),'yyyy-MM-dd');
          //   // console.log(ctrl.articles);
          // });

          var begin = (($scope.currentPage - 1) * $scope.numPerPage)
          , end = begin + $scope.numPerPage;

          $scope.filtredArticles = $scope.todos.slice(begin, end);

          console.log($scope.filtredArticles);
        });
        //end pagination




        this.readMore = function(article_id) {
          $location.path('/articles/'+article_id);
        }

      },
      link : function(scope, element, attrs, ctrl) {

      }
    }
  });
