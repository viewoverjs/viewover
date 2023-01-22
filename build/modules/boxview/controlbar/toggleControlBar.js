import { controlBar } from '../../document/docConstants.js';
let timeout;
export const showControlBar = () => {
  clearTimeout(timeout);
  controlBar.style.visibility = 'visible';
  controlBar.style.opacity = '1';
  return;
};
export const toggleControlBar = () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    controlBar.style.visibility = 'visible';
    controlBar.style.opacity = '1';
  }, 100);
  timeout = setTimeout(() => {
    controlBar.style.visibility = 'hidden';
    controlBar.style.opacity = '0';
  }, 2000);
};