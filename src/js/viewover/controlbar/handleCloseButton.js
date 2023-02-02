import viewover from '../../document/createDialog.js';
import resetViewoverContent from '../turnOffViewover/resetViewoverContent.js';

export default function handleCloseButton() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }

  resetViewoverContent();
}
