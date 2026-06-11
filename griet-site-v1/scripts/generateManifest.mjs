// Run once after copying media: node scripts/generateManifest.mjs
import { readdirSync, writeFileSync, existsSync } from 'fs';
import { join, relative } from 'path';

const galleryRoot = new URL('../public/gallery', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1').replace(/%20/g, ' ');

const STRUCTURE = [
  {
    id: 'cultural',
    label: 'Cultural Events & Fests',
    desc: 'Annual flagship events, college fests, and cultural celebrations.',
    icon: '🎭',
    cover: 'cultural/valedictory',
    events: [
      { id: 'valedictory', name: 'Valedictory Ceremony', folder: 'cultural/valedictory' },
      { id: 'vivitsu',     name: 'Vivitsu 2026',         folder: 'cultural/vivitsu' },
      { id: 'swami',       name: 'Swami Anubhavananda',  folder: 'cultural/swami' },
    ],
  },
  {
    id: 'technical',
    label: 'Technical & Innovation',
    desc: 'Workshops, project expos, technical competitions, and innovation showcases.',
    icon: '⚙️',
    cover: 'technical/iic',
    events: [
      { id: 'aac-expo',  name: 'AAC Project Expo 2025',    folder: 'technical/aac-expo' },
      { id: 'iic',       name: 'IIC Conference',            folder: 'technical/iic' },
      { id: 'iot',       name: 'IoT Workshop',              folder: 'technical/iot' },
      { id: 'vlsi',      name: 'ISTC Presents — VLSI',      folder: 'technical/vlsi' },
      { id: 'xkernel',   name: 'X-Kernel',                  folder: 'technical/xkernel' },
    ],
  },
  {
    id: 'nss',
    label: 'NSS & Community Service',
    desc: 'Community outreach, eco drives, health camps, and social awareness campaigns.',
    icon: '🌿',
    cover: 'nss/events',
    events: [
      { id: 'eco-walk',       name: 'NSS Eco Walk',                      folder: 'nss/eco-walk' },
      { id: 'events',         name: 'NSS Events',                        folder: 'nss/events' },
      { id: 'entrepreneurship', name: 'Entrepreneurship Awareness Program', folder: 'nss/entrepreneurship' },
    ],
  },
  {
    id: 'professional',
    label: 'Professional Development',
    desc: 'IEEE events, guest lectures, seminars, and career-building sessions.',
    icon: '🎓',
    cover: 'professional/pb-iks',
    events: [
      { id: 'income-tax', name: 'IEEE Income Tax Seminar', folder: 'professional/income-tax' },
      { id: 'pb-iks',     name: 'PB IKS Guest Lecture',   folder: 'professional/pb-iks' },
    ],
  },
  {
    id: 'womens',
    label: "Women's Development",
    desc: "Celebrating women's achievements and empowerment on campus.",
    icon: '🌸',
    cover: 'womens/womens-day',
    events: [
      { id: 'womens-day', name: "Women's Day Celebration", folder: 'womens/womens-day' },
    ],
  },
];

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.JPG', '.JPEG', '.png', '.PNG']);
const VIDEO_EXTS = new Set(['.mp4', '.MP4']);

function listFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(f => {
      const ext = f.slice(f.lastIndexOf('.'));
      return IMAGE_EXTS.has(ext) || VIDEO_EXTS.has(ext);
    })
    .sort();
}

// Build manifest
const manifest = STRUCTURE.map(cat => ({
  ...cat,
  events: cat.events.map(ev => {
    const dir = join(galleryRoot, ev.folder);
    const files = listFiles(dir);
    return { ...ev, files };
  }),
}));

const js = `// AUTO-GENERATED — run: node scripts/generateManifest.mjs
export const GALLERY_MANIFEST = ${JSON.stringify(manifest, null, 2)};
`;

writeFileSync(new URL('../src/data/galleryManifest.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1').replace(/%20/g, ' '), js);
console.log('Manifest written to src/data/galleryManifest.js');
manifest.forEach(cat => {
  const total = cat.events.reduce((s, e) => s + e.files.length, 0);
  console.log(`  ${cat.id}: ${cat.events.length} events, ${total} files`);
});
