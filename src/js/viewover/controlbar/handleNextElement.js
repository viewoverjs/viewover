import { viewoverThumbnailsTrack } from '../../document/docConstants.js';
import getActiveMainElementSrc from '../mainContent/getActiveMainElementSrc.js';
import setActiveMainElement from '../mainContent/setActiveMainElement.js';
import toggleActiveThumbnail from '../thumbnailsTrack/toggleActiveThumbnail.js';
import { scrollThumbnailToViewport } from '../thumbnailsTrack/handleThumbnailsOverflow.js';

export default function handleNextElement(preparedMediaElements) {
  const thumbnailsTrackList = [...viewoverThumbnailsTrack.children];

  let viewoverNextMedia;
  const activeMainElementUrl = getActiveMainElementSrc();

  const activeMainElementUrlIndex = preparedMediaElements.findIndex((media) =>
    media.currentSrc !== undefined
      ? media.currentSrc === activeMainElementUrl
      : media.src === activeMainElementUrl
  );

  const num = activeMainElementUrlIndex + 1;
  if (num < preparedMediaElements.length) {
    viewoverNextMedia = preparedMediaElements.find((media, i) => i === num);
  } else {
    viewoverNextMedia = preparedMediaElements.at(0);
  }

  const viewoverNextMediaSrc =
    viewoverNextMedia.src || viewoverNextMedia.currentSrc;
  const nextThumbnail = thumbnailsTrackList.find(
    (thumbnailWrapper) =>
      thumbnailWrapper
        .querySelector('.viewover__thumbnail')
        .getAttribute('data-viewover-thumbnail-src') === viewoverNextMediaSrc
  );

  setActiveMainElement(viewoverNextMedia.localName, viewoverNextMediaSrc);
  scrollThumbnailToViewport(nextThumbnail);
  toggleActiveThumbnail(nextThumbnail);
}
