import setOptions from './setOptions.js';
import {defaultOptions} from './defaultOptions.js';

export const updateOptions = (options) => {
  let updatedOptions;

  if (options == undefined) {
    updatedOptions = defaultOptions;
  } else {
    updatedOptions = setOptions(options);
  }

  return updatedOptions;
};