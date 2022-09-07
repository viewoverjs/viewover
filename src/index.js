import ClickAndHoldEvent from './components/ClickAndHoldEvent.js';
import { dialog } from './utils/dialog.js';

// Create dialog
const dialogElement = document.createElement('dialog');
dialogElement.classList.add('boxview');
dialogElement.innerHTML = dialog;
document.body.appendChild(dialogElement);

// const
const allMediaList = document.querySelectorAll('[data-media]');
const boxview = document.querySelector('.boxview');

const nextButton = boxview.querySelector('[data-button="nav-next"]');
const beforeButton = boxview.querySelector('[data-button="nav-before"]');
const shareButton = boxview.querySelector('[data-button="share"]');
const zoomInButton = boxview.querySelector('[data-button="zoom-in"]');
const zoomOutButton = boxview.querySelector('[data-button="zoom-out"]');
const closeButton = boxview.querySelector('[data-button="close"]');

const shareOptionsButtons = boxview.querySelector('.share-options-buttons');

const boxviewMediaWrapper = boxview.querySelector('.boxview__media');
const boxviewPreview = boxview.querySelector('.boxview__preview');



// Create active boxview media 
let boxviewActiveMedia;

const createImageElement = function({ type, url }) {
  boxviewActiveMedia = document.createElement(`${type}`);
  boxviewActiveMedia.classList.add(`boxview__${type}`);
  boxviewActiveMedia.setAttribute('src', url);
  boxviewMediaWrapper.appendChild(boxviewActiveMedia);
}

const createMediaElement = function({ type, url }) {
  const imageTemplate = document.createElement(`${type}`);
  const videoTemplate = document.createElement(`${type}`);
  // if (type === 'img') {
  //   boxviewActiveMedia.classList.add(`boxview__${type}`);
  //   boxviewActiveMedia.setAttribute('src', url);
  //   boxviewMediaWrapper.appendChild(boxviewActiveMedia);
  // }
  // if (type === 'video') {
  //   boxviewActiveMedia
  // }
}

// Get active boxview image resolution
const GetImageResolution = function() {
  const canvas = document.createElement('canvas'); 
  const ctx = canvas.getContext('2d');
  
  canvas.width = boxviewActiveMedia.width; 
  canvas.height = boxviewActiveMedia.height;
   
  ctx.drawImage(img, 0, 0); 
   
  const rgba = ctx.getImageData( 
    0, 0, img.width, img.height 
  ).data;
}

// Document Events
document.addEventListener('mouseup', (e) => {
  if (e.target === boxview) {
    const boxviewMediaChildren = [...boxviewMediaWrapper.children];
    boxview.close();
    boxviewMediaChildren.forEach((element) => {
      if (!element.classList.contains('button')) {
        element.remove();
      }
    });
    removeAllChildNodes(boxviewPreview);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    boxview.close();
    const boxviewMediaChildren = [...boxviewMediaWrapper.children];
    boxviewMediaChildren.forEach((element) => {
      if (!element.classList.contains('button')) {
        element.remove();
      }
    });
    removeAllChildNodes(boxviewPreview);
  }
});

// --- Handle the buttons ---
// share button
shareButton.addEventListener('click', handleShareButton);

function handleShareButton() {
  shareOptionsButtons.classList.toggle('share-options-buttons_active');
}

// zoom buttons
ClickAndHoldEvent.apply(zoomInButton, handleZoomInButton);
ClickAndHoldEvent.apply(zoomOutButton, handleZoomOutButton);


let imageScale = 1;
function handleZoomInButton() {
  if (imageScale < 3) {
    imageScale += 0.003;
    return (boxviewActiveMedia.style.transform = `scale(${imageScale})`);
  }
}

