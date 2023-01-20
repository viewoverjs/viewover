// Constants
import {
  boxviewContainer,
  thumbnailsTrackHeight,
  boxviewThumbnailsTrack,
  thumbnailsShowButton,
  thumbnailsHideButton,
} from '../../document/docConstants.js';

import toggleButtonIcon from '../controlbar/toggleButtonIcon.js';

// Thumbnails Track
import createThumbnail from './createThumbnail.js';

let thumbnailWrapper;
let thumbnailElement;

export default async function showThumbnailsTrack(preparedMediaElements, initial) {
  if (initial) {
    boxviewContainer.style.setProperty(
      '--thumbnails-track-height',
      thumbnailsTrackHeight
    );
    toggleButtonIcon(thumbnailsShowButton, thumbnailsHideButton);
  } else {
    toggleButtonIcon(thumbnailsHideButton, thumbnailsShowButton);
  }

  for (let i = 0; i < preparedMediaElements.length; i++) {
    const mediaElement = preparedMediaElements[i];

    if (mediaElement.localName === 'img') {
      thumbnailWrapper = await createThumbnail(mediaElement);
      thumbnailElement = thumbnailWrapper.querySelector('.boxview__thumbnail');
      thumbnailElement.setAttribute('data-boxview-thumbnail-src', mediaElement.src);
      thumbnailElement.setAttribute('data-boxview-thumbnail-type', 'img');
    }

    if (mediaElement.localName === 'video') {
      thumbnailWrapper = await createThumbnail(mediaElement);
      thumbnailElement = thumbnailWrapper.querySelector('.boxview__thumbnail');
      thumbnailElement.setAttribute(
        'data-boxview-thumbnail-src',
        mediaElement.currentSrc
      );
      thumbnailElement.setAttribute('data-boxview-thumbnail-type', 'video');
    }

    if (mediaElement.localName === 'iframe') {
      thumbnailWrapper = await createThumbnail(mediaElement);
      thumbnailElement = thumbnailWrapper.querySelector('.boxview__thumbnail');
      thumbnailElement.setAttribute('data-boxview-thumbnail-src', mediaElement.src);
      thumbnailElement.setAttribute('data-boxview-thumbnail-type', 'iframe');
    }
    boxviewThumbnailsTrack.appendChild(thumbnailWrapper);
  }
}
