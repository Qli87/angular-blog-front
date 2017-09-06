blogFront
  .controller('TranslationsCtrl', function ($scope, $translate) {

    $scope.showSerbian = true;
    $scope.showEnglish = false;

    // $scope.changeLanguage = function (lang) {
    //   $translate.use(lang);
    //   if(lang === 'sr'){
    //     $scope.showSerbian = false;
    //     $scope.showEnglish = true;
    //   } else if(lang === 'en') {
    //     $scope.showEnglish = false;
    //     $scope.showSerbian = true;
    //   }
    // }

    $scope.changeLanguage = function (slag){
      console.log(slag);
      $translate.use(slag)
    };

  });
