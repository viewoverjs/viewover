import {
  boxviewMediaWrapper,
  boxviewThumbnailsTrack,
  boxviewMainContent,
  thumbnailsHideButton,
  thumbnailsShowButton,
  boxviewContainer,
} from '../../document/docConstants.js';
import { activeMainElement } from '../mainContent/createMediaElement.js';
import { activeImage } from '../controlbar/handleZoom.js';
import { enableScroll } from '../../../utils/scroll-control.js';
import handleArrowNav from '../turnOnBoxview/handleArrowNav.js';
import handleWheelNav from '../turnOnBoxview/handleWheelNav.js';
import toggleFullScreenMode from '../controlbar/toggleFullScreenMode.js';
import toggleButtonIcon from '../controlbar/toggleButtonIcon.js';
import { handleZoomWheel } from '../controlbar/handleZoom.js';

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

export default function resetBoxviewContent() {
  const boxviewMediaChildren = [...boxviewMediaWrapper.children];
  boxviewMediaChildren.forEach((element) => {
    if (!element.classList.contains('button')) {
      element.remove();
    }
  });
  removeAllChildNodes(boxviewThumbnailsTrack);
  delete activeMainElement.element;
  activeImage.imageScale = 1;
  enableScroll();
  document.removeEventListener('keydown', handleArrowNav);
  boxviewMainContent.removeEventListener('wheel', handleWheelNav);
  activeMainElement.element.addEventListener('wheel', handleZoomWheel);
  boxviewMediaWrapper.removeEventListener('dblclick', toggleFullScreenMode);

  toggleButtonIcon(thumbnailsHideButton, thumbnailsShowButton);

  boxviewThumbnailsTrack.classList.remove('boxview__thumbnails-track_visible');
  boxviewContainer.style.setProperty('--thumbnails-track-height', '0px');
  boxviewContainer.style.setProperty(
    '--boxview-thumbnails-track-margin',
    '0px'
  );
}
