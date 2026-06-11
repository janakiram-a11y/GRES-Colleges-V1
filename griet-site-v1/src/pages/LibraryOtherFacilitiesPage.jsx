import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const REPROGRAPHY = [
  { name: 'Xerox / Photocopying', desc: 'Photocopying service available for students and faculty.' },
  { name: 'Canon Scanner', desc: 'High-resolution scanning facility for documents and books.' },
  { name: 'Printing', desc: 'Printing facility available within the library premises.' },
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

export default function LibraryOtherFacilitiesPage() {
  return (
    <AcademicsLayout title="Library — Other Facilities">

      <section className="mb-10">
        <SectionLabel>Reprography Services</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {REPROGRAPHY.map(({ name, desc }) => (
            <div
              key={name}
              className="flex flex-col gap-2 p-5 rounded-xl border border-gray-200 bg-white"
            >
              <p className="font-hind font-bold text-base" style={{ color: college.primaryColor }}>{name}</p>
              <p className="font-dm-sans text-[12.5px] text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <SectionLabel>Additional Information</SectionLabel>
        <p className="font-dm-sans text-[13.5px] leading-relaxed text-gray-700">
          The library provides comprehensive reprography services to support academic and research activities.
          All services are available during regular library hours (8:00 AM – 8:00 PM on working days).
          Students and faculty are requested to bring their valid identity cards to avail these facilities.
        </p>
      </section>

    </AcademicsLayout>
  );
}
