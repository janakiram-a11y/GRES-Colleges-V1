import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const industryPartners = [
  {
    name: 'Oracle',
    program: 'Oracle Certified Professional',
    certification: 'OCP Java SE Developer',
  },
  {
    name: 'IBM',
    program: 'IBM Big Data Analytics',
    certification: 'IBM Certified Data Engineer',
  },
  {
    name: 'Google',
    program: 'Google Cloud Fundamentals',
    certification: 'Google Associate Cloud Engineer',
  },
  {
    name: 'Microsoft',
    program: 'Microsoft Technology Associate',
    certification: 'MTA Certification',
  },
  {
    name: 'Autodesk',
    program: 'Autodesk CAD/CAM Design',
    certification: 'Autodesk Certified User',
  },
  {
    name: 'SAP',
    program: 'SAP S/4HANA Business Suite',
    certification: 'SAP Certified Associate',
  },
  {
    name: 'Red Hat',
    program: 'Red Hat Enterprise Linux',
    certification: 'RHCSA / RHCE',
  },
  {
    name: 'Cisco',
    program: 'Networking Essentials',
    certification: 'Cisco CCNA',
  },
];

const academicPartners = [
  {
    name: 'IIIT Hyderabad',
    program: 'Advanced Computing & AI',
    details: 'Joint research and skill certification programs in AI/ML and data science.',
  },
  {
    name: 'NIT Warangal',
    program: 'Core Engineering Skills',
    details: 'Collaborative programs in mechanical, civil and electrical engineering domains.',
  },
  {
    name: 'IIT Hyderabad',
    program: 'Technology & Innovation',
    details: 'Mentorship-driven programs covering emerging tech and entrepreneurship.',
  },
  {
    name: 'BITS Pilani',
    program: 'Industry-Integrated Learning',
    details: 'Work-integrated learning programs and industry certifications.',
  },
];

