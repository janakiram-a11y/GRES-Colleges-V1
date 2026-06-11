import AcademicsLayoutWithSidebar from '../components/AcademicsLayoutWithSidebar';
import AcademicsSidebar from '../components/AcademicsSidebar';
import college from '../theme';

/* ── Diagram ────────────────────────────────────────────────────── */

function RolesDiagram() {
  return (
    <div className="flex justify-center my-6">
      <svg viewBox="0 0 400 290" className="w-full max-w-sm" xmlns="http://www.w3.org/2000/svg">
        {/* Employment — top center */}
        <rect x="145" y="8" width="110" height="42" rx="6" fill="#5AAAD0" />
        <text x="200" y="33" textAnchor="middle" fill="white" fontFamily="Montserrat,sans-serif" fontSize="13" fontWeight="700">Employment</text>

        {/* Entrepreneurship — middle left */}
        <rect x="8" y="118" width="118" height="48" rx="6" fill="#B2D9A8" />
        <text x="67" y="138" textAnchor="middle" fill="#1a3a1a" fontFamily="Montserrat,sans-serif" fontSize="11.5" fontWeight="700">Entrepreneur</text>
        <text x="67" y="154" textAnchor="middle" fill="#1a3a1a" fontFamily="Montserrat,sans-serif" fontSize="11.5" fontWeight="700">ship</text>

        {/* Higher studies — middle right */}
        <rect x="274" y="118" width="118" height="48" rx="6" fill="#9B7FCF" />
        <text x="333" y="138" textAnchor="middle" fill="white" fontFamily="Montserrat,sans-serif" fontSize="11.5" fontWeight="700">Higher</text>
        <text x="333" y="154" textAnchor="middle" fill="white" fontFamily="Montserrat,sans-serif" fontSize="11.5" fontWeight="700">studies</text>

        {/* Finishing School circle */}
        <circle cx="200" cy="210" r="70" fill="#B71C1C" />
        <text x="200" y="196" textAnchor="middle" fill="white" fontFamily="Montserrat,sans-serif" fontSize="12.5" fontWeight="700">Finishing</text>
        <text x="200" y="214" textAnchor="middle" fill="white" fontFamily="Montserrat,sans-serif" fontSize="12.5" fontWeight="700">School</text>
        <text x="200" y="232" textAnchor="middle" fill="white" fontFamily="Montserrat,sans-serif" fontSize="12.5" fontWeight="700">of GRIET</text>

        {/* Arrow markers */}
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#666" />
          </marker>
        </defs>

        {/* Arrow: circle top → Employment bottom */}
        <line x1="200" y1="140" x2="200" y2="54" stroke="#666" strokeWidth="1.8" markerEnd="url(#arr)" />

        {/* Arrow: circle left → Entrepreneurship right */}
        <line x1="133" y1="175" x2="128" y2="160" stroke="#666" strokeWidth="1.8" markerEnd="url(#arr)" />

        {/* Arrow: circle right → Higher studies left */}
        <line x1="267" y1="175" x2="272" y2="160" stroke="#666" strokeWidth="1.8" markerEnd="url(#arr)" />
      </svg>
    </div>
  );
}

/* ── Report table data ──────────────────────────────────────────── */

const REPORT_YEARS = [
  '2014-15', '2015-16', '2016-17', '2017-18',
  '2018-19', '2019-20', '2020-21', '2021-22',
  '2022-23', '2023-24',
];
const DEPTS = ['CE', 'EEE', 'ME', 'CSE', 'IT', 'ECE', 'H & S', 'AIML'];

/* ── Sub-components ─────────────────────────────────────────────── */

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4 mt-8 first:mt-0">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>
        {children}
      </h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

