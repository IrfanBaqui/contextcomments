angular.module('contextcommentsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('article', {
        url: '/article',
        views: {

	        '':{

	        	templateUrl: 'app/article/article.html',
        		controller: function() {}
	     },

        	"content@article": { 
<<<<<<< HEAD
        		templateUrl: "app/article/content/content.html  ",
        		controller: 'ContentContrl'
=======
        		templateUrl: "app/article/content/content.html",
        		controller: 'contentCtrl'
>>>>>>> Implement ability to capture highlighted text
        },
        	"comment@article": { 
        		templateUrl: "app/article/comment/comment.html",
        		controller: 'CommentBoxCtrl'
        	}
        },
        // templateUrl: 'app/article/article.html',
      })
  });
