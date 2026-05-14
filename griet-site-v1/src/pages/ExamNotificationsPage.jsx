import { useState } from 'react';
import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

/* ── Data ───────────────────────────────────────────────────────── */

const NOTIFICATIONS = [
  {
    year: '2024-25',
    items: [
      'B.Tech IV Year I Semester (R20) Regular Examinations – November / December 2024',
      'B.Tech III Year I Semester (R22) Regular Examinations – November / December 2024',
      'B.Tech II Year I Semester (R24) Regular Examinations – November / December 2024',
      'B.Tech I Year I Semester (R24) Regular Examinations – November / December 2024',
      'M.Tech I Year I Semester Regular Examinations – November / December 2024',
      'B.Tech IV Year I Semester (R18) Supplementary Examinations – October 2024',
      'B.Tech III Year I Semester (R20) Supplementary Examinations – October 2024',
      'B.Tech II Year I Semester (R22) Supplementary Examinations – October 2024',
      'B.Tech I Year I Semester (R24) Mid Examination – September 2024',
      'B.Tech II Year I Semester (R22) Mid Examination – September 2024',
      'B.Tech III Year I Semester (R20) Mid Examination – September 2024',
      'B.Tech IV Year I Semester (R18) Mid Examination – September 2024',
      'B.Tech IV Year II Semester (R20) Regular Examinations – May / June 2024',
      'B.Tech III Year II Semester (R22) Regular Examinations – May / June 2024',
      'B.Tech II Year II Semester (R22) Regular Examinations – May / June 2024',
      'M.Tech I Year II Semester Regular Examinations – May / June 2024',
      'M.Tech II Year II Semester Regular Examinations – May / June 2024',
    ],
  },
  {
    year: '2023-24',
    items: [
      'B.Tech IV Year I Semester (R20) Regular Examinations – November / December 2023',
      'B.Tech III Year I Semester (R20) Regular Examinations – November / December 2023',
      'B.Tech II Year I Semester (R22) Regular Examinations – November / December 2023',
      'B.Tech I Year I Semester (R22) Regular Examinations – November / December 2023',
      'M.Tech I Year I Semester Regular Examinations – November / December 2023',
      'B.Tech IV Year I Semester (R18) Supplementary Examinations – October 2023',
      'B.Tech III Year I Semester (R20) Supplementary Examinations – October 2023',
      'B.Tech II Year I Semester (R20) Supplementary Examinations – October 2023',
      'B.Tech I Year I Semester (R22) Mid Examination – September 2023',
      'B.Tech II Year I Semester (R22) Mid Examination – September 2023',
      'B.Tech III Year I Semester (R20) Mid Examination – September 2023',
      'B.Tech IV Year I Semester (R18) Mid Examination – September 2023',
      'B.Tech IV Year II Semester (R18) Regular Examinations – May / June 2023',
      'B.Tech III Year II Semester (R20) Regular Examinations – May / June 2023',
      'B.Tech II Year II Semester (R20) Regular Examinations – May / June 2023',
      'B.Tech I Year II Semester (R22) Regular Examinations – May / June 2023',
      'M.Tech II Year II Semester Regular Examinations – May / June 2023',
    ],
  },
  {
    year: '2022-23',
    items: [
      'B.Tech IV Year I Semester (R18) Regular Examinations – November / December 2022',
      'B.Tech III Year I Semester (R20) Regular Examinations – November / December 2022',
      'B.Tech II Year I Semester (R20) Regular Examinations – November / December 2022',
      'B.Tech I Year I Semester (R22) Regular Examinations – November / December 2022',
      'B.Tech IV Year I Semester (R17) Supplementary Examinations – October 2022',
      'B.Tech III Year I Semester (R18) Supplementary Examinations – October 2022',
      'B.Tech II Year I Semester (R20) Supplementary Examinations – October 2022',
      'B.Tech I Year I Semester (R20) Mid Examination – September 2022',
      'B.Tech IV Year II Semester (R18) Regular Examinations – May / June 2022',
      'B.Tech III Year II Semester (R18) Regular Examinations – May / June 2022',
      'B.Tech II Year II Semester (R20) Regular Examinations – May / June 2022',
      'B.Tech I Year II Semester (R20) Regular Examinations – May / June 2022',
      'M.Tech I Year II Semester Regular Examinations – May / June 2022',
      'B.Tech IV Year I Semester (R17) Mid Examination – September 2022',
    ],
  },
  {
    year: '2021-22',
    items: [
      'B.Tech IV Year I Semester (R18) Regular Examinations – November / December 2021',
      'B.Tech III Year I Semester (R18) Regular Examinations – November / December 2021',
      'B.Tech II Year I Semester (R20) Regular Examinations – November / December 2021',
      'B.Tech I Year I Semester (R20) Regular Examinations – November / December 2021',
      'B.Tech IV Year I Semester (R17) Supplementary Examinations – October 2021',
      'B.Tech III Year I Semester (R18) Mid Examination – September 2021',
      'B.Tech II Year I Semester (R18) Mid Examination – September 2021',
      'B.Tech I Year I Semester (R20) Mid Examination – September 2021',
      'B.Tech IV Year II Semester (R17) Regular Examinations – May / June 2021',
      'B.Tech III Year II Semester (R18) Regular Examinations – May / June 2021',
      'B.Tech II Year II Semester (R18) Regular Examinations – May / June 2021',
      'B.Tech I Year II Semester (R20) Regular Examinations – May / June 2021',
    ],
  },
];

/* ── Sub-components ─────────────────────────────────────────────── */

function PdfIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg className={`w-4 h-4 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

function YearSection({ year, items, isOpen, onToggle }) {
  return (
    <div className="mb-2 rounded overflow-hidden border border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-3 text-left font-hind font-bold text-[13px] text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: college.primaryColor }}
      >
        <span>Academic Year {year}</span>
        <div className="flex items-center gap-2">
          <span className="font-dm-sans font-semibold text-[11px] opacity-80 bg-white/20 rounded-full px-2 py-0.5">
            {items.length} notifications
          </span>
          <ChevronIcon open={isOpen} />
        </div>
      </button>

      {isOpen && (
        <ul className="divide-y divide-gray-100 bg-white">
          {items.map((item, i) => (
            <li key={i}>
              <a
                href="#"
                className="flex items-start gap-3 px-5 py-3 font-dm-sans text-[12.5px] font-medium transition-colors hover:bg-gray-50"
                style={{ color: college.primaryColor }}
              >
                <PdfIcon />
                <span className="flex-1 leading-snug">{item}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */

export default function ExamNotificationsPage() {
  const [openYear, setOpenYear] = useState('2024-25');

  const toggle = (year) => setOpenYear(prev => prev === year ? null : year);

  return (
    <AcademicsLayout title="Exam Notifications">
      <p className="font-dm-sans text-[13px] text-gray-500 mb-6">
        Official examination notifications for B.Tech and M.Tech programmes. Click a notification to download the PDF.
      </p>

      {NOTIFICATIONS.map(({ year, items }) => (
        <YearSection
          key={year}
          year={year}
          items={items}
          isOpen={openYear === year}
          onToggle={() => toggle(year)}
        />
      ))}
    </AcademicsLayout>
  );
}
