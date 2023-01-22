export const disableScroll = () => {
  // Get the current page scroll position
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // if any scroll is attempted, set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
  document.body.style.overflow = 'hidden';
  document.body.style.maxWidth = '100vw';
};
export const enableScroll = () => {
  window.onscroll = function () {};
  document.body.style.overflow = 'visible';
  document.body.style.maxWidth = 'revert';
};