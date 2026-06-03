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

const functions = [
  {
    title: 'IP Management',
    description: 'Facilitates filing and management of patents, trademarks, and copyrights to protect institutional intellectual property.',
  },
  {
    title: 'Technology Transfer',
    description: 'Enables licensing and commercialization of research outcomes by bridging the gap between innovation and market deployment.',
  },
  {
    title: 'Industry-Academia R&D',
    description: 'Supports collaborative research projects funded by DST, AICTE, and SERB, fostering applied research with industry partners.',
  },
  {
    title: 'Innovation Ecosystem',
    description: 'Builds connections with T-Hub, WE Hub, and NASSCOM to integrate the institution into regional and national innovation networks.',
  },
  {
    title: 'Consultancy Facilitation',
    description: 'Coordinates expert-industry consultancy agreements, enabling faculty to provide specialized technical services to industry.',
  },
  {
    title: 'Sponsored Research Management',
    description: 'Administers grant proposals, fund utilization, and compliance reporting for all externally sponsored research projects.',
  },
];

const stats = [
  { value: '85+', label: 'Patents Filed' },
  { value: 'Rs.400L+', label: 'Research Funding' },
  { value: '107+', label: 'Active MoUs' },
  { value: '50+', label: 'Consultancy Projects' },
];

const recognitions = [
  { title: 'SIRO (DSIR)', description: 'Recognized as a Scientific and Industrial Research Organisation by the Department of Scientific and Industrial Research.' },
  { title: 'AICTE IDEA Lab', description: 'Established an AICTE-sanctioned IDEA Lab to promote hands-on innovation and product development among students.' },
  { title: 'TEQIP-II Grant', description: 'Awarded a Rs.400L grant under TEQIP-II for enhancing technical education quality and infrastructure.' },
  { title: 'Margdarshan Mentor Status', description: 'Designated as a Margdarshan mentor institution to guide and support aspiring technical institutions.' },
];

export default function TechInnovationCellPage() {
  return (
    <AcademicsLayout title="Technology & Innovation Cell">
      <div className="space-y-10">

        {/* About */}
        <section>
          <SectionLabel>About</SectionLabel>
          <p className="text-gray-700 text-[15px] leading-relaxed">
            The Technology &amp; Innovation (T&amp;I) Cell at GRIET facilitates intellectual property generation, technology transfer,
            industry-academia collaboration, and commercialization of research outcomes. Working in close coordination with the
            Institution's Innovation Council (IIC), Entrepreneurship Development Cell (EDC), and the Dean of Research, the T&amp;I Cell
            serves as the central hub for translating academic knowledge into real-world impact.
          </p>
        </section>

        {/* Functions */}
        <section>
          <SectionLabel>Key Functions</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {functions.map((fn) => (
              <div
                key={fn.title}
                className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <h3
                  className="font-hind font-semibold text-[15px] mb-2"
                  style={{ color: college.primaryColor }}
                >
                  {fn.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">{fn.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section>
          <SectionLabel>At a Glance</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg p-5 text-center"
                style={{ backgroundColor: `${college.primaryColor}10` }}
              >
                <p
                  className="font-hind font-bold text-2xl"
                  style={{ color: college.primaryColor }}
                >
                  {stat.value}
                </p>
                <p className="text-gray-600 text-[13px] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Recognition */}
        <section>
          <SectionLabel>Key Recognitions</SectionLabel>
          <div className="space-y-4">
            {recognitions.map((rec) => (
              <div key={rec.title} className="flex gap-3">
                <span
                  className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: college.primaryColor }}
                />
                <div>
                  <span
                    className="font-hind font-semibold text-[15px]"
                    style={{ color: college.primaryColor }}
                  >
                    {rec.title}
                  </span>
                  <span className="text-gray-600 text-[14px]"> — {rec.description}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <SectionLabel>Contact</SectionLabel>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-2 text-[14px] text-gray-700">
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a
                href="mailto:research@griet.ac.in"
                style={{ color: college.primaryColor }}
                className="hover:underline"
              >
                research@griet.ac.in
              </a>
            </p>
            <p>
              <span className="font-semibold">Location:</span> Block 3, 2nd Floor
            </p>
          </div>
        </section>

      </div>
    </AcademicsLayout>
  );
}
