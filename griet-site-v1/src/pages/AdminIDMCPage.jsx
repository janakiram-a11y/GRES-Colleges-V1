import AdministrationLayout from '../components/AdministrationLayout';
import college from '../theme';

function SectionHeading({ children }) {
  return (
    <h2
      className="font-hind font-bold text-2xl mb-6 pb-2 inline-block"
      style={{ color: college.primaryColor, borderBottom: `2px solid ${college.accentColor}` }}
    >
      {children}
    </h2>
  );
}

const objectives = [
  'Bridge the gap between academic learning and industry requirements',
  'Facilitate industry-sponsored projects, consultancy, and research collaborations',
  'Create pathways for guest lectures, workshops, and industry immersion programmes',
  'Support internship and live-project placements with industry partners',
  'Strengthen the MoU framework with industries and professional bodies',
  'Gather industry feedback to continuously update curricula',
  'Promote technology transfer and commercialisation of GRIET research',
];

const activities = [
  { title: 'Industry Expert Lectures', desc: 'Regular sessions by industry professionals sharing real-world insights across departments.' },
  { title: 'Industry-Sponsored Projects', desc: 'Final-year projects taken up in collaboration with partner organisations addressing live industry problems.' },
  { title: 'MoU Facilitation', desc: 'IDMC coordinates the establishment and renewal of MoUs with over 107 industry and academic partners.' },
  { title: 'Technology Consultancy', desc: 'Connecting GRIET faculty expertise with industries for technical testing, design, and advisory services.' },
  { title: 'Campus Recruitment', desc: 'Coordinating with the Placement Cell for campus drives, pre-placement talks, and recruitment processes.' },
  { title: 'Feedback Surveys', desc: 'Annual employer and alumni feedback surveys to align academic programmes with evolving industry needs.' },
];

export default function AdminIDMCPage() {
  return (
    <AdministrationLayout title="IDMC">
      <div className="space-y-8">

        <div>
          <SectionHeading>Industry Development and Management Cell (IDMC)</SectionHeading>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 mb-2 max-w-2xl">
            The Industry Development and Management Cell (IDMC) at GRIET serves as the primary interface between
            the institution and the industry ecosystem, fostering mutually beneficial collaborations that enhance
            student employability and research impact.
          </p>
        </div>

        {/* Objectives */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Objectives
          </h3>
          <ul className="space-y-2.5">
            {objectives.map((item) => (
              <li key={item} className="flex items-start gap-3 font-dm-sans text-[14px] text-gray-700">
                <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Activities */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Key Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-sm transition-shadow">
                <h4 className="font-hind font-semibold text-[14px] mb-2" style={{ color: college.primaryColor }}>
                  {title}
                </h4>
                <p className="font-dm-sans text-[13px] leading-relaxed text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-[#F6F1F2] rounded-lg border border-gray-200 p-5">
          <h3 className="font-hind font-bold text-[15px] mb-2" style={{ color: college.primaryColor }}>
            Industry Collaborations
          </h3>
          <p className="font-dm-sans text-[13px] text-gray-600 mb-3">
            GRIET currently holds active MoUs with <strong>107+ organisations</strong> including IIT Hyderabad,
            NIT Warangal, Wipro, TCS, Oracle, Red Hat, Dell EMC, NASSCOM, NRSC-ISRO, and many more.
          </p>
          <a
            href="/research#mous"
            className="inline-flex items-center gap-2 font-dm-sans font-semibold text-[13px] hover:underline"
            style={{ color: college.primaryColor }}
          >
            View full MoU list →
          </a>
        </section>

      </div>
    </AdministrationLayout>
  );
}
