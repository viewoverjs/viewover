const allMediaList = document.querySelectorAll('[data-viewover-list]');
let mediaList;

export default function addOpenViewoverButton() {
  for (let ml = 0; ml < allMediaList.length; ml++) {
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
        openViewoverButton.classList.add('viewover-open-button_type_video');


        mediaItemParent.replaceChild(mediaItemWrapper, mediaItem);
        mediaItemWrapper.appendChild(mediaItem);
        mediaItemWrapper.appendChild(openViewoverButton);

        const hideOpenViewoverButton = () => {
          openViewoverButton.style.display = 'none';
        };
        const showOpenViewoverButton = () => {
          openViewoverButton.style.display = 'block';
        };

        mediaItem.addEventListener('play', hideOpenViewoverButton);
        mediaItem.addEventListener('pause', showOpenViewoverButton);
      }

      if (mediaItem.localName === 'iframe') {
        const mediaItemParent = mediaItem.parentElement;
        const mediaItemWrapper = document.createElement('div');
        const openViewoverButton = document.createElement('button');

        mediaItemWrapper.classList.add('viewover-iframe-wrapper');
        openViewoverButton.classList.add('viewover-open-button');
        openViewoverButton.classList.add('viewover-open-button_type_iframe');


        mediaItemParent.replaceChild(mediaItemWrapper, mediaItem);
        mediaItemWrapper.appendChild(mediaItem);
        mediaItemWrapper.appendChild(openViewoverButton);
      }
    }
  }
}
