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

function CategoryBadge({ label }) {
  return (
    <span
      className="inline-block px-2.5 py-0.5 rounded text-[11px] font-hind font-semibold text-white"
      style={{ backgroundColor: college.accentColor }}
    >
      {label}
    </span>
  );
}

const categories = [
  {
    label: 'Chairperson',
    members: [
      {
        sno: 1,
        name: 'Dr. G. Ganga Raju',
        qualification: 'B.Pharma., Ph.D.',
        designation: 'Chairman, Laila Group of Companies',
        category: 'Chairperson',
      },
    ],
  },
  {
    label: 'Trust / Society Members',
    members: [
      { sno: 2, name: 'Sri G.V.K. Ranga Raju', qualification: 'B.Tech.', designation: 'MD, Delta Paper Mills' },
      { sno: 3, name: 'Sri G. Rama Raju', qualification: 'B.Pharma.', designation: 'Partner, Laila Impex' },
      { sno: 4, name: 'Smt A. Vani', qualification: '–', designation: 'Director, Ganges Valley School' },
    ],
  },
  {
    label: 'Faculty Representatives',
    members: [
      { sno: 5, name: 'Dr. Jandhyala N Murthy', qualification: 'Ph.D.', designation: 'Professor, Mechanical Engineering, GRIET' },
      { sno: 6, name: 'Dr. Ch. Mallikarjuna Rao', qualification: 'Ph.D.', designation: 'Professor, CSE, GRIET' },
    ],
  },
  {
    label: 'External Experts',
    members: [
      { sno: 7, name: 'Prof. V.S. Raju', qualification: 'Ph.D.', designation: 'Ex-Director, IIT Delhi' },
      { sno: 8, name: 'Sri V Rajanna', qualification: 'B.E.', designation: 'Vice-President, Tata Consultancy Services' },
      { sno: 9, name: 'Prof. D N Reddy', qualification: 'Ph.D.', designation: 'Ex-Vice Chancellor, JNTU Hyderabad' },
      { sno: 10, name: 'Dr. C Krishna Mohan', qualification: 'Ph.D.', designation: 'Dean (R&D), IIT Hyderabad' },
    ],
  },
  {
    label: 'Statutory Nominees',
    members: [
      { sno: 11, name: 'Dr. Sandeep Kumar Arya', qualification: 'Ph.D.', designation: 'UGC Nominee' },
      { sno: 12, name: 'State Government Representative', qualification: '–', designation: 'Govt. of Telangana Nominee' },
      { sno: 13, name: 'Dr. K Venkateswara Rao', qualification: 'Ph.D.', designation: 'JNTUH Nominee' },
    ],
  },
  {
    label: 'Member Secretary (Ex-Officio)',
    members: [
      { sno: 14, name: 'Dr. J Praveen', qualification: 'Ph.D.', designation: 'Principal, GRIET' },
    ],
  },
];

export default function AdminGoverningBodyPage() {
  return (
    <AdministrationLayout title="Governing Body">
      <div className="space-y-8">

        <div>
          <SectionHeading>Governing Body 2024–25</SectionHeading>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 mb-8 max-w-2xl">
            The Governing Body is the apex body of the institution, responsible for overall academic, financial,
            and administrative governance of Gokaraju Rangaraju Institute of Engineering &amp; Technology.
          </p>
        </div>

        {categories.map(({ label, members }) => (
          <div key={label}>
            <div className="flex items-center gap-3 mb-3">
              <CategoryBadge label={label} />
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-[13px] font-dm-sans">
                <thead>
                  <tr style={{ backgroundColor: college.primaryColor }}>
                    <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[12px] w-10">S.No</th>
                    <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[12px]">Name</th>
                    <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[12px]">Qualification</th>
                    <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[12px]">Designation / Organisation</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((m, i) => (
                    <tr key={m.sno} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2.5 border-b border-gray-100 text-gray-500">{m.sno}</td>
                      <td className="px-4 py-2.5 border-b border-gray-100 font-semibold text-gray-800">{m.name}</td>
                      <td className="px-4 py-2.5 border-b border-gray-100 text-gray-600">{m.qualification}</td>
                      <td className="px-4 py-2.5 border-b border-gray-100 text-gray-600">{m.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* Meeting Minutes */}
        <section>
          <SectionHeading>Meeting Minutes</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'GB Meeting Minutes – 2023', href: '#' },
              { label: 'GB Meeting Minutes – 2022', href: '#' },
              { label: 'GB Meeting Minutes – 2021', href: '#' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 px-5 py-3.5 rounded-lg border border-gray-200 bg-white hover:shadow-sm transition-shadow font-dm-sans text-[13px] font-semibold"
                style={{ color: college.primaryColor }}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0" style={{ color: college.accentColor }}>
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                {label}
              </a>
            ))}
          </div>
        </section>

      </div>
    </AdministrationLayout>
  );
}
