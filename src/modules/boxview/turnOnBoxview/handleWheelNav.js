import handleNextElement from '../controlbar/handleNextElement.js';
import handlePreviousElement from '../controlbar/handlePreviousElement.js';
import { mediaElements } from './openBoxview.js';

export default function handleWheelNav(e) {
  e.preventDefault();

  if (!e.ctrlKey) {
    if (e.deltaY > 0) {
      handleNextElement(mediaElements.preparedMediaElements);
    }
    if (e.deltaY < 0) {
      handlePreviousElement(mediaElements.preparedMediaElements);
    }
  }
}
