const allMediaList = document.querySelectorAll('[data-boxview-list]');
let mediaList;

export default function addOpenBoxviewButton() {
  for (let ml = 0; ml < allMediaList.length; ml++) {
    // add 'data-boxview-item' attribute to each media in user html content
    mediaList = [...allMediaList[ml].children];
    for (let mi = 0; mi < mediaList.length; mi++) {
      const mediaItem = mediaList[mi];
      mediaItem.setAttribute('data-boxview-item', '');

      if (mediaItem.localName === 'video') {
        const mediaItemParent = mediaItem.parentElement;
        const mediaItemWrapper = document.createElement('div');
        const openBoxviewButton = document.createElement('button');

        mediaItemWrapper.classList.add('boxview-video-wrapper');
        openBoxviewButton.classList.add('boxview-open-button');
        openBoxviewButton.setAttribute('data-boxview', 'video-button');
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

        const unDisplayControlsOnWrapper = (e) => {
          mediaItem.removeAttribute('controls');
        };

        const toggleButton = () => {
          openBoxviewButton.classList.toggle('boxview-open-button_hidden');
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

        let width = mediaItem.offsetWidth;
        // let height = mediaItem.offsetHeight;
        mediaItemWrapper.style.width = `${width}px`;
        mediaItem.style.width = '100%';
        mediaItem.style.height = '100%';

        mediaItemParent.replaceChild(mediaItemWrapper, mediaItem);
        mediaItemWrapper.appendChild(mediaItem);
        mediaItemWrapper.appendChild(openBoxviewButton);
      }

      if (mediaItem.localName === 'iframe') {
        const mediaItemParent = mediaItem.parentElement;
        const mediaItemWrapper = document.createElement('div');
        const openBoxviewButton = document.createElement('button');

        mediaItemWrapper.classList.add('boxview-iframe-wrapper');
        openBoxviewButton.classList.add('boxview-open-button');
        openBoxviewButton.setAttribute('data-boxview', 'video-button');

        // const toggleButton = () => {
        //   openBoxviewButton.classList.toggle('boxview-open-button_hidden');
        // };

        // mediaItem.addEventListener('play', toggleButton);
        // mediaItem.addEventListener('pause', toggleButton);

        let width = mediaItem.offsetWidth;
        // let height = mediaItem.offsetHeight;
        mediaItemWrapper.style.width = `${width}px`;
        mediaItem.style.width = '100%';
        mediaItem.style.height = '100%';

        mediaItemParent.replaceChild(mediaItemWrapper, mediaItem);
        mediaItemWrapper.appendChild(mediaItem);
        mediaItemWrapper.appendChild(openBoxviewButton);
      }
    }
  }
}
