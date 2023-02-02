import { viewoverContainer, controlBar } from '../../document/docConstants.js';

export default function toggleFullScreenMode() {
  if (!document.fullscreenElement) {
    viewoverContainer.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
