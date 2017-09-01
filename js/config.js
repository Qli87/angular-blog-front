//TODO

// 1. formatiranje datuma, 5 hours ago.. a week ago
// 2. constants - ok
// 3. prevodi
// 4. articlesId page, forma za komentare - validacija inputa i unosi se name i email
      // Pri cemu je body textarea i ne moze da se submituje dok nisu sva polja validna
      // Ali racunaj da ce imati i neko hidden polje, Kao parentCommentId i articleId


angular.module('CONFIGURATION', [])
  // .constant('FOOTER_URL', 'www.google.com')
  .constant('GET_ARTICALS', 'http://localhost:8000/articles');
  // .constant('GET_ARTICAL_DETAILS', 'http://localhost:8000/articles/');
