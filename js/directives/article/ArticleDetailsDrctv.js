// angular.module('Blogfront')
  blogFront
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

      controller: function ($filter, ArticleFactory, $scope, moment) {

        var ctrl = this;
        this.comments = [];

        // $scope.emailPattern = (function() {
        //     var regexp = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
        //     return {
        //         test: function(value) {
        //             if( $scope.requireEmail === false ) {
        //                 return true;
        //             }
        //             return regexp.test(value);
        //         }
        //     };
        // })();

        // $scope.userPattern = (function () {
        //   var regexp = /^(?=.{5,20}$)[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*$/;
        //   return {
        //     test : function (value){
        //       if($scope.requireName === false){
        //         return true;
        //       }
        //       return regexp.test(value);
        //     }
        //   };
        // })();

        this.commentDetails = {
          name : '',
          email : '',
          comment : ''
        };

        // console.log(moment("20111031", "YYYYMMDD").fromNow());

        this.addComment = function(name, email, comment){
          console.log('ok');
          console.log(name);
          console.log(email);
          console.log(comment);
        }

      },
      link : function(scope, element, attrs, ctrl) {

      }
    }
  });
