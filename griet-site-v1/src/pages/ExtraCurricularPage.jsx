import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

/* ── Helpers ─────────────────────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <h2
        className="font-hind font-bold text-[16px] whitespace-nowrap"
        style={{ color: college.primaryColor }}
      >
        {children}
      </h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

function ClubCard({ name, desc, url, isExternal }) {
  const linkProps = isExternal
    ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
    : { href: url };

  return (
    <div className="p-4 rounded-xl border border-gray-200 bg-white flex flex-col gap-2">
      <p className="font-hind font-bold text-[13px]" style={{ color: college.primaryColor }}>
        {name}
      </p>
      <p className="font-dm-sans text-[12px] text-gray-600 leading-relaxed flex-1">{desc}</p>
      {url && (
        <a
          {...linkProps}
          className="inline-flex items-center gap-1 font-dm-sans text-[11.5px] font-semibold hover:underline mt-1"
          style={{ color: college.accentColor }}
        >
          Visit {isExternal && (
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          )}
        </a>
      )}
    </div>
  );
}

function SidebarDocLink({ label, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 px-4 py-3 border-b border-gray-100 last:border-b-0 transition-colors hover:bg-gray-50 group"
    >
      <svg
        className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
      <span className="font-dm-sans text-[12px] text-gray-700 group-hover:font-medium leading-snug">
        {label}
      </span>
    </a>
  );
}

/* ── Data ────────────────────────────────────────────────────────────── */
const TECHNICAL_CLUBS = [
  {
    name: 'IEEE Student Branch',
    desc: 'The largest technical club at GRIET, affiliated with the global IEEE network. Hosts workshops, conferences, and hackathons connecting students with the wider engineering community.',
    url: 'http://ieeegrietsb.com',
    isExternal: true,
  },
  {
    name: 'Robotics Club',
    desc: 'Hands-on robotics design, fabrication, and competition. Members participate in national robotics contests and build autonomous systems.',
    url: '/clubs/robotics',
    isExternal: false,
  },
  {
    name: 'Free Software Wing (FSF)',
    desc: 'Promotes free and open-source software culture on campus. Organises install fests, talks on GNU/Linux, and open-source contribution drives.',
    url: '/clubs/fsf',
    isExternal: false,
  },
  {
    name: 'X-Kernel (OS/Systems Club)',
    desc: 'Deep-dives into operating systems, low-level programming, and systems software. Members explore kernel development and computer architecture.',
    url: 'https://xkernal-kappa.vercel.app/',
    isExternal: true,
  },
  {
    name: 'Scientific Forestep',
    desc: 'GRIET\'s science club fostering curiosity through experiments, science fairs, and interdisciplinary projects that bridge engineering and pure sciences.',
    url: null,
    isExternal: false,
  },
];

const CULTURAL_CLUBS = [
  {
    name: 'GEM Magazine',
    desc: 'GRIET\'s student-run publication covering campus news, features, interviews, and creative writing. A platform for aspiring journalists and writers.',
    url: '/clubs/gem-magazine',
    isExternal: false,
  },
  {
    name: 'Flavours Club',
    desc: 'The culinary club of GRIET celebrating food culture through cook-offs, food festivals, and culinary workshops for students with a passion for cooking.',
    url: '/clubs/flavours',
    isExternal: false,
  },
  {
    name: 'Quizzicals',
    desc: 'GRIET\'s quiz club organising inter-college quizzes, general knowledge competitions, and training sessions for students who love trivia and lateral thinking.',
    url: '/clubs/quizzicals',
    isExternal: false,
  },
];

const SOCIAL_ACADEMIC_CLUBS = [
  {
    name: 'NSS',
    desc: 'National Service Scheme — community development, social awareness drives, blood donation camps, and village adoption programmes with 200+ enrolled volunteers.',
    url: '/nss',
    isExternal: false,
  },
  {
    name: 'ISTE Chapter',
    desc: 'Indian Society for Technical Education chapter at GRIET. Conducts faculty development programmes, student conventions, and technical workshops.',
    url: 'http://iste.griet.ac.in/',
    isExternal: true,
  },
  {
    name: 'CSI Chapter',
    desc: 'Computer Society of India chapter organising seminars, certifications, and industry interaction sessions for computing students.',
    url: 'http://csi.griet.ac.in/',
    isExternal: true,
  },
];

const SPORTS_CLUBS = [
  {
    name: 'Sports & Games Council',
    desc: 'Coordinates all sports activities at GRIET — cricket, basketball, volleyball, athletics, chess, and more. Represents the college at inter-collegiate and university-level meets.',
    url: '/sports',
    isExternal: false,
  },
];

