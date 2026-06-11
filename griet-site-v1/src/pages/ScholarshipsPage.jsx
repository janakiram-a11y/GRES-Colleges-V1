import AdmissionsLayout from '../components/AdmissionsLayout';
import college from '../theme';

const thStyle = {
  backgroundColor: college.primaryColor,
  color: '#fff',
  padding: '8px 10px',
  fontSize: '12px',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 600,
  textAlign: 'center',
  border: '1px solid rgba(255,255,255,0.2)',
};

const tdStyle = {
  padding: '7px 10px',
  fontSize: '12px',
  fontFamily: 'Montserrat, sans-serif',
  color: '#374151',
  border: '1px solid #e5e7eb',
  verticalAlign: 'middle',
};

function SectionTitle({ children }) {
  return (
    <h2 className="font-display font-bold text-xl mb-4 pb-2" style={{ color: college.primaryColor, borderBottom: `2px solid ${college.primaryColor}22` }}>
      {children}
    </h2>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="font-hind font-semibold text-[15px] mt-6 mb-2" style={{ color: college.primaryColor }}>
      {children}
    </h3>
  );
}

function Body({ children }) {
  return <p className="font-dm-sans text-[0.9375rem] leading-relaxed text-gray-700 mb-2">{children}</p>;
}

const rankTiers = [
  { rank: 'Rank < 500', amount: '₹ 1,20,000', highlight: true },
  { rank: 'Rank < 1,000', amount: '₹ 80,000', highlight: false },
  { rank: 'Rank < 2,000', amount: '₹ 40,000', highlight: false },
];

const endowmentAwards = [
  { title: 'Jandhyala Subbalakshmi Memorial Endowment Award', eligibility: 'IInd Year B.Tech EEE & MECHANICAL Toppers are awarded' },
  { title: 'Vadlamudi Rama Naidu Memorial Scholarship', eligibility: 'Ist Year B.Tech overall Topper is awarded' },
  { title: 'Adapa Krishnaih Memorial Endowment Award', eligibility: 'Ist Year B.Tech MECHANICAL Topper is awarded' },
  { title: 'Mrs. & Mr. Mastan Endowment Award', eligibility: 'IIIrd Year B.Tech CIVIL Branch Water Resourcing Subject Topper is awarded' },
  { title: 'Alumni Award for Academic Excellence', eligibility: 'IInd Year B.Tech Civil, ECE, CSE, IT, AIML, DS & CSBS Branches Toppers are awarded' },
  { title: 'Jandhyala Venkata Rao and Nagaratnam Endowment Award for Distinguished Alumnus', eligibility: null },
];

