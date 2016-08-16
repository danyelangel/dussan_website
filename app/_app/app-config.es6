(function () {
  'use strict';

  function run($firedux) {
    $firedux.init({
      apiKey: 'AIzaSyAwgonfVGpmNr2TNb8RAB8bIWZPHiYK5uI',
      authDomain: 'dussan-website.firebaseapp.com',
      databaseURL: 'https://dussan-website.firebaseio.com',
      storageBucket: 'dussan-website.appspot.com'
    });
  }
  angular
    .module('dussanWebsite')
    .run(run);
}());
