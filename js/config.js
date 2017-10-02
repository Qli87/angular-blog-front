// setting all constants for api
angular.module('CONFIGURATION', [])
  .constant('GET_ARTICALS', 'http://localhost:8000/articles')
  .constant('GET_COMMENTS', 'http://localhost:8000/commentsfor')
  .constant('ADD_COMMENT', 'http://localhost:8000/comments')
  // choose a type od comments, local or disqus
  .constant('COMMENTS', 'local')
  // end of comments
  .constant('HOME_PAGE_TITLE', 'Blog')
  .constant('HOME_PAGE_KEYWORDS', 'blog')
