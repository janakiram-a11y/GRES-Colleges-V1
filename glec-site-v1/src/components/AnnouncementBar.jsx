import { useState } from 'react';
import { withAlpha } from '../theme';

function LOIModal({ college, onClose }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="relative bg-white rounded-xl shadow-2xl max-w-[620px] w-[90%] p-10" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl font-light transition-colors"
          style={{ color: college.primaryColor }}
          aria-label="Close"
        >
          ×
        </button>
        <div className="flex items-center gap-2 mb-6">
          <img src={college.smallLogo} alt={college.shortName} className="h-10 w-10 object-contain" />
          <span className="text-white font-dm-sans font-bold text-[11px] px-2 py-0.5 rounded" style={{ backgroundColor: college.accentColor }}>
            NEW
          </span>
        </div>
        <p className="font-dm-sans text-[15px] leading-[26px] text-[#1a1a1a] mb-5">
          We are pleased to inform you that the{' '}
          <strong style={{ color: college.primaryColor }}>Ministry of Education</strong>, upon the recommendation of the University Grants Commission (UGC), has issued a{' '}
          <strong style={{ color: college.primaryColor }}>Letter of Intent (LoI)</strong> to{' '}
          <strong style={{ color: college.primaryColor }}>{college.shortName}</strong>.
        </p>
        <p className="font-dm-sans text-[15px] leading-[26px] text-[#1a1a1a]">
          This signifies that {college.shortName} has been invited to fulfil the necessary requirements toward being granted{' '}
          <strong style={{ color: college.primaryColor }}>Deemed-to-be University</strong> status.
        </p>
        <div className="mt-8">
          <button
            onClick={onClose}
            className="text-white font-dm-sans font-semibold text-[13px] px-6 py-2.5 rounded transition-colors"
            style={{ backgroundColor: college.primaryColor }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function TickerContent({ announcements, college, onLOIClick }) {
  return (
    <div className="flex items-center gap-8 text-[13px] font-dm-sans font-medium shrink-0" style={{ color: college.primaryColor }}>
      {announcements.map((ann, idx) => (
        <span key={idx} className="flex items-center gap-8">
          {idx > 0 && (
            <span className="select-none" style={{ color: withAlpha(college.primaryColor, 0.3) }}>|</span>
          )}
          {ann.isLOI ? (
            <button onClick={onLOIClick} className="flex items-center gap-2 transition-colors group" style={{ color: college.primaryColor }}>
              <span className="group-hover:underline underline-offset-2">{ann.text}</span>
              {ann.badge && (
                <span className="text-white font-bold text-[10px] px-1.5 py-0.5 rounded" style={{ backgroundColor: college.accentColor }}>
                  {ann.badge}
                </span>
              )}
            </button>
          ) : (
            <a
              href={ann.href || '#'}
              target={ann.href && ann.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors group"
              style={{ color: college.primaryColor }}
            >
              <span className="group-hover:underline underline-offset-2">{ann.text}</span>
              {ann.badge && (
                <span className="text-white font-bold text-[10px] px-1.5 py-0.5 rounded" style={{ backgroundColor: college.accentColor }}>
                  {ann.badge}
                </span>
              )}
            </a>
          )}
        </span>
      ))}
    </div>
  );
}

export default function AnnouncementBar({ college }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 22s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full bg-white py-2" style={{ borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.1)}` }}>
        <div className="max-w-[1320px] mx-auto px-[60px] flex items-center gap-4">
          <div
            className="flex items-center gap-2 rounded-full px-3 py-1 shrink-0 border"
            style={{
              backgroundColor: withAlpha(college.primaryColor, 0.07),
              borderColor: withAlpha(college.primaryColor, 0.18),
            }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: college.primaryColor }}>
              <path d="M10 2a6 6 0 00-6 6v1H3a1 1 0 000 2h1v1a6 6 0 0012 0v-1h1a1 1 0 100-2h-1V8a6 6 0 00-6-6zm0 14a4 4 0 01-4-4v-1h8v1a4 4 0 01-4 4z" />
            </svg>
            <span
              className="font-dm-sans font-bold text-[11px] uppercase tracking-wider"
              style={{ color: college.primaryColor }}
            >
              Announcements
            </span>
          </div>

          <span className="text-sm select-none shrink-0" style={{ color: withAlpha(college.primaryColor, 0.2) }}>|</span>

          <div className="overflow-hidden flex-1">
            <div className="ticker-track">
              <TickerContent announcements={college.announcements} college={college} onLOIClick={() => setModalOpen(true)} />
              <div style={{ width: '50vw' }} className="shrink-0" />
              <TickerContent announcements={college.announcements} college={college} onLOIClick={() => setModalOpen(true)} />
              <div style={{ width: '50vw' }} className="shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {modalOpen && <LOIModal college={college} onClose={() => setModalOpen(false)} />}
    </>
  );
}