function handleZoomOutButton() {
  if (imageScale > 1.01) {
    imageScale -= 0.003;
    return (boxviewActiveMedia.style.transform = `scale(${imageScale})`);
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
const removeAllChildNodes = function (parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const handleCloseButton = function() {
  boxview.close();
  const boxviewMediaChildren = [...boxviewMediaWrapper.children];
  boxviewMediaChildren.forEach((element) => {
    if (!element.classList.contains('button')) {
      element.remove();
    }
  });
  removeAllChildNodes(boxviewPreview);
}

// close button
closeButton.addEventListener('click', () => {
  handleCloseButton();
});



// Next button
// const handleNextButton = function(mediaObjsList) {
//   const mediaSrc = boxviewActiveMedia.getAttribute('src');
//   const boxviewActiveMediaIndex = mediaObjsList.findIndex((media) => media.url === mediaSrc);
//   const num = boxviewActiveMediaIndex + 1;

//   let boxviewNextMedia;
//   if (num < mediaObjsList.length) {
//     boxviewNextMedia = mediaObjsList.find((media, i) => i === num);
//   } else {
//     boxviewNextMedia = mediaObjsList.at(0);
//   }
//   boxviewActiveMedia.setAttribute('src', boxviewNextMedia.url);
// }

// Before button
// const handleBeforeButton = function(mediaObjsList) {
//   const mediaSrc = boxviewActiveMedia.getAttribute('src');
//   const boxviewActiveMediaIndex = mediaObjsList.findIndex((media) => media.url === mediaSrc);
//   const num = boxviewActiveMediaIndex - 1;
//   let boxviewBeforeMedia;

//   if (num > -1) {
//     boxviewBeforeMedia = mediaObjsList.find((media, i) => i === num);
//   } else {
//     boxviewBeforeMedia = mediaObjsList.at(-1);
//   }
//   boxviewActiveMedia.setAttribute('src', boxviewBeforeMedia.url);
// }

// show preview strip
// const showPreviewMedia = function(mediaSrc) {
//   boxviewActiveMedia.setAttribute('src', mediaSrc);
// }

// function showPreviewStrip(mediaObjsList) {
//   const boxviewContent = boxview.querySelector('[data-element="boxview-content"]');
//   boxviewContent.style.setProperty('--media-preview-height', '80px');
//   for (let i = 0; i < mediaObjsList.length; i++) {
//     const mediaElement = document.createElement('img');
//     const mediaUrl = mediaObjsList[i].url;
//     mediaElement.setAttribute('src', mediaUrl);
//     mediaElement.classList.add('boxview__preview-media');
//     boxviewPreview.appendChild(mediaElement);
//   }
//   const mediaPreviewList = [...boxviewPreview.children];
//   mediaPreviewList.forEach((media) => {
//     const mediaSrc = media.getAttribute('src');
//     media.addEventListener('click', () => {
//       showPreviewMedia(mediaSrc);
//     });
//   });
// }

// Open Dialog
const openBoxview = function(e) {
  const mediaElementsList = [...e.target.parentElement.children];
  // const mediaObjsList = mediaElementsList.map((element) => ({ type: element.localName, url: element.currentSrc }));

  const initialMedia = (function getInitialMedia() {
    return { type: e.target.localName, url: e.target.currentSrc };
  })();

  const CheckWhatTypesContains = function() {
    const allImages = mediaElementsList.every(element => element.localName === 'img');
    const someVideo = mediaElementsList.some(element => element.localName === 'video');
    const someIframe = mediaElementsList.some(element => element.localName === 'iframe');

    if (allImages) {
      createImageElement(initialMedia);
    }
    if (someVideo && !someIframe) {
      createMediaElement(initialMedia);
    }
    if (someIframe) {
      const youtubeElementsList = mediaElementsList.filter(element => element.localName === 'iframe');
      const youtubeObjsList = youtubeElementsList.map((element) => ({ type: element.localName, url: element.attributes.src.value }));
      console.log(youtubeElementsList);
    }
    
    
  }
  CheckWhatTypesContains();

  // const initialMediaSrc = getInitialMediaSrc(e.target.src, initialMediaSrc);
  

  // function getInitialMediaSrc(src, initialMediaSrc) {
  //   if (src !== '') {
  //     // If the src attribute is an image
  //     initialMediaSrc = src;
  //   } else if {
  //     const ;
  //     initialMediaSrc = ;
  //   } else if {

  //   }
  // }

  // option =  on/off
  // Show preview strip
  // showPreviewStrip(mediaObjsList, boxviewPreview);

  // Display the clicked image
  // createMediaElement(initialMedia);
  console.log(boxviewActiveMedia);
  // Zoom wheel
  boxviewActiveMedia.addEventListener('wheel', handleZoomWheel);
  
  // Next button
  nextButton.onclick = () => {
    handleNextButton(mediaObjsList);
  };

  // Before button
  beforeButton.onclick = () => {
    handleBeforeButton(mediaObjsList);
  };

  // Show modal
  boxview.showModal();
}

allMediaList.forEach((media) => {
  media.addEventListener('click', openBoxview);
});