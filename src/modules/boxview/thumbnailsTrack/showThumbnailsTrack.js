// Constants
import {
  boxviewContainer,
  thumbnailsTrackHeight,
  boxviewThumbnailsTrack,
} from '../../document/docConstants.js';

// Boxview General
import { activeMainElement } from '../mainContent/createMediaElement.js';
import setActiveMainElement from '../mainContent/setActiveMainElement.js';

// Thumbnails Track
import createThumbnail from './createThumbnail.js';
import showActiveThumbnailContent from './showActiveThumbnailContent.js';
import toggleActiveThumbnail from './toggleActiveThumbnail.js';
import scrollToViewport from './scrollToViewport.js';
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
      const thumbnailUrl = thumbnail.getAttribute('boxview-thumbnail-src');

      thumbnail.addEventListener('click', () => {
        if (activeMainElement.element.localName === 'img') {
          if (activeMainElement.element.src === thumbnailUrl) {
            return;
          }
          showActiveThumbnailContent(thumbnailUrl);
        } else {
          setActiveMainElement('img', thumbnailUrl);
        }
        toggleActiveThumbnail(thumbnail, thumbnailsTrackList);
        scrollToViewport(thumbnail);
      });
    }
    if (elementType === 'video') {
      const thumbnailUrl = thumbnail.getAttribute('boxview-thumbnail-src');

      thumbnail.addEventListener('click', (e) => {
        if (activeMainElement.element.localName === 'video') {
          if (activeMainElement.element.currentSrc === thumbnailUrl) {
            return;
          }
          showActiveThumbnailContent(thumbnailUrl);
        } else {
          setActiveMainElement('video', thumbnailUrl);
        }
        toggleActiveThumbnail(thumbnail, thumbnailsTrackList);
      });
    }
    if (elementType === 'iframe') {
      const thumbnailUrl = thumbnail.getAttribute('boxview-thumbnail-src');

      thumbnail.addEventListener('click', (e) => {
        if (activeMainElement.element.localName === 'iframe') {
          if (activeMainElement.element.src === thumbnailUrl) {
            return;
          }
          showActiveThumbnailContent(thumbnailUrl);
        } else {
          setActiveMainElement('iframe', thumbnailUrl);
        }

        toggleActiveThumbnail(thumbnail, thumbnailsTrackList);
      });
    }
  }
}
