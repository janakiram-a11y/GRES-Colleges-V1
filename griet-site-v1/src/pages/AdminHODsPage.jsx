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
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 mb-8 max-w-2xl">
            Each department at GRIET is led by a dedicated Head of Department who oversees academic programmes,
            faculty development, research activities, and departmental administration.
          </p>
        </div>

        {/* HOD photo cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hods.map(({ sno, name, dept, shortDept, photo }) => (
            <div key={sno} className="flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
              <img
                src={photo}
                alt={name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2"
                style={{ borderColor: college.primaryColor }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div
                className="w-16 h-16 rounded-full items-center justify-center text-white font-hind font-bold text-lg flex-shrink-0 hidden"
                style={{ backgroundColor: college.primaryColor }}
              >
                {shortDept[0]}
              </div>
              <div className="min-w-0">
                <p className="font-hind font-bold text-[13px] leading-snug" style={{ color: college.primaryColor }}>{name}</p>
                <p className="font-dm-sans text-[11.5px] text-gray-500 mt-0.5 leading-tight">{dept}</p>
                <span className="inline-block mt-1.5 text-[10px] px-1.5 py-0.5 rounded font-hind font-semibold text-white" style={{ backgroundColor: college.accentColor }}>
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
            <table className="w-full text-[13px] font-dm-sans">
              <thead>
                <tr style={{ backgroundColor: college.primaryColor }}>
                  <th className="text-left px-4 py-3 text-white font-hind font-semibold text-[12px] w-14">S.No</th>
                  <th className="text-left px-4 py-3 text-white font-hind font-semibold text-[12px]">Name</th>
                  <th className="text-left px-4 py-3 text-white font-hind font-semibold text-[12px]">Department</th>
                </tr>
              </thead>
              <tbody>
                {hods.map(({ sno, name, dept, shortDept }, i) => (
                  <tr key={sno} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-400 font-medium">{sno}</td>
                    <td className="px-4 py-3 border-b border-gray-100 font-semibold text-gray-800">{name}</td>
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
