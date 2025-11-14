import fs from "fs";
import path from "path";

const subdirs = [
  "main-carousel",
];

const baseImagesDir = "static/images";
const outputFile = "src/lib/data/imageData.ts";

function getFiles(dir, subdirName) {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|gif|webp|avif)$/i.test(file))
    .map((file) =>
      `/${path.join("images", subdirName, file).replace(/\\/g, "/")}`
    );
}

let allImages = [];

for (const folder of subdirs) {
  const fullPath = path.join(baseImagesDir, folder);
  const files = getFiles(fullPath, folder);
  allImages = allImages.concat(files);
}

const tsContent = `// Auto-generated — DO NOT EDIT
export const mainCarouselImages: string[] = ${JSON.stringify(allImages, null, 2)};
`;

fs.writeFileSync(outputFile, tsContent);

console.log(
  `Generated ${allImages.length} image URLs from ${subdirs.length} folders → ${outputFile}`
);
