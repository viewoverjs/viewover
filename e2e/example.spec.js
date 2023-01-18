// @ts-check
const { test, expect } = require('@playwright/test');

test('img click', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/demo/');

  await page.getByAltText('warm sunrise on beach').click();
});
