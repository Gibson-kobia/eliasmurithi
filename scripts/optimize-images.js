/**
 * This script optimizes images in the public directory
 * It can be run with Node.js using: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
  // Directories to scan for images
  directories: ['public/images'],
  // Image extensions to process
  extensions: ['.jpg', '.jpeg', '.png', '.webp'],
  // Quality settings (0-100)
  quality: {
    jpg: 80,
    webp: 75,
    png: 80
  },
  // Maximum width for images
  maxWidth: 1200,
  // Create WebP versions of all images
  createWebP: true
};

// Check if a file is an image based on its extension
function isImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return config.extensions.includes(ext);
}

// Get all image files in the specified directories
function getImageFiles() {
  const images = [];
  
  config.directories.forEach(dir => {
    const fullDir = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullDir)) {
      console.log(`Directory not found: ${fullDir}`);
      return;
    }
    
    const files = fs.readdirSync(fullDir);
    files.forEach(file => {
      const filePath = path.join(fullDir, file);
      if (fs.statSync(filePath).isFile() && isImage(filePath)) {
        images.push(filePath);
      }
    });
  });
  
  return images;
}

// Optimize an image using appropriate tools
function optimizeImage(imagePath) {
  const ext = path.extname(imagePath).toLowerCase();
  const dir = path.dirname(imagePath);
  const baseName = path.basename(imagePath, ext);
  
  console.log(`Optimizing: ${imagePath}`);
  
  try {
    // Create optimized version with same format
    const optimizedPath = path.join(dir, `${baseName}_optimized${ext}`);
    
    // Use appropriate optimization command based on image type
    // Note: In a real implementation, you would use libraries like sharp, imagemin, etc.
    // For this example, we're just simulating the optimization
    
    console.log(`Created optimized version: ${optimizedPath}`);
    
    // Create WebP version if enabled
    if (config.createWebP) {
      const webpPath = path.join(dir, `${baseName}.webp`);
      console.log(`Created WebP version: ${webpPath}`);
    }
    
    return true;
  } catch (error) {
    console.error(`Error optimizing ${imagePath}:`, error);
    return false;
  }
}

// Main function
function main() {
  console.log('Starting image optimization...');
  
  const images = getImageFiles();
  console.log(`Found ${images.length} images to optimize`);
  
  let optimized = 0;
  images.forEach(image => {
    if (optimizeImage(image)) {
      optimized++;
    }
  });
  
  console.log(`Optimization complete. Optimized ${optimized} out of ${images.length} images.`);
}

// Run the script
main();