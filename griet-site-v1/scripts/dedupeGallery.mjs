// node scripts/dedupeGallery.mjs
// Finds duplicate filenames across gallery folders, keeps the copy in the most
// relevant folder, removes the rest, then regenerates the manifest.

import { readdirSync, unlinkSync, existsSync, copyFileSync, writeFileSync } from 'fs';
import { join, extname } from 'path';
import { createHash } from 'crypto';
import { readFileSync } from 'fs';

const galleryRoot = 'D:\\Projects\\Duplicate project\\griet-site-v1\\public\\gallery';
const manifestOut  = 'D:\\Projects\\Duplicate project\\griet-site-v1\\src\\data\\galleryManifest.js';

// ── Folder → category priority (higher = keep here over lower) ────────────
const FOLDER_PRIORITY = {
  'cultural/valedictory':       10,
  'cultural/vivitsu':           10,
  'cultural/swami':             10,
  'technical/aac-expo':         10,
  'technical/iic':              10,
  'technical/iot':              10,
  'technical/vlsi':             10,
  'technical/xkernel':          10,
  'nss/eco-walk':               10,
  'nss/events':                 10,
  'nss/entrepreneurship':       10,
  'professional/income-tax':    10,
  'professional/pb-iks':        10,
  'womens/womens-day':          10,
};

const IMAGE_EXTS = new Set(['.jpg','.jpeg','.JPG','.JPEG','.png','.PNG']);
const VIDEO_EXTS = new Set(['.mp4','.MP4']);

function supported(f) {
  const e = extname(f);
  return IMAGE_EXTS.has(e) || VIDEO_EXTS.has(e);
}

// ── 1. Collect all files ──────────────────────────────────────────────────
const fileMap = {}; // filename → [{ path, folder, relFolder }]

function scan(dir, relFolder) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    if (e.isDirectory()) {
      scan(join(dir, e.name), relFolder + '/' + e.name);
    } else if (e.isFile() && supported(e.name) && e.name !== 'cover.jpg') {
      if (!fileMap[e.name]) fileMap[e.name] = [];
      fileMap[e.name].push({ path: join(dir, e.name), folder: relFolder });
    }
  }
}

const cats = readdirSync(galleryRoot, { withFileTypes: true })
  .filter(e => e.isDirectory())
  .map(e => e.name);

for (const cat of cats) {
  const catDir = join(galleryRoot, cat);
  const subDirs = readdirSync(catDir, { withFileTypes: true }).filter(e => e.isDirectory());
  for (const sub of subDirs) {
    scan(join(catDir, sub.name), `${cat}/${sub.name}`);
  }
}

// ── 2. Hash-based exact duplicate detection ───────────────────────────────
// For name-matched files, verify they are actually the same content
function hashFile(p) {
  try {
    return createHash('md5').update(readFileSync(p)).digest('hex');
  } catch { return null; }
}

// ── 3. Remove duplicates ──────────────────────────────────────────────────
let removedCount = 0;
const removed = [];

for (const [name, copies] of Object.entries(fileMap)) {
  if (copies.length < 2) continue;

  // Check if they are actual byte-for-byte duplicates
  const hashes = copies.map(c => ({ ...c, hash: hashFile(c.path) }));

  // Group by hash — only remove copies with identical content
  const byHash = {};
  for (const c of hashes) {
    if (!c.hash) continue;
    if (!byHash[c.hash]) byHash[c.hash] = [];
    byHash[c.hash].push(c);
  }

  for (const [hash, group] of Object.entries(byHash)) {
    if (group.length < 2) continue;
    // Keep the one in the highest-priority (most specific) folder
    // All folders have equal priority so keep the one that sorts first alphabetically
    group.sort((a, b) => a.folder.localeCompare(b.folder));
    const keep = group[0];
    for (const dup of group.slice(1)) {
      try {
        unlinkSync(dup.path);
        removed.push({ name, kept: keep.folder, removed: dup.folder });
        removedCount++;
      } catch (e) {
        console.error(`Failed to remove ${dup.path}: ${e.message}`);
      }
    }
  }
}

