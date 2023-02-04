const styleContent = `
:root {
  --viewover-icon-color: rgb(140, 140, 140);
  --viewover-icon-color-hover: rgb(220, 220, 220);
  --viewover-icon-color-disable: rgb(60, 60, 60);
  --viewover-background-color: rgba(0, 0, 0, 0.95);

  --viewover-icon-transition: linear 0.2s;
  --viewover-media-transition: linear 0.2s;
}

.viewover-video-wrapper,
.viewover-iframe-wrapper {
  display: inline-block;
  position: relative;
}

.viewover-open-button {
  background: none;
  border: none;
  cursor: pointer;
  width: 52px;
  height: 52px;
  position: absolute;
  right: 10px;
  background: url(../utils/icons/launch_black_48dp.svg) no-repeat;
  background-color: #00000050;
  background-position: center;
  z-index: 1;
}

.viewover-open-button_type_video {
  top: 10px;
}

.viewover-open-button_type_iframe {
  bottom: 10px;
}

@media (any-hover: hover) {
  .viewover-open-button {
    visibility: hidden;
    opacity: 0;
  }

  .viewover-video-wrapper:hover .viewover-open-button {
    visibility: visible;
    opacity: 1;
  }

  .viewover-iframe-wrapper:hover .viewover-open-button {
    visibility: visible;
    opacity: 1;
  }
}

@media (any-hover: none) {
  .viewover-open-button {
    visibility: visible;
    opacity: 1;
  }
}

.viewover *,
.viewover *::before,
.viewover *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.viewover .button {
  background: none;
  border: none;
  cursor: pointer;
}

.viewover .button_hidden {
  visibility: hidden;
  opacity: 0;
}

.viewover .button_visible {
  visibility: visible;
  opacity: 1;
}

.viewover:modal {
  max-width: 100%;
  max-height: 100%;
  user-select: none;
}

.viewover::backdrop {
  background: rgba(0, 0, 0, 0.95);
}

.viewover {
  box-sizing: border-box;
  padding: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: rgba(0, 0, 0, 0.95);
  overflow: hidden;
}

.viewover__container {
  --viewover-padding: 20px;
  width: 100%;
  height: 100%;
  padding-inline: var(--viewover-padding);
  padding-block-end: 0;
  --viewover-control-bar-height: 60px;
  /* option =  media preview adjustment */
  --thumbnails-track-height: 0px;
  --viewover-media-margin: 10px;
  --viewover-thumbnails-track-margin: 0px;
  --viewover-thumbnails-track-scroll-height: 0px;
  /* option = aspect-ratio */
  --viewover-horizontal-thumbnail-aspect-ratio: 16/9;
  --viewover-vertical-thumbnail-aspect-ratio: 4/6;
  --viewover-vertical-thumbnail-width: calc(
    var(--thumbnails-track-height) *
      var(--viewover-vertical-thumbnail-aspect-ratio)
  );
  --viewover-horizontal-thumbnail-width: calc(
    var(--thumbnails-track-height) *
      var(--viewover-horizontal-thumbnail-aspect-ratio)
  );

  /* option = border-radius */
  --viewover-media-border-radius: 12px;
}

.viewover__container:fullscreen {
  padding-block-start: var(--viewover-padding);
  --viewover-control-bar-height: 0px;
}

.viewover__container:not(:fullscreen) {
  padding-block-start: 0;
}

.viewover__control-bar {
  position: sticky;
  position: -webkit-sticky;
  inset-block-start: 0;
  inset-inline-start: 0;
  height: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  width: 100%;
  z-index: 9999;
}

.viewover__container:fullscreen .viewover__control-bar {
  position: absolute;
  padding-inline: 20px;
  background-color: rgba(40, 40, 40, 0.9);
  z-index: 9999;
}

.viewover__content {
  width: 100%;
  height: calc(100% - var(--viewover-control-bar-height));
  display: flex;
  flex-flow: column;
  align-items: center;
}

.viewover__container:fullscreen .viewover__content {
  width: 100%;
  height: calc(100% - var(--viewover-control-bar-height));
  display: flex;
  flex-flow: column;
  align-items: center;
}

.viewover__main-content {
  position: relative;
  display: flex;
  align-items: center; /* To center "viewover__media" element whose height in pixels is lower than "viewover__main-content" element height */
  justify-content: center;
  margin-block-end: var(--viewover-padding);
  height: calc(
    100% - var(--thumbnails-track-height) - var(--viewover-padding) -
      var(--viewover-thumbnails-track-scroll-height) -
      var(--viewover-thumbnails-track-margin)
  );
  width: 100%;
  border: none;
}

.viewover__media {
  /* Core Style */
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  max-width: 100%;

  /* Recommended Style */
  overflow: hidden;
  scroll-behavior: smooth;
  /* scrollbar-width: none; */
  border: none;

  /* Preference Style */
  border-radius: var(--viewover-media-border-radius);
}

.viewover__img,
.viewover__video,
.viewover__iframe {
  /* Core Style */
  user-select: none;

  /* Preference Style */
  border-radius: var(--viewover-media-border-radius);
  transition: var(--viewover-media-transition);
}

.viewover__iframe {
  /* Recommended Style */ 
  border: none;
}

.viewover__img {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
}

.viewover__video,
.viewover__iframe {
  /* Recommended Style */
  aspect-ratio: 16/9;
}

@media (min-aspect-ratio: 16/10) {
  /* Iframe does not accept % value */
  .viewover__iframe {
    /* Core Style */
    height: calc(
      100vh - var(--thumbnails-track-height) -
        var(--viewover-control-bar-height) - var(--viewover-padding) * 2
    );
  }

  .viewover__video {
    /* Core Style */
    height: calc(
      100vh - var(--thumbnails-track-height) -
        var(--viewover-control-bar-height) - var(--viewover-padding) * 2
    );
  }
}

@media (max-aspect-ratio: 16/10) {
  /* Iframe does not accept % value */
  .viewover__iframe {
    /* Core Style */
    width: 100vw;
  }

  .viewover__video {
    /* Core Style */
    width: 100%;
  }
}

.viewover__thumbnails-track {
  display: grid;
  align-items: center;
  max-width: 100%;
  margin-block-end: var(--viewover-thumbnails-track-margin);
  padding-inline: 3px;
  height: calc(
    var(--thumbnails-track-height) +
      var(--viewover-thumbnails-track-scroll-height)
  );
  grid-auto-flow: column;
  gap: 6px;
  grid-auto-columns: var(--media-preview-width);
  scroll-behavior: smooth;
  overflow-y: hidden;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
}

.viewover__thumbnails-track_visible {
  padding-block: 3px calc(var(--viewover-thumbnails-track-scroll-height) + 3px);
}

/* Controls */
@media (any-hover: hover) {
  .svg-icon {
    fill: var(--viewover-icon-color);
    transition: all var(--viewover-icon-transition);
  }

  .svg-icon:hover {
    fill: var(--viewover-icon-color-hover);
  }
}

@media (any-hover: none) {
  .svg-icon {
    fill: var(--viewover-icon-color-hover);
  }
}

.viewover__controls-buttons-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
}

.viewover__controls-buttons-wrapper_type_share {
  margin-inline-end: auto;
}

.viewover__controls-buttons-wrapper_type_interactive {
  display: flex;
  justify-content: center;
}

.viewover__controls-buttons-wrapper_type_close {
  margin-inline-start: auto;
}

/* Fullscreen */
.viewover__fullscreen-buttons {
  position: relative;
  width: 32px;
  height: 32px;
}

.viewover__fullscreen-buttons_hidden {
  display: none;
}

.viewover__fullscreen-button {
  position: absolute;
  width: 32px;
  height: 32px;
}

/* Download */
#download-button {
  display: none;
}

/* Share */
#share-button {
  display: none;
}

.share-options-buttons {
  visibility: hidden;
  position: absolute;
  inset-inline-start: 60px;
  width: max-content;
  height: max-content;
  display: flex;
  gap: 15px;
  background: rgba(0, 0, 0, 1);
  border-radius: 5px;
  transition: visibility linear 0.2s;
}

.share-options-buttons_active {
  visibility: visible;
}

/* Close */
.viewover__close-button {
  display: block;
}

/* Zoom */
.viewover__zoom-button {
  display: none;
}

.viewover__zoom-button_visible {
  display: inline-block;
}

/* Auto-Scroll */
.viewover__auto-scroll-buttons {
  display: none;
  position: relative;
  width: 32px;
  height: 32px;
}

.viewover__auto-scroll-button {
  display: none;
  position: absolute;
  width: 32px;
  height: 32px;
}

/* Thumbnails */
.viewover__thumbnails-buttons {
  position: relative;
  width: 32px;
  height: 32px;
}

.viewover__thumbnails-buttons_hidden {
  display: none;
}

.viewover__thumbnails-button {
  position: absolute;
  width: 32px;
  height: 32px;
}

.viewover__thumbnails-icon {
  rotate: 90deg;
}

.svg-icon_nav {
  /* Preference Style */
  border-radius: 50%;
  transition: transform var(--viewover-icon-transition);
}

@media (450px < width) {
  .viewover__navigate-button {
    /* Core Style */
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    --navigate-button-width: 50px;
    width: var(--navigate-button-width);
    z-index: 1;

    /* Preference Style */
    height: calc(var(--navigate-button-width) + 10%);
  }

  .viewover__navigate-button_before {
    /* Core Style */
    inset-inline-start: 0px;
  }

  .viewover__navigate-button_next {
    /* Core Style */
    inset-inline-start: calc(99% - var(--viewover-padding) * 2);
  }

  .svg-icon_nav {
    /* Preference Style */
    background-color: rgba(0, 0, 0, 0.4);
  }
}

@media (450px > width) {
  .viewover__navigate-button {
    /* Preference Style */
    display: none;
  }
}

@media (any-hover: hover) {
  .svg-icon_nav {
    /* Preference Style */
    fill: rgb(220, 220, 220);
  }

  .viewover__navigate-button:hover .svg-icon_nav {
    /* Preference Style */
    transform: scale(1.2);
    fill: rgb(250, 250, 250);
  }
}

@media (any-hover: none) {
  .svg-icon_nav {
    background-color: none;
    transform: scale(1);
    fill: rgb(250, 250, 250);
  }
}

.viewover__thumbnail-wrapper {
  position: relative;
  height: calc(var(--thumbnails-track-height) - 6px);
  /* option = border-radius */
  border-radius: 4px;
  overflow: hidden;
}

.viewover__thumbnail-wrapper_active {
  outline: solid 3px;
  /* option = outline-color */
  outline-color: white;
}

.viewover__alternate-thumbnail-wrapper {
  border: 1px solid rgba(250, 250, 250, 0.5);
}

.viewover__thumbnail-wrapper_horizontal {
  width: var(--viewover-horizontal-thumbnail-width);
}

.viewover__thumbnail-wrapper_vertical {
  width: var(--viewover-vertical-thumbnail-width);
}

.viewover__thumbnail-wrapper_square {
  width: calc(var(--thumbnails-track-height));
}

.viewover__thumbnail {
  /* option = border-radius */
  border-radius: 4px;
  transition: all linear 0.2s;
  object-fit: cover;
  object-position: center;
  height: calc(var(--thumbnails-track-height) - 6px);
  user-select: none;
  z-index: 1000;
}

.viewover__play-icon {
  position: absolute;
  width: 100%;
  height: 100%;
  inset-block-start: 0;
  inset-inline-start: 0;
  background-position: center;
  background-image: url('../utils/icons/play_circle_opsz48.svg');
  background-repeat: no-repeat;
  z-index: 100;
}

.viewover__alternate-thumbnail {
  height: calc(var(--thumbnails-track-height) - 6px);
  aspect-ratio: 16/9;
  background-image: url('../utils/icons/play_circle_opsz48.svg');
  background-repeat: no-repeat;
  background-position: center;
}

.viewover__thumbnail_horizontal {
  width: var(--viewover-horizontal-thumbnail-width);
}

.viewover__thumbnail_vertical {
  width: var(--viewover-vertical-thumbnail-width);
}

.viewover__thumbnail_square {
  width: calc(var(--thumbnails-track-height));
}

@media (any-hover: hover) {
  .viewover__thumbnail-wrapper:hover * {
    scale: 1.1;
  }
}

/* Scrollbar */
/* Viewover thumbnails scrollbar */
.viewover__thumbnails-track::-webkit-scrollbar {
  display: block;
  height: 8px;
}

.viewover__thumbnails-track::-webkit-scrollbar-track {
  background-color: rgb(40, 40, 40);
  border-radius: 100vw;
}

.viewover__thumbnails-track::-webkit-scrollbar-thumb {
  background-color: var(--viewover-icon-color);
  border: 2px solid rgb(40, 40, 40);
  border-radius: 100vw;
}

.viewover__thumbnails-track::-webkit-scrollbar-thumb:hover {
  background-color: var(--viewover-icon-color-hover);
} `;

export default styleContent;