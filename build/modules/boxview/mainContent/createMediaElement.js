export const activeMainElement = {};
export const createMediaElement = (type, url) => {
  activeMainElement.element = document.createElement(`${type}`);
  activeMainElement.element.classList.add(`boxview__${type}`);
  if (type === 'video') {
    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', url);
    activeMainElement.element.setAttribute('controls', '');
    // sourceElement.setAttribute('type', 'video/mp4');
    return activeMainElement.element.appendChild(sourceElement);
  }
  if (type === 'img' || type === 'iframe') {
    return activeMainElement.element.setAttribute('src', url);
  }
};