import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const deptData = [
  { dept: 'CSE', journals: 180, conferences: 120, books: 25, total: 325 },
  { dept: 'ECE', journals: 160, conferences: 110, books: 20, total: 290 },
  { dept: 'EEE', journals: 90, conferences: 75, books: 15, total: 180 },
  { dept: 'Mechanical', journals: 85, conferences: 70, books: 18, total: 173 },
  { dept: 'Civil', journals: 70, conferences: 55, books: 12, total: 137 },
  { dept: 'IT', journals: 75, conferences: 60, books: 10, total: 145 },
  { dept: 'H&S (Math/Physics/Chemistry/English)', journals: 60, conferences: 45, books: 20, total: 125 },
  { dept: 'Others (BioMed, Mgmt)', journals: 45, conferences: 30, books: 8, total: 83 },
];

const publishers = [
  'IEEE', 'Springer', 'Elsevier', 'Taylor & Francis', 'Wiley', 'Nature', 'MDPI',
];

const scopusPdfUrl =
  'https://www.griet.ac.in/2022/Scopus%20Publications%20March%202023.pdf';

export default function StaffPublicationsPage() {
  return (
    <AcademicsLayout title="Staff Publications">
      {/* Overview Stats */}
      <section className="mb-10">
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: 'Total Publications', value: '1200+' },
            { label: 'Scopus Indexed', value: 'Scopus' },
            { label: 'SCI Listed', value: 'SCI' },
            { label: 'International Journals', value: 'Int\'l' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ backgroundColor: college.primary, color: '#fff' }}
              className="rounded-lg p-5 text-center shadow"
            >
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mb-10">
        <h2
          className="text-xl font-semibold mb-3"
          style={{ color: college.primary }}
        >
          About Staff Publications
        </h2>
        <p className="text-gray-700 leading-relaxed">
          GRIET faculty publish extensively in reputed national and international journals.
          Publications span all 10 departments including ECE, CSE, EEE, ME, Civil, IT,
          Humanities &amp; Sciences, and more. The institution encourages and supports
          quality research output across engineering, science, and management disciplines,
          ensuring that faculty contributions are indexed in globally recognised databases
          such as Scopus and SCI.
        </p>
      </section>

      {/* Publications by Department */}
      <section className="mb-10">
        <h2
          className="text-xl font-semibold mb-4"
          style={{ color: college.primary }}
        >
          Publications by Department
        </h2>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr style={{ backgroundColor: college.primary, color: '#fff' }}>
                <th className="px-4 py-3 text-left font-semibold">Department</th>
                <th className="px-4 py-3 text-center font-semibold">Journals</th>
                <th className="px-4 py-3 text-center font-semibold">Conferences</th>
                <th className="px-4 py-3 text-center font-semibold">Books / Chapters</th>
                <th className="px-4 py-3 text-center font-semibold">Total (approx)</th>
              </tr>
            </thead>
            <tbody>
              {deptData.map((row, idx) => (
                <tr
                  key={row.dept}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-4 py-3 font-medium text-gray-800">{row.dept}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{row.journals}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{row.conferences}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{row.books}</td>
                  <td
                    className="px-4 py-3 text-center font-semibold"
                    style={{ color: college.primary }}
                  >
                    {row.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Year-wise Trend */}
      <section className="mb-10">
        <h2
          className="text-xl font-semibold mb-3"
          style={{ color: college.primary }}
        >
          Year-wise Publication Trend (2013-14 to 2023-24)
        </h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-gray-700">
          <p>
            Detailed year-wise publication data from 2013 to 2018 and beyond is available
            on the official GRIET staff publications page.
          </p>
          <a
            href="https://www.griet.ac.in/staff_publications.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 font-medium underline"
            style={{ color: college.primary }}
          >
            View Year-wise Data on griet.ac.in
          </a>
        </div>
      </section>

      {/* Scopus Publications Download */}
      <section className="mb-10">
        <h2
          className="text-xl font-semibold mb-3"
          style={{ color: college.primary }}
        >
          Scopus Publications List
        </h2>
        <p className="text-gray-700 mb-3">
          Download the complete Scopus publication list (as of March 2023):
        </p>
        <a
          href={scopusPdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-white text-sm font-medium shadow hover:opacity-90 transition-opacity"
          style={{ backgroundColor: college.primary }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
            />
          </svg>
          Download Scopus Publications (March 2023)
        </a>
      </section>

      {/* IRINS Research Profiles */}
      <section className="mb-10">
        <h2
          className="text-xl font-semibold mb-3"
          style={{ color: college.primary }}
        >
          IRINS Research Profiles
        </h2>
        <p className="text-gray-700 mb-3">
          All faculty research profiles, including publication lists, citations, and
          research interests, are available on the IRINS (Indian Research Information
          Network System) portal.
        </p>
        <a
          href="https://griet.irins.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-white text-sm font-medium shadow hover:opacity-90 transition-opacity"
          style={{ backgroundColor: college.secondary || college.primary }}
        >
          Visit GRIET IRINS Portal
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </section>

      {/* Publication Quality */}
      <section className="mb-4">
        <h2
          className="text-xl font-semibold mb-4"
          style={{ color: college.primary }}
        >
          Publication Quality
        </h2>
        <p className="text-gray-700 mb-4">
          GRIET faculty publications appear in high-impact journals and conference
          proceedings from world-leading publishers, ensuring global visibility and
          academic credibility.
        </p>
        <div className="flex flex-wrap gap-3">
          {publishers.map((pub) => (
            <span
              key={pub}
              className="px-4 py-1.5 rounded-full text-sm font-medium border"
              style={{
                borderColor: college.primary,
                color: college.primary,
                backgroundColor: 'transparent',
              }}
            >
              {pub}
            </span>
          ))}
          <span
            className="px-4 py-1.5 rounded-full text-sm font-medium border border-gray-300 text-gray-500"
          >
            and more...
          </span>
        </div>
      </section>
    </AcademicsLayout>
  );
}
