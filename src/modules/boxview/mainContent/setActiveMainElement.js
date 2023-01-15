import {
  boxviewMediaWrapper,
  zoomInButton,
  zoomOutButton,
} from '../../document/docConstants.js';
import removeBoxviewMediaWrapperChildren from './removeBoxviewMediaWrapperChildren.js';
import { createMediaElement, activeMainElement } from './createMediaElement.js';
import { hideZoomButtons } from '../controlbar/displayZoomButtons.js';

// Zoom Buttons
import { showZoomButtons } from '../controlbar/displayZoomButtons.js';
import ClickAndHoldEvent from '../../classes/ClickAndHoldEvent.js';
import {
  handleZoomInButton,
  handleZoomOutButton,
  handleZoomWheel,
} from '../controlbar/handleZoom.js';

export default function setActiveMainElement(type, url) {
  if (boxviewMediaWrapper.children.length !== 0) {
    removeBoxviewMediaWrapperChildren();
  }

  createMediaElement(type, url);
  boxviewMediaWrapper.appendChild(activeMainElement.element);
  if (type === 'video') {
    activeMainElement.element.load();
  }

  // zoom buttons
  if (type === 'video' || type === 'iframe') {
    hideZoomButtons();
  }
  if (type === 'img') {
    // Zoom wheel
    activeMainElement.element.addEventListener('wheel', handleZoomWheel);

    // zoom buttons
    showZoomButtons();
    ClickAndHoldEvent.apply(zoomInButton, handleZoomInButton);
    ClickAndHoldEvent.apply(zoomOutButton, handleZoomOutButton);
  }
}
