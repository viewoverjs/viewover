import { activeMainElement } from '../mainContent/createMediaElement.js';
import { viewoverThumbnailsTrack } from '../../document/docConstants.js';

export default function toggleActiveThumbnail(thumbnailWrapper) {
  const thumbnailsTrackList = [...viewoverThumbnailsTrack.children];
  const activeMainElementSrc =
    activeMainElement.element.src || activeMainElement.element.currentSrc;
  const nonActiveThumbnails = thumbnailsTrackList.filter((thumbnailWrapper) => {
    const thumbnail = thumbnailWrapper.querySelector('.viewover__thumbnail');
    const thumbnailSrc = thumbnail.getAttribute('data-viewover-thumbnail-src');
    return thumbnailSrc !== activeMainElementSrc;
  });

  nonActiveThumbnails.map((thumbnail) =>
    thumbnail.classList.remove('viewover__thumbnail-wrapper_active')
  );

  thumbnailWrapper.classList.add('viewover__thumbnail-wrapper_active');
}
