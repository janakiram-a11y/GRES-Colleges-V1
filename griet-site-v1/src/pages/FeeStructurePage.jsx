import { useState } from 'react';
import AdmissionsLayout, { SectionHeading } from '../components/AdmissionsLayout';
import college from '../theme';

const bTechFees = [
  {
    year: 'Year of Admission 2025-26',
    headers: ['B.Tech (Four Year Duration)', '(2025-26)\nI Year', '(2026-27)\nII Year', '(2027-28)\nIII Year', '(2028-29)\nIV Year'],
    rows: [
      ['Tuition Fee', '₹ 1,60,500', '₹ 1,60,500', '₹ 1,60,500', '₹ 1,60,500'],
      ['Special Fee', '₹ 5,500', '₹ 2,500', '₹ 2,500', '₹ 2,500'],
      ['NBA Fee', '₹ 3,000', '₹ 3,000', '₹ 3,000', '₹ 3,000'],
    ],
  },
  { year: 'Year of Admission 2024-25' },
  { year: 'Year of Admission 2023-24' },
  { year: 'Year of Admission 2022-23' },
  { year: 'Year of Admission 2021-22' },
  { year: 'Year of Admission 2020-21' },
  { year: 'Year of Admission 2019-20' },
  { year: 'Year of Admission 2018-19' },
  { year: 'Year of Admission 2017-18' },
  { year: 'Year of Admission 2016-17' },
  { year: 'Year of Admission 2015-16' },
];

const mTechFees = [
  {
    year: 'Year of Admission 2025-26',
    headers: ['M.Tech (Two Year Duration)', 'I Year', 'II Year'],
    rows: [
      ['Tuition Fee', '₹ 86,400', '₹ 86,400'],
      ['Special Fee', '₹ 7,500', '₹ 4,500'],
    ],
  },
  { year: 'Year of Admission 2024-25' },
  { year: 'Year of Admission 2023-24' },
  { year: 'Year of Admission 2022-23' },
];

const thStyle = {
  backgroundColor: college.primaryColor,
  color: '#fff',
  padding: '9px 14px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '12px',
  fontWeight: 600,
  textAlign: 'left',
  borderRight: '1px solid rgba(255,255,255,0.15)',
  whiteSpace: 'pre-line',
};

const tdStyle = {
  padding: '9px 14px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '13px',
  color: '#374151',
  borderBottom: '1px solid #e5e7eb',
  borderRight: '1px solid #e5e7eb',
};

function FeeTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto mt-2 mb-2">
      <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb', minWidth: '500px' }}>
        <thead>
          <tr>{headers.map((h, i) => <th key={i} style={thStyle}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ backgroundColor: ri % 2 === 0 ? '#ffffff' : '#fafafa' }}>
              {row.map((cell, ci) => (
                <td key={ci} style={tdStyle}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AccordionSection({ entry, isOpen, onToggle, isCurrent }) {
  return (
    <div className="mb-2 rounded overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-3 text-left font-dm-sans font-semibold text-[0.9375rem] transition-opacity hover:opacity-90"
        style={{
          backgroundColor: isCurrent ? college.accentColor : '#f3f4f6',
          color: isCurrent ? '#fff' : '#374151',
        }}
      >
        <span>{entry.year}</span>
        <svg className={`w-4 h-4 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && entry.rows && <FeeTable headers={entry.headers} rows={entry.rows} />}
      {isOpen && !entry.rows && (
        <p className="font-dm-sans text-[0.9375rem] text-gray-400 italic border border-dashed border-gray-300 rounded mx-0 p-4 mt-1">
          Fee data for this year will be updated shortly.
        </p>
      )}
    </div>
  );
}

export default function FeeStructurePage() {
  const [openBTech, setOpenBTech] = useState(0);
  const [openMTech, setOpenMTech] = useState(0);

  return (
    <AdmissionsLayout title="Fee Structure and Payment Procedure">

      {/* Online payment note */}
      <div className="mb-8 rounded-lg p-4 flex items-start gap-3" style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd' }}>
        <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <p className="font-dm-sans text-[0.9375rem] text-blue-800">
          Existing students can pay fees as per the fee structure through online (Digitally).
        </p>
      </div>

      {/* Current year highlight cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <div className="px-5 py-3" style={{ backgroundColor: college.primaryColor }}>
            <p className="font-hind font-bold text-[15px]" style={{ color: '#fff' }}>B.Tech — 2025-26 Fee Summary</p>
          </div>
          <div className="p-5 bg-white">
            {[
              { label: 'Tuition Fee', amount: '₹ 1,60,500' },
              { label: 'Special Fee (I Year)', amount: '₹ 5,500' },
              { label: 'NBA Fee', amount: '₹ 3,000' },
            ].map(({ label, amount }) => (
              <div key={label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="font-dm-sans text-[0.9375rem] text-gray-700">{label}</span>
                <span className="font-hind font-bold text-base" style={{ color: college.primaryColor }}>{amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-gray-200">
          <div className="px-5 py-3" style={{ backgroundColor: college.primaryColor }}>
            <p className="font-hind font-bold text-[15px]" style={{ color: '#fff' }}>M.Tech — 2025-26 Fee Summary</p>
          </div>
          <div className="p-5 bg-white">
            {[
              { label: 'Tuition Fee', amount: '₹ 86,400' },
              { label: 'Special Fee (I Year)', amount: '₹ 7,500' },
              { label: 'Special Fee (II Year)', amount: '₹ 4,500' },
            ].map(({ label, amount }) => (
              <div key={label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="font-dm-sans text-[0.9375rem] text-gray-700">{label}</span>
                <span className="font-hind font-bold text-base" style={{ color: college.primaryColor }}>{amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion history */}
      <section className="mb-10">
        <SectionHeading>B.Tech Programmes — Year-wise Fee Structure</SectionHeading>
        <div className="mt-3">
          {bTechFees.map((entry, i) => (
            <AccordionSection
              key={entry.year}
              entry={entry}
              isOpen={openBTech === i}
              isCurrent={i === 0}
              onToggle={() => setOpenBTech(openBTech === i ? null : i)}
            />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionHeading>M.Tech Programmes — Year-wise Fee Structure</SectionHeading>
        <div className="mt-3">
          {mTechFees.map((entry, i) => (
            <AccordionSection
              key={entry.year}
              entry={entry}
              isOpen={openMTech === i}
              isCurrent={i === 0}
              onToggle={() => setOpenMTech(openMTech === i ? null : i)}
            />
          ))}
        </div>
      </section>

    </AdmissionsLayout>
  );
}
