// Constants
import {
  closeButton,
  fullscreenEntryButton,
  fullscreenExitButton,
  controlBar,
  boxviewContent,
} from '../../document/docConstants.js';
import toggleButtonIcon from './toggleButtonIcon.js';

// Boxview General
import boxview from '../../document/createDialog.js';

// FullScreen
import toggleFullScreenMode from './toggleFullScreenMode.js';
import { toggleControlBar, showControlBar } from './toggleControlBar.js';

// Close Button
import handleCloseButton from './handleCloseButton.js';
import resetBoxviewContent from '../turnOffBoxview/resetBoxviewContent.js';

export default function controlbarAddEvents() {
  // Close Button Event
  closeButton.onclick = () => {
    handleCloseButton();
  };

  document.addEventListener('keyup', (e) => {
    const isOpen = boxview.hasAttribute('open');
    // Escape Key
    if (e.key === 'Escape') {
      resetBoxviewContent();
    }
    // Fullscreen
    if (e.key === 'Enter' && isOpen) {
      toggleFullScreenMode();
    }
  });

  document.addEventListener('fullscreenchange', () => {
    const isHidden = fullscreenEntryButton.classList.contains('button_hidden');
    if (isHidden) {
      toggleButtonIcon(fullscreenEntryButton, fullscreenExitButton);
      boxviewContent.removeEventListener('mousemove', toggleControlBar);
      controlBar.removeEventListener('mouseenter', showControlBar);
      controlBar.removeEventListener('mouseleave', toggleControlBar);
      showControlBar();
    } else {
      toggleButtonIcon(fullscreenExitButton, fullscreenEntryButton);
      boxviewContent.addEventListener('mousemove', toggleControlBar);
      controlBar.addEventListener('mouseenter', showControlBar);
      controlBar.addEventListener('mouseleave', toggleControlBar);
    }
  });
}
