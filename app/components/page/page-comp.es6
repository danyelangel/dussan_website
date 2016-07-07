(function () {
  'use strict';
  angular
    .module('app.components', [])
    .component('pageEl', {
      templateUrl: 'components/page/page.html',
      bindings: {
        pageId: '@',
        authData: '<'
      }
    });
}());
