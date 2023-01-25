import { zoomInButton, zoomOutButton } from '../../document/docConstants.js';
import checkIfImageScalable from './checkIfImageScalable.js';
import getMainElementsSizes from '../mainContent/getMainElementsSizes.js';
import { toggleZoomInDisable, toggleZoomOutDisable } from './toggleZoomDisable.js';

export const showZoomButtons = () => {
  if (!zoomInButton.classList.contains('viewover__zoom-button_visible')) {
    zoomInButton.classList.add('viewover__zoom-button_visible');
    zoomOutButton.classList.add('viewover__zoom-button_visible');
  }

  toggleZoomInDisable(true);
  toggleZoomOutDisable(true);
};

export const enableZoomButtons = async () => {
  const elementsSizes = await getMainElementsSizes();
  const zoomCapability = await checkIfImageScalable();

  if (zoomCapability.isScalable) {
    toggleZoomInDisable(false);
  }
  if (zoomCapability.isInvertible) {
    toggleZoomOutDisable(false);
  }

  // if (!isScalable) {
  //   zoomInButton.style.opacity = '0.2';
  // } else {
  //   zoomInButton.style.opacity = '1';
  // }

  // if (scale != 'scale(1)') {
  //   zoomOutButton.classList.remove('button_disable');
  // } else {
  //   zoomOutButton.classList.add('button_disable');
  // }
};

export const hideZoomButtons = () => {
  if (zoomInButton.classList.contains('viewover__zoom-button_visible')) {
    zoomInButton.classList.remove('viewover__zoom-button_visible');
    zoomOutButton.classList.remove('viewover__zoom-button_visible');
  }
};
