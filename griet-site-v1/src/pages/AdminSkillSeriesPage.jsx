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

const skillAreas = [
  {
    icon: '💻',
    title: 'Programming & Development',
    skills: ['Python', 'Java', 'Web Development', 'App Development', 'Cloud Computing', 'DevOps'],
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    skills: ['Data Science', 'Machine Learning', 'Deep Learning', 'Big Data', 'Business Analytics', 'AI Tools'],
  },
  {
    icon: '🔧',
    title: 'Core Engineering Skills',
    skills: ['AutoCAD', 'MATLAB', 'LabVIEW', 'VLSI Design', 'Embedded Systems', 'Robotics'],
  },
  {
    icon: '🤝',
    title: 'Soft Skills & Communication',
    skills: ['Technical Communication', 'Interview Preparation', 'Group Discussion', 'Presentation Skills', 'Leadership', 'Team Building'],
  },
  {
    icon: '🌐',
    title: 'Certifications & Standards',
    skills: ['AWS Certification', 'Google Cloud', 'Microsoft Azure', 'Cisco Networking', 'Oracle Certified', 'Red Hat'],
  },
  {
    icon: '🚀',
    title: 'Entrepreneurship & Innovation',
    skills: ['Start-up Fundamentals', 'Business Plan Writing', 'Patent Filing Basics', 'Design Thinking', 'Product Management'],
  },
];

const seriesHighlights = [
  { stat: '50+', label: 'Workshops Conducted' },
  { stat: '5000+', label: 'Students Benefited' },
  { stat: '30+', label: 'Industry Experts' },
  { stat: '20+', label: 'Skill Domains Covered' },
];

export default function AdminSkillSeriesPage() {
  return (
    <AdministrationLayout title="GRIET Skill Series">
      <div className="space-y-8">

        <div>
          <SectionHeading>GRIET Skill Series</SectionHeading>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 mb-2 max-w-2xl">
            The GRIET Skill Series is a structured initiative to bridge the skill gap between academic learning
            and industry expectations — equipping students with technical, analytical, and interpersonal skills
            through expert-led workshops, certification programmes, and hands-on sessions.
          </p>
        </div>

        {/* Stats Strip */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-lg p-5"
          style={{ backgroundColor: college.primaryColor }}
        >
          {seriesHighlights.map(({ stat, label }) => (
            <div key={label} className="text-center">
              <p className="font-hind font-bold text-[28px] leading-none" style={{ color: college.accentColor }}>{stat}</p>
              <p className="font-dm-sans text-[12px] text-white/80 mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Skill Areas */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Skill Domains
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillAreas.map(({ icon, title, skills }) => (
              <div key={title} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-sm transition-shadow">
                <div className="text-2xl mb-2">{icon}</div>
                <h4 className="font-hind font-semibold text-[14px] mb-3" style={{ color: college.primaryColor }}>{title}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2 py-0.5 rounded font-dm-sans font-medium text-white"
                      style={{ backgroundColor: `${college.primaryColor}cc` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Programme Structure
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: '01', title: 'Identify', desc: 'Industry skill gap analysis and student needs assessment at the start of each academic year.' },
              { step: '02', title: 'Train', desc: 'Expert-led hands-on workshops, online sessions, and certification preparation programmes.' },
              { step: '03', title: 'Certify', desc: 'Students earn industry-recognised certifications and completion badges to strengthen their profiles.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-[#F6F1F2] rounded-lg border border-gray-200 p-5 relative overflow-hidden">
                <p
                  className="font-hind font-bold text-[48px] leading-none absolute top-2 right-4 opacity-10"
                  style={{ color: college.primaryColor }}
                >
                  {step}
                </p>
                <p className="font-hind font-bold text-[12px] uppercase tracking-wide mb-2" style={{ color: college.accentColor }}>
                  Step {step}
                </p>
                <h4 className="font-hind font-semibold text-[16px] mb-2" style={{ color: college.primaryColor }}>{title}</h4>
                <p className="font-dm-sans text-[13px] leading-relaxed text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </AdministrationLayout>
  );
}
