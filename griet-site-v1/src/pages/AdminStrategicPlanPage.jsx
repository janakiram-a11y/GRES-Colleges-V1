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

function PillarCard({ icon, title, points }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-sm transition-shadow">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-hind font-semibold text-[15px] mb-3" style={{ color: college.primaryColor }}>{title}</h3>
      <ul className="space-y-1.5">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 font-dm-sans text-[12px] text-gray-600">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

const pillars = [
  {
    icon: '🎓',
    title: 'Academic Excellence',
    points: [
      'Maintain NBA and NAAC accreditations',
      'Continuously update syllabi with industry trends',
      'Strengthen outcome-based education practices',
      'Expand interdisciplinary programmes',
    ],
  },
  {
    icon: '🔬',
    title: 'Research & Innovation',
    points: [
      'Increase sponsored research funding',
      'File 20+ patents annually',
      'Establish new Centres of Excellence',
      'Grow SIRO-recognised research output',
    ],
  },
  {
    icon: '🤝',
    title: 'Industry Linkages',
    points: [
      'Expand MoUs with leading industries',
      'Strengthen internship and live-project pipeline',
      'Grow consultancy revenue',
      'Develop joint certification programmes',
    ],
  },
  {
    icon: '🌱',
    title: 'Student Development',
    points: [
      'Enhance finishing school and soft skills programmes',
      'Grow entrepreneurship cell (EDC) activities',
      'Improve placement outcomes year-on-year',
      'Strengthen student mentoring ecosystem',
    ],
  },
  {
    icon: '🏛️',
    title: 'Infrastructure & Sustainability',
    points: [
      'Expand laboratory infrastructure and equipment',
      'Increase solar energy capacity on campus',
      'Upgrade digital learning infrastructure',
      'Develop accessible, divyangjan-friendly spaces',
    ],
  },
  {
    icon: '🌐',
    title: 'Global Outreach',
    points: [
      'Increase international collaborations',
      'Send faculty and students on global exchange programmes',
      'Host international conferences (ICMPC and beyond)',
      'Attract international guest faculty',
    ],
  },
];

export default function AdminStrategicPlanPage() {
  return (
    <AdministrationLayout title="GRIET Strategic Plan">
      <div className="space-y-8">

        <div>
          <SectionHeading>GRIET Strategic Plan</SectionHeading>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 mb-2 max-w-2xl">
            GRIET's strategic plan outlines the institution's long-term vision, goals, and action frameworks to
            achieve and sustain excellence in engineering education, research, and societal impact.
          </p>
        </div>

        {/* Vision & Mission reminder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-lg p-5 text-white" style={{ backgroundColor: college.primaryColor }}>
            <p className="font-hind font-bold text-[13px] uppercase tracking-widest mb-2" style={{ color: college.accentColor }}>
              Vision
            </p>
            <p className="font-dm-sans text-[14px] leading-relaxed italic">
              "To be among the best of the institutions for engineers and technologists with attitudes, skills and
              knowledge and to become an epicentre of creative solutions."
            </p>
          </div>
          <div className="rounded-lg p-5 text-white bg-[#5B1027]">
            <p className="font-hind font-bold text-[13px] uppercase tracking-widest mb-2" style={{ color: '#F3DAB2' }}>
              Mission
            </p>
            <p className="font-dm-sans text-[14px] leading-relaxed italic">
              "To achieve and impart quality education with an emphasis on practical skills and social relevance."
            </p>
          </div>
        </div>

        {/* Strategic Pillars */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-5" style={{ color: college.primaryColor }}>
            Strategic Pillars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((p) => (
              <PillarCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        {/* Download */}
        <section className="bg-[#F6F1F2] rounded-lg border border-gray-200 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-hind font-semibold text-[15px] mb-1" style={{ color: college.primaryColor }}>
              GRIET Strategic Plan Document
            </p>
            <p className="font-dm-sans text-[13px] text-gray-500">
              Full strategic plan with timelines, KPIs, and action items.
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded font-hind font-semibold text-[13px] text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: college.primaryColor }}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download PDF
          </a>
        </section>

      </div>
    </AdministrationLayout>
  );
}
