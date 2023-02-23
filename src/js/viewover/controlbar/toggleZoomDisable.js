import { zoomInButton, zoomOutButton } from '../../document/docConstants.js';

export const setZoomInDisable = (state) => {
  if (state) {
    zoomInButton.setAttribute('disabled', '');
    zoomInButton.style.cursor = 'default';
    zoomInButton.setAttribute('tabindex', '-1');
    [...zoomInButton.children][0].style.fill =
      'var(--viewover-icon-color-disable)';
  } else {
    zoomInButton.removeAttribute('disabled');
    zoomInButton.setAttribute('tabindex', '0');
    zoomInButton.style.cursor = 'pointer';
    [...zoomInButton.children][0].style.fill = 'var(--viewover-icon-color)';
  }
};

export const setZoomOutDisable = (state) => {
  if (state) {
    zoomOutButton.setAttribute('disabled', '');
    zoomOutButton.style.cursor = 'default';
    zoomOutButton.setAttribute('tabindex', '-1');
    [...zoomOutButton.children][0].style.fill =
      'var(--viewover-icon-color-disable)';
  } else {
    zoomOutButton.removeAttribute('disabled');
    zoomOutButton.setAttribute('tabindex', '0');
    zoomOutButton.style.cursor = 'pointer';
    [...zoomOutButton.children][0].style.fill = 'var(--viewover-icon-color)';
  }
};