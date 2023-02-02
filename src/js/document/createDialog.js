import { dialogContent } from '../utils/dialogContent.js';

const viewover = document.createElement('dialog');
viewover.setAttribute('id', 'viewover');
viewover.classList.add('viewover');
viewover.innerHTML = dialogContent;
document.body.appendChild(viewover);

export default viewover;
