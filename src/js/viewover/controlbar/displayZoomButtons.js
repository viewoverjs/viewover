import { zoomInButton, zoomOutButton } from '../../document/docConstants.js';

export const showZoomButtons = () => {
  if (!zoomInButton.classList.contains('viewover__zoom-button_visible')) {
    zoomInButton.classList.add('viewover__zoom-button_visible');
    zoomOutButton.classList.add('viewover__zoom-button_visible');
  }
};

export const hideZoomButtons = () => {
  if (zoomInButton.classList.contains('viewover__zoom-button_visible')) {
    zoomInButton.classList.remove('viewover__zoom-button_visible');
    zoomOutButton.classList.remove('viewover__zoom-button_visible');
  }
};
