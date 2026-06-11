import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const PDF_PATH = '/college-diary-2024-25.pdf';

export default function CollegeDiaryPage() {
  return (
    <AcademicsLayout title="College Diary 2024–25">

      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="font-hind font-bold text-lg md:text-xl" style={{ color: college.primaryColor }}>
            GRIET College Diary 2024–25
          </h2>
          <p className="font-dm-sans text-[0.9375rem] text-gray-500 mt-1">
            The official college diary containing the academic calendar, important dates, and institutional information for the year 2024–25.
          </p>
        </div>
        <a
          href={PDF_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-dm-sans font-semibold text-[0.9375rem] text-white transition-opacity hover:opacity-85 whitespace-nowrap flex-shrink-0"
          style={{ backgroundColor: college.primaryColor }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Open in New Tab
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
        <div
          className="flex items-center gap-3 px-5 py-3"
          style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)` }}
        >
          <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="font-hind font-semibold text-[0.9375rem] text-white">
            College Diary 2024–25 — GRIET
          </span>
        </div>

        <iframe
          src={PDF_PATH}
          title="College Diary 2024-25"
          className="w-full border-0"
          style={{ height: '80vh', minHeight: 500 }}
        />
      </div>

      {/* Fallback note */}
      <p className="mt-4 font-dm-sans text-[0.875rem] text-gray-400 text-center">
        If the document does not load,{' '}
        <a
          href={PDF_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-75"
          style={{ color: college.primaryColor }}
        >
          click here to open it directly
        </a>
        .
      </p>

    </AcademicsLayout>
  );
}
