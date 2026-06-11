import { useState } from 'react';
import AcademicsLayoutWithSidebar from '../components/AcademicsLayoutWithSidebar';
import AcademicsSidebar from '../components/AcademicsSidebar';
import college from '../theme';

/* ── Award data ─────────────────────────────────────────────────── */

const AWARDS_2022_23 = [
  {
    title: 'I. JSL Memorial Endowment Award: 2022-23',
    subtitle: '(II B.Tech I and II Sem)',
    columns: ['S.No', 'Dept', 'Roll No', 'Name', 'SGPA'],
    rows: [
      [1, 'EEE', '2I241A0257', 'SIRIPURAM MANISREE', '8.69'],
      [2, 'ME', '22245A0317', 'V YAMINI', '9.55'],
    ],
  },
  {
    title: 'II. ALUMNUS AWARD FOR ACADEMIC EXCELLENCE: 2022-23',
    subtitle: '(II B.Tech I and II Sem)',
    columns: ['S.No', 'Dept', 'Roll No', 'Name', 'SGPA'],
    rows: [
      [1, 'CE', '22245A0109', 'JANGAPELLI VASU', '9.5'],
      [2, 'ECE', '2I241A0437', 'MUDIREDDY MAHITHA', '10'],
      [3, 'CSE', '2I241A0512', 'DUVVURI SAI KEERTHANA', '9.8'],
      [4, 'IT', '2I241A1215', 'CHITRALA LOHITH', '9.61'],
      [5, 'CS-AIML', '2I241A66B4', 'VEMULA SATWIK', '9.7'],
      [6, 'CS-AIML', '2I241A66AB', 'NAMALA HASINI', '9.7'],
      [7, 'CS-AIML', '2I241A66D3', 'ANKATHI THRIMYA VANI', '9.7'],
      [8, 'CS-DS', '2I241A6733', 'MAJJI SIMHADRI', '9.4'],
      [9, 'CS-DS', '2I241A6712', 'BODA PRAVEEN', '9.4'],
      [10, 'CS-DS', '2I241A6737', 'NAGULA NAVYA SRI', '9.4'],
      [11, 'CSBS', '2I241A3214', 'DUKKIPATI LIKITHASREE', '9.8'],
    ],
  },
  {
    title: 'III. Vadlamudi Ramanaidu Memorial Scholarship: 2022-23',
    subtitle: '(I B.Tech I and II Sem)',
    columns: ['S.No', 'Dept', 'Roll No', 'Name', 'SGPA'],
    rows: [
      [1, 'ECE', '22241A04C1', 'SHUSHMA. G', '10'],
    ],
  },
  {
    title: 'IV. Adapa Krishnaiah Memorial Endowment Award: 2022-23',
    subtitle: '(I B.Tech I and II Sem)',
    columns: ['S.No', 'Dept', 'Roll No', 'Name', 'SGPA'],
    rows: [
      [1, 'ME', '22241A0337', 'OMANSHU G CHANDUKARN', '8.62'],
    ],
  },
  {
    title: 'V. Mrs & Mr. Mastan Endowment Award: 2022-23',
    subtitle: '(Highest marks in Water Resources Engineering Course)',
    columns: ['S.No', 'Dept', 'Roll No', 'Name', 'Water Resources Engineering (Highest Marks)'],
    rows: [
      [1, 'CE', '20241A0144', 'RAVI TEJA PASUNUTHI', '9.0'],
    ],
  },
  {
    title: 'VI. Mrs. Chandupatla Amrutha Reddy Endowment Award: 2022-23',
    subtitle: '(Topper of II Yr Lateral Entry & Topper of III Yr Lateral Entry from CE Dept)',
    columns: ['S.No', 'Dept', 'Roll No', 'Name', 'SGPA'],
    rows: [
      [1, 'CE', '22245A0109', 'JANGAPELLI VASU', '9.5'],
      [2, 'CE', '22245A0105', 'PATERU MOUNA', '9.13'],
    ],
  },
  {
    title: 'VII. GRIET Merit Endowment Award: 2022-23',
    subtitle: '',
    columns: ['S.No', 'Dept', 'Roll No', 'Name', 'EAMCET RANK'],
    rows: [
      [1, 'CSE', '2I241A0511', 'DODDA ABHIRAM', '1607'],
      [2, 'CSE', '2I241A0512', 'DUVVURI SAI KEERTHANA', '1418'],
      [3, 'CSE', '2I241A0576', 'BOLLINENI NAVYASREE', '1878'],
      [4, 'CSE', '20241A0586', 'GULLAPANENI VAMSI', '1894'],
    ],
  },
];

const YEARS = [
  { label: 'ENDOWMENT AWARDS 2022-23', key: '2022-23', awards: AWARDS_2022_23 },
  { label: 'ENDOWMENT AWARDS 2021-22', key: '2021-22', awards: [] },
  { label: 'ENDOWMENT AWARDS 2020-21', key: '2020-21', awards: [] },
  { label: 'ENDOWMENT AWARDS 2019-20', key: '2019-20', awards: [] },
  { label: 'ENDOWMENT AWARDS 2018-19', key: '2018-19', awards: [] },
];

/* ── Sub-components ─────────────────────────────────────────────── */

const thStyle = {
  backgroundColor: college.primaryColor,
  color: '#fff',
  padding: '9px 14px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '12px',
  fontWeight: 600,
  textAlign: 'center',
  borderRight: '1px solid rgba(255,255,255,0.15)',
  whiteSpace: 'nowrap',
};

const tdStyle = {
  padding: '8px 14px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '12px',
  border: '1px solid #e5e7eb',
  textAlign: 'center',
  color: '#374151',
};

function AwardTable({ award }) {
  return (
    <div className="mb-8">
      <h3 className="font-hind font-bold text-base text-center mb-0.5" style={{ color: college.primaryColor }}>
        {award.title}
      </h3>
      {award.subtitle && (
        <p className="font-dm-sans text-[0.875rem] text-center text-gray-500 mb-3">{award.subtitle}</p>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb' }}>
          <thead>
            <tr>
              {award.columns.map((col) => (
                <th key={col} style={thStyle}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {award.rows.map((row, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f9fafb' }}>
                {row.map((cell, j) => (
                  <td key={j} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      className={`w-4 h-4 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */

export default function EndowmentAwardsPage() {
  const [openYear, setOpenYear] = useState('2022-23');

  return (
    <AcademicsLayoutWithSidebar
      title="Endowment Awards"
      sidebar={<AcademicsSidebar />}
    >
      <div className="space-y-2">
        {YEARS.map(({ label, key, awards }) => {
          const isOpen = openYear === key;
          return (
            <div key={key} className="rounded overflow-hidden border border-gray-200">
              <button
                onClick={() => setOpenYear(isOpen ? null : key)}
                className="w-full flex items-center justify-between px-5 py-3 font-dm-sans font-bold text-[0.9375rem] text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: college.primaryColor }}
              >
                <span>{label}</span>
                <ChevronIcon open={isOpen} />
              </button>

              {isOpen && awards.length > 0 && (
                <div className="px-4 pt-6 pb-2 bg-white">
                  {awards.map((award, i) => (
                    <AwardTable key={i} award={award} />
                  ))}
                </div>
              )}

              {isOpen && awards.length === 0 && (
                <div className="px-5 py-6 bg-white text-center font-dm-sans text-[0.9375rem] text-gray-400">
                  Details will be updated shortly.
                </div>
              )}
            </div>
          );
        })}
      </div>
    </AcademicsLayoutWithSidebar>
  );
}
