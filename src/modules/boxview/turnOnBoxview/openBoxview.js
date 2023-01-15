// Boxview General
import boxview from '../../document/createDialog.js';
import getElementTarget from './getElementTarget.js';
import prepareMediaElements from './prepareMediaElements.js';
import checkMediaElementsTypes from './checkMediaElementsTypes.js';
import getInitialMedia from './getInitialMedia.js';

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
} from '../../document/docConstants.js';

// Nav Buttons
import handleNextButton from '../controlbar/handleNextButton.js';
import handlePreviousButton from '../controlbar/handlePreviousButton.js';

// FullScreen
import toggleFullScreenMode from '../controlbar/toggleFullScreenMode.js';

// Thumbnails Track Mode
import showThumbnailsTrack from '../thumbnailsTrack/showThumbnailsTrack.js';
import toggleThumbnailsMode from '../thumbnailsTrack/toggleThumbnailsMode.js';
import isOverflowing from '../thumbnailsTrack/isOverflowing.js';

// Adding events to control bar buttons
import controlbarAddEvents from '../controlbar/controlbarAddEvents.js';
controlbarAddEvents();



// Open Boxview Dialog
export default function openBoxview(e) {
  const elementTarget = getElementTarget(e);
  const preparedMediaElements = prepareMediaElements(elementTarget);
  const mediaElementsTypes = checkMediaElementsTypes(preparedMediaElements);

  // Get initial media target element
  getInitialMedia(mediaElementsTypes, elementTarget);

  // Media navigation
  const handleArrowKeydown = (e) => {
    // const isThumbnailsTrackActive = document.activeElement === boxviewThumbnailsTrack;

    // console.log(isThumbnailsTrackActive);

    if (e.key === 'ArrowLeft') {
      handlePreviousButton(preparedMediaElements);
    }
    if (e.key === 'ArrowRight') {
      handleNextButton(preparedMediaElements);
    }
  };

  // Thumbnails
  showThumbnailsTrack(preparedMediaElements);

  // Defining an initial state for thumbnails mode on open boxview
  toggleThumbnailsMode(true);

  // Thumbnails button
  thumbnailsShowButton.addEventListener('click', toggleThumbnailsMode);
  thumbnailsHideButton.addEventListener('click', toggleThumbnailsMode);

  // Next button
  nextButton.onclick = () => {
    handleNextButton(preparedMediaElements);
  };

  // Previous button
  previousButton.onclick = () => {
    handlePreviousButton(preparedMediaElements);
  };

  document.addEventListener('keydown', handleArrowKeydown);

  // const clickedOnScrollbar = (mouseX) => {
  //   if (boxviewThumbnailsTrack.outerWidth <= mouseX) {
  //     return true;
  //   }
  // };

  // boxviewThumbnailsTrack.addEventListener('scroll', (e) => {
  //   console.log('clicked on scrollbar');
  // });

  // Fullscreen
  fullscreenEntryButton.addEventListener('click', toggleFullScreenMode);
  fullscreenExitButton.addEventListener('click', toggleFullScreenMode);

  // Show modal
  boxview.showModal();

  // Create a scroll bar margin if a thumbnails track is over flowing
  isOverflowing(boxviewThumbnailsTrack);

 
}