function OrderedList({ items }) {
  return (
    <ol className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed space-y-1.5 list-decimal list-inside">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
}

function BulletList({ items }) {
  return (
    <ul className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed space-y-1.5 list-disc list-inside">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function ReportLink({ label }) {
  return (
    <a href="#" className="font-dm-sans text-[11.5px] font-semibold hover:underline" style={{ color: college.primaryColor }}>
      {label}
    </a>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */

export default function FinishingSchoolPage() {
  return (
    <AcademicsLayoutWithSidebar
      title="Finishing School"
      sidebar={<AcademicsSidebar />}
    >

      {/* Motivation */}
      <SectionLabel>Motivation</SectionLabel>
      <p className="font-dm-sans text-[13.5px] text-gray-700 leading-relaxed mb-3">
        GRIET FINISHING SCHOOL is a unique initiative training program with the motivation that all students
        will complete their course as per their respective academic calendar and be ready to take up the
        careers of their choice (Employment, Entrepreneurship and Higher studies).
      </p>
      <p className="font-dm-sans text-[13.5px] text-gray-700 leading-relaxed">
        Hence the Finishing School aims to:
      </p>

      {/* Roles and Responsibilities */}
      <SectionLabel>Roles and Responsibilities:</SectionLabel>
      <RolesDiagram />
      <OrderedList items={[
        'Identify academically weak students in all the Four years and assist them throughout the course to obtain the degree within the course period.',
        'Help out the students who cannot pass out due to any reason.',
        'Assist Training and Placement Cell, Career Guidance & Counselling Cell and EDP Cells to mould their personality and acquire appropriate skills and thus to make them contributive force to the society.',
      ]} />

      {/* Plan of Action */}
      <SectionLabel>Plan of Action</SectionLabel>
      <p className="font-dm-sans text-[13.5px] text-gray-700 mb-3">
        The school implements the following Plan of Action:
      </p>
      <OrderedList items={[
        'Collection of students\' data either from the Front Office (Dean, Admissions) or Departments.',
        'Identification of academically weak students in First year and those with backlogs in subsequent years.',
        'Finding out the subjects where failure rate is high.',
        'Identification of respective subject experts to conduct remedial classes.',
        'Preparation of the schedules and Time-Tables for the remedial classes.',
        'Information to all the students and parents about the conduction of the classes.',
        'Encouraging the students to attending classes.',
        'Conduction of the classes.',
        'Providing necessary supporting material for the subjects.',
      ]} />

      {/* Goals */}
      <SectionLabel>Goals:</SectionLabel>
      <BulletList items={[
        'Classes in Zero hours (3:00 PM to 4:00 PM for 2nd & 3rd Students and 9:00 AM to 10:00 AM for 1st & 4th Students)',
        'Counseling sessions by respective Mentors',
        'Facilitation of Study material',
        'Honorarium to the faculty',
        'Conduction of Moodle',
      ]} />

      {/* Constitution of the Cell */}
      <SectionLabel>Constitution of the Cell:</SectionLabel>

      {/* Dean */}
      <div className="mb-5 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <p
          className="font-dm-sans font-bold text-[0.9375rem] mb-2 pb-2 border-b border-gray-200"
          style={{ color: college.primaryColor }}
        >
          Dean–Finishing School
        </p>
        <p className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed">
          Dr. J. Sridevi<br />
          Professor, Department of EEE<br />
          GRIET Hyderabad.<br />
          e-mail id:{' '}
          <a href="mailto:drjsridevi@griet.ac.in" className="hover:underline" style={{ color: college.primaryColor }}>
            drjsridevi@griet.ac.in
          </a>
        </p>
      </div>

      {/* Members table */}
      <div className="overflow-x-auto mb-2">
        <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb' }}>
          <thead>
            <tr>
              <th colSpan={2} style={{
                backgroundColor: college.primaryColor,
                color: '#fff',
                padding: '9px 16px',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                textAlign: 'center',
              }}>
                Members
              </th>
            </tr>
            <tr>
              {['Name of the member', 'Department'].map((h) => (
                <th key={h} style={{
                  backgroundColor: '#f3f4f6',
                  color: '#374151',
                  padding: '8px 16px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  textAlign: 'center',
                  border: '1px solid #e5e7eb',
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['Mr. T. Srikanth', 'CE'],
              ['Ms. M. Lohitha', 'CSE'],
              ['Ms A. Samatha', 'AIML'],
              ['Ms P. Sruthi', 'CSDS'],
              ['Mr KNV Khasim', 'ECE'],
              ['Mr. D. Karuna Kumar', 'EEE'],
              ['Ms P Prathiba Swaraj', 'IT'],
              ['Mr. V. Balaji', 'ME'],
              ['Ms S Rama', 'H&S'],
            ].map(([name, dept], i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f9fafb' }}>
                {[name, dept].map((cell, j) => (
                  <td key={j} style={{
                    padding: '8px 16px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '12.5px',
                    border: '1px solid #e5e7eb',
                    textAlign: 'center',
                    color: '#374151',
                  }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Reports */}
      <SectionLabel>Reports:</SectionLabel>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-center" style={{ border: '1px solid #e5e7eb', minWidth: 640 }}>
          <thead>
            <tr>
              {['AY', ...DEPTS].map((h) => (
                <th key={h} style={{
                  backgroundColor: college.primaryColor,
                  color: '#fff',
                  padding: '9px 10px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '12px',
                  fontWeight: 700,
                  border: '1px solid rgba(255,255,255,0.15)',
                  whiteSpace: 'nowrap',
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {REPORT_YEARS.map((yr, i) => {
              const hasAiml = yr >= '2022-23';
              return (
                <tr key={yr} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f9fafb' }}>
                  <td style={{ padding: '7px 10px', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', fontWeight: 600, border: '1px solid #e5e7eb', color: '#374151' }}>
                    {yr}
                  </td>
                  {DEPTS.map((dept) => (
                    <td key={dept} style={{ padding: '7px 10px', border: '1px solid #e5e7eb' }}>
                      {dept === 'AIML' && !hasAiml
                        ? <span className="font-dm-sans text-[0.875rem] text-gray-400">NA</span>
                        : <ReportLink label={`${dept} Report`} />
                      }
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </AcademicsLayoutWithSidebar>
  );
}
