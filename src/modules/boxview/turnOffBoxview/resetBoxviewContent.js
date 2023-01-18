import {
  boxviewMediaWrapper,
  boxviewThumbnailsTrack,
  boxviewMainContent,
} from '../../document/docConstants.js';
import { activeMainElement } from '../mainContent/createMediaElement.js';
import { activeImage } from '../controlbar/handleZoom.js';
import { enableScroll } from '../../../utils/scroll-control.js';
import handleArrowNav from '../turnOnBoxview/handleArrowNav.js';
import handleWheelNav from '../turnOnBoxview/handleWheelNav.js';
import toggleFullScreenMode from '../controlbar/toggleFullScreenMode.js';

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
  boxviewMainContent.removeEventListener('dblclick', toggleFullScreenMode);
}
