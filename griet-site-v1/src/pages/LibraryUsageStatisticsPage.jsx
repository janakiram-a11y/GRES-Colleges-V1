import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const BASE = 'https://www.griet.ac.in/';

const STATS = [
  {
    name: 'IEEE',
    reports: [
      { year: '2023', href: `${BASE}2023/IEEE%20Usage%20Statistics%20Report%20-%20Gokaraju%20Ranga%20Raju%20Inst%20of%20Eng%20%26%20Tech-HYDERABAD_2023.pdf` },
      { year: '2021', href: `${BASE}2023/IEEE%20Usage%20Statistics%20Report%20-%20Gokaraju%20Ranga%20Raju%20Inst%20of%20Eng%20%26%20Tech-HYDERABAD_2021.pdf` },
      { year: '2020', href: `${BASE}2023/IEEE%20Usage%20Statistics%20Report%20-%20Gokaraju%20Ranga%20Raju%20Inst%20of%20Eng%20%26%20Tech-HYDERABAD_2020.pdf` },
      { year: '2019', href: `${BASE}2023/IEEE%20Usage%20Statistics%20Report%20-%20Gokaraju%20Ranga%20Raju%20Inst%20of%20Eng%20%26%20Tech-HYDERABAD_2019.pdf` },
      { year: '2018', href: `${BASE}2023/IEEE%20Usage%20Statistics%20Report%20-%20Gokaraju%20Ranga%20Raju%20Inst%20of%20Eng%20%26%20Tech-HYDERABAD_2018.pdf` },
    ],
  },
  {
    name: 'ASCE',
    reports: [
      { year: '2022, 2021, 2020', href: `${BASE}2022/13%203%20%20Usage%20Statistics%20E%20Resources%20ASCE%20Usage%20Statistics%20Report%202022%2C2021%2C2020.xls` },
    ],
  },
  {
    name: 'ASME',
    reports: [
      { year: '2022, 2021, 2020', href: `${BASE}2022/13%204%20%20Usage%20Statistics%20E%20Resources%20ASME%20Usage%20Statistics%20Report%20for%202022%2C2021%2C2020.xls` },
    ],
  },
  {
    name: 'Elsevier',
    reports: [
      { year: '2022, 2021, 2020, 2019', href: `${BASE}2022/13%205%20Usage%20Statistics%20E%20Resources%20%20Elsevier%20Usage%20Statistics%20for%202022%2C2021%2C2020%2C2019.xls` },
    ],
  },
  {
    name: 'J-GATE',
    reports: [
      { year: '2022, 2021, 2020', href: `${BASE}2022/13%206%20Usage%20Statistics%20E%20Resources%20%20%20J-Gate%20Usage%20Statistics%20%20Report%202022%2C2021%2C2020.xls` },
    ],
  },
  {
    name: 'Knimbus',
    reports: [
      { year: '2019–2023', href: `${BASE}2023/Knimbus%20Usage%20Statistics%20Report-%20Gokaraju%20Ranga%20Raju%20Inst%20of%20Eng%20%26%20Tech-HYDERABAD_2019-2023.pdf` },
    ],
  },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>
        {children}
      </h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function LibraryUsageStatisticsPage() {
  return (
    <AcademicsLayout title="Library — Usage Statistics">

      <SectionLabel>E-Resources Usage Reports</SectionLabel>
      <p className="font-dm-sans text-[0.9375rem] text-gray-500 mb-6">
        Download annual usage statistics reports for each subscribed e-resource platform.
      </p>

      <div className="flex flex-col gap-4">
        {STATS.map(({ name, reports }) => (
          <div key={name} className="p-5 rounded-xl border border-gray-200 bg-white">
            <p className="font-hind font-bold text-base mb-3" style={{ color: college.primaryColor }}>{name}</p>
            <div className="flex flex-wrap gap-3">
              {reports.map(({ year, href }) => (
                <a
                  key={year}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-dm-sans text-[0.875rem] font-semibold hover:shadow-sm transition-all"
                  style={{ color: college.primaryColor, borderColor: `${college.primaryColor}40` }}
                >
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                    <path d="M8 2v8M5 7l3 3 3-3M3 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {year}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

    </AcademicsLayout>
  );
}
