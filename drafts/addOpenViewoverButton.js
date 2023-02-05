const allMediaList = document.querySelectorAll('[data-viewover-list]');
let mediaList;

export default function addOpenViewoverButton() {
  for (let ml = 0; ml < allMediaList.length; ml++) {
    // add 'data-viewover-item' attribute to each media in user html content
    mediaList = [...allMediaList[ml].children];
    for (let mi = 0; mi < mediaList.length; mi++) {
      const mediaItem = mediaList[mi];
      mediaItem.setAttribute('data-viewover-item', '');

      if (mediaItem.localName === 'video') {
        const mediaItemParent = mediaItem.parentElement;
        const mediaItemWrapper = document.createElement('div');
        const openViewoverButton = document.createElement('button');

        mediaItemWrapper.classList.add('viewover-video-wrapper');
        openViewoverButton.classList.add('viewover-open-button');
        openViewoverButton.setAttribute('data-viewover', 'video-button');
        mediaItem.removeAttribute('controls');

        const displayControlsOnMediaItem = () => {
          mediaItem.setAttribute('controls', '');
        };

        const displayControlsOnWrapper = () => {
          mediaItem.setAttribute('controls', '');
        };

        const unDisplayControlsOnMediaItem = (e) => {
          if (e.currentTarget == !mediaItemWrapper) {
            mediaItem.removeAttribute('controls');
          }
        };

        const unDisplayControlsOnWrapper = () => {
          mediaItem.removeAttribute('controls');
        };

        const toggleButton = () => {
          openViewoverButton.classList.toggle('viewover-open-button_hidden');
        };

        mediaItem.addEventListener('mouseenter', displayControlsOnMediaItem);
        mediaItem.addEventListener('mouseout', unDisplayControlsOnMediaItem);
        mediaItemWrapper.addEventListener(
          'mouseenter',
          displayControlsOnWrapper
        );
        mediaItemWrapper.addEventListener(
          'mouseout',
          unDisplayControlsOnWrapper
        );
        mediaItem.addEventListener('play', toggleButton);
        mediaItem.addEventListener('pause', toggleButton);

        // let width = mediaItem.offsetWidth;
        // let height = mediaItem.offsetHeight;
        // mediaItemWrapper.style.width = `${width}px`;
        // mediaItem.style.width = '100%';
        // mediaItem.style.height = '100%';

        mediaItemParent.replaceChild(mediaItemWrapper, mediaItem);
        mediaItemWrapper.appendChild(mediaItem);
        mediaItemWrapper.appendChild(openViewoverButton);
      }

      if (mediaItem.localName === 'iframe') {
        const mediaItemParent = mediaItem.parentElement;
        const mediaItemWrapper = document.createElement('div');
        const openViewoverButton = document.createElement('button');

        mediaItemWrapper.classList.add('viewover-iframe-wrapper');
        openViewoverButton.classList.add('viewover-open-button');
        openViewoverButton.setAttribute('data-viewover', 'video-button');

        // const toggleButton = () => {
        //   openViewoverButton.classList.toggle('viewover-open-button_hidden');
        // };

        // mediaItem.addEventListener('play', toggleButton);
        // mediaItem.addEventListener('pause', toggleButton);

        let width = mediaItem.offsetWidth;
        // let height = mediaItem.offsetHeight;
        // mediaItemWrapper.style.width = `${width}px`;
        // mediaItem.style.width = '100%';
        // mediaItem.style.height = '100%';

        mediaItemParent.replaceChild(mediaItemWrapper, mediaItem);
        mediaItemWrapper.appendChild(mediaItem);
        mediaItemWrapper.appendChild(openViewoverButton);
      }
    }
  }
}
