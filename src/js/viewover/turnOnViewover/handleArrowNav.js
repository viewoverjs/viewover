import handleNextElement from '../controlbar/handleNextElement.js';
import handlePreviousElement from '../controlbar/handlePreviousElement.js';
import { mediaElements } from './openViewover.js';

// Media navigation
export default function handleArrowNav(e) {
  e.preventDefault();
  if (e.key === 'ArrowLeft') {
    handlePreviousElement(mediaElements.preparedMediaElements);
  }
  if (e.key === 'ArrowRight') {
    handleNextElement(mediaElements.preparedMediaElements);
  }
}