const EVENTS_CLUBS = [
  {
    name: 'TEDx GRIET',
    desc: 'Annual independently organised TED event at GRIET featuring inspiring speakers from academia, industry, and social entrepreneurship. Past talks are archived on the GRIET website.',
    url: 'https://www.griet.ac.in',
    isExternal: true,
  },
  {
    name: 'G-Talks',
    desc: 'GRIET\'s in-house speaker series where accomplished alumni, industry leaders, and researchers share their journeys and insights with students.',
    url: null,
    isExternal: false,
  },
];

const SPECIAL_CLUBS = [
  {
    name: 'Pragnya 90.4 FM',
    desc: 'GRIET\'s campus radio station broadcasting at 90.4 MHz. Managed entirely by students — covering music, news, interviews, and educational programmes.',
    url: 'http://www.pragnyafm.griet.ac.in/',
    isExternal: true,
  },
  {
    name: 'RUEDO',
    desc: 'GRIET\'s student entrepreneurship and design forum nurturing innovative ideas, startup culture, and design thinking through workshops and competitions.',
    url: 'http://www.ruedo.griet.ac.in/',
    isExternal: true,
  },
];

const ANNUAL_EVENTS = [
  { title: 'Annual Day', timing: 'March', desc: 'The flagship annual celebration honouring academic achievers, cultural performers, and outstanding contributors to college life. Includes prize distributions and cultural performances.' },
  { title: 'Sports Meet', timing: 'December – January', desc: 'Inter-departmental and inter-collegiate sports competitions spanning cricket, basketball, volleyball, athletics, and indoor games across multiple days.' },
  { title: 'Technical Fest', timing: 'Academic year', desc: 'A multi-day technical extravaganza featuring paper presentations, project exhibitions, coding contests, robotics events, and industry expert talks.' },
  { title: 'Cultural Fest', timing: 'Academic year', desc: 'GRIET\'s vibrant cultural festival showcasing dance, music, drama, fine arts, literary events, and fashion shows with participation from colleges across Hyderabad.' },
  { title: 'Graduation Day', timing: 'Academic year', desc: 'Formal convocation ceremony celebrating the graduating batch, felicitating rank holders, and marking the transition from student life to professional careers.' },
];

const ECC_DOCS = [
  { label: 'ECC Meeting Minutes — August 2024', url: 'https://www.griet.ac.in/Extra_Curricular_Activities_Commiitte.php' },
  { label: 'DSA Minutes — May 2021', url: 'https://www.griet.ac.in/Extra_Curricular_Activities_Commiitte.php' },
];

