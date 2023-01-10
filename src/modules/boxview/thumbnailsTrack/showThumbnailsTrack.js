import {
  boxviewContainer,
  thumbnailsTrackHeight,
  boxviewThumbnailsTrack,
} from '../../document/docConstants.js';
import { boxviewActiveMedia } from '../mainContent/createMediaElement.js';
import createThumbnail from './createThumbnail.js';
import showThumbnailsTrackMedia from './showThumbnailsTrackMedia.js';
import createImageElement from '../mainContent/createImageElement.js';
import createVideoElement from '../mainContent/createVideoElement.js';
import createIframeElement from '../mainContent/createIframeElement.js';
import toggleActiveThumbnail from './toggleActiveThumbnail.js';

let thumbnailElement;

export default function showThumbnailsTrack(preparedMediaElements) {
  boxviewContainer.style.setProperty(
    '--thumbnails-track-height',
    thumbnailsTrackHeight
  );

  for (let i = 0; i < preparedMediaElements.length; i++) {
    const mediaElement = preparedMediaElements[i];

    if (mediaElement.localName === 'img') {
      thumbnailElement = createThumbnail(mediaElement.src);
      thumbnailElement.setAttribute('boxview-thumbnail-src', mediaElement.src);
      thumbnailElement.setAttribute('boxview-thumbnail-type', 'img');
    }

    if (mediaElement.localName === 'video') {
      const posterVideo = mediaElement.getAttribute('poster');

      if (posterVideo) {
        thumbnailElement = createThumbnail(posterVideo);
      } else {
        thumbnailElement = createThumbnail(null);
      }
      thumbnailElement.setAttribute(
        'boxview-thumbnail-src',
        mediaElement.currentSrc
      );
      thumbnailElement.setAttribute('boxview-thumbnail-type', 'video');
    }

    if (mediaElement.localName === 'iframe') {
      const youtubeId = mediaElement.src.substr(
        mediaElement.src.lastIndexOf('/') + 1
      );
      const posterIframe = `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;

      thumbnailElement = createThumbnail(posterIframe);
      thumbnailElement.setAttribute('boxview-thumbnail-src', mediaElement.src);
      thumbnailElement.setAttribute('boxview-thumbnail-type', 'iframe');
    }
    boxviewThumbnailsTrack.appendChild(thumbnailElement);
  }

  const thumbnailsTrackList = [...boxviewThumbnailsTrack.children];

  for (let i = 0; i < thumbnailsTrackList.length; i++) {
    const thumbnail = thumbnailsTrackList[i];
    const elementType = thumbnail.getAttribute('boxview-thumbnail-type');

    if (elementType === 'img') {
      const elementUrl = thumbnail.getAttribute('boxview-thumbnail-src');

      thumbnail.addEventListener('click', () => {
        if (boxviewActiveMedia.element.localName === 'img') {
          showThumbnailsTrackMedia(elementUrl);
        } else {
          createImageElement(elementUrl);
        }
        toggleActiveThumbnail(thumbnail, thumbnailsTrackList);
      });
    }
    if (elementType === 'video') {
      const elementUrl = thumbnail.getAttribute('boxview-thumbnail-src');

      thumbnail.addEventListener('click', (e) => {
        if (boxviewActiveMedia.element.localName === 'video') {
          showThumbnailsTrackMedia(elementUrl);
        } else {
          createVideoElement(elementUrl);
        }
        toggleActiveThumbnail(thumbnail, thumbnailsTrackList);
      });
    }
    if (elementType === 'iframe') {
      const elementUrl = thumbnail.getAttribute('boxview-thumbnail-src');

      thumbnail.addEventListener('click', (e) => {
        if (boxviewActiveMedia.element.localName === 'iframe') {
          showThumbnailsTrackMedia(elementUrl);
        } else {
          createIframeElement(elementUrl);
        }

        toggleActiveThumbnail(thumbnail, thumbnailsTrackList);
      });
    }
  }
}
