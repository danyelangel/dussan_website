(function () {
  'use strict';
  class Controller {
    constructor($firebaseObject, $firebaseArray, $window, $timeout) {
      this.$firebaseObject = $firebaseObject;
      this.$firebaseArray = $firebaseArray;
      this.firebase = $window.firebase.database();
      this.$timeout = $timeout;
    }
    $onChanges(changes) {
      angular.forEach(changes, (value, key) => {
        this.destroyFb(key);
        if (value.currentValue) {
          this.updateFb(value.currentValue, key);
        }
      });
    }
    updateFb(value, key) {
      let ref;
      switch (key) {
        case 'fdObjectRef':
          ref = this.firebase.ref(value);
          this.fbObject = this.$firebaseObject(ref);
          this.ngfire = this.fbObject;
          this.watch(this.fbObject);
          break;
        case 'fdArrayRef':
          ref = this.firebase.ref(value);
          this.fbArray = this.$firebaseArray(ref);
          this.ngfire = this.fbArray;
          this.watch(this.fbArray);
          break;
        case 'fdRelationship':
          ref = this.firebase.ref(value);
          this.relArray = this.$firebaseArray(ref);
          break;
        default:
          return false;
      }
    }
    watch(ngfire) {
      ngfire.$loaded(() => {
        this.$timeout(() => {
          if (ngfire.length === 0 && ngfire.$add) {
            ngfire.$add({exists: true});
          }
        });
      });
      ngfire.$watch(() => {
        this.fdOnData({
          $data: ngfire
        });
      });
    }
    destroyFb(key) {
      switch (key) {
        case 'fdObjectRef':
          if (this.fbObject) {
            this.fbObject.$destroy();
          }
          break;
        case 'fdArrayRef':
          if (this.fbArray) {
            this.fbArray.$destroy();
          }
          break;
        default:
          return false;
      }
    }
    $onDestroy() {
      if (this.fdRemoveOnDestroy) {
        console.log('REMOVE');
        this.ngfire.$remove().then(() => {
          this.ngfire.$destroy();
          this.ngfire = undefined;
        });
      } else {
        this.ngfire.$destroy();
        this.ngfire = undefined;
      }
    }
  }
  angular
    .module('dussanWebsite')
    .component('firedux', {
      template: '<ng-transclude></ng-transclude>',
      transclude: true,
      controller: Controller,
      bindings: {
        fdObjectRef: '@',
        fdArrayRef: '@',
        fdArrayModel: '<',
        fdRelationship: '@',
        fdOnData: '&',
        fdRemoveOnDestroy: '<'
      }
    });
}());
