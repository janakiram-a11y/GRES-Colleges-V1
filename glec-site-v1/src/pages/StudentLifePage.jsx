import { useParams, Navigate } from 'react-router-dom';
import college from '../theme';
import AdminSidebarLayout from '../components/AdminSidebarLayout';

const primary = college.primaryColor;
const accent  = college.accentColor;

function SectionHeader({ label, title }) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      {label && (
        <span className="font-dm-sans font-semibold text-[11px] tracking-[0.2em] uppercase" style={{ color: `${primary}80` }}>
          {label}
        </span>
      )}
      <h2 className="font-hind font-bold text-[26px] leading-tight" style={{ color: primary }}>{title}</h2>
      <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: accent }} />
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
          <span className="font-dm-sans font-normal text-[15px] leading-[26px] text-[#474747]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ComingSoon({ title }) {
  return (
    <div className="rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4" style={{ backgroundColor: '#F6F1F2', border: '1px solid rgba(91,16,39,0.1)' }}>
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(91,16,39,0.08)' }}>
        <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke={primary} strokeWidth="1.8" />
          <path d="M16 11v6M16 20v1" stroke={accent} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <h3 className="font-hind font-bold text-[20px]" style={{ color: primary }}>Coming Soon</h3>
        <p className="font-dm-sans text-[15px] text-[#474747] mt-1">Content for {title} is being prepared and will be updated soon.</p>
      </div>
    </div>
  );
}

// ── Section components ────────────────────────────────────────────────────────

function EventsContent() {
  return (
    <>
      <SectionHeader label="Campus Life" title="Events" />
      <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747] mb-8">
        GLEC hosts a variety of academic and extracurricular events throughout the academic year — including technical symposia, cultural fests, workshops, guest lectures, and sports meets. Details of upcoming and recent events will be published here.
      </p>
      <ComingSoon title="Events" />
    </>
  );
}

function CoCurricularContent() {
  return (
    <>
      <SectionHeader label="Beyond the Classroom" title="Co-Curricular Activities" />
      <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747] mb-8">
        GLEC encourages students to participate in a wide range of co-curricular activities that complement their academic learning. These activities help develop leadership, teamwork, creativity, and communication skills.
      </p>
      <ComingSoon title="Co-Curricular Activities" />
    </>
  );
}

