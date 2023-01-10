import { boxviewThumbnailsTrack } from '../../document/docConstants.js';
import getBoxviewActiveMediaUrl from '../mainContent/getBoxviewActiveMediaUrl.js';
import createImageElement from '../mainContent/createImageElement.js';
import createIframeElement from '../mainContent/createIframeElement.js';
import createVideoElement from '../mainContent/createVideoElement.js';
import toggleActiveThumbnail from '../thumbnailsTrack/toggleActiveThumbnail.js';

export default function handleNextButton(preparedMediaElements) {
  const thumbnailsTrackList = [...boxviewThumbnailsTrack.children];

  let boxviewNextMedia;
  const boxviewActiveMediaUrl = getBoxviewActiveMediaUrl();

  // Deprecated
  // const preparedMediaElementsUrls = extractUrlsFromPreparedMediaElements(
  //   preparedMediaElements
  // );

  const boxviewActiveMediaUrlIndex = preparedMediaElements.findIndex((media) =>
    media.currentSrc !== undefined
      ? media.currentSrc === boxviewActiveMediaUrl
      : media.src === boxviewActiveMediaUrl
  );

  const num = boxviewActiveMediaUrlIndex + 1;
  if (num < preparedMediaElements.length) {
    boxviewNextMedia = preparedMediaElements.find((media, i) => i === num);
  } else {
    boxviewNextMedia = preparedMediaElements.at(0);
  }

  const boxviewNextMediaSrc =
    boxviewNextMedia.src || boxviewNextMedia.currentSrc;
  const nextThumbnail = thumbnailsTrackList.find(
    (thumbnail) =>
      thumbnail.getAttribute('boxview-thumbnail-src') === boxviewNextMediaSrc
  );

  if (boxviewNextMedia.localName === 'video') {
    createVideoElement(boxviewNextMediaSrc);
    return toggleActiveThumbnail(nextThumbnail, thumbnailsTrackList);
  }
  if (boxviewNextMedia.localName === 'iframe') {
    createIframeElement(boxviewNextMediaSrc);
    return toggleActiveThumbnail(nextThumbnail, thumbnailsTrackList);
  }
  if (boxviewNextMedia.localName === 'img') {
    createImageElement(boxviewNextMediaSrc);
    return toggleActiveThumbnail(nextThumbnail, thumbnailsTrackList);
  }
}
