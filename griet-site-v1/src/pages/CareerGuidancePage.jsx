import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

const services = [
  {
    title: 'Career Counseling',
    description: 'One-on-one sessions with experienced mentors to help students identify career paths, set goals, and plan their professional journey.',
  },
  {
    title: 'GATE/GRE Prep',
    description: 'Dedicated preparation material, mock tests, and expert sessions to help students crack GATE, GRE, and other competitive exams.',
  },
  {
    title: 'Higher Studies Abroad',
    description: 'Guidance on universities, scholarships, and SOP writing for students aspiring to pursue postgraduate studies in international institutions.',
  },
  {
    title: 'Aptitude & Interview Training',
    description: 'Weekly workshops covering quantitative aptitude, reasoning, communication skills, and technical interview preparation.',
  },
  {
    title: 'Civil Services Guidance',
    description: 'Awareness sessions and mentoring for IAS/IPS aspirants. Notable alumna Swetha Mohanty secured 2nd rank in civil services.',
  },
  {
    title: 'Entrepreneurship Mentoring',
    description: 'Connections with T-Hub, WE Hub, and industry mentors to support students with startup ideas and entrepreneurial ventures.',
  },
];

const outcomes = [
  'Alumni placed at top companies including Google, Microsoft, and Amazon',
  'GATE qualifiers pursuing M.Tech at IITs and NITs',
  'MS students successfully enrolled in universities across USA, UK, and Germany',
  '2 IAS officers from GRIET alumni',
  '50+ PSC qualifiers serving in state and central government roles',
];

export default function CareerGuidancePage() {
  return (
    <AcademicsLayout title="Career Guidance & Mentoring">
      <div className="space-y-10">

        {/* About */}
        <section>
          <SectionLabel>About HSCE Cell</SectionLabel>
          <p className="font-hind text-gray-700 text-[15px] leading-relaxed">
            GRIET's HSCE (Higher Studies, Career &amp; Employment) Cell provides structured career counseling,
            mentoring, and higher studies support to help every student navigate their professional future with
            clarity and confidence. The cell bridges the gap between academic learning and real-world career
            opportunities through personalized guidance and industry connect.
          </p>
        </section>

        {/* Services */}
        <section>
          <SectionLabel>Services Offered</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <h3
                  className="font-hind font-semibold text-[15px] mb-2"
                  style={{ color: college.primaryColor }}
                >
                  {service.title}
                </h3>
                <p className="font-hind text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mentoring Program */}
        <section>
          <SectionLabel>Mentoring Program</SectionLabel>
          <p className="font-hind text-gray-700 text-[15px] leading-relaxed">
            Each student at GRIET is assigned a dedicated faculty mentor who provides academic and career
            guidance throughout the course of study. Mentoring sessions are held monthly, ensuring regular
            touchpoints for goal-setting and progress review. All mentoring records are tracked through the
            institution's ERP system for transparency and continuity.
          </p>
        </section>

        {/* Student Outcomes */}
        <section>
          <SectionLabel>Student Outcomes</SectionLabel>
          <ul className="space-y-3">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <span
                  className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: college.primaryColor }}
                />
                <span className="font-hind text-gray-700 text-[15px] leading-relaxed">{outcome}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section>
          <SectionLabel>Contact</SectionLabel>
          <div className="font-hind text-gray-700 text-[15px] space-y-1">
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a
                href="mailto:hsce@griet.ac.in"
                style={{ color: college.primaryColor }}
                className="hover:underline"
              >
                hsce@griet.ac.in
              </a>
            </p>
            <p>
              <span className="font-semibold">Location:</span> Admin Block, GRIET
            </p>
          </div>
        </section>

      </div>
    </AcademicsLayout>
  );
}
