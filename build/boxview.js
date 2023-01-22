'use strict';

import setSettings from './utils/settings.js';
import { applyBoxviewOnDoc } from './modules/document/applyBoxviewOnDoc.js';
export const boxview = options => {
  const settings = setSettings(options);
  applyBoxviewOnDoc(settings);
};