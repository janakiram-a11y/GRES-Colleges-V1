import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const ACTIVITIES = [
  {
    title: 'Startup Incubation',
    desc: 'GRIET Technology Business Incubator (GRIET-TBI) supports early-stage student and faculty startups with mentoring, seed funding facilitation, lab access, and industry connections.',
  },
  {
    title: 'AICTE IDEA Lab',
    desc: 'A fully equipped prototyping lab with 3D printers, laser cutters, Arduino/Raspberry Pi kits, and IoT development boards to enable hands-on ideation and rapid prototype building.',
  },
  {
    title: 'Hackathons & Innovation Challenges',
    desc: 'Regular inter-departmental and open hackathons focused on solving real-world problems. Past events include Smart India Hackathon (SIH) participation and internal "GRIET Innovation Sprint."',
  },
  {
    title: 'Entrepreneurship Awareness Workshops',
    desc: 'Guest lectures, panel discussions, and workshops by successful entrepreneurs, angel investors, and venture capitalists to inspire the entrepreneurial mindset among students.',
  },
  {
    title: 'EDC–Industry Connect',
    desc: 'Formal MoUs and partnerships with industry bodies, accelerators, and incubators including T-Hub, WE Hub, and ALEAP to give students access to real entrepreneurial ecosystems.',
  },
  {
    title: 'Patent Filing Support',
    desc: 'End-to-end guidance for students and faculty in filing patents for innovations. GRIET has filed 85+ patents, supported by the EDC and Dean of Research office.',
  },
];

const ACHIEVEMENTS = [
  'Students won First Prize at the International Blockchain Congress (2018) — ₹50,000',
  'Second Place at BAJA Design ATV Competition — ₹1,00,000 prize',
  'Chhatra Vishwakarma Award — First Prize from India\'s Vice President (2019)',
  'JNTUH Hackathon — GRIET students swept all 3 trophies (2018)',
  '85+ patents filed by students and faculty',
  'Multiple startups incubated at GRIET-TBI, several raised external funding',
  'Consistent participation and wins in Smart India Hackathon (SIH)',
];

const INITIATIVES = [
  { name: 'Institution\'s Innovation Council (IIC)', desc: 'GRIET is an IIC-certified institution under the MoE Innovation Cell, conducting quarterly innovation activities and startup support programs.', href: '/administration/iic', internal: true },
  { name: 'GRIET Skill Development Cell (SDC)', desc: 'Bridges entrepreneurship with employability by offering industry-relevant skill programs in partnership with TASK, Cisco, IBM, Oracle, and Microsoft.', href: 'https://grietsdc.in/', internal: false },
  { name: 'Technology & Innovation Cell', desc: 'Dedicated cell promoting Industry-Institute interaction, supporting patent filing, commercialisation of student ideas, and R&D partnerships.', href: null },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function EDCPage() {
  return (
    <AcademicsLayout title="Entrepreneurship Development Cell (EDC)">

      <section className="mb-8">
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed mb-3">
            The <strong>Entrepreneurship Development Cell (EDC)</strong> at GRIET nurtures the entrepreneurial spirit of students and faculty by providing structured support, resources, and mentorship for idea validation, prototyping, and startup creation. The EDC works in close coordination with the Institution's Innovation Council (IIC), GRIET Technology Business Incubator (TBI), and the AICTE IDEA Lab.
          </p>
          <p className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed">
            GRIET has been recognised as a hub of innovation — with <strong>85+ patents filed</strong>, active student startups, and a consistent track record at national-level innovation competitions including Smart India Hackathon, BAJA SAE, and JNTUH Hackathon.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Key Activities & Initiatives</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ACTIVITIES.map(({ title, desc }) => (
            <div key={title} className="p-4 rounded-xl border border-gray-200 bg-white">
              <p className="font-hind font-bold text-[0.9375rem] mb-1" style={{ color: college.primaryColor }}>{title}</p>
              <p className="font-dm-sans text-[0.875rem] text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Connected Initiatives</SectionLabel>
        <div className="flex flex-col gap-4">
          {INITIATIVES.map(({ name, desc, href, internal: isInternal }) => (
            <div key={name} className="p-4 rounded-xl border border-gray-200 bg-white flex flex-col gap-2">
              <p className="font-hind font-bold text-[0.9375rem]" style={{ color: college.primaryColor }}>{name}</p>
              <p className="font-dm-sans text-[0.875rem] text-gray-600 leading-relaxed">{desc}</p>
              {href && (
                isInternal ? (
                  <a href={href} className="font-dm-sans text-[0.875rem] font-semibold hover:underline self-start" style={{ color: college.accentColor }}>
                    View page →
                  </a>
                ) : (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="font-dm-sans text-[0.875rem] font-semibold hover:underline self-start" style={{ color: college.accentColor }}>
                    Visit website →
                  </a>
                )
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Notable Achievements</SectionLabel>
        <div className="flex flex-col gap-2 p-5 rounded-xl bg-gray-50 border border-gray-200">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="flex items-start gap-2 font-dm-sans text-[12.5px] text-gray-700">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
              {a}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <SectionLabel>Contact EDC</SectionLabel>
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed">
            For EDC activities, startup mentoring, or incubation support, contact the <strong>Dean of Research & Innovation</strong> or write to{' '}
            <a href="mailto:edc@griet.ac.in" className="font-semibold hover:underline" style={{ color: college.accentColor }}>edc@griet.ac.in</a>.
            <br />
            Phone: <strong>{college.phone}</strong> &nbsp;|&nbsp; Address: {college.address}
          </p>
        </div>
      </section>

    </AcademicsLayout>
  );
}
