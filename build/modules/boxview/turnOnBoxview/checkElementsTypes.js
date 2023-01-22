let mediaElementType;
import { unauthorizedError } from '../../../utils/customErrors.js';
const checkChildMediaElement = (mediaElement, authorizedTypes) => {
  const mediaChildrenElement = [...mediaElement.children];
  const mediaChildeType = mediaChildrenElement.find(element => authorizedTypes.includes(element.localName));
  if (mediaChildeType !== null) {
    mediaElementType = mediaChildeType.localName;
  } else {
    unauthorizedError.message = `Element must contain an image, video or iframe`;
    throw unauthorizedError;
  }
};
export default function checkElementsTypes(preparedMediaElements, authorizedTypes, array) {
  for (let i = 0; i < preparedMediaElements.length; i++) {
    const mediaElement = preparedMediaElements[i];
    if (authorizedTypes.includes(mediaElement.localName)) {
      mediaElementType = mediaElement.localName;
    }

    // Check the types of media elements with paragraphs elements etc
    if (mediaElement.localName === 'div') {
      // Check if there is a child media element
      checkChildMediaElement(mediaElement, authorizedTypes);
    }
    if (!array.includes(mediaElementType)) {
      array.push(mediaElementType);
    }
  }
}