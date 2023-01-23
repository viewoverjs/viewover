export default function getElementTarget(e) {
  if (e.target.classList.contains('viewover-open-button')) {
    if (e.target.parentElement.querySelector('video')) {
      const elementTarget = e.target.parentElement.querySelector('video');
      return elementTarget;
    }
    if (e.target.parentElement.querySelector('iframe')) {
      const elementTarget = e.target.parentElement.querySelector('iframe');
      return elementTarget;
    }
  } else {
    const elementTarget = e.target;
    return elementTarget;
  }
}
