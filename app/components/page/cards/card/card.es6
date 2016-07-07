(function () {
  'use strict';
  angular
    .module('app.components')
    .component('pageCardsCard', {
      templateUrl: 'components/page/cards/card/card.html',
      bindings: {
        ref: '@',
        authData: '<',
        isEven: '<'
      }
    });
}());
