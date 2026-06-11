import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const NBA_UG = [
  { program: 'Computer Science and Engineering (B.Tech)', validUntil: '30.06.2029' },
  { program: 'Civil Engineering (B.Tech)', validUntil: '30.06.2028' },
  { program: 'Mechanical Engineering (B.Tech)', validUntil: '30.06.2026' },
  { program: 'Information Technology (B.Tech)', validUntil: '30.06.2026' },
  { program: 'Electronics and Communication Engineering (B.Tech)', validUntil: '30.06.2026' },
  { program: 'Electrical and Electronics Engineering (B.Tech)', validUntil: '30.06.2026' },
];

const NBA_PG = [
  { program: 'Design for Manufacturing (M.Tech)', validUntil: '30.06.2025' },
  { program: 'Power Electronics (M.Tech)', validUntil: '30.06.2025' },
  { program: 'VLSI (M.Tech)', validUntil: '30.06.2025' },
  { program: 'Structural Engineering (M.Tech)', validUntil: '30.06.2025' },
  { program: 'Computer Science and Engineering (M.Tech)', validUntil: '30.06.2022' },
];

const OTHER = [
  { body: 'NAAC', detail: 'A++ Grade (CGPA: 3.55) — Awarded February 23, 2021 for a 5-year period' },
  { body: 'UGC Autonomous Status', detail: 'Ten-year authorization: 2021–22 through 2030–31' },
  { body: 'SIRO', detail: 'Recognition by Department of Scientific and Industrial Research (DSIR), Government of India' },
  { body: 'ISO 9001:2015', detail: 'Quality Management System certification' },
  { body: 'NABL', detail: 'GRMTL (Material Testing Laboratory) accredited by NABL' },
  { body: 'JNTUH Permanent Affiliation', detail: 'Permanently affiliated to Jawaharlal Nehru Technological University Hyderabad' },
  { body: 'JNTUH Research Centers', detail: 'Civil, ECE, and EEE departments designated as JNTUH Research Centers' },
  { body: 'AICTE CII Platinum Rating', detail: 'Industry–Institute collaboration excellence' },
  { body: 'TEQIP-II', detail: 'Recipient of World Bank grant of ₹400 Lakhs under TEQIP-II' },
  { body: 'AICTE Margdarshan', detail: 'Designated as a mentor institution under AICTE Margdarshan scheme' },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[15px] sm:text-[17px] shrink-0" style={{ color: college.primaryColor }}>
        {children}
      </h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8 w-full">
      <table className="min-w-full text-[12px] sm:text-[12.5px] font-dm-sans border-collapse">
        <thead>
          <tr style={{ backgroundColor: `${college.primaryColor}15` }}>
            {headers.map((h) => (
              <th key={h} className="text-left px-3 sm:px-4 py-3 font-semibold text-gray-700 border-b border-gray-200 whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 sm:px-4 py-3 text-gray-700 border-b border-gray-100 leading-snug">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AccreditationsPage() {
  return (
    <AcademicsLayout title="Accreditations & Recognitions">
      <section className="mb-10">
        <SectionLabel>NBA Accreditation — Undergraduate Programs</SectionLabel>
        <Table
          headers={['Program', 'Valid Until']}
          rows={NBA_UG.map(({ program, validUntil }) => [program, validUntil])}
        />
      </section>

      <section className="mb-10">
        <SectionLabel>NBA Accreditation — Postgraduate Programs</SectionLabel>
        <Table
          headers={['Program', 'Valid Until']}
          rows={NBA_PG.map(({ program, validUntil }) => [program, validUntil])}
        />
      </section>

      <section className="mb-6">
        <SectionLabel>Other Accreditations & Recognitions</SectionLabel>
        <div className="grid grid-cols-1 gap-3">
          {OTHER.map(({ body, detail }) => (
            <div
              key={body}
              className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 w-full"
            >
              <span
                className="font-hind font-bold text-[13px] sm:w-52 sm:flex-shrink-0 leading-snug"
                style={{ color: college.primaryColor }}
              >
                {body}
              </span>
              <span className="font-dm-sans text-[12px] sm:text-[12.5px] text-gray-600 leading-relaxed">{detail}</span>
            </div>
          ))}
        </div>
      </section>
    </AcademicsLayout>
  );
}
