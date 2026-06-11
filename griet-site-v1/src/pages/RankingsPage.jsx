import { useState } from 'react';
import college from '../theme';
import CollegeLayout from '../CollegeLayout';
import { AcademicsBanner } from '../components/AcademicsLayout';

// ── Shared section heading (matches site pattern) ──────────────────────────
function SectionHeading({ children }) {
  return (
    <h2
      className="font-display font-bold text-xl mb-4 pb-2 inline-block"
      style={{ color: college.primaryColor, borderBottom: `2px solid ${college.accentColor}` }}
    >
      {children}
    </h2>
  );
}

// ── Ranking highlight value (large responsive number/text) ─────────────────
function RankingValue({ children }) {
  return (
    <strong className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight" style={{ color: college.primaryColor }}>
      {children}
    </strong>
  );
}

// ── Single ranking entry ────────────────────────────────────────────────────
function RankingEntry({ logo, alt, children, link, linkLabel }) {
  return (
    <div className="flex items-start gap-5 p-4 rounded-lg border border-gray-100 bg-white hover:shadow-sm transition-shadow">
      {logo && (
        <div className="flex-shrink-0 flex items-center justify-center w-full max-w-[80px] sm:max-w-[100px] aspect-square">
          <img src={logo} alt={alt || 'Ranking logo'} className="max-h-full max-w-full object-contain" />
        </div>
      )}
      <div className={`flex-1 font-dm-sans text-base leading-relaxed text-gray-700 ${!logo ? 'pl-2' : ''}`}>
        <span className="inline-block w-4 h-4 rounded-full mr-2 align-middle flex-shrink-0"
          style={{ backgroundColor: college.primaryColor, display: 'inline-block' }} />
        <span>{children}</span>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-1 font-semibold text-[0.9375rem] hover:underline"
            style={{ color: college.primaryColor }}
          >
            {linkLabel || link}
          </a>
        )}
      </div>
    </div>
  );
}

