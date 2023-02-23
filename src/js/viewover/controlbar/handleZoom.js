import { activeMainElement } from '../mainContent/createMediaElement.js';
import checkIfImageScalable from './checkIfImageScalable.js';
import { enableZoomButtons } from './displayZoomButtons.js';
import getMainElementsSizes from '../mainContent/getMainElementsSizes.js';
import {
  setZoomInDisable,
  setZoomOutDisable,
} from './toggleZoomDisable.js';

export const handleZoomInButton = async () => {
  const elementsSizes = await getMainElementsSizes();
  const zoomCapability = await checkIfImageScalable();
  const currentWidth = elementsSizes.currentSize.width;
  const currentHeight = elementsSizes.currentSize.height;
  const naturalWidth = elementsSizes.naturalSize.width;
  const naturalHeight = elementsSizes.naturalSize.height;
  
  if (zoomCapability.isScalable) {
    activeMainElement.element.style.maxWidth = `calc(${currentWidth}px + ${naturalWidth / 20
      }px)`;
    activeMainElement.element.style.maxHeight = `calc(${currentHeight}px + ${naturalHeight / 20
      }px)`;
    console.log(naturalWidth - currentWidth  );
    console.log(naturalHeight - currentHeight);
  }
  enableZoomButtons();
};

export const handleZoomOutButton = async () => {
  const elementsSizes = await getMainElementsSizes();
  const zoomCapability = await checkIfImageScalable();
  const currentWidth = elementsSizes.currentSize.width;
  const currentHeight = elementsSizes.currentSize.height;

  const naturalWidth = elementsSizes.naturalSize.width;
  const naturalHeight = elementsSizes.naturalSize.height;

  if (zoomCapability.isInvertible) {
    activeMainElement.element.style.maxWidth = `calc(${currentWidth}px - ${naturalWidth / 20
      }px)`;
    activeMainElement.element.style.maxHeight = `calc(${currentHeight}px - ${naturalHeight / 20
      }px)`;
  }

  if (currentWidth - elementsSizes.mainContentSize.width < naturalWidth / 20) {
    setZoomOutDisable(true);
    return;
  }

  enableZoomButtons();
};

export const handleZoomWheel = async (e) => {
  if (e.ctrlKey) {
    e.preventDefault();
    const elementsSizes = await getMainElementsSizes();
    const zoomCapability = await checkIfImageScalable();
    const currentWidth = elementsSizes.currentSize.width;
    const currentHeight = elementsSizes.currentSize.height;

    const naturalWidth = elementsSizes.naturalSize.width;
    const naturalHeight = elementsSizes.naturalSize.height;

    if (e.deltaY > 0 && zoomCapability.isInvertible) {
      activeMainElement.element.style.maxWidth = `calc(${currentWidth}px - ${naturalWidth / 30
        }px)`;
      activeMainElement.element.style.maxHeight = `calc(${currentHeight}px - ${naturalHeight / 30
        }px)`;
    }
    if (e.deltaY < 0 && zoomCapability.isScalable) {
      activeMainElement.element.style.maxWidth = `calc(${currentWidth}px + ${naturalWidth / 30
        }px)`;
      activeMainElement.element.style.maxHeight = `calc(${currentHeight}px + ${naturalHeight / 30
        }px)`;
    }

    enableZoomButtons();
  }
};
