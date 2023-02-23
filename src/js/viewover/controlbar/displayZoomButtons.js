import { zoomInButton, zoomOutButton } from '../../document/docConstants.js';
import checkIfImageScalable from './checkIfImageScalable.js';
import { setZoomInDisable, setZoomOutDisable } from './toggleZoomDisable.js';

export const showZoomButtons = () => {
  if (!zoomInButton.classList.contains('viewover__zoom-button_visible')) {
    zoomInButton.classList.add('viewover__zoom-button_visible');
    zoomOutButton.classList.add('viewover__zoom-button_visible');
  }
  
  setZoomInDisable(true);
  setZoomOutDisable(true);
};

export const hideZoomButtons = () => {
  if (zoomInButton.classList.contains('viewover__zoom-button_visible')) {
    zoomInButton.classList.remove('viewover__zoom-button_visible');
    zoomOutButton.classList.remove('viewover__zoom-button_visible');
  }
};

export const enableZoomButtons = async () => {
  const zoomCapability = await checkIfImageScalable();

  console.log(zoomCapability);

  if (zoomCapability.isScalable) {
    setZoomInDisable(false);
  } else {
    setZoomInDisable(true);
  }
  
  if (zoomCapability.isInvertible) {
    setZoomOutDisable(false);
  } else {
    setZoomOutDisable(true);
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


