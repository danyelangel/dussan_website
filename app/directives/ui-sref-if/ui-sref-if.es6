(function () {
  'use strict';
  angular.module('app.components')
    .directive('uiSrefIf', function ($compile) {
      return {
        scope: {
          val: '@uiSrefVal',
          if: '=uiSrefIf'
        },
        link: function ($scope, $element) {
          $element.removeAttr('ui-sref-if');
          $compile($element)($scope);

          $scope.$watch('if', function (bool) {
            if (bool) {
              $element.attr('ui-sref', $scope.val);
            } else {
              $element.removeAttr('ui-sref');
              $element.removeAttr('href');
            }
            $compile($element)($scope);
          });
        }
      };
    });
}());