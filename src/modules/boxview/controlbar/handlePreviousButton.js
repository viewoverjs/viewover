import { boxviewThumbnailsTrack } from '../../document/docConstants.js';
import getBoxviewActiveMediaUrl from '../mainContent/getBoxviewActiveMediaUrl.js';
import toggleActiveThumbnail from '../thumbnailsTrack/toggleActiveThumbnail.js';
import createImageElement from '../mainContent/createImageElement.js';
import createIframeElement from '../mainContent/createIframeElement.js';
import createVideoElement from '../mainContent/createVideoElement.js';

export default function handlePreviousButton(preparedMediaElements) {
  const thumbnailsTrackList = [...boxviewThumbnailsTrack.children];

  let boxviewPreviousMedia;
  const boxviewActiveMediaUrl = getBoxviewActiveMediaUrl();

  // Deprecated
  // const preparedMediaElementsUrls = extractUrlsFromPreparedMediaElements(
  //   preparedMediaElements
  // );

  const boxviewActiveMediaUrlIndex = preparedMediaElements.findIndex((media) =>
    media.currentSrc === undefined
      ? media.src === boxviewActiveMediaUrl
      : media.currentSrc === boxviewActiveMediaUrl
  );

  const num = boxviewActiveMediaUrlIndex - 1;
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
    createVideoElement(boxviewPreviousMediaSrc);
    return toggleActiveThumbnail(previousThumbnail, thumbnailsTrackList);
  }
  if (boxviewPreviousMedia.localName === 'iframe') {
    createIframeElement(boxviewPreviousMediaSrc);
    return toggleActiveThumbnail(previousThumbnail, thumbnailsTrackList);
  }
  if (boxviewPreviousMedia.localName === 'img') {
    createImageElement(boxviewPreviousMediaSrc);
    return toggleActiveThumbnail(previousThumbnail, thumbnailsTrackList);
  }
}
