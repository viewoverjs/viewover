import { disableScroll, enableScroll } from '../utils/scroll-control.js';

export default class Popover {
  constructor(popover) {
    this.popover = popover;
  }

  #handleMouseClosePopover = (evt) => {
    if (evt.target === this.popover) {
      this.closePopover();
    }
  };

  #handleEscClose = (evt) => {
    if (evt.key == 'Escape') {
      this.closePopover();
    }
  };

  setEventListeners() {
    this.closePopoverButton = this.popover.querySelector(
      '.viewover__close-button'
    );
    this.closePopoverButton.addEventListener('click', this.closePopover);
    document.addEventListener('mousedown', this.#handleMouseClosePopover);
    document.addEventListener('keydown', this.#handleEscClose);
  }

  removeEventListeners() {
    this.closePopoverButton.removeEventListener('click', this.closePopover);
    document.removeEventListener('keydown', this.#handleEscClose);
    document.removeEventListener('mousedown', this.#handleMouseClosePopover);
  }

  openPopover() {
    this.popover.classList.add('viewover_opened');
    this.setEventListeners();
    disableScroll();
  }

  closePopover() {
    this.removeEventListeners();
    this.popover.classList.remove('viewover_opened');
    enableScroll();
  }
}