export default function ScholarshipsPage() {
  return (
    <AdmissionsLayout title="Scholarships Academic Year 2024-25">

      {/* ── B.Tech Rank-Based Scholarship Cards ── */}
      <section className="mb-12">
        <SectionTitle>B.Tech — Rank-Based Scholarships</SectionTitle>
        <p className="font-dm-sans text-[0.9375rem] text-gray-600 mb-5">
          Scholarships are provided based on EAMCET ranks for the B.Tech programme.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {rankTiers.map(({ rank, amount, highlight }) => (
            <div
              key={rank}
              className="rounded-lg p-5 text-center flex flex-col items-center justify-center gap-2"
              style={
                highlight
                  ? { backgroundColor: college.primaryColor, color: '#fff' }
                  : { backgroundColor: '#f9f5f6', border: `1px solid ${college.primaryColor}33` }
              }
            >
              <div
                className="font-hind font-bold text-[26px] leading-none"
                style={{ color: highlight ? '#fff' : college.primaryColor }}
              >
                {amount}
              </div>
              <div
                className="font-dm-sans text-[0.875rem] font-semibold mt-1"
                style={{ color: highlight ? 'rgba(255,255,255,0.85)' : '#6b7280' }}
              >
                {rank}
              </div>
            </div>
          ))}
        </div>

        {/* M.Tech */}
        <div className="rounded-lg p-4 flex items-start gap-3" style={{ backgroundColor: '#fdf8ee', border: `1px solid ${college.accentColor}55` }}>
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: college.accentColor }}>
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="font-dm-sans text-[0.9375rem] text-gray-700">
            <span className="font-semibold">M.Tech:</span> Teaching assistanceship available for eligible non-GATE M.Tech students.
          </p>
        </div>
      </section>

      {/* ── Government Scholarships ── */}
      <section className="mb-12">
        <SectionTitle>Government Scholarships</SectionTitle>

        <SubHeading>Fee Reimbursement</SubHeading>
        <Body>Fee Reimbursement Eligibility Criteria</Body>

        <div className="overflow-x-auto mb-5">
          <table className="border-collapse text-center" style={{ border: '1px solid #e5e7eb', minWidth: 700 }}>
            <thead>
              <tr>
                <th style={thStyle}>S.No</th>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Income</th>
                <th style={thStyle}>Rank</th>
                <th style={thStyle}>Tuition Fee</th>
                <th style={thStyle}>Mess Fee</th>
                <th style={thStyle}>Special Fee</th>
                <th style={thStyle}>Who pays</th>
              </tr>
            </thead>
            <tbody>
              {/* SC & ST */}
              <tr>
                <td style={tdStyle}>1</td>
                <td style={tdStyle}>SC & ST</td>
                <td style={tdStyle}>{'< 2 Lakhs'}</td>
                <td style={tdStyle}>No rank limit</td>
                <td style={tdStyle}>Full Fee</td>
                <td style={{ ...tdStyle, fontSize: '11px' }}>DS (₹4000/-)<br />DAH (₹12000/-)</td>
                <td style={tdStyle}>Nil</td>
                <td style={tdStyle}>State & Central</td>
              </tr>
              {/* BC — 4 sub-rows */}
              <tr>
                <td style={tdStyle} rowSpan={4}>2</td>
                <td style={tdStyle} rowSpan={4}>BC</td>
                <td style={{ ...tdStyle, fontSize: '11px' }} rowSpan={4}>Rural {'<'}1.5 Lakh<br />Urban {'<'}2.0 Lakh</td>
                <td style={{ ...tdStyle, fontSize: '11px' }}>{'<'} 10000 rank &amp; Studying Govt Colleges</td>
                <td style={tdStyle}>Full Fee</td>
                <td style={{ ...tdStyle, fontSize: '11px' }} rowSpan={4}>Approx. ₹1000/- to ₹4000/-</td>
                <td style={tdStyle} rowSpan={4}>Nil</td>
                <td style={tdStyle} rowSpan={4}>State</td>
              </tr>
              <tr>
                <td style={{ ...tdStyle, fontSize: '11px' }}>{'>'}10000 rank</td>
                <td style={tdStyle}>₹35000/-</td>
              </tr>
              <tr>
                <td style={{ ...tdStyle, fontSize: '11px' }}>Lateral Entry {'<'}1000 rank</td>
                <td style={tdStyle}>Full Fee</td>
              </tr>
              <tr>
                <td style={{ ...tdStyle, fontSize: '11px' }}>Lateral Entry {'>'}1000 rank</td>
                <td style={tdStyle}>₹35000/-</td>
              </tr>
              {/* EBC — 4 sub-rows */}
              <tr>
                <td style={tdStyle} rowSpan={4}>3</td>
                <td style={tdStyle} rowSpan={4}>EBC</td>
                <td style={{ ...tdStyle, fontSize: '11px' }} rowSpan={4}>Rural {'<'}1.5 Lakh<br />Urban {'<'}2.0 Lakh</td>
                <td style={{ ...tdStyle, fontSize: '11px' }}>{'<'} 10000 rank &amp; Studying Govt Colleges</td>
                <td style={tdStyle}>Full Fee</td>
                <td style={tdStyle} rowSpan={4}>Nil</td>
                <td style={tdStyle} rowSpan={4}>Nil</td>
                <td style={tdStyle} rowSpan={4}>State</td>
              </tr>
              <tr>
                <td style={{ ...tdStyle, fontSize: '11px' }}>{'>'}10000 rank</td>
                <td style={tdStyle}>₹35000/-</td>
              </tr>
              <tr>
                <td style={{ ...tdStyle, fontSize: '11px' }}>Lateral Entry {'<'}1000 rank</td>
                <td style={tdStyle}>Full Fee</td>
              </tr>
              <tr>
                <td style={{ ...tdStyle, fontSize: '11px' }}>Lateral Entry {'>'}1000 rank</td>
                <td style={tdStyle}>₹35000/-</td>
              </tr>
              {/* BC-E Minority */}
              <tr>
                <td style={tdStyle}>4</td>
                <td style={tdStyle}>BC-E (Minority)</td>
                <td style={tdStyle}>{'< 1.5 Lakhs'}</td>
                <td style={tdStyle}>No rank limit</td>
                <td style={tdStyle}>Full Fee</td>
                <td style={{ ...tdStyle, fontSize: '11px' }}>Approx. ₹4000/- to ₹5100/-</td>
                <td style={tdStyle}>Nil</td>
                <td style={tdStyle}>State</td>
              </tr>
              {/* Disabled */}
              <tr>
                <td style={tdStyle}>5</td>
                <td style={tdStyle}>Disabled</td>
                <td style={tdStyle}>{'< 1.5 Lakhs'}</td>
                <td style={tdStyle}>No rank limit</td>
                <td style={tdStyle}>₹35000/-</td>
                <td style={{ ...tdStyle, fontSize: '11px' }}>Approx. ₹1000/- to ₹1500/-</td>
                <td style={tdStyle}>Nil</td>
                <td style={tdStyle}>State</td>
              </tr>
            </tbody>
          </table>
        </div>

        <a href="#" className="font-dm-sans text-[0.9375rem] font-semibold underline hover:opacity-75" style={{ color: college.primaryColor }}>
          Fee Reimbursement Link →
        </a>

        <SubHeading>NSP</SubHeading>
        <Body>
          NSP Scholarships are sanctioned on (intermediate) merit by Board of Intermediate Education. For details
          click the following{' '}
          <a href="#" className="underline hover:opacity-75" style={{ color: college.primaryColor }}>NSP link</a>.
        </Body>

        <SubHeading>Pragathi</SubHeading>
        <Body>Fee Reimbursement students are not eligible to apply for Pragathi Scholarship.</Body>
      </section>

      {/* ── Endowment Awards ── */}
      <section className="mb-6">
        <SectionTitle>Endowment Awards</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {endowmentAwards.map((award, i) => (
            <div
              key={i}
              className="rounded-lg p-5 bg-white border border-gray-200 hover:shadow-sm transition-shadow"
            >
              <a
                href="#"
                className="font-hind font-semibold text-base underline hover:opacity-75 block mb-2"
                style={{ color: college.primaryColor }}
              >
                {i + 1}. {award.title}
              </a>
              {award.eligibility && (
                <p className="font-dm-sans text-[0.875rem] text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-600">Eligibility: </span>
                  {award.eligibility}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

    </AdmissionsLayout>
  );
}
