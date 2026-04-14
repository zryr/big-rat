const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8000/');

  // Click to start experience
  await page.click('#introScreen');
  await page.waitForTimeout(1000); // Wait for fade out

  const ratContainer = await page.locator('#rat-container');
  const imageWrapper = await page.locator('.image-wrapper');

  // 1. Move mouse to center of the rat
  const box = await imageWrapper.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.waitForTimeout(500);

  // 2. Click
  await page.mouse.down();
  await page.mouse.up();
  await page.waitForTimeout(500); // Wait for bounce animation to finish

  // 3. Move mouse slightly to trigger tilt update
  await page.mouse.move(box.x + box.width / 2 + 10, box.y + box.height / 2 + 10);
  await page.waitForTimeout(500);

  // Check if transform is not empty/default
  const transform = await ratContainer.evaluate(el => el.style.transform);
  console.log('Transform after click and move:', transform);

  await browser.close();
})();
