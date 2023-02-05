const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
// const options = { /* options */ };
const before = `const cssContent = \``;
const after = `\`; export default cssContent;`;

const readCss = async () => {
  try {
    const css = fs.readFileSync(path.resolve(__dirname, '../src/css/viewover.css'), 'utf8');
    return css;
  } catch (err) {
    console.error(err);
  }
};

const writeMinifiedCss = async () => {
  try {
    const css = await readCss();
    // const output = new CleanCSS().minify(css);
    new CleanCSS().minify(css, function (error, output) {
      // `output` is the same as in the synchronous call above
      fs.writeFileSync(path.resolve(__dirname, '../minifiedCss/viewover.min.css'), output.styles);
    });
    // fs.writeFileSync(path.resolve(__dirname, '../minifiedCss/viewover.min.css'), output);
  } catch (err) {
    console.error(err);
  }
}

const readMinifiedCss = async () => {
  try {
    await writeMinifiedCss();
    const minifiedCss = fs.readFileSync(path.resolve(__dirname, '../minifiedCss/viewover.min.css'), 'utf8');
    return minifiedCss;
  } catch (err) {
    console.error(err);
  }
};

const writeCssInJs = async () => {
  try {
    const minifiedCss = await readMinifiedCss();
    fs.writeFileSync(path.resolve(__dirname, '../src/js/cssInJs/viewoverCoreCss.js'), before + minifiedCss + after);
  } catch (err) {
    console.error(err);
  }
}

writeCssInJs();