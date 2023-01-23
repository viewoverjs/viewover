const { src, dest, series, parallel, watch } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
// const sourcemaps = require('gulp-sourcemaps');
const csso = require('gulp-csso');

const jsPath = [
  'src/js/*.js',
  'src/js/viewover/controlbar/*.js',
  'src/js/viewover/mainContent/*.js',
  'src/js/viewover/thumbnailsTrack/*.js',
  'src/js/viewover/turnOffViewover/*.js',
  'src/js/viewover/turnOnViewover/*.js',
  'src/js/document/*.js',
  'src/js/utils/*.js',
];

// function clean() {
//   return del([
//     'dist/**/*',
//     // here we use a globbing pattern to match everything inside the `mobile` folder
//     // 'dist/mobile/**/*',
//     // we don't want to clean this file though so we negate the pattern
//     // '!dist/mobile/deploy.json',
//   ]);
// }

function cssMinify() {
  return src('src/css/*.css')
    // .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(concat('viewover.css'))
    .pipe(
      csso({
        sourceMap: true,
        debug: true,
      })
    )
    .pipe(rename({ suffix: '.min' }))
    // .pipe(sourcemaps.write('../maps'))
    .pipe(dest('dist/css'));
}

function jsMinify() {
  return src(jsPath)
    // .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(concat('viewover.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    // .pipe(sourcemaps.write('../maps'))
    .pipe(dest('dist/js'));
}

exports.build = parallel(jsMinify, cssMinify);

// exports.build = function () {
//   watch(
//     jsPath,
//     { ignoreInitial: false, delay: 1000 },
//     parallel(cssMinify, jsMinify)
//   );
// };
