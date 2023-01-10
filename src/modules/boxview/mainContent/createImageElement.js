import {
  boxviewMediaWrapper,
  zoomInButton,
  zoomOutButton,
} from '../../document/docConstants.js';

import removeBoxviewMediaWrapperChildren from './removeBoxviewMediaWrapperChildren.js';
import {
  createMediaElement,
  boxviewActiveMedia,
} from './createMediaElement.js';
import { showZoomButtons } from '../controlbar/displayZoomButtons.js';
import ClickAndHoldEvent from '../../classes/ClickAndHoldEvent.js';
import {
  handleZoomInButton,
  handleZoomOutButton,
  handleZoomWheel,
} from '../controlbar/handleZoom.js';

export default function createImageElement(url) {
  if (boxviewMediaWrapper.children.length !== 0) {
    removeBoxviewMediaWrapperChildren();
  }

  createMediaElement('img');
  boxviewActiveMedia.element.setAttribute('src', url);
  boxviewMediaWrapper.appendChild(boxviewActiveMedia.element);

  // Zoom wheel
  boxviewActiveMedia.element.addEventListener('wheel', handleZoomWheel);

  // zoom buttons
  showZoomButtons();
  ClickAndHoldEvent.apply(zoomInButton, handleZoomInButton);
  ClickAndHoldEvent.apply(zoomOutButton, handleZoomOutButton);
}
