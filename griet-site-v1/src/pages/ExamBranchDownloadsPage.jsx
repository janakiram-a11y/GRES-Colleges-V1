import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

/* ── Document data (PDFs from GRIET Exam Branch) ────────────────────── */
const DOCUMENTS = [
  {
    title: 'Procedure for Issue of Transcripts',
    desc: 'Step-by-step procedure for obtaining official transcripts from GRIET.',
    url: 'http://www.griet.ac.in/images1/Procedure%20for%20issue%20of%20transcripts.pdf',
    category: 'Transcripts',
  },
  {
    title: 'Procedure for Obtaining Documents by Post',
    desc: 'Guidelines for requesting and receiving official documents via postal service.',
    url: 'http://www.griet.ac.in/images1/Procedure%20for%20Obtaining%20Documents%20by%20Post.pdf',
    category: 'Transcripts',
  },
  {
    title: 'Transcript Application Form',
    desc: 'Official application form to request a transcript from the Examination Branch.',
    url: 'http://www.griet.ac.in/images1/Transcript_application.pdf',
    category: 'Transcripts',
  },
  {
    title: 'Challenge Revaluation — Registration Form & Guidelines',
    desc: 'Form and guidelines for registering a challenge revaluation or recounting request.',
    url: 'https://www.griet.ac.in/images2/Challenge%20Revaluation%20Registration%20%26%20Guidelines.pdf',
    category: 'Forms',
  },
  {
    title: 'No Dues Form',
    desc: 'Official No Dues clearance form for graduating students.',
    url: 'https://www.griet.ac.in/images2/No%20Due%20Form.pdf',
    category: 'Forms',
  },
  {
    title: 'PC Application Form',
    desc: 'Provisional Certificate application form for students who have completed their programme.',
    url: 'https://www.griet.ac.in/images2/pc%20application.pdf',
    category: 'Forms',
  },
  {
    title: 'Examination Branch Committee',
    desc: 'List of members constituting the GRIET Examination Branch Committee.',
    url: 'https://www.griet.ac.in/images2/Exam%20Branch%20Committee.pdf',
    category: 'Committee',
  },
];

/* ── Category badge colours ──────────────────────────────────────────── */
const CATEGORY_STYLE = {
  Transcripts: { bg: '#dbeafe', text: '#1d4ed8' },
  Forms:       { bg: '#dcfce7', text: '#15803d' },
  Committee:   { bg: '#f3e8ff', text: '#7e22ce' },
};

/* ── Icons ───────────────────────────────────────────────────────────── */
function PdfIcon() {
  return (
    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
      <polyline points="9 9 10 9 11 9" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

/* ── Document card ───────────────────────────────────────────────────── */
function DocCard({ title, desc, url, category }) {
  const style = CATEGORY_STYLE[category] || { bg: '#f3f4f6', text: '#374151' };

  return (
    <div className="flex flex-col gap-3 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow group">
      {/* Header row */}
      <div className="flex items-start gap-3">
        <span
          className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
          style={{ backgroundColor: `${college.primaryColor}10`, color: college.primaryColor }}
        >
          <PdfIcon />
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-hind font-bold text-[0.9375rem] leading-snug mb-1" style={{ color: college.primaryColor }}>
            {title}
          </p>
          <span
            className="inline-block font-dm-sans text-[10.5px] font-semibold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: style.bg, color: style.text }}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="font-dm-sans text-[0.875rem] text-gray-500 leading-relaxed">{desc}</p>

      {/* Download button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 rounded-lg font-hind font-semibold text-[0.875rem] border transition-colors"
        style={{ color: college.primaryColor, borderColor: college.primaryColor }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = college.primaryColor;
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = college.primaryColor;
        }}
      >
        <DownloadIcon />
        View / Download
      </a>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */
export default function ExamBranchDownloadsPage() {
  const categories = [...new Set(DOCUMENTS.map(d => d.category))];

  return (
    <AcademicsLayout title="Exam Branch Documents">

      {/* Intro */}
      <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 mb-8">
        <p className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed">
          Download official forms and documents from the GRIET Examination Branch. All documents open in a new tab.
          For queries, contact{' '}
          <a href="mailto:doe@griet.ac.in" className="font-semibold hover:underline" style={{ color: college.accentColor }}>
            doe@griet.ac.in
          </a>.
        </p>
      </div>

      {/* Section per category */}
      {categories.map((cat) => (
        <section key={cat} className="mb-8">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-hind font-bold text-[15px] whitespace-nowrap" style={{ color: college.primaryColor }}>
              {cat}
            </h2>
            <span className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DOCUMENTS.filter(d => d.category === cat).map((doc) => (
              <DocCard key={doc.title} {...doc} />
            ))}
          </div>
        </section>
      ))}

      {/* Portal link */}
      <div className="mt-4 p-4 rounded-xl border border-gray-200 bg-white flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-hind font-bold text-[0.9375rem] mb-0.5" style={{ color: college.primaryColor }}>Exam Branch Portal</p>
          <p className="font-dm-sans text-[0.875rem] text-gray-600">For exam notifications, hall tickets and live announcements, visit the portal.</p>
        </div>
        <a
          href="http://www.exambranch.griet.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-hind font-bold text-[0.875rem] text-white flex-shrink-0 transition-opacity hover:opacity-85"
          style={{ backgroundColor: college.accentColor }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Exam Branch Portal
        </a>
      </div>

    </AcademicsLayout>
  );
}
