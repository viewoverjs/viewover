import { activeMainElement } from '../mainContent/createMediaElement.js';
import { boxviewContainer, boxviewMainContent } from '../../document/docConstants.js';
const getElementsSizes = activeMainElement => {
  const mainElementNaturalSize = {
    width: activeMainElement.element.naturalWidth,
    height: activeMainElement.element.naturalHeight
  };
  const mainElementScaleSize = {
    width: activeMainElement.element.getBoundingClientRect().width,
    height: activeMainElement.element.getBoundingClientRect().height
  };
  const boxviewMainContentSize = {
    width: boxviewMainContent.clientWidth,
    height: boxviewMainContent.clientHeight
  };
  const isHeightOverflow = mainElementScaleSize.height > boxviewMainContentSize.height;
  const isWidthOverflow = mainElementScaleSize.width > boxviewMainContentSize.width;
  const isHeightOverScale = mainElementNaturalSize.height > mainElementScaleSize.height;
  const isWidthOverScale = mainElementNaturalSize.width > mainElementScaleSize.width;
  return {
    isHeightOverflow,
    isWidthOverflow,
    isHeightOverScale,
    isWidthOverScale
  };
};
export const activeImage = {
  imageScale: 1
};
export const handleZoomInButton = () => {
  const isActiveImageOverflow = getElementsSizes(activeMainElement);
  if (isActiveImageOverflow.isHeightOverScale && isActiveImageOverflow.isWidthOverScale) {
    activeImage.imageScale += 0.05;
    return activeMainElement.element.style.transform = `scale(${activeImage.imageScale})`;
  }
};
export const handleZoomOutButton = () => {
  const isActiveImageOverflow = getElementsSizes(activeMainElement);
  if (isActiveImageOverflow.isHeightOverflow && isActiveImageOverflow.isWidthOverflow) {
    activeImage.imageScale -= 0.05;
    return activeMainElement.element.style.transform = `scale(${activeImage.imageScale})`;
  }
};
export const handleZoomWheel = e => {
  const isActiveImageOverflow = getElementsSizes(activeMainElement);
  if (e.ctrlKey) {
    e.preventDefault();
    if (e.deltaY > 0 && isActiveImageOverflow.isHeightOverflow && isActiveImageOverflow.isWidthOverflow) {
      activeImage.imageScale -= 0.05;
    }
    if (e.deltaY < 0 && isActiveImageOverflow.isHeightOverScale && isActiveImageOverflow.isWidthOverScale) {
      activeImage.imageScale += 0.05;
    }

    // Restrict scale
    activeImage.imageScale = Math.min(Math.max(1, activeImage.imageScale), 3);
    return e.target.style.transform = `scale(${activeImage.imageScale})`, e.target.style.transition = 'linear .2s';
  }
};