(function () {
  'use strict';
  class Controller {
    constructor(Storage, Auth) {
      this.Storage = Storage;
      this.Auth = Auth;
    }
    get authData() {
      return this.Auth.authData;
    }
    $onChanges(changes) {
      angular.forEach(changes, (key, value) => {
        if (angular.isObject(value.currentValue)) {
          this[key] = Object.assign({}, value.currentValue);
        }
      });
    }
    delete() {
      Promise.resolve()
        .then(() => {
          return this.Storage.remove(this.data.fileRef);
        })
        .then(() => {
          this.onUpdate({
            $data: null
          });
        });
    }
    update(file) {
      let fileRef;
      if (file) {
        Promise.resolve()
          .then(() => {
            return this.Storage.upload(file);
          })
          .then((ref) => {
            let promise = Promise.resolve();
            fileRef = ref;
            if (angular.isObject(this.data)) {
              promise = this.Storage.remove(this.data.fileRef);
            }
            return promise;
          })
          .then(() => {
            this.onUpdate({
              $data: fileRef
            });
          });
      }
    }
  }
  angular
    .module('dussanWebsite')
    .component('wcMedia', {
      templateUrl: 'components/_editor/wc-media/wc-media.html',
      controller: Controller,
      bindings: {
        data: '<',
        dimensions: '<',
        isBackground: '<',
        onClick: '&',
        onUpdate: '&'
      }
    });
}());
