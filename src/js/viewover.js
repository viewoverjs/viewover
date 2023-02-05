'use strict';

import { initViewover } from './document/initViewover.js';
import viewoverCoreCss from './cssInJs/viewoverCoreCss.js';

export default class Viewover {
  constructor(options) {
    // this.selector = selector; // selector option is not implemented yet, it will be implemented in the future
    this.options = options;
    this.#addStyle();
    this.#applyViewover();
  }

  #defaultOptions = {
    fullscreen: true,
    thumbnails: false,
    zoom: true,
  };

  #setOptions() {
    return {
      fullscreen: this.options.fullscreen || this.#defaultOptions.fullscreen,
      thumbnails: this.options.thumbnails || this.#defaultOptions.thumbnails,
      zoom: this.options.zoom || this.#defaultOptions.zoom,
    };
  }
  
  #updateOptions() {
    if (this.options == undefined) {
      this.updatedOptions = this.#defaultOptions;
    } else {
      this.updatedOptions = this.#setOptions();
    }
  };

  #addStyle() {
    const style = document.createElement('style');
    style.textContent = viewoverCoreCss;
    document.head.append(style);
  }

  #applyViewover() {
    this.#updateOptions();
    initViewover(this.updatedOptions);
  }
}

