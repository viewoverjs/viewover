import {
  boxviewMediaWrapper,
  boxviewThumbnailsTrack,
} from '../../document/docConstants.js';
import { boxviewActiveMedia } from '../mainContent/createMediaElement.js';

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
  delete boxviewActiveMedia.element;
}