console.log(`\nRemoved ${removedCount} exact duplicate files.`);

// Show summary by folder pair
const pairCounts = {};
for (const r of removed) {
  const key = `${r.kept} → removed from ${r.removed}`;
  pairCounts[key] = (pairCounts[key] || 0) + 1;
}
for (const [k, v] of Object.entries(pairCounts).sort((a,b) => b[1]-a[1])) {
  console.log(`  ${String(v).padStart(4)}: ${k}`);
}

// ── 4. Regenerate manifest ────────────────────────────────────────────────
const STRUCTURE = [
  {
    id: 'cultural', label: 'Cultural Events & Fests',
    desc: 'Annual flagship events, college fests, and cultural celebrations.', icon: '🎭',
    events: [
      { id: 'valedictory', name: 'Valedictory Ceremony',  folder: 'cultural/valedictory' },
      { id: 'vivitsu',     name: 'Vivitsu 2026',          folder: 'cultural/vivitsu' },
      { id: 'swami',       name: 'Swami Anubhavananda',   folder: 'cultural/swami' },
    ],
  },
  {
    id: 'technical', label: 'Technical & Innovation',
    desc: 'Workshops, project expos, technical competitions, and innovation showcases.', icon: '⚙️',
    events: [
      { id: 'aac-expo', name: 'AAC Project Expo 2025',  folder: 'technical/aac-expo' },
      { id: 'iic',      name: 'IIC Conference',          folder: 'technical/iic' },
      { id: 'iot',      name: 'IoT Workshop',            folder: 'technical/iot' },
      { id: 'vlsi',     name: 'ISTC Presents — VLSI',    folder: 'technical/vlsi' },
      { id: 'xkernel',  name: 'X-Kernel',                folder: 'technical/xkernel' },
    ],
  },
  {
    id: 'nss', label: 'NSS & Community Service',
    desc: 'Community outreach, eco drives, health camps, and social awareness campaigns.', icon: '🌿',
    events: [
      { id: 'eco-walk',       name: 'NSS Eco Walk',                       folder: 'nss/eco-walk' },
      { id: 'events',         name: 'NSS Events',                         folder: 'nss/events' },
      { id: 'entrepreneurship', name: 'Entrepreneurship Awareness Program', folder: 'nss/entrepreneurship' },
    ],
  },
  {
    id: 'professional', label: 'Professional Development',
    desc: 'IEEE events, guest lectures, seminars, and career-building sessions.', icon: '🎓',
    events: [
      { id: 'income-tax', name: 'IEEE Income Tax Seminar', folder: 'professional/income-tax' },
      { id: 'pb-iks',     name: 'PB IKS Guest Lecture',   folder: 'professional/pb-iks' },
    ],
  },
  {
    id: 'womens', label: "Women's Development",
    desc: "Celebrating women's achievements and empowerment on campus.", icon: '🌸',
    events: [
      { id: 'womens-day', name: "Women's Day Celebration", folder: 'womens/womens-day' },
    ],
  },
];

function listFiles(folder) {
  const dir = join(galleryRoot, folder);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(f => f !== 'cover.jpg' && supported(f))
    .sort();
}

const manifest = STRUCTURE.map(cat => ({
  ...cat,
  events: cat.events.map(ev => ({ ...ev, files: listFiles(ev.folder) })),
}));

const js = `// AUTO-GENERATED — run: node scripts/dedupeGallery.mjs
export const GALLERY_MANIFEST = ${JSON.stringify(manifest, null, 2)};
`;
writeFileSync(manifestOut, js);

console.log('\nUpdated manifest:');
let grandTotal = 0;
for (const cat of manifest) {
  const total = cat.events.reduce((s, e) => s + e.files.length, 0);
  grandTotal += total;
  console.log(`  ${cat.id}: ${cat.events.map(e => `${e.id}(${e.files.length})`).join(', ')} = ${total}`);
}
console.log(`  GRAND TOTAL: ${grandTotal} unique files`);
