import { boxviewThumbnailsTrack } from '../../document/docConstants.js';
import getActiveMainElementSrc from '../mainContent/getActiveMainElementSrc.js';
import setActiveMainElement from '../mainContent/setActiveMainElement.js';
import toggleActiveThumbnail from '../thumbnailsTrack/toggleActiveThumbnail.js';

export default function handleNextButton(preparedMediaElements) {
  const thumbnailsTrackList = [...boxviewThumbnailsTrack.children];

  let boxviewNextMedia;
  const activeMainElementUrl = getActiveMainElementSrc();

  // Deprecated
  // const preparedMediaElementsUrls = extractUrlsFromPreparedMediaElements(
  //   preparedMediaElements
  // );

  const activeMainElementUrlIndex = preparedMediaElements.findIndex((media) =>
    media.currentSrc !== undefined
      ? media.currentSrc === activeMainElementUrl
      : media.src === activeMainElementUrl
  );

  const num = activeMainElementUrlIndex + 1;
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
    setActiveMainElement('video', boxviewNextMediaSrc);
    return toggleActiveThumbnail(nextThumbnail, thumbnailsTrackList);
  }
  if (boxviewNextMedia.localName === 'iframe') {
    setActiveMainElement('iframe', boxviewNextMediaSrc);
    return toggleActiveThumbnail(nextThumbnail, thumbnailsTrackList);
  }
  if (boxviewNextMedia.localName === 'img') {
    setActiveMainElement('img', boxviewNextMediaSrc);
    return toggleActiveThumbnail(nextThumbnail, thumbnailsTrackList);
  }
}
