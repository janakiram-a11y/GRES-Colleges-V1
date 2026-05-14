import { useParams, Navigate } from 'react-router-dom';
import college from '../theme';
import AdminSidebarLayout from '../components/AdminSidebarLayout';

const primary = college.primaryColor;
const accent  = college.greenAccent;

// ── Shared primitives ─────────────────────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      {label && (
        <span
          className="font-dm-sans font-semibold text-[11px] tracking-[0.2em] uppercase"
          style={{ color: `${primary}80` }}
        >
          {label}
        </span>
      )}
      <h2 className="font-hind font-bold text-[26px] leading-tight" style={{ color: primary }}>
        {title}
      </h2>
      <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: accent }} />
    </div>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="font-hind font-semibold text-[17px] mb-5 mt-8 first:mt-0" style={{ color: primary }}>
      {children}
    </h3>
  );
}

function InfoCallout({ children }) {
  return (
    <div
      className="rounded-xl p-5 flex items-start gap-3 mt-6"
      style={{ backgroundColor: `${primary}08`, borderLeft: `4px solid ${accent}` }}
    >
      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
      <p className="font-dm-sans text-[14px] leading-[24px] text-[#4B5563]">{children}</p>
    </div>
  );
}

function DataTable({ rows, columns }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
      <table className="w-full min-w-[480px]">
        <thead>
          <tr style={{ backgroundColor: accent }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left font-dm-sans font-semibold text-[12px] text-white px-5 py-3.5 tracking-wide"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="font-dm-sans text-[14px] px-5 py-3.5"
                  style={col.accent ? { color: primary, fontWeight: 600 } : { color: '#374151' }}
                >
                  {row[col.key] ?? '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DownloadIconButton() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
    </svg>
  );
}

// ── Section: Syllabus ─────────────────────────────────────────────────────────

function SyllabusContent() {
  const syllabi = [
    {
      title: 'B.Pharmacy Syllabus',
      subtitle: 'B.Pharmacy — Osmania University curriculum',
      desc: 'Complete semester-wise syllabus for the 4-year B.Pharmacy program covering Pharmaceutics, Pharmaceutical Chemistry, Pharmacognosy, Pharmacology, and Pharmacy Practice.',
      href: '#',
    },
    {
      title: 'M.Pharmacy Syllabus',
      subtitle: 'M.Pharmacy — Osmania University curriculum',
      desc: 'Postgraduate syllabus for M.Pharmacy specializations in Pharmaceutics, Pharmaceutical Analysis, and Pharmacology as prescribed by Osmania University.',
      href: '#',
    },
  ];

  return (
    <>
      <SectionHeader label="Curriculum Documents" title="Syllabus (UG / PG)" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        The syllabi for B.Pharmacy and M.Pharmacy programs at GRCP are prescribed by Osmania University and
        approved by the Pharmacy Council of India (PCI). Download the official curriculum documents below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {syllabi.map((s, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 p-6 rounded-2xl border bg-white hover:shadow-md transition-shadow"
            style={{ borderColor: `${primary}18` }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primary}0F` }}
              >
                <svg className="w-6 h-6" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-hind font-bold text-[17px] leading-snug mb-1" style={{ color: primary }}>
                  {s.title}
                </h3>
                <p className="font-dm-sans text-[12px] font-semibold uppercase tracking-wide mb-2" style={{ color: `${primary}70` }}>
                  {s.subtitle}
                </p>
                <p className="font-dm-sans text-[13px] leading-[22px] text-[#6B7280]">
                  {s.desc}
                </p>
              </div>
            </div>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-lg font-dm-sans font-semibold text-[13px] text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              <DownloadIconButton />
              Download PDF
            </a>
          </div>
        ))}
      </div>

      <InfoCallout>
        Syllabi are subject to revision by Osmania University. Students are advised to refer to the latest
        official notifications from the university website or the GRCP examination branch.
      </InfoCallout>
    </>
  );
}

// ── Section: Academic Calendar ────────────────────────────────────────────────

function CalendarContent() {
  const keyDates = [
    { event: 'Odd Semester Commencement (B.Pharmacy & M.Pharmacy)', period: 'July 2025' },
    { event: 'I Sessional Examinations — Odd Semester',             period: 'August – September 2025' },
    { event: 'II Sessional Examinations — Odd Semester',            period: 'October – November 2025' },
    { event: 'End Semester Examinations (Theory & Practical)',       period: 'November – December 2025' },
    { event: 'Even Semester Commencement',                          period: 'January 2026' },
    { event: 'I Sessional Examinations — Even Semester',            period: 'February – March 2026' },
    { event: 'II Sessional Examinations — Even Semester',           period: 'March – April 2026' },
    { event: 'End Semester Examinations (Theory & Practical)',       period: 'April – May 2026' },
    { event: 'Result Declaration',                                  period: 'Within 30 days of last exam' },
    { event: 'Supplementary / Backlog Examinations',                period: 'As per OU notification' },
  ];

  return (
    <>
      <SectionHeader label="Academic Schedule" title="Academic Calendar 2025–26" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        The Academic Calendar for GRCP is prepared in accordance with the Osmania University almanac and
        PCI norms. It outlines semester schedules, examination months, and result timelines for
        B.Pharmacy and M.Pharmacy programs.
      </p>

      {/* Download banner */}
      <div
        className="rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center gap-5 mb-10"
        style={{ background: 'linear-gradient(135deg, #00873d 0%, #005a28 100%)' }}
      >
        <div className="flex-1">
          <p className="font-dm-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-white/60 mb-1">
            Download
          </p>
          <p className="font-hind font-bold text-[22px] text-white mb-1">
            Academic Calendar 2025–26
          </p>
          <p className="font-dm-sans text-[13px] text-white/70">
            Official calendar with semester schedules, examination timetables, and key institutional dates.
          </p>
        </div>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-dm-sans font-semibold text-[14px] transition-opacity hover:opacity-90 flex-shrink-0"
          style={{ backgroundColor: '#ffffff', color: accent }}
        >
          <DownloadIconButton />
          Download PDF
        </a>
      </div>

      {/* Timeline / key dates */}
      <SubHeading>Key Academic Dates 2025–26</SubHeading>
      <div className="flex flex-col gap-0 rounded-xl overflow-hidden border border-[#E5E7EB]">
        {keyDates.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-4 px-5 py-4 border-b last:border-0"
            style={{
              backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA',
              borderColor: '#F3F4F6',
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: accent }}
              />
              <span className="font-dm-sans font-normal text-[14px] text-[#374151]">{item.event}</span>
            </div>
            <span
              className="font-dm-sans font-semibold text-[12px] flex-shrink-0 px-3 py-1 rounded-full whitespace-nowrap"
              style={{ backgroundColor: `${accent}18`, color: '#7a5a0a' }}
            >
              {item.period}
            </span>
          </div>
        ))}
      </div>

      <InfoCallout>
        Academic calendar dates are subject to revision as per Osmania University notifications or government orders.
        Students are advised to check the official college notice board and GRCP website for the latest updates.
      </InfoCallout>
    </>
  );
}

// ── Section: Time Tables ──────────────────────────────────────────────────────

function TimetablesContent() {
  const timetables = [
    { label: 'B.Pharmacy — I Year', desc: 'Semester I & II class and lab schedule', href: '#' },
    { label: 'B.Pharmacy — II Year', desc: 'Semester III & IV class and lab schedule', href: '#' },
    { label: 'B.Pharmacy — III Year', desc: 'Semester V & VI class and lab schedule', href: '#' },
    { label: 'B.Pharmacy — IV Year', desc: 'Semester VII & VIII class and lab schedule', href: '#' },
    { label: 'M.Pharmacy — I Year', desc: 'Semester I & II timetable (all specializations)', href: '#' },
    { label: 'M.Pharmacy — II Year', desc: 'Semester III & IV timetable (all specializations)', href: '#' },
  ];

  return (
    <>
      <SectionHeader label="Class & Lab Schedules" title="Time Tables" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        Time tables for all B.Pharmacy and M.Pharmacy years are prepared each semester by the respective
        departments. Below are the available timetables for the current academic year 2025–26.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {timetables.map((tt, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-5 rounded-xl border bg-white hover:shadow-sm transition-shadow"
            style={{ borderColor: `${primary}18` }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${primary}0F` }}
            >
              <svg className="w-5 h-5" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-hind font-semibold text-[15px]" style={{ color: primary }}>{tt.label}</p>
              <p className="font-dm-sans text-[12px] text-[#6B7280] mt-0.5">{tt.desc}</p>
            </div>
            <a
              href={tt.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-dm-sans font-semibold text-[12px] text-white transition-opacity hover:opacity-90 flex-shrink-0"
              style={{ backgroundColor: accent }}
            >
              <DownloadIconButton />
              Download
            </a>
          </div>
        ))}
      </div>

      <InfoCallout>
        Timetables are updated each semester. Contact the college office at{' '}
        <strong>{college.phone}</strong> or visit the notice board for the latest schedules.
      </InfoCallout>
    </>
  );
}

