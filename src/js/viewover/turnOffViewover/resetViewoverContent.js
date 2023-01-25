import {
  viewoverMediaWrapper,
  viewoverThumbnailsTrack,
  viewoverMainContent,
  thumbnailsHideButton,
  thumbnailsShowButton,
  viewoverContainer,
} from '../../document/docConstants.js';
import { activeMainElement } from '../mainContent/createMediaElement.js';
import { enableScroll } from '../../utils/scroll-control.js';
import handleArrowNav from '../turnOnViewover/handleArrowNav.js';
import handleWheelNav from '../turnOnViewover/handleWheelNav.js';
import toggleFullScreenMode from '../controlbar/toggleFullScreenMode.js';
import toggleButtonIcon from '../controlbar/toggleButtonIcon.js';
import { handleZoomWheel } from '../controlbar/handleZoom.js';

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

export default function resetViewoverContent() {
  const viewoverMediaChildren = [...viewoverMediaWrapper.children];
  viewoverMediaChildren.forEach((element) => {
    if (!element.classList.contains('button')) {
      element.remove();
    }
  });
  removeAllChildNodes(viewoverThumbnailsTrack);

  enableScroll();
  document.removeEventListener('keydown', handleArrowNav);
  viewoverMainContent.removeEventListener('wheel', handleWheelNav);
  viewoverMediaWrapper.removeEventListener('dblclick', toggleFullScreenMode);

  // Zoom Button
  activeMainElement.element.removeEventListener('wheel', handleZoomWheel);

  toggleButtonIcon(thumbnailsHideButton, thumbnailsShowButton);
  viewoverThumbnailsTrack.classList.remove(
    'viewover__thumbnails-track_visible'
  );
  viewoverContainer.style.setProperty('--thumbnails-track-height', '0px');
  viewoverContainer.style.setProperty(
    '--viewover-thumbnails-track-margin',
    '0px'
  );

  delete activeMainElement.element;

  viewover.close();
}
