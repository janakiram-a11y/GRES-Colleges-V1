import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

/* ── Sidebar helpers ─────────────────────────────────────────────────── */
function SidebarBlock({ title, children }) {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden mb-4">
      <div className="px-4 py-3" style={{ backgroundColor: college.primaryColor }}>
        <p className="font-hind font-bold text-[0.9375rem] text-white">{title}</p>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}

function SidebarLink({ label, url, isExternal = false }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 px-4 py-2.5 border-b border-gray-100 last:border-b-0 transition-colors hover:bg-gray-50 group"
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors"
        style={{ backgroundColor: college.accentColor }}
      />
      <span className="font-dm-sans text-[0.875rem] text-gray-700 group-hover:font-medium leading-snug flex-1">
        {label}
      </span>
      {isExternal && (
        <svg className="w-3 h-3 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )}
    </a>
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
      <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
      <span className="font-dm-sans text-[0.875rem] text-gray-700 group-hover:font-medium leading-snug">{label}</span>
    </a>
  );
}

/* ── Section heading ─────────────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <h2 className="font-hind font-bold text-[16px] whitespace-nowrap" style={{ color: college.primaryColor }}>
        {children}
      </h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

/* ── Data ────────────────────────────────────────────────────────────── */
const FOUR_FREEDOMS = [
  {
    number: '0',
    title: 'Freedom to Run',
    desc: 'The freedom to run the program as you wish, for any purpose.',
  },
  {
    number: '1',
    title: 'Freedom to Study',
    desc: 'The freedom to study how the program works and change it to make it do what you wish. Access to the source code is a precondition.',
  },
  {
    number: '2',
    title: 'Freedom to Redistribute',
    desc: 'The freedom to redistribute copies so you can help others in your community.',
  },
  {
    number: '3',
    title: 'Freedom to Improve',
    desc: 'The freedom to distribute copies of your modified versions to others. This lets the whole community benefit from your changes.',
  },
];

const ACTIVITIES = [
  {
    title: 'Spoken Tutorial Programs',
    desc: 'IIT Bombay Spoken Tutorial Project — self-learning courses in C, C++, Python, Java, Linux, LaTeX, LibreOffice, GIMP, Scilab, PHP, and MySQL. Students learn at their own pace with audio-video tutorials.',
  },
  {
    title: 'Install Fests',
    desc: 'Campus-wide Linux installation drives helping students install GNU/Linux distributions such as Ubuntu, Fedora, and Debian on their personal machines.',
  },
  {
    title: 'FOSS Workshops',
    desc: 'Hands-on workshops covering Git, GitHub, open-source contribution workflows, and popular FOSS tools used in industry and academia.',
  },
  {
    title: 'Hackathons',
    desc: 'Open-source hackathons focusing on contributing to real upstream projects — filing issues, submitting patches, and collaborating with global developer communities.',
  },
  {
    title: 'Awareness Sessions',
    desc: 'Talks and panel discussions on digital rights, online privacy, open-source licensing (GPL, MIT, Apache), and the importance of software freedom.',
  },
  {
    title: 'Project Development',
    desc: 'Developing open-source tools and utilities for campus use — from internal dashboards to academic utilities — released under free licenses for community benefit.',
  },
];

const ACTIVITY_REPORTS = [
  { label: '2025–26 Activity Report', url: 'https://www.griet.ac.in/fsf.php' },
  { label: '2024–25 Activity Report', url: 'https://www.griet.ac.in/fsf.php' },
  { label: '2023–24 Activity Report', url: 'https://www.griet.ac.in/fsf.php' },
  { label: '2022–23 Activity Report', url: 'https://www.griet.ac.in/fsf.php' },
  { label: '2021–22 Activity Report', url: 'https://www.griet.ac.in/fsf.php' },
  { label: '2020–21 Activity Report', url: 'https://www.griet.ac.in/fsf.php' },
];

/* ── Page ────────────────────────────────────────────────────────────── */
export default function FSFPage() {
  const sidebar = (
    <>
      {/* Activity Reports */}
      <SidebarBlock title="Activity Reports">
        {ACTIVITY_REPORTS.map(({ label, url }) => (
          <SidebarDocLink key={label} label={label} url={url} />
        ))}
      </SidebarBlock>

      {/* External Resources */}
      <SidebarBlock title="External Resources">
        <SidebarLink label="Spoken Tutorial — IIT Bombay" url="https://spoken-tutorial.org" isExternal />
        <SidebarLink label="Free Software Foundation (FSF)" url="https://www.fsf.org" isExternal />
        <SidebarLink label="GNU Project" url="https://www.gnu.org" isExternal />
        <SidebarLink label="FSF @ GRIET — Official Page" url="https://www.griet.ac.in/fsf.php" isExternal />
      </SidebarBlock>

      {/* Contact */}
      <div className="rounded-xl border border-gray-200 p-4 bg-white">
        <p className="font-hind font-bold text-[12.5px] mb-1" style={{ color: college.primaryColor }}>Contact</p>
        <p className="font-dm-sans text-[11.5px] text-gray-600 mb-2 leading-relaxed">
          Wing Coordinator: <strong>Dr. Ravikiran K</strong>
          <br />IT Department
        </p>
        <a
          href="mailto:freeswing@griet.ac.in"
          className="inline-flex items-center gap-1.5 font-hind font-bold text-[0.875rem] hover:underline"
          style={{ color: college.accentColor }}
        >
          freeswing@griet.ac.in
        </a>
      </div>
    </>
  );

  return (
    <AcademicsLayout college={college} title="Free Software Wing">
      <div className="page-pad">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── Main Content ─────────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* About */}
            <section className="mb-8">
              <SectionLabel>About the Free Software Wing</SectionLabel>
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                <p className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed mb-3">
                  The <strong>Free Software Wing (FSF / FOSS Club)</strong> at GRIET promotes the philosophy and practice of
                  Free and Open Source Software (FOSS), GNU/Linux, and open technologies among students and faculty.
                  The wing is part of the global FOSS movement inspired by <strong>Richard Stallman's Free Software Foundation</strong>.
                </p>
                <p className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed mb-3">
                  The club encourages students to use, study, share, and improve free software — fostering a culture of
                  openness, collaboration, and digital freedom on campus.
                </p>
                <p className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed">
                  <strong>Coordinator:</strong> Dr. Ravikiran K, Department of Information Technology, GRIET.
                </p>
              </div>
            </section>

            {/* FOSS Philosophy */}
            <section className="mb-8">
              <SectionLabel>FOSS Philosophy — The Four Freedoms</SectionLabel>
              <p className="font-dm-sans text-[12.5px] text-gray-600 leading-relaxed mb-4">
                The Free Software Foundation defines free software by four essential freedoms that every user must have:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FOUR_FREEDOMS.map(({ number, title, desc }) => (
                  <div key={number} className="p-4 rounded-xl border border-gray-200 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center font-hind font-bold text-[11px] text-white flex-shrink-0"
                        style={{ backgroundColor: college.primaryColor }}
                      >
                        {number}
                      </span>
                      <p className="font-hind font-bold text-[0.9375rem]" style={{ color: college.primaryColor }}>
                        {title}
                      </p>
                    </div>
                    <p className="font-dm-sans text-[0.875rem] text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Activities */}
            <section className="mb-8">
              <SectionLabel>Key Activities</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ACTIVITIES.map(({ title, desc }) => (
                  <div key={title} className="p-4 rounded-xl border border-gray-200 bg-white">
                    <p className="font-hind font-bold text-[0.9375rem] mb-1" style={{ color: college.primaryColor }}>
                      {title}
                    </p>
                    <p className="font-dm-sans text-[0.875rem] text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* IIT Bombay Partnership */}
            <section className="mb-8">
              <SectionLabel>Spoken Tutorial Partnership — IIT Bombay</SectionLabel>
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                <p className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed mb-3">
                  GRIET's Free Software Wing is an active participant in the <strong>IIT Bombay Spoken Tutorial Project</strong>,
                  a national initiative under the National Mission on Education through ICT (NMEICT), funded by the Ministry of
                  Education, Government of India.
                </p>
                <p className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed mb-4">
                  Students complete self-paced audio-video courses on FOSS tools and appear for online tests to earn
                  <strong> certificates co-issued by IIT Bombay</strong>. These certificates are recognized nationally and
                  add value to student portfolios.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { stat: '1,000+', label: 'Course completions / year' },
                    { stat: '12+', label: 'Technology tracks offered' },
                    { stat: 'IIT Bombay', label: 'Certificate issuing partner' },
                  ].map(({ stat, label }) => (
                    <div key={label} className="p-3 rounded-xl border border-gray-200 bg-white text-center">
                      <p className="font-hind font-bold text-[18px] mb-0.5" style={{ color: college.primaryColor }}>{stat}</p>
                      <p className="font-dm-sans text-[11px] text-gray-500 uppercase tracking-wide leading-tight">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="mb-4">
              <SectionLabel>Resources &amp; Contact</SectionLabel>
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-gray-50 border border-gray-200">
                <div className="flex items-start gap-3 font-dm-sans text-[12.5px] text-gray-700">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                  <span>
                    Wing email:{' '}
                    <a href="mailto:freeswing@griet.ac.in" className="font-semibold hover:underline" style={{ color: college.accentColor }}>
                      freeswing@griet.ac.in
                    </a>
                  </span>
                </div>
                <div className="flex items-start gap-3 font-dm-sans text-[12.5px] text-gray-700">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                  <span>
                    IIT Bombay Spoken Tutorial:{' '}
                    <a href="https://spoken-tutorial.org" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: college.accentColor }}>
                      spoken-tutorial.org
                    </a>
                  </span>
                </div>
                <div className="flex items-start gap-3 font-dm-sans text-[12.5px] text-gray-700">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                  <span>
                    Free Software Foundation:{' '}
                    <a href="https://www.fsf.org" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: college.accentColor }}>
                      fsf.org
                    </a>
                  </span>
                </div>
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
