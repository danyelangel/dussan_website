(function () {
  'use strict';
  class Controller {
    constructor($document, $scope, Auth) {
      this.$document = $document;
      this.$scope = $scope;
      this.Auth = Auth;
    }
    get authData() {
      return this.Auth.authData;
    }
    $onInit() {
      let element = this.$document[0].getElementById('main');
      angular.element(element).bind('scroll', () => {
        if (element.scrollTop >= 50) {
          this.hasScrolled = true;
        } else {
          this.hasScrolled = false;
        }
        this.$scope.$apply();
      });
    }
  }
  angular
    .module('dussanWebsite')
    .component('appEl', {
      templateUrl: '_app/app.html',
      controller: Controller
    });
}());
