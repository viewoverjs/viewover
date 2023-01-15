import { activeMainElement } from '../mainContent/createMediaElement.js';

export default function toggleActiveThumbnail(thumbnail, thumbnailsTrackList) {
  const activeMainElementSrc =
    activeMainElement.element.src || activeMainElement.element.currentSrc;
  const nonActiveThumbnails = thumbnailsTrackList.filter((thumbnail) => {
    const thumbnailSrc = thumbnail.getAttribute('boxview-thumbnail-src');
    return thumbnailSrc !== activeMainElementSrc;
  });

  nonActiveThumbnails.map((thumbnail) =>
    thumbnail.classList.remove('boxview__thumbnail_active')
  );

  thumbnail.classList.add('boxview__thumbnail_active');
}
