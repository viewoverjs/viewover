import { disableScroll, enableScroll } from '../utils/scroll-control.js';

export default class Popover {
  constructor(popover) {
    this.popover = popover;
    this.closePopover = this.closePopover;
    this.openPopover = this.openPopover;
    this.setEventListeners = this.setEventListeners;
    this.removeEventListeners = this.removeEventListeners;
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
      '.boxview__close-button'
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
    this.popover.classList.add('boxview_opened');
    this.setEventListeners();
    disableScroll();
  }

  closePopover() {
    this.removeEventListeners();
    this.popover.classList.remove('boxview_opened');
    enableScroll();
  }
}
