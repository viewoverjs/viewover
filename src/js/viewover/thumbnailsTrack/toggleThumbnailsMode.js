import {
  thumbnailsTrackHeight,
  viewoverContainer,
  thumbnailsShowButton,
  thumbnailsHideButton,
  viewoverThumbnailsTrack,
} from '../../document/docConstants.js';
import toggleButtonIcon from '../controlbar/toggleButtonIcon.js';
import { setScrollbarHeight } from './handleThumbnailsOverflow.js';

export default function toggleThumbnailsMode() {
  const trackHeight = viewoverContainer.style.getPropertyValue(
    '--thumbnails-track-height'
  );

  if (trackHeight == thumbnailsTrackHeight) {
    toggleButtonIcon(thumbnailsHideButton, thumbnailsShowButton);

    viewoverThumbnailsTrack.classList.remove(
      'viewover__thumbnails-track_visible'
    );
    viewoverContainer.style.setProperty('--thumbnails-track-height', '0px');
    viewoverContainer.style.setProperty(
      '--viewover-thumbnails-track-margin',
      '0px'
    );
  } else {
    toggleButtonIcon(thumbnailsShowButton, thumbnailsHideButton);

    viewoverContainer.style.setProperty(
      '--thumbnails-track-height',
      thumbnailsTrackHeight
    );
    viewoverContainer.style.setProperty(
      '--viewover-thumbnails-track-margin',
      '20px'
    );
    viewoverThumbnailsTrack.classList.add('viewover__thumbnails-track_visible');
  }
  setScrollbarHeight();
}
