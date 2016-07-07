(function () {
  'use strict';

  angular
    .module('dussanWebsite')
    .run(run);

  function run($window) {
    let fbConfig = {
      apiKey: 'AIzaSyAwgonfVGpmNr2TNb8RAB8bIWZPHiYK5uI',
      authDomain: 'dussan-website.firebaseapp.com',
      databaseURL: 'https://dussan-website.firebaseio.com',
      storageBucket: 'dussan-website.appspot.com'
    };
    $window.firebase.initializeApp(fbConfig);
  }
}());
