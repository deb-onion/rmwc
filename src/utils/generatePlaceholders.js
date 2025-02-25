const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const venues = [
  { name: 'fairmont-banff', width: 1920, height: 1080 },
  { name: 'lake-louise', width: 1920, height: 1080 },
  { name: 'kananaskis', width: 1920, height: 1080 },
  { name: 'emerald-lake', width: 1920, height: 1080 },
  { name: 'silvertip', width: 1920, height: 1080 },
  { name: 'buffalo-mountain', width: 1920, height: 1080 }
];

const quizImages = [
  { name: 'landscape-peaks', width: 800, height: 600 },
  { name: 'landscape-lake', width: 800, height: 600 },
  { name: 'landscape-meadow', width: 800, height: 600 },
  { name: 'landscape-lodge', width: 800, height: 600 }
];

function generatePlaceholder(name, width, height, directory) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#E5E7EB';
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#4B5563';
  ctx.font = `${Math.floor(width / 20)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(name, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  const outputDir = path.join(__dirname, '../../public/images', directory);
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(outputDir, `${name}.jpg`), buffer);
  console.log(`Generated ${name}.jpg`);
}

// Generate venue images
venues.forEach(venue => {
  generatePlaceholder(venue.name, venue.width, venue.height, 'venues');
});

// Generate quiz images
quizImages.forEach(image => {
  generatePlaceholder(image.name, image.width, image.height, 'quiz');
}); 