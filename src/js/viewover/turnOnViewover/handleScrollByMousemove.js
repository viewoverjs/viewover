import {
  // nextButton,
  // previousButton,
  // fullscreenEntryButton,
  // fullscreenExitButton,
  // thumbnailsShowButton,
  // thumbnailsHideButton,
  // viewoverThumbnailsTrack,
  // viewoverMainContent,
  viewoverMediaWrapper,
} from '../../document/docConstants.js';
import { activeMainElement } from '../mainContent/createMediaElement.js';

let oldx = 0;
let oldy = 0;
export default function handleScrollByMouseover(e) {
  const activeMainElementSize =
    activeMainElement.element.getBoundingClientRect();
  const viewoverMediaWrapperSize = viewoverMediaWrapper.getBoundingClientRect();

  if (e.pageX < oldx) {
    viewoverMediaWrapper.scrollLeft += 15;
  }
  if (e.pageX > oldx) {
    viewoverMediaWrapper.scrollLeft -= 15;
  }
  if (e.pageY < oldy) {
    viewoverMediaWrapper.scrollTop += 15;
  }

  if (e.pageY > oldy) {
    viewoverMediaWrapper.scrollTop -= 15;
  }

  oldx += e.pageX;
  oldy = e.pageY;

  // console.log(viewoverMediaWrapperSize, activeMainElementSize);

  // console.log(e);
}
