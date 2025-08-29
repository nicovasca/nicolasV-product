# Wix Embedding Guide for Nico Vasquez Portfolio

## Overview
Your React portfolio app has been built and is ready to be embedded in Wix. This guide will walk you through the process step by step.

## Files Ready for Upload
The following files from the `dist` folder need to be uploaded to your web hosting:

### Core Files:
- `wix-embed.html` - The main HTML file (use this instead of index.html)
- `assets/index-BwL9hQVt.js` - The main JavaScript bundle
- `assets/index-CEZtgdkB.css` - The main CSS stylesheet

### Image Assets:
- `assets/fintech-case-2-BQYpNE0n.png` - Meteoeconomics case study image
- `assets/ai-case-BXHTozPx.jpg` - CredInvest case study image  
- `assets/blockchain-case-otH3IVaS.jpg` - Verde Ventures case study image
- `assets/hero-waves-CMhNbuFA.png` - Hero background waves image

## Step-by-Step Instructions

### Option 1: Using Wix's HTML Embed Element (Recommended)

1. **Upload Files to External Hosting**
   - Upload all the files from the `dist` folder to a web hosting service (like Netlify, Vercel, GitHub Pages, or your own web server)
   - Make sure the files maintain their folder structure (assets folder with all files inside)

2. **Get the Base URL**
   - Once uploaded, note the base URL where your files are hosted
   - Example: `https://your-portfolio.netlify.app/` or `https://yourdomain.com/portfolio/`

3. **In Wix Editor**
   - Go to your Wix page where you want to embed the portfolio
   - Add an "HTML Embed" element (found in the "Embed" section)
   - Click on the HTML embed element and select "Enter Code"

4. **Embed the Code**
   - Use this iframe code (replace `YOUR_BASE_URL` with your actual hosting URL):
   ```html
   <iframe 
     src="YOUR_BASE_URL/wix-embed.html" 
     width="100%" 
     height="100vh" 
     frameborder="0" 
     scrolling="no" 
     style="border: none; width: 100%; height: 100vh; min-height: 800px;">
   </iframe>
   ```

### Option 2: Direct HTML Embed (Alternative)

1. **Upload Files to External Hosting** (same as above)

2. **In Wix Editor**
   - Add an "HTML Embed" element
   - Enter this code (replace `YOUR_BASE_URL` with your actual hosting URL):
   ```html
   <div id="portfolio-container" style="width: 100%; height: 100vh; min-height: 800px;">
     <iframe 
       src="YOUR_BASE_URL/wix-embed.html" 
       width="100%" 
       height="100%" 
       frameborder="0" 
       scrolling="no" 
       style="border: none;">
     </iframe>
   </div>
   ```

## Recommended Hosting Options

### 1. Netlify (Free & Easy)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your entire `dist` folder
3. Get a URL like `https://your-portfolio-123.netlify.app`
4. Use this URL in the iframe code above

### 2. Vercel (Free & Easy)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically
4. Get a URL like `https://your-portfolio.vercel.app`

### 3. GitHub Pages
1. Create a new repository
2. Upload the `dist` folder contents to the repository
3. Enable GitHub Pages in repository settings
4. Get a URL like `https://yourusername.github.io/repository-name`

## Important Notes

### File Structure
Make sure your hosting maintains this structure:
```
your-hosting-url/
├── wix-embed.html
├── assets/
│   ├── index-BwL9hQVt.js
│   ├── index-CEZtgdkB.css
│   ├── fintech-case-2-BQYpNE0n.png
│   ├── ai-case-BXHTozPx.jpg
│   ├── blockchain-case-otH3IVaS.jpg
│   └── hero-waves-CMhNbuFA.png
```

### Responsive Design
- The portfolio is fully responsive and will adapt to different screen sizes
- The iframe will automatically resize based on the container

### Theme Support
- The portfolio includes dark/light theme support
- Theme preference is saved in localStorage

### Performance
- All assets are optimized and compressed
- The total bundle size is approximately 400KB

## Troubleshooting

### If the portfolio doesn't load:
1. Check that all files are uploaded correctly
2. Verify the file paths in the hosting URL
3. Check browser console for any errors
4. Ensure the hosting service supports CORS

### If styling looks wrong:
1. Make sure the CSS file is loading correctly
2. Check that the iframe has proper dimensions
3. Verify that Wix isn't applying conflicting styles

### If images don't load:
1. Check that all image files are uploaded to the assets folder
2. Verify the image file names match exactly (they have unique hashes)

## Customization Options

### Changing the Height
If you want to adjust the height of the embedded portfolio, modify the `height` attribute in the iframe:
```html
<!-- For a fixed height -->
height="800px"

<!-- For full viewport height -->
height="100vh"

<!-- For responsive height -->
height="100%"
```

### Adding a Border or Background
You can add styling to the iframe container:
```html
<div style="border: 2px solid #ccc; border-radius: 8px; padding: 10px;">
  <iframe src="YOUR_BASE_URL/wix-embed.html" ...></iframe>
</div>
```

## Support
If you encounter any issues during the embedding process, the most common solutions are:
1. Double-check all file paths and URLs
2. Ensure all files are uploaded to the hosting service
3. Test the direct URL in a browser first
4. Check browser developer tools for any console errors 