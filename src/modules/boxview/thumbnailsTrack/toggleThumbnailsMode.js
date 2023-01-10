import {
  thumbnailsTrackHeight,
  boxviewContainer,
  thumbnailsShowButton,
  thumbnailsHideButton,
  boxviewThumbnailsTrack,
} from '../../document/docConstants.js';

export default function toggleThumbnailsMode(initial) {
  const trackHeight = boxviewContainer.style.getPropertyValue(
    '--thumbnails-track-height'
  );

  if (initial === true) {
    boxviewContainer.style.setProperty(
      '--thumbnails-track-height',
      thumbnailsTrackHeight
    );

    thumbnailsShowButton.classList.add('boxview__thumbnails-button_active');
    thumbnailsHideButton.classList.remove('boxview__thumbnails-button_active');

    boxviewContainer.style.setProperty(
      '--boxview-thumbnails-track-margin',
      '15px'
    );

    boxviewThumbnailsTrack.classList.add('boxview__thumbnails-track_active');

    return;
  }

  if (trackHeight == thumbnailsTrackHeight) {
    thumbnailsShowButton.classList.remove('boxview__thumbnails-button_active');
    thumbnailsHideButton.classList.add('boxview__thumbnails-button_active');

    boxviewThumbnailsTrack.classList.remove('boxview__thumbnails-track_active');
    boxviewContainer.style.setProperty('--thumbnails-track-height', '0px');
    boxviewContainer.style.setProperty(
      '--boxview-thumbnails-track-margin',
      '0px'
    );
  } else {
    thumbnailsShowButton.classList.add('boxview__thumbnails-button_active');
    thumbnailsHideButton.classList.remove('boxview__thumbnails-button_active');

    boxviewContainer.style.setProperty(
      '--thumbnails-track-height',
      thumbnailsTrackHeight
    );
    boxviewContainer.style.setProperty(
      '--boxview-thumbnails-track-margin',
      '15px'
    );
    boxviewThumbnailsTrack.classList.add('boxview__thumbnails-track_active');
  }
}
