(function () {
  'use strict';
  angular
    .module('app.components')
    .component('footerEl', {
      templateUrl: 'components/footer/footer.html',
      bindings: {
        logoSrc: '<',
        address: '<',
        phone: '<',
        email: '<'
      }
    });
}());
