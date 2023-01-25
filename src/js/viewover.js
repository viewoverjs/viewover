'use strict';

import setSettings from './utils/settings.js';
import { applyViewoverOnDoc } from './document/applyViewoverOnDoc.js';

function viewover(options) {
  const settings = setSettings(options);
  applyViewoverOnDoc(settings);
}

module.exports = viewover;