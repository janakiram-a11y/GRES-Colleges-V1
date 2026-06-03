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

function MemberCard({ name, designation, photo, initials, large = false }) {
  return (
    <div className={`flex ${large ? 'flex-col items-center text-center' : 'items-center'} gap-4 bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow`}>
      {photo ? (
        <img
          src={photo}
          alt={name}
          className={`${large ? 'w-28 h-28' : 'w-16 h-16'} rounded-full object-cover flex-shrink-0 border-2`}
          style={{ borderColor: college.primaryColor }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextSibling.style.display = 'flex';
          }}
        />
      ) : null}
      <div
        className={`${large ? 'w-28 h-28' : 'w-16 h-16'} rounded-full items-center justify-center text-white font-hind font-bold ${large ? 'text-2xl' : 'text-base'} flex-shrink-0 ${photo ? 'hidden' : 'flex'}`}
        style={{ backgroundColor: college.primaryColor }}
      >
        {initials}
      </div>
      <div className={`min-w-0 ${large ? 'mt-1' : ''}`}>
        <p className={`font-hind font-bold ${large ? 'text-[15px]' : 'text-[13px]'} leading-snug`} style={{ color: college.primaryColor }}>{name}</p>
        <p className={`font-dm-sans ${large ? 'text-[12.5px]' : 'text-[11.5px]'} text-gray-500 mt-0.5 leading-tight`}>{designation}</p>
      </div>
    </div>
  );
}

const chairman = {
  sno: 1,
  name: 'Dr. G. Ganga Raju',
  qualification: 'B.Pharma., Ph.D.',
  designation: 'Chairman, Laila Group of Companies',
  category: 'Chairperson',
  photo: 'https://www.griet.ac.in/images/gbpics/Dr%20G%20Ganga%20Raju.jpg',
  initials: 'GR',
};

const otherMembers = [
  { sno: 2,  name: 'Sri G.V.K. Ranga Raju',          qualification: 'B.Tech.',    designation: 'MD, Delta Paper Mills',                              category: 'Trust / Society Members',       photo: 'https://www.griet.ac.in/images/gbpics/Dr%20G%20V%20K%20Ranga%20Raju.jpg',          initials: 'RR' },
  { sno: 3,  name: 'Sri G. Rama Raju',                qualification: 'B.Pharma.',  designation: 'Partner, Laila Impex',                               category: 'Trust / Society Members',       photo: 'https://www.griet.ac.in/images/gbpics/G%20Rama%20Raju.jpg',                        initials: 'RR' },
  { sno: 4,  name: 'Smt A. Vani',                     qualification: '–',          designation: 'Director, Ganges Valley School',                     category: 'Trust / Society Members',       photo: 'https://www.griet.ac.in/images/gbpics/Smt%20G%20Vani%20Raju.jpg',                  initials: 'AV' },
  { sno: 5,  name: 'Dr. Jandhyala N Murthy',          qualification: 'Ph.D.',      designation: 'Professor, Mechanical Engineering, GRIET',           category: 'Faculty Representatives',       photo: 'https://www.griet.ac.in/images/gbpics/Dr.%20Jandhyala%20N%20Murthy.jpg',           initials: 'JM' },
  { sno: 6,  name: 'Dr. Ch. Mallikarjuna Rao',        qualification: 'Ph.D.',      designation: 'Professor, CSE, GRIET',                              category: 'Faculty Representatives',       photo: 'https://www.griet.ac.in/2022/iqac%20committee/cmr.jpg',                             initials: 'MR' },
  { sno: 7,  name: 'Prof. V.S. Raju',                 qualification: 'Ph.D.',      designation: 'Ex-Director, IIT Delhi',                             category: 'External Experts',              photo: 'https://www.griet.ac.in/images/gbpics/Prof.%20V.S.%20Raju.jpg',                    initials: 'VR' },
  { sno: 8,  name: 'Sri V Rajanna',                   qualification: 'B.E.',       designation: 'Vice-President, Tata Consultancy Services',          category: 'External Experts',              photo: 'https://www.griet.ac.in/images/gbpics/V%20Rajana.jpg',                             initials: 'VR' },
  { sno: 9,  name: 'Prof. D N Reddy',                 qualification: 'Ph.D.',      designation: 'Ex-Vice Chancellor, JNTU Hyderabad',                 category: 'External Experts',              photo: 'https://www.griet.ac.in/2025/dnr.jpg',                                             initials: 'DR' },
  { sno: 10, name: 'Dr. C Krishna Mohan',             qualification: 'Ph.D.',      designation: 'Dean (R&D), IIT Hyderabad',                          category: 'External Experts',              photo: 'https://www.griet.ac.in/images/gbpics/C%20Krishna%20Mohan.jpeg',                   initials: 'KM' },
  { sno: 11, name: 'Dr. Sandeep Kumar Arya',          qualification: 'Ph.D.',      designation: 'UGC Nominee',                                        category: 'Statutory Nominees',            photo: 'https://www.griet.ac.in/images/gbpics/Dr.Sandeep%20Kumar%20Arya.jpeg',             initials: 'SA' },
  { sno: 12, name: 'State Government Representative', qualification: '–',          designation: 'Govt. of Telangana Nominee',                         category: 'Statutory Nominees',            photo: null,                                                                                initials: 'SG' },
  { sno: 13, name: 'Dr. K Venkateswara Rao',          qualification: 'Ph.D.',      designation: 'JNTUH Nominee',                                      category: 'Statutory Nominees',            photo: 'https://www.griet.ac.in/2025/venkateswar.jpg',                                     initials: 'VR' },
  { sno: 14, name: 'Dr. J Praveen',                   qualification: 'Ph.D.',      designation: 'Principal, GRIET',                                   category: 'Member Secretary (Ex-Officio)', photo: 'https://www.griet.ac.in/images/gbpics/Dr%20J%20Praveen.jpg',                       initials: 'JP' },
];

const categories = [
  {
    label: 'Chairperson',
    members: [chairman],
  },
  {
    label: 'Trust / Society Members',
    members: otherMembers.filter(m => m.category === 'Trust / Society Members'),
  },
  {
    label: 'Faculty Representatives',
    members: otherMembers.filter(m => m.category === 'Faculty Representatives'),
  },
  {
    label: 'External Experts',
    members: otherMembers.filter(m => m.category === 'External Experts'),
  },
  {
    label: 'Statutory Nominees',
    members: otherMembers.filter(m => m.category === 'Statutory Nominees'),
  },
  {
    label: 'Member Secretary (Ex-Officio)',
    members: otherMembers.filter(m => m.category === 'Member Secretary (Ex-Officio)'),
  },
];

const allTableMembers = [chairman, ...otherMembers];

export default function AdminGoverningBodyPage() {
  return (
    <AdministrationLayout title="Governing Body">
      <div className="space-y-10">

        <div>
          <SectionHeading>Governing Body 2024–25</SectionHeading>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 mb-8 max-w-2xl">
            The Governing Body is the apex body of the institution, responsible for overall academic, financial,
            and administrative governance of Gokaraju Rangaraju Institute of Engineering &amp; Technology.
          </p>
        </div>

        {/* Chairman – prominent card */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <CategoryBadge label="Chairperson" />
          </div>
          <div className="max-w-xs">
            <MemberCard
              name={chairman.name}
              designation={`${chairman.qualification} · ${chairman.designation}`}
              photo={chairman.photo}
              initials={chairman.initials}
              large
            />
          </div>
        </section>

        {/* All other members – photo grid */}
        <section>
          <h3 className="font-hind font-bold text-[16px] mb-4" style={{ color: college.primaryColor }}>Board Members</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherMembers.map((m) => (
              <MemberCard
                key={m.sno}
                name={m.name}
                designation={m.designation}
                photo={m.photo}
                initials={m.initials}
              />
            ))}
          </div>
        </section>

        {/* Category-grouped tables */}
        <section className="space-y-6">
          <h3 className="font-hind font-bold text-[16px]" style={{ color: college.primaryColor }}>Members by Category</h3>
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
                      <th className="px-4 py-2.5 text-white font-hind font-semibold text-[12px] w-16">Photo</th>
                      <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[12px]">Name</th>
                      <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[12px]">Qualification</th>
                      <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[12px]">Designation / Organisation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((m, i) => (
                      <tr key={m.sno} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-2.5 border-b border-gray-100 text-gray-500">{m.sno}</td>
                        <td className="px-4 py-2.5 border-b border-gray-100">
                          {m.photo ? (
                            <img
                              src={m.photo}
                              alt={m.name}
                              className="w-10 h-10 rounded-full object-cover border"
                              style={{ borderColor: college.primaryColor }}
                            />
                          ) : (
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-hind font-bold text-[12px]"
                              style={{ backgroundColor: college.primaryColor }}
                            >
                              {m.initials}
                            </div>
                          )}
                        </td>
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
        </section>

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
