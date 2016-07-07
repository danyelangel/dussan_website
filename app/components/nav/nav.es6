(function () {
  'use strict';
  class Controller {
    constructor($mdSidenav, $state, Auth, $element) {
      this.$mdSidenav = $mdSidenav;
      this.$state = $state;
      this.Auth = Auth;
      this.$element = $element;
    }
    get authData() {
      return this.Auth.authData;
    }
    get collapsed() {
      return this.collapsedProp;
    }
    set collapsed(collapsed) {
      this.collapsedProp = collapsed;
      if (collapsed) {
        this.$element.addClass('isExpanded');
      } else {
        this.$element.removeClass('isExpanded');
      }
    }
    toggleMenu() {
      this.$mdSidenav('sidenav').toggle();
    }
    goToHome() {
      this.$state.go('page', {
        pageId: 'home'
      });
    }
    logout() {
      this.Auth.logout();
    }
  }
  angular
    .module('app.components')
    .component('navEl', {
      templateUrl: 'components/nav/nav.html',
      controller: Controller,
      bindings: {
        logoSrc: '<',
        menu: '<'
      }
    });
}());
