import fs from "fs";
import path from "path";
import sharp from "sharp";

// 1. Grab the directory argument from the command line
const inputArg = process.argv[2];

if (!inputArg) {
  console.error("Error: Please provide a directory path relative to static/images/");
  console.error("Usage: node generate-image-data.js <path/to/folder>");
  console.error("Example: node generate-image-data.js full/gallery");
  process.exit(1);
}

const baseImagesDir = "static/images";
const fullPath = path.join(baseImagesDir, inputArg);

if (!fs.existsSync(fullPath)) {
  console.error(`Error: Directory not found at ${fullPath}`);
  process.exit(1);
}

// 2. Dynamically construct output file and variable names based on the target folder
const folderName = path.basename(inputArg); // e.g., "gallery" from "full/gallery"
const outputFile = path.join("src", "lib", "data", `${folderName}-generated.ts`);
const outputConstName = `${folderName.replace(/[^a-zA-Z0-9]/g, "")}Images`; // e.g., "galleryImages"

/**
 * Reads files and uses Sharp to get dimensions asynchronously.
 */
async function getFiles(dir, subdirName) {
  if (!fs.existsSync(dir)) return [];

  const fileNames = fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|gif|webp|avif)$/i.test(file));

  const dataPromises = fileNames.map(async (file) => {
    const absolutePath = path.join(dir, file);
    // Maintain your existing public URL structure
    const publicUrl = `/${path.join("images", subdirName, file).replace(/\\/g, "/")}`;

    try {
      const metadata = await sharp(absolutePath).metadata();

      return {
        url: publicUrl,
        width: metadata.width,
        height: metadata.height,
      };
    } catch (err) {
      console.error(`Error reading ${file}:`, err.message);
      return null;
    }
  });

  const results = await Promise.all(dataPromises);
  return results.filter(Boolean);
}

// --- Main Execution ---
(async () => {
  console.log(`Starting image processing for: ${inputArg}...`);

  let tsContent = `// Auto-generated — DO NOT EDIT
export interface ImageData {
  url: string;
  width: number;
  height: number;
}
\n`;

  const files = await getFiles(fullPath, inputArg);

  if (files.length === 0) {
    console.log(`No images found in ${fullPath}. Exiting.`);
    return;
  }

  tsContent += `export const ${outputConstName}: ImageData[] = ${JSON.stringify(files, null, 2)};\n`;

  // Ensure the output directory exists
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, tsContent);

  console.log(
    `SUCCESS: Generated ${files.length} image objects -> ${outputFile}`
  );
  console.log(`Exported as: "export const ${outputConstName}"`);
})();