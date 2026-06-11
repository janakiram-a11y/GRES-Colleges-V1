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

const infrastructureCards = [
  {
    title: 'Campus Wi-Fi',
    details: ['1 Gbps internet backbone', '100+ access points', 'IEEE 802.11ac/ax standard'],
  },
  {
    title: 'Smart Classrooms',
    details: ['80+ smart classrooms', 'Projectors & interactive boards', 'Integrated audio systems'],
  },
  {
    title: 'HPC Cluster',
    details: ['64-core processing', '512 GB RAM', 'AI/ML workload optimised'],
  },
  {
    title: 'CCTV Surveillance',
    details: ['400+ IP cameras', 'Campus-wide coverage', '24/7 monitoring'],
  },
  {
    title: 'ERP & Academic Portal',
    details: ['Attendance & grade tracking', 'Fee management', 'ecap.griet.in'],
  },
  {
    title: 'Digital Library',
    details: ['21,500+ e-journals', '6,500+ e-books', 'KNIMBUS remote access'],
  },
];

const softwareLicenses = [
  'Microsoft Campus Agreement',
  'MATLAB & Simulink',
  'AutoCAD',
  'SolidWorks',
  'ANSYS',
  'Tally / SAP',
  'NASSCOM FutureSkills',
];

const networkSpecs = [
  { label: 'Bandwidth', value: '1 Gbps' },
  { label: 'Nodes', value: '3000+' },
  { label: 'Standard', value: 'Wi-Fi 6' },
  { label: 'Security', value: 'Enterprise Firewall' },
];

export default function ICTPage() {
  return (
    <AcademicsLayout title="ICT @ GRIET">
      {/* About */}
      <section className="mb-10">
        <SectionLabel>About</SectionLabel>
        <p className="text-gray-700 text-[15px] leading-relaxed">
          GRIET maintains a robust, campus-wide ICT infrastructure designed to support academic excellence
          and research innovation. The campus is equipped with a 1 Gbps high-speed internet backbone,
          100+ Wi-Fi access points, 80+ smart classrooms, a high-performance computing (HPC) cluster,
          comprehensive CCTV surveillance, an integrated ERP and academic portal, and a fully digital
          library — ensuring a connected and technology-driven learning environment for students and faculty.
        </p>
      </section>

      {/* Infrastructure Cards */}
      <section className="mb-10">
        <SectionLabel>Infrastructure</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {infrastructureCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3
                className="font-hind font-bold text-[15px] mb-3"
                style={{ color: college.primaryColor }}
              >
                {card.title}
              </h3>
              <ul className="space-y-1">
                {card.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-gray-600 text-base">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.primaryColor }} />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Software & Licensing */}
      <section className="mb-10">
        <SectionLabel>Software &amp; Licensing</SectionLabel>
        <ul className="space-y-2">
          {softwareLicenses.map((item) => (
            <li key={item} className="flex items-center gap-2 text-gray-700 text-[15px]">
              <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: college.primaryColor }} />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Network Specs */}
      <section className="mb-10">
        <SectionLabel>Network Specifications</SectionLabel>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {networkSpecs.map((spec) => (
            <div
              key={spec.label}
              className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm"
            >
              <p className="text-[22px] font-bold font-hind" style={{ color: college.primaryColor }}>
                {spec.value}
              </p>
              <p className="text-gray-500 text-[0.9375rem] mt-1">{spec.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mb-4">
        <SectionLabel>Contact</SectionLabel>
        <p className="text-gray-700 text-[15px]">
          For ICT-related queries, reach us at{' '}
          <a
            href="mailto:ict@griet.ac.in"
            className="font-medium hover:underline"
            style={{ color: college.primaryColor }}
          >
            ict@griet.ac.in
          </a>
        </p>
      </section>
    </AcademicsLayout>
  );
}
