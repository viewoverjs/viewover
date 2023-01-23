import boxview from '../../document/createDialog.js';
import resetBoxviewContent from './resetBoxviewContent.js';

export default function closeBoxview() {
  if (boxview.hasAttribute('open')) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        resetBoxviewContent();
      }
    });

    // document.addEventListener('mouseup', (e) => {
    //   if (e.target === boxview) {
    //     const boxviewMediaChildren = [...boxviewMediaWrapper.children];
    //     boxview.close();
    //     boxviewMediaChildren.forEach((element) => {
    //       if (!element.classList.contains('button')) {
    //         element.remove();
    //       }
    //     });
    //     removeAllChildNodes(boxviewThumbnailsTrack);
    //     activeMainElement.element = '';
    //   }
    // });
  }
}
