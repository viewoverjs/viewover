import { viewoverMediaWrapper } from '../../document/docConstants.js';

export default function removeViewoverMediaWrapperChildren() {
  const viewoverMediaChildren = [...viewoverMediaWrapper.children];
  viewoverMediaChildren.forEach((element) => {
    if (!element.classList.contains('button')) {
      element.remove();
    }
  });
}
