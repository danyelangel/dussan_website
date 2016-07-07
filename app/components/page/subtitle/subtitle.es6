(function () {
  'use strict';
  angular
    .module('app.components')
    .component('pageSubtitle', {
      templateUrl: 'components/page/subtitle/subtitle.html',
      bindings: {
        ref: '@'
      }
    });
}());
