import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const SERVICES = [
  'Inter-library loan and document delivery via courier',
  'Access to union catalogues compiled across member institutions',
  'Online systems providing access to 50 lakh+ records',
  'Resource sharing among 900+ member institutions',
  'Computerized services and collection development support',
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

export default function LibraryInterLibraryNetworkPage() {
  return (
    <AcademicsLayout title="Library — Inter-Library Network">

      <section className="mb-10">
        <SectionLabel>DELNET — Developing Library Network</SectionLabel>
        <p className="font-dm-sans text-[13.5px] leading-relaxed text-gray-700 mb-6">
          GRIET is a member of DELNET (Developing Library Network), a network of over{' '}
          <strong>900 institutions</strong> providing access to more than{' '}
          <strong>50 lakh records</strong> through online systems. DELNET actively compiles union
          catalogues of resources available across member libraries, enabling efficient resource
          sharing and knowledge access.
        </p>

        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 mb-6">
          <p className="font-hind font-bold text-[0.9375rem] mb-4" style={{ color: college.primaryColor }}>
            Services Offered
          </p>
          <ul className="flex flex-col gap-2.5">
            {SERVICES.map((s, i) => (
              <li key={i} className="flex items-start gap-2 font-dm-sans text-[12.5px] text-gray-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <a
          href="http://delnet.nic.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-dm-sans font-semibold text-[0.9375rem] hover:underline"
          style={{ color: college.accentColor }}
        >
          Visit DELNET Website →
        </a>
      </section>

    </AcademicsLayout>
  );
}
