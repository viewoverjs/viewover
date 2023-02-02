export default function prepareMediaElements(elementTarget) {
  // Some of the media elements in the html content are wrapped in a div tag,
  // in order to create an array of pure media elements,
  // the prepareMediaElements function must be run.
  const preparedMediaElements = [];
  const rawMediaElements = [
    ...elementTarget.closest('[data-viewover-list]').children,
  ];

  for (let i = 0; i < rawMediaElements.length; i++) {
    const mediaElement = rawMediaElements[i];
    let media;

    if (mediaElement.classList.contains('viewover-video-wrapper')) {
      media = mediaElement.querySelector('video');
    } else if (mediaElement.classList.contains('viewover-iframe-wrapper')) {
      media = mediaElement.querySelector('iframe');
    } else {
      media = mediaElement;
    }

    preparedMediaElements.push(media);
  }

  return preparedMediaElements;
}
