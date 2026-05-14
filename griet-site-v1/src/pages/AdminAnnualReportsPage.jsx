import AdministrationLayout from '../components/AdministrationLayout';
import college from '../theme';

function SectionHeading({ children }) {
  return (
    <h2
      className="font-hind font-bold text-2xl mb-6 pb-2 inline-block"
      style={{ color: college.primaryColor, borderBottom: `2px solid ${college.accentColor}` }}
    >
      {children}
    </h2>
  );
}

const reports = [
  { year: '2024–25', file: '#', size: 'PDF' },
  { year: '2023–24', file: '#', size: 'PDF' },
  { year: '2022–23', file: '#', size: 'PDF' },
  { year: '2021–22', file: '#', size: 'PDF' },
  { year: '2020–21', file: '#', size: 'PDF' },
  { year: '2019–20', file: '#', size: 'PDF' },
  { year: '2018–19', file: '#', size: 'PDF' },
  { year: '2017–18', file: '#', size: 'PDF' },
  { year: '2016–17', file: '#', size: 'PDF' },
  { year: '2015–16', file: '#', size: 'PDF' },
  { year: '2014–15', file: '#', size: 'PDF' },
];

export default function AdminAnnualReportsPage() {
  return (
    <AdministrationLayout title="Annual Reports">
      <div className="space-y-8">

        <div>
          <SectionHeading>Annual Reports</SectionHeading>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 mb-2 max-w-2xl">
            GRIET's Annual Reports document the institution's performance, achievements, financial summaries,
            academic highlights, research output, and strategic milestones for each academic year.
          </p>
        </div>

        {/* Latest Report highlight */}
        <div
          className="rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white"
          style={{ backgroundColor: college.primaryColor }}
        >
          <div>
            <p className="font-hind font-bold text-[13px] uppercase tracking-widest mb-1" style={{ color: college.accentColor }}>
              Latest Report
            </p>
            <p className="font-hind font-bold text-[20px]">Annual Report 2024–25</p>
            <p className="font-dm-sans text-[13px] mt-1 opacity-80">
              Covers academic year 2024–25 including accreditation updates, research highlights, and placement statistics.
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded font-hind font-semibold text-[13px] transition-opacity hover:opacity-90 text-white border-2 border-white/60"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download PDF
          </a>
        </div>

        {/* All Reports Grid */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            All Annual Reports
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reports.map(({ year, file }) => (
              <a
                key={year}
                href={file}
                className="group flex items-center gap-4 bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm hover:border-gray-300 transition-all"
              >
                {/* PDF icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${college.primaryColor}15` }}
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" style={{ color: college.primaryColor }}>
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-hind font-semibold text-[14px] group-hover:underline" style={{ color: college.primaryColor }}>
                    Annual Report
                  </p>
                  <p className="font-dm-sans text-[13px] text-gray-500">{year}</p>
                </div>
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-auto flex-shrink-0 text-gray-400">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            ))}
          </div>
        </section>

      </div>
    </AdministrationLayout>
  );
}
