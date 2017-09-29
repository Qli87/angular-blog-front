// angular.module('Blogfront')
  blogFront
  .directive('articledetails', ['COMMENTS', '$rootScope',  function(COMMENTS, $rootScope) {
    'use strict';

    return {
      restrict: 'E',
      replace : 'true',
      scope: {
        details : '='
      },
      templateUrl: 'js/directives/article/articleDetails.tmpl.html',
      controllerAs: 'articledetails',

      controller: function ($filter, ArticleFactory, $scope, moment, CommentFactory,
        $routeParams, $route, $anchorScroll, $location, $window, $disqus) {

        //initializing values
        var ctrl = this;
        this.comments = [];
        this.showComments = false;
        this.showReply = false;
        ctrl.errors = {};
        this.constantLocal = COMMENTS;
        $rootScope.constantComment = COMMENTS;


        //createing object commentDetails
        this.commentDetails = {
          authorName : '',
          authorEmail : '',
          body : '',
          parentId: '',
          articleId: $routeParams.id
        };

        //sending a comment, if it is valid reload a page
        // if not, return error depending of http status to easily manipulate with errors
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

        //reply function whitch gets parentId, id of comment, for adding a comment
        // and setting a focus on 'name'
        this.replyClick = function(parentId) {
          this.commentDetails.parentId = parentId;
          console.log(this.commentDetails);
          // $location.hash('cmntName');
          // $anchorScroll();
          var name =  $window.document.getElementById('cmntName');
          name.focus();
        }

        //get comments from datebase for this articleId
        //NOTE show reply for comment, one tab right... node view
        if($rootScope.constantComment == 'local') {
          CommentFactory.getArticleComments($routeParams.id).then(function(response) {
            ctrl.comments = response.data;
            console.log(ctrl.comments);
          });
        }


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

      },
      link : function(scope, element, attrs, ctrl) {

      }
    }
  }]);
