import { boxviewMainContent } from '../../document/docConstants.js';
import handleNextElement from '../controlbar/handleNextElement.js';
import handlePreviousElement from '../controlbar/handlePreviousElement.js';
import { mediaElements } from './openBoxview.js';

export const handleTouchSwipeNav = {
  touches: {
    touchstart: { x: -1, y: -1 },
    touchmove: { x: -1, y: -1 },
    touchend: false,
    direction: 'undetermined',
  },
  touchHandler: function (event) {
    let touch;
    if (typeof event !== 'undefined') {
      if (typeof event.touches !== 'undefined') {
        touch = event.touches[0];
        switch (event.type) {
          case 'touchstart':
          case 'touchmove':
            handleTouchSwipeNav.touches[event.type].x = touch.pageX;
            handleTouchSwipeNav.touches[event.type].y = touch.pageY;

            break;
          case 'touchend':
            handleTouchSwipeNav.touches.touchend = true;
            if (
              handleTouchSwipeNav.touches.touchstart.x > -1 &&
              handleTouchSwipeNav.touches.touchmove.x > -1
            ) {
              handleTouchSwipeNav.touches.direction =
                handleTouchSwipeNav.touches.touchstart.x <
                handleTouchSwipeNav.touches.touchmove.x
                  ? 'right'
                  : 'left';

              if (handleTouchSwipeNav.touches.direction === 'right') {
                handlePreviousElement(mediaElements.preparedMediaElements);
              }
              if (handleTouchSwipeNav.touches.direction === 'left') {
                handleNextElement(mediaElements.preparedMediaElements);
              }
            }
          default:
            break;
        }
      }
    }
  },
  init: function () {
    boxviewMainContent.addEventListener(
      'touchstart',
      handleTouchSwipeNav.touchHandler,
      false
    );
    boxviewMainContent.addEventListener(
      'touchmove',
      handleTouchSwipeNav.touchHandler,
      false
    );
    boxviewMainContent.addEventListener(
      'touchend',
      handleTouchSwipeNav.touchHandler,
      false
    );
  },
};
