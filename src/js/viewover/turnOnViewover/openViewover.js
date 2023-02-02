// Viewover General
import viewover from '../../document/createDialog.js';
import getElementTarget from './getElementTarget.js';
import prepareMediaElements from './prepareMediaElements.js';
import checkMediaElementsTypes from './checkMediaElementsTypes.js';
import getInitialMedia from './getInitialMedia.js';
import { disableScroll } from '../../utils/scroll-control.js';

// Constants
// Imported after viewover^, because constants HTML elements are loaded only after viewover import
import {
  nextButton,
  previousButton,
  fullscreenEntryButton,
  fullscreenExitButton,
  thumbnailsShowButton,
  thumbnailsHideButton,
  viewoverThumbnailsTrack,
  viewoverMainContent,
  viewoverMediaWrapper,
  fullscreenButtons,
  thumbnailsButtons,
} from '../../document/docConstants.js';

import { handleTouchSwipeNav } from './handleTouchSwipeNav.js';
import {handleKeydown} from './handleKeydown.js';
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
export let handleArrowNav;

// Open Viewover Dialog
export const openViewover = async (e, options) => {
  const elementTarget = getElementTarget(e);
  const elementTargetSrc = elementTarget.src || elementTarget.currentSrc;

  mediaElements.preparedMediaElements = prepareMediaElements(elementTarget);
  const mediaElementsTypes = checkMediaElementsTypes(
    mediaElements.preparedMediaElements
  );

  mediaElements.enableZoom = options.zoom;

  // Get initial media target element
  getInitialMedia(mediaElementsTypes, elementTarget);

  // Media Navigation
  // Next button
  nextButton.onclick = () => {
    handleNextElement(options);
  };
  // Previous button
  previousButton.onclick = () => {
    handlePreviousElement(options);
  };
  // Arrows buttons
  handleArrowNav = (e) => handleKeydown(e, options);
  document.addEventListener('keydown', handleArrowNav);
  // Touchmove
  handleTouchSwipeNav.init();

  // Wheel
  // viewoverMainContent.addEventListener('wheel', handleWheelNav);

  // Thumbnails button
  thumbnailsShowButton.addEventListener('click', toggleThumbnailsMode);
  thumbnailsHideButton.addEventListener('click', toggleThumbnailsMode);

  // const clickedOnScrollbar = (mouseX) => {
  //   if (viewoverThumbnailsTrack.outerWidth <= mouseX) {
  //     return true;
  //   }
  // };

  // viewoverThumbnailsTrack.addEventListener('scroll', (e) => {
  //   console.log('clicked on scrollbar');
  // });

  // Fullscreen
  if (options.fullscreen == true) {
    fullscreenEntryButton.addEventListener('click', toggleFullScreenMode);
    fullscreenExitButton.addEventListener('click', toggleFullScreenMode);
    viewoverMediaWrapper.addEventListener('dblclick', toggleFullScreenMode);
  } else {
    fullscreenButtons.classList.add('viewover__fullscreen-buttons_hidden');
  }

  disableScroll();

  // Show modal
  viewover.showModal();

  controlbarAddEvents(options);

  // Thumbnails
  if (options.thumbnails == true) {
    await handleThumbnails(mediaElements.preparedMediaElements, false);

    const thumbnailsTrackList = [...viewoverThumbnailsTrack.children];
    const currentThumbnail = thumbnailsTrackList.find(
      (thumbnailWrapper) =>
        thumbnailWrapper
          .querySelector('.viewover__thumbnail')
          .getAttribute('data-viewover-thumbnail-src') === elementTargetSrc
    );

    toggleActiveThumbnail(currentThumbnail);

    // Create a scroll bar margin if a thumbnails track is over flowing
    setScrollbarHeight();

    // Defining an initial state for thumbnails mode on open viewover

    scrollThumbnailToViewport(currentThumbnail);
  } else {
    thumbnailsButtons.classList.add('viewover__thumbnails-buttons_hidden');
  }
};
