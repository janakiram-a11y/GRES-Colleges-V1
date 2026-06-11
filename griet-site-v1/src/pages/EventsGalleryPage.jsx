import { useEffect, useState, useCallback } from 'react';
import { AcademicsBanner } from '../components/AcademicsLayout';
import CollegeLayout from '../CollegeLayout';
import college from '../theme';
import { GALLERY_MANIFEST } from '../data/galleryManifest';

/* ─── Helpers ─────────────────────────────────────────────────────────── */

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.JPG', '.JPEG', '.png', '.PNG']);

function isVideo(filename) {
  return filename.toLowerCase().endsWith('.mp4');
}

function isImage(filename) {
  const ext = filename.slice(filename.lastIndexOf('.'));
  return IMAGE_EXTS.has(ext);
}

function mediaUrl(folder, filename) {
  return `/gallery/${folder}/${filename}`;
}

/* ─── Lightbox ─────────────────────────────────────────────────────────── */

function Lightbox({ files, folder, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);

  const prev = useCallback(() => setIdx(i => (i - 1 + files.length) % files.length), [files.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % files.length), [files.length]);

  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  const file = files[idx];
  const url = mediaUrl(folder, file);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex flex-col"
      onClick={onClose}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 flex-shrink-0"
        onClick={e => e.stopPropagation()}
      >
        <span className="font-hind text-white/70 text-[13px]">{idx + 1} / {files.length}</span>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-lg"
        >
          ✕
        </button>
      </div>

      {/* Media */}
      <div
        className="flex-1 flex items-center justify-center relative px-12 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {isVideo(file) ? (
          <video
            key={url}
            src={url}
            controls
            autoPlay
            className="max-h-full max-w-full rounded-lg shadow-2xl"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          />
        ) : (
          <img
            key={url}
            src={url}
            alt={file}
            className="max-h-full max-w-full rounded-lg shadow-2xl object-contain"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          />
        )}

        {/* Nav arrows */}
        {files.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white text-xl transition-colors"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white text-xl transition-colors"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {files.length > 1 && (
        <div
          className="flex gap-1.5 px-4 py-3 overflow-x-auto flex-shrink-0"
          onClick={e => e.stopPropagation()}
        >
          {files.slice(Math.max(0, idx - 6), idx + 7).map((f, i) => {
            const absIdx = Math.max(0, idx - 6) + i;
            return (
              <button
                key={f}
                onClick={() => setIdx(absIdx)}
                className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-colors ${absIdx === idx ? 'border-white' : 'border-transparent opacity-50 hover:opacity-80'}`}
              >
                {isVideo(f) ? (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white text-lg">▶</div>
                ) : (
                  <img src={mediaUrl(folder, f)} alt="" className="w-full h-full object-cover" loading="lazy" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ─── Gallery grid ─────────────────────────────────────────────────────── */

const PAGE_SIZE = 24;

function EventGallery({ event, onClose }) {
  const [page, setPage] = useState(1);
  const [lightbox, setLightbox] = useState(null);

  const { files, folder, name } = event;
  const visible = files.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < files.length;

  return (
    <div className="fixed inset-0 z-40 bg-white flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 flex-shrink-0" style={{ backgroundColor: college.primaryColor }}>
        <div>
          <p className="font-hind font-bold text-white text-[15px]">{name}</p>
          <p className="font-dm-sans text-white/70 text-[11px]">{files.length} items</p>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold"
        >
          ✕
        </button>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto p-4">
        {files.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <p className="font-hind text-[14px]">No media found for this event.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {visible.map((file, i) => (
                <button
                  key={file}
                  onClick={() => setLightbox(i)}
                  className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 hover:ring-2 ring-offset-1 transition-all group"
                  style={{ '--tw-ring-color': college.accentColor }}
                >
                  {isVideo(file) ? (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <span className="text-white text-2xl">▶</span>
                    </div>
                  ) : (
                    <img
                      src={mediaUrl(folder, file)}
                      alt={file}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                </button>
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setPage(p => p + 1)}
                  className="px-6 py-2 rounded-lg font-hind font-bold text-[13px] text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: college.primaryColor }}
                >
                  Load more ({files.length - visible.length} remaining)
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {lightbox !== null && (
        <Lightbox
          files={files}
          folder={folder}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}

/* ─── Event card (thumbnail from first image) ──────────────────────────── */

function EventCard({ event, onOpen }) {
  const firstImage = event.files.find(isImage);
  const coverUrl = firstImage ? mediaUrl(event.folder, firstImage) : null;
  const totalMedia = event.files.length;

  return (
    <button
      onClick={() => onOpen(event)}
      className="group relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 hover:shadow-lg transition-shadow text-left flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative w-full bg-gray-200" style={{ paddingTop: '65%' }}>
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={event.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[11px] font-hind font-bold px-2 py-0.5 rounded-full">
          {totalMedia} {totalMedia === 1 ? 'item' : 'items'}
        </div>
      </div>

      {/* Label */}
      <div className="p-3 flex items-center justify-between gap-2">
        <p className="font-hind font-bold text-[13px] text-gray-800 leading-snug">{event.name}</p>
        <span
          className="flex-shrink-0 text-[11px] font-hind font-bold px-2.5 py-1 rounded-lg text-white"
          style={{ backgroundColor: college.accentColor }}
        >
          Open
        </span>
      </div>
    </button>
  );
}

/* ─── Category section ─────────────────────────────────────────────────── */

function CategorySection({ category, onOpen }) {
  return (
    <section id={category.id} className="mb-12 scroll-mt-20">
      <div className="flex items-start gap-3 mb-5">
        <span className="text-2xl mt-0.5">{category.icon}</span>
        <div className="flex-1">
          <h2 className="font-hind font-bold text-[18px]" style={{ color: college.primaryColor }}>
            {category.label}
          </h2>
          <p className="font-dm-sans text-[12px] text-gray-500 mt-0.5">{category.desc}</p>
        </div>
        <span className="font-dm-sans text-[12px] text-gray-400 flex-shrink-0 mt-1">
          {category.events.reduce((s, e) => s + e.files.length, 0)} photos / videos
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.events.map(ev => (
          <EventCard key={ev.id} event={ev} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────── */

export default function EventsGalleryPage() {
  const [openEvent, setOpenEvent] = useState(null);

  return (
    <CollegeLayout college={college}>
      <AcademicsBanner title="Events Gallery" />

      <div className="page-pad">
        <p className="font-dm-sans text-[13px] text-gray-600 mb-6 max-w-2xl">
          Browse photos and videos from GRIET's events and activities. Click any event to view its full media collection.
        </p>

        {/* Category jump links */}
        <div className="flex flex-wrap gap-2 mb-8">
          {GALLERY_MANIFEST.map(cat => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white font-hind font-semibold text-[12px] text-gray-600 hover:text-[#5B1027] hover:border-[#5B1027] transition-colors"
            >
              {cat.icon} {cat.label}
            </a>
          ))}
        </div>

        {GALLERY_MANIFEST.map(cat => (
          <CategorySection key={cat.id} category={cat} onOpen={setOpenEvent} />
        ))}
      </div>

      {openEvent && (
        <EventGallery event={openEvent} onClose={() => setOpenEvent(null)} />
      )}
    </CollegeLayout>
  );
}
