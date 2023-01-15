import { boxviewThumbnailsTrack } from '../../document/docConstants.js';
import getActiveMainElementSrc from '../mainContent/getActiveMainElementSrc.js';
import toggleActiveThumbnail from '../thumbnailsTrack/toggleActiveThumbnail.js';
import setActiveMainElement from '../mainContent/setActiveMainElement.js';

export default function handlePreviousButton(preparedMediaElements) {
  const thumbnailsTrackList = [...boxviewThumbnailsTrack.children];

  let boxviewPreviousMedia;
  const activeMainElementUrl = getActiveMainElementSrc();

  // Deprecated
  // const preparedMediaElementsUrls = extractUrlsFromPreparedMediaElements(
  //   preparedMediaElements
  // );

  const activeMainElementUrlIndex = preparedMediaElements.findIndex((media) =>
    media.currentSrc === undefined
      ? media.src === activeMainElementUrl
      : media.currentSrc === activeMainElementUrl
  );

  const num = activeMainElementUrlIndex - 1;
  if (num > -1) {
    boxviewPreviousMedia = preparedMediaElements.find((media, i) => i === num);
  } else {
    boxviewPreviousMedia = preparedMediaElements.at(-1);
  }

  const boxviewPreviousMediaSrc =
    boxviewPreviousMedia.src || boxviewPreviousMedia.currentSrc;
  const previousThumbnail = thumbnailsTrackList.find(
    (thumbnail) =>
      thumbnail.getAttribute('boxview-thumbnail-src') ===
      boxviewPreviousMediaSrc
  );

  if (boxviewPreviousMedia.localName === 'video') {
    setActiveMainElement('video', boxviewPreviousMediaSrc);
    return toggleActiveThumbnail(previousThumbnail, thumbnailsTrackList);
  }
  if (boxviewPreviousMedia.localName === 'iframe') {
    setActiveMainElement('iframe', boxviewPreviousMediaSrc);
    return toggleActiveThumbnail(previousThumbnail, thumbnailsTrackList);
  }
  if (boxviewPreviousMedia.localName === 'img') {
    setActiveMainElement('img', boxviewPreviousMediaSrc);
    return toggleActiveThumbnail(previousThumbnail, thumbnailsTrackList);
  }
}
