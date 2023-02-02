import { viewoverThumbnailsTrack } from '../../document/docConstants.js';
import { viewoverContainer } from '../../document/docConstants.js';

export const scrollThumbnailToViewport = (element) => {
  const margin = 23;
  const isHiddenOnRight =
    element.getBoundingClientRect().right + margin > window.innerWidth;
  const isHiddenOnLeft = element.getBoundingClientRect().left < margin;
  if (isHiddenOnLeft) {
    viewoverThumbnailsTrack.scrollLeft -=
      window.innerWidth - element.getBoundingClientRect().right - margin;
  }
  if (isHiddenOnRight) {
    viewoverThumbnailsTrack.scrollLeft +=
      element.getBoundingClientRect().left - margin;
  }
};

export const setScrollbarHeight = () => {
  const overflowElement =
    viewoverThumbnailsTrack.offsetWidth < viewoverThumbnailsTrack.scrollWidth;

  if (!overflowElement) {
    viewoverContainer.style.setProperty(
      '--viewover-thumbnails-track-scroll-height',
      '0px'
    );
  } else {
    viewoverContainer.style.setProperty(
      '--viewover-thumbnails-track-scroll-height',
      '10px'
    );
  }
};
