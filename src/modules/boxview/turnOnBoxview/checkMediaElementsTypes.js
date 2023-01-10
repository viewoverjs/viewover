import checkElementsTypes from './checkElementsTypes.js';

export default function checkMediaElementsTypes(preparedMediaElements) {
  let array = new Array();
  const authorizedTypes = ['img', 'video', 'iframe'];

  // Check the types of media elements
  checkElementsTypes(preparedMediaElements, authorizedTypes, array);

  // Return an array with the types of media elements present in the user content
  return array;
}
