import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const GRANT_AREAS = [
  {
    title: 'Laboratory Equipment Upgradation',
    desc: 'State-of-the-art equipment for all departments to enhance practical learning and research capabilities.',
    icon: '🔬',
  },
  {
    title: 'Faculty Development Programs',
    desc: 'National/International conference travel, FDPs, and training programs to upskill faculty members.',
    icon: '👨‍🏫',
  },
  {
    title: 'Research Projects',
    desc: 'Seed money for faculty research projects to foster innovation and scholarly contributions.',
    icon: '📐',
  },
  {
    title: 'Library Resources',
    desc: 'Addition of books, journals, and e-resources to enrich the academic library collection.',
    icon: '📚',
  },
  {
    title: 'Industry-Institute Interaction',
    desc: 'Workshops, guest lectures, and industry visits to bridge the gap between academia and industry.',
    icon: '🤝',
  },
  {
    title: 'Student Development',
    desc: 'Hackathons, competitions, and skill programs to prepare students for professional excellence.',
    icon: '🎓',
  },
];

const KEY_OUTCOMES = [
  '40+ FDPs conducted for faculty',
  '15+ workshops organized',
  '200+ books added to library',
  '5+ new laboratory equipment worth Rs. 50 Lakhs',
  '30+ research publications from TEQIP-funded projects',
];

const DOCUMENTS = [
  {
    label: 'Income & Expenditure Statement',
    href: 'https://www.griet.ac.in/teqip.php',
  },
  {
    label: 'Institutional Development Proposal (IDP)',
    href: 'https://www.griet.ac.in/teqip.php',
  },
  {
    label: 'Performance Audit Report (2016)',
    href: 'https://www.griet.ac.in/teqip.php',
  },
];

function SectionHeading({ children }) {
  return (
    <h2
      className="font-hind font-bold text-xl mb-4 pb-2 inline-block"
      style={{ color: college.primaryColor, borderBottom: `2px solid ${college.accentColor}` }}
    >
      {children}
    </h2>
  );
}

export default function TEQIPPage() {
  return (
    <AcademicsLayout title="TEQIP Phase-II Grant">
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">

        {/* About TEQIP */}
        <section>
          <SectionHeading>About TEQIP</SectionHeading>
          <p className="text-gray-700 leading-relaxed text-[15px]">
            Technical Education Quality Improvement Programme (TEQIP) is a World Bank funded
            initiative by the Government of India to improve the quality of technical education
            in India. The programme aims to upscale and support ongoing efforts of the Government
            to improve quality and equity in technical education by strengthening select institutions
            and their systemic processes.
          </p>
        </section>

        {/* GRIET & TEQIP-II */}
        <section>
          <SectionHeading>GRIET &amp; TEQIP-II</SectionHeading>
          <div
            className="rounded-lg p-6 border-l-4"
            style={{
              background: `linear-gradient(135deg, #FAF4EE 0%, #F3E8D4 100%)`,
              borderLeftColor: college.primaryColor,
            }}
          >
            <p className="text-gray-800 leading-relaxed text-[15px]">
              GRIET was one of only <strong>25 private engineering colleges</strong> selected
              nationwide for the TEQIP Phase-II grant of{' '}
              <strong>Rs. 400 Lakhs (Rs. 4 Crore)</strong>. This selection recognizes GRIET's
              commitment to academic quality and research output, placing it among the elite
              institutions chosen for this prestigious World Bank-backed programme.
            </p>
          </div>
        </section>

        {/* Grant Utilization */}
        <section>
          <SectionHeading>Grant Utilization Areas</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GRANT_AREAS.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="rounded-lg border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3
                  className="font-hind font-semibold text-[15px] mb-2"
                  style={{ color: college.primaryColor }}
                >
                  {title}
                </h3>
                <p className="text-gray-600 text-[0.9375rem] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TEQIP Coordinator */}
        <section>
          <SectionHeading>TEQIP Coordinator</SectionHeading>
          <div
            className="inline-flex items-center gap-4 rounded-lg border border-gray-200 bg-white px-6 py-4 shadow-sm"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)` }}
            >
              VV
            </div>
            <div>
              <p className="font-hind font-semibold text-gray-800 text-[15px]">
                Sri V. Vijaya Rama Raju
              </p>
              <p className="text-gray-500 text-[0.9375rem]">TEQIP Phase-II Coordinator, GRIET</p>
            </div>
          </div>
        </section>

        {/* Key Outcomes */}
        <section>
          <SectionHeading>Key Outcomes</SectionHeading>
          <ul className="space-y-3">
            {KEY_OUTCOMES.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <span
                  className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
                  style={{ background: college.accentColor }}
                >
                  ✓
                </span>
                <span className="text-gray-700 text-[15px]">{outcome}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Documents */}
        <section>
          <SectionHeading>Documents</SectionHeading>
          <div className="space-y-3">
            {DOCUMENTS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-5 py-3 hover:shadow-md transition-shadow group"
              >
                <span
                  className="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center text-white text-sm"
                  style={{ background: college.primaryColor }}
                >
                  ↓
                </span>
                <span
                  className="font-hind text-base font-medium group-hover:underline"
                  style={{ color: college.primaryColor }}
                >
                  {label}
                </span>
              </a>
            ))}
          </div>
        </section>

      </div>
    </AcademicsLayout>
  );
}
