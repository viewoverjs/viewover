'use strict';

import { applyViewoverOnDoc } from './document/applyViewoverOnDoc.js';
import { updateOptions } from './utils/updateOptions.js';

export default function viewover(options) {
  const updatedOptions = updateOptions(options);
  applyViewoverOnDoc(updatedOptions);
}