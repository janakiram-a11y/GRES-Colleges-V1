import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const { primaryColor, accentColor } = college;

function SectionHeading({ children }) {
  return (
    <h2
      className="font-hind font-bold text-2xl mb-6 pb-2 inline-block"
      style={{ color: primaryColor, borderBottom: `2px solid ${accentColor}` }}
    >
      {children}
    </h2>
  );
}

const objectives = [
  'Develop a system for conscious, consistent and catalytic action to improve academic and administrative performance',
  'Periodic assessment of course and programme benchmarks for internal quality improvement',
  'Internal quality checks to support academic enhancement across all departments',
  'Identify performance levels and provide targeted academic support to students and faculty',
  'Foster holistic quality development for both students and faculty',
  'Mobilize resources for R&D, consultancy, and extension activities',
  'Enhance collaborative learning among all institutional stakeholders',
];

const functions = [
  'Assessment of Course and Programme Outcomes (CO/PO attainment)',
  'Enhancement of participatory teaching-learning through ICT integration',
  'Collection, analysis, and reporting of stakeholder feedback metrics',
  'Organizing workshops, seminars, conferences, and symposia on quality enhancement',
  'Documentation of impact of faculty and student development programmes',
  'Facilitating Industry-Institute-Interaction and collaborative research initiatives',
  'Encouraging professional development activities for faculty',
  'Developing a quality culture among all institutional stakeholders',
  'Preparation and submission of Annual Quality Assurance Reports (AQAR) to NAAC',
];

const composition = [
  { role: 'Chairperson', member: 'Principal, GRIET' },
  { role: 'Co-ordinator', member: 'Senior Professor, GRIET' },
  { role: 'Members', member: 'All Department and Section Heads' },
  { role: 'Members', member: 'Library, Sports, and Hostel Representatives' },
  { role: 'Members', member: 'Examination Branch Representative' },
  { role: 'Members', member: 'Administrative Officer' },
  { role: 'Members', member: 'Student Representatives (all departments)' },
  { role: 'Members', member: 'Alumni Representatives' },
  { role: 'Members', member: 'Community / Industry Experts (external)' },
];

const documents = [
  'IQAC Committee',
  'IQAC Duties',
  'IQAC Meeting Minutes',
  'IQAC Flow Chart',
  'Quality Initiatives',
  'AQAR Reports',
  'NAAC Materials',
  'Audit Reports',
];

export default function IQACPage() {
  return (
    <AcademicsLayout title="IQAC">
      <div className="space-y-8">

        {/* Intro */}
        <div>
          <SectionHeading>Internal Quality Assurance Cell (IQAC)</SectionHeading>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 max-w-2xl">
            The Internal Quality Assurance Cell (IQAC) at GRIET has been established in accordance
            with the guidelines of the National Assessment and Accreditation Council (NAAC). The
            IQAC plays a pivotal role in channelizing and systematizing the efforts and measures of
            an institution towards academic excellence and continuous quality improvement across all
            departments and administrative functions.
          </p>
        </div>

        {/* NAAC highlight banner */}
        <div
          className="rounded-lg p-5 text-white"
          style={{ backgroundColor: primaryColor }}
        >
          <p className="font-hind font-bold text-[13px] uppercase tracking-widest mb-1" style={{ color: accentColor }}>
            NAAC Accreditation
          </p>
          <p className="font-dm-sans text-[14px] leading-relaxed">
            NAAC A++ Grade (CGPA 3.55) — GRIET's highest accreditation, with IQAC playing a central
            role in maintaining quality.
          </p>
        </div>

        {/* Objectives */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: primaryColor }}>
            Objectives
          </h3>
          <ul className="space-y-2.5">
            {objectives.map((item) => (
              <li key={item} className="flex items-start gap-3 font-dm-sans text-[14px] text-gray-700">
                <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Functions */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: primaryColor }}>
            Functions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {functions.map((item, i) => (
              <div key={i} className="bg-[#F6F1F2] rounded-lg border border-gray-200 p-4 flex gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-hind font-bold text-[11px] text-white mt-0.5"
                  style={{ backgroundColor: primaryColor }}
                >
                  {i + 1}
                </span>
                <p className="font-dm-sans text-[12px] leading-relaxed text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IQAC Composition */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: primaryColor }}>
            IQAC Composition
          </h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-[13px] font-dm-sans">
              <thead>
                <tr style={{ backgroundColor: primaryColor }}>
                  <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[12px] w-40">Role</th>
                  <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[12px]">Member / Constituency</th>
                </tr>
              </thead>
              <tbody>
                {composition.map(({ role, member }, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border-b border-gray-100 font-semibold" style={{ color: accentColor }}>{role}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{member}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Resources & Documents */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: primaryColor }}>
            Resources &amp; Documents
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {documents.map((doc) => (
              <a
                key={doc}
                href="#"
                className="flex items-center gap-2.5 rounded-lg border border-gray-200 bg-white p-3 hover:shadow-sm transition-shadow group"
              >
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: accentColor }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-dm-sans text-[12px] text-gray-700 group-hover:underline leading-snug">{doc}</span>
              </a>
            ))}
          </div>
        </section>

      </div>
    </AcademicsLayout>
  );
}
