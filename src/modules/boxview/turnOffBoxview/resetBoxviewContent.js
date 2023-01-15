import {
  boxviewMediaWrapper,
  boxviewThumbnailsTrack,
} from '../../document/docConstants.js';
import { activeMainElement } from '../mainContent/createMediaElement.js';
import { activeImage } from '../controlbar/handleZoom.js';

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
}
