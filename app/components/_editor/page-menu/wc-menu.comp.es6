(function () {
  'use strict';
  angular
    .module('app.components')
    .component('wcMenu', {
      templateUrl: 'components/_editor/page-menu/wc-menu.html',
      bindings: {
        authData: '<'
      }
    });
}());
