

export const boxviewActiveMedia = {};

export const createMediaElement = (type) => {
  boxviewActiveMedia.element = document.createElement(`${type}`);
  boxviewActiveMedia.element.classList.add(`boxview__${type}`);
};