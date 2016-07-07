(function () {
  'use strict';

  angular
    .module('dussanWebsite')
    .config(config);

  class Controller {
    constructor($stateParams, Auth) {
      this.pageId = $stateParams.pageId;
      this.Auth = Auth;
    }
    get authData() {
      return this.Auth.authData;
    }
  }
  function pageExists($state, $stateParams, $firebaseObject, $window, $anchorScroll) {
    let pageId = $stateParams.pageId,
        ref = $window.firebase.database().ref(`pages/${pageId}`),
        fb = $firebaseObject(ref);
    $anchorScroll('scrollTop');
    return fb.$loaded(() => {
      if (!fb.exists && pageId !== 'home') {
        $state.go('page', {pageId: 'home'});
      }
    });
  }
  function config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('page', {
        url: '/:pageId',
        template: '<page-el page-id="{{vm.pageId}}" auth-data="vm.authData"></page-el>',
        controller: Controller,
        resolve: {
          pageExists: pageExists
        },
        controllerAs: 'vm'
      });
  }
}());
