import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const RESULT_LINKS = [
  { label: 'B.Tech Regular / Supplementary Results',  desc: 'View semester-wise results for all B.Tech programmes' },
  { label: 'M.Tech Regular / Supplementary Results',  desc: 'View semester-wise results for all M.Tech programmes' },
  { label: 'Re-Valuation / Re-Counting Results',      desc: 'Results for challenge revaluation and recounting requests' },
  { label: 'Grade Cards Download',                     desc: 'Download official grade cards for completed semesters' },
];

export default function ResultsPage() {
  return (
    <AcademicsLayout title="Results">
      <p className="font-dm-sans text-[13.5px] text-gray-600 mb-8 leading-relaxed max-w-2xl">
        Examination results for all programmes are published on the GRIET Examination Portal.
        Students can view results using their Hall Ticket Number and Date of Birth.
        For queries contact{' '}
        <a href="mailto:doe@griet.ac.in" className="font-semibold hover:underline" style={{ color: college.primaryColor }}>
          doe@griet.ac.in
        </a>.
      </p>

      {/* 2×2 result cards — full width on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {RESULT_LINKS.map(({ label, desc }) => (
          <a
            key={label}
            href="#"
            className="group flex flex-col gap-3 p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-transparent transition-all"
          >
            <span
              className="flex items-center justify-center w-10 h-10 rounded-full"
              style={{ backgroundColor: `${college.primaryColor}14` }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" style={{ color: college.primaryColor }}>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="font-hind font-semibold text-[13px] group-hover:underline leading-snug" style={{ color: college.primaryColor }}>
              {label}
            </span>
            <p className="font-dm-sans text-[12px] text-gray-500 leading-relaxed">{desc}</p>
          </a>
        ))}
      </div>

      {/* Info note */}
      <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-200">
        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: college.primaryColor }}>
          <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
        </svg>
        <p className="font-dm-sans text-[12.5px] text-gray-600 leading-relaxed">
          <span className="font-semibold" style={{ color: college.primaryColor }}>Note: </span>
          Results are provisional until issuance of official mark sheets. Students are advised to
          verify their results and report discrepancies to the Examination Branch within 15 days
          of result publication.
        </p>
      </div>
    </AcademicsLayout>
  );
}
