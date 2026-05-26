import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const FEATURES = [
  'Circulation management — automated issue and return tracking',
  'Online Public Access Catalogue (OPAC) integration',
  'Digital resource access management',
  'Rare manuscript digital preservation',
  'Inter-library networking support',
  'User registration and gate entry records',
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

export default function LibraryAutomationPage() {
  return (
    <AcademicsLayout title="Library — Automation">

      <section className="mb-10">
        <SectionLabel>Library Automation System</SectionLabel>
        <p className="font-dm-sans text-[13.5px] leading-relaxed text-gray-700 mb-6">
          GRIET Library employs an in-house developed software built using Web, PHP, and MySQL technologies,
          currently operational in the circulation section. Ongoing efforts are underway to implement a
          fully integrated Online Public Access Catalogue (OPAC) for enhanced resource discovery.
        </p>

        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-hind font-bold text-[13px] mb-4" style={{ color: college.primaryColor }}>
            Key Features
          </p>
          <ul className="flex flex-col gap-2.5">
            {FEATURES.map((f, i) => (
              <li key={i} className="flex items-start gap-2 font-dm-sans text-[12.5px] text-gray-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <SectionLabel>OPAC Access</SectionLabel>
        <p className="font-dm-sans text-[13px] text-gray-600 mb-4">
          Access the Online Public Access Catalogue to search the library's holdings:
        </p>
        <a
          href="https://griet.bestbookbuddies.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-dm-sans font-semibold text-[13px] text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: college.primaryColor }}
        >
          Open Library Catalogue (OPAC)
        </a>
      </section>

    </AcademicsLayout>
  );
}
