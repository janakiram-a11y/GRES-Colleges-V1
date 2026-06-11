import { useState } from 'react';
import college from '../theme';
import CollegeLayout from '../CollegeLayout';
import { AcademicsBanner } from '../components/AcademicsLayout';
import SectionHeading from '../components/SectionHeading';

// ── Yearwise left sidebar ────────────────────────────────────────────────────
const PLACEMENT_YEARS = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011];

// Mobile horizontal scrollable pill row of years
function YearPillRow({ activeYear, onYearSelect }) {
  return (
    <div className="lg:hidden w-full overflow-x-auto pb-2 mb-6">
      <div className="flex gap-2 min-w-max px-1">
        {PLACEMENT_YEARS.map((year) => {
          const isActive = activeYear === year;
          return (
            <button
              key={year}
              onClick={() => onYearSelect(year)}
              className="flex-shrink-0 px-4 py-1.5 rounded-full border font-dm-sans text-[0.9375rem] font-semibold transition-colors"
              style={{
                backgroundColor: isActive ? college.primaryColor : '#fff',
                borderColor: isActive ? college.primaryColor : '#d1d5db',
                color: isActive ? '#fff' : '#374151',
              }}
            >
              {year}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Desktop vertical sidebar — hidden on mobile
function PlacementSidebar({ activeYear, onYearSelect }) {
  return (
    <aside className="hidden lg:block w-60 flex-shrink-0 lg:sticky lg:top-[176px]">
      <div className="rounded-lg border border-gray-200">
        <div
          className="rounded-t-lg px-5 py-3"
          style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)` }}
        >
          <span className="font-hind font-bold text-[0.9375rem] text-white tracking-wide">
            Yearwise Placement Details
          </span>
        </div>
        <ul className="rounded-b-lg divide-y divide-gray-100 bg-white sidebar-scroll max-h-[calc(100vh-240px)] overflow-y-auto">
          {PLACEMENT_YEARS.map((year) => {
            const isActive = activeYear === year;
            return (
              <li key={year}>
                <button
                  onClick={() => onYearSelect(year)}
                  className="w-full flex items-center gap-3 px-5 py-2.5 transition-colors hover:bg-gray-50 text-left"
                  style={{
                    backgroundColor: isActive ? `${college.primaryColor}0d` : undefined,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0 transition-colors"
                    style={{ backgroundColor: isActive ? college.primaryColor : college.accentColor }}
                  />
                  <span
                    className="font-dm-sans text-[0.9375rem]"
                    style={{ color: isActive ? college.primaryColor : '#374151', fontWeight: isActive ? 700 : 500 }}
                  >
                    {year}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

// ── Placement stats per year ─────────────────────────────────────────────────
const YEAR_STATS = {
  2025: { highest: '51.6 LPA', offers: '950+', companies: '120+', topRecruiters: ['Google', 'Amazon', 'PayPal', 'Commvault', 'CISCO', 'JP Morgan Chase'] },
  2024: { highest: '44 LPA', offers: '900+', companies: '110+', topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Deloitte', 'Accenture'] },
  2023: { highest: '40 LPA', offers: '850+', companies: '100+', topRecruiters: ['Microsoft', 'Amazon', 'TCS', 'Infosys', 'HCL'] },
  2022: { highest: '36 LPA', offers: '800+', companies: '90+', topRecruiters: ['TCS', 'Wipro', 'Cognizant', 'Capgemini', 'IBM'] },
  2021: { highest: '32 LPA', offers: '700+', companies: '85+', topRecruiters: ['TCS', 'Infosys', 'Tech Mahindra', 'Hexaware'] },
  2020: { highest: '28 LPA', offers: '600+', companies: '80+', topRecruiters: ['TCS', 'Wipro', 'Infosys', 'Mindtree'] },
  2019: { highest: '24 LPA', offers: '550+', companies: '75+', topRecruiters: ['TCS', 'CTS', 'Infosys', 'HCL'] },
  2018: { highest: '20 LPA', offers: '500+', companies: '70+', topRecruiters: ['TCS', 'CTS', 'Wipro', 'Accenture'] },
};

function YearStatsPanel({ year }) {
  const stats = YEAR_STATS[year] || YEAR_STATS[2025];
  return (
    <div className="space-y-6">
      {/* Fix 1: stats grid responsive cols */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: 'Highest Package', value: stats.highest },
          { label: 'Total Offers', value: stats.offers },
          { label: 'Companies Visited', value: stats.companies },
        ].map((s) => (
          <div key={s.label}
            className="text-center p-5 rounded-lg border-l-4 border border-gray-100 bg-white"
            style={{ borderLeftColor: college.primaryColor }}>
            {/* Fix 5: responsive stat number text size */}
            <div
              className="font-hind font-bold text-2xl sm:text-3xl lg:text-4xl mb-1"
              style={{ color: college.primaryColor }}
            >
              {s.value}
            </div>
            <div className="font-dm-sans text-[11px] uppercase tracking-wide text-gray-500">
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <div>
        <h4 className="font-hind font-semibold text-[0.9375rem] mb-3 uppercase tracking-wide" style={{ color: college.primaryColor }}>
          Top Recruiters – {year}
        </h4>
        {/* Fix 6: company logos/tags responsive gap */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {stats.topRecruiters.map((r) => (
            <span key={r}
              className="px-4 py-2 rounded-full border font-dm-sans text-[0.875rem] font-semibold text-gray-700 bg-white hover:shadow-sm transition-shadow"
              style={{ borderColor: college.accentColor }}>
              {r}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Congratulations banner ───────────────────────────────────────────────────
function PlacementsBanner() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 mb-8">
      <div
        className="text-white text-center py-5 px-6"
        style={{ background: `linear-gradient(135deg, #3a0b1a 0%, ${college.primaryColor} 100%)` }}
      >
        <p className="font-hind font-bold text-xl md:text-2xl uppercase tracking-wide">
          🎉 Congratulations!! – 2025 Batch Highest Package
        </p>
        <p className="font-dm-sans text-base text-white/90 mt-1">
          Rao Nishitha – Google: 51.6 Lakhs &nbsp;|&nbsp; S D Sowjanya – Amazon: 45.6 Lakhs
        </p>
        <p className="font-dm-sans text-base text-white/90">
          M Likhithanjali – Amazon: 45.6 Lakhs &nbsp;|&nbsp; K Lohitha – Amazon: 45.6 Lakhs
        </p>
      </div>
      <div
        className="text-white text-center py-3 px-6 font-hind font-bold text-[15px] uppercase tracking-wide"
        style={{ backgroundColor: college.accentColor, color: '#ffffff' }}
      >
        JP Morgan Chase &amp; Co Selects with 19.75 Lakhs
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PlacementsPage() {
  const [activeYear, setActiveYear] = useState(2025);

  return (
    <CollegeLayout college={college}>
      <AcademicsBanner title="Training &amp; Placements" />

      <div className="page-pad">
        {/* Fix 3: main layout flex-col on mobile, flex-row on lg+ */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Fix 2 & 4: Sidebar hidden on mobile (desktop only); mobile uses pill row above content */}
          <PlacementSidebar activeYear={activeYear} onYearSelect={setActiveYear} />

          {/* ── Main Content ───────────────────────────────────────────── */}
          <div className="flex-1 min-w-0 space-y-10">

            {/* Fix 4: Mobile year pill row — only visible on mobile */}
            <YearPillRow activeYear={activeYear} onYearSelect={setActiveYear} />

            {/* Congratulations Banner */}
            <PlacementsBanner />

            {/* About the Cell */}
            <section>
              <SectionHeading size="xl">Training &amp; Placements Cell</SectionHeading>
              <div className="space-y-3 font-hind font-normal text-base leading-relaxed text-gray-700">
                <p>
                  The Training &amp; Placements Cell of GRIET:
                </p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                  <li>
                    Imparts training in soft skills to the students from the first year class onwards to prepare
                    them appropriately for careers in industry.
                  </li>
                  <li>
                    Coordinates the Industry and the GRIETians for suitable training &amp; placements.
                  </li>
                </ol>
                <p>
                  In order to achieve this, the database of all the students of different branches is compiled
                  and furnished to identified industries from time to time. Consequently, as per the manpower
                  requirements of the industries, On or Off Campus Placements are conducted to provide suitable
                  career opportunities to the students.
                </p>
                <p>
                  A large number of students (details given separately in this section), have been placed in
                  all leading Software, Hardware, Manufacturing and Maintenance industries. A good number of
                  students pursue higher studies at home and abroad (details given separately in this section).
                  Every batch witnesses a few dawning the hats as entrepreneurs.
                </p>
              </div>
            </section>

            {/* Yearwise Stats */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <SectionHeading size="xl">Placement Statistics – {activeYear}</SectionHeading>
              </div>
              <YearStatsPanel year={activeYear} />
            </section>

            {/* Overall Stats */}
            <section
              className="rounded-xl py-10 px-6"
              style={{ backgroundColor: '#5B1027' }}
            >
              <p className="font-hind font-bold text-center text-[15px] uppercase tracking-widest mb-6"
                style={{ color: '#F3DAB2' }}>
                Placement Highlights
              </p>
              {/* Fix 1: responsive grid cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {[
                  { count: '44 LPA', label: 'Highest Package', desc: 'Consistently offered by top MNCs' },
                  { count: '900+', label: 'Offers Per Year', desc: 'From 100+ visiting companies' },
                  { count: '900+', label: 'Recruiters', desc: 'Global, national & regional companies' },
                  { count: '25+', label: 'Years of Placements', desc: 'Strong track record since 1997' },
                ].map((s) => (
                  <div key={s.label}
                    className="bg-white/10 border border-white/20 rounded-xl px-5 py-7 flex flex-col items-center text-center gap-2">
                    {/* Fix 5: responsive count text size */}
                    <span className="font-hind font-bold text-2xl sm:text-3xl lg:text-4xl" style={{ color: '#F3DAB2' }}>{s.count}</span>
                    <span className="font-hind font-semibold text-sm text-white">{s.label}</span>
                    <span className="font-dm-sans text-[11px] text-white/70 leading-relaxed">{s.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <SectionHeading size="xl">Contact Information</SectionHeading>
              {/* Fix 7: overflow-x-auto wrapper on table */}
              <div className="overflow-x-auto">
                <table className="w-full font-dm-sans text-[0.9375rem] border border-gray-200 rounded-lg overflow-hidden">
                  <tbody>
                    {[
                      { role: 'Dean Training & Placements', name: 'Dr. K. Butchi Raju', contact: '7702964747' },
                      { role: 'Training & Placements Officer', name: 'Dr. M. Aravind Kumar', contact: '9849027132' },
                      { role: 'Placements Cell', name: '', contact: '7207344440, 7207714441' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-5 py-3 border-b border-gray-100 font-semibold text-gray-800 w-1/3">
                          {row.role}
                        </td>
                        <td className="px-5 py-3 border-b border-gray-100 text-gray-700">
                          {row.name}
                          {row.name && ', '}
                          {row.contact}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-white">
                      <td className="px-5 py-3 font-semibold text-gray-800">Contact mail:</td>
                      <td className="px-5 py-3">
                        <a
                          href="mailto:placements@gokaraju.org"
                          className="font-semibold hover:underline"
                          style={{ color: college.primaryColor }}
                        >
                          placements@gokaraju.org
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Recruitment Process */}
            <section>
              <SectionHeading size="xl">Recruitment Process</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { step: '01', title: 'Pre-Placement Training', desc: 'Year-round aptitude, soft skills, technical, and interview preparation from first year onwards.' },
                  { step: '02', title: 'Company Registration', desc: 'Companies register with the T&P cell and share their requirements for the placement season.' },
                  { step: '03', title: 'Eligibility Screening', desc: 'Students are shortlisted based on academic performance and company eligibility criteria.' },
                  { step: '04', title: 'Selection Process', desc: 'Online tests, technical interviews, HR rounds conducted at campus or online.' },
                ].map((s) => (
                  <div key={s.step}
                    className="flex gap-4 p-5 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
                    <span
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-hind font-bold text-white text-sm"
                      style={{ backgroundColor: college.primaryColor }}
                    >
                      {s.step}
                    </span>
                    <div>
                      <h3 className="font-hind font-semibold text-base mb-1" style={{ color: college.primaryColor }}>
                        {s.title}
                      </h3>
                      <p className="font-hind font-normal text-[0.875rem] text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>
      </div>

    </CollegeLayout>
  );
}
