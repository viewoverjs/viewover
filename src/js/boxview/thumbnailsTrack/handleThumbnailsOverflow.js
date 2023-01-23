import { boxviewThumbnailsTrack } from '../../document/docConstants.js';
import { boxviewContainer } from '../../document/docConstants.js';

export const scrollThumbnailToViewport = (element) => {
  const margin = 23;
  const isHiddenOnRight =
    element.getBoundingClientRect().right + margin > window.innerWidth;
  const isHiddenOnLeft = element.getBoundingClientRect().left < margin;
  if (isHiddenOnLeft) {
    boxviewThumbnailsTrack.scrollLeft -=
      window.innerWidth - element.getBoundingClientRect().right - margin;
  }
  if (isHiddenOnRight) {
    boxviewThumbnailsTrack.scrollLeft +=
      element.getBoundingClientRect().left - margin;
  }
};

export const setScrollbarHeight = () => {
  const overflowElement =
    boxviewThumbnailsTrack.offsetWidth < boxviewThumbnailsTrack.scrollWidth;

  if (!overflowElement) {
    boxviewContainer.style.setProperty(
      '--boxview-thumbnails-track-scroll-height',
      '0px'
    );
  } else {
    boxviewContainer.style.setProperty(
      '--boxview-thumbnails-track-scroll-height',
      '10px'
    );
  }
};
