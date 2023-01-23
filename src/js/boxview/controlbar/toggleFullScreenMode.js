import { boxviewContainer, controlBar } from '../../document/docConstants.js';

export default function toggleFullScreenMode() {
  if (!document.fullscreenElement) {
    boxviewContainer.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
