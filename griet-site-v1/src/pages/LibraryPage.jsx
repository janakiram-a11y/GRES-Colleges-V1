import { Link } from 'react-router-dom';
import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const NEW_ARRIVALS = [
  { title: 'The Singularity Is Nearer', author: 'Ray Kurzweil' },
  { title: 'AI Rising', author: 'Leslie & Kenneth Kull' },
  { title: 'AI Snake Oil', author: 'Arvind Narayanan & Sayash Kapoor' },
  { title: 'StatQuest Guide to Neural Networks and AI', author: 'Josh Starmer' },
  { title: 'Co-Intelligence', author: 'Ethan Mollick' },
  { title: 'Genius Makers', author: 'Cade Metz' },
  { title: 'Quantum Supremacy', author: 'Michio Kaku' },
  { title: 'Human Compatible: AI and the Problem of Control', author: 'Stuart Russell' },
  { title: 'Artificial Intelligence: A Guide for Thinking Humans', author: 'Melanie Mitchell' },
  { title: '2062: The World That AI Made', author: 'Toby Walsh' },
  { title: 'Cryptography and Network Security', author: '' },
  { title: 'Data Mining and Knowledge Discovery Handbook', author: '' },
  { title: 'Internet of Things', author: '' },
  { title: 'Principles of Corporate Finance', author: '' },
  { title: 'Cryptography Theory and Practice', author: '' },
  { title: 'An Advanced Approach to Data Interpretation', author: 'Dr. R.S. Aggarwal' },
];

