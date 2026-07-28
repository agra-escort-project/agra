const fs = require('fs');
const path = require('path');

const modelsFile = path.join(__dirname, 'src', 'data', 'models.ts');
const publicDir = path.join(__dirname, 'public');

const content = fs.readFileSync(modelsFile, 'utf8');
const urls = [...content.matchAll(/\/gallary\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_.-]+\.jpg/g)].map(m => m[0]);

console.log(`Found ${urls.length} URLs in models.ts`);

let missing = 0;
urls.forEach(url => {
  const filePath = path.join(publicDir, url);
  if (!fs.existsSync(filePath)) {
    console.log(`MISSING ON DISK: ${url}`);
    missing++;
  }
});

if (missing === 0) {
  console.log("All URLs point to existing files!");
} else {
  console.log(`Total missing: ${missing}`);
}

const galleryDir = path.join(publicDir, 'gallary');
const folders = fs.readdirSync(galleryDir).filter(f => fs.statSync(path.join(galleryDir, f)).isDirectory());

let unlinked = 0;
folders.forEach(folder => {
  const folderPath = path.join(galleryDir, folder);
  const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.jpg'));
  files.forEach(file => {
    const url = `/gallary/${folder}/${file}`;
    if (!urls.includes(url)) {
       console.log(`UNLINKED FILE ON DISK (NOT IN TS): ${url}`);
       unlinked++;
    }
  });
});

if (unlinked === 0) {
  console.log("All files on disk are linked in models.ts!");
} else {
  console.log(`Total unlinked files: ${unlinked}`);
}
