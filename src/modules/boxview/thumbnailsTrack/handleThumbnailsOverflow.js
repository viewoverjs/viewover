import { boxviewThumbnailsTrack } from '../../document/docConstants.js';
import { boxviewContainer } from '../../document/docConstants.js';

export const scrollThumbnailToViewport = (element) => {
  const isHiddenOnRight =
    element.getBoundingClientRect().right + 23 > window.innerWidth;
  const isHiddenOnLeft = element.getBoundingClientRect().left < 23;

  if (isHiddenOnLeft) {
    boxviewThumbnailsTrack.scrollLeft -= window.innerWidth;
  }
  if (isHiddenOnRight) {
    boxviewThumbnailsTrack.scrollLeft += window.innerWidth;
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
