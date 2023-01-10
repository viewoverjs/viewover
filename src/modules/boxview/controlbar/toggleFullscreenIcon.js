import {
  fullscreenEntryIcon,
  fullscreenExitIcon,
} from '../../document/docConstants.js';

export default function toggleFullscreenIcon() {
  if (
    fullscreenEntryIcon.style.visibility === 'hidden' &&
    fullscreenExitIcon.style.visibility === 'visible'
  ) {
    fullscreenEntryIcon.style.visibility = 'visible';
    fullscreenExitIcon.style.visibility = 'hidden';
    fullscreenEntryIcon.style.opacity = '1';
    fullscreenExitIcon.style.opacity = '0';
  } else {
    fullscreenEntryIcon.style.visibility = 'hidden';
    fullscreenExitIcon.style.visibility = 'visible';
    fullscreenEntryIcon.style.opacity = '0';
    fullscreenExitIcon.style.opacity = '1';
  }
}
