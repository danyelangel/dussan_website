(function () {
  'use strict';
  angular
    .module('app.components')
    .component('pageCards', {
      templateUrl: 'components/page/cards/cards.html',
      bindings: {
        ref: '@',
        authData: '<'
      }
    });
}());
