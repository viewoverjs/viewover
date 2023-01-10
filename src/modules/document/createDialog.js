import { dialogContent } from '../../utils/dialogContent.js';

const boxview = document.createElement('dialog');
boxview.setAttribute('id', 'boxview');
boxview.classList.add('boxview');
boxview.innerHTML = dialogContent;
document.body.appendChild(boxview);

export default boxview;
