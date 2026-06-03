import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const { primaryColor, accentColor } = college;

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

const objectives = [
  'To develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the institution.',
  'To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.',
  'To act as a nodal agency of the institution for coordinating quality-related activities including adoption and dissemination of good practices.',
  'To build an organized methodology of documentation and internal communication.',
  'To act as a dynamic system for quality changes in higher educational institutions (HEIs).',
  'To ensure heightened level of clarity and focus in institutional functioning towards quality enhancement and facilitate the creation of a learner-centric environment.',
];

const functions = [
  'Development and application of quality benchmarks and parameters for the various academic and administrative activities of the institution.',
  'Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process.',
  'Collection and analysis of feedback from all stakeholders on quality-related institutional processes.',
  'Dissemination of information on various quality parameters of higher education.',
  'Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles.',
  'Documentation of the various programmes/activities leading to quality improvement.',
  'Acting as a nodal agency of the institution for coordinating quality-related activities, including adoption and dissemination of good practices.',
  'Development and maintenance of institutional database through MIS for the purpose of maintaining and enhancing the institutional quality.',
  'Development of Quality Culture in the institution.',
  'Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC, to be submitted to NAAC.',
  'Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks.',
  'Bi-annual development of Academic Calendar of the institution based on the academic growth of the institution.',
  'Relevant feedback collected and used for improvements.',
];

const strategies = [
  'Ensuring adequate infrastructure facility for the smooth and progressive performance of academic, administrative and financial activities of the institutions.',
  'Ensuring the adequacy, maintenance and proper allocation of support structure and services.',
  'Research sharing and networking with other institutions in India or abroad.',
  'Optimization and integration of modern methods of teaching and learning.',
  'Ensuring the adequacy, maintenance and proper allocation of support structure and services.',
  'Sharing of research findings and networking with other institutions in India and abroad.',
  'Optimization and integration of modern methods of teaching, learning, evaluation.',
  'Planning and evaluation of teaching-learning, research and collaborative activities using modern tools.',
  'Ensuring the adequacy, maintenance and proper allocation of support structure and services.',
  'Conducting regular audits of all quality-related activities and acting on findings.',
];

const benefits = [
  'Ensure clarity and focus in institutional functioning towards quality enhancement.',
  'Internalization of the quality culture.',
  'Enhancement and coordination among the various activities of the institution and institutionalize all good practices.',
  'Provide a sound basis for decision-making to improve institutional functioning.',
  'Act as a dynamic system for quality changes in HEIs.',
  'Build an organized methodology of documentation and internal communication.',
];

const composition = [
  { role: 'Chairperson', member: 'Principal, GRIET' },
  { role: 'Coordinator', member: 'Senior Professor, GRIET' },
  { role: 'Members', member: 'Faculty representatives from all departments' },
  { role: 'Members', member: 'Management representative' },
  { role: 'Members', member: 'Industry / Employer representative' },
  { role: 'Members', member: 'Alumni representative' },
  { role: 'Members', member: 'Student representatives' },
  { role: 'Members', member: 'Administrative officers' },
];

const aqarYears = [
  { label: 'AQAR 2022-23', url: 'https://www.griet.ac.in/iqac.php' },
  { label: 'AQAR 2021-22', url: 'https://www.griet.ac.in/iqac.php' },
  { label: 'AQAR 2020-21', url: 'https://www.griet.ac.in/iqac.php' },
  { label: 'AQAR 2019-20', url: 'https://www.griet.ac.in/iqac.php' },
  { label: 'AQAR 2018-19', url: 'https://www.griet.ac.in/iqac.php' },
  { label: 'AQAR 2017-18', url: 'https://www.griet.ac.in/iqac.php' },
  { label: 'AQAR 2016-17', url: 'https://www.griet.ac.in/iqac.php' },
  { label: 'AQAR 2015-16', url: 'https://www.griet.ac.in/iqac.php' },
];

function NumberedList({ items }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 font-dm-sans text-[13.5px] text-gray-700 leading-relaxed">
          <span
            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-hind font-bold text-[11px] text-white mt-0.5"
            style={{ backgroundColor: primaryColor }}
          >
            {i + 1}
          </span>
          {item}
        </li>
      ))}
    </ol>
  );
}

