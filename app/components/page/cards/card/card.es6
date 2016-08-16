(function () {
  'use strict';
  class Controller {
    getGradient(colors, revert) {
      let returnable;
      if (colors && colors.length && colors.length > 2) {
        returnable = `background: ${colors[0]};
              background: -moz-linear-gradient(${revert ? '45deg' : '135deg'}, ${colors[0]} 0%, ${colors[2]} 50%, ${colors[1]} 100%);
              background: -webkit-linear-gradient(${revert ? '45deg' : '135deg'}, ${colors[0]} 0%,${colors[2]} 50%,${colors[1]} 100%);
              background: linear-gradient(${revert ? '45deg' : '135deg'}, ${colors[0]} 0%,${colors[2]} 50%,${colors[1]} 100%);
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${colors[0]}', endColorstr='${colors[1]}',GradientType=1 );`;
      }
      return returnable;
    }
  }
  angular
    .module('app.components')
    .component('pageCardsCard', {
      templateUrl: 'components/page/cards/card/card.html',
      controller: Controller,
      bindings: {
        ref: '@',
        isEven: '<',
        onReady: '&',
        onMoveUp: '&',
        onMoveDown: '&'
      }
    });
}());
