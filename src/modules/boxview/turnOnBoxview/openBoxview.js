import boxview from '../../document/createDialog.js';
import getElementTarget from './getElementTarget.js';
import prepareMediaElements from './prepareMediaElements.js';
import checkMediaElementsTypes from './checkMediaElementsTypes.js';
import getInitialMedia from './getInitialMedia.js';
import showThumbnailsTrack from '../thumbnailsTrack/showThumbnailsTrack.js';
import toggleThumbnailsMode from '../thumbnailsTrack/toggleThumbnailsMode.js';
import {
  nextButton,
  previousButton,
  fullscreenButton,
  thumbnailsShowButton,
  thumbnailsHideButton,
  boxviewThumbnailsTrack,
} from '../../document/docConstants.js';
import handleNextButton from '../controlbar/handleNextButton.js';
import handlePreviousButton from '../controlbar/handlePreviousButton.js';
import toggleFullScreenMode from '../controlbar/toggleFullScreenMode.js';
import isOverflowing from '../thumbnailsTrack/isOverflowing.js';

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

  fullscreenButton.addEventListener('click', toggleFullScreenMode);

  // Show modal
  boxview.showModal();

  // Create a scroll bar margin if a thumbnails track is over flowing
  isOverflowing(boxviewThumbnailsTrack);
}
