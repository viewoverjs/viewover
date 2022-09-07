import ClickAndHoldEvent from './components/ClickAndHoldEvent.js';
import { dialog } from './utils/dialog.js';

// Create dialog
const dialogElement = document.createElement('dialog');
dialogElement.classList.add('popup-box');
dialogElement.innerHTML = dialog;
document.body.appendChild(dialogElement);
const mediaElementActive = document.createElement('img');
mediaElementActive.classList.add('popup-box__image');

// const
const mediaImages = document.querySelectorAll('[data-media="image"]');
const popupBox = document.querySelector('.popup-box');

const nextButton = popupBox.querySelector('[data-button="nav-next"]');
const beforeButton = popupBox.querySelector('[data-button="nav-before"]');
const shareButton = popupBox.querySelector('[data-button="share"]');
const zoomInButton = popupBox.querySelector('[data-button="zoom-in"]');
const zoomOutButton = popupBox.querySelector('[data-button="zoom-out"]');
const closeButton = popupBox.querySelector('[data-button="close"]');

const shareOptionsButtons = popupBox.querySelector('.share-options-buttons');

const popupBoxMedia = popupBox.querySelector('.popup-box__media');
const popupBoxPreview = popupBox.querySelector('.popup-box__preview');

// function getKeyByValue(object, value) {
//   return Object.keys(object).find((key) => object[key] === value);
// }

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// Document Events
document.addEventListener('mouseup', (e) => {
  if (e.target === popupBox) {
    const popupBoxMediaChildren = [...popupBoxMedia.children];
    removeEventListeners();
    popupBox.close();
    popupBoxMediaChildren.forEach((element) => {
      if (!element.classList.contains('button')) {
        element.remove();
      }
    });
    removeAllChildNodes(popupBoxPreview);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    removeEventListeners();
    popupBox.close();
    const popupBoxMediaChildren = [...popupBoxMedia.children];
    popupBoxMediaChildren.forEach((element) => {
      if (!element.classList.contains('button')) {
        element.remove();
      }
    });
    removeAllChildNodes(popupBoxPreview);
  }
});

// Events Handlers
mediaImages.forEach((image) => {
  image.addEventListener('click', openPopupBox);
});

// --- Handle the buttons ---
// share button
shareButton.addEventListener('click', handleShareButton);

function handleShareButton(e) {
  shareOptionsButtons.classList.toggle('share-options-buttons_active');
}

// zoom buttons
ClickAndHoldEvent.apply(zoomInButton, handleZoomInButton);
ClickAndHoldEvent.apply(zoomOutButton, handleZoomOutButton);
mediaElementActive.addEventListener('wheel', handleZoomWheel);

let imageScale = 1;
function handleZoomInButton() {
  if (imageScale < 3) {
    imageScale += 0.003;
    return (mediaElementActive.style.transform = `scale(${imageScale})`);
  }
}

function handleZoomOutButton() {
  if (imageScale > 1.01) {
    imageScale -= 0.003;
    return (mediaElementActive.style.transform = `scale(${imageScale})`);
  }
}

function handleZoomWheel(e) {
  if (e.deltaY > 0) {
    imageScale -= 0.05;
  }
  if (e.deltaY < 0) {
    imageScale += 0.05;
  }
  // Restrict scale
  imageScale = Math.min(Math.max(1, imageScale), 3);
  return (e.target.style.transform = `scale(${imageScale})`);
}

// close button
closeButton.addEventListener('click', (e) => {
  handleCloseButton(e, popupBox, popupBoxMedia, popupBoxPreview, nextButton, beforeButton);
});

function handleCloseButton(e) {
  removeEventListeners();
  popupBox.close();
  const popupBoxMediaChildren = [...popupBoxMedia.children];
  popupBoxMediaChildren.forEach((element) => {
    if (!element.classList.contains('button')) {
      element.remove();
    }
  });
  removeAllChildNodes(popupBoxPreview);
}

function removeEventListeners() {
  nextButton.removeEventListener('click', handleNextButton);
  beforeButton.removeEventListener('click', handleNextButton);
}





// Open Dialog
function openPopupBox(e) {
  const mediaContent = e.target.parentElement.querySelectorAll('*');

  let mediaUrlList = [];
  mediaContent.forEach((item) => {
    const mediaUrl = item.currentSrc;
    mediaUrlList.push(mediaUrl);
  });

  const mediaUrls = [];
  for (let i = 0; i < mediaUrlList.length; i++) {
    const mediaObj = {
      id: i,
      type: 'image',
      url: mediaUrlList[i],
    };

    mediaUrls.push(mediaObj);
  }
  mediaUrlList = mediaUrls;

  // option =  on/off
  showPreviewStrip(mediaUrlList, popupBoxPreview);

  

  // --- Display the clicked image ---
  mediaElementActive.setAttribute('src', e.target.src);
  popupBoxMedia.appendChild(mediaElementActive);

  // before/next buttons
nextButton.addEventListener('click', handleNextButton);
// beforeButton.addEventListener('click', () => handleBeforeButton(mediaUrlList));
let currentMedia = mediaUrlList.find((media) => media.url === e.target.src);
function handleNextButton() {
  
  console.log('a');
  const mediaSrc = mediaElementActive.getAttribute('src');
  let mediaIndex = mediaUrlList.findIndex(media => media.url === currentMedia.url);
  console.log(mediaIndex);
  if (mediaSrc !== currentMedia.url) {
    const num = mediaIndex + 1;
    if (num < mediaUrlList.length) {
      currentMedia = mediaUrlList.find(media => media.id === num);
    } else {
      currentMedia = mediaUrlList[0];
    }
    mediaElementActive.setAttribute('src', currentMedia.url);
  } else {
    mediaIndex = mediaUrlList.findIndex(media => media.url === mediaSrc);
    const num = mediaIndex + 1;
    if (num < mediaUrlList.length) {
      currentMedia = mediaUrlList.find(media => media.id === num);
    } else {
      currentMedia = mediaUrlList[0];
    }
    mediaElementActive.setAttribute('src', currentMedia.url);
  }

  
}

  // --- Show modal ---
  popupBox.showModal();
}

function showPreviewStrip(mediaUrlList) {
  const popupBoxContent = popupBox.querySelector('[data-element="popup-box-content"]');
  popupBoxContent.style.setProperty('--media-preview-height', '80px');
  for (let i = 0; i < mediaUrlList.length; i++) {
    const mediaElement = document.createElement('img');
    const mediaUrl = mediaUrlList[i].url;
    mediaElement.setAttribute('src', mediaUrl);
    mediaElement.classList.add('popup-box__preview-media');
    popupBoxPreview.appendChild(mediaElement);
  }
  const mediaPreviewList = [...popupBoxPreview.children];
  mediaPreviewList.forEach((media) => {
    const mediaSrc = media.getAttribute('src');
    media.addEventListener('click', () => {
      showPreviewMedia(mediaSrc)
    });
  })
  
}

function showPreviewMedia(mediaSrc) {
  mediaElementActive.setAttribute('src', mediaSrc);
}
