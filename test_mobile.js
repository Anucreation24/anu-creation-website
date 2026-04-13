const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    const basePath = 'C:\\Users\\Acer\\.gemini\\antigravity\\brain\\59644f26-799e-4744-ae01-2a2cf5080191\\';

    // Verify 375px
    await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    
    // Top of page
    await page.screenshot({ path: `${basePath}mobile_375px_top.png` });
    
    // Scroll down to Services Preview
    await page.evaluate(() => window.scrollTo(0, 1500));
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: `${basePath}mobile_375px_scrolled_services.png` });

    // Open Mobile Menu
    const btn = await page.$('#mobile-menu-toggle');
    if (btn) {
      await btn.click();
      await new Promise(r => setTimeout(r, 800));
      await page.screenshot({ path: `${basePath}mobile_375px_menu_open.png` });
    }

  } catch (err) {
    console.error(err);
  } finally {
    await browser.close();
  }
})();
