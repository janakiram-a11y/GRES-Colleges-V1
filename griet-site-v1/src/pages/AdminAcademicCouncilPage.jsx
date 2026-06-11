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

const categories = [
  {
    label: 'Chairperson',
    members: [
      { sno: 1, name: 'Dr. J Praveen', designation: 'Principal, GRIET', role: 'Chairperson' },
    ],
  },
  {
    label: 'University Nominees',
    members: [
      { sno: 2, name: 'Dr. P Chandrasekhar Reddy', designation: 'Sr. Professor, ECE, JNTUH UCESTH' },
      { sno: 3, name: 'Dr. N. Venkata Ramana', designation: 'Sr. Professor, EEE, JNTUH UCESTH' },
      { sno: 4, name: 'Dr. M. Ajitha', designation: 'Professor, Pharmacy, JNTUH UCESTH' },
    ],
  },
  {
    label: 'External Experts',
    members: [
      { sno: 5, name: 'Dr. Kondepudi Lal Kishore', designation: 'Professor & Dean R&D, CVR College; Former VC JNTU Anantapur' },
      { sno: 6, name: 'Mr. Ramesh Paturi', designation: 'Lead, Business Acceleration Services, Microsoft' },
      { sno: 7, name: 'Mr. D Rajendra Prasad', designation: 'Technical VP, Bank of America' },
      { sno: 8, name: 'Ms. Jayanthi Kasarla', designation: 'Director, Applications Engineering, Synopsys' },
    ],
  },
  {
    label: 'Heads of Departments',
    members: [
      { sno: 9, name: 'Dr. V Vijaya Rama Raju', designation: 'HoD, Electrical and Electronics Engineering' },
      { sno: 10, name: 'Dr. Anitha Lakshmi', designation: 'HoD, Mechanical Engineering' },
      { sno: 11, name: 'Dr. K Jamal', designation: 'HoD, Electronics and Communication Engineering' },
      { sno: 12, name: 'Dr. G. Karuna', designation: 'HoD, CSE (AI & ML)' },
      { sno: 13, name: 'Dr. B Sankara Babu', designation: 'HoD, Computer Science and Engineering' },
      { sno: 14, name: 'Dr. Y Jeevan Nagendra Kumar', designation: 'HoD, Information Technology' },
      { sno: 15, name: 'Dr. T Srinivas', designation: 'HoD, Civil Engineering' },
      { sno: 16, name: 'Dr. M Sridhar', designation: 'HoD, Humanities and Sciences' },
    ],
  },
  {
    label: 'Senior Faculty',
    members: [
      { sno: 17, name: 'Dr. Jandhyala N Murthy', designation: 'Director, GRIET' },
      { sno: 18, name: 'Dr. Ch. Mallikarjuna Rao', designation: 'Controller of Examinations' },
      { sno: 19, name: 'Prof. P Gopala Krishna', designation: 'Dean – Assessment & Accreditation' },
      { sno: 20, name: 'Dr. C Lavanya', designation: 'Dean – IQAC' },
      { sno: 21, name: 'Dr. J Sridevi', designation: 'Dean – Finishing School' },
      { sno: 22, name: 'Dr. K Prasanna Lakshmi', designation: 'Dean – Academic Affairs (Member Secretary)' },
    ],
  },
];

export default function AdminAcademicCouncilPage() {
  return (
    <AdministrationLayout title="Academic Council">
      <div className="space-y-8">

        <div>
          <SectionHeading>Academic Council 2025–26</SectionHeading>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 mb-8 max-w-2xl">
            The Academic Council supervises the academic work of the institution and provides guidance on
            curricula, syllabi, evaluation methods, and new programme proposals. It is the apex academic body
            of GRIET.
          </p>
        </div>

        {categories.map(({ label, members }) => (
          <div key={label}>
            <h3
              className="font-hind font-semibold text-[14px] uppercase tracking-wide mb-3 pb-1.5 border-b"
              style={{ color: college.primaryColor, borderColor: college.accentColor }}
            >
              {label}
            </h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-[600px] w-full text-[13px] font-dm-sans">
                <thead>
                  <tr style={{ backgroundColor: college.primaryColor }}>
                    <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[12px] w-10 whitespace-nowrap">S.No</th>
                    <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[12px]">Name</th>
                    <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[12px]">Designation / Organisation</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((m, i) => (
                    <tr key={m.sno} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2.5 border-b border-gray-100 text-gray-500 whitespace-nowrap">{m.sno}</td>
                      <td className="px-4 py-2.5 border-b border-gray-100 font-semibold text-gray-800 whitespace-nowrap">
                        {m.name}
                        {m.role && (
                          <span
                            className="ml-2 text-[10px] px-1.5 py-0.5 rounded font-hind font-bold text-white"
                            style={{ backgroundColor: college.accentColor }}
                          >
                            {m.role}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2.5 border-b border-gray-100 text-gray-600">{m.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* Functions */}
        <section className="bg-[#F6F1F2] rounded-lg p-6 border border-gray-200">
          <h3 className="font-hind font-bold text-[16px] mb-4" style={{ color: college.primaryColor }}>
            Key Functions
          </h3>
          <ul className="space-y-2">
            {[
              'Supervise the academic activities of the institution',
              'Approve regulations and syllabi recommended by the Board of Studies',
              'Propose new academic programmes and policies',
              'Evaluate and update the curriculum to align with industry and national standards',
              'Oversee evaluation methods, examinations, and results',
              'Recommend conferral of honorary degrees and distinctions',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 font-dm-sans text-[13px] text-gray-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                {item}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </AdministrationLayout>
  );
}
