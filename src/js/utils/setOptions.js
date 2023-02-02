import {defaultOptions} from './defaultOptions';

export default function setOptions(options) {
  return {
    fullscreen: options.fullscreen || defaultOptions.fullscreen,
    thumbnails: options.thumbnails || defaultOptions.thumbnails,
    zoom: options.zoom || defaultOptions.zoom,
    // styles: {
    //   controlButtonsColor: options.styles.controlButtonsColor || defaultOptions.styles.controlButtonsColor,
    //   controlBarHoverColor: options.styles.controlButtonsHoverColor || defaultOptions.styles.controlButtonsHoverColor,
    //   navHoverColor: options.styles.navHoverColor || defaultOptions.styles.navHoverColor,
    //   thumbnailBorderColor: options.styles.thumbnailBorderColor || defaultOptions.styles.thumbnailBorderColor,
    //   defaultVideoThumbnail: options.styles.defaultVideoThumbnail || defaultOptions.styles.defaultVideoThumbnail,
    //   mediaBorderRadius: options.styles.mediaBorderRadius || defaultOptions.styles.mediaBorderRadius,
    //   thumbnailBorderRadius: options.styles.thumbnailBorderRadius || defaultOptions.styles.thumbnailBorderRadius,
    // },
  };
}
