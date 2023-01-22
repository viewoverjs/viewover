import boxview from '../../document/createDialog.js';
import resetBoxviewContent from '../turnOffBoxview/resetBoxviewContent.js';
export default function handleCloseButton() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
  resetBoxviewContent();
}