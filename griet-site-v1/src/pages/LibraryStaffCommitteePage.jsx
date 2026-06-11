import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const STAFF = [
  { sno: 1, name: 'CH Chandrasekhar',       qualification: 'M.A, M.L.I.Sc, B.Ed.', designation: 'Librarian',                  experience: '22 years' },
  { sno: 2, name: 'G. Geetha Padma Kumari', qualification: 'B.Com., B.L.I.Sc.',     designation: 'Library Assistant',           experience: '5 years'  },
  { sno: 3, name: 'N. Lakshmi Prasana',     qualification: 'B.Com., DCA',            designation: 'Digital Library Assistant',   experience: '15 years' },
  { sno: 4, name: 'K. Maheswari',           qualification: 'B.Sc',                  designation: 'Library Assistant',           experience: '1 year'   },
];

const COMMITTEE_FACULTY = [
  { dept: 'Civil',                       member: 'Mr. A. Prakash, Assistant Professor' },
  { dept: 'ECE',                         member: 'Mr. K.N.V. Khasim, Assistant Professor' },
  { dept: 'EEE',                         member: 'Dr. B. Pakkiraiah, Associate Professor' },
  { dept: 'CSE',                         member: 'Mrs. A Sowmya, Assistant Professor' },
  { dept: 'IT',                          member: 'Mrs. G. Vani Pushpavathi, Assistant Professor' },
  { dept: 'Mechanical Engineering',      member: 'Mr. Sunil Kumar Reddy, Assistant Professor' },
  { dept: 'Basic Sciences & Humanities', member: 'Mrs. Y. Gayathri, Assistant Professor' },
  { dept: 'DS & CSBS',                   member: 'Mrs. K Hareesha, Assistant Professor' },
  { dept: 'AIML',                        member: 'Ms. M Asha Priya, Assistant Professor' },
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

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-[12.5px] font-dm-sans border-collapse">
        <thead>
          <tr style={{ backgroundColor: `${college.primaryColor}15` }}>
            {headers.map((h) => (
              <th key={h} className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-gray-700 border-b border-gray-100 last:border-0">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LibraryStaffCommitteePage() {
  return (
    <AcademicsLayout title="Library — Staff & Committee">

      <section className="mb-10">
        <SectionLabel>Library Staff</SectionLabel>
        <Table
          headers={['S.No', 'Name', 'Qualification', 'Designation', 'Experience']}
          rows={STAFF.map(({ sno, name, qualification, designation, experience }) => [
            sno, name, qualification, designation, experience,
          ])}
        />
      </section>

      <section className="mb-10">
        <SectionLabel>Library Committee</SectionLabel>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 p-5 rounded-xl border border-gray-200 bg-white">
            <p className="font-hind font-bold text-[0.875rem] uppercase tracking-widest text-gray-400 mb-1">Chairperson</p>
            <p className="font-dm-sans font-semibold text-[13.5px] text-gray-800">Dr. J Praveen</p>
            <p className="font-dm-sans text-[0.875rem] text-gray-500">Principal, GRIET</p>
          </div>
          <div className="flex-1 p-5 rounded-xl border border-gray-200 bg-white">
            <p className="font-hind font-bold text-[0.875rem] uppercase tracking-widest text-gray-400 mb-1">Coordinator</p>
            <p className="font-dm-sans font-semibold text-[13.5px] text-gray-800">Dr. G R Sakthidharan</p>
            <p className="font-dm-sans text-[0.875rem] text-gray-500">Professor, CSE</p>
          </div>
        </div>
        <Table
          headers={['Department', 'Faculty Member']}
          rows={COMMITTEE_FACULTY.map(({ dept, member }) => [dept, member])}
        />
      </section>

    </AcademicsLayout>
  );
}
