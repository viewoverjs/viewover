export default class ClickAndHoldEvent {
  constructor(target, callback) {
    this.target = target;
    this.callback = callback;
    this.isHeld = false;
    this.activeHoldTimeoutId = null;

    ['mousedown', 'touchstart'].forEach((eventType) => {
      this.target.addEventListener(eventType, this.#onHoldStart.bind(this));
    });

    ['mouseup', 'mouseleave', 'mouseout', 'touchend', 'touchcancel'].forEach((eventType) => {
      this.target.addEventListener(eventType, this.#onHoldEnd.bind(this));
    });
  }

  #onHoldStart() {
    this.isHeld = true;
    // for (let i = 0; i <= 30; i++) {
    //     console.log(i);
    // }
    this.activeHoldTimeoutId = setInterval(() => {
      if (this.isHeld) {
        this.callback();
      }
    }, 0);
  }

  #onHoldEnd() {
    this.isHeld = false;
    clearTimeout(this.activeHoldTimeoutId);
  }

  static apply(target, callback) {
    new ClickAndHoldEvent(target, callback);
  }
}
