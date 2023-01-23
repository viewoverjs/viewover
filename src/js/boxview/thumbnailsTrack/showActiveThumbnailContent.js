// Show thumbnails track media
import { activeMainElement } from '../mainContent/createMediaElement.js';

export default function showActiveThumbnailContent(url) {
  if (activeMainElement.element.localName === 'video') {
    activeMainElement.element.querySelector('source').setAttribute('src', url);
    activeMainElement.element.load();
  } else {
    activeMainElement.element.setAttribute('src', url);
  }
}
