import { boxviewThumbnailsTrack } from '../../document/docConstants.js';
import getActiveMainElementSrc from '../mainContent/getActiveMainElementSrc.js';
import toggleActiveThumbnail from '../thumbnailsTrack/toggleActiveThumbnail.js';
import setActiveMainElement from '../mainContent/setActiveMainElement.js';
import { scrollThumbnailToViewport } from '../thumbnailsTrack/handleThumbnailsOverflow.js';
import { activeImage } from './handleZoom.js';
export default function handlePreviousElement(preparedMediaElements) {
  const thumbnailsTrackList = [...boxviewThumbnailsTrack.children];
  let boxviewPreviousMedia;
  const activeMainElementUrl = getActiveMainElementSrc();
  const activeMainElementUrlIndex = preparedMediaElements.findIndex(media => media.currentSrc === undefined ? media.src === activeMainElementUrl : media.currentSrc === activeMainElementUrl);
  const num = activeMainElementUrlIndex - 1;
  if (num > -1) {
    boxviewPreviousMedia = preparedMediaElements.find((media, i) => i === num);
  } else {
    boxviewPreviousMedia = preparedMediaElements.at(-1);
  }
  const boxviewPreviousMediaSrc = boxviewPreviousMedia.src || boxviewPreviousMedia.currentSrc;
  const previousThumbnail = thumbnailsTrackList.find(thumbnailWrapper => thumbnailWrapper.querySelector('.boxview__thumbnail').getAttribute('data-boxview-thumbnail-src') === boxviewPreviousMediaSrc);
  setActiveMainElement(boxviewPreviousMedia.localName, boxviewPreviousMediaSrc);
  scrollThumbnailToViewport(previousThumbnail);
  toggleActiveThumbnail(previousThumbnail);
  activeImage.imageScale = 1;
}