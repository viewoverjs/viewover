import { activeMainElement } from '../mainContent/createMediaElement.js';

export const activeImage = {
  imageScale: 1,
};

export const handleZoomInButton = () => {
  if (activeImage.imageScale < 3) {
    activeImage.imageScale += 0.003;
    return (activeMainElement.element.style.transform = `scale(${activeImage.imageScale})`);
  }
};

export const handleZoomOutButton = () => {
  if (activeImage.imageScale > 1.01) {
    activeImage.imageScale -= 0.003;
    return (activeMainElement.element.style.transform = `scale(${activeImage.imageScale})`);
  }
};

export const handleZoomWheel = (e) => {
  e.preventDefault();

  if (e.ctrlKey) {
    if (e.deltaY > 0) {
      activeImage.imageScale -= 0.05;
    }
    if (e.deltaY < 0) {
      activeImage.imageScale += 0.05;
    }

    // Restrict scale
    activeImage.imageScale = Math.min(Math.max(1, activeImage.imageScale), 3);

    return (
      (e.target.style.transform = `scale(${activeImage.imageScale})`),
      (e.target.style.transition = 'linear .2s')
    );
  }
};
