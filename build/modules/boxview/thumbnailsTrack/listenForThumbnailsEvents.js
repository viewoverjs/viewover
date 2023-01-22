import { boxviewThumbnailsTrack } from '../../document/docConstants.js';
import { activeImage } from '../controlbar/handleZoom.js';

// Boxview General
import { activeMainElement } from '../mainContent/createMediaElement.js';
import setActiveMainElement from '../mainContent/setActiveMainElement.js';
import showActiveThumbnailContent from './showActiveThumbnailContent.js';
import toggleActiveThumbnail from './toggleActiveThumbnail.js';
import { scrollThumbnailToViewport } from './handleThumbnailsOverflow.js';
export default function listenForThumbnailsEvents() {
  const thumbnailsTrackList = [...boxviewThumbnailsTrack.children];
  for (let i = 0; i < thumbnailsTrackList.length; i++) {
    const thumbnailWrapper = thumbnailsTrackList[i];
    const thumbnail = thumbnailWrapper.querySelector('.boxview__thumbnail');
    const elementType = thumbnail.getAttribute('data-boxview-thumbnail-type');
    if (elementType === 'img') {
      const thumbnailUrl = thumbnail.getAttribute('data-boxview-thumbnail-src');
      thumbnailWrapper.addEventListener('click', () => {
        if (activeMainElement.element.localName === 'img') {
          if (activeMainElement.element.src === thumbnailUrl) {
            return;
          }
          showActiveThumbnailContent(thumbnailUrl);
          activeImage.imageScale = 1;
          activeMainElement.element.style.transition = 'none';
          activeMainElement.element.style.transform = `scale(${activeImage.imageScale})`;
        } else {
          setActiveMainElement('img', thumbnailUrl);
        }
        toggleActiveThumbnail(thumbnailWrapper);
        scrollThumbnailToViewport(thumbnailWrapper);
      });
      continue;
    }
    if (elementType === 'video') {
      const thumbnailUrl = thumbnail.getAttribute('data-boxview-thumbnail-src');
      thumbnailWrapper.addEventListener('click', e => {
        if (activeMainElement.element.localName === 'video') {
          if (activeMainElement.element.currentSrc === thumbnailUrl) {
            return;
          }
          showActiveThumbnailContent(thumbnailUrl);
        } else {
          setActiveMainElement('video', thumbnailUrl);
        }
        toggleActiveThumbnail(thumbnailWrapper, thumbnailsTrackList);
        scrollThumbnailToViewport(thumbnailWrapper);
      });
      continue;
    }
    if (elementType === 'iframe') {
      const thumbnailUrl = thumbnail.getAttribute('data-boxview-thumbnail-src');
      thumbnailWrapper.addEventListener('click', e => {
        if (activeMainElement.element.localName === 'iframe') {
          if (activeMainElement.element.src === thumbnailUrl) {
            return;
          }
          showActiveThumbnailContent(thumbnailUrl);
        } else {
          setActiveMainElement('iframe', thumbnailUrl);
        }
        toggleActiveThumbnail(thumbnailWrapper, thumbnailsTrackList);
        scrollThumbnailToViewport(thumbnailWrapper);
      });
      continue;
    }
  }
}