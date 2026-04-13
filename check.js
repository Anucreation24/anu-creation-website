const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Emulate mobile
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  
  page.on('console', msg => {
    console.log(`[BROWSER CONSOLE] ${msg.type()}: ${msg.text()}`);
  });

  console.log('Navigating to http://localhost:3000...');
  // Add retry loop in case server hasn't started
  for(let i=0; i<5; i++) {
     try {
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 5000 });
        break;
     } catch(e) {
        console.log("Server not ready, retrying...");
        await new Promise(r => setTimeout(r, 2000));
     }
  }
  
  // Scroll down to 1500px to trigger framer motion
  await page.evaluate(() => {
     window.scrollTo(0, 1500);
  });
  
  await new Promise(r => setTimeout(r, 1000)); // wait for animation
  
  await page.screenshot({ path: 'C:\\Users\\Acer\\.gemini\\antigravity\\brain\\59644f26-799e-4744-ae01-2a2cf5080191\\mobile_scrolled.png' });
  
  const statsOpacity = await page.evaluate(() => {
     const stats = document.querySelectorAll('section')[1]; // StatsSection
     return stats ? window.getComputedStyle(stats.querySelector('div')).opacity : 'not found';
  });
  console.log('Stats section opacity after scroll:', statsOpacity);

  await browser.close();
})();
