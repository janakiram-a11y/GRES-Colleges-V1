import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const SUBSCRIBED = [
  { name: 'IEEE ASPP – Transactions & Magazines', detail: '169 journals + backfiles to 2007 · Electrical Engineering, CS, Electronics', href: 'http://ieeexplore.ieee.org' },
  { name: 'ASCE Digital Library', detail: '35 journals + backfiles to 1983 · Civil Engineering', href: 'http://ascelibrary.org' },
  { name: 'ASME Digital Library', detail: '28 journals + backfiles to 2000 · Mechanical Engineering', href: 'http://asmedigitalcollection.asme.org' },
  { name: 'J-GATE Engineering & Technology', detail: '1,763+ journals · 51M+ articles indexed from 47,000+ journals', href: 'http://jgateplus.com' },
  { name: 'DELNET (Developing Library Network)', detail: 'Resource sharing among 900+ member institutions', href: 'http://delnet.nic.in' },
  { name: 'ScienceDirect (Elsevier)', detail: '2,500+ journals · 33,000+ book titles · CS, Engineering, Life Sciences', href: 'https://www.sciencedirect.com/' },
  { name: 'E-Shodh Sindhu N-List', detail: 'National Library and Information Services Infrastructure for education', href: 'https://nlist.inflibnet.ac.in/' },
  { name: 'Rashtriya e-Pustakalaya', detail: 'National Digital Library of India', href: 'https://ndl.education.gov.in/home' },
];

const OPEN_ACCESS = [
  { name: 'National Digital Library of India', href: 'https://ndl.iitk.ac.in/' },
  { name: 'Swayam', href: 'https://swayam.gov.in/' },
  { name: 'Project Gutenberg', href: 'https://www.gutenberg.org/' },
  { name: 'MIT OpenCourseWare', href: 'https://ocw.mit.edu/' },
  { name: 'Khan Academy', href: 'https://www.khanacademy.org/' },
  { name: 'arXiv (Physics, Maths, CS Preprints)', href: 'https://arxiv.org/' },
  { name: 'Directory of Open Access Journals (DOAJ)', href: 'https://doaj.org/' },
];

const THESIS_DATABASES = [
  { name: 'Shodhganga', href: 'http://shodhganga.inflibnet.ac.in' },
  { name: 'Global ETD Search', href: 'http://www.theses.org/' },
  { name: 'Open Access Theses & Dissertations (OATD)', href: 'http://oatd.org/' },
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

function ResourceRow({ name, detail, href }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-3 border-b border-gray-100 last:border-0">
      <div>
        <p className="font-dm-sans font-semibold text-[13px] text-gray-800">{name}</p>
        <p className="font-dm-sans text-[11.5px] text-gray-400 mt-0.5">{detail}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-dm-sans text-[12px] font-semibold whitespace-nowrap hover:underline flex-shrink-0"
        style={{ color: college.accentColor }}
      >
        Access →
      </a>
    </div>
  );
}

function LinkList({ items }) {
  return (
    <div className="flex flex-col gap-1 p-5 rounded-xl bg-gray-50 border border-gray-200">
      {items.map(({ name, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-dm-sans text-[12.5px] font-medium py-0.5 hover:underline"
          style={{ color: college.primaryColor }}
        >
          {name}
        </a>
      ))}
    </div>
  );
}

export default function LibraryEResourcesPage() {
  return (
    <AcademicsLayout title="Library — E-Resources">

      <section className="mb-10">
        <SectionLabel>Subscribed E-Resources</SectionLabel>
        <div className="rounded-xl border border-gray-200 bg-white divide-y divide-gray-100 px-5">
          {SUBSCRIBED.map((r) => <ResourceRow key={r.name} {...r} />)}
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Open Access Resources</SectionLabel>
        <LinkList items={OPEN_ACCESS} />
      </section>

      <section className="mb-10">
        <SectionLabel>Thesis Databases</SectionLabel>
        <LinkList items={THESIS_DATABASES} />
      </section>

      <section className="mb-6 pt-4 border-t border-gray-200">
        <SectionLabel>Contact Librarian</SectionLabel>
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 inline-flex flex-col gap-1">
          <p className="font-dm-sans font-semibold text-[13px] text-gray-800">P.V. Satya Narayana Raju</p>
          <p className="font-dm-sans text-[12.5px] text-gray-500">Phone: 9494044666</p>
          <a
            href="mailto:library@griet.ac.in"
            className="font-dm-sans text-[12.5px] hover:underline"
            style={{ color: college.primaryColor }}
          >
            library@griet.ac.in
          </a>
        </div>
      </section>

    </AcademicsLayout>
  );
}
