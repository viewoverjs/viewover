'use strict';

// Main Functions
import { applyBoxviewOnDoc } from './modules/document/applyBoxviewOnDoc.js';
applyBoxviewOnDoc();



// Get active boxview image resolution
// const GetImageResolution = function () {
//   const canvas = document.createElement('canvas');
//   const ctx = canvas.getContext('2d');
//   canvas.width = activeMainElement.width;
//   canvas.height = activeMainElement.height;
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