export default function IQACPage() {
  return (
    <AcademicsLayout title="IQAC — Internal Quality Assurance Cell">
      <div className="space-y-10 max-w-4xl mx-auto">

        {/* About IQAC */}
        <section>
          <SectionLabel>About IQAC</SectionLabel>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-700 mb-4">
            The Internal Quality Assurance Cell (IQAC) at GRIET was established in accordance with
            the guidelines of the National Assessment and Accreditation Council (NAAC). As a
            post-accreditation quality sustenance measure, the IQAC is a part of the institution's
            system and works towards realizing the goals of quality enhancement and sustenance.
          </p>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-700 mb-4">
            The prime task of the IQAC is to develop a system for conscious, consistent and
            catalytic improvement in the overall performance of institutions. For this, during the
            post-accreditation period, the IQAC will channelize all efforts and measures of the
            institution towards promoting its holistic academic excellence.
          </p>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-700">
            The IQAC shall have a significant role in post-accreditation phase of the institution
            in terms of quality enhancement initiatives and maintenance. The institution shall have
            an Internal Quality Assurance mechanism incorporating the spirit of excellence in all
            its activities including administration, academics, research and extension.
          </p>
        </section>

        {/* NAAC Banner */}
        <div
          className="rounded-lg p-5 text-white"
          style={{ backgroundColor: primaryColor }}
        >
          <p className="font-hind font-bold text-[12px] uppercase tracking-widest mb-1" style={{ color: accentColor }}>
            NAAC Accreditation
          </p>
          <p className="font-dm-sans text-[14px] leading-relaxed">
            GRIET is accredited by NAAC with <strong>A++ Grade (CGPA 3.55)</strong>. The IQAC plays
            a central role in sustaining and enhancing the quality standards that earned this
            recognition.
          </p>
        </div>

        {/* Objectives */}
        <section>
          <SectionLabel>Objectives of IQAC</SectionLabel>
          <NumberedList items={objectives} />
        </section>

        {/* Functions */}
        <section>
          <SectionLabel>Functions of IQAC</SectionLabel>
          <NumberedList items={functions} />
        </section>

        {/* Strategies */}
        <section>
          <SectionLabel>Strategies</SectionLabel>
          <NumberedList items={strategies} />
        </section>

        {/* Benefits */}
        <section>
          <SectionLabel>Benefits of IQAC</SectionLabel>
          <ul className="space-y-3">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-dm-sans text-[13.5px] text-gray-700 leading-relaxed">
                <span
                  className="mt-1.5 w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: accentColor }}
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Committee Composition */}
        <section>
          <SectionLabel>Committee Composition</SectionLabel>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-[13px] font-dm-sans">
              <thead>
                <tr style={{ backgroundColor: primaryColor }}>
                  <th className="text-left px-4 py-3 text-white font-hind font-semibold text-[12px] w-44">Role</th>
                  <th className="text-left px-4 py-3 text-white font-hind font-semibold text-[12px]">Member / Constituency</th>
                </tr>
              </thead>
              <tbody>
                {composition.map(({ role, member }, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td
                      className="px-4 py-3 border-b border-gray-100 font-semibold"
                      style={{ color: accentColor }}
                    >
                      {role}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{member}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* AQAR Downloads */}
        <section>
          <SectionLabel>AQAR Downloads</SectionLabel>
          <p className="font-dm-sans text-[13.5px] text-gray-600 mb-5">
            Annual Quality Assurance Reports (AQAR) submitted to NAAC are available for download
            below. Click on a year to access the report on the IQAC page.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {aqarYears.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-lg border border-gray-200 bg-white p-3 hover:shadow-sm hover:border-gray-300 transition-all group"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: accentColor }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="font-dm-sans text-[12.5px] text-gray-700 group-hover:underline leading-snug">
                  {label}
                </span>
              </a>
            ))}
          </div>
          <p className="mt-4 font-dm-sans text-[12px] text-gray-500">
            For the full list of IQAC documents including meeting minutes, quality initiatives,
            audit reports, and NAAC materials, please visit{' '}
            <a
              href="https://www.griet.ac.in/iqac.php"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-800"
              style={{ color: accentColor }}
            >
              www.griet.ac.in/iqac.php
            </a>
            .
          </p>
        </section>

        {/* Contact */}
        <section>
          <SectionLabel>Contact IQAC</SectionLabel>
          <div
            className="rounded-lg border p-5 flex items-start gap-4"
            style={{ borderColor: 'rgba(91,16,39,0.15)', backgroundColor: '#FAF4EE' }}
          >
            <svg
              className="w-6 h-6 flex-shrink-0 mt-0.5"
              style={{ color: primaryColor }}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div>
              <p className="font-hind font-semibold text-[14px] mb-1" style={{ color: primaryColor }}>
                IQAC Coordinator
              </p>
              <a
                href="mailto:iqac@griet.ac.in"
                className="font-dm-sans text-[14px] hover:underline"
                style={{ color: accentColor }}
              >
                iqac@griet.ac.in
              </a>
              <p className="font-dm-sans text-[13px] text-gray-600 mt-1">
                Gokaraju Rangaraju Institute of Engineering &amp; Technology,
                Nizampet Road, Bachupally, Hyderabad — 500 090
              </p>
            </div>
          </div>
        </section>

      </div>
    </AcademicsLayout>
  );
}
