import { openViewover } from '../viewover/turnOnViewover/openViewover.js';
import addOpenViewoverButton from './addOpenViewoverButton.js';

addOpenViewoverButton();

export const mediaItems = [
  ...document.querySelectorAll('[data-viewover-item]'),
];

export function applyViewoverOnDoc(settings) {
  for (let i = 0; i < mediaItems.length; i++) {
    const mediaItem = mediaItems[i];

    if (mediaItem.localName !== 'video' && mediaItem.localName !== 'iframe') {
      mediaItem.style.cursor = 'pointer';
      mediaItem.onclick = (e) => {
        openViewover(e, settings);
      };
    }

    if (mediaItem.localName === 'video' || mediaItem.localName === 'iframe') {
      const openPopupButton = mediaItem.parentElement.querySelector(
        '.viewover-open-button'
      );
      openPopupButton.onclick = (e) => {
        openViewover(e, settings);
      };
    }
  }
}
