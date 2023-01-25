import getMainElementsSizes from '../mainContent/getMainElementsSizes.js';

export default async function checkIfImageScalable() {
  const elementsSizes = await getMainElementsSizes();
  const isCurrentHeightOverflow =
    elementsSizes.currentSize.height > elementsSizes.mainContentSize.height;
  const isCurrentWidthOverflow =
    elementsSizes.currentSize.width > elementsSizes.mainContentSize.width;
  const isScalableToNaturalHeight =
    elementsSizes.naturalSize.height > elementsSizes.currentSize.height;
  const isScalableToNaturalWidth =
    elementsSizes.naturalSize.width > elementsSizes.currentSize.width;

  const isScalable = isScalableToNaturalHeight && isScalableToNaturalWidth;
  const isInvertible = isCurrentHeightOverflow && isCurrentWidthOverflow;

  return {
    isScalable,
    isInvertible,
  };
}
