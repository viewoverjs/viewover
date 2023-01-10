import { boxviewActiveMedia } from "./createMediaElement.js";

export default function getBoxviewActiveMediaUrl() {
  let url =
    boxviewActiveMedia.element.localName === 'iframe'
      ? boxviewActiveMedia.element.src
      : boxviewActiveMedia.element.currentSrc;
  return url;
}
