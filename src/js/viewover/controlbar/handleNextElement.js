import { viewoverThumbnailsTrack } from '../../document/docConstants.js';
import getActiveMainElementSrc from '../mainContent/getActiveMainElementSrc.js';
import setActiveMainElement from '../mainContent/setActiveMainElement.js';
import toggleActiveThumbnail from '../thumbnailsTrack/toggleActiveThumbnail.js';
import { scrollThumbnailToViewport } from '../thumbnailsTrack/handleThumbnailsOverflow.js';
import { mediaElements } from '../turnOnViewover/openViewover.js';

export default function handleNextElement(options) {
  const thumbnailsTrackList = [...viewoverThumbnailsTrack.children];

  let viewoverNextMedia;
  const activeMainElementUrl = getActiveMainElementSrc();

  const activeMainElementUrlIndex = mediaElements.preparedMediaElements.findIndex((media) =>
    media.currentSrc !== undefined
      ? media.currentSrc === activeMainElementUrl
      : media.src === activeMainElementUrl
  );

  const num = activeMainElementUrlIndex + 1;
  if (num < mediaElements.preparedMediaElements.length) {
    viewoverNextMedia = mediaElements.preparedMediaElements.find((media, i) => i === num);
  } else {
    viewoverNextMedia = mediaElements.preparedMediaElements.at(0);
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

  if (options.thumbnails == true) {
    scrollThumbnailToViewport(nextThumbnail);
    toggleActiveThumbnail(nextThumbnail);
    
  }
}
