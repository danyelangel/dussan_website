(function () {
  'use strict';

  angular
    .module('dussanWebsite')
    .config(config);

  function config($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('grey', {
        default: '900'
      })
      .accentPalette('orange');
    $mdThemingProvider.theme('dark')
      .primaryPalette('grey', {
        default: '900'
      })
      .accentPalette('orange').dark();
  }
}());
