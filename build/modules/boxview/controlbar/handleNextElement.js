import { boxviewThumbnailsTrack } from '../../document/docConstants.js';
import getActiveMainElementSrc from '../mainContent/getActiveMainElementSrc.js';
import setActiveMainElement from '../mainContent/setActiveMainElement.js';
import toggleActiveThumbnail from '../thumbnailsTrack/toggleActiveThumbnail.js';
import { scrollThumbnailToViewport } from '../thumbnailsTrack/handleThumbnailsOverflow.js';
import { activeImage } from './handleZoom.js';
export default function handleNextElement(preparedMediaElements) {
  const thumbnailsTrackList = [...boxviewThumbnailsTrack.children];
  let boxviewNextMedia;
  const activeMainElementUrl = getActiveMainElementSrc();
  const activeMainElementUrlIndex = preparedMediaElements.findIndex(media => media.currentSrc !== undefined ? media.currentSrc === activeMainElementUrl : media.src === activeMainElementUrl);
  const num = activeMainElementUrlIndex + 1;
  if (num < preparedMediaElements.length) {
    boxviewNextMedia = preparedMediaElements.find((media, i) => i === num);
  } else {
    boxviewNextMedia = preparedMediaElements.at(0);
  }
  const boxviewNextMediaSrc = boxviewNextMedia.src || boxviewNextMedia.currentSrc;
  const nextThumbnail = thumbnailsTrackList.find(thumbnailWrapper => thumbnailWrapper.querySelector('.boxview__thumbnail').getAttribute('data-boxview-thumbnail-src') === boxviewNextMediaSrc);
  setActiveMainElement(boxviewNextMedia.localName, boxviewNextMediaSrc);
  scrollThumbnailToViewport(nextThumbnail);
  toggleActiveThumbnail(nextThumbnail);
  activeImage.imageScale = 1;
}