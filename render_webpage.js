const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function renderHTML(htmlFilePath) {
  // Generate unique filename with timestamp
  const timestamp = Date.now();
  const outputFilename = `screenshot_${timestamp}.png`;
  const screenshotsDir = path.resolve(__dirname, 'screenshots');
  const outputPath = path.join(screenshotsDir, outputFilename);

  // Convert to absolute file:// URL
  const absoluteHtmlPath = path.resolve(htmlFilePath);
  const fileUrl = `file://${absoluteHtmlPath}`;

  // Array to capture console messages
  const consoleMessages = [];

  // Launch browser
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Listen for console messages
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    consoleMessages.push({ type, text });
  });

  // Set viewport size
  await page.setViewportSize({ width: 1280, height: 720 });

  // Navigate to the HTML file
  await page.goto(fileUrl);

  // Wait a bit for any animations/fonts to load
  await page.waitForTimeout(1000);

  // Take screenshot
  await page.screenshot({ path: outputPath, fullPage: true });

  await browser.close();

  // Output console messages in a code block
  if (consoleMessages.length > 0) {
    console.log('\n=== Console Output ===');
    consoleMessages.forEach(msg => {
      console.log(`[${msg.type}] ${msg.text}`);
    });
    console.log('======================\n');
  }

  // Output the filename
  console.log(`View screenshot at: screenshots/${outputFilename}`);

  return outputFilename;
}

// Get HTML file path from command line argument
const htmlFile = process.argv[2];

if (!htmlFile) {
  console.error('Usage: node render.js <html-file-path>');
  process.exit(1);
}

if (!fs.existsSync(htmlFile)) {
  console.error(`Error: File ${htmlFile} does not exist`);
  process.exit(1);
}

renderHTML(htmlFile).catch(error => {
  console.error('Error rendering HTML:', error);
  process.exit(1);
});
