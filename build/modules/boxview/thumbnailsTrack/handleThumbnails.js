import showThumbnailsTrack from './showThumbnailsTrack.js';
import listenForThumbnailsEvents from './listenForThumbnailsEvents.js';
export default async function handleThumbnails(preparedMediaElements, initial) {
  await showThumbnailsTrack(preparedMediaElements, initial);
  listenForThumbnailsEvents();
}