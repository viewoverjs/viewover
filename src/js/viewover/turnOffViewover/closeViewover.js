import viewover from '../../document/createDialog.js';
import resetViewoverContent from './resetViewoverContent.js';

export default function closeViewover() {
  if (viewover.hasAttribute('open')) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        resetViewoverContent();
      }
    });

    // document.addEventListener('mouseup', (e) => {
    //   if (e.target === viewover) {
    //     const viewoverMediaChildren = [...viewoverMediaWrapper.children];
    //     viewover.close();
    //     viewoverMediaChildren.forEach((element) => {
    //       if (!element.classList.contains('button')) {
    //         element.remove();
    //       }
    //     });
    //     removeAllChildNodes(viewoverThumbnailsTrack);
    //     activeMainElement.element = '';
    //   }
    // });
  }
}
