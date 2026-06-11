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

const hods = [
  { sno: 1, name: 'Dr. B Sankara Babu',          dept: 'Computer Science and Engineering',                            shortDept: 'CSE',      photo: 'https://www.griet.ac.in/2023/sankar.jpg' },
  { sno: 2, name: 'Dr. K Jamal',                  dept: 'Electronics and Communication Engineering',                   shortDept: 'ECE',      photo: 'https://www.griet.ac.in/2025/jamal.jpeg' },
  { sno: 3, name: 'Dr. Y Jeevan Nagendra Kumar',  dept: 'Information Technology & CSIT',                               shortDept: 'IT/CSIT',  photo: 'https://www.griet.ac.in/2023/nagendra-1.jpg' },
  { sno: 4, name: 'Dr. G. Karuna',                dept: 'CSE – Artificial Intelligence and Machine Learning',          shortDept: 'CSE-AIML', photo: 'https://www.griet.ac.in/images/karuna.jpg' },
  { sno: 5, name: 'Dr. S Govinda Rao',            dept: 'CSE – Data Science & Computer Science and Business Systems',  shortDept: 'CSE-DS/CSBS', photo: 'https://www.griet.ac.in/images/govindrao.jpg' },
  { sno: 6, name: 'Dr. V Vijaya Rama Raju',       dept: 'Electrical and Electronics Engineering',                      shortDept: 'EEE',      photo: 'https://www.griet.ac.in/2023/vvrr.png' },
  { sno: 7, name: 'Dr. Anitha Lakshmi',           dept: 'Mechanical Engineering',                                      shortDept: 'ME',       photo: 'https://www.griet.ac.in/2023/anitha.jpg' },
  { sno: 8, name: 'Dr. T Srinivas',               dept: 'Civil Engineering',                                           shortDept: 'CE',       photo: 'https://www.griet.ac.in/2023/Deans%20Photos/IMG-20231026-WA0032.jpg' },
  { sno: 9, name: 'Dr. M Sridhar',                dept: 'Humanities and Sciences',                                     shortDept: 'H&S',      photo: 'https://www.griet.ac.in/2023/sridhar.jpg' },
];

export default function AdminHODsPage() {
  return (
    <AdministrationLayout title="HODs">
      <div className="space-y-10">

        <div>
          <SectionHeading>Heads of Departments</SectionHeading>
          <p className="font-dm-sans text-base leading-relaxed text-gray-600 mb-8 max-w-2xl">
            Each department at GRIET is led by a dedicated Head of Department who oversees academic programmes,
            faculty development, research activities, and departmental administration.
          </p>
        </div>

        {/* HOD photo cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {hods.map(({ sno, name, dept, shortDept, photo }) => (
            <div key={sno} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              {/* Accent bar */}
              <div className="h-1.5 w-full" style={{ backgroundColor: college.primaryColor }} />
              {/* Photo area */}
              <div className="flex flex-col items-center pt-7 pb-5 px-5">
                <div className="relative mb-4">
                  <div
                    className="w-24 h-24 rounded-full flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${college.primaryColor}22 0%, ${college.accentColor}22 100%)`, padding: '3px' }}
                  >
                    <img
                      src={photo}
                      alt={name}
                      className="w-full h-full rounded-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div
                      className="w-full h-full rounded-full items-center justify-center text-white font-display font-bold text-xl hidden"
                      style={{ backgroundColor: college.primaryColor }}
                    >
                      {name.charAt(name.lastIndexOf(' ') + 1)}
                    </div>
                  </div>
                </div>
                <p className="font-display font-bold text-[1rem] leading-snug text-center mb-1" style={{ color: college.primaryColor }}>{name}</p>
                <p className="font-body text-[0.8125rem] text-gray-500 leading-snug text-center mb-3">{dept}</p>
                <span
                  className="inline-block px-3 py-1 rounded-full font-display font-semibold text-[0.75rem] text-white tracking-wide"
                  style={{ backgroundColor: college.accentColor }}
                >
                  {shortDept}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <section>
          <h3 className="font-hind font-bold text-[16px] mb-4" style={{ color: college.primaryColor }}>Department Reference</h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-[600px] w-full text-[0.9375rem] font-dm-sans">
              <thead>
                <tr style={{ backgroundColor: college.primaryColor }}>
                  <th className="text-left px-4 py-3 text-white font-hind font-semibold text-[0.875rem] w-14 whitespace-nowrap">S.No</th>
                  <th className="text-left px-4 py-3 text-white font-hind font-semibold text-[0.875rem]">Name</th>
                  <th className="text-left px-4 py-3 text-white font-hind font-semibold text-[0.875rem]">Department</th>
                </tr>
              </thead>
              <tbody>
                {hods.map(({ sno, name, dept, shortDept }, i) => (
                  <tr key={sno} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-400 font-medium whitespace-nowrap">{sno}</td>
                    <td className="px-4 py-3 border-b border-gray-100 font-semibold text-gray-800 whitespace-nowrap">{name}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-600">
                      {dept}
                      <span className="ml-2 inline-block text-[10px] px-1.5 py-0.5 rounded font-hind font-semibold text-white" style={{ backgroundColor: college.accentColor }}>{shortDept}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </AdministrationLayout>
  );
}
