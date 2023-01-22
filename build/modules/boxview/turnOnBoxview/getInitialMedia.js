import setActiveMainElement from '../mainContent/setActiveMainElement.js';
const getInitialMediaSrc = (elementTarget, type) => {
  const initialMediaSrc = elementTarget.src || elementTarget.currentSrc;
  setActiveMainElement(type, initialMediaSrc);
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
    getInitialMediaSrc(elementTarget, elementTarget.localName);
  }
}