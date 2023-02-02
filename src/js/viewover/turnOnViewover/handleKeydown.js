import handleNextElement from '../controlbar/handleNextElement.js';
import handlePreviousElement from '../controlbar/handlePreviousElement.js';

// Media navigation
export function handleKeydown(e, options) {
  e.preventDefault();

  if (e.key === 'ArrowLeft') {
    handlePreviousElement(options);
  }
  if (e.key === 'ArrowRight') {
    handleNextElement(options);
  }
}
