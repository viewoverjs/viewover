import { openBoxview } from '../boxview/turnOnBoxview/openBoxview.js';
import addOpenBoxviewButton from './addOpenBoxviewButton.js';

addOpenBoxviewButton();

export const mediaItems = [...document.querySelectorAll('[data-boxview-item]')];

export function applyBoxviewOnDoc() {
  for (let i = 0; i < mediaItems.length; i++) {
    const mediaItem = mediaItems[i];

    if (mediaItem.localName !== 'video' && mediaItem.localName !== 'iframe') {
      mediaItem.style.cursor = 'pointer';
      mediaItem.onclick = (e) => {
        openBoxview(e);
      };
    }

    if (mediaItem.localName === 'video' || mediaItem.localName === 'iframe') {
      const openPopupButton = mediaItem.parentElement.querySelector(
        '.boxview-open-button'
      );
      openPopupButton.onclick = (e) => {
        openBoxview(e);
      };
    }
  }
}
