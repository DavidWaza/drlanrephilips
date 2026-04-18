/**
 * Regenerates `app/data/drLanreGalleryImages.ts` from files in `public/dr-lanre/`.
 * Usage: `node scripts/list-dr-lanre-images.mjs --write`
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "public", "dr-lanre");
const outFile = path.join(__dirname, "..", "app", "data", "drLanreGalleryImages.ts");

const paths = fs
  .readdirSync(dir)
  .filter((name) => /\.(jpe?g|png|gif|webp|avif)$/i.test(name))
  .map((name) => "/dr-lanre/" + name)
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

if (process.argv.includes("--write")) {
  const body = paths.map((p) => `  ${JSON.stringify(p)},`).join("\n");
  const ts = `/**
 * Raster images in \`/public/dr-lanre/\` only (jpg, jpeg, png, gif, webp, avif).
 * Regenerate: \`node scripts/list-dr-lanre-images.mjs --write\`
 */
export const DR_LANRE_GALLERY_IMAGES: string[] = [
${body}
];
`;
  fs.writeFileSync(outFile, ts, "utf8");
  console.log(`Wrote ${paths.length} paths to ${path.relative(process.cwd(), outFile)}`);
} else {
  console.log(paths.join("\n"));
}
