import AdmissionsLayout, { SectionHeading } from '../components/AdmissionsLayout';
import college from '../theme';

const ugPrograms = [
  { sno: 1, name: 'B.Tech-Electronics and Communication Engineering', nba: true, intake: 60 },
  { sno: 2, name: 'B.Tech-Electrical and Electronics Engineering', nba: true, intake: 30 },
  { sno: 3, name: 'B.Tech-Computer Science and Engineering', nba: true, intake: 600 },
  { sno: 4, name: 'B.Tech-Mechanical Engineering', nba: true, intake: 30 },
  { sno: 5, name: 'B.Tech-Civil Engineering', nba: true, intake: 30 },
  { sno: 6, name: 'B.Tech-Computer Science and Business System', nba: false, intake: 60 },
  { sno: 7, name: 'B.Tech-CSE (Artificial Intelligence and Machine Learning)', nba: false, intake: 300 },
  { sno: 8, name: 'B.Tech-CSE (Data Science)', nba: false, intake: 210 },
];

const pgPrograms = [
  { sno: 1, name: 'M.Tech-Computer Science and Engineering', nba: true, intake: 12 },
  { sno: 2, name: 'M.Tech-Structural Engineering', nba: true, intake: 18 },
];

const ugTotal = ugPrograms.reduce((s, p) => s + p.intake, 0);
const ugNba = ugPrograms.filter((p) => p.nba).length;
const pgTotal = pgPrograms.reduce((s, p) => s + p.intake, 0);

const thStyle = {
  backgroundColor: college.primaryColor,
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

function ProgramTable({ data, headers }) {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb' }}>
        <thead>
          <tr>{headers.map((h) => <th key={h} style={thStyle}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.sno} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
              <td style={{ ...tdStyle, width: 50, textAlign: 'center' }}>{row.sno}</td>
              <td style={tdStyle}>
                {row.name}
                {row.nba && <sup style={{ color: college.accentColor, fontWeight: 700, marginLeft: 2 }}>★</sup>}
              </td>
              <td style={{ ...tdStyle, textAlign: 'center', fontWeight: 700, color: college.primaryColor, width: 90 }}>
                {row.intake}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ProgrammesPage() {
  return (
    <AdmissionsLayout title="Programmes">

      {/* Stats strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'UG Programmes', value: ugPrograms.length },
          { label: 'UG Total Intake', value: ugTotal },
          { label: 'NBA Accredited', value: ugNba + pgPrograms.filter(p => p.nba).length },
          { label: 'PG Intake', value: pgTotal },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-lg p-5 text-center" style={{ backgroundColor: '#f9f5f6', border: `1px solid ${college.primaryColor}22` }}>
            <div className="font-hind font-bold text-[28px] leading-none mb-1" style={{ color: college.primaryColor }}>{value}</div>
            <div className="font-dm-sans text-[12px] text-gray-500 font-medium">{label}</div>
          </div>
        ))}
      </div>

      {/* Seat distribution note */}
      <div className="mb-8 p-5 rounded-lg bg-white border border-gray-200">
        <p className="font-hind font-semibold text-[14px] mb-3" style={{ color: college.primaryColor }}>
          Seat Distribution — A.Y 2025–26
        </p>
        <ul className="font-dm-sans text-[13px] text-gray-700 space-y-1.5">
          <li className="flex items-start gap-2">
            <span style={{ color: college.accentColor }} className="mt-0.5 font-bold">▸</span>
            70% of seats allotted based on merit in the entrance exam.
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: college.accentColor }} className="mt-0.5 font-bold">▸</span>
            30% of seats reserved for Management / NRI candidates.
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: college.accentColor }} className="mt-0.5 font-bold">▸</span>
            Diploma holders admitted to 2nd year B.Tech via 10% lateral entry scheme (ECET merit).
          </li>
        </ul>
      </div>

      <SectionHeading>UG Programmes</SectionHeading>
      <ProgramTable data={ugPrograms} headers={['S.No', 'UG Programme', 'Intake']} />

      <SectionHeading>PG Programmes</SectionHeading>
      <ProgramTable data={pgPrograms} headers={['S.No', 'PG Programme', 'Intake']} />

      <p className="font-dm-sans text-[12px] text-gray-500 mt-2">
        <sup style={{ color: college.accentColor, fontWeight: 700 }}>★</sup> NBA Accredited
      </p>

    </AdmissionsLayout>
  );
}
