import sharp from 'sharp';
import { copyFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, '..', '..', 'raily', 'assets');
const dst = join(__dirname, '..', 'public');

mkdirSync(dst, { recursive: true });

// favicon 48x48
await sharp(join(src, 'favicon.png'))
  .resize(48, 48)
  .toFile(join(dst, 'favicon.png'));

// icon 1024x1024
await sharp(join(src, 'icon.png'))
  .resize(1024, 1024)
  .toFile(join(dst, 'icon.png'));

// adaptive-icon 1024x1024 (no bg — keep alpha)
await sharp(join(src, 'adaptive-icon.png'))
  .resize(1024, 1024)
  .png()
  .toFile(join(dst, 'adaptive-icon.png'));

console.log('Done: favicon.png (48x48), icon.png (1024x1024), adaptive-icon.png (1024x1024 no bg)');
