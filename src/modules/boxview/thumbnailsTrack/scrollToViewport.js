import { boxviewThumbnailsTrack } from "../../document/docConstants.js";

export default function scrollToViewport (element) {
  const isHiddenOnRight  = element.getBoundingClientRect().right + 19 > window.innerWidth;
  const isHiddenOnLeft = element.getBoundingClientRect().left < 19;
  
  if (isHiddenOnLeft) {
    console.log('isHiddenOnLeft');
    boxviewThumbnailsTrack.scrollLeft -= window.innerWidth;
  }
  if (isHiddenOnRight) {
    console.log('isHiddenOnRight');
    boxviewThumbnailsTrack.scrollLeft += window.innerWidth;
  }
}