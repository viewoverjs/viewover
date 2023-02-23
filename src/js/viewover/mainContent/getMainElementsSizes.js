import { activeMainElement } from '../mainContent/createMediaElement.js';
import { viewoverMainContent } from '../../document/docConstants.js';

export default async function getMainElementsSizes() {
  await activeMainElement.element.decode();

  const naturalSize = {
    width: activeMainElement.element.naturalWidth,
    height: activeMainElement.element.naturalHeight,
  };

  const currentSize = {
    width: activeMainElement.element.getBoundingClientRect().width,
    height: activeMainElement.element.getBoundingClientRect().height,
  };

  const mainContentSize = {
    width: viewoverMainContent.clientWidth,
    height: viewoverMainContent.clientHeight,
  };

  return {
    naturalSize,
    currentSize,
    mainContentSize,
  };
}
