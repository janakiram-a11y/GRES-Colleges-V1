import AdministrationLayout from '../components/AdministrationLayout';
import college from '../theme';

function SectionHeading({ children }) {
  return (
    <h2
      className="font-hind font-bold text-2xl mb-6 pb-2 inline-block"
      style={{ color: college.primaryColor, borderBottom: `2px solid ${college.accentColor}` }}
    >
      {children}
    </h2>
  );
}

/* Visual org chart built with divs — top-down hierarchy */
function OrgNode({ label, sublabel, highlight, children }) {
  return (
    <div className="flex flex-col items-center gap-0">
      <div
        className={`rounded-lg px-4 py-2.5 text-center border shadow-sm min-w-[140px] max-w-[220px] ${
          highlight ? 'text-white' : 'bg-white text-gray-800 border-gray-200'
        }`}
        style={highlight ? { backgroundColor: college.primaryColor, borderColor: college.primaryColor } : {}}
      >
        <p className={`font-hind font-semibold text-[12px] leading-snug ${highlight ? 'text-white' : ''}`}
          style={!highlight ? { color: college.primaryColor } : {}}>
          {label}
        </p>
        {sublabel && (
          <p className={`font-dm-sans text-[10px] mt-0.5 ${highlight ? 'text-white/80' : 'text-gray-500'}`}>
            {sublabel}
          </p>
        )}
      </div>
      {children && (
        <>
          <div className="w-px h-5 bg-gray-300" />
          <div className="relative w-full flex justify-center">
            {children}
          </div>
        </>
      )}
    </div>
  );
}

function Row({ items }) {
  return (
    <div className="relative flex gap-4 items-start flex-wrap justify-center">
      {items.length > 1 && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-gray-300"
          style={{ width: `calc(100% - 120px)` }}
        />
      )}
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="w-px h-4 bg-gray-300" />
          <OrgNode {...item} />
        </div>
      ))}
    </div>
  );
}

export default function AdminOrganizationChartPage() {
  return (
    <AdministrationLayout title="Organization Chart">
      <div className="space-y-8">

        <div>
          <SectionHeading>Organization Chart</SectionHeading>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 mb-6 max-w-2xl">
            The organizational hierarchy of Gokaraju Rangaraju Institute of Engineering &amp; Technology
            reflects its commitment to structured governance, academic leadership, and student-centric administration.
          </p>
        </div>

        {/* Org Chart */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[600px] flex flex-col items-center gap-0 py-2">

            {/* Level 1: Management */}
            <OrgNode label="Management / GRES" sublabel="Governing Body" highlight />

            <div className="w-px h-5 bg-gray-300" />

            {/* Level 2: Director */}
            <OrgNode label="Director" sublabel="Dr. Jandhyala N Murthy" />

            <div className="w-px h-5 bg-gray-300" />

            {/* Level 3: Principal */}
            <OrgNode label="Principal" sublabel="Dr. J Praveen" highlight />

            <div className="w-px h-5 bg-gray-300" />

            {/* Level 4: Academic Council / Governing Body */}
            <Row items={[
              { label: 'Academic Council', sublabel: 'Academic oversight' },
              { label: 'Finance Committee', sublabel: 'Financial governance' },
              { label: 'IQAC', sublabel: 'Quality assurance' },
            ]} />

            <div className="w-px h-5 bg-gray-300" />

            {/* Level 5: Deans */}
            <Row items={[
              { label: 'Deans (21)', sublabel: 'Academic & Admin portfolios' },
              { label: 'Controller of Exams', sublabel: 'Examinations' },
              { label: 'Board of Studies', sublabel: 'Curriculum (per dept)' },
            ]} />

            <div className="w-px h-5 bg-gray-300" />

            {/* Level 6: HODs */}
            <Row items={[
              { label: 'HoD – CSE', sublabel: '' },
              { label: 'HoD – ECE', sublabel: '' },
              { label: 'HoD – EEE', sublabel: '' },
              { label: 'HoD – ME', sublabel: '' },
              { label: 'HoD – CE', sublabel: '' },
              { label: 'HoD – IT', sublabel: '' },
              { label: 'HoD – H&S', sublabel: '' },
            ]} />

          </div>
        </div>

        {/* Download */}
        <section className="bg-[#F6F1F2] rounded-lg border border-gray-200 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-hind font-semibold text-[15px] mb-1" style={{ color: college.primaryColor }}>
              Download Full Organization Chart
            </p>
            <p className="font-dm-sans text-[13px] text-gray-500">
              Official organizational structure chart with all committees and cells (PDF).
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded font-hind font-semibold text-[13px] text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: college.primaryColor }}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download PDF
          </a>
        </section>

      </div>
    </AdministrationLayout>
  );
}
