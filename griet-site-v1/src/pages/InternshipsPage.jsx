import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const BENEFITS = [
  'Real-world industry exposure and practical skill development',
  'Enhancement of employability and career readiness',
  'Networking with professionals and industry mentors',
  'Application of academic concepts to real business problems',
  'Possibility of Pre-Placement Offers (PPOs) from host organisations',
  'Exposure to corporate culture, work ethics, and professional norms',
  'Addition of industry experience to academic portfolio/resume',
  'Certificate of internship from reputed organisations',
  'Financial stipends offered by many partner organisations',
  'Identification of specialisation interests and career paths',
  'Development of communication, teamwork, and problem-solving skills',
  'Enhanced confidence and professional maturity',
];

const COORDINATORS = [
  { dept: 'Computer Science & Engineering', name: 'Faculty Coordinator – CSE', email: 'internship.cse@griet.ac.in' },
  { dept: 'Electronics & Communication Engineering', name: 'Faculty Coordinator – ECE', email: 'internship.ece@griet.ac.in' },
  { dept: 'Electrical & Electronics Engineering', name: 'Faculty Coordinator – EEE', email: 'internship.eee@griet.ac.in' },
  { dept: 'Mechanical Engineering', name: 'Faculty Coordinator – MECH', email: 'internship.mech@griet.ac.in' },
  { dept: 'Civil Engineering', name: 'Faculty Coordinator – CIVIL', email: 'internship.civil@griet.ac.in' },
  { dept: 'Information Technology', name: 'Faculty Coordinator – IT', email: 'internship.it@griet.ac.in' },
  { dept: 'AI & Machine Learning (CSE-AIML)', name: 'Faculty Coordinator – AIML', email: 'internship.aiml@griet.ac.in' },
  { dept: 'Data Science (CSE-DS)', name: 'Faculty Coordinator – DS', email: 'internship.ds@griet.ac.in' },
];

const PLATFORMS = [
  { name: 'GRIETSDC Portal', desc: 'GRIET\'s own Skill Development Cell (GRIETSDC) portal for listing, applying, and tracking internships offered by GRIET\'s industry partners.', href: null },
  { name: 'AICTE Internship Portal', desc: 'National internship platform launched by AICTE connecting students with internships at leading PSUs, MNCs, and start-ups.', href: 'https://internship.aicte-india.org/' },
  { name: 'LinkedIn Jobs', desc: 'Students are encouraged to use LinkedIn to discover internship opportunities through GRIET\'s alumni network and partner organisations.', href: 'https://www.linkedin.com/jobs/' },
  { name: 'Internshala', desc: 'A leading internship aggregator used by students for off-campus internship applications in engineering and management domains.', href: 'https://internshala.com/' },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function InternshipsPage() {
  return (
    <AcademicsLayout title="Internships">

      <section className="mb-10">
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 mb-6">
          <p className="font-hind font-bold text-base mb-1" style={{ color: college.primaryColor }}>Dean of Student Affairs — Internship Coordination</p>
          <p className="font-dm-sans text-[12.5px] text-gray-600 leading-relaxed">
            The Dean of Student Affairs oversees the internship programme at GRIET. All department-level internship coordinators work under the Dean's office to ensure that students receive meaningful industrial training, complete mandatory internship credits, and document their experiences appropriately as per university norms.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Internship Platforms</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PLATFORMS.map(({ name, desc, href }) => (
            <div key={name} className="p-4 rounded-xl border border-gray-200 bg-white flex flex-col gap-2">
              <p className="font-hind font-bold text-[0.9375rem]" style={{ color: college.primaryColor }}>{name}</p>
              <p className="font-dm-sans text-[0.875rem] text-gray-600 leading-relaxed flex-1">{desc}</p>
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dm-sans text-[0.875rem] font-semibold hover:underline self-start"
                  style={{ color: college.accentColor }}
                >
                  Visit Portal →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Benefits of Internships</SectionLabel>
        <div className="flex flex-col gap-2.5 p-5 rounded-xl bg-gray-50 border border-gray-200">
          {BENEFITS.map((b, i) => (
            <div key={i} className="flex items-start gap-2 font-dm-sans text-[12.5px] text-gray-700">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
              {b}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <SectionLabel>Department Coordinators</SectionLabel>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-[12.5px] font-dm-sans border-collapse">
            <thead>
              <tr style={{ backgroundColor: `${college.primaryColor}15` }}>
                {['Department', 'Coordinator', 'Email'].map((h) => (
                  <th key={h} className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COORDINATORS.map(({ dept, name, email }, i) => (
                <tr key={dept} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{dept}</td>
                  <td className="px-4 py-2.5 text-gray-600 border-b border-gray-100">{name}</td>
                  <td className="px-4 py-2.5 border-b border-gray-100">
                    <a href={`mailto:${email}`} className="hover:underline" style={{ color: college.accentColor }}>{email}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </AcademicsLayout>
  );
}
