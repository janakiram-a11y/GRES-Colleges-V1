import college from '../theme';
import CollegeLayout from '../CollegeLayout';
import { AcademicsBanner } from '../components/AcademicsLayout';
import { Link, useLocation } from 'react-router-dom';

// ── Section heading ─────────────────────────────────────────────────────────
function SectionHeading({ children }) {
  return (
    <h2
      className="font-hind font-bold text-xl mb-4 pb-2 inline-block"
      style={{ color: college.primaryColor, borderBottom: `2px solid ${college.accentColor}` }}
    >
      {children}
    </h2>
  );
}

// ── Left sidebar ─────────────────────────────────────────────────────────────
const SIDEBAR_LINKS = [
  { label: 'Research Projects', href: '#research-projects' },
  { label: 'Consultancy', href: '#consultancy' },
  { label: 'Patents', href: '#patents' },
  { label: 'Publications', href: '#publications' },
  { label: 'Stats – Journals & Books', href: '#publications' },
  { label: 'Book Chapters', href: '#publications' },
  { label: 'National and International Conferences', href: '#conferences' },
  { label: 'MOUs', href: '#mous' },
  { label: 'Innovation Awards', href: '#innovation' },
  { label: 'Ph.D. Awarded', href: '#phd' },
];

// ── Right ribbon links ────────────────────────────────────────────────────────
const RIGHT_RIBBON_LINKS = [
  { label: 'R & D Policy', href: '#rd-policy' },
  { label: 'Code of Ethics', href: '#rd-policy' },
];