/* ── Page ────────────────────────────────────────────────────────────── */
export default function ExtraCurricularPage() {
  const sidebar = (
    <>
      {/* Downloads */}
      <div className="rounded-xl border border-gray-200 overflow-hidden mb-4">
        <div className="px-4 py-3" style={{ backgroundColor: college.primaryColor }}>
          <p className="font-hind font-bold text-[13px] text-white">ECC Downloads</p>
        </div>
        <div className="bg-white">
          {ECC_DOCS.map(({ label, url }) => (
            <SidebarDocLink key={label} label={label} url={url} />
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="rounded-xl border border-gray-200 p-4 bg-white mb-4">
        <p className="font-hind font-bold text-[12.5px] mb-2" style={{ color: college.primaryColor }}>
          Contact ECC
        </p>
        <p className="font-dm-sans text-[11.5px] text-gray-600 mb-1 leading-relaxed">
          <strong>Dean of Student Affairs</strong><br />
          Extra Curricular Activities Committee
        </p>
        <a
          href="mailto:extracurricular@griet.ac.in"
          className="font-dm-sans text-[11.5px] font-semibold hover:underline"
          style={{ color: college.accentColor }}
        >
          extracurricular@griet.ac.in
        </a>
      </div>

      {/* Quick links to external club sites */}
      <div className="rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-4 py-3" style={{ backgroundColor: college.primaryColor }}>
          <p className="font-hind font-bold text-[13px] text-white">Club Websites</p>
        </div>
        <div className="bg-white divide-y divide-gray-100">
          {[
            { label: 'IEEE Student Branch', url: 'http://ieeegrietsb.com' },
            { label: 'X-Kernel Club', url: 'https://xkernal-kappa.vercel.app/' },
            { label: 'ISTE Chapter', url: 'http://iste.griet.ac.in/' },
            { label: 'CSI Chapter', url: 'http://csi.griet.ac.in/' },
            { label: 'Pragnya 90.4 FM', url: 'http://www.pragnyafm.griet.ac.in/' },
            { label: 'RUEDO', url: 'http://www.ruedo.griet.ac.in/' },
          ].map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 transition-colors hover:bg-gray-50 group"
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: college.accentColor }}
              />
              <span className="font-dm-sans text-[12px] text-gray-700 group-hover:font-medium leading-snug flex-1">
                {label}
              </span>
              <svg className="w-3 h-3 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <AcademicsLayout college={college} title="Extra Curricular Activities">
      <div className="page-pad">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── Main Content ─────────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* About */}
            <section className="mb-8">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
                  GRIET's vibrant extra-curricular ecosystem includes <strong>20+ student clubs</strong>, annual fests, sports meets, cultural events, and social service wings — all coordinated by the <strong>Extra Curricular Activities Committee (ECC)</strong>. The ECC ensures that every student finds a community, develops leadership skills, and experiences life beyond the classroom.
                </p>
              </div>
            </section>

            {/* Stats */}
            <section className="mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { stat: '20+', label: 'Student Clubs' },
                  { stat: '5+', label: 'Annual Events' },
                  { stat: '3000+', label: 'Active Members' },
                  { stat: '1997', label: 'Est. Year' },
                ].map(({ stat, label }) => (
                  <div key={label} className="p-3 rounded-xl border border-gray-200 bg-white text-center">
                    <p className="font-hind font-bold text-[20px] mb-0.5" style={{ color: college.primaryColor }}>{stat}</p>
                    <p className="font-dm-sans text-[11px] text-gray-500 uppercase tracking-wide leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Clubs */}
            <section className="mb-8">
              <SectionLabel>Technical Clubs</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TECHNICAL_CLUBS.map((club) => (
                  <ClubCard key={club.name} {...club} />
                ))}
              </div>
            </section>

            {/* Cultural / Creative Clubs */}
            <section className="mb-8">
              <SectionLabel>Cultural &amp; Creative Clubs</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CULTURAL_CLUBS.map((club) => (
                  <ClubCard key={club.name} {...club} />
                ))}
              </div>
            </section>

            {/* Social / Academic */}
            <section className="mb-8">
              <SectionLabel>Social &amp; Academic Chapters</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOCIAL_ACADEMIC_CLUBS.map((club) => (
                  <ClubCard key={club.name} {...club} />
                ))}
              </div>
            </section>

            {/* Sports */}
            <section className="mb-8">
              <SectionLabel>Sports &amp; Games</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SPORTS_CLUBS.map((club) => (
                  <ClubCard key={club.name} {...club} />
                ))}
              </div>
            </section>

            {/* Events / Flagship */}
            <section className="mb-8">
              <SectionLabel>Flagship Events &amp; Speaker Series</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EVENTS_CLUBS.map((club) => (
                  <ClubCard key={club.name} {...club} />
                ))}
              </div>
            </section>

            {/* Special Interest */}
            <section className="mb-8">
              <SectionLabel>Special Interest Platforms</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SPECIAL_CLUBS.map((club) => (
                  <ClubCard key={club.name} {...club} />
                ))}
              </div>
            </section>

            {/* Annual Events */}
            <section className="mb-8">
              <SectionLabel>Annual Events</SectionLabel>
              <div className="flex flex-col gap-3">
                {ANNUAL_EVENTS.map(({ title, timing, desc }) => (
                  <div key={title} className="p-4 rounded-xl border border-gray-200 bg-white flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="flex-shrink-0 sm:w-36">
                      <p className="font-hind font-bold text-[13px]" style={{ color: college.primaryColor }}>{title}</p>
                      <p
                        className="font-dm-sans text-[11px] font-semibold uppercase tracking-wide mt-0.5"
                        style={{ color: college.accentColor }}
                      >
                        {timing}
                      </p>
                    </div>
                    <p className="font-dm-sans text-[12.5px] text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact strip */}
            <section className="mb-4">
              <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1">
                  <p className="font-hind font-bold text-[13px] mb-0.5" style={{ color: college.primaryColor }}>
                    Extra Curricular Activities Committee
                  </p>
                  <p className="font-dm-sans text-[12px] text-gray-600">
                    Dean of Student Affairs, GRIET, Bachupally, Hyderabad – 500 090
                  </p>
                </div>
                <a
                  href="mailto:extracurricular@griet.ac.in"
                  className="font-hind font-bold text-[12.5px] hover:underline self-start sm:self-center"
                  style={{ color: college.accentColor }}
                >
                  extracurricular@griet.ac.in
                </a>
              </div>
            </section>

          </div>

          {/* ── Right Sidebar ─────────────────────────────────────── */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            {sidebar}
          </aside>

        </div>
      </div>
    </AcademicsLayout>
  );
}
