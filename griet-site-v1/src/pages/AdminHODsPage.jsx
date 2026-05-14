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
  { sno: 1, name: 'Dr. B Sankara Babu',          dept: 'Computer Science and Engineering (CSE)',                   shortDept: 'CSE' },
  { sno: 2, name: 'Dr. K Jamal',                 dept: 'Electronics and Communication Engineering (ECE)',          shortDept: 'ECE' },
  { sno: 3, name: 'Dr. Y Jeevan Nagendra Kumar', dept: 'Information Technology (IT) & Computer Science and IT (CSIT)', shortDept: 'IT / CSIT' },
  { sno: 4, name: 'Dr. G. Karuna',               dept: 'CSE – Artificial Intelligence and Machine Learning (AIML)', shortDept: 'CSE-AIML' },
  { sno: 5, name: 'Dr. S Govinda Rao',           dept: 'CSE – Data Science (DS) & Computer Science and Business Systems (CSBS)', shortDept: 'CSE-DS / CSBS' },
  { sno: 6, name: 'Dr. V Vijaya Rama Raju',      dept: 'Electrical and Electronics Engineering (EEE)',             shortDept: 'EEE' },
  { sno: 7, name: 'Dr. Anitha Lakshmi',          dept: 'Mechanical Engineering (ME)',                              shortDept: 'ME' },
  { sno: 8, name: 'Dr. T Srinivas',              dept: 'Civil Engineering (CE)',                                   shortDept: 'CE' },
  { sno: 9, name: 'Dr. M Sridhar',               dept: 'Humanities and Sciences (H & S)',                         shortDept: 'H&S' },
];

export default function AdminHODsPage() {
  return (
    <AdministrationLayout title="HODs">
      <div className="space-y-8">

        <div>
          <SectionHeading>Heads of Departments</SectionHeading>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 mb-8 max-w-2xl">
            Each department at GRIET is led by a dedicated Head of Department who oversees academic programmes,
            faculty development, research activities, and departmental administration.
          </p>
        </div>

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
                    <span
                      className="ml-2 inline-block text-[10px] px-1.5 py-0.5 rounded font-hind font-semibold text-white"
                      style={{ backgroundColor: college.accentColor }}
                    >
                      {shortDept}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Department Cards */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Department Overview
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hods.map(({ shortDept, name, dept }) => (
              <div
                key={shortDept}
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-hind font-bold text-[11px] text-white mb-3"
                  style={{ backgroundColor: college.primaryColor }}
                >
                  {shortDept.split('/')[0].trim()}
                </div>
                <p className="font-hind font-semibold text-[13px] leading-snug mb-1" style={{ color: college.primaryColor }}>
                  {dept.split('(')[0].trim()}
                </p>
                <p className="font-dm-sans text-[12px] text-gray-500">HoD: {name}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </AdministrationLayout>
  );
}
