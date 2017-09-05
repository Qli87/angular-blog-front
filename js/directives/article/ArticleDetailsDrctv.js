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

      controller: function ($filter, ArticleFactory, $scope, moment, CommentFactory, $routeParams, $route, $anchorScroll, $location, $window) {

        var ctrl = this;
        this.comments = [];
        this.showComments = false;
        this.showReply = false;
        ctrl.errors = {};


        this.commentDetails = {
          authorName : '',
          authorEmail : '',
          body : '',
          parentId: '',
          articleId: $routeParams.id
        };



        this.sendComment = function() {
          CommentFactory.sendComment(this.commentDetails).then(function(response) {
            $route.reload();
          }, function errorCallback(response){
            console.log('error');
            if(response.status != 200){
              console.log(response.status);
              ctrl.errors.wrongParameters = true;
            }
          });
        };


        this.replyClick = function(parentId) {
          this.commentDetails.parentId = parentId;
          console.log(this.commentDetails);
          $location.hash('cmntName');
          $anchorScroll();
          var name =  $window.document.getElementById('cmntName');
          name.focus();
        }


        CommentFactory.getComments_forArtical($routeParams.id).then(function(response) {
          ctrl.comments = response.data;
        });


        this.showComments_fn = function() {
          if(ctrl.showComments == false) {
            ctrl.showComments = true;
          } else {
            ctrl.showComments = false;
          }
        };

        this.showReply_fn = function(commentId) {
          if(ctrl.showReply == false) {
            ctrl.showReply = true;
          } else {
            ctrl.showReply = false;
          }
        };


        this.addComment = function(articleDetailsObj){
            console.log(this.commentDetails);
        }

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

      },
      link : function(scope, element, attrs, ctrl) {

      }
    }
  });
