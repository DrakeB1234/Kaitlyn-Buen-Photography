import fs from "fs";
import path from "path";
import sharp from "sharp"; // Replaces image-size

// --- Configuration ---
const subdirs = [
  {
    path: "full/main-carousel",
    outputConstName: "fullImagesMainCarousel",
  },
  {
    path: "thumbnails/gallery",
    outputConstName: "thumbnailsImagesGallery",
  },
];

const baseImagesDir = "static/images";
const outputFile = "src/lib/data/imageData.ts";

/**
 * Reads files and uses Sharp to get dimensions asynchronously.
 */
async function getFiles(dir, subdirName) {
  if (!fs.existsSync(dir)) return [];

  // 1. Get list of file names
  const fileNames = fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|gif|webp|avif)$/i.test(file));

  // 2. Process all images in parallel
  const dataPromises = fileNames.map(async (file) => {
    const absolutePath = path.join(dir, file);
    const publicUrl = `/${path.join("images", subdirName, file).replace(/\\/g, "/")}`;

    try {
      // Sharp reads the metadata (robust for all WebP types)
      const metadata = await sharp(absolutePath).metadata();

      return {
        url: publicUrl,
        width: metadata.width,
        height: metadata.height
      };
    } catch (err) {
      console.error(`Error reading ${file}:`, err.message);
      return null;
    }
  });

  // 3. Wait for all files to be read and filter out failures
  const results = await Promise.all(dataPromises);
  return results.filter(Boolean);
}

// --- Main Execution ---
(async () => {
  console.log("Starting image processing...");

  let tsContent = `// Auto-generated — DO NOT EDIT
export interface ImageData {
  url: string;
  width: number;
  height: number;
}
\n`;

  let totalFiles = 0;

  for (const item of subdirs) {
    const fullPath = path.join(baseImagesDir, item.path);

    // Await the async file getting
    const files = await getFiles(fullPath, item.path);

    tsContent += `export const ${item.outputConstName}: ImageData[] = ${JSON.stringify(files, null, 2)};\n`;
    totalFiles += files.length;

    console.log(`Processed ${item.path}: ${files.length} images`);
  }

  fs.writeFileSync(outputFile, tsContent);

  console.log(
    `SUCCESS: Generated ${totalFiles} image objects across ${subdirs.length} folders → ${outputFile}`
  );
})();