import { closeButton } from '../../document/docConstants.js';
import handleCloseButton from './handleCloseButton.js';
import boxview from '../../document/createDialog.js';
import toggleFullScreenMode from './toggleFullScreenMode.js';
import toggleFullscreenIcon from './toggleFullscreenIcon.js';

export default function controlbarAddEvents() {
  // close button
  closeButton.addEventListener('click', () => {
    handleCloseButton();
  });

  // Fullscreen
  document.addEventListener('keydown', (e) => {
    const isOpen = boxview.hasAttributes('open');
    if (e.key === 'Enter' && isOpen) {
      toggleFullScreenMode();
    }
  });

  document.addEventListener('fullscreenchange', () => {
    toggleFullscreenIcon();
  });
}

// function handleShareButton() {
//   shareOptionsButtons.classList.toggle('share-options-buttons_active');
// }

// share button
// shareButton.addEventListener('click', handleShareButton);
