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
  'Create a culture of innovation and entrepreneurship among students and faculty',
  'Ignite the spirit of innovation by supporting new ideas and start-up ventures',
  'Provide hand-holding support to student innovators and potential entrepreneurs',
  'Link innovations and entrepreneurship to Sustainable Development Goals (SDGs)',
  'Organise hackathons, ideathons, and innovation challenges',
  'Facilitate funding avenues for student start-ups through government schemes',
  'Collaborate with AICTE, DST, MSME, and other bodies for innovation funding',
];

const activities = [
  { icon: '💡', title: 'Innovation Challenges', desc: 'Regular ideathons and hackathons to nurture creative problem-solving among students.' },
  { icon: '🚀', title: 'Start-up Support', desc: 'Mentoring and incubation support through the GRIET Incubation Centre and AICTE IDEA Lab.' },
  { icon: '🤝', title: 'Industry Connect', desc: 'Partnerships with industry mentors and investors for start-up ecosystem development.' },
  { icon: '🏛️', title: 'AICTE IDEA Lab', desc: 'State-of-the-art facility supporting prototyping, product development, and innovative design.' },
  { icon: '📋', title: 'IPR Workshops', desc: 'Awareness sessions on intellectual property rights, patent filing, and technology commercialisation.' },
  { icon: '🌐', title: 'National Competitions', desc: 'Participation in Smart India Hackathon, YUKTI, and other national innovation competitions.' },
];

const council = [
  { role: 'President', member: 'Principal, GRIET' },
  { role: 'Vice-President', member: 'Dean – Technology and Innovation Cell' },
  { role: 'Convener', member: 'Faculty Coordinator, IIC' },
  { role: 'Member', member: 'Student Representatives (all departments)' },
  { role: 'Member', member: 'Industry Mentor (nominated)' },
  { role: 'Member', member: 'Startup / Alumni Representative' },
];

export default function AdminIICPage() {
  return (
    <AdministrationLayout title="IIC">
      <div className="space-y-8">

        <div>
          <SectionHeading>Institution's Innovation Council (IIC)</SectionHeading>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 mb-2 max-w-2xl">
            The Institution's Innovation Council (IIC) is established under the Ministry of Education's
            Innovation Cell (MIC), AICTE, to promote innovation, entrepreneurship, and start-up culture at GRIET.
          </p>
        </div>

        {/* IIC Rating */}
        <div
          className="rounded-lg p-5 text-white"
          style={{ backgroundColor: college.primaryColor }}
        >
          <p className="font-hind font-bold text-[13px] uppercase tracking-widest mb-1" style={{ color: college.accentColor }}>
            IIC Recognition
          </p>
          <p className="font-dm-sans text-[14px] leading-relaxed">
            GRIET's IIC is recognised by AICTE's Innovation Cell under the Ministry of Education's initiative
            to build a strong innovation and entrepreneurship ecosystem across technical institutions in India.
            GRIET is also a recipient of the <strong>AICTE IDEA Lab</strong> grant, supporting hands-on innovation activities.
          </p>
        </div>

        {/* Council Composition */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Council Composition
          </h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-[13px] font-dm-sans">
              <thead>
                <tr style={{ backgroundColor: college.primaryColor }}>
                  <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[12px] w-36">Role</th>
                  <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[12px]">Member</th>
                </tr>
              </thead>
              <tbody>
                {council.map(({ role, member }, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border-b border-gray-100 font-semibold" style={{ color: college.accentColor }}>{role}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{member}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#F6F1F2] rounded-lg border border-gray-200 p-4">
                <div className="text-2xl mb-2">{icon}</div>
                <h4 className="font-hind font-semibold text-[13px] mb-1.5" style={{ color: college.primaryColor }}>{title}</h4>
                <p className="font-dm-sans text-[12px] leading-relaxed text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </AdministrationLayout>
  );
}
