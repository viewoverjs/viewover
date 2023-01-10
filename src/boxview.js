'use strict';

// Main Functions
import { applyBoxviewOnDoc } from './modules/document/applyBoxviewOnDoc.js';
import controlbarAddEvents from './modules/boxview/controlbar/controlbarAddEvents.js';

controlbarAddEvents();
applyBoxviewOnDoc();

// thumbnailsShowButton.classList.add('boxview__thumbnails-button_active');

// Get active boxview image resolution
// const GetImageResolution = function () {
//   const canvas = document.createElement('canvas');
//   const ctx = canvas.getContext('2d');
//   canvas.width = boxviewActiveMedia.width;
//   canvas.height = boxviewActiveMedia.height;
//   ctx.drawImage(img, 0, 0);
//   const rgba = ctx.getImageData(0, 0, img.width, img.height).data;
// };

// boxviewContainer.addEventListener('click', (e) => {
//   if (e.target === boxviewThumbnailsTrack) {
//     boxviewThumbnailsTrack.setAttribute('data-focus', 'true');
//   } else {
//     boxviewThumbnailsTrack.setAttribute('data-focus', 'false');
//   }
// });
