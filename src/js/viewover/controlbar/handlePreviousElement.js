import { viewoverThumbnailsTrack } from '../../document/docConstants.js';
import getActiveMainElementSrc from '../mainContent/getActiveMainElementSrc.js';
import toggleActiveThumbnail from '../thumbnailsTrack/toggleActiveThumbnail.js';
import setActiveMainElement from '../mainContent/setActiveMainElement.js';
import { scrollThumbnailToViewport } from '../thumbnailsTrack/handleThumbnailsOverflow.js';
import { activeImage } from './handleZoom.js';

export default function handlePreviousElement(preparedMediaElements) {
  const thumbnailsTrackList = [...viewoverThumbnailsTrack.children];

  let viewoverPreviousMedia;
  const activeMainElementUrl = getActiveMainElementSrc();

  const activeMainElementUrlIndex = preparedMediaElements.findIndex((media) =>
    media.currentSrc === undefined
      ? media.src === activeMainElementUrl
      : media.currentSrc === activeMainElementUrl
  );

  const num = activeMainElementUrlIndex - 1;
  if (num > -1) {
    viewoverPreviousMedia = preparedMediaElements.find((media, i) => i === num);
  } else {
    viewoverPreviousMedia = preparedMediaElements.at(-1);
  }

  const viewoverPreviousMediaSrc =
    viewoverPreviousMedia.src || viewoverPreviousMedia.currentSrc;

  const previousThumbnail = thumbnailsTrackList.find(
    (thumbnailWrapper) =>
      thumbnailWrapper
        .querySelector('.viewover__thumbnail')
        .getAttribute('data-viewover-thumbnail-src') ===
      viewoverPreviousMediaSrc
  );

  setActiveMainElement(
    viewoverPreviousMedia.localName,
    viewoverPreviousMediaSrc
  );
  scrollThumbnailToViewport(previousThumbnail);
  toggleActiveThumbnail(previousThumbnail);
  activeImage.imageScale = 1;
}
