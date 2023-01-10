import {
  boxviewMediaWrapper
} from '../../document/docConstants.js';
import removeBoxviewMediaWrapperChildren from './removeBoxviewMediaWrapperChildren.js';
import {
  createMediaElement,
  boxviewActiveMedia,
} from './createMediaElement.js';
import { hideZoomButtons } from '../controlbar/displayZoomButtons.js';

export default function createVideoElement(url) {
  if (boxviewMediaWrapper.children.length !== 0) {
    removeBoxviewMediaWrapperChildren();
  }

  createMediaElement('video');
  const sourceElement = document.createElement('source');

  sourceElement.setAttribute('src', url);
  boxviewActiveMedia.element.setAttribute('controls', '');
  // sourceElement.setAttribute('type', 'video/mp4');

  boxviewActiveMedia.element.appendChild(sourceElement);
  boxviewMediaWrapper.appendChild(boxviewActiveMedia.element);
  boxviewActiveMedia.element.load();

  // zoom buttons
  hideZoomButtons();
}
