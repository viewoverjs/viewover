import { boxviewMediaWrapper } from '../../document/docConstants.js';

export default function removeBoxviewMediaWrapperChildren() {
  const boxviewMediaChildren = [...boxviewMediaWrapper.children];
  boxviewMediaChildren.forEach((element) => {
    if (!element.classList.contains('button')) {
      element.remove();
    }
  });
}