function SeekContent() {
  const cards = [
    { title: 'Hands-On Learning', desc: 'Real-world projects and lab-based experiments that reinforce classroom concepts.' },
    { title: 'Industry Connect', desc: 'Exposure to industry professionals, site visits, and live problem-solving sessions.' },
    { title: 'Skill Integration', desc: 'Blending hard technical skills with communication, teamwork, and leadership.' },
  ];
  return (
    <>
      <SectionHeader label="Experiential Learning" title="SEEKH" />
      <div className="flex items-center gap-3 mb-6">
        <img src="/images/icon4seekh.png" alt="SEEKH" className="w-12 h-12 object-contain" onError={e => { e.currentTarget.style.display = 'none'; }} />
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[2px] px-2 py-0.5 rounded" style={{ backgroundColor: '#04785715', color: '#047857' }}>SEEKH</span>
          <p className="text-[12px] mt-0.5 text-[#6B7280]">Experiential Learning Program</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-8">
        {[
          'Engineering is not just about adopting someone else\'s approach to solving a problem — it\'s about discovering and developing one\'s own. SEEKH is a unique program designed to impart experiential learning to budding engineers. GLEC has introduced this comprehensive initiative to bridge the gap between theory and practice, enabling students to gain hands-on experience and apply their knowledge effectively.',
          'While academic grades provide qualifications, true employability comes from mastering core concepts. SEEKH empowers students by integrating academic learning with practical application, fostering problem-solving skills, innovation, and technical expertise.',
          'This distinctive platform encourages young technocrats to think creatively, translating technical knowledge into real-world solutions. It nurtures both hard and soft skills, emphasizing creativity and application over rote learning. SEEKH seamlessly connects academia with industry, ensuring that students are well-prepared to excel in their professional journeys.',
        ].map((text, i) => (
          <p key={i} className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747]">{text}</p>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map(card => (
          <div key={card.title} className="p-5 rounded-xl border border-[#E5E7EB] bg-white">
            <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: '#047857' }} />
            <p className="font-hind font-bold text-[15px] mb-1" style={{ color: primary }}>{card.title}</p>
            <p className="font-dm-sans text-[13px] leading-[22px] text-[#6B7280]">{card.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function NipunContent() {
  const years = [
    { year: 'I Year', course: 'Joy of Computing', desc: 'Joy of Computing focuses on instilling logical thinking and programmatic problem-solving. Students learn current advances in computing and the art of programming with Python, using anecdotes, analogies and illustrative examples to strengthen their skill set and knowledge.' },
    { year: 'II Year', course: 'Full Stack Development', desc: 'Full Stack Developers design complete applications and websites, working on all facets — from frontend and backend to database, debugging, and testing. This course builds multi-technology expertise, enabling students to handle all aspects of development and create seamlessly crafted digital products.' },
  ];
  return (
    <>
      <SectionHeader label="Industry Bridge Program" title="NIPUN" />
      <div className="flex items-center gap-3 mb-6">
        <img src="/images/icon1nipun.png" alt="NIPUN" className="w-12 h-12 object-contain" onError={e => { e.currentTarget.style.display = 'none'; }} />
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[2px] px-2 py-0.5 rounded" style={{ backgroundColor: '#0369A115', color: '#0369A1' }}>NIPUN</span>
          <p className="text-[12px] mt-0.5 text-[#6B7280]">Industry Bridge Program</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-8">
        {[
          'NIPUN is designed to bridge the gap between industry and academia by offering a diverse range of skill enhancement courses, including Joy of Computing, Full Stack Development, IoT, Blockchain, AR/VR, MERN Stack, DevOps, HTML, CSS, Python, and other programming languages. These programs equip students with the ability to identify problems, apply appropriate solutions, and develop industry-ready skills.',
          'In an era of increasing automation, an innovative mindset, problem-solving abilities, and critical thinking are crucial for engineers. Beyond university degrees, employability skills, soft skills, and communication skills are key to thriving in a professional environment.',
          'Through NIPUN, GLEC bridges the gap between acquired and required knowledge, academia and industry, employability and employment — by fostering continuous learning, unlearning, and relearning. This program runs every semester, allowing students to explore technologies of interest and gain hands-on experience.',
        ].map((text, i) => (
          <p key={i} className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747]">{text}</p>
        ))}
      </div>
      <p className="font-hind font-semibold text-[16px] mb-4" style={{ color: primary }}>Programme Structure</p>
      <div className="flex flex-col gap-4">
        {years.map((y, i) => (
          <div key={i} className="rounded-xl overflow-hidden border border-[#E5E7EB]">
            <div className="px-5 py-3 flex items-center gap-2 border-b" style={{ backgroundColor: `${primary}06` }}>
              <span className="w-7 h-7 rounded-full flex items-center justify-center font-hind font-bold text-[12px] text-white flex-shrink-0" style={{ backgroundColor: primary }}>{i + 1}</span>
              <span className="font-hind font-bold text-[14px]" style={{ color: primary }}>{y.year} — {y.course}</span>
            </div>
            <div className="px-5 py-4 bg-white">
              <p className="font-dm-sans text-[14px] leading-[24px] text-[#474747]">{y.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function DhiContent() {
  const activities = ['Public Speaking', 'Essay Writing', 'Dramatics', 'Debates', 'JAM Sessions', 'Group Discussions', 'Creative Writing', 'Leadership Workshops'];
  return (
    <>
      <SectionHeader label="Communication & Leadership" title="DHI" />
      <div className="flex items-center gap-3 mb-6">
        <img src="/images/icon3dhi.png" alt="DHI" className="w-12 h-12 object-contain" onError={e => { e.currentTarget.style.display = 'none'; }} />
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[2px] px-2 py-0.5 rounded" style={{ backgroundColor: '#B4530915', color: '#B45309' }}>DHI</span>
          <p className="text-[12px] mt-0.5 text-[#6B7280]">Communication & Leadership</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-8">
        {[
          'DHI! where creative minds congregate — the impossible becomes possible and the ordinary becomes extraordinary. Rooted in the Sanskrit word Vāc (वाच), meaning speech, Dhi embodies understanding, reflection, intellect, imagination, and innovation. It represents the thought-mind, intellect, and the activity of intellectual pursuit.',
          'The DHI program at GLEC serves as a platform for students to evolve, develop, and demonstrate their knowledge while nurturing their ability to think beyond conventional boundaries. Providing an accessible and approachable space to showcase talent, DHI encourages students to push the limits of creativity and innovation.',
          'In today\'s fast-paced and ever-evolving tech landscape, success requires more than just academic excellence. Analytical thinking, interpersonal skills, and soft skills play a crucial role. DHI fosters divergent thinking — a method that explores multiple solutions to generate creative ideas — helping students stay ahead in a dynamic world.',
        ].map((text, i) => (
          <p key={i} className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747]">{text}</p>
        ))}
      </div>
      <div className="rounded-xl p-5 border-l-[3px]" style={{ border: `1px solid ${primary}18`, borderLeftColor: accent, backgroundColor: '#FDFCFC' }}>
        <p className="font-hind font-semibold text-[15px] mb-3" style={{ color: primary }}>Key Activities</p>
        <div className="flex flex-wrap gap-2">
          {activities.map(act => (
            <span key={act} className="px-3 py-1.5 rounded font-dm-sans text-[13px] font-medium" style={{ backgroundColor: '#B4530910', color: '#B45309', border: '1px solid #B4530925' }}>
              {act}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

function AvishkarContent() {
  return (
    <>
      <SectionHeader label="Student Initiative" title="Avishkar" />
      <ComingSoon title="Avishkar" />
    </>
  );
}

function LicdContent() {
  return (
    <>
      <SectionHeader label="Leadership & Innovation" title="LICD" />
      <ComingSoon title="LICD" />
    </>
  );
}

// ── Section registry ──────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'events',       path: '/student-life/events',       label: 'Events',              content: <EventsContent /> },
  { id: 'co-curricular',path: '/student-life/co-curricular',label: 'Co-Curricular',       content: <CoCurricularContent /> },
  { id: 'seek',         path: '/student-life/seek',         label: 'SEEKH',               content: <SeekContent /> },
  { id: 'nipun',        path: '/student-life/nipun',        label: 'NIPUN',               content: <NipunContent /> },
  { id: 'dhi',          path: '/student-life/dhi',          label: 'DHI',                 content: <DhiContent /> },
  { id: 'avishkar',     path: '/student-life/avishkar',     label: 'Avishkar',            content: <AvishkarContent /> },
  { id: 'licd',         path: '/student-life/licd',         label: 'LICD',                content: <LicdContent /> },
];

export default function StudentLifePage() {
  const { section } = useParams();
  const activeId = section || 'events';
  const currentSection = SECTIONS.find(s => s.id === activeId);

  if (!currentSection) {
    return <Navigate to="/student-life/events" replace />;
  }

  return (
    <AdminSidebarLayout
      college={college}
      pageTitle="Student Life"
      pageSubtitle="Co-curricular activities, initiatives, and campus programs at GLEC"
      pageBreadcrumb={['Student Life', currentSection.label]}
      sections={SECTIONS}
      currentSection={currentSection}
    />
  );
}
