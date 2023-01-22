import { zoomInButton, zoomOutButton } from '../../document/docConstants.js';
export const showZoomButtons = () => {
  if (!zoomInButton.classList.contains('boxview__zoom-button_visible')) {
    zoomInButton.classList.add('boxview__zoom-button_visible');
    zoomOutButton.classList.add('boxview__zoom-button_visible');
  }
};
export const hideZoomButtons = () => {
  if (zoomInButton.classList.contains('boxview__zoom-button_visible')) {
    zoomInButton.classList.remove('boxview__zoom-button_visible');
    zoomOutButton.classList.remove('boxview__zoom-button_visible');
  }
};