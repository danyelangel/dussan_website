(function () {
  'use strict';
  class Controller {
    onReady() {
      this.ready = true;
    }
  }
  angular
    .module('app.components', [])
    .component('pageEl', {
      templateUrl: 'components/page/page.html',
      controller: Controller,
      bindings: {
        pageId: '@',
        authData: '<'
      }
    });
}());
