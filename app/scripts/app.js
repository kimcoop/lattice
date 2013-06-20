'use strict';

angular.module('latticeApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


window.BaseCtrl = ['$scope', function BaseCtrl($scope) {
  $scope.partials = {
    nav: 'views/nav.html',
    footer: 'views/footer.html'
  };

  $scope.strings = {
    appName: 'LevelUp Staffing',
    tagline: 'Happier companies, happier workers, happier you'
  };
}];
