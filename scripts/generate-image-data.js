import fs from "fs";
import path from "path";

// --- Configuration ---
const subdirs = [
  "main-carousel",
  "gallery"
];

const baseImagesDir = "static/images";
const outputFile = "src/lib/data/imageData.ts";
// ---------------------

/**
 * Converts a string to PascalCase (or a similar valid JavaScript constant name).
 * E.g., 'main-carousel' -> 'MainCarousel'
 * E.g., 'gallery' -> 'Gallery'
 */
function toPascalCase(str) {
  return str
    .split('-')
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
}

/**
 * Reads files from a directory, filters images, and formats the public URL.
 */
function getFiles(dir, subdirName) {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|gif|webp|avif)$/i.test(file))
    .map((file) =>
      // Use path.join to create the public URL, then replace backslashes for web paths
      `/${path.join("images", subdirName, file).replace(/\\/g, "/")}`
    );
}

let tsContent = `// Auto-generated — DO NOT EDIT\n`;
let totalFiles = 0;

for (const folder of subdirs) {
  const fullPath = path.join(baseImagesDir, folder);
  const files = getFiles(fullPath, folder);

  // Create a descriptive constant name based on the folder name (e.g., 'main-carousel' -> 'mainCarouselImages')
  const baseName = toPascalCase(folder);
  const constName = `${baseName.charAt(0).toLowerCase() + baseName.slice(1)}Images`;

  // Append the new const export to the content string
  tsContent += `export const ${constName}: string[] = ${JSON.stringify(files, null, 2)};\n`;
  totalFiles += files.length;
}

fs.writeFileSync(outputFile, tsContent);

console.log(
  `Generated ${totalFiles} image URLs across ${subdirs.length} folders → ${outputFile}`
);