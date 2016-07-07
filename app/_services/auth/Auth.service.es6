(function () {
  'use strict';
  class Service {
    constructor($window) {
      let auth = $window.firebase.auth();
      this.auth = auth;
      this.authData = auth.currentUser;
      auth.onAuthStateChanged(user => {
        this.authData = user;
      });
    }
    logout() {
      this.auth.signOut();
    }
  }
  angular
    .module('dussanWebsite')
    .service('Auth', Service);
}());