const DIGITAL_RESOURCES = [
  {
    label: 'OPAC',
    sub: 'Online Public Access Catalog',
    href: 'https://griet.bestbookbuddies.com',
    internal: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    label: 'eBooks',
    sub: 'Digital book collection',
    href: '/academics/library/ebooks',
    internal: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    label: 'eResources',
    sub: 'Online databases & journals',
    href: '/academics/library/eresources',
    internal: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: 'Remote Access',
    sub: 'Access resources from anywhere',
    href: 'https://griet.knimbus.com/user#/home',
    internal: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

// internal: true  → React Router <Link>
// internal: false → <a target="_blank">
const LIBRARY_LINKS = [
  [
    { label: 'Library MoM 2025-26',       href: 'https://www.griet.ac.in/2025/Lib%20Comm%20Meeting.pdf',       internal: false },
    { label: 'Library MoM 2023-24',       href: 'https://www.griet.ac.in/2023/Library%20MoM%20Library%20Committee%20Meeting%20Year%202023-24.pdf', internal: false },
    { label: 'Staff and Committee',        href: '/academics/library/staff-committee', internal: true },
    { label: 'Rules and Regulations',      href: '/academics/library/rules',           internal: true },
    { label: 'Support Facilities',         href: '/academics/library/other-facilities', internal: true },
  ],
  [
    { label: 'Printed Journals',         href: 'https://www.griet.ac.in/2024/Printed%20Library%202023-24.pdf',            internal: false },
    { label: 'Printed Textbooks',        href: 'https://www.griet.ac.in/2024/Printed%20textBooks%20bills%202023-24.pdf',  internal: false },
    { label: 'E-Resources',              href: '/academics/library/eresources',          internal: true },
    { label: 'E-resources Document',     href: '/academics/library/eresources-document', internal: true },
    { label: 'E-Books',                  href: '/academics/library/ebooks',              internal: true },
    { label: 'Rare Books & Manuscripts', href: '/academics/library/rare-books',          internal: true },
  ],
  [
    { label: 'Online Databases',               href: '/academics/library/online-databases',    internal: true },
    { label: 'Automation',                     href: '/academics/library/automation',           internal: true },
    { label: 'Inter-Library Network',          href: '/academics/library/inter-library-network', internal: true },
    { label: 'Usage Statistics - E Resources', href: '/academics/library/usage-statistics',    internal: true },
    { label: 'Users Data',                     href: 'https://www.griet.ac.in/2023/Gate%20Register%20on%2031st%20March%2C2023.pdf', internal: false },
    { label: 'Library Catalogue',             href: 'https://griet.bestbookbuddies.com',       internal: false },
  ],
  [
    { label: 'Books Invoices', href: 'https://www.griet.ac.in/2023/Books%20Payments%20Receipts%20July%202022-June%202023.pdf', internal: false },
    { label: 'Print Journals', href: 'https://www.griet.ac.in/2023/Print%20Journals%20(National%20and%20International)%20Payment%20Receipt%202022-23.pdf', internal: false },
    { label: 'Remote Access',  href: 'https://griet.knimbus.com/user#/home', internal: false },
  ],
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>
        {children}
      </h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

function BookCard({ title, author }) {
  return (
    <div
      className="group flex flex-col justify-between p-4 rounded-lg border border-gray-200 bg-white hover:border-transparent hover:shadow-md transition-all"
      style={{ minHeight: 100 }}
    >
      <p className="font-dm-sans font-semibold text-[0.875rem] leading-snug text-gray-800 mb-2 group-hover:text-[color:var(--p)]"
        style={{ '--p': college.primaryColor }}>
        {title}
      </p>
      {author && (
        <p className="font-dm-sans text-[11px] text-gray-400 mt-auto">{author}</p>
      )}
    </div>
  );
}

function ResourceCard({ label, sub, icon, href, internal: isInternal }) {
  const cls = "flex flex-col items-center justify-center text-center gap-3 p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-transparent transition-all";
  const inner = (
    <>
      <span style={{ color: college.primaryColor }}>{icon}</span>
      <div>
        <p className="font-hind font-bold text-base" style={{ color: college.primaryColor }}>{label}</p>
        <p className="font-dm-sans text-[11px] text-gray-400 mt-0.5">{sub}</p>
      </div>
    </>
  );
  if (isInternal) {
    return <Link to={href} className={cls}>{inner}</Link>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  );
}

function LibraryLink({ label, href, internal: isInternal }) {
  const cls = "flex items-center gap-2 font-dm-sans text-[12.5px] font-medium py-1 hover:underline";
  const icon = (
    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
    </svg>
  );
  if (isInternal) {
    return (
      <Link to={href} className={cls} style={{ color: college.primaryColor }}>
        {icon}{label}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={{ color: college.primaryColor }}>
      {icon}{label}
    </a>
  );
}

export default function LibraryPage() {
  return (
    <AcademicsLayout title="Library">

      {/* ── New Arrivals ── */}
      <section className="mb-12">
        <SectionLabel>✦ New Arrivals</SectionLabel>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {NEW_ARRIVALS.map((book, i) => (
            <BookCard key={i} {...book} />
          ))}
        </div>
      </section>

      {/* ── About + Timings ── */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-6">

          {/* Description */}
          <div className="flex-1 min-w-0">
            <SectionLabel>About the Library</SectionLabel>
            <p className="font-dm-sans text-[13.5px] leading-relaxed text-gray-700">
              GRIET Library and Information Centre supports teaching, learning and research activities.
              It consists of a central library and department libraries. The central library stores
              resources for all departments while department libraries store subject-specific resources.
              The library is kept open round the year with a library committee that forms an interface
              between the academic community and library staff.
            </p>

            {/* e-Pustakalaya */}
            <a
              href="https://ndl.education.gov.in/home"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200 w-fit hover:shadow-md hover:border-transparent transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6 flex-shrink-0" style={{ color: college.primaryColor }}>
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              <span className="font-dm-sans font-semibold text-[0.9375rem] text-gray-700">Rashtriya e-Pustakalaya</span>
            </a>
          </div>

          {/* Timings */}
          <div className="w-full md:w-72 flex-shrink-0">
            <SectionLabel>Library Timings</SectionLabel>
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div
                className="px-5 py-3 flex items-center gap-2"
                style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)` }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-4 h-4">
                  <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                </svg>
                <span className="font-hind font-bold text-[0.9375rem] text-white">Open Hours</span>
              </div>
              {[
                { day: 'Working Days', time: '8:00 am – 8:00 pm' },
                { day: 'Holidays', time: '10:00 am – 3:00 pm' },
              ].map(({ day, time }, i) => (
                <div
                  key={day}
                  className="flex items-center justify-between px-5 py-4"
                  style={{ borderTop: i > 0 ? '1px solid #f3f4f6' : 'none' }}
                >
                  <span className="font-dm-sans text-[0.9375rem] font-semibold text-gray-700">{day}</span>
                  <span className="font-hind font-bold text-[0.9375rem]" style={{ color: college.primaryColor }}>{time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Digital Resources ── */}
      <section className="mb-12">
        <SectionLabel>Digital Resources</SectionLabel>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {DIGITAL_RESOURCES.map((r) => (
            <ResourceCard key={r.label} {...r} />
          ))}
        </div>
      </section>

      {/* ── Library Resource Links ── */}
      <section className="mb-10">
        <SectionLabel>Library Resources</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-1 p-6 rounded-xl bg-gray-50 border border-gray-200">
          {LIBRARY_LINKS.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-0.5">
              {col.map(({ label, href, internal }) => (
                <LibraryLink key={label} label={label} href={href} internal={internal} />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── AICTE ── */}
      <div className="text-center pt-4 border-t border-gray-200">
        <a
          href="https://www.griet.ac.in/images2/AICTE_rec_books.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-dm-sans text-[0.9375rem] font-medium underline hover:opacity-75"
          style={{ color: college.primaryColor }}
        >
          AICTE Recommended List of Suggested Books of Indian Authors &amp; Publishers
        </a>
      </div>

    </AcademicsLayout>
  );
}
