export default function toggleButtonIcon(visibleButton, hiddenButton) {
  visibleButton.classList.remove('button_hidden');
  visibleButton.classList.add('button_visible');
  hiddenButton.classList.remove('button_visible');
  hiddenButton.classList.add('button_hidden');
}