import {
  thumbnailsTrackHeight,
  boxviewContainer,
  thumbnailsShowButton,
  thumbnailsHideButton,
  boxviewThumbnailsTrack,
} from '../../document/docConstants.js';
import toggleButtonIcon from '../controlbar/toggleButtonIcon.js';
import { setScrollbarHeight } from './handleThumbnailsOverflow.js';

export default function toggleThumbnailsMode(initial) {
  const trackHeight = boxviewContainer.style.getPropertyValue(
    '--thumbnails-track-height'
  );

  if (initial === true) {
    boxviewContainer.style.setProperty(
      '--thumbnails-track-height',
      thumbnailsTrackHeight
    );

    toggleButtonIcon(thumbnailsShowButton, thumbnailsHideButton);

    boxviewContainer.style.setProperty(
      '--boxview-thumbnails-track-margin',
      '20px'
    );

    boxviewThumbnailsTrack.classList.add('boxview__thumbnails-track_visible');

    return;
  }

  if (trackHeight == thumbnailsTrackHeight) {
    toggleButtonIcon(thumbnailsHideButton, thumbnailsShowButton);

    boxviewThumbnailsTrack.classList.remove('boxview__thumbnails-track_visible');
    boxviewContainer.style.setProperty('--thumbnails-track-height', '0px');
    boxviewContainer.style.setProperty(
      '--boxview-thumbnails-track-margin',
      '0px'
    );
  } else {
    toggleButtonIcon(thumbnailsShowButton, thumbnailsHideButton);

    boxviewContainer.style.setProperty(
      '--thumbnails-track-height',
      thumbnailsTrackHeight
    );
    boxviewContainer.style.setProperty(
      '--boxview-thumbnails-track-margin',
      '20px'
    );
    boxviewThumbnailsTrack.classList.add('boxview__thumbnails-track_visible');
  }
  setScrollbarHeight();
}
