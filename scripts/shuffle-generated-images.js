import fs from "fs";
import path from "path";

// --- Configuration ---
const targetFile = "src/lib/data/imageData.ts";
// ---------------------

/**
 * Standard Fisher-Yates shuffle algorithm.
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

(function run() {
  const filePath = path.resolve(targetFile);

  if (!fs.existsSync(filePath)) {
    console.error(`Error: Could not find file at ${filePath}`);
    process.exit(1);
  }

  console.log(`Reading ${targetFile}...`);
  let content = fs.readFileSync(filePath, "utf-8");

  // Regex breakdown:
  // 1. (export const \w+: ImageData\[\] = )  -> Matches the start: "export const name: ImageData[] = "
  // 2. (\[[\s\S]*?\])                        -> Matches the JSON array (including newlines) non-greedily
  // 3. (;)                                   -> Matches the closing semicolon
  const regex = /(export const \w+: ImageData\[\] = )(\[[\s\S]*?\])(;)/g;

  let modifyCount = 0;

  // Replace every occurrence found by the Regex
  const newContent = content.replace(regex, (match, prefix, jsonArray, suffix) => {
    try {
      // Parse the array string into a real JS object
      const array = JSON.parse(jsonArray);

      // Shuffle it
      shuffleArray(array);

      modifyCount++;

      // Return the reconstructed string
      return `${prefix}${JSON.stringify(array, null, 2)}${suffix}`;
    } catch (e) {
      console.error("Failed to parse or shuffle an array section. Skipping.");
      return match; // Return original if error
    }
  });

  fs.writeFileSync(filePath, newContent);

  console.log(`✅ Success: Shuffled ${modifyCount} image collections in ${targetFile}`);
})();