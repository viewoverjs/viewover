import handleNextElement from '../controlbar/handleNextElement.js';
import handlePreviousElement from '../controlbar/handlePreviousElement.js';
import { mediaElements } from './openViewover.js';

export default function handleWheelNav(e) {
  console.log(e.target);
  if (!e.ctrlKey && !e.shiftKey) {
    if (e.deltaY > 0) {
      handleNextElement(mediaElements.preparedMediaElements);
    }
    if (e.deltaY < 0) {
      handlePreviousElement(mediaElements.preparedMediaElements);
    }
  }
}