function ResearchRightRibbon() {
  return (
    <aside className="w-full lg:w-44 flex-shrink-0 lg:sticky lg:top-[176px]">
      <div className="hidden lg:block rounded-lg border border-gray-200">
        <div
          className="rounded-t-lg px-5 py-3"
          style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)` }}
        >
          <span className="font-hind font-bold text-[0.9375rem] text-white tracking-wide">
            Policies
          </span>
        </div>
        <ul className="rounded-b-lg divide-y divide-gray-100 bg-white">
          {RIGHT_RIBBON_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-center gap-3 px-5 py-2.5 font-dm-sans text-[0.9375rem] font-medium transition-colors hover:bg-gray-50"
                style={{ color: '#374151' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C32033')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: college.accentColor }} />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile: horizontal scroll chips */}
      <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {RIGHT_RIBBON_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="flex-shrink-0 px-3 py-1.5 rounded-full border font-dm-sans text-[0.875rem] font-medium whitespace-nowrap transition-colors"
            style={{ borderColor: college.primaryColor, color: college.primaryColor, background: '#fff' }}
          >
            {label}
          </a>
        ))}
      </div>
    </aside>
  );
}

function ResearchSidebar() {
  return (
    <aside className="w-full lg:w-60 flex-shrink-0 lg:sticky lg:top-[176px]">
      {/* Mobile: horizontal scroll chip row */}
      <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {SIDEBAR_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="flex-shrink-0 px-3 py-1.5 rounded-full border font-dm-sans text-[0.875rem] font-medium whitespace-nowrap transition-colors"
            style={{ borderColor: college.primaryColor, color: college.primaryColor, background: '#fff' }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Desktop: fixed sidebar list */}
      <div className="hidden lg:block rounded-lg border border-gray-200">
        <div
          className="rounded-t-lg px-5 py-3"
          style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)` }}
        >
          <span className="font-hind font-bold text-[0.9375rem] text-white tracking-wide">
            Research Links
          </span>
        </div>
        <ul className="rounded-b-lg divide-y divide-gray-100 bg-white sidebar-scroll max-h-[calc(100vh-240px)] overflow-y-auto">
          {SIDEBAR_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-center gap-3 px-5 py-2.5 font-dm-sans text-[0.9375rem] font-medium transition-colors hover:bg-gray-50"
                style={{ color: '#374151' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C32033')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: college.accentColor }} />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

// ── Stats card ───────────────────────────────────────────────────────────────
function StatCard({ count, label, desc }) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-8 flex flex-col items-center text-center gap-2">
      <span className="font-hind font-bold text-3xl" style={{ color: '#F3DAB2' }}>{count}</span>
      <span className="font-hind font-semibold text-base text-white">{label}</span>
      {desc && <span className="font-dm-sans text-[0.875rem] text-white/70 leading-relaxed">{desc}</span>}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ResearchPage() {
  return (
    <CollegeLayout college={college}>
      <AcademicsBanner title="Research &amp; Consultancy" />

      <div className="page-pad">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ── Left Sidebar ─────────────────────────────────────────────── */}
          <ResearchSidebar />

          {/* ── Main Content ────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0 space-y-12 min-w-0">

            {/* GRES Overview */}
            <section>
              <div className="text-center mb-6 space-y-1">
                <h2
                  className="font-hind font-bold text-2xl md:text-3xl uppercase tracking-wide"
                  style={{ color: college.primaryColor }}
                >
                  Gokaraju Rangaraju Educational Society
                </h2>
                <p className="font-hind font-semibold text-base text-gray-700">
                  GRES was established in the year{' '}
                  <strong style={{ color: college.primaryColor }}>1992</strong>{' '}
                  as a{' '}
                  <strong className="text-green-700">NOT</strong>
                  {' – '}
                  <strong style={{ color: college.primaryColor }}>FOR</strong>
                  {' – '}
                  <strong className="text-red-600">PROFIT</strong>{' '}
                  Organization
                </p>
                <p className="font-hind font-semibold text-base text-gray-600">
                  by Visionary Entrepreneurs and Educationists
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                <p className="font-dm-sans text-base leading-relaxed text-gray-700">
                  Major focus areas of each program at GRIET is to be sensitive to Society and industry requirements
                  and problems, based on which the Research and Development program gets its impetus. The Institution
                  follows the dictum: <em>"Every project should yield a product."</em>
                </p>
              </div>
            </section>

            {/* Research Stats Strip */}
            <section
              className="rounded-xl py-10 px-6"
              style={{ backgroundColor: '#5B1027' }}
            >
              <p className="font-hind font-bold text-center uppercase tracking-widest mb-6"
                style={{ color: '#F3DAB2' }}>
                Research at a Glance
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { count: '50+', label: 'Funded Projects', desc: 'Backed by DST, AICTE & industry partners' },
                  { count: '1200+', label: 'Publications', desc: 'Scopus & IEEE indexed journals' },
                  { count: '85+', label: 'Patents Filed', desc: 'Strong innovation & IP generation' },
                  { count: '15', label: 'Centres of Excellence', desc: 'Dedicated advanced research labs' },
                ].map((s) => <StatCard key={s.label} {...s} />)}
              </div>
            </section>

            {/* Research Projects */}
            <section id="research-projects">
              <SectionHeading>Research Projects</SectionHeading>
              <p className="font-dm-sans text-base leading-relaxed text-gray-700 mb-4">
                GRIET has been active in sponsored research funded by prestigious agencies such as DST, AICTE,
                NRB, DRDO, and leading industry partners. The research projects cover domains including VLSI,
                Embedded Systems, AI &amp; ML, Power Systems, Materials Science, and more.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'DST-FIST Funded Projects', desc: 'High-impact projects in core engineering domains with Scanning Electron Microscope (SEM) facility worth ₹1.2 Cr.' },
                  { title: 'AICTE Sponsored Research', desc: 'Projects under AICTE Research Promotion Scheme and IDEA Lab initiatives.' },
                  { title: 'DRDO Collaborations', desc: 'Defence research collaborations in electronics, materials, and embedded systems.' },
                  { title: 'Industry Funded Projects', desc: 'Live projects with TCS, Infosys, Intel, and other leading companies supporting student and faculty research.' },
                ].map((p) => (
                  <div key={p.title}
                    className="p-5 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: college.primaryColor }} />
                      <h3 className="font-hind font-semibold text-base"
                        style={{ color: college.primaryColor }}>{p.title}</h3>
                    </div>
                    <p className="font-dm-sans text-[0.875rem] text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Consultancy */}
            <section id="consultancy">
              <SectionHeading>Consultancy</SectionHeading>
              <p className="font-dm-sans text-base leading-relaxed text-gray-700 mb-4">
                GRIET offers consultancy services to Government agencies, PSUs, and private industries through
                its various departments and the NABL-accredited GRMTL material testing laboratory. The consultancy
                activities span structural testing, material characterization, software solutions, and training programs.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-[0.9375rem] font-dm-sans border border-gray-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr style={{ backgroundColor: college.primaryColor }}>
                      {['Domain', 'Services Offered', 'Clients'].map((h) => (
                        <th key={h} className="text-left px-5 py-3 text-white font-hind font-semibold text-[0.875rem]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Material Testing (GRMTL)', 'Tensile, compression, hardness, SEM analysis', 'BHEL, DRDO, local industries'],
                      ['Software Development', 'Custom applications, mobile apps, data analytics', 'Government depts, SMEs'],
                      ['Training Programs', 'Technical & soft skills, certification training', 'Corporate clients, industries'],
                      ['Structural Analysis', 'Load testing, structural assessment, STAAD analysis', 'Construction companies, PSUs'],
                    ].map(([domain, services, clients], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-5 py-2.5 border-b border-gray-100 font-medium text-gray-800">{domain}</td>
                        <td className="px-5 py-2.5 border-b border-gray-100 text-gray-600">{services}</td>
                        <td className="px-5 py-2.5 border-b border-gray-100 text-gray-600">{clients}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Patents */}
            <section id="patents">
              <SectionHeading>Patents &amp; Intellectual Property</SectionHeading>
              <p className="font-dm-sans text-base leading-relaxed text-gray-700 mb-5">
                GRIET has filed 85+ patents across various engineering domains, reflecting the strong innovation
                culture fostered at the institution. The patents span AI, IoT, materials science, biomedical
                engineering, and sustainable technologies.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { count: '85+', label: 'Patents Filed' },
                  { count: '30+', label: 'Patents Granted' },
                  { count: '15+', label: 'Technology Transfers' },
                  { count: '5', label: 'Start-ups Incubated' },
                ].map((s) => (
                  <div key={s.label}
                    className="text-center p-5 rounded-lg border-l-4 bg-white border border-gray-100"
                    style={{ borderLeftColor: college.primaryColor }}>
                    <div className="font-hind font-bold text-2xl mb-1" style={{ color: college.primaryColor }}>
                      {s.count}
                    </div>
                    <div className="font-dm-sans text-[0.875rem] text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Publications */}
            <section id="publications">
              <SectionHeading>Publications</SectionHeading>
              <p className="font-dm-sans text-base leading-relaxed text-gray-700 mb-4">
                Faculty and research scholars at GRIET have published extensively in high-impact Scopus and
                SCI-indexed journals. The publications cover wide-ranging topics across engineering, sciences,
                and interdisciplinary domains.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Scopus Indexed Papers (2014–20)', count: '800+' },
                  { title: 'Scopus Indexed Papers (2021–22)', count: '300+' },
                  { title: 'Journals @ GRIET', count: '1200+' },
                ].map((p) => (
                  <div key={p.title}
                    className="flex flex-col items-center text-center p-5 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
                    <span className="font-hind font-bold text-3xl mb-2" style={{ color: college.primaryColor }}>
                      {p.count}
                    </span>
                    <span className="font-dm-sans text-[0.9375rem] text-gray-600">{p.title}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* MOUs */}
            <section id="mous">
              <SectionHeading>MOUs &amp; Collaborations</SectionHeading>
              <p className="font-dm-sans text-base leading-relaxed text-gray-700 mb-4">
                GRIET holds active Memoranda of Understanding with leading academic institutions and industries,
                enabling collaborative research, student exchanges, and joint projects.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {['IIT Hyderabad', 'NIT Warangal', 'Curtin University (Malaysia)', 'Infosys SpringBoard', 'TCS iON', 'Intel Corporation', 'IBM', 'Amazon Web Services', 'Microsoft Azure'].map((org) => (
                  <div key={org}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-lg border border-gray-200 bg-white font-dm-sans text-[0.9375rem] text-gray-700 hover:border-gray-300 transition-colors">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                    {org}
                  </div>
                ))}
              </div>
            </section>

            {/* Innovation */}
            <section id="innovation">
              <SectionHeading>Innovation Awards</SectionHeading>
              <p className="font-dm-sans text-base leading-relaxed text-gray-700 mb-4">
                GRIET has been honoured with several national and international innovation awards. The AICTE IDEA Lab
                and Incubation Centre nurture entrepreneurial endeavours, and GRIET has received recognition for its
                commitment to fostering innovation among students and faculty.
              </p>
              <div className="space-y-3">
                {[
                  'Received "Bharat Vidya Ratan Award" by International Business Council at New Delhi.',
                  'AICTE IDEA Lab – National recognition for innovation-driven education infrastructure.',
                  'GRIET recognised as SIRO (Scientific Industrial Research Organisation) by DSIR, Government of India.',
                  'MTML Centre of Excellence in Material Processing and Characterization.',
                  'DST-FIST Funded High Performance Computing and AI/ML Centre of Excellence.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-gray-100 bg-white">
                    <span className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: college.accentColor }} />
                    <span className="font-dm-sans text-[0.9375rem] leading-relaxed text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* PhD */}
            <section id="phd">
              <SectionHeading>PhD Programmes</SectionHeading>
              <p className="font-dm-sans text-base leading-relaxed text-gray-700">
                GRIET supports doctoral research through its Research &amp; Development centre recognised by
                JNTU Hyderabad. Faculty and external research scholars work on funded and self-financed PhD
                programmes spanning all engineering and science disciplines. GRES is also recognised as a
                Scientific Industrial Research Organisation (SIRO) by DSIR, enabling industry-collaborative
                doctoral research.
              </p>
            </section>

            {/* Conferences */}
            <section id="conferences">
              <SectionHeading>National &amp; International Conferences</SectionHeading>
              <p className="font-dm-sans text-base leading-relaxed text-gray-700 mb-4">
                GRIET regularly hosts and participates in high-impact national and international conferences.
                The International Conference on Material Processing and Characterization (ICMPC) hosted by
                GRIET is a renowned global conference in its domain.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'ICMPC', desc: 'International Conference on Material Processing and Characterization – a flagship annual conference hosted by GRIET.' },
                  { title: 'National Conferences', desc: 'Departmental national conferences on emerging technologies across all engineering disciplines.' },
                  { title: 'IEEE / Springer Publications', desc: 'Conference proceedings published in IEEE Xplore, Springer, and other indexed platforms.' },
                  { title: 'Student Conferences', desc: 'Annual student-level conferences encouraging undergraduate research publication.' },
                ].map((c) => (
                  <div key={c.title} className="p-5 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
                    <h3 className="font-hind font-semibold text-base mb-2" style={{ color: college.primaryColor }}>
                      {c.title}
                    </h3>
                    <p className="font-dm-sans text-[0.875rem] text-gray-600 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ── Right Ribbon ─────────────────────────────────────────────── */}
          <ResearchRightRibbon />

        </div>
      </div>

    </CollegeLayout>
  );
}
