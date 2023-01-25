import { zoomInButton, zoomOutButton } from '../../document/docConstants.js';

export const toggleZoomInDisable = (state) => {
  if (state) {
    zoomInButton.setAttribute('disabled', '');
    zoomInButton.style.cursor = 'default';
    [...zoomInButton.children][0].style.fill =
      'var(--viewover-icon-color-disable)';
  } else {
    zoomInButton.removeAttribute('disabled');
    zoomInButton.style.cursor = 'pointer';
    [...zoomInButton.children][0].style.fill = 'var(--viewover-icon-color)';
  }
};

export const toggleZoomOutDisable = (state) => {
  if (state) {
    zoomOutButton.setAttribute('disabled', '');
    zoomOutButton.style.cursor = 'default';
    [...zoomOutButton.children][0].style.fill =
      'var(--viewover-icon-color-disable)';
  } else {
    zoomOutButton.removeAttribute('disabled');
    zoomOutButton.style.cursor = 'pointer';
    [...zoomOutButton.children][0].style.fill = 'var(--viewover-icon-color)';
  }
};