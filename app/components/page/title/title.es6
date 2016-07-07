(function () {
  'use strict';
  angular
    .module('app.components')
    .component('pageTitle', {
      templateUrl: 'components/page/title/title.html',
      bindings: {
        ref: '@',
        isHome: '<'
      }
    });
}());
