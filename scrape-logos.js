const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function scrapeLogos() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto('https://extraordinary-froyo-121f66.netlify.app/', { waitUntil: 'networkidle0' });
    
    // Find the platform partner logos
    const logos = await page.evaluate(() => {
      const logoElements = document.querySelectorAll('img[alt*="Partner"], img[alt*="Google"], img[alt*="Meta"], img[alt*="Microsoft"]');
      return Array.from(logoElements).map((img, index) => ({
        src: img.src,
        alt: img.alt,
        index: index
      }));
    });
    
    console.log('Found logos:', logos);
    
    // Create public/logos directory if it doesn't exist
    const logosDir = path.join(__dirname, 'public', 'logos');
    if (!fs.existsSync(logosDir)) {
      fs.mkdirSync(logosDir, { recursive: true });
    }
    
    // Download each logo
    for (let i = 0; i < logos.length; i++) {
      const logo = logos[i];
      if (logo.src && !logo.src.startsWith('data:')) {
        const response = await page.goto(logo.src);
        const buffer = await response.buffer();
        const filename = `logo-${i + 1}.png`;
        const filepath = path.join(logosDir, filename);
        fs.writeFileSync(filepath, buffer);
        console.log(`Downloaded: ${filename}`);
      }
    }
    
  } catch (error) {
    console.error('Error scraping logos:', error);
  } finally {
    await browser.close();
  }
}

scrapeLogos(); 