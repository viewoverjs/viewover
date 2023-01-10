// Show thumbnails track media
import { boxviewActiveMedia } from "../mainContent/createMediaElement.js";

export default function showThumbnailsTrackMedia(url) {
  if (boxviewActiveMedia.element.localName === 'video') {
    boxviewActiveMedia.element.querySelector('source').setAttribute('src', url);
    boxviewActiveMedia.element.load();
  } else {
    boxviewActiveMedia.element.setAttribute('src', url);
  }
}
