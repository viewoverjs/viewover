const getImageDimensions = (img) => {
  return {
    height: img.naturalHeight,
    width: img.naturalWidth,
  };
};

const setThumbnailDimensions = (img) => {
  const { height, width } = getImageDimensions(img);
  if (height < width) {
    img.classList.add('boxview__thumbnail_horizontal');
  }
  if (height > width) {
    img.classList.add('boxview__thumbnail_vertical');
  }
  if (height === width && width > 0) {
    img.classList.add('boxview__thumbnail_square');
  }
};

export default function createThumbnail(src) {
  const thumbnail = document.createElement('img');
  thumbnail.setAttribute('src', src);
  setThumbnailDimensions(thumbnail);
  thumbnail.classList.add('boxview__thumbnail');
  return thumbnail;
}
