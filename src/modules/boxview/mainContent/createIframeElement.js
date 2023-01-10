import {
  boxviewMediaWrapper
} from '../../document/docConstants.js';
import removeBoxviewMediaWrapperChildren from './removeBoxviewMediaWrapperChildren.js';
import {
  createMediaElement,
  boxviewActiveMedia,
} from './createMediaElement.js';
import { hideZoomButtons } from '../controlbar/displayZoomButtons.js';

export default function createIframeElement(url) {
  if (boxviewMediaWrapper.children.length !== 0) {
    removeBoxviewMediaWrapperChildren();
  }

  createMediaElement('iframe');
  boxviewActiveMedia.element.setAttribute('src', url);
  boxviewMediaWrapper.appendChild(boxviewActiveMedia.element);

  // zoom buttons
  hideZoomButtons();
}
