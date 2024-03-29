// Constants
import {
  closeButton,
  fullscreenEntryButton,
  fullscreenExitButton,
  controlBar,
  viewoverContent,
  zoomInButton,
  zoomOutButton,
} from '../../document/docConstants.js';
import { activeMainElement } from '../mainContent/createMediaElement.js';

import { handleZoomInButton, handleZoomOutButton } from './handleZoom.js';
import toggleButtonIcon from './toggleButtonIcon.js';

// Viewover General
import viewover from '../../document/createDialog.js';

// FullScreen
import toggleFullScreenMode from './toggleFullScreenMode.js';
import { toggleControlBar, showControlBar } from './toggleControlBar.js';

// Close Button
import handleCloseButton from './handleCloseButton.js';
import resetViewoverContent from '../turnOffViewover/resetViewoverContent.js';
import { enableZoomButtons } from './displayZoomButtons.js';

export default function controlbarAddEvents(options) {
  // Zoom Button
  if (options.zoom == true) {
    zoomInButton.addEventListener('click', handleZoomInButton);
    zoomOutButton.addEventListener('click', handleZoomOutButton);
  }

  // Close Button Event
  closeButton.onclick = () => {
    handleCloseButton();
  };

  document.addEventListener('keyup', (e) => {
    const isOpen = viewover.hasAttribute('open');
    // Escape Key
    if (e.key === 'Escape') {
      resetViewoverContent();
    }
    // Fullscreen
    if (e.key === 'Enter' && isOpen && options.fullscreen == true) {
      toggleFullScreenMode();
    }
  });

  document.addEventListener('fullscreenchange', () => {
    const isHidden = fullscreenEntryButton.classList.contains('button_hidden');
    if (isHidden) {
      toggleButtonIcon(fullscreenEntryButton, fullscreenExitButton);
      viewoverContent.removeEventListener('mousemove', toggleControlBar);
      controlBar.removeEventListener('mouseenter', showControlBar);
      controlBar.removeEventListener('mouseleave', toggleControlBar);
      showControlBar();
    } else {
      toggleButtonIcon(fullscreenExitButton, fullscreenEntryButton);
      viewoverContent.addEventListener('mousemove', toggleControlBar);
      controlBar.addEventListener('mouseenter', showControlBar);
      controlBar.addEventListener('mouseleave', toggleControlBar);
    }
  });
}
