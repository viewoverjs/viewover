export default function toggleButtonIcon(visibleButton, hiddenButton) {
  visibleButton.classList.remove('button_hidden');
  visibleButton.setAttribute('tabindex', '0');
  visibleButton.classList.add('button_visible');
  hiddenButton.classList.remove('button_visible');
  hiddenButton.setAttribute('tabindex', '-1');
  hiddenButton.classList.add('button_hidden');
}
