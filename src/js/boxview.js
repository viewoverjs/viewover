'use strict';

import setSettings from './utils/settings.js';
import { applyBoxviewOnDoc } from './document/applyBoxviewOnDoc.js';

export const boxview = (options) => {
  const settings = setSettings(options);
  applyBoxviewOnDoc(settings);
};

exports.default = boxview; 