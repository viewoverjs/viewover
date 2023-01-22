const setPlayIcon = (thumbnailWrapper, thumbnail) => {
  const playIcon = document.createElement('div');
  // playIcon.setAttribute('src', '');
  playIcon.classList.add('boxview__play-icon');
  thumbnailWrapper.appendChild(playIcon);
};

const getImageDimensions = (img) => {
  return {
    height: img.naturalHeight,
    width: img.naturalWidth,
  };
};

const setThumbnailSize = (thumbnailWrapper, thumbnail) => {
  const { height, width } = getImageDimensions(thumbnail);
  if (height < width) {
    thumbnailWrapper.classList.add('boxview__thumbnail-wrapper_horizontal');
    thumbnail.classList.add('boxview__thumbnail_horizontal');
  }
  if (height > width) {
    thumbnailWrapper.classList.add('boxview__thumbnail-wrapper_vertical');
    thumbnail.classList.add('boxview__thumbnail_vertical');
  }
  if (height === width && width > 0) {
    thumbnailWrapper.classList.add('boxview__thumbnail-wrapper_square');
    thumbnail.classList.add('boxview__thumbnail_square');
  }
};

export default async function createThumbnail(mediaElement) {
  let imgUrl;
  const thumbnailWrapper = document.createElement('div');
  const thumbnail = document.createElement('img');

  thumbnailWrapper.classList.add('boxview__thumbnail-wrapper');
  thumbnail.classList.add('boxview__thumbnail');

  if (mediaElement.localName === 'img') {
    imgUrl = mediaElement.src;
    thumbnail.setAttribute('src', imgUrl);
    try {
      await thumbnail.decode();
      setThumbnailSize(thumbnailWrapper, thumbnail);
    } catch (error) {
      console.log(error);
    }
  }
  if (mediaElement.localName === 'iframe') {
    const isYoutube = true;
    if (isYoutube) {
      const youtubeId = mediaElement.src.substr(
        mediaElement.src.lastIndexOf('/') + 1
      );
      imgUrl = `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;
      thumbnail.setAttribute('src', imgUrl);
      setPlayIcon(thumbnailWrapper, thumbnail);
    }
  }
  if (mediaElement.localName === 'video') {
    imgUrl = mediaElement.getAttribute('poster');
    if (imgUrl !== null) {
      thumbnail.setAttribute('src', imgUrl);
      setPlayIcon(thumbnailWrapper, thumbnail);
    } else {
      thumbnail.classList.add('boxview__alternate-thumbnail');
      thumbnailWrapper.classList.add('boxview__alternate-thumbnail-wrapper');
    }
  }

  thumbnailWrapper.appendChild(thumbnail);

  return thumbnailWrapper;
}