// ── Accordion year section ──────────────────────────────────────────────────
function YearAccordion({ year, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 mb-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-left transition-colors font-hind font-semibold text-[15px] text-white"
        style={{ backgroundColor: college.primaryColor }}
      >
        <span>Rankings &amp; Recognitions in {year}</span>
        <svg
          className={`w-4 h-4 transition-transform flex-shrink-0 ${open ? 'rotate-180' : ''}`}
          fill="currentColor" viewBox="0 0 20 20"
        >
          <path fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div className="overflow-x-auto">
          <div className="p-5 bg-white space-y-3 min-w-0">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Rankings data ────────────────────────────────────────────────────────────
const rankings2023 = {
  withLogos: [
    {
      logo: '/rankings/nirf-engineering.png',
      alt: 'NIRF Engineering',
      text: 'Ranked amongst ',
      highlight: '101-150 Rank Band',
      rest: ' in Engineering Category by National Institutional Ranking Framework 2023 (NIRF), Ministry of Human Resources and Development, Government of India.',
      link: '#',
      linkLabel: 'Link: NIRF RANKING-2023',
    },
    {
      logo: '/rankings/nirf-innovation.png',
      alt: 'NIRF Innovation',
      text: 'Ranked amongst ',
      highlight: '151-300 Rank Band',
      rest: ' in Innovation Category by National Institutional Ranking Framework 2023 (NIRF), Ministry of Human Resources and Development, Government of India (ARIIA 2023 Rankings).',
      link: '#',
      linkLabel: 'Link: NIRF INNOVATION RANKING 2023',
    },
    {
      logo: '/rankings/careers360.png',
      alt: "India's Best Engineering Colleges",
      text: 'Ranked amongst ',
      highlight: "India's Best Engineering Colleges 2023",
      rest: ' with "AAAA" rating released by CAREERS 360 Magazine.',
      link: null,
    },
    {
      logo: '/rankings/education-world.png',
      alt: 'Education World',
      text: '',
      highlight: '2nd Rank in Telangana & All India 29th Rank in EW India',
      rest: ' Engineering Colleges Rankings 2023-24 released by Education World Magazine.',
      link: null,
    },
    {
      logo: '/rankings/the-week.png',
      alt: 'The Week',
      text: '',
      highlight: '5th Rank in Telangana & All India 45th Rank',
      rest: ' in Best Private Engineering Colleges 2023 Rankings released by THE WEEK Magazine.',
      link: null,
    },
    {
      logo: '/rankings/competition-success.png',
      alt: 'Competition Success Review',
      text: '',
      highlight: '1st Rank in Telangana & ALL INDIA 9th Rank',
      rest: ' in Top Emerging Colleges of Super Excellence 2023 Rankings released by Competition Success Review Magazine and GHRDC.',
      link: null,
    },
  ],
  textOnly: [
    { highlight: '3rd Rank', rest: ' in Telangana in "Top Private Engineering Institutes 2023 in Telangana".' },
    { highlight: '12th Rank', rest: ' in "Top Private Engineering Institutes 2023 in South India".' },
    { highlight: 'All India 22nd Rank', rest: ' in "Top Engineering Institute Rankings 2023".' },
    { highlight: 'All India 20th Rank', rest: ' in "Top Private Engineering Institute Rankings 2023".' },
    {
      logo: '/rankings/times-of-india.png',
      alt: 'Times of India',
      highlight: 'All India 22nd Rank',
      rest: ' in "Top Private Institutes in India" by Times of India.',
    },
    { highlight: 'All India 47th Rank', rest: ' in Placements in "Top Private Engineering Institute Rankings 2023".' },
    { highlight: 'All India 14th Rank', rest: ' in Research in "Top Private Engineering Institute Rankings 2023".' },
  ],
};

const rankings2022 = [
  { highlight: '101-150 Rank Band', rest: ' in Engineering Category by NIRF 2022, Ministry of Human Resources and Development, Government of India.' },
  { highlight: '148th Rank', rest: ' in NIRF 2022 Engineering Rankings.' },
  { highlight: '2nd Rank in Telangana', rest: ' & All India 32nd Rank in EW India Engineering Colleges Rankings 2022 by Education World Magazine.' },
  { highlight: '6th Rank in Telangana', rest: ' in Best Private Engineering Colleges 2022 by THE WEEK Magazine.' },
  { highlight: 'All India 25th Rank', rest: ' in "Top Private Engineering Institute Rankings 2022" by Times of India.' },
];

const rankings2021 = [
  { highlight: '115th Rank', rest: ' in NIRF 2021 Engineering Rankings by Ministry of Education, Government of India.' },
  { highlight: '3rd Rank in Telangana', rest: ' & All India 35th Rank in EW India Engineering Colleges Rankings 2021.' },
  { highlight: 'NBA Accreditation', rest: ' for UG programmes CSE, IT, ECE, EEE, Civil, Mechanical and PG programmes.' },
  { highlight: 'All India 28th Rank', rest: ' in Top Private Engineering Institutes 2021.' },
];

const rankings2020 = [
  { highlight: '172nd Rank', rest: ' in NIRF 2020 Engineering Rankings by Ministry of Human Resources and Development.' },
  { highlight: 'NAAC A++ Grade', rest: ' accreditation with CGPA 3.55 by National Assessment and Accreditation Council.' },
  { highlight: '4th Rank in Telangana', rest: ' in Engineering Colleges Rankings 2020 by Education World Magazine.' },
];

const rankings2019 = [
  { highlight: '179th Rank', rest: ' in NIRF 2019 Engineering Rankings.' },
  { highlight: 'TEQIP-II Beneficiary', rest: ' – Received Rs. 400 Lakhs grant from World Bank for quality improvement.' },
  { highlight: 'ISO 9001:2015', rest: ' Certification for Quality Management System at the Institution.' },
];

const rankings2018 = [
  { highlight: '151-200 Rank Band', rest: ' in NIRF 2018 Engineering Rankings.' },
  { highlight: 'NBA Accreditation 2017', rest: ' for multiple UG & PG programmes for excellence in engineering education.' },
  { highlight: 'SIRO Recognition', rest: ' – Recognised as Scientific Industrial Research Organisation by DSIR, Government of India.' },
];

// ── Ranking body logos for the grid ─────────────────────────────────────────
const rankingLogos = [
  { src: '/rankings/nirf-engineering.png', alt: 'NIRF Engineering' },
  { src: '/rankings/nirf-innovation.png', alt: 'NIRF Innovation' },
  { src: '/rankings/careers360.png', alt: 'Careers360' },
  { src: '/rankings/education-world.png', alt: 'Education World' },
  { src: '/rankings/the-week.png', alt: 'The Week' },
  { src: '/rankings/competition-success.png', alt: 'Competition Success Review' },
  { src: '/rankings/times-of-india.png', alt: 'Times of India' },
  { src: '/rankings/naac.png', alt: 'NAAC' },
  { src: '/rankings/nba.png', alt: 'NBA' },
  { src: '/rankings/iso.png', alt: 'ISO' },
  { src: '/rankings/dsir.png', alt: 'DSIR / SIRO' },
  { src: '/rankings/teqip.png', alt: 'TEQIP' },
];

// ── Page ────────────────────────────────────────────────────────────────────
export default function RankingsPage() {
  return (
    <CollegeLayout college={college}>
      <AcademicsBanner title="Rankings &amp; Recognitions" />

      <div className="page-pad">

        <div className="mb-8">
          <SectionHeading>GRIET Rankings &amp; Recognitions</SectionHeading>
          <p className="font-dm-sans text-[15px] leading-relaxed text-gray-700 mt-2 max-w-3xl">
            Gokaraju Rangaraju Institute of Engineering &amp; Technology has consistently been recognised
            by leading national and international ranking bodies. These rankings reflect our commitment
            to academic excellence, research output, placements, and overall institutional quality.
          </p>
        </div>

        {/* Ranking body logos grid */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {rankingLogos.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-3 rounded-lg border border-gray-100 bg-white hover:shadow-sm transition-shadow"
              >
                <div className="w-full aspect-square max-w-[80px] sm:max-w-[100px] flex items-center justify-center mx-auto">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key ranking highlights */}
        <div className="mb-10">
          <SectionHeading>Key Highlights</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {[
              { value: 'NAAC A++', label: 'Grade with CGPA 3.55' },
              { value: '101–150', label: 'NIRF Engineering Rank Band 2023' },
              { value: '2nd', label: 'Rank in Telangana – Education World 2023' },
              { value: '1st', label: 'Rank in Telangana – CSR Rankings 2023' },
              { value: 'NBA', label: 'Accreditation for multiple UG & PG programmes' },
              { value: 'SIRO', label: 'Recognised by DSIR, Govt. of India' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg border border-gray-100 bg-white text-center hover:shadow-sm transition-shadow">
                <RankingValue>{item.value}</RankingValue>
                <p className="mt-2 font-dm-sans text-[0.9375rem] text-gray-600 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2023 — expanded by default */}
        <YearAccordion year={2023} defaultOpen>
          {rankings2023.withLogos.map((item, i) => (
            <RankingEntry key={i} logo={item.logo} alt={item.alt} link={item.link} linkLabel={item.linkLabel}>
              {item.highlight ? (
                <><strong>{item.highlight}</strong>{item.rest}</>
              ) : (
                <>{item.text}<strong>{item.highlight}</strong>{item.rest}</>
              )}
            </RankingEntry>
          ))}
          <div className="mt-2 space-y-2">
            {rankings2023.textOnly.map((item, i) => (
              <div key={i} className="flex items-start gap-3 px-4 py-2 font-dm-sans text-base leading-relaxed text-gray-700">
                {item.logo ? (
                  <div className="w-full max-w-[80px] sm:max-w-[100px] aspect-square flex-shrink-0 flex items-center justify-center">
                    <img src={item.logo} alt={item.alt} className="max-h-full max-w-full object-contain" />
                  </div>
                ) : (
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full"
                    style={{ backgroundColor: college.accentColor, minWidth: 8 }} />
                )}
                <span><strong>{item.highlight}</strong>{item.rest}</span>
              </div>
            ))}
          </div>
        </YearAccordion>

        {/* Remaining years — collapsed */}
        <YearAccordion year={2022}>
          {rankings2022.map((item, i) => (
            <RankingEntry key={i}>
              <strong>{item.highlight}</strong>{item.rest}
            </RankingEntry>
          ))}
        </YearAccordion>

        <YearAccordion year={2021}>
          {rankings2021.map((item, i) => (
            <RankingEntry key={i}>
              <strong>{item.highlight}</strong>{item.rest}
            </RankingEntry>
          ))}
        </YearAccordion>

        <YearAccordion year={2020}>
          {rankings2020.map((item, i) => (
            <RankingEntry key={i}>
              <strong>{item.highlight}</strong>{item.rest}
            </RankingEntry>
          ))}
        </YearAccordion>

        <YearAccordion year={2019}>
          {rankings2019.map((item, i) => (
            <RankingEntry key={i}>
              <strong>{item.highlight}</strong>{item.rest}
            </RankingEntry>
          ))}
        </YearAccordion>

        <YearAccordion year={2018}>
          {rankings2018.map((item, i) => (
            <RankingEntry key={i}>
              <strong>{item.highlight}</strong>{item.rest}
            </RankingEntry>
          ))}
        </YearAccordion>

        <YearAccordion year={2024}>
          <p className="font-dm-sans text-base text-gray-500 italic px-2 py-1">
            Rankings &amp; recognitions for 2024 will be updated shortly.
          </p>
        </YearAccordion>

        <YearAccordion year={2025}>
          <p className="font-dm-sans text-base text-gray-500 italic px-2 py-1">
            Rankings &amp; recognitions for 2025 will be updated shortly.
          </p>
        </YearAccordion>

      </div>

    </CollegeLayout>
  );
}
