(function () {
  'use strict';
  angular
    .module('app.components')
    .component('pageRoutes', {
      templateUrl: '/components/page/routes/routes.html',
      bindings: {
        routes: '<'
      }
    });
}());
