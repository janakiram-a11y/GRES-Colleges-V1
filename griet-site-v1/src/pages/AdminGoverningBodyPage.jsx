import AdministrationLayout from '../components/AdministrationLayout';
import college from '../theme';

function SectionHeading({ children }) {
  return (
    <h2
      className="font-display font-bold text-xl mb-5 pb-2 inline-block"
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
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="h-1.5 w-full" style={{ backgroundColor: college.primaryColor }} />
      <div className="flex flex-col items-center pt-7 pb-5 px-5">
        <div
          className="w-24 h-24 rounded-full mb-4 flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${college.primaryColor}22 0%, ${college.accentColor}22 100%)`, padding: '3px' }}
        >
          {photo ? (
            <img
              src={photo}
              alt={name}
              className="w-full h-full rounded-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div
            className={`w-full h-full rounded-full items-center justify-center text-white font-display font-bold text-xl ${photo ? 'hidden' : 'flex'}`}
            style={{ backgroundColor: college.primaryColor }}
          >
            {initials}
          </div>
        </div>
        <p className="font-display font-bold text-[1rem] leading-snug text-center mb-1" style={{ color: college.primaryColor }}>{name}</p>
        <p className="font-body text-[0.8125rem] text-gray-500 leading-snug text-center">{designation}</p>
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
  { sno: 2,  name: 'Sri G.V.K. Ranga Raju',          qualification: 'B.Tech.',    designation: 'Vice President, GRES',                               category: 'Trust / Society Members',       photo: 'https://www.griet.ac.in/images/gbpics/Dr%20G%20V%20K%20Ranga%20Raju.jpg',          initials: 'RR' },
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
          <p className="font-dm-sans text-base leading-relaxed text-gray-600 mb-8 max-w-2xl">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
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
                <table className="min-w-[600px] w-full text-[0.9375rem] font-dm-sans">
                  <thead>
                    <tr style={{ backgroundColor: college.primaryColor }}>
                      <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem] w-10 whitespace-nowrap">S.No</th>
                      <th className="px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem] min-w-[60px] w-16">Photo</th>
                      <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem]">Name</th>
                      <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem] whitespace-nowrap">Qualification</th>
                      <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem]">Designation / Organisation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((m, i) => (
                      <tr key={m.sno} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-2.5 border-b border-gray-100 text-gray-500 whitespace-nowrap">{m.sno}</td>
                        <td className="px-4 py-2.5 border-b border-gray-100 min-w-[60px] w-16">
                          {m.photo ? (
                            <img
                              src={m.photo}
                              alt={m.name}
                              className="w-10 h-10 rounded-full object-cover border"
                              style={{ borderColor: college.primaryColor }}
                            />
                          ) : (
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-hind font-bold text-[0.875rem]"
                              style={{ backgroundColor: college.primaryColor }}
                            >
                              {m.initials}
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-2.5 border-b border-gray-100 font-semibold text-gray-800 whitespace-nowrap">{m.name}</td>
                        <td className="px-4 py-2.5 border-b border-gray-100 text-gray-600 whitespace-nowrap">{m.qualification}</td>
                        <td className="px-4 py-2.5 border-b border-gray-100 text-gray-600">{m.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>


      </div>
    </AdministrationLayout>
  );
}
