// Constants
import {
  boxviewContainer,
  thumbnailsTrackHeight,
  boxviewThumbnailsTrack,
} from '../../document/docConstants.js';

// Thumbnails Track
import createThumbnail from './createThumbnail.js';

let thumbnailWrapper;
let thumbnailElement;

export default async function showThumbnailsTrack(preparedMediaElements) {
  boxviewContainer.style.setProperty(
    '--thumbnails-track-height',
    thumbnailsTrackHeight
  );

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
