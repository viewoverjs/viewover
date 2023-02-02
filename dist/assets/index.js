(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const re=`
<div id="viewover-container" class="viewover__container">
  <div id="control-bar" class="viewover__control-bar">
    <div
      class="viewover__controls-buttons-wrapper viewover__controls-buttons-wrapper_type_share"
    >
      <div class="share-options-buttons">
        <div>
          <svg
            class="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            width="30px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"
            />
          </svg>
        </div>
        <div>
          <svg
            class="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            width="30px"
            fill="none"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            />
          </svg>
        </div>
        <div>
          <svg
            class="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            width="30px"
            fill="none"
            viewBox="0 0 448 512"
          >
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            />
          </svg>
        </div>
      </div>
      <button class="button share-button" id="share-button">
        <svg
          class="svg-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="28px"
          viewBox="0 0 24 24"
          width="28px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
          />
        </svg>
      </button>
      <button class="button download-button" id="download-button">
        <svg
          class="svg-icon"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="32px"
          viewBox="0 0 24 24"
          width="32px"
        >
          <g><rect fill="none" height="24" width="24" /></g>
          <g><path d="M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z" /></g>
        </svg>
      </button>
    </div>
    <div
      class="viewover__controls-buttons-wrapper viewover__controls-buttons-wrapper_type_interactive"
    >
      <div class="viewover__auto-scroll-buttons">
        <button
          class="button viewover__auto-scroll-button"
          id="auto-scroll-pause-button"
        >
          <svg
            class="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 0 24 24"
            width="32px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>
        <button
          class="button viewover__auto-scroll-button button_visible"
          id="auto-scroll-play-button"
        >
          <svg
            class="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 0 24 24"
            width="32px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      <button
        class="button viewover__zoom-in-button viewover__zoom-button"
        id="zoom-in-button"
      >
        <svg
          class="svg-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 0 24 24"
          width="32px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
          <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
        </svg>
      </button>
      <button
        class="button viewover__zoom-out-button viewover__zoom-button"
        id="zoom-out-button"
      >
        <svg
          class="svg-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 0 24 24"
          width="32px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"
          />
        </svg>
      </button>
      <div id="thumbnails-buttons" class="viewover__thumbnails-buttons">
        <button
          class="button viewover__thumbnails-button"
          id="thumbnails-filled-button"
        >
          <svg
            class="svg-icon viewover__thumbnails-icon"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 20 20"
            height="32px"
            viewBox="0 0 20 20"
            width="32px"
          >
            <g>
              <rect fill="none" height="20" width="20" />
              <path
                d="M3,4v12h14V4H3z M16,7.67h-2.5V5H16V7.67z M13.5,8.67H16v2.67h-2.5V8.67z M4,5h8.5v10H4V5z M13.5,15v-2.67H16V15H13.5z"
              />
            </g>
          </svg>
        </button>
        <button
          class="button viewover__thumbnails-button"
          id="thumbnails-outlined-button"
        >
          <svg
            class="svg-icon viewover__thumbnails-icon"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 20 20"
            height="32px"
            viewBox="0 0 20 20"
            width="32px"
          >
            <g>
              <rect fill="none" height="20" width="20" />
              <path
                d="M17,7.33h-3V4h3V7.33z M17,12.67h-3V16h3V12.67z M17,8.33h-3v3.33h3V8.33z M13,4H3v12h10V4z"
              />
            </g>
          </svg>
        </button>
      </div>
      <div id="fullscreen-buttons" class="viewover__fullscreen-buttons">
        <button
          class="button button_visible viewover__fullscreen-button"
          id="fullscreen-entry-button"
        >
          <svg
            class="svg-icon fullscreen-entry-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 0 24 24"
            width="32px"
            fill="none"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
            />
          </svg>
        </button>
        <button
          class="button button_hidden viewover__fullscreen-button"
          id="fullscreen-exit-button"
        >
          <svg
            class="svg-icon fullscreen-exit-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 0 24 24"
            width="32px"
            fill="none"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="viewover__controls-buttons-wrapper viewover__controls-buttons-wrapper_type_close"
    >
      <button class="button viewover__close-button" id="close-button">
        <svg
          class="svg-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 0 24 24"
          width="32px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
          />
        </svg>
      </button>
    </div>
  </div>

  <div id="viewover-content" class="viewover__content">
    <div id="viewover-main-content" class="viewover__main-content">
      <button
        class="button viewover__navigate-button viewover__navigate-button_before"
        id="nav-previous-button"
      >
        <svg
          class="svg-icon svg-icon_nav"
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
        </svg>
      </button>
      <button
        class="button viewover__navigate-button viewover__navigate-button_next"
        id="nav-next-button"
      >
        <svg
          class="svg-icon svg-icon_nav"
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
        </svg>
      </button>
      <div id="viewover-media" class="viewover__media"></div>
    </div>
    <div id="viewover-thumbnails-track" class="viewover__thumbnails-track"></div>
  </div>
</div>

`,M=document.createElement("dialog");M.setAttribute("id","viewover");M.classList.add("viewover");M.innerHTML=re;document.body.appendChild(M);function ae(e){if(e.target.classList.contains("viewover-open-button")){if(e.target.parentElement.querySelector("video"))return e.target.parentElement.querySelector("video");if(e.target.parentElement.querySelector("iframe"))return e.target.parentElement.querySelector("iframe")}else return e.target}function ce(e){const t=[],n=[...e.closest("[data-viewover-list]").children];for(let i=0;i<n.length;i++){const o=n[i];let l;o.classList.contains("viewover-video-wrapper")?l=o.querySelector("video"):o.classList.contains("viewover-iframe-wrapper")?l=o.querySelector("iframe"):l=o,t.push(l)}return t}const Z=new Error;Z.name="Unauthorized Error";let I;const de=(e,t)=>{const i=[...e.children].find(o=>t.includes(o.localName));if(i!==null)I=i.localName;else throw Z.message="Element must contain an image, video or iframe",Z};function ue(e,t,n){for(let i=0;i<e.length;i++){const o=e[i];t.includes(o.localName)&&(I=o.localName),o.localName==="div"&&de(o,t),n.includes(I)||n.push(I)}}function ve(e){let t=new Array;return ue(e,["img","video","iframe"],t),t}const m=document.getElementById("control-bar"),he=document.getElementById("nav-next-button"),me=document.getElementById("nav-previous-button"),v=document.getElementById("zoom-in-button"),f=document.getElementById("zoom-out-button"),we=document.getElementById("close-button"),be=document.getElementById("fullscreen-buttons"),A=document.getElementById("fullscreen-entry-button"),D=document.getElementById("fullscreen-exit-button"),h=document.getElementById("viewover-container"),J=document.getElementById("viewover-content"),_=document.getElementById("viewover-main-content"),z=document.getElementById("viewover-media"),d=document.getElementById("viewover-thumbnails-track"),Y="76px",fe=document.getElementById("thumbnails-buttons"),L=document.getElementById("thumbnails-outlined-button"),S=document.getElementById("thumbnails-filled-button");function pe(){[...z.children].forEach(t=>{t.classList.contains("button")||t.remove()})}const s={},ge=(e,t)=>{if(s.element=document.createElement(`${e}`),s.element.classList.add(`viewover__${e}`),e==="video"){const n=document.createElement("source");return n.setAttribute("src",t),s.element.setAttribute("controls",""),s.element.appendChild(n)}if(e==="img"||e==="iframe")return s.element.setAttribute("src",t)};async function C(){await s.element.decode();const e={width:s.element.naturalWidth,height:s.element.naturalHeight},t={width:s.element.getBoundingClientRect().width,height:s.element.getBoundingClientRect().height},n={width:_.clientWidth,height:_.clientHeight};return{naturalSize:e,currentSize:t,mainContentSize:n}}async function N(){const e=await C(),t=e.currentSize.height>e.mainContentSize.height,n=e.currentSize.width>e.mainContentSize.width,i=e.naturalSize.height>e.currentSize.height,o=e.naturalSize.width>e.currentSize.width;return{isScalable:i&&o,isInvertible:t&&n}}const j=e=>{e?(v.setAttribute("disabled",""),v.style.cursor="default",[...v.children][0].style.fill="var(--viewover-icon-color-disable)"):(v.removeAttribute("disabled"),v.style.cursor="pointer",[...v.children][0].style.fill="var(--viewover-icon-color)")},G=e=>{e?(f.setAttribute("disabled",""),f.style.cursor="default",[...f.children][0].style.fill="var(--viewover-icon-color-disable)"):(f.removeAttribute("disabled"),f.style.cursor="pointer",[...f.children][0].style.fill="var(--viewover-icon-color)")},_e=()=>{v.classList.contains("viewover__zoom-button_visible")||(v.classList.add("viewover__zoom-button_visible"),f.classList.add("viewover__zoom-button_visible")),j(!0),G(!0)},W=async()=>{await C();const e=await N();e.isScalable&&j(!1),e.isInvertible&&G(!1)},ye=()=>{v.classList.contains("viewover__zoom-button_visible")&&(v.classList.remove("viewover__zoom-button_visible"),f.classList.remove("viewover__zoom-button_visible"))},xe=async()=>{const e=await C(),t=await N(),n=e.currentSize.width,i=e.currentSize.height,o=e.naturalSize.width,l=e.naturalSize.height;if(t.isScalable&&(s.element.style.maxWidth=`calc(${n}px + ${o/20}px)`,s.element.style.maxHeight=`calc(${i}px + ${l/20}px)`),o-n<o/20){j(!0);return}W()},Ee=async()=>{const e=await C(),t=await N(),n=e.currentSize.width,i=e.currentSize.height,o=e.naturalSize.width,l=e.naturalSize.height;if(t.isInvertible&&(s.element.style.maxWidth=`calc(${n}px - ${o/20}px)`,s.element.style.maxHeight=`calc(${i}px - ${l/20}px)`),n-e.mainContentSize.width<o/20){G(!0);return}W()},K=async e=>{if(e.ctrlKey){e.preventDefault();const t=await C(),n=await N(),i=t.currentSize.width,o=t.currentSize.height,l=t.naturalSize.width,r=t.naturalSize.height;e.deltaY>0&&n.isInvertible&&(s.element.style.maxWidth=`calc(${i}px - ${l/30}px)`,s.element.style.maxHeight=`calc(${o}px - ${r/30}px)`),e.deltaY<0&&n.isScalable&&(s.element.style.maxWidth=`calc(${i}px + ${l/30}px)`,s.element.style.maxHeight=`calc(${o}px + ${r/30}px)`),W()}};async function y(e,t){z.children.length!==0&&pe(),ge(e,t),z.appendChild(s.element),(e==="video"||e==="iframe")&&ye(),e==="img"&&a.enableZoom==!0&&(s.element.removeEventListener("wheel",K),s.element.addEventListener("wheel",K),_e(),W()),e==="video"&&s.element.load(),s.element.style.transition="var(--viewover-media-transition)"}const H=(e,t)=>{const n=e.src||e.currentSrc;y(t,n)};function ze(e,t){e.length===1&&(e.includes("img")&&H(t,"img"),e.includes("iframe")&&H(t,"iframe"),e.includes("video")&&H(t,"video")),e.length!==1&&H(t,t.localName)}const Le=()=>{let e=window.pageYOffset||document.documentElement.scrollTop,t=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(t,e)},document.body.style.overflow="hidden",document.body.style.maxWidth="100vw"},Se=()=>{window.onscroll=function(){},document.body.style.overflow="visible",document.body.style.maxWidth="revert"};function oe(){return s.element.localName==="iframe"?s.element.src:s.element.currentSrc}function x(e){const t=[...d.children];let n=s.element.src||s.element.currentSrc;t.filter(o=>o.querySelector(".viewover__thumbnail").getAttribute("data-viewover-thumbnail-src")!==n).map(o=>o.classList.remove("viewover__thumbnail-wrapper_active")),e.classList.add("viewover__thumbnail-wrapper_active")}const E=e=>{const n=e.getBoundingClientRect().right+23>window.innerWidth;e.getBoundingClientRect().left<23&&(d.scrollLeft-=window.innerWidth-e.getBoundingClientRect().right-23),n&&(d.scrollLeft+=e.getBoundingClientRect().left-23)},le=()=>{d.offsetWidth<d.scrollWidth?h.style.setProperty("--viewover-thumbnails-track-scroll-height","10px"):h.style.setProperty("--viewover-thumbnails-track-scroll-height","0px")};function O(e){const t=[...d.children];let n;const i=oe(),l=a.preparedMediaElements.findIndex(u=>u.currentSrc!==void 0?u.currentSrc===i:u.src===i)+1;l<a.preparedMediaElements.length?n=a.preparedMediaElements.find((u,P)=>P===l):n=a.preparedMediaElements.at(0);const r=n.src||n.currentSrc,w=t.find(u=>u.querySelector(".viewover__thumbnail").getAttribute("data-viewover-thumbnail-src")===r);y(n.localName,r),e.thumbnails==!0&&(E(w),x(w))}function q(e){const t=[...d.children];let n;const i=oe(),l=a.preparedMediaElements.findIndex(u=>u.currentSrc===void 0?u.src===i:u.currentSrc===i)-1;l>-1?n=a.preparedMediaElements.find((u,P)=>P===l):n=a.preparedMediaElements.at(-1);const r=n.src||n.currentSrc,w=t.find(u=>u.querySelector(".viewover__thumbnail").getAttribute("data-viewover-thumbnail-src")===r);y(n.localName,r),e.thumbnails==!0&&(E(w),x(w))}const c={touches:{touchstart:{x:-1,y:-1},touchmove:{x:-1,y:-1},touchend:!1,direction:"undetermined"},touchHandler:function(e){let t;if(typeof e<"u"&&typeof e.touches<"u")switch(t=e.touches[0],e.type){case"touchstart":case"touchmove":c.touches[e.type].x=t.pageX,c.touches[e.type].y=t.pageY;break;case"touchend":c.touches.touchend=!0,c.touches.touchstart.x>-1&&c.touches.touchmove.x>-1&&(c.touches.direction=c.touches.touchstart.x<c.touches.touchmove.x?"right":"left",c.touches.direction==="right"&&q(a.preparedMediaElements),c.touches.direction==="left"&&O(a.preparedMediaElements))}},init:function(){_.addEventListener("touchstart",c.touchHandler,!1),_.addEventListener("touchmove",c.touchHandler,!1),_.addEventListener("touchend",c.touchHandler,!1)}};function Me(e,t){e.preventDefault(),e.key==="ArrowLeft"&&q(t),e.key==="ArrowRight"&&O(t)}function Be(e){console.log(e.target),!e.ctrlKey&&!e.shiftKey&&(e.deltaY>0&&O(a.preparedMediaElements),e.deltaY<0&&q(a.preparedMediaElements))}function B(){document.fullscreenElement?document.exitFullscreen():h.requestFullscreen()}function g(e,t){e.classList.remove("button_hidden"),e.classList.add("button_visible"),t.classList.remove("button_visible"),t.classList.add("button_hidden")}const Q=(e,t)=>{const n=document.createElement("div");n.classList.add("viewover__play-icon"),e.appendChild(n)},Ce=e=>({height:e.naturalHeight,width:e.naturalWidth}),He=(e,t)=>{const{height:n,width:i}=Ce(t);n<i&&(e.classList.add("viewover__thumbnail-wrapper_horizontal"),t.classList.add("viewover__thumbnail_horizontal")),n>i&&(e.classList.add("viewover__thumbnail-wrapper_vertical"),t.classList.add("viewover__thumbnail_vertical")),n===i&&i>0&&(e.classList.add("viewover__thumbnail-wrapper_square"),t.classList.add("viewover__thumbnail_square"))};async function $(e){let t;const n=document.createElement("div"),i=document.createElement("img");if(n.classList.add("viewover__thumbnail-wrapper"),i.classList.add("viewover__thumbnail"),e.localName==="img"){t=e.src,i.setAttribute("src",t);try{await i.decode(),He(n,i)}catch(o){console.log(o)}}return e.localName==="iframe"&&(t=`https://img.youtube.com/vi/${e.src.substr(e.src.lastIndexOf("/")+1)}/mqdefault.jpg`,i.setAttribute("src",t),Q(n)),e.localName==="video"&&(t=e.getAttribute("poster"),t!==null?(i.setAttribute("src",t),Q(n)):(i.classList.add("viewover__alternate-thumbnail"),n.classList.add("viewover__alternate-thumbnail-wrapper"))),n.appendChild(i),n}let p,b;async function ke(e,t){t?(h.style.setProperty("--thumbnails-track-height",Y),g(L,S)):g(S,L);for(let n=0;n<e.length;n++){const i=e[n];i.localName==="img"&&(p=await $(i),b=p.querySelector(".viewover__thumbnail"),b.setAttribute("data-viewover-thumbnail-src",i.src),b.setAttribute("data-viewover-thumbnail-type","img")),i.localName==="video"&&(p=await $(i),b=p.querySelector(".viewover__thumbnail"),b.setAttribute("data-viewover-thumbnail-src",i.currentSrc),b.setAttribute("data-viewover-thumbnail-type","video")),i.localName==="iframe"&&(p=await $(i),b=p.querySelector(".viewover__thumbnail"),b.setAttribute("data-viewover-thumbnail-src",i.src),b.setAttribute("data-viewover-thumbnail-type","iframe")),d.appendChild(p)}}function U(e){s.element.localName==="video"?(s.element.querySelector("source").setAttribute("src",e),s.element.load()):s.element.setAttribute("src",e)}function Ie(){const e=[...d.children];for(let t=0;t<e.length;t++){const n=e[t],i=n.querySelector(".viewover__thumbnail"),o=i.getAttribute("data-viewover-thumbnail-type");if(o==="img"){const l=i.getAttribute("data-viewover-thumbnail-src");n.addEventListener("click",()=>{if(s.element.localName==="img"){if(s.element.src===l)return;U(l)}else y("img",l);x(n),E(n)});continue}if(o==="video"){const l=i.getAttribute("data-viewover-thumbnail-src");n.addEventListener("click",()=>{if(s.element.localName==="video"){if(s.element.currentSrc===l)return;U(l)}else y("video",l);x(n),E(n)});continue}if(o==="iframe"){const l=i.getAttribute("data-viewover-thumbnail-src");n.addEventListener("click",()=>{if(s.element.localName==="iframe"){if(s.element.src===l)return;U(l)}else y("iframe",l);x(n),E(n)});continue}}}async function Ae(e,t){await ke(e,t),Ie()}function ee(){h.style.getPropertyValue("--thumbnails-track-height")==Y?(g(S,L),d.classList.remove("viewover__thumbnails-track_visible"),h.style.setProperty("--thumbnails-track-height","0px"),h.style.setProperty("--viewover-thumbnails-track-margin","0px")):(g(L,S),h.style.setProperty("--thumbnails-track-height",Y),h.style.setProperty("--viewover-thumbnails-track-margin","20px"),d.classList.add("viewover__thumbnails-track_visible")),le()}let V;const F=()=>{clearTimeout(V),m.style.visibility="visible",m.style.opacity="1"},k=()=>{clearTimeout(V),V=setTimeout(()=>{m.style.visibility="visible",m.style.opacity="1"},100),V=setTimeout(()=>{m.style.visibility="hidden",m.style.opacity="0"},2e3)},Ve=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};function se(){[...z.children].forEach(t=>{t.classList.contains("button")||t.remove()}),Ve(d),Se(),document.removeEventListener("keydown",X),_.removeEventListener("wheel",Be),z.removeEventListener("dblclick",B),s.element.removeEventListener("wheel",K),g(S,L),d.classList.remove("viewover__thumbnails-track_visible"),h.style.setProperty("--thumbnails-track-height","0px"),h.style.setProperty("--viewover-thumbnails-track-margin","0px"),delete s.element,viewover.close()}function Te(){document.fullscreenElement&&document.exitFullscreen(),se()}function Ne(e){e.zoom==!0&&(v.addEventListener("click",xe),f.addEventListener("click",Ee)),we.onclick=()=>{Te()},document.addEventListener("keyup",t=>{const n=M.hasAttribute("open");t.key==="Escape"&&se(),t.key==="Enter"&&n&&e.fullscreen==!0&&B()}),document.addEventListener("fullscreenchange",()=>{A.classList.contains("button_hidden")?(g(A,D),J.removeEventListener("mousemove",k),m.removeEventListener("mouseenter",F),m.removeEventListener("mouseleave",k),F()):(g(D,A),J.addEventListener("mousemove",k),m.addEventListener("mouseenter",F),m.addEventListener("mouseleave",k))})}const a={};let X;const te=async(e,t)=>{const n=ae(e),i=n.src||n.currentSrc;a.preparedMediaElements=ce(n);const o=ve(a.preparedMediaElements);if(a.enableZoom=t.zoom,ze(o,n),he.onclick=()=>{O(t)},me.onclick=()=>{q(t)},X=l=>Me(l,t),document.addEventListener("keydown",X),c.init(),L.addEventListener("click",ee),S.addEventListener("click",ee),t.fullscreen==!0?(A.addEventListener("click",B),D.addEventListener("click",B),z.addEventListener("dblclick",B)):be.classList.add("viewover__fullscreen-buttons_hidden"),Le(),M.showModal(),Ne(t),t.thumbnails==!0){await Ae(a.preparedMediaElements,!1);const r=[...d.children].find(w=>w.querySelector(".viewover__thumbnail").getAttribute("data-viewover-thumbnail-src")===i);x(r),le(),E(r)}else fe.classList.add("viewover__thumbnails-buttons_hidden")},ne=document.querySelectorAll("[data-viewover-list]");let R;function We(){for(let e=0;e<ne.length;e++){R=[...ne[e].children];for(let t=0;t<R.length;t++){const n=R[t];if(n.setAttribute("data-viewover-item",""),n.localName==="video"){const i=n.parentElement,o=document.createElement("div"),l=document.createElement("button");o.classList.add("viewover-video-wrapper"),l.classList.add("viewover-open-button"),l.classList.add("viewover-open-button_type_video"),i.replaceChild(o,n),o.appendChild(n),o.appendChild(l);const r=()=>{l.style.display="none"},w=()=>{l.style.display="block"};n.addEventListener("play",r),n.addEventListener("pause",w)}if(n.localName==="iframe"){const i=n.parentElement,o=document.createElement("div"),l=document.createElement("button");o.classList.add("viewover-iframe-wrapper"),l.classList.add("viewover-open-button"),l.classList.add("viewover-open-button_type_iframe"),i.replaceChild(o,n),o.appendChild(n),o.appendChild(l)}}}}We();const ie=[...document.querySelectorAll("[data-viewover-item]")];function Oe(e){for(let t=0;t<ie.length;t++){const n=ie[t];if(n.localName!=="video"&&n.localName!=="iframe"&&(n.style.cursor="pointer",n.onclick=i=>{te(i,e)}),n.localName==="video"||n.localName==="iframe"){const i=n.parentElement.querySelector(".viewover-open-button");i.onclick=o=>{te(o,e)}}}}const T={fullscreen:!1,thumbnails:!1,zoom:!1,styles:{navHoverColor:void 0,mediaBorderRadius:void 0,mediaBorderSize:void 0,mediaBorderColor:void 0,controlButtonsColor:void 0,controlButtonsHoverColor:void 0,thumbnailBorderColor:void 0,defaultVideoThumbnail:void 0,thumbnailBorderRadius:void 0}};function qe(e){return{fullscreen:e.fullscreen||T.fullscreen,thumbnails:e.thumbnails||T.thumbnails,zoom:e.zoom||T.zoom}}const Pe=e=>{let t;return e==null?t=T:t=qe(e),t};function $e(e){const t=Pe(e);Oe(t)}$e({zoom:!1,fullscreen:!1,thumbnails:!0});