// ── Section: Library ──────────────────────────────────────────────────────────

function LibraryContent() {
  const subsections = [
    {
      title: 'About Library',
      href: '/academics/library/about',
      desc: 'History, vision, and general overview of the GRCP Library and its role in pharmaceutical education.',
      icon: (
        <svg className="w-6 h-6" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      title: 'Information Center',
      href: '/academics/library/info-center',
      desc: 'Access to pharmaceutical databases, digital catalogs, and reference management tools.',
      icon: (
        <svg className="w-6 h-6" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
        </svg>
      ),
    },
    {
      title: 'E-Journals',
      href: '/academics/library/e-journals',
      desc: 'Subscribed e-journal list from pharmaceutical and life sciences publishers including PCI and WHO resources.',
      icon: (
        <svg className="w-6 h-6" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
    },
    {
      title: 'Daily Newspapers',
      href: '/academics/library/newspapers',
      desc: 'National and regional newspapers available in the library reading room for students and staff.',
      icon: (
        <svg className="w-6 h-6" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
      ),
    },
    {
      title: 'Statistics 2025–26',
      href: '/academics/library/statistics',
      desc: 'Annual library usage statistics: borrowing records, visit counts, and collection growth data.',
      icon: (
        <svg className="w-6 h-6" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: 'Titles & Volumes 2025–26',
      href: '/academics/library/titles-volumes',
      desc: 'Complete catalog of books, volumes, and titles available in the GRCP Library collection.',
      icon: (
        <svg className="w-6 h-6" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <SectionHeader label="Knowledge Resources" title="Library @ GRCP" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-10">
        The GRCP Library is a comprehensive repository of pharmaceutical knowledge with thousands of books,
        journals, and digital resources. It supports academic excellence, research activities, and
        continuous learning for students, faculty, and researchers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {subsections.map((sub, i) => (
          <a
            key={i}
            href={sub.href}
            className="flex flex-col gap-3 p-6 rounded-2xl border bg-white hover:shadow-md transition-shadow group"
            style={{ borderColor: `${primary}18` }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${primary}0F` }}
            >
              {sub.icon}
            </div>
            <div>
              <h3
                className="font-hind font-bold text-[16px] mb-1.5 group-hover:underline"
                style={{ color: primary }}
              >
                {sub.title}
              </h3>
              <p className="font-dm-sans text-[13px] leading-[22px] text-[#6B7280]">{sub.desc}</p>
            </div>
          </a>
        ))}
      </div>

      <InfoCallout>
        For library membership, borrowing privileges, or e-resource access, contact the Library at the college
        office during working hours: Monday to Saturday, 9:00 AM – 5:00 PM.
      </InfoCallout>
    </>
  );
}

// ── Section: Faculty ──────────────────────────────────────────────────────────

const PLACEHOLDER_FACULTY = [
  { sno: '1', name: 'Faculty Member',        designation: 'Professor & Head',         dept: 'Pharmaceutics',           qual: 'M.Pharmacy, Ph.D', exp: '15+ Years' },
  { sno: '2', name: 'Faculty Member',        designation: 'Associate Professor',      dept: 'Pharmaceutical Chemistry', qual: 'M.Pharmacy, Ph.D', exp: '10+ Years' },
  { sno: '3', name: 'Faculty Member',        designation: 'Assistant Professor',      dept: 'Pharmacognosy',           qual: 'M.Pharmacy',       exp: '6+ Years'  },
  { sno: '4', name: 'Faculty Member',        designation: 'Assistant Professor',      dept: 'Pharmacology',            qual: 'M.Pharmacy, Ph.D', exp: '8+ Years'  },
  { sno: '5', name: 'Faculty Member',        designation: 'Assistant Professor',      dept: 'Pharmacy Practice',       qual: 'M.Pharmacy',       exp: '4+ Years'  },
];

function FacultyContent() {
  return (
    <>
      <SectionHeader label="Academic Staff" title="Faculty List" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        GRCP has a team of highly qualified and experienced faculty members across all departments. The
        complete faculty list is maintained and updated by the administration each academic year. A
        representative listing is shown below — contact the college office for the most current information.
      </p>

      <DataTable
        rows={PLACEHOLDER_FACULTY}
        columns={[
          { key: 'sno',         label: 'Sl.No' },
          { key: 'name',        label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'dept',        label: 'Department' },
          { key: 'qual',        label: 'Qualification' },
          { key: 'exp',         label: 'Experience' },
        ]}
      />

      <InfoCallout>
        The complete faculty list with photographs and detailed profiles is available at the college office
        and on the NAAC / NBA submission portal. For specific faculty contact details, please call{' '}
        <strong>{college.phone}</strong>.
      </InfoCallout>
    </>
  );
}

// ── Section: Non-Teaching Staff ───────────────────────────────────────────────

const PLACEHOLDER_NTS = [
  { sno: '1', name: 'Staff Member', designation: 'Lab Technician',        dept: 'Pharmaceutics' },
  { sno: '2', name: 'Staff Member', designation: 'Lab Assistant',          dept: 'Pharmacology' },
  { sno: '3', name: 'Staff Member', designation: 'Administrative Officer', dept: 'Administration' },
  { sno: '4', name: 'Staff Member', designation: 'Librarian',              dept: 'Library' },
  { sno: '5', name: 'Staff Member', designation: 'Computer Lab Incharge',  dept: 'Computer Lab' },
];

function NonTeachingContent() {
  return (
    <>
      <SectionHeader label="Support Staff" title="Non-Teaching Staff" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        GRCP's non-teaching staff provide essential support across laboratories, administration, library,
        and other departments — ensuring smooth day-to-day operations of the institution.
      </p>

      <DataTable
        rows={PLACEHOLDER_NTS}
        columns={[
          { key: 'sno',         label: 'Sl.No' },
          { key: 'name',        label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'dept',        label: 'Department' },
        ]}
      />

      <InfoCallout>
        The complete non-teaching staff register is available with the administrative office. For queries
        related to specific departments, please contact the college at{' '}
        <strong>{college.phone}</strong>.
      </InfoCallout>
    </>
  );
}

// ── Section registry ──────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'syllabus',           path: '/academics/syllabus',           label: 'Syllabus (UG/PG)',          content: <SyllabusContent /> },
  { id: 'calendar',           path: '/academics/calendar',           label: 'Academic Calendar 2025–26', content: <CalendarContent /> },
  { id: 'timetables',         path: '/academics/timetables',         label: 'Time Tables',               content: <TimetablesContent /> },
  { id: 'library',            path: '/academics/library',            label: 'Library @ GRCP',            content: <LibraryContent /> },
  { id: 'faculty',            path: '/academics/faculty',            label: 'Faculty List',              content: <FacultyContent /> },
  { id: 'non-teaching-staff', path: '/academics/non-teaching-staff', label: 'Non-Teaching Staff',        content: <NonTeachingContent /> },
];

// ── Page component ────────────────────────────────────────────────────────────

export default function AcademicsPage() {
  const { section } = useParams();
  const activeId = section || 'syllabus';
  const currentSection = SECTIONS.find((s) => s.id === activeId);

  if (!currentSection) {
    return <Navigate to="/academics/syllabus" replace />;
  }

  return (
    <AdminSidebarLayout
      college={college}
      pageTitle="Academics"
      pageSubtitle="Syllabus, academic calendar, timetables, library, and faculty information"
      pageBreadcrumb={['Academics', currentSection.label]}
      sections={SECTIONS}
      currentSection={currentSection}
    />
  );
}
