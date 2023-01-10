import { boxviewActiveMedia } from "../mainContent/createMediaElement.js";

let imageScale = 1;
export const handleZoomInButton = () => {
  if (imageScale < 3) {
    imageScale += 0.003;
    return (boxviewActiveMedia.element.style.transform = `scale(${imageScale})`);
  }
};

export const handleZoomOutButton = () => {
  if (imageScale > 1.01) {
    imageScale -= 0.003;
    return (boxviewActiveMedia.element.style.transform = `scale(${imageScale})`);
  }
};

export const handleZoomWheel = (e) => {
  if (e.deltaY > 0) {
    imageScale -= 0.05;
  }
  if (e.deltaY < 0) {
    imageScale += 0.05;
  }

  // Restrict scale
  imageScale = Math.min(Math.max(1, imageScale), 3);

  return (
    (e.target.style.transform = `scale(${imageScale})`),
    (e.target.style.transition = 'linear .2s')
  );
};