const programs = [
  {
    name: 'Oracle Java Programming',
    duration: '3 Months',
    certification: 'Oracle Certified Professional (OCP)',
  },
  {
    name: 'IBM Big Data Analytics',
    duration: '4 Months',
    certification: 'IBM Certified Data Engineer',
  },
  {
    name: 'Google Cloud Fundamentals',
    duration: '2 Months',
    certification: 'Google Associate Cloud Engineer',
  },
  {
    name: 'Microsoft Technology Associate (MTA)',
    duration: '3 Months',
    certification: 'MTA Certification',
  },
  {
    name: 'Autodesk CAD/CAM',
    duration: '3 Months',
    certification: 'Autodesk Certified User',
  },
  {
    name: 'SAP S/4HANA',
    duration: '4 Months',
    certification: 'SAP Certified Associate',
  },
  {
    name: 'AI/ML with Python',
    duration: '4 Months',
    certification: 'Industry-Recognized AI/ML Certificate',
  },
  {
    name: 'Cloud Computing Essentials',
    duration: '2 Months',
    certification: 'Cloud Practitioner Certificate',
  },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2
        className="font-hind font-bold text-[17px] whitespace-nowrap"
        style={{ color: college.primaryColor }}
      >
        {children}
      </h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function TASKPage() {
  return (
    <AcademicsLayout title="TASK — Skill & Knowledge Programs">
      <div className="space-y-10">

        {/* About TASK */}
        <section>
          <SectionLabel>About TASK</SectionLabel>
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-3">
              <strong className="font-hind font-bold" style={{ color: college.primaryColor }}>
                Telangana Academy for Skill and Knowledge (TASK)
              </strong>{' '}
              is an initiative of the Government of Telangana established to enhance the
              employability of students from engineering and other technical institutions across
              the state. TASK operates as a nodal agency that partners with leading global
              technology companies and premier academic institutions to offer industry-relevant
              certification programs.
            </p>
            <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-3">
              <strong>GRIET is an authorized TASK partner institution</strong>, enabling students
              to access world-class skill development programs directly on campus. These programs
              are carefully curated to bridge the gap between academic knowledge and industry
              requirements, ensuring that graduates are job-ready from day one.
            </p>
            <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
              Through TASK, GRIET students benefit from hands-on training, industry-recognized
              certifications, and mentorship from experienced professionals — all designed to
              complement their core B.Tech curriculum and strengthen their career prospects in a
              competitive global market.
            </p>
          </div>
        </section>

        {/* Industry Partners */}
        <section>
          <SectionLabel>Industry Partners</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industryPartners.map((partner) => (
              <div
                key={partner.name}
                className="p-4 rounded-xl border border-gray-200 bg-white"
              >
                <h3
                  className="font-hind font-bold text-[13px] mb-1"
                  style={{ color: college.primaryColor }}
                >
                  {partner.name}
                </h3>
                <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-1">
                  {partner.program}
                </p>
                <p className="font-dm-sans text-[12px] text-gray-500 leading-relaxed">
                  Certification: {partner.certification}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Institution Partners */}
        <section>
          <SectionLabel>Academic Institution Partners</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {academicPartners.map((partner) => (
              <div
                key={partner.name}
                className="p-4 rounded-xl border border-gray-200 bg-white"
              >
                <h3
                  className="font-hind font-bold text-[13px] mb-1"
                  style={{ color: college.primaryColor }}
                >
                  {partner.name}
                </h3>
                <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-1 font-semibold">
                  {partner.program}
                </p>
                <p className="font-dm-sans text-[12px] text-gray-500 leading-relaxed">
                  {partner.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Programs Offered */}
        <section>
          <SectionLabel>Programs Offered</SectionLabel>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr style={{ backgroundColor: college.primaryColor }}>
                  <th className="font-hind font-bold text-[13px] text-white px-4 py-3">
                    Program Name
                  </th>
                  <th className="font-hind font-bold text-[13px] text-white px-4 py-3">
                    Duration
                  </th>
                  <th className="font-hind font-bold text-[13px] text-white px-4 py-3">
                    Certification Awarded
                  </th>
                </tr>
              </thead>
              <tbody>
                {programs.map((prog, idx) => (
                  <tr
                    key={prog.name}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="font-dm-sans text-[13px] text-gray-700 px-4 py-3 border-t border-gray-100">
                      {prog.name}
                    </td>
                    <td className="font-dm-sans text-[13px] text-gray-700 px-4 py-3 border-t border-gray-100 whitespace-nowrap">
                      {prog.duration}
                    </td>
                    <td className="font-dm-sans text-[13px] text-gray-700 px-4 py-3 border-t border-gray-100">
                      {prog.certification}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Eligibility */}
        <section>
          <SectionLabel>Eligibility</SectionLabel>
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-2">
              TASK programs at GRIET are open to all registered B.Tech students from{' '}
              <strong>2nd year onwards</strong> across all branches of engineering.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
                Students must be currently enrolled in a B.Tech program at GRIET.
              </li>
              <li className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
                No prior certification is required to enroll in foundation-level programs.
              </li>
              <li className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
                Advanced programs may have specific prerequisites detailed at the time of
                registration.
              </li>
              <li className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
                Students are encouraged to pursue programs aligned with their branch and
                career interests.
              </li>
            </ul>
          </div>
        </section>

        {/* Registration */}
        <section>
          <SectionLabel>Registration</SectionLabel>
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-3">
              Students can register for TASK programs through the following channels:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
                <strong>Student Portal:</strong> Log in to the GRIET student portal and navigate
                to the TASK section to view available programs and complete your registration
                online.
              </li>
              <li className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
                <strong>TASK Coordinator:</strong> Visit or contact the TASK Coordinator at
                GRIET directly for guidance, program recommendations, and offline registration
                assistance.
              </li>
              <li className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
                <strong>Notice Board:</strong> Keep an eye on the departmental notice boards and
                official GRIET communications for registration deadlines and batch schedules.
              </li>
            </ul>
            <p className="font-dm-sans text-[13px] text-gray-500 leading-relaxed">
              Seats in each program are limited. Early registration is strongly advised to secure
              your place in the preferred batch.
            </p>
          </div>
        </section>

        {/* TASK Coordinator */}
        <section>
          <SectionLabel>TASK Coordinator at GRIET</SectionLabel>
          <div className="p-4 rounded-xl border border-gray-200 bg-white max-w-sm">
            <h3
              className="font-hind font-bold text-[13px] mb-1"
              style={{ color: college.primaryColor }}
            >
              Dr. P Sri Vidya Devi
            </h3>
            <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-1">
              TASK Program Coordinator
            </p>
            <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
              Gokaraju Rangaraju Institute of Engineering and Technology
            </p>
            <p className="font-dm-sans text-[13px] leading-relaxed mt-2">
              <a
                href="mailto:task@griet.ac.in"
                className="font-dm-sans text-[13px] leading-relaxed"
                style={{ color: college.primaryColor }}
              >
                task@griet.ac.in
              </a>
            </p>
          </div>
        </section>

      </div>
    </AcademicsLayout>
  );
}
