import { viewoverMediaWrapper } from '../../document/docConstants.js';
import removeViewoverMediaWrapperChildren from './removeViewoverMediaWrapperChildren.js';
import { createMediaElement, activeMainElement } from './createMediaElement.js';
import { mediaElements } from '../turnOnViewover/openViewover.js';
// import handleScrollByMousemove from '../turnOnViewover/handleScrollByMousemove.js';

// Zoom Buttons
import {
  showZoomButtons,
  enableZoomButtons,
  hideZoomButtons,
} from '../controlbar/displayZoomButtons.js';
import { handleZoomWheel } from '../controlbar/handleZoom.js';

export default async function setActiveMainElement(type, url) {
  if (viewoverMediaWrapper.children.length !== 0) {
    removeViewoverMediaWrapperChildren();
  }

  createMediaElement(type, url);
  viewoverMediaWrapper.appendChild(activeMainElement.element);

  // zoom buttons
  if (type === 'video' || type === 'iframe') {
    hideZoomButtons();
  }

  if (type === 'img') {
 

    // Zoom wheel
    if (mediaElements.enableZoom == true) {
      activeMainElement.element.removeEventListener('wheel', handleZoomWheel);
      activeMainElement.element.addEventListener('wheel', handleZoomWheel);

      // zoom buttons
      showZoomButtons();
      enableZoomButtons();
    }
  }

  if (type === 'video') {
    activeMainElement.element.load();
  }

  activeMainElement.element.style.transition =
    'var(--viewover-media-transition)';
}
