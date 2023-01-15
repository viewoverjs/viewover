import { boxviewContainer } from '../../document/docConstants.js';

export default function isOverflowing(element) {
  const overflowElement = element.offsetWidth < element.scrollWidth;

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
}
