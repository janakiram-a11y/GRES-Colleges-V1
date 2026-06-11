import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const committeeMembers = [
  { role: 'Chairperson', name: 'Principal, GRIET' },
  { role: 'Member Secretary', name: 'Dean of Student Affairs' },
  { role: 'Faculty Representatives', name: 'One faculty member from each department' },
  { role: 'Student Representatives', name: 'Two student representatives per department' },
];

const functions = [
  'Address student grievances in a fair and timely manner',
  'Monitor implementation of student welfare policies',
  'Coordinate with anti-ragging and anti-harassment cells',
  'Facilitate scholarships and financial aid disbursement',
  'Oversee student counseling and wellness programs',
  'Organize student welfare awareness programs',
  'Coordinate with hostel and transport committees',
  'Ensure student representation in institutional decision-making',
];

const resources = [
  {
    title: 'G-Cheyutha',
    description: 'Financial assistance resource for economically weaker students',
    link: null,
  },
  {
    title: 'Scholarships',
    description: 'Explore available scholarships and financial aid',
    link: '/admissions/scholarships',
    internal: true,
  },
  {
    title: 'Anti-Ragging',
    description: 'Report and learn about anti-ragging policies',
    link: '/anti-ragging',
    internal: true,
  },
  {
    title: 'Wellness Center',
    description: 'Student health and wellness support services',
    link: '/wellness-center',
    internal: true,
  },
  {
    title: 'Grievance Portal',
    description: 'Submit and track your grievances online',
    link: 'https://griet.in/gcap/greviance-login.php',
    internal: false,
  },
];

const downloads = [
  {
    label: 'Annual Report Downloads',
    href: 'https://www.griet.ac.in/Student_Welfare_Committee.php',
  },
];

export default function StudentWelfareCommitteePage() {
  const primary = college.colors?.primary || '#1a237e';
  const accent = college.colors?.accent || '#e53935';

  return (
    <AcademicsLayout title="Student Welfare Committee">
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">

        {/* About */}
        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ color: primary }}
          >
            About the Committee
          </h2>
          <div className="w-16 h-1 mb-4 rounded" style={{ backgroundColor: accent }} />
          <p className="text-gray-700 leading-relaxed text-base">
            The Student Welfare Committee at GRIET safeguards the rights, interests, and
            well-being of all students. It addresses student grievances, ensures a safe campus
            environment, and promotes student welfare policies.
          </p>
        </section>

        {/* Committee Composition 2025-26 */}
        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ color: primary }}
          >
            Committee Composition 2025&ndash;26
          </h2>
          <div className="w-16 h-1 mb-5 rounded" style={{ backgroundColor: accent }} />
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full text-sm text-left">
              <thead>
                <tr style={{ backgroundColor: primary }}>
                  <th className="px-5 py-3 text-white font-semibold">Role</th>
                  <th className="px-5 py-3 text-white font-semibold">Member</th>
                </tr>
              </thead>
              <tbody>
                {committeeMembers.map((member, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-5 py-3 font-medium text-gray-800">{member.role}</td>
                    <td className="px-5 py-3 text-gray-700">{member.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Functions */}
        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ color: primary }}
          >
            Functions
          </h2>
          <div className="w-16 h-1 mb-5 rounded" style={{ backgroundColor: accent }} />
          <ul className="space-y-3">
            {functions.map((fn, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span
                  className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: primary }}
                >
                  {idx + 1}
                </span>
                <span className="text-gray-700">{fn}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Student Resources */}
        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ color: primary }}
          >
            Student Resources
          </h2>
          <div className="w-16 h-1 mb-5 rounded" style={{ backgroundColor: accent }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((res, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow"
                style={{ borderTopColor: primary, borderTopWidth: 3 }}
              >
                <h3
                  className="text-base font-semibold mb-1"
                  style={{ color: primary }}
                >
                  {res.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{res.description}</p>
                {res.link && (
                  <a
                    href={res.link}
                    target={res.internal ? '_self' : '_blank'}
                    rel={res.internal ? undefined : 'noopener noreferrer'}
                    className="text-sm font-medium underline"
                    style={{ color: accent }}
                  >
                    {res.internal ? 'Learn More' : 'Visit Portal'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>


        {/* Contact */}
        <section>
          <h2
            className="text-xl font-bold mb-3"
            style={{ color: primary }}
          >
            Contact
          </h2>
          <div className="w-16 h-1 mb-4 rounded" style={{ backgroundColor: accent }} />
          <div className="inline-flex items-center gap-3 bg-white border rounded-lg px-5 py-4 shadow-sm">
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              style={{ color: primary }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a
              href="mailto:studentwelfare@griet.ac.in"
              className="text-sm font-medium"
              style={{ color: primary }}
            >
              studentwelfare@griet.ac.in
            </a>
          </div>
        </section>

      </div>
    </AcademicsLayout>
  );
}
