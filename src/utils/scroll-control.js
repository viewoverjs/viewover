export const disableScroll = () => {
  // Get the current page scroll position
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
  // if any scroll is attempted, set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
};

export const enableScroll = () => {
  window.onscroll = function () {};
};
