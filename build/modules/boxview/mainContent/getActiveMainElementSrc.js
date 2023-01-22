import { activeMainElement } from './createMediaElement.js';
export default function getActiveMainElementSrc() {
  let url = activeMainElement.element.localName === 'iframe' ? activeMainElement.element.src : activeMainElement.element.currentSrc;
  return url;
}