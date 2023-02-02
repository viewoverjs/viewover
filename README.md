<a name="readme-top"></a>
<br />
<br />
<br />
<div align="center">
  <a href="https://github.com/Yedidya10/viewover">
    <img src="./viewover_s-logo.png" alt="Logo">
  </a>
<br />
<br />
<br />
  <h1 align="center">VIEWOVER</h1>

  <p align="center">
    Create a light & featured modal to display photos and videos gallery overlay on the page
    <br />
    <a href="https://github.com/Yedidya10/viewover"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://github.com/Yedidya10/viewover">View Demo</a>
    · -->
    <a href="https://github.com/Yedidya10/viewover/issues">Report Bug</a>
    ·
    <a href="https://github.com/Yedidya10/viewover/issues">Request Feature</a>
  </p>
</div>

<br />
<br />

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

### Features

<!-- - Built with performance, UX and DX in mind -->
- Embraces native HTML coding conventions
- Small size and no dependencies
- Supports all modern browsers
- Adopt modern ES6 JS syntax
- Support IMG, VIDEO, YOUTUBE IFRAME elements
- Support keyboard navigation
- Support touch navigation
- Thumbnail slider
- Auto width and height
<!-- * Out of the box integration with UI libraries -->
<!-- * Lightweight, ___
- Slide or fade transition by CSS
- Supports breakpoints
- Accepts CSS relative units
- Autoplay with progress bar and a play-pause toggle button
- Supports RTL and vertical direction
- Mouse drag and touch swipe
- Free drag mode
- Mouse wheel navigation
- Lazy loading
- Accessibility friendly
- Live Region -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Installation

To get started, you can either install the package via NPM or use the CDN url.

#### NPM
Run this command to install the NPM package:
  ```sh
  npm install viewover
  ```

#### CDN
Or, use the jsDelivr CDN url
  ```html
  <script type='module' src="https://cdn.jsdelivr.net/npm/viewover/dist/viewover.min.js"></script>
  ```
It is necessary to add the `type='module'` attribute to the script tag in order to use the ES6 module syntax.

  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/viewover/dist/viewover.min.css">
  ```
It is necessary to add the css file to the page in order to implement the library's correctly.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Usage

For quick implementation, you can use the default options and just add the `data-viewover-list` attribute to the media elements wrapper to display them in viewover.

##### Example:
  ```html
  <!-- index.html -->

  <div data-viewover-list>
    <img src="image1.jpg" alt="image 1">
    <img src="image2.jpg" alt="image 2">
    <video src="video1.mp4" alt="video 1"></video>
    <iframe src="https://www.youtube.com/embed/1" alt="video 2"></iframe>
  </div>
  ```
<div><strong>⚠️ Note:</strong> This version does not fully support iframe elements except YouTube</div>

To use the library, you need to import it to your project and call the `viewover()` function.
  ```js
  // index.js

  import viewover from 'viewover';

  viewover();
  ```

To customize the viewover, you can pass an object with the desired options to the `viewover()` function.

##### Example:
  ```js
  // index.js

  import viewover from 'viewover';

  viewover({
    // options
  });
  ```
#### Options

| Option | Type | Default | Description |
|----------|:-------------:|:------|:-----|	
| `fullscreen` | `boolean` | `true` | Enable or disable fullscreen mode |
| `zoom` | `boolean` | `true` | Enable or disable zoom mode |
| `thumbnails` | `boolean` | `false` | Enable or disable thumbnails mode |

##### Example:
  ```js
  // index.js

  import viewover from 'viewover';

  viewover({
    fullscreen: false,
    zoom: false,
    thumbnails: true,
  });
  ```

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Roadmap

- [ ] Feature: Social network sharing buttons
- [ ] Feature: Download button
- [ ] Feature: Add more content types
- [ ] Feature: More Customizable UI
    - [ ] RTL support
    - [ ] Icons variations
    - [ ] Customizable colors
    - [ ] More zoom options
    - [ ] Animation support

And more...

See the [open issues](https://github.com/Yedidya10/viewover/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Yedidya Aberjel - yedidya.dev@gmail.com

Project Link: [https://github.com/Yedidya10/viewover](https://github.com/Yedidya10/viewover)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ## Acknowledgments

- []()
- []()
- []() -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Yedidya10/viewover.svg?style=for-the-badge
[contributors-url]: https://github.com/Yedidya10/viewover/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Yedidya10/viewover.svg?style=for-the-badge
[forks-url]: https://github.com/Yedidya10/viewover/network/members
[stars-shield]: https://img.shields.io/github/stars/Yedidya10/viewover.svg?style=for-the-badge
[stars-url]: https://github.com/Yedidya10/viewover/stargazers
[issues-shield]: https://img.shields.io/github/issues/Yedidya10/viewover.svg?style=for-the-badge
[issues-url]: https://github.com/Yedidya10/viewover/issues
[license-shield]: https://img.shields.io/github/license/Yedidya10/viewover.svg?style=for-the-badge
[license-url]: https://github.com/Yedidya10/viewover/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/yedidya-aberjel

<!-- [React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com -->
