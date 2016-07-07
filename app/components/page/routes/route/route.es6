(function () {
  'use strict';
  angular
    .module('app.components')
    .component('pageRoutesRoute', {
      templateUrl: '/components/page/routes/route/route.html',
      bindings: {
        title: '<',
        text: '<',
        media: '<',
        pageId: '<'
      }
    });
}());
