import { useParams } from 'react-router-dom';
import college from '../theme';
import AdminSidebarLayout from '../components/AdminSidebarLayout';

const thStyle = {
  backgroundColor: college.greenAccent,
  color: '#ffffff',
  padding: '11px 16px',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '13px',
  fontWeight: 600,
  textAlign: 'left',
  borderRight: '1px solid rgba(255,255,255,0.15)',
};

const tdStyle = {
  padding: '10px 16px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '13px',
  color: '#374151',
  borderBottom: '1px solid #e5e7eb',
  borderRight: '1px solid #e5e7eb',
};

function SectionHeading({ children }) {
  return (
    <h2
      className="font-hind font-bold text-[22px] mb-6 pb-2 inline-block"
      style={{ color: college.primaryColor, borderBottom: `2px solid ${college.greenAccent}` }}
    >
      {children}
    </h2>
  );
}

function InfoNote({ children }) {
  return (
    <p
      className="font-dm-sans text-[13px] leading-relaxed mt-6 px-4 py-3 rounded"
      style={{ backgroundColor: `${college.primaryColor}10`, color: '#6B7280', borderLeft: `3px solid ${college.greenAccent}` }}
    >
      {children}
    </p>
  );
}

function ProcedureContent() {
  return (
    <div>
      <SectionHeading>Admission Procedure</SectionHeading>
      <div className="flex flex-col gap-6">
        {college.admissions.procedure.map((item) => (
          <div
            key={item.step}
            className="flex gap-5 p-6 rounded-lg bg-white border border-gray-100 shadow-sm"
          >
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-hind font-bold text-[16px] text-white"
              style={{ backgroundColor: college.primaryColor }}
            >
              {item.step}
            </div>
            <div>
              <h3 className="font-hind font-bold text-[18px] mb-1" style={{ color: college.primaryColor }}>
                {item.title}
              </h3>
              <p className="font-dm-sans text-[14px] leading-relaxed text-[#474747]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeesContent() {
  return (
    <div>
      <SectionHeading>Course Fees</SectionHeading>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb' }}>
          <thead>
            <tr>
              {['Programme', 'Tuition Fee', 'Hostel (Optional)', 'Total (Approx.)'].map((h) => (
                <th key={h} style={thStyle}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {college.admissions.fees.map((row, i) => (
              <tr key={row.programme} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                <td style={{ ...tdStyle, fontWeight: 600, color: college.primaryColor }}>{row.programme}</td>
                <td style={tdStyle}>{row.tuition}</td>
                <td style={tdStyle}>{row.hostel}</td>
                <td style={{ ...tdStyle, fontWeight: 600 }}>{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <InfoNote>
        Fees are subject to revision as per Government of Telangana norms. The above figures are indicative
        for A.Y 2025–26. Confirm exact fee details at the time of admission. Hostel charges are optional
        and depend on availability.
      </InfoNote>
    </div>
  );
}

function EamcetRankContent() {
  const years = [...new Set(college.admissions.eamcetRanks.map((r) => r.year))];

  return (
    <div>
      <SectionHeading>EAMCET Last Rank</SectionHeading>
      <div
        className="mb-6 flex items-center gap-3 px-4 py-3 rounded"
        style={{ backgroundColor: `${college.greenAccent}15`, border: `1px solid ${college.greenAccent}40` }}
      >
        <span className="font-hind font-bold text-[13px]" style={{ color: college.primaryColor }}>
          GRCP Counselling Code:
        </span>
        <span
          className="font-hind font-bold text-[15px] px-3 py-0.5 rounded"
          style={{ backgroundColor: college.primaryColor, color: '#ffffff' }}
        >
          GRCP
        </span>
      </div>

      {years.map((year) => {
        const rows = college.admissions.eamcetRanks.filter((r) => r.year === year);
        return (
          <div key={year} className="mb-8">
            <h3 className="font-hind font-semibold text-[16px] mb-3" style={{ color: college.primaryColor }}>
              Academic Year: {year}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb' }}>
                <thead>
                  <tr>
                    {['Category', 'Last Rank'].map((h) => (
                      <th key={h} style={thStyle}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={row.category} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                      <td style={{ ...tdStyle, fontWeight: 600 }}>{row.category}</td>
                      <td style={{ ...tdStyle, fontWeight: 600, color: college.primaryColor }}>{row.lastRank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}

      <InfoNote>
        The above ranks are for B.Pharmacy admissions via TG EAPCET. Data may vary year to year. Please
        verify current year cut-offs at the official TSCHE website:{' '}
        <a
          href="https://tsche.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
          style={{ color: college.primaryColor }}
        >
          tsche.ac.in
        </a>
      </InfoNote>
    </div>
  );
}

function PgecetRankContent() {
  return (
    <div>
      <SectionHeading>PGECET Last Rank</SectionHeading>
      <div
        className="mb-6 flex items-center gap-3 px-4 py-3 rounded"
        style={{ backgroundColor: `${college.greenAccent}15`, border: `1px solid ${college.greenAccent}40` }}
      >
        <span className="font-hind font-bold text-[13px]" style={{ color: college.primaryColor }}>
          GRCP Counselling Code (PG):
        </span>
        <span
          className="font-hind font-bold text-[15px] px-3 py-0.5 rounded"
          style={{ backgroundColor: college.primaryColor, color: '#ffffff' }}
        >
          GRCP1
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb' }}>
          <thead>
            <tr>
              {['Year', 'Specialization', 'Category', 'Last Rank'].map((h) => (
                <th key={h} style={thStyle}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {college.admissions.pgecetRanks.map((row, i) => (
              <tr
                key={`${row.year}-${row.specialization}-${row.category}`}
                style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}
              >
                <td style={tdStyle}>{row.year}</td>
                <td style={{ ...tdStyle, fontWeight: 600 }}>{row.specialization}</td>
                <td style={tdStyle}>{row.category}</td>
                <td style={{ ...tdStyle, fontWeight: 600, color: college.primaryColor }}>{row.lastRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <InfoNote>
        The above ranks are for M.Pharmacy admissions via TG PGECET. Please refer to the official TSCHE
        website for updated counselling schedules and rank data:{' '}
        <a
          href="https://tsche.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
          style={{ color: college.primaryColor }}
        >
          tsche.ac.in
        </a>
      </InfoNote>
    </div>
  );
}

const SECTIONS = {
  procedure: { label: 'Admission Procedure', content: <ProcedureContent /> },
  fees: { label: 'Course Fees', content: <FeesContent /> },
  'eamcet-rank': { label: 'EAMCET Last Rank', content: <EamcetRankContent /> },
  'pgecet-rank': { label: 'PGECET Last Rank', content: <PgecetRankContent /> },
};

export default function AdmissionsPage() {
  const { section = 'procedure' } = useParams();
  const currentSection = SECTIONS[section] || SECTIONS.procedure;

  return (
    <AdminSidebarLayout
      college={college}
      pageTitle="Admissions"
      pageSubtitle="Join GRCP — Shaping pharmaceutical leaders for a healthier tomorrow"
      pageBreadcrumb={['Admissions', currentSection.label]}
      currentSection={currentSection}
    />
  );
}
