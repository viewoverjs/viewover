import {
// nextButton,
// previousButton,
// fullscreenEntryButton,
// fullscreenExitButton,
// thumbnailsShowButton,
// thumbnailsHideButton,
// boxviewThumbnailsTrack,
// boxviewMainContent,
boxviewMediaWrapper } from '../../document/docConstants.js';
import { activeMainElement } from '../mainContent/createMediaElement.js';
let oldx = 0;
let oldy = 0;
export default function handleScrollByMouseover(e) {
  const activeMainElementSize = activeMainElement.element.getBoundingClientRect();
  const boxviewMediaWrapperSize = boxviewMediaWrapper.getBoundingClientRect();
  if (e.pageX < oldx) {
    boxviewMediaWrapper.scrollLeft += 15;
  }
  if (e.pageX > oldx) {
    boxviewMediaWrapper.scrollLeft -= 15;
  }
  if (e.pageY < oldy) {
    boxviewMediaWrapper.scrollTop += 15;
  }
  if (e.pageY > oldy) {
    boxviewMediaWrapper.scrollTop -= 15;
  }
  oldx += e.pageX;
  oldy = e.pageY;

  // console.log(boxviewMediaWrapperSize, activeMainElementSize);

  // console.log(e);
}