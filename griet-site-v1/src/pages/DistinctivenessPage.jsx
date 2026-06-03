import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const distinctions = [
  {
    title: 'Resilience Wellness Center',
    description:
      'GRIET operates a first-of-its-kind on-campus counseling center staffed by a full-time professional psychologist. A structured peer support program complements clinical services, ensuring every student has access to mental health resources. The center reflects the institution\'s deep commitment to student well-being beyond academics.',
    link: null,
  },
  {
    title: "Women's Development Cell",
    description:
      "The Women's Development Cell (WDC) is one of the most active gender-equity bodies among Hyderabad engineering colleges, publishing annual reports and hosting International Women's Day celebrations each year. GRIET's WDC participates in the CII IWN (Indian Women's Network) Conclave, giving students direct access to senior industry leaders. The cell runs awareness workshops, legal literacy sessions, and mentoring programs throughout the academic year.",
    link: null,
  },
  {
    title: 'Zero-Tolerance Anti-Ragging',
    description:
      'GRIET maintains a comprehensive anti-ragging infrastructure that includes a dedicated squad, CCTV surveillance across the campus, and an active police liaison mechanism. Complaint redressal is swift and transparent, with regular awareness drives for incoming batches. The institution\'s approach goes beyond compliance to build a genuinely respectful campus culture.',
    link: null,
  },
  {
    title: 'Technology & Innovation Cell',
    description:
      'The Technology & Innovation Cell facilitates intellectual property generation, technology transfer, and deep industry-academia linkages for faculty and students alike. It coordinates with GRIET\'s Incubation Centre and external agencies to commercialize research outcomes. The cell actively guides student inventors through the patent filing and startup formation process.',
    link: null,
  },
  {
    title: 'J-Lab (Junior Innovation Lab)',
    description:
      'The Junior Innovation Lab is a dedicated prototyping and ideation space reserved exclusively for undergraduate-level innovation projects. Equipped with rapid-prototyping tools, electronics workbenches, and fabrication equipment, it lowers the barrier for early-stage experimentation. Students across all disciplines use J-Lab to turn academic concepts into tangible working prototypes.',
    link: null,
  },
  {
    title: 'Skill Development Cell (SDC)',
    description:
      'The SDC operates grietsdc.in as a TASK-authorized skill center offering industry-recognized certifications from Oracle, IBM, Microsoft, and Google. Programs are structured around current workforce demands and are integrated with the academic calendar to maximize student participation. The cell has enabled hundreds of students to earn globally recognized credentials alongside their engineering degrees.',
    link: 'https://grietsdc.in',
    linkLabel: 'grietsdc.in',
  },
  {
    title: 'IEEE Student Branch',
    description:
      'GRIET\'s IEEE Student Branch is consistently recognized as one of the most active branches in Telangana, hosting technical talks, hackathons, and international paper presentations throughout the year. The branch maintains its own portal at ieeegrietsb.com and regularly coordinates with IEEE Hyderabad Section for flagship events. Membership provides students access to IEEE\'s global research library and professional development network.',
    link: 'https://ieeegrietsb.com',
    linkLabel: 'ieeegrietsb.com',
  },
  {
    title: 'TEDx GRIET',
    description:
      'Since 2019, GRIET has hosted an annual TEDx event that brings inspiring speakers from entrepreneurship, science, social impact, and the arts to campus. TEDx GRIET is entirely student-organized under official TED licensing, giving the organizing committee hands-on experience in large-scale event production. The event draws an audience of hundreds and is streamed to a wider online community.',
    link: null,
  },
  {
    title: 'Robotics Club',
    description:
      'The GRIET Robotics Club fields competitive teams at national-level robotics competitions and conducts regular inter-collegiate challenges on campus. Club members gain practical experience in embedded systems, mechanical design, and autonomous programming through project-based team activities. The club regularly mentors junior students entering robotics for the first time.',
    link: null,
  },
  {
    title: 'GEM Magazine',
    description:
      'GEM (GRIET Engineering Magazine) is a bi-monthly student publication that has released 19 issues since its launch in the 2018–19 academic year. The magazine covers technical articles, campus news, alumni profiles, and student creative writing, and is entirely researched, written, and designed by students. GEM serves as a lasting record of campus intellectual life and a platform for student voices.',
    link: null,
  },
  {
    title: '360° Virtual Tour',
    description:
      'GRIET offers an immersive 360-degree virtual reality campus tour that lets prospective students and parents explore the facilities from anywhere in the world. The tour covers classrooms, laboratories, hostels, sports areas, and the library with photorealistic detail. It has become a key part of the admissions experience, helping outstation families make confident decisions.',
    link: null,
  },
  {
    title: 'Pragnya 90.4 FM',
    description:
      'Pragnya 90.4 FM is GRIET\'s campus internet radio station, accessible at pragnyafm.griet.ac.in, and is one of the few such student-run broadcast initiatives in the Hyderabad engineering ecosystem. Students produce and anchor programs covering technical topics, music, campus events, and career guidance. The station gives aspiring broadcasters, journalists, and communicators a real production environment to develop their skills.',
    link: 'https://pragnyafm.griet.ac.in',
    linkLabel: 'pragnyafm.griet.ac.in',
  },
];

const whatSetsApart = [
  'A holistic student development philosophy that balances rigorous academics with mental health support, gender equity, and community engagement — not as add-ons, but as core institutional commitments.',
  'Student-led organizations that operate with genuine institutional backing: GRIET\'s clubs, magazines, radio station, and IEEE branch function as real professional environments, not token activities.',
  'An innovation-to-IP pipeline where J-Lab prototypes can progress through the Technology & Innovation Cell to patent filing and incubation, making entrepreneurship an accessible path for undergraduates.',
  'Industry-certified skill development embedded within campus life, with TASK-authorized programs from global technology partners that students can complete without leaving the college.',
];

export default function DistinctivenessPage() {
  return (
    <AcademicsLayout title="Institute Distinctiveness">
      {/* Intro */}
      <section className="max-w-4xl mx-auto mb-10">
        <p className="text-base leading-relaxed" style={{ color: college.darkAccent }}>
          GRIET's standing as a premier engineering institution is not built on rankings alone. Over more than
          two decades, the college has developed a set of programs, cells, and student initiatives that are
          genuinely distinctive — many of them firsts in the Hyderabad engineering landscape. From a
          professionally staffed wellness center to a campus radio station and a TASK-certified skill hub,
          these features reflect a deliberate institutional culture that invests in the whole student.
        </p>
      </section>

      {/* 12-Card Grid */}
      <section className="mb-14">
        <h2
          className="font-hind font-bold text-xl md:text-2xl mb-6 uppercase tracking-wide"
          style={{ color: college.primaryColor }}
        >
          Our Distinctive Initiatives
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {distinctions.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-xl border p-5"
              style={{
                borderColor: 'rgba(91,16,39,0.12)',
                background: '#FDFAF7',
              }}
            >
              {/* Card number badge */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: college.primaryColor, color: '#fff' }}
                >
                  {idx + 1}
                </span>
                <h3
                  className="font-hind font-bold text-base leading-snug"
                  style={{ color: college.primaryColor }}
                >
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#444' }}>
                {item.description}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs font-semibold underline underline-offset-2"
                  style={{ color: college.accentColor }}
                >
                  {item.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* What Sets GRIET Apart */}
      <section
        className="rounded-2xl p-8 mb-10"
        style={{
          background: 'linear-gradient(135deg, #FAF4EE 0%, #F3E8D4 100%)',
          borderLeft: `4px solid ${college.primaryColor}`,
        }}
      >
        <h2
          className="font-hind font-bold text-xl md:text-2xl mb-5 uppercase tracking-wide"
          style={{ color: college.primaryColor }}
        >
          What Sets GRIET Apart
        </h2>
        <ul className="space-y-4">
          {whatSetsApart.map((point, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <span
                className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: college.accentColor }}
              />
              <p className="text-sm leading-relaxed" style={{ color: college.darkAccent }}>
                {point}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </AcademicsLayout>
  );
}
