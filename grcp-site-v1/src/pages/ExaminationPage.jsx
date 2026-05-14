import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import college from '../theme';
import Navbar from '../components/Navbar';
import NavStrip from '../components/NavStrip';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

function SectionHeader({ label, title }) {
  return (
    <div className="mb-6">
      {label && (
        <span
          className="font-dm-sans font-semibold text-[12px] uppercase tracking-[2px] mb-2 block"
          style={{ color: college.greenAccent }}
        >
          {label}
        </span>
      )}
      <h2
        className="font-hind font-bold text-[26px] leading-[34px] pb-3"
        style={{
          color: college.primaryColor,
          borderBottom: `3px solid ${college.greenAccent}`,
          display: 'inline-block',
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function OverviewSection() {
  const { overview, contact, activities } = college.examination;

  return (
    <div className="space-y-10">
      <section>
        <SectionHeader label="Examination" title="Examination Branch @ GRCP" />
        <p className="font-dm-sans text-[15px] leading-[26px] text-[#474747] mt-4 max-w-[780px]">
          {overview}
        </p>
      </section>

      <section>
        <h3
          className="font-hind font-semibold text-[18px] mb-4"
          style={{ color: college.primaryColor }}
        >
          Contact the Examination Branch
        </h3>
        <div
          className="rounded-2xl p-7 border max-w-[520px]"
          style={{ borderColor: `${college.primaryColor}20`, backgroundColor: '#FAFAFA' }}
        >
          <p className="font-hind font-semibold text-[16px] mb-4" style={{ color: college.primaryColor }}>
            {contact.name}
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${college.greenAccent}20` }}
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke={college.greenAccent} strokeWidth="1.6">
                  <path d="M2 5a2 2 0 012-2h2.2l2.5 5.5-1.5 1.5a10 10 0 004.8 4.8l1.5-1.5L18 15.8V18a2 2 0 01-2 2A16 16 0 012 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-dm-sans text-[14px] text-[#474747]">{contact.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${college.greenAccent}20` }}
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke={college.greenAccent} strokeWidth="1.6">
                  <path d="M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 6l8 5 8-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="font-dm-sans text-[14px] underline"
                style={{ color: college.primaryColor }}
              >
                {contact.email}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: `${college.greenAccent}20` }}
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke={college.greenAccent} strokeWidth="1.6">
                  <circle cx="10" cy="10" r="8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 6v4l2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-dm-sans text-[14px] text-[#474747]">{contact.hours}</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3
          className="font-hind font-semibold text-[18px] mb-5"
          style={{ color: college.primaryColor }}
        >
          Key Activities
        </h3>
        <ul className="space-y-3 max-w-[700px]">
          {activities.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-[7px]"
                style={{ backgroundColor: college.greenAccent }}
              />
              <span className="font-dm-sans text-[15px] leading-[26px] text-[#474747]">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function SessionalTimetableSection() {
  return (
    <div className="space-y-8">
      <SectionHeader label="Internal Exams" title="Sessional Time Table" />
      <div
        className="rounded-2xl p-8 border max-w-[680px]"
        style={{ borderColor: `${college.primaryColor}20`, backgroundColor: '#FDF8F9' }}
      >
        <div className="flex items-start gap-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${college.primaryColor}12` }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={college.primaryColor} strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h3
              className="font-hind font-semibold text-[17px] mb-3"
              style={{ color: college.primaryColor }}
            >
              How to Access Sessional Timetables
            </h3>
            <p className="font-dm-sans text-[15px] leading-[26px] text-[#474747] mb-4">
              Sessional timetables are displayed on the college notice board and shared via official WhatsApp groups.
              Check with your class teacher for the latest schedule.
            </p>
            <div
              className="rounded-xl p-4"
              style={{ backgroundColor: `${college.greenAccent}15`, border: `1px solid ${college.greenAccent}30` }}
            >
              <p className="font-dm-sans text-[14px] text-[#474747]">
                <span className="font-semibold">Note:</span> Timetables are released at least 5 working days before the commencement
                of sessional examinations. Students must carry their hall tickets to all sessional exams.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rounded-2xl p-6 border max-w-[680px]"
        style={{ borderColor: `${college.primaryColor}18`, backgroundColor: '#FAFAFA' }}
      >
        <h4
          className="font-hind font-semibold text-[15px] mb-3"
          style={{ color: college.primaryColor }}
        >
          For Timetable Queries, Contact
        </h4>
        <p className="font-dm-sans text-[14px] text-[#474747]">
          Class Teacher / Department Coordinator or the Examination Branch at{' '}
          <a
            href={`mailto:${college.examination.contact.email}`}
            className="underline"
            style={{ color: college.primaryColor }}
          >
            {college.examination.contact.email}
          </a>
        </p>
      </div>
    </div>
  );
}

function OuTimetablesSection() {
  return (
    <div className="space-y-8">
      <SectionHeader label="Osmania University" title="OU Time Tables" />
      <p className="font-dm-sans text-[15px] leading-[26px] text-[#474747] max-w-[720px]">
        Theory and Practical Examination timetables for B.Pharmacy and M.Pharmacy programs are published by
        Osmania University. Students are advised to regularly check the OU official website for the latest schedules.
      </p>
      <div
        className="rounded-2xl p-8 border max-w-[600px]"
        style={{ borderColor: `${college.primaryColor}20`, backgroundColor: '#FAFAFA' }}
      >
        <div className="flex items-start gap-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${college.primaryColor}12` }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={college.primaryColor} strokeWidth="1.5">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h3
              className="font-hind font-semibold text-[17px] mb-2"
              style={{ color: college.primaryColor }}
            >
              Osmania University — Official Website
            </h3>
            <p className="font-dm-sans text-[14px] text-[#474747] mb-4">
              All university examination schedules for pharmacy programs are published on the Osmania University portal.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-dm-sans font-semibold text-[14px] px-5 py-2.5 rounded-lg transition-opacity hover:opacity-80"
              style={{ backgroundColor: college.greenAccent, color: '#fff' }}
            >
              Visit OU Website
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        className="rounded-xl p-5 max-w-[600px]"
        style={{ backgroundColor: `${college.greenAccent}15`, border: `1px solid ${college.greenAccent}30` }}
      >
        <p className="font-dm-sans text-[14px] text-[#474747]">
          <span className="font-semibold">Tip:</span> Download and save the timetable PDF from the OU website as soon as it is published. The college notice board also displays timetables upon receipt.
        </p>
      </div>
    </div>
  );
}

function OuNotificationsSection() {
  const notifications = [
    {
      date: 'Dec 2025',
      badge: 'EXAM',
      title: 'B.Pharmacy Main & Backlog Examinations — Feb/March 2026',
      desc: 'Osmania University has announced the schedule for B.Pharmacy (PCI) Main and Backlog Examinations for February/March 2026. Hall tickets will be issued one week prior to the exam date.',
    },
    {
      date: 'Nov 2025',
      badge: 'EXAM',
      title: 'M.Pharmacy Supplementary Examinations',
      desc: 'M.Pharmacy supplementary examinations for all specializations are scheduled as per the Osmania University academic calendar. Students with backlogs should register through the college examination branch.',
    },
    {
      date: 'Sep 2025',
      badge: 'NOTICE',
      title: 'B.Pharmacy First Year Induction Program 2025–26',
      desc: 'A mandatory induction program for all newly admitted B.Pharmacy first year students will be conducted at the college auditorium. Attendance is compulsory for all first-year students.',
    },
  ];

  const badgeColors = {
    EXAM: college.primaryColor,
    NOTICE: '#5B1027',
  };

  return (
    <div className="space-y-8">
      <SectionHeader label="Updates" title="OU Notifications" />
      <div className="space-y-5 max-w-[760px]">
        {notifications.map((n, i) => (
          <div
            key={i}
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: `${college.primaryColor}18` }}
          >
            <div
              className="px-6 py-3 flex items-center justify-between"
              style={{ backgroundColor: `${college.primaryColor}08` }}
            >
              <span
                className="font-dm-sans font-bold text-[11px] uppercase tracking-[1.5px] px-2.5 py-1 rounded-full text-white"
                style={{ backgroundColor: badgeColors[n.badge] || college.primaryColor }}
              >
                {n.badge}
              </span>
              <span className="font-dm-sans text-[13px] text-[#6B7280]">{n.date}</span>
            </div>
            <div className="px-6 py-5 bg-white">
              <h4
                className="font-hind font-semibold text-[16px] mb-2"
                style={{ color: college.primaryColor }}
              >
                {n.title}
              </h4>
              <p className="font-dm-sans text-[14px] leading-[24px] text-[#474747]">{n.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultsSection() {
  return (
    <div className="space-y-8">
      <SectionHeader label="Exam Outcomes" title="Results" />
      <p className="font-dm-sans text-[15px] leading-[26px] text-[#474747] max-w-[720px]">
        Results for all university examinations are published by Osmania University on their official website.
        Internal sessional marks are displayed on the college notice board after verification by the examination branch.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[680px]">
        <div
          className="rounded-2xl p-6 border"
          style={{ borderColor: `${college.primaryColor}20`, backgroundColor: '#FAFAFA' }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
            style={{ backgroundColor: `${college.primaryColor}12` }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke={college.primaryColor} strokeWidth="1.5">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h4
            className="font-hind font-semibold text-[15px] mb-2"
            style={{ color: college.primaryColor }}
          >
            OU Results Portal
          </h4>
          <p className="font-dm-sans text-[13px] text-[#6B7280] mb-4">
            Check university examination results on the Osmania University official portal.
          </p>
          <a
            href="#"
            className="font-dm-sans font-semibold text-[13px] underline"
            style={{ color: college.primaryColor }}
          >
            Go to OU Results →
          </a>
        </div>

        <div
          className="rounded-2xl p-6 border"
          style={{ borderColor: `${college.primaryColor}20`, backgroundColor: '#FAFAFA' }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
            style={{ backgroundColor: `${college.greenAccent}18` }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke={college.greenAccent} strokeWidth="1.5">
              <path d="M2 5a2 2 0 012-2h2.2l2.5 5.5-1.5 1.5a10 10 0 004.8 4.8l1.5-1.5L18 15.8V18a2 2 0 01-2 2A16 16 0 012 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h4
            className="font-hind font-semibold text-[15px] mb-2"
            style={{ color: college.primaryColor }}
          >
            Contact Exam Branch
          </h4>
          <p className="font-dm-sans text-[13px] text-[#6B7280] mb-4">
            For sessional marks queries, contact the examination branch directly.
          </p>
          <a
            href={`tel:${college.examination.contact.phone}`}
            className="font-dm-sans font-semibold text-[13px] underline"
            style={{ color: college.primaryColor }}
          >
            {college.examination.contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

function QuestionPapersSection() {
  const papers = [
    { programme: 'B.Pharmacy', year: 'I Year', subject: 'Pharmaceutics – I', examYear: '2024' },
    { programme: 'B.Pharmacy', year: 'II Year', subject: 'Pharmaceutical Analysis – I', examYear: '2024' },
    { programme: 'B.Pharmacy', year: 'III Year', subject: 'Medicinal Chemistry – I', examYear: '2023' },
    { programme: 'B.Pharmacy', year: 'IV Year', subject: 'Clinical Pharmacy & Therapeutics', examYear: '2023' },
    { programme: 'M.Pharmacy', year: 'I Year', subject: 'Modern Pharmaceutical Analysis', examYear: '2024' },
  ];

  return (
    <div className="space-y-8">
      <SectionHeader label="Past Papers" title="Question Papers" />
      <p className="font-dm-sans text-[15px] leading-[26px] text-[#474747] max-w-[720px]">
        Previous year question papers help students prepare effectively for Osmania University examinations.
        The following papers are available for reference from the college library and examination branch.
      </p>
      <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: `${college.primaryColor}18` }}>
        <table className="w-full min-w-[560px]">
          <thead>
            <tr style={{ backgroundColor: college.greenAccent }}>
              {['Programme', 'Year', 'Subject', 'Exam Year', 'Action'].map((h) => (
                <th
                  key={h}
                  className="font-dm-sans font-semibold text-[13px] text-white text-left px-5 py-3.5"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {papers.map((row, i) => (
              <tr
                key={i}
                className="border-t"
                style={{ borderColor: `${college.primaryColor}10`, backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}
              >
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5">{row.programme}</td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5">{row.year}</td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5">{row.subject}</td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5">{row.examYear}</td>
                <td className="px-5 py-3.5">
                  <a
                    href="#"
                    className="font-dm-sans font-semibold text-[13px] underline"
                    style={{ color: college.primaryColor }}
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="font-dm-sans text-[13px] text-[#6B7280] max-w-[600px]">
        For additional question papers, visit the college library or contact the examination branch at{' '}
        <a href={`mailto:${college.examination.contact.email}`} className="underline" style={{ color: college.primaryColor }}>
          {college.examination.contact.email}
        </a>
        .
      </p>
    </div>
  );
}

const sectionConfig = {
  overview: {
    title: 'Examination Branch @ GRCP',
    subtitle: 'Transparent, timely, and fair coordination of all examination activities',
    breadcrumb: ['Examination', 'Examination Branch @ GRCP'],
  },
  'sessional-timetable': {
    title: 'Sessional Time Table',
    subtitle: 'Internal mid-term examination schedules for B.Pharmacy and M.Pharmacy',
    breadcrumb: ['Examination', 'Sessional Time Table'],
  },
  'ou-timetables': {
    title: 'OU Time Tables',
    subtitle: 'Osmania University examination timetables for theory and practical exams',
    breadcrumb: ['Examination', 'OU Time Tables'],
  },
  'ou-notifications': {
    title: 'OU Notifications',
    subtitle: 'Latest examination notifications from Osmania University',
    breadcrumb: ['Examination', 'OU Notifications'],
  },
  results: {
    title: 'Results',
    subtitle: 'University and internal sessional examination results',
    breadcrumb: ['Examination', 'Results'],
  },
  'question-papers': {
    title: 'Question Papers',
    subtitle: 'Previous year question papers for university examinations',
    breadcrumb: ['Examination', 'Question Papers'],
  },
};

const sectionContent = {
  overview: <OverviewSection />,
  'sessional-timetable': <SessionalTimetableSection />,
  'ou-timetables': <OuTimetablesSection />,
  'ou-notifications': <OuNotificationsSection />,
  results: <ResultsSection />,
  'question-papers': <QuestionPapersSection />,
};

export default function ExaminationPage() {
  const { section } = useParams();
  const activeSection = section || 'overview';
  const config = sectionConfig[activeSection] || sectionConfig.overview;
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar college={college} />
      <NavStrip college={college} />
      <PageHero
        college={college}
        title={config.title}
        subtitle={config.subtitle}
        breadcrumb={config.breadcrumb}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">
          {sectionContent[activeSection] || sectionContent.overview}
        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
