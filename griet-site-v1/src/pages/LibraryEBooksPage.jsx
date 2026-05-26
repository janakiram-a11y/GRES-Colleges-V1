import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const PLATFORMS = [
  {
    name: 'CBS E-Books',
    desc: 'Access CBS digital textbooks through the institutional login portal.',
    href: 'http://eduport-global.com/authenticate/login',
  },
  {
    name: 'McGraw Hill Express Library',
    desc: 'Browse and read 450+ McGraw Hill engineering reference texts online.',
    href: 'http://mcgrawhilleducation.pdn.ipublishcentral.com/',
  },
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

export default function LibraryEBooksPage() {
  return (
    <AcademicsLayout title="Library — E-Books">
      <section className="mb-10">
        <SectionLabel>E-Book Platforms</SectionLabel>
        <p className="font-dm-sans text-[13.5px] leading-relaxed text-gray-700 mb-6">
          GRIET Library provides access to the following digital e-book platforms for students and faculty.
          Use your institutional credentials to log in.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PLATFORMS.map(({ name, desc, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-transparent transition-all"
            >
              <p className="font-hind font-bold text-[15px]" style={{ color: college.primaryColor }}>{name}</p>
              <p className="font-dm-sans text-[12.5px] text-gray-500">{desc}</p>
              <span className="font-dm-sans text-[11px] mt-1" style={{ color: college.accentColor }}>
                Open portal →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <SectionLabel>Additional Resources</SectionLabel>
        <div className="flex flex-col gap-2 p-5 rounded-xl bg-gray-50 border border-gray-200">
          <a
            href="http://mcgrawhilleducation.pdn.ipublishcentral.com/bookshelf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm-sans text-[12.5px] font-medium hover:underline"
            style={{ color: college.primaryColor }}
          >
            McGraw Hill Bookshelf
          </a>
          <a
            href="https://www.dropbox.com/s/8z9al4tywp2j1n6/IPC_Reader.exe?dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm-sans text-[12.5px] font-medium hover:underline"
            style={{ color: college.primaryColor }}
          >
            E-Book Reader Download (IPC Reader)
          </a>
          <a
            href="https://www.griet.ac.in/2022/E%20Books%20Payment%20Receipts%20for%20GRIET.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm-sans text-[12.5px] font-medium hover:underline"
            style={{ color: college.primaryColor }}
          >
            E-Books Payment Receipts (PDF)
          </a>
        </div>
      </section>
    </AcademicsLayout>
  );
}
