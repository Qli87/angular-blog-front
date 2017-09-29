blogFront
  .controller('TranslationsCtrl', function ($scope, $translate, $window, $route) {

    // this is temporary, should be removed from ctrl
    // how to resolve this? https://github.com/angular-translate/angular-translate/commit/3988af0
    // $scope.languages = $translate.getAvaliableLanguageKeys();
    $scope.languages = [
      {slag: 'en'},
      {slag: 'sr'},
      {slag: 'rus'}
    ];

    //compare string from view with currentLang in translateion provider
    $scope.isCurrentLang = function(lang) {
      if(lang == $translate.use() ){
        return true;
      } else {
        return false;
      }
    }

    //set lang in localStorage, an in translations provider
    $scope.changeLanguage = function (slag){
      $window.localStorage.setItem('slag', slag);
      $translate.use(slag);
      $window.location.reload();
      // $route.reload();
      //reload header
    };

    //NOTE get currentLang from localStorage to set a language flag i dropbow
    $scope.getFlag = $translate.use();
    // console.log($scope.getFlag);
});
