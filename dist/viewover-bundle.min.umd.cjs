var we=(s,l,p)=>{if(!l.has(s))throw TypeError("Cannot "+p)};var V=(s,l,p)=>(we(s,l,"read from private field"),p?p.call(s):l.get(s)),H=(s,l,p)=>{if(l.has(s))throw TypeError("Cannot add the same private member more than once");l instanceof WeakSet?l.add(s):l.set(s,p)};var T=(s,l,p)=>(we(s,l,"access private method"),p);(function(s,l){typeof exports=="object"&&typeof module<"u"?module.exports=l():typeof define=="function"&&define.amd?define(l):(s=typeof globalThis<"u"?globalThis:s||self,s.viewover=l())})(this,function(){var z,F,pe,R,ge,Y,fe,D,_e;"use strict";const s=`
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
      <button class="button share-button" id="share-button" tabindex="-1">
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
      <button class="button download-button" id="download-button" tabindex="-1">
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
          tabindex="-1"
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
          tabindex="-1"
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
          tabindex="0"
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
          tabindex="-1"
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

`,l=document.createElement("dialog");l.setAttribute("id","viewover"),l.classList.add("viewover"),l.innerHTML=s,document.body.appendChild(l);function p(e){if(e.target.classList.contains("viewover-open-button")){if(e.target.parentElement.querySelector("video"))return e.target.parentElement.querySelector("video");if(e.target.parentElement.querySelector("iframe"))return e.target.parentElement.querySelector("iframe")}else return e.target}function xe(e){const t=[],i=[...e.closest("[data-viewover-list]").children];for(let n=0;n<i.length;n++){const o=i[n];let r;o.classList.contains("viewover-video-wrapper")?r=o.querySelector("video"):o.classList.contains("viewover-iframe-wrapper")?r=o.querySelector("iframe"):r=o,t.push(r)}return t}const K=new Error;K.name="Unauthorized Error";let N;const ye=(e,t)=>{const n=[...e.children].find(o=>t.includes(o.localName));if(n!==null)N=n.localName;else throw K.message="Element must contain an image, video or iframe",K};function ze(e,t,i){for(let n=0;n<e.length;n++){const o=e[n];t.includes(o.localName)&&(N=o.localName),o.localName==="div"&&ye(o,t),i.includes(N)||i.push(N)}}function ke(e){let t=new Array;return ze(e,["img","video","iframe"],t),t}const g=document.getElementById("control-bar"),Ee=document.getElementById("nav-next-button"),Le=document.getElementById("nav-previous-button"),h=document.getElementById("zoom-in-button"),b=document.getElementById("zoom-out-button"),Se=document.getElementById("close-button"),Me=document.getElementById("fullscreen-buttons"),W=document.getElementById("fullscreen-entry-button"),X=document.getElementById("fullscreen-exit-button"),w=document.getElementById("viewover-container"),le=document.getElementById("viewover-content"),k=document.getElementById("viewover-main-content"),E=document.getElementById("viewover-media"),d=document.getElementById("viewover-thumbnails-track"),G="76px",Ce=document.getElementById("thumbnails-buttons"),L=document.getElementById("thumbnails-outlined-button"),S=document.getElementById("thumbnails-filled-button");function Be(){[...E.children].forEach(t=>{t.classList.contains("button")||t.remove()})}const a={},He=(e,t)=>{if(a.element=document.createElement(`${e}`),a.element.classList.add(`viewover__${e}`),e==="video"){const i=document.createElement("source");return i.setAttribute("src",t),a.element.setAttribute("controls",""),a.element.appendChild(i)}if(e==="img"||e==="iframe")return a.element.setAttribute("src",t)};async function A(){await a.element.decode();const e={width:a.element.naturalWidth,height:a.element.naturalHeight},t={width:a.element.getBoundingClientRect().width,height:a.element.getBoundingClientRect().height},i={width:k.clientWidth,height:k.clientHeight};return{naturalSize:e,currentSize:t,mainContentSize:i}}async function q(){const e=await A(),t=e.currentSize.height>e.mainContentSize.height,i=e.currentSize.width>e.mainContentSize.width,n=e.naturalSize.height>e.currentSize.height,o=e.naturalSize.width>e.currentSize.width;return{isScalable:n&&o,isInvertible:t&&i}}const J=e=>{e?(h.setAttribute("disabled",""),h.style.cursor="default",h.setAttribute("tabindex","-1"),[...h.children][0].style.fill="var(--viewover-icon-color-disable)"):(h.removeAttribute("disabled"),h.setAttribute("tabindex","0"),h.style.cursor="pointer",[...h.children][0].style.fill="var(--viewover-icon-color)")},Q=e=>{e?(b.setAttribute("disabled",""),b.style.cursor="default",b.setAttribute("tabindex","-1"),[...b.children][0].style.fill="var(--viewover-icon-color-disable)"):(b.removeAttribute("disabled"),b.setAttribute("tabindex","0"),b.style.cursor="pointer",[...b.children][0].style.fill="var(--viewover-icon-color)")},Ae=()=>{h.classList.contains("viewover__zoom-button_visible")||(h.classList.add("viewover__zoom-button_visible"),b.classList.add("viewover__zoom-button_visible")),J(!0),Q(!0)},O=async()=>{await A();const e=await q();e.isScalable&&J(!1),e.isInvertible&&Q(!1)},Ie=()=>{h.classList.contains("viewover__zoom-button_visible")&&(h.classList.remove("viewover__zoom-button_visible"),b.classList.remove("viewover__zoom-button_visible"))},Ve=async()=>{const e=await A(),t=await q(),i=e.currentSize.width,n=e.currentSize.height,o=e.naturalSize.width,r=e.naturalSize.height;if(t.isScalable&&(a.element.style.maxWidth=`calc(${i}px + ${o/20}px)`,a.element.style.maxHeight=`calc(${n}px + ${r/20}px)`),o-i<o/20){J(!0);return}O()},Te=async()=>{const e=await A(),t=await q(),i=e.currentSize.width,n=e.currentSize.height,o=e.naturalSize.width,r=e.naturalSize.height;if(t.isInvertible&&(a.element.style.maxWidth=`calc(${i}px - ${o/20}px)`,a.element.style.maxHeight=`calc(${n}px - ${r/20}px)`),i-e.mainContentSize.width<o/20){Q(!0);return}O()},ee=async e=>{if(e.ctrlKey){e.preventDefault();const t=await A(),i=await q(),n=t.currentSize.width,o=t.currentSize.height,r=t.naturalSize.width,v=t.naturalSize.height;e.deltaY>0&&i.isInvertible&&(a.element.style.maxWidth=`calc(${n}px - ${r/30}px)`,a.element.style.maxHeight=`calc(${o}px - ${v/30}px)`),e.deltaY<0&&i.isScalable&&(a.element.style.maxWidth=`calc(${n}px + ${r/30}px)`,a.element.style.maxHeight=`calc(${o}px + ${v/30}px)`),O()}};async function M(e,t){E.children.length!==0&&Be(),He(e,t),E.appendChild(a.element),(e==="video"||e==="iframe")&&Ie(),e==="img"&&c.enableZoom==!0&&(a.element.removeEventListener("wheel",ee),a.element.addEventListener("wheel",ee),Ae(),O()),e==="video"&&a.element.load(),a.element.style.transition="var(--viewover-media-transition)"}const $=(e,t)=>{const i=e.src||e.currentSrc;M(t,i)};function Ne(e,t){e.length===1&&(e.includes("img")&&$(t,"img"),e.includes("iframe")&&$(t,"iframe"),e.includes("video")&&$(t,"video")),e.length!==1&&$(t,t.localName)}const We=()=>{let e=window.pageYOffset||document.documentElement.scrollTop,t=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(t,e)},document.body.style.overflow="hidden",document.body.style.maxWidth="100vw"},qe=()=>{window.onscroll=function(){},document.body.style.overflow="visible",document.body.style.maxWidth="revert"};function se(){return a.element.localName==="iframe"?a.element.src:a.element.currentSrc}function C(e){const t=[...d.children];let i=a.element.src||a.element.currentSrc;t.filter(o=>o.querySelector(".viewover__thumbnail").getAttribute("data-viewover-thumbnail-src")!==i).map(o=>o.classList.remove("viewover__thumbnail-wrapper_active")),e.classList.add("viewover__thumbnail-wrapper_active")}const B=e=>{const i=e.getBoundingClientRect().right+23>window.innerWidth;e.getBoundingClientRect().left<23&&(d.scrollLeft-=window.innerWidth-e.getBoundingClientRect().right-23),i&&(d.scrollLeft+=e.getBoundingClientRect().left-23)},ce=()=>{d.offsetWidth<d.scrollWidth?w.style.setProperty("--viewover-thumbnails-track-scroll-height","10px"):w.style.setProperty("--viewover-thumbnails-track-scroll-height","0px")};function P(e){const t=[...d.children];let i;const n=se(),r=c.preparedMediaElements.findIndex(m=>m.currentSrc!==void 0?m.currentSrc===n:m.src===n)+1;r<c.preparedMediaElements.length?i=c.preparedMediaElements.find((m,ae)=>ae===r):i=c.preparedMediaElements.at(0);const v=i.src||i.currentSrc,_=t.find(m=>m.querySelector(".viewover__thumbnail").getAttribute("data-viewover-thumbnail-src")===v);M(i.localName,v),e.thumbnails==!0&&(B(_),C(_))}function j(e){const t=[...d.children];let i;const n=se(),r=c.preparedMediaElements.findIndex(m=>m.currentSrc===void 0?m.src===n:m.currentSrc===n)-1;r>-1?i=c.preparedMediaElements.find((m,ae)=>ae===r):i=c.preparedMediaElements.at(-1);const v=i.src||i.currentSrc,_=t.find(m=>m.querySelector(".viewover__thumbnail").getAttribute("data-viewover-thumbnail-src")===v);M(i.localName,v),e.thumbnails==!0&&(B(_),C(_))}const u={touches:{touchstart:{x:-1,y:-1},touchmove:{x:-1,y:-1},touchend:!1,direction:"undetermined"},touchHandler:function(e){let t;if(typeof e<"u"&&typeof e.touches<"u")switch(t=e.touches[0],e.type){case"touchstart":case"touchmove":u.touches[e.type].x=t.pageX,u.touches[e.type].y=t.pageY;break;case"touchend":u.touches.touchend=!0,u.touches.touchstart.x>-1&&u.touches.touchmove.x>-1&&(u.touches.direction=u.touches.touchstart.x<u.touches.touchmove.x?"right":"left",u.touches.direction==="right"&&j(c.preparedMediaElements),u.touches.direction==="left"&&P(c.preparedMediaElements))}},init:function(){k.addEventListener("touchstart",u.touchHandler,!1),k.addEventListener("touchmove",u.touchHandler,!1),k.addEventListener("touchend",u.touchHandler,!1)}};function Oe(e,t){e.preventDefault(),e.key==="ArrowLeft"&&j(t),e.key==="ArrowRight"&&P(t)}function $e(e){console.log(e.target),!e.ctrlKey&&!e.shiftKey&&(e.deltaY>0&&P(c.preparedMediaElements),e.deltaY<0&&j(c.preparedMediaElements))}function I(){document.fullscreenElement?document.exitFullscreen():w.requestFullscreen()}function x(e,t){e.classList.remove("button_hidden"),e.setAttribute("tabindex","0"),e.classList.add("button_visible"),t.classList.remove("button_visible"),t.setAttribute("tabindex","-1"),t.classList.add("button_hidden")}const ve=(e,t)=>{const i=document.createElement("div");i.classList.add("viewover__play-icon"),e.appendChild(i)},Pe=e=>({height:e.naturalHeight,width:e.naturalWidth}),je=(e,t)=>{const{height:i,width:n}=Pe(t);i<n&&(e.classList.add("viewover__thumbnail-wrapper_horizontal"),t.classList.add("viewover__thumbnail_horizontal")),i>n&&(e.classList.add("viewover__thumbnail-wrapper_vertical"),t.classList.add("viewover__thumbnail_vertical")),i===n&&n>0&&(e.classList.add("viewover__thumbnail-wrapper_square"),t.classList.add("viewover__thumbnail_square"))};async function te(e){let t;const i=document.createElement("div"),n=document.createElement("img");if(i.classList.add("viewover__thumbnail-wrapper"),n.classList.add("viewover__thumbnail"),e.localName==="img"){t=e.src,n.setAttribute("src",t);try{await n.decode(),je(i,n)}catch(o){console.log(o)}}return e.localName==="iframe"&&(t=`https://img.youtube.com/vi/${e.src.substr(e.src.lastIndexOf("/")+1)}/mqdefault.jpg`,n.setAttribute("src",t),ve(i)),e.localName==="video"&&(t=e.getAttribute("poster"),t!==null?(n.setAttribute("src",t),ve(i)):(n.classList.add("viewover__alternate-thumbnail"),i.classList.add("viewover__alternate-thumbnail-wrapper"))),i.appendChild(n),i}let y,f;async function Ue(e,t){t?(w.style.setProperty("--thumbnails-track-height",G),x(L,S)):x(S,L);for(let i=0;i<e.length;i++){const n=e[i];n.localName==="img"&&(y=await te(n),f=y.querySelector(".viewover__thumbnail"),f.setAttribute("data-viewover-thumbnail-src",n.src),f.setAttribute("data-viewover-thumbnail-type","img")),n.localName==="video"&&(y=await te(n),f=y.querySelector(".viewover__thumbnail"),f.setAttribute("data-viewover-thumbnail-src",n.currentSrc),f.setAttribute("data-viewover-thumbnail-type","video")),n.localName==="iframe"&&(y=await te(n),f=y.querySelector(".viewover__thumbnail"),f.setAttribute("data-viewover-thumbnail-src",n.src),f.setAttribute("data-viewover-thumbnail-type","iframe")),d.appendChild(y)}}function ie(e){a.element.localName==="video"?(a.element.querySelector("source").setAttribute("src",e),a.element.load()):a.element.setAttribute("src",e)}function Ze(){const e=[...d.children];for(let t=0;t<e.length;t++){const i=e[t],n=i.querySelector(".viewover__thumbnail"),o=n.getAttribute("data-viewover-thumbnail-type");if(o==="img"){const r=n.getAttribute("data-viewover-thumbnail-src");i.addEventListener("click",()=>{if(a.element.localName==="img"){if(a.element.src===r)return;ie(r)}else M("img",r);C(i),B(i)});continue}if(o==="video"){const r=n.getAttribute("data-viewover-thumbnail-src");i.addEventListener("click",()=>{if(a.element.localName==="video"){if(a.element.currentSrc===r)return;ie(r)}else M("video",r);C(i),B(i)});continue}if(o==="iframe"){const r=n.getAttribute("data-viewover-thumbnail-src");i.addEventListener("click",()=>{if(a.element.localName==="iframe"){if(a.element.src===r)return;ie(r)}else M("iframe",r);C(i),B(i)});continue}}}async function Fe(e,t){await Ue(e,t),Ze()}function de(){w.style.getPropertyValue("--thumbnails-track-height")==G?(x(S,L),d.classList.remove("viewover__thumbnails-track_visible"),w.style.setProperty("--thumbnails-track-height","0px"),w.style.setProperty("--viewover-thumbnails-track-margin","0px")):(x(L,S),w.style.setProperty("--thumbnails-track-height",G),w.style.setProperty("--viewover-thumbnails-track-margin","20px"),d.classList.add("viewover__thumbnails-track_visible")),ce()}let U;const ne=()=>{clearTimeout(U),g.style.visibility="visible",g.style.opacity="1"},Z=()=>{clearTimeout(U),U=setTimeout(()=>{g.style.visibility="visible",g.style.opacity="1"},100),U=setTimeout(()=>{g.style.visibility="hidden",g.style.opacity="0"},2e3)},Re=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};function ue(){[...E.children].forEach(t=>{t.classList.contains("button")||t.remove()}),Re(d),qe(),document.removeEventListener("keydown",oe),k.removeEventListener("wheel",$e),E.removeEventListener("dblclick",I),a.element.removeEventListener("wheel",ee),x(S,L),d.classList.remove("viewover__thumbnails-track_visible"),w.style.setProperty("--thumbnails-track-height","0px"),w.style.setProperty("--viewover-thumbnails-track-margin","0px"),delete a.element,viewover.close()}function Ye(){document.fullscreenElement&&document.exitFullscreen(),ue()}function De(e){e.zoom==!0&&(h.addEventListener("click",Ve),b.addEventListener("click",Te)),Se.onclick=()=>{Ye()},document.addEventListener("keyup",t=>{const i=l.hasAttribute("open");t.key==="Escape"&&ue(),t.key==="Enter"&&i&&e.fullscreen==!0&&I()}),document.addEventListener("fullscreenchange",()=>{W.classList.contains("button_hidden")?(x(W,X),le.removeEventListener("mousemove",Z),g.removeEventListener("mouseenter",ne),g.removeEventListener("mouseleave",Z),ne()):(x(X,W),le.addEventListener("mousemove",Z),g.addEventListener("mouseenter",ne),g.addEventListener("mouseleave",Z))})}const c={};let oe;const he=async(e,t)=>{const i=p(e),n=i.src||i.currentSrc;c.preparedMediaElements=xe(i);const o=ke(c.preparedMediaElements);if(c.enableZoom=t.zoom,Ne(o,i),Ee.onclick=()=>{P(t)},Le.onclick=()=>{j(t)},oe=r=>Oe(r,t),document.addEventListener("keydown",oe),u.init(),L.addEventListener("click",de),S.addEventListener("click",de),t.fullscreen==!0?(W.addEventListener("click",I),X.addEventListener("click",I),E.addEventListener("dblclick",I)):Me.classList.add("viewover__fullscreen-buttons_hidden"),We(),l.showModal(),De(t),t.thumbnails==!0){await Fe(c.preparedMediaElements,!1);const v=[...d.children].find(_=>_.querySelector(".viewover__thumbnail").getAttribute("data-viewover-thumbnail-src")===n);C(v),ce(),B(v)}else Ce.classList.add("viewover__thumbnails-buttons_hidden")},me=document.querySelectorAll("[data-viewover-list]");let re;function Ke(){for(let e=0;e<me.length;e++){re=[...me[e].children];for(let t=0;t<re.length;t++){const i=re[t];if(i.setAttribute("data-viewover-item",""),i.localName==="video"){const n=i.parentElement,o=document.createElement("div"),r=document.createElement("button");o.classList.add("viewover-video-wrapper"),r.classList.add("viewover-open-button"),r.classList.add("viewover-open-button_type_video"),n.replaceChild(o,i),o.appendChild(i),o.appendChild(r);const v=()=>{r.style.display="none"},_=()=>{r.style.display="block"};i.addEventListener("play",v),i.addEventListener("pause",_)}if(i.localName==="iframe"){const n=i.parentElement,o=document.createElement("div"),r=document.createElement("button");o.classList.add("viewover-iframe-wrapper"),r.classList.add("viewover-open-button"),r.classList.add("viewover-open-button_type_iframe"),n.replaceChild(o,i),o.appendChild(i),o.appendChild(r)}}}}Ke();const be=[...document.querySelectorAll("[data-viewover-item]")];function Xe(e){for(let t=0;t<be.length;t++){const i=be[t];if(i.localName!=="video"&&i.localName!=="iframe"&&(i.style.cursor="pointer",i.onclick=n=>{he(n,e)}),i.localName==="video"||i.localName==="iframe"){const n=i.parentElement.querySelector(".viewover-open-button");n.onclick=o=>{he(o,e)}}}}const Ge=`:root{--viewover-icon-color:rgb(140, 140, 140);--viewover-icon-color-hover:rgb(220, 220, 220);--viewover-icon-color-disable:rgb(60, 60, 60);--viewover-background-color:rgba(0, 0, 0, 0.95);--viewover-icon-transition:linear 0.2s;--viewover-media-transition:linear 0.2s}.viewover-iframe-wrapper,.viewover-video-wrapper{display:inline-block;position:relative}.viewover-open-button{background:0 0;border:none;cursor:pointer;width:52px;height:52px;position:absolute;right:10px;background:url(../utils/icons/launch_black_48dp.svg) no-repeat;background-color:#00000050;background-position:center;z-index:1}.viewover-open-button_type_video{top:10px}.viewover-open-button_type_iframe{bottom:10px}@media (any-hover:hover){.viewover-open-button{visibility:hidden;opacity:0}.viewover-video-wrapper:hover .viewover-open-button{visibility:visible;opacity:1}.viewover-iframe-wrapper:hover .viewover-open-button{visibility:visible;opacity:1}}@media (any-hover:none){.viewover-open-button{visibility:visible;opacity:1}}.viewover *,.viewover ::after,.viewover ::before{box-sizing:border-box;margin:0;padding:0}.viewover .button{background:0 0;border:none;cursor:pointer}.viewover .button_hidden{visibility:hidden;opacity:0}.viewover .button_visible{visibility:visible;opacity:1}.viewover:modal{max-width:100%;max-height:100%;user-select:none}.viewover::backdrop{background:rgba(0,0,0,.95)}.viewover{box-sizing:border-box;padding:0;width:100%;height:100%;border:none;background-color:rgba(0,0,0,.95);overflow:hidden}.viewover__container{--viewover-padding:20px;width:100%;height:100%;padding-inline:var(--viewover-padding);padding-block-end:0;--viewover-control-bar-height:60px;--thumbnails-track-height:0px;--viewover-media-margin:10px;--viewover-thumbnails-track-margin:0px;--viewover-thumbnails-track-scroll-height:0px;--viewover-horizontal-thumbnail-aspect-ratio:16/9;--viewover-vertical-thumbnail-aspect-ratio:4/6;--viewover-vertical-thumbnail-width:calc(
    var(--thumbnails-track-height) *
      var(--viewover-vertical-thumbnail-aspect-ratio)
  );--viewover-horizontal-thumbnail-width:calc(
    var(--thumbnails-track-height) *
      var(--viewover-horizontal-thumbnail-aspect-ratio)
  );--viewover-media-border-radius:12px}.viewover__container:fullscreen{padding-block-start:var(--viewover-padding);--viewover-control-bar-height:0px}.viewover__container:not(:fullscreen){padding-block-start:0}.viewover__control-bar{position:sticky;position:-webkit-sticky;inset-block-start:0;inset-inline-start:0;height:60px;display:grid;grid-template-columns:repeat(3,1fr);align-items:center;justify-content:center;column-gap:20px;width:100%;z-index:9999}.viewover__container:fullscreen .viewover__control-bar{position:absolute;padding-inline:20px;background-color:rgba(40,40,40,.9);z-index:9999}.viewover__content{width:100%;height:calc(100% - var(--viewover-control-bar-height));display:flex;flex-flow:column;align-items:center}.viewover__container:fullscreen .viewover__content{width:100%;height:calc(100% - var(--viewover-control-bar-height));display:flex;flex-flow:column;align-items:center}.viewover__main-content{position:relative;display:flex;align-items:center;justify-content:center;margin-block-end:var(--viewover-padding);height:calc(100% - var(--thumbnails-track-height) - var(--viewover-padding) - var(--viewover-thumbnails-track-scroll-height) - var(--viewover-thumbnails-track-margin));width:100%;border:none}.viewover__media{display:flex;justify-content:center;align-items:center;max-height:100%;max-width:100%;overflow:hidden;scroll-behavior:smooth;border:none;border-radius:var(--viewover-media-border-radius)}.viewover__iframe,.viewover__img,.viewover__video{user-select:none;border-radius:var(--viewover-media-border-radius);transition:var(--viewover-media-transition)}.viewover__iframe{border:none}.viewover__img{max-height:100%;max-width:100%;object-fit:cover;object-position:center}.viewover__iframe,.viewover__video{aspect-ratio:16/9}@media (min-aspect-ratio:16/10){.viewover__iframe{height:calc(100vh - var(--thumbnails-track-height) - var(--viewover-control-bar-height) - var(--viewover-padding) * 2)}.viewover__video{height:calc(100vh - var(--thumbnails-track-height) - var(--viewover-control-bar-height) - var(--viewover-padding) * 2)}}@media (max-aspect-ratio:16/10){.viewover__iframe{width:100vw}.viewover__video{width:100%}}.viewover__thumbnails-track{display:grid;align-items:center;max-width:100%;margin-block-end:var(--viewover-thumbnails-track-margin);padding-inline:3px;height:calc(var(--thumbnails-track-height) + var(--viewover-thumbnails-track-scroll-height));grid-auto-flow:column;gap:6px;grid-auto-columns:var(--media-preview-width);scroll-behavior:smooth;overflow-y:hidden;overflow-x:auto;overscroll-behavior-inline:contain}.viewover__thumbnails-track_visible{padding-block:3px calc(var(--viewover-thumbnails-track-scroll-height) + 3px)}@media (any-hover:hover){.svg-icon{fill:var(--viewover-icon-color);transition:all var(--viewover-icon-transition)}.svg-icon:hover{fill:var(--viewover-icon-color-hover)}}@media (any-hover:none){.svg-icon{fill:var(--viewover-icon-color-hover)}}.viewover__controls-buttons-wrapper{display:flex;align-items:center;justify-content:center;column-gap:20px}.viewover__controls-buttons-wrapper_type_share{margin-inline-end:auto}.viewover__controls-buttons-wrapper_type_interactive{display:flex;justify-content:center}.viewover__controls-buttons-wrapper_type_close{margin-inline-start:auto}.viewover__fullscreen-buttons{position:relative;width:32px;height:32px}.viewover__fullscreen-buttons_hidden{display:none}.viewover__fullscreen-button{position:absolute;width:32px;height:32px}#download-button{display:none}#share-button{display:none}.share-options-buttons{visibility:hidden;position:absolute;inset-inline-start:60px;width:max-content;height:max-content;display:flex;gap:15px;background:#000;border-radius:5px;transition:visibility linear .2s}.share-options-buttons_active{visibility:visible}.viewover__close-button{display:block}.viewover__zoom-button{display:none}.viewover__zoom-button_visible{display:inline-block}.viewover__auto-scroll-buttons{display:none;position:relative;width:32px;height:32px}.viewover__auto-scroll-button{display:none;position:absolute;width:32px;height:32px}.viewover__thumbnails-buttons{position:relative;width:32px;height:32px}.viewover__thumbnails-buttons_hidden{display:none}.viewover__thumbnails-button{position:absolute;width:32px;height:32px}.viewover__thumbnails-icon{rotate:90deg}.svg-icon_nav{border-radius:50%;transition:transform var(--viewover-icon-transition)}@media (450px < width){.viewover__navigate-button{display:flex;justify-content:center;align-items:center;position:absolute;--navigate-button-width:50px;width:var(--navigate-button-width);z-index:1;height:calc(var(--navigate-button-width) + 10%)}.viewover__navigate-button_before{inset-inline-start:0px}.viewover__navigate-button_next{inset-inline-start:calc(99% - var(--viewover-padding) * 2)}.svg-icon_nav{background-color:rgba(0,0,0,.4)}}@media (450px > width){.viewover__navigate-button{display:none}}@media (any-hover:hover){.svg-icon_nav{fill:rgb(220,220,220)}.viewover__navigate-button:hover .svg-icon_nav{transform:scale(1.2);fill:rgb(250,250,250)}}@media (any-hover:none){.svg-icon_nav{background-color:none;transform:scale(1);fill:rgb(250,250,250)}}.viewover__thumbnail-wrapper{position:relative;height:calc(var(--thumbnails-track-height) - 6px);border-radius:4px;overflow:hidden}.viewover__thumbnail-wrapper_active{outline:solid 3px;outline-color:#fff}.viewover__alternate-thumbnail-wrapper{border:1px solid rgba(250,250,250,.5)}.viewover__thumbnail-wrapper_horizontal{width:var(--viewover-horizontal-thumbnail-width)}.viewover__thumbnail-wrapper_vertical{width:var(--viewover-vertical-thumbnail-width)}.viewover__thumbnail-wrapper_square{width:calc(var(--thumbnails-track-height))}.viewover__thumbnail{border-radius:4px;transition:all linear .2s;object-fit:cover;object-position:center;height:calc(var(--thumbnails-track-height) - 6px);user-select:none;z-index:1000}.viewover__play-icon{position:absolute;width:100%;height:100%;inset-block-start:0;inset-inline-start:0;background-position:center;background-image:url('../utils/icons/play_circle_opsz48.svg');background-repeat:no-repeat;z-index:100}.viewover__alternate-thumbnail{height:calc(var(--thumbnails-track-height) - 6px);aspect-ratio:16/9;background-image:url('../utils/icons/play_circle_opsz48.svg');background-repeat:no-repeat;background-position:center}.viewover__thumbnail_horizontal{width:var(--viewover-horizontal-thumbnail-width)}.viewover__thumbnail_vertical{width:var(--viewover-vertical-thumbnail-width)}.viewover__thumbnail_square{width:calc(var(--thumbnails-track-height))}@media (any-hover:hover){.viewover__thumbnail-wrapper:hover *{scale:1.1}}.viewover__thumbnails-track::-webkit-scrollbar{display:block;height:8px}.viewover__thumbnails-track::-webkit-scrollbar-track{background-color:#282828;border-radius:100vw}.viewover__thumbnails-track::-webkit-scrollbar-thumb{background-color:var(--viewover-icon-color);border:2px solid #282828;border-radius:100vw}.viewover__thumbnails-track::-webkit-scrollbar-thumb:hover{background-color:var(--viewover-icon-color-hover)}`;class Je{constructor(t){H(this,F);H(this,R);H(this,Y);H(this,D);H(this,z,{fullscreen:!0,thumbnails:!1,zoom:!0});this.options=t,T(this,Y,fe).call(this),T(this,D,_e).call(this)}}return z=new WeakMap,F=new WeakSet,pe=function(){return{fullscreen:this.options.fullscreen||V(this,z).fullscreen,thumbnails:this.options.thumbnails||V(this,z).thumbnails,zoom:this.options.zoom||V(this,z).zoom}},R=new WeakSet,ge=function(){this.options==null?this.updatedOptions=V(this,z):this.updatedOptions=T(this,F,pe).call(this)},Y=new WeakSet,fe=function(){const t=document.createElement("style");t.textContent=Ge,document.head.append(t)},D=new WeakSet,_e=function(){T(this,R,ge).call(this),Xe(this.updatedOptions)},Je});
