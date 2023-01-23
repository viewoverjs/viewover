// Boxview General
import boxview from '../../document/createDialog.js';
import getElementTarget from './getElementTarget.js';
import prepareMediaElements from './prepareMediaElements.js';
import checkMediaElementsTypes from './checkMediaElementsTypes.js';
import getInitialMedia from './getInitialMedia.js';
import { disableScroll } from '../../utils/scroll-control.js';

// Constants
// Imported after boxview^, because constants HTML elements are loaded only after boxview import
import {
  nextButton,
  previousButton,
  fullscreenEntryButton,
  fullscreenExitButton,
  thumbnailsShowButton,
  thumbnailsHideButton,
  boxviewThumbnailsTrack,
  boxviewMainContent,
  boxviewMediaWrapper,
  fullscreenButtons,
  thumbnailsButtons,
} from '../../document/docConstants.js';

import { handleTouchSwipeNav } from './handleTouchSwipeNav.js';
import handleArrowNav from './handleArrowNav.js';
import handleWheelNav from './handleWheelNav.js';

// Nav Buttons
import handleNextElement from '../controlbar/handleNextElement.js';
import handlePreviousElement from '../controlbar/handlePreviousElement.js';

// FullScreen
import toggleFullScreenMode from '../controlbar/toggleFullScreenMode.js';

// Thumbnails Track Mode
import handleThumbnails from '../thumbnailsTrack/handleThumbnails.js';
import toggleThumbnailsMode from '../thumbnailsTrack/toggleThumbnailsMode.js';
import toggleActiveThumbnail from '../thumbnailsTrack/toggleActiveThumbnail.js';
import {
  setScrollbarHeight,
  scrollThumbnailToViewport,
} from '../thumbnailsTrack/handleThumbnailsOverflow.js';

// Adding events to control bar buttons
import controlbarAddEvents from '../controlbar/controlbarAddEvents.js';

export const mediaElements = {};

// Open Boxview Dialog
export const openBoxview = async (e, settings) => {
  const elementTarget = getElementTarget(e);
  const elementTargetSrc = elementTarget.src || elementTarget.currentSrc;

  mediaElements.preparedMediaElements = prepareMediaElements(elementTarget);
  const mediaElementsTypes = checkMediaElementsTypes(
    mediaElements.preparedMediaElements
  );

  mediaElements.enableZoom = settings.zoom;

  // Get initial media target element
  getInitialMedia(mediaElementsTypes, elementTarget);

  // Media Navigation
  // Next button
  nextButton.onclick = () => {
    handleNextElement(mediaElements.preparedMediaElements);
  };
  // Previous button
  previousButton.onclick = () => {
    handlePreviousElement(mediaElements.preparedMediaElements);
  };
  // Arrows buttons
  document.addEventListener('keydown', handleArrowNav);
  // Touchmove
  handleTouchSwipeNav.init();

  // Wheel
  // boxviewMainContent.addEventListener('wheel', handleWheelNav);

  // Thumbnails button
  thumbnailsShowButton.addEventListener('click', toggleThumbnailsMode);
  thumbnailsHideButton.addEventListener('click', toggleThumbnailsMode);

  // const clickedOnScrollbar = (mouseX) => {
  //   if (boxviewThumbnailsTrack.outerWidth <= mouseX) {
  //     return true;
  //   }
  // };

  // boxviewThumbnailsTrack.addEventListener('scroll', (e) => {
  //   console.log('clicked on scrollbar');
  // });

  // Fullscreen
  if (settings.fullscreen == true) {
    fullscreenEntryButton.addEventListener('click', toggleFullScreenMode);
    fullscreenExitButton.addEventListener('click', toggleFullScreenMode);
    boxviewMediaWrapper.addEventListener('dblclick', toggleFullScreenMode);
  } else {
    fullscreenButtons.classList.add('boxview__fullscreen-buttons_hidden');
  }

  disableScroll();

  // Show modal
  boxview.showModal();

  controlbarAddEvents(settings);

  // Thumbnails
  if (settings.thumbnails == true) {
    await handleThumbnails(mediaElements.preparedMediaElements, false);

    const thumbnailsTrackList = [...boxviewThumbnailsTrack.children];
    const currentThumbnail = thumbnailsTrackList.find(
      (thumbnailWrapper) =>
        thumbnailWrapper
          .querySelector('.boxview__thumbnail')
          .getAttribute('data-boxview-thumbnail-src') === elementTargetSrc
    );

    toggleActiveThumbnail(currentThumbnail);

    // Create a scroll bar margin if a thumbnails track is over flowing
    setScrollbarHeight();

    // Defining an initial state for thumbnails mode on open boxview

    scrollThumbnailToViewport(currentThumbnail);
  } else {
    thumbnailsButtons.classList.add('boxview__thumbnails-buttons_hidden');
  }
};
