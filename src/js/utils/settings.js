export default function setSettings(options) {
  return {
    fullscreen: true || options.fullscreen,
    thumbnails: true || options.thumbnails,
    zoom: true || options.zoom,
    styles: {
      controlBarHoverColor: 'undefined' || options.styles.controlBarHoverColor,
      navHoverColor: 'undefined' || options.styles.navHoverColor,
      thumbnailBorderColor: 'undefined' || options.styles.thumbnailBorderColor,
      videoThumbnail: 'undefined' || options.styles.videoThumbnail,
      mediaBorderRadius: 'undefined' || options.styles.mediaBorderRadius,
      thumbnailBorderRadius: 'undefined' || options.styles.thumbnailBorderRadius,
    },
  };
}
