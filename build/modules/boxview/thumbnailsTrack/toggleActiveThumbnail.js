import { activeMainElement } from '../mainContent/createMediaElement.js';
import { boxviewThumbnailsTrack } from '../../document/docConstants.js';
export default function toggleActiveThumbnail(thumbnailWrapper) {
  const thumbnailsTrackList = [...boxviewThumbnailsTrack.children];
  const activeMainElementSrc = activeMainElement.element.src || activeMainElement.element.currentSrc;
  const nonActiveThumbnails = thumbnailsTrackList.filter(thumbnailWrapper => {
    const thumbnail = thumbnailWrapper.querySelector('.boxview__thumbnail');
    const thumbnailSrc = thumbnail.getAttribute('data-boxview-thumbnail-src');
    return thumbnailSrc !== activeMainElementSrc;
  });
  nonActiveThumbnails.map(thumbnail => thumbnail.classList.remove('boxview__thumbnail-wrapper_active'));
  thumbnailWrapper.classList.add('boxview__thumbnail-wrapper_active');
}