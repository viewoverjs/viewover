import createIframeElement from '../mainContent/createIframeElement.js';
import createImageElement from '../mainContent/createImageElement.js';
import createVideoElement from '../mainContent/createVideoElement.js';

const getInitialMediaSrc = (elementTarget, type) => {
  let initialMediaSrc;

  if (type === 'img') {
    initialMediaSrc = elementTarget.currentSrc;
    return createImageElement(initialMediaSrc);
  }
  if (type === 'video') {
    initialMediaSrc = elementTarget.currentSrc;
    return createVideoElement(initialMediaSrc);
  }
  if (type === 'iframe') {
    initialMediaSrc = elementTarget.src;
    return createIframeElement(initialMediaSrc);
  }
};

export default function getInitialMedia(mediaElementsTypes, elementTarget) {
  if (mediaElementsTypes.length === 1) {
    if (mediaElementsTypes.includes('img')) {
      getInitialMediaSrc(elementTarget, 'img');
    }

    if (mediaElementsTypes.includes('iframe')) {
      getInitialMediaSrc(elementTarget, 'iframe');
      // const youtubeElementsList = preparedMediaElements.filter(
      //   (element) => element.localName === 'iframe'
      // );
      // const youtubeObjsList = youtubeElementsList.map((element) => ({
      //   type: element.localName,
      //   url: element.src,
      // }));
    }

    if (mediaElementsTypes.includes('video')) {
      getInitialMediaSrc(elementTarget, 'video');
    }
  }
  if (mediaElementsTypes.length !== 1) {
    const url =
      elementTarget.localName !== 'iframe'
        ? elementTarget.currentSrc
        : elementTarget.src;

    getInitialMediaSrc(elementTarget, elementTarget.localName);
  }
}
