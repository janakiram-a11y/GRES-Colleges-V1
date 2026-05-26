import { useState } from 'react';
import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

/* ── PDF download button ─────────────────────────────────────────────── */
function DocBtn({ label, url, variant = 'outline' }) {
  if (variant === 'solid') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-hind font-semibold text-[12px] text-white transition-opacity hover:opacity-85"
        style={{ backgroundColor: college.primaryColor }}
      >
        <PdfIcon />
        {label}
      </a>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-hind font-semibold text-[12px] border transition-colors hover:text-white"
      style={{
        color: college.primaryColor,
        borderColor: college.primaryColor,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = college.primaryColor;
        e.currentTarget.style.color = '#fff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = college.primaryColor;
      }}
    >
      <PdfIcon />
      {label}
    </a>
  );
}

function PdfIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" y1="18" x2="12" y2="12" />
      <line x1="9" y1="15" x2="15" y2="15" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/* ── Year accordion ──────────────────────────────────────────────────── */
function YearSection({ year, docs, resultLink, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 mb-3">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-left transition-opacity hover:opacity-90"
        style={{ backgroundColor: college.primaryColor }}
      >
        <span className="font-hind font-bold text-[14px] text-white tracking-wide">
          NIRF – {year}
        </span>
        <svg
          className={`w-4 h-4 text-white transition-transform flex-shrink-0 ${open ? 'rotate-180' : ''}`}
          fill="currentColor" viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <div className="p-5 bg-white">
          <div className="flex flex-wrap gap-3">
            {docs.map(({ label, url }) => (
              <DocBtn key={label} label={label} url={url} />
            ))}
            {resultLink && (
              <a
                href={resultLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-hind font-semibold text-[12px] border transition-colors"
                style={{ color: college.accentColor, borderColor: college.accentColor }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = college.accentColor;
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = college.accentColor;
                }}
              >
                <ExternalIcon />
                NIRF Results {year}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── NIRF year data ──────────────────────────────────────────────────── */
const NIRF_YEARS = [
  {
    year: '2026',
    docs: [
      { label: 'Overall', url: 'https://www.griet.ac.in/2026/Overall-2026.pdf' },
      { label: 'Engineering', url: 'https://www.griet.ac.in/2026/Engineering%20-2026.pdf' },
      { label: 'Innovation', url: 'https://www.griet.ac.in/2026/Innovation-2026.pdf' },
      { label: 'SDG', url: 'https://www.griet.ac.in/2026/SDG-2026.pdf' },
    ],
  },
  {
    year: '2025',
    docs: [
      { label: 'Overall', url: 'https://www.griet.ac.in/2025/NIRF%20OVERALL_2025.pdf' },
      { label: 'Engineering', url: 'https://www.griet.ac.in/2025/NIRF%20Engineering_2025.pdf' },
      { label: 'Innovation', url: 'https://www.griet.ac.in/2025/NIRF%20Innovation_2025.pdf' },
      { label: 'SDG', url: 'https://www.griet.ac.in/2025/NIRF%20SDG_2025.pdf' },
    ],
  },
  {
    year: '2024',
    docs: [
      { label: 'Overall', url: 'https://www.griet.ac.in/2024/NIRF_OVERALL_2024.pdf' },
      { label: 'Engineering', url: 'https://www.griet.ac.in/2024/NIRF_ENGINEERING_2024.pdf' },
      { label: 'Innovation', url: 'https://www.griet.ac.in/2024/NIRF_INNOVATION_2024.pdf' },
    ],
  },
  {
    year: '2023',
    docs: [
      { label: 'Overall', url: 'https://www.griet.ac.in/2022/nirf%20overall%202023.pdf' },
      { label: 'Engineering', url: 'https://www.griet.ac.in/2022/nirf%20engg%202023.pdf' },
    ],
    resultLink: 'https://www.nirfindia.org/2023/EngineeringRanking150.html',
  },
  {
    year: '2022',
    docs: [
      { label: 'Overall', url: 'https://www.griet.ac.in/images2/GRIET_OVERALL_2022.pdf' },
      { label: 'Engineering', url: 'https://www.griet.ac.in/images2/GRIET_ENGG_2022.pdf' },
      { label: 'Certificate', url: 'https://www.griet.ac.in/2023/NIRF-2022%20CER.jpg' },
    ],
  },
  {
    year: '2021',
    docs: [
      { label: 'Overall', url: 'https://www.griet.ac.in/images2/GRIET_OVERALL_2021.pdf' },
      { label: 'Engineering', url: 'https://www.griet.ac.in/images2/GRIET_ENGG_2021.pdf' },
      { label: 'Certificate', url: 'https://www.griet.ac.in/2023/NIRF-2021%20CER.jpg' },
    ],
  },
  {
    year: '2020',
    docs: [
      { label: 'Overall', url: 'https://www.griet.ac.in/images2/GRIET_OVERALL_2020.pdf' },
      { label: 'Engineering', url: 'https://www.griet.ac.in/images2/GRIET_ENGG_2020.pdf' },
      { label: 'Certificate', url: 'https://www.griet.ac.in/2023/NIRF-2020%20CER.jpg' },
    ],
  },
  {
    year: '2019',
    docs: [
      { label: 'Overall', url: 'https://www.griet.ac.in/2023/NIRF%20-%20Overall%202019.pdf' },
      { label: 'Engineering', url: 'https://www.griet.ac.in/2023/NIRF%20-%20Engineering%202019.pdf' },
      { label: 'Certificate', url: 'https://www.griet.ac.in/2023/NIRF-2019%20CER.jpg' },
    ],
  },
  {
    year: '2018',
    docs: [
      { label: 'Overall', url: 'https://www.griet.ac.in/2023/NIRF%202018%20Overall.pdf' },
      { label: 'Engineering', url: 'https://www.griet.ac.in/2023/NIRF%202018%20Engg.pdf' },
    ],
    resultLink: 'https://www.nirfindia.org/2018/EngineeringRanking200.html',
  },
  {
    year: '2017',
    docs: [
      { label: 'Overall', url: 'https://www.griet.ac.in/2023/NIRF%20-%20Overall%202017.pdf' },
      { label: 'Engineering', url: 'https://www.griet.ac.in/2023/NIRF%20-%20Engineering%202017.pdf' },
    ],
    resultLink: 'https://www.nirfindia.org/2017/EngineeringRanking200.html',
  },
  {
    year: '2016',
    docs: [
      { label: 'Engineering', url: 'https://www.griet.ac.in/2023/NIRF%202016.pdf' },
    ],
  },
];

/* ── Page ────────────────────────────────────────────────────────────── */
export default function NIRFPage() {
  return (
    <AcademicsLayout title="NIRF">

      {/* Intro */}
      <section className="mb-8">
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-2">
            The <strong>National Institutional Ranking Framework (NIRF)</strong> was approved by the Ministry of Education (formerly MHRD), Government of India, in September 2015. GRIET has participated consistently since its inception, submitting data across the <em>Overall</em>, <em>Engineering</em>, <em>Innovation</em>, and <em>SDG</em> categories.
          </p>
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
            Download the year-wise data submissions and certificates below. Each document opens in a new tab.
          </p>
        </div>
      </section>

      {/* Year-wise sections */}
      <section>
        {NIRF_YEARS.map((entry, i) => (
          <YearSection
            key={entry.year}
            year={entry.year}
            docs={entry.docs}
            resultLink={entry.resultLink}
            defaultOpen={i === 0}
          />
        ))}
      </section>

      {/* NIRF Portal link */}
      <section className="mt-8">
        <div className="p-4 rounded-xl border border-gray-200 bg-white flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-hind font-bold text-[13px] mb-0.5" style={{ color: college.primaryColor }}>NIRF India Portal</p>
            <p className="font-dm-sans text-[12px] text-gray-600">View official NIRF rankings and all institutional data on the national portal.</p>
          </div>
          <a
            href="https://www.nirfindia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-hind font-bold text-[12px] text-white flex-shrink-0 transition-opacity hover:opacity-85"
            style={{ backgroundColor: college.accentColor }}
          >
            <ExternalIcon />
            Visit NIRF India
          </a>
        </div>
      </section>

    </AcademicsLayout>
  );
}
