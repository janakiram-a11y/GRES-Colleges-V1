import { useState } from 'react';
import college from '../theme';
import CollegeLayout from '../CollegeLayout';
import SectionHeading from '../components/SectionHeading';

// ── Year list ─────────────────────────────────────────────────────────────────
const PLACEMENT_YEARS = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011];

// ── Full year data ────────────────────────────────────────────────────────────
const YEAR_DATA = {
  2026: {
    highest: '54 LPA',
    highestCo: 'Microsoft',
    total: '1,255',
    offers: '1,200+',
    above6: '500+',
    companies: '130+',
    banner: {
      title: '🎉 Congratulations!! — 2026 Batch Highest Package',
      lines: [
        'Microsoft — 54.0 Lakhs  |  MYNTRA — 30.5 Lakhs  |  CISCO — 24.3 Lakhs',
        'Walmart — 21.0 Lakhs  |  JPMorgan Chase & Co. — 19.8 Lakhs',
      ],
      sub: 'AT&T · Oracle · Infosys · TCS · Capgemini · Accenture · IBM · Cognizant · HSBC · FedEx and 120+ more',
    },
    topCompanies: [
      { name: 'Microsoft',      domain: 'microsoft.com',   lpa: 54.0 },
      { name: 'Myntra',         domain: 'myntra.com',      lpa: 30.5 },
      { name: 'Cisco',          domain: 'cisco.com',       lpa: 24.3 },
      { name: 'Walmart',        domain: 'walmart.com',     lpa: 21.0 },
      { name: 'JPMorgan Chase', domain: 'jpmorgan.com',    lpa: 19.8 },
      { name: 'AT&T',           domain: 'att.com',         lpa: null },
      { name: 'Oracle',         domain: 'oracle.com',      lpa: null },
      { name: 'Infosys',        domain: 'infosys.com',     lpa: null },
      { name: 'TCS',            domain: 'tcs.com',         lpa: null },
      { name: 'Capgemini',      domain: 'capgemini.com',   lpa: null },
      { name: 'Accenture',      domain: 'accenture.com',   lpa: null },
      { name: 'IBM',            domain: 'ibm.com',         lpa: null },
      { name: 'Cognizant',      domain: 'cognizant.com',   lpa: null },
      { name: 'HSBC',           domain: 'hsbc.com',        lpa: null },
      { name: 'FedEx',          domain: 'fedex.com',       lpa: null },
    ],
    depts: [
      { dept: 'CSE',         count: 460 },
      { dept: 'AIML',        count: 232 },
      { dept: 'IT',          count: 196 },
      { dept: 'DS',          count: 152 },
      { dept: 'ECE',         count: 96  },
      { dept: 'CSBS',        count: 58  },
      { dept: 'EEE',         count: 29  },
      { dept: 'Mech',        count: 18  },
      { dept: 'Civil',       count: 12  },
      { dept: 'M.Tech',      count: 2   },
    ],
  },
  2025: {
    highest: '51.6 LPA',
    highestCo: 'Google',
    total: '1,216',
    offers: '1,200+',
    above6: '400+',
    companies: '130+',
    banner: {
      title: '🎉 Congratulations!! — 2025 Batch Highest Package',
      lines: [
        'Google — 51.6 Lakhs  |  Amazon — 46.3 Lakhs  |  PayPal — 36.5 Lakhs',
        'CommVault — 34.1 Lakhs  |  Qualcomm — 30.0 Lakhs  |  Oracle — 25.5 Lakhs  |  CISCO — 24.3 Lakhs',
      ],
      sub: 'JPMorgan Chase · IBM · TCS · Infosys · Wipro and 120+ more companies',
    },
    topCompanies: [
      { name: 'Google',         domain: 'google.com',      lpa: 51.6 },
      { name: 'Amazon',         domain: 'amazon.com',      lpa: 46.3 },
      { name: 'PayPal',         domain: 'paypal.com',      lpa: 36.5 },
      { name: 'CommVault',      domain: 'commvault.com',   lpa: 34.1 },
      { name: 'Qualcomm',       domain: 'qualcomm.com',    lpa: 30.0 },
      { name: 'Oracle',         domain: 'oracle.com',      lpa: 25.5 },
      { name: 'Cisco',          domain: 'cisco.com',       lpa: 24.3 },
      { name: 'JPMorgan Chase', domain: 'jpmorgan.com',    lpa: null  },
      { name: 'IBM',            domain: 'ibm.com',         lpa: null  },
      { name: 'TCS',            domain: 'tcs.com',         lpa: null  },
      { name: 'Infosys',        domain: 'infosys.com',     lpa: null  },
      { name: 'Wipro',          domain: 'wipro.com',       lpa: null  },
    ],
    depts: [
      { dept: 'CSE',    count: 435 },
      { dept: 'AIML',   count: 213 },
      { dept: 'IT',     count: 204 },
      { dept: 'ECE',    count: 145 },
      { dept: 'DS',     count: 63  },
      { dept: 'CSBS',   count: 62  },
      { dept: 'Mech',   count: 38  },
      { dept: 'EEE',    count: 29  },
      { dept: 'Civil',  count: 22  },
      { dept: 'M.Tech', count: 5   },
    ],
  },
  2024: {
    highest: '34.4 LPA',
    highestCo: 'PayPal',
    total: '880',
    offers: '800+',
    above6: '400+',
    companies: '114+',
    banner: {
      title: '🎉 Congratulations!! — 2024 Batch Highest Package',
      lines: [
        'PayPal — 34.4 Lakhs  |  CommVault — 34.1 Lakhs  |  Flipkart — 32.5 Lakhs',
        'Oracle — 28.4 Lakhs  |  NetLinkNBN — 27.0 Lakhs  |  CISCO — 17.8 Lakhs',
      ],
      sub: 'Darwinbox · Sophos and 108+ more companies',
    },
    topCompanies: [
      { name: 'PayPal',       domain: 'paypal.com',      lpa: 34.4 },
      { name: 'CommVault',    domain: 'commvault.com',   lpa: 34.1 },
      { name: 'Flipkart',     domain: 'flipkart.com',    lpa: 32.5 },
      { name: 'Oracle',       domain: 'oracle.com',      lpa: 28.4 },
      { name: 'NetLinkNBN',   domain: null,              lpa: 27.0 },
      { name: 'Cisco',        domain: 'cisco.com',       lpa: 17.8 },
      { name: 'Darwinbox',    domain: 'darwinbox.com',   lpa: 16.3 },
      { name: 'Sophos',       domain: 'sophos.com',      lpa: 15.8 },
      { name: 'TCS',          domain: 'tcs.com',         lpa: null  },
      { name: 'Infosys',      domain: 'infosys.com',     lpa: null  },
      { name: 'Wipro',        domain: 'wipro.com',       lpa: null  },
      { name: 'Capgemini',    domain: 'capgemini.com',   lpa: null  },
    ],
    depts: [
      { dept: 'CSE',    count: 314 },
      { dept: 'ECE',    count: 195 },
      { dept: 'IT',     count: 137 },
      { dept: 'AIML',   count: 62  },
      { dept: 'DS',     count: 58  },
      { dept: 'CSBS',   count: 49  },
      { dept: 'Mech',   count: 31  },
      { dept: 'EEE',    count: 22  },
      { dept: 'Civil',  count: 8   },
      { dept: 'M.Tech', count: 4   },
    ],
  },
  2023: {
    highest: '44.15 LPA',
    highestCo: 'Amazon SDE',
    total: '1,412',
    offers: '1,400+',
    above6: '400+',
    companies: '101',
    banner: {
      title: '🎉 Congratulations!! — 2023 Batch Highest Package',
      lines: [
        'Amazon SDE — 44.15 Lakhs  |  Darwinbox — 21.8 Lakhs  |  CISCO — 17.4 Lakhs',
        'IBM — 11.5 Lakhs  |  Oracle — 9.0 Lakhs  |  TCS Digital — 7.0 Lakhs',
      ],
      sub: 'Infosys · Wipro · Cognizant and 95+ more companies',
    },
    topCompanies: [
      { name: 'Amazon',      domain: 'amazon.com',      lpa: 44.15 },
      { name: 'Darwinbox',   domain: 'darwinbox.com',   lpa: 21.8  },
      { name: 'Cisco',       domain: 'cisco.com',       lpa: 17.4  },
      { name: 'IBM',         domain: 'ibm.com',         lpa: 11.5  },
      { name: 'Oracle',      domain: 'oracle.com',      lpa: 9.0   },
      { name: 'TCS',         domain: 'tcs.com',         lpa: 7.0   },
      { name: 'Infosys',     domain: 'infosys.com',     lpa: 3.6   },
      { name: 'Wipro',       domain: 'wipro.com',       lpa: null  },
      { name: 'Cognizant',   domain: 'cognizant.com',   lpa: null  },
      { name: 'Capgemini',   domain: 'capgemini.com',   lpa: null  },
    ],
    depts: [
      { dept: 'CSE',    count: 568 },
      { dept: 'ECE',    count: 385 },
      { dept: 'IT',     count: 218 },
      { dept: 'EEE',    count: 106 },
      { dept: 'Mech',   count: 72  },
      { dept: 'Civil',  count: 62  },
      { dept: 'M.Tech', count: 5   },
    ],
  },
};

// Fallback for years without detailed data
function fallbackData(year) {
  return {
    highest: '—', highestCo: '', total: '—', offers: '—', above6: '—', companies: '—',
    banner: null, topCompanies: [], depts: [],
  };
}

function getYearData(year) {
  return YEAR_DATA[year] || fallbackData(year);
}

const COMPANY_LOGOS = {
  'Microsoft':      '/logos/Microsoft.svg',
  'Myntra':         '/logos/Myntra.png',
  'Cisco':          '/logos/Cisco.svg',
  'Walmart':        '/logos/Walmart.svg',
  'JPMorgan Chase': '/logos/JPMorgan.svg',
  'AT&T':           '/logos/ATT.svg',
  'Oracle':         '/logos/Oracle.svg',
  'TCS':            '/logos/TCS.svg',
  'Capgemini':      '/logos/Capgemini.svg',
  'Accenture':      '/logos/Accenture.svg',
  'IBM':            '/logos/IBM.svg',
  'Cognizant':      '/logos/Cognizant.svg',
  'HSBC':           '/logos/HSBC.svg',
  'FedEx':          '/logos/FedEx.svg',
  'Infosys':        '/logos/Infosys.jpg',
};

// ── Sidebar ───────────────────────────────────────────────────────────────────
function YearPillRow({ activeYear, onYearSelect }) {
  return (
    <div className="lg:hidden w-full overflow-x-auto pb-2 mb-6">
      <div className="flex gap-2 min-w-max px-1">
        {PLACEMENT_YEARS.map((year) => {
          const isActive = activeYear === year;
          return (
            <button key={year} onClick={() => onYearSelect(year)}
              className="flex-shrink-0 px-4 py-1.5 rounded-full border font-display text-[0.9375rem] font-semibold transition-colors"
              style={{ backgroundColor: isActive ? college.primaryColor : '#fff', borderColor: isActive ? college.primaryColor : '#d1d5db', color: isActive ? '#fff' : '#374151' }}>
              {year}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PlacementSidebar({ activeYear, onYearSelect }) {
  return (
    <aside className="hidden lg:block w-60 flex-shrink-0 lg:sticky lg:top-[176px]">
      <div className="rounded-lg border border-gray-200">
        <div className="rounded-t-lg px-5 py-3"
          style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)` }}>
          <span className="font-display font-bold text-[0.9375rem] text-white tracking-wide">
            Yearwise Placement Details
          </span>
        </div>
        <ul className="rounded-b-lg divide-y divide-gray-100 bg-white max-h-[calc(100vh-240px)] overflow-y-auto">
          {PLACEMENT_YEARS.map((year) => {
            const isActive = activeYear === year;
            return (
              <li key={year}>
                <button onClick={() => onYearSelect(year)}
                  className="w-full flex items-center gap-3 px-5 py-2.5 transition-colors hover:bg-gray-50 text-left"
                  style={{ backgroundColor: isActive ? `${college.primaryColor}0d` : undefined }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0 transition-colors"
                    style={{ backgroundColor: isActive ? college.primaryColor : college.accentColor }} />
                  <span className="font-display text-[0.9375rem]"
                    style={{ color: isActive ? college.primaryColor : '#374151', fontWeight: isActive ? 700 : 500 }}>
                    {year}
                  </span>
                  {year === 2026 && (
                    <span className="ml-auto text-[10px] font-display font-bold px-1.5 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: college.accentColor }}>NEW</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

// ── Congratulations banner ────────────────────────────────────────────────────
function PlacementsBanner({ year }) {
  const data = getYearData(year);
  if (!data.banner) return null;
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 mb-8 shadow-sm">
      <div className="text-white text-center py-5 px-6"
        style={{ background: `linear-gradient(135deg, #3a0b1a 0%, ${college.primaryColor} 100%)` }}>
        <p className="font-display font-bold text-lg md:text-xl uppercase tracking-wide mb-2 text-white">
          {data.banner.title}
        </p>
        {data.banner.lines.map((line, i) => (
          <p key={i} className="font-body text-[0.9375rem] text-white/90 leading-relaxed">{line}</p>
        ))}
      </div>
      <div className="text-center py-2.5 px-6 font-display font-semibold text-[0.8125rem] tracking-wide"
        style={{ backgroundColor: college.accentColor, color: '#fff' }}>
        {data.banner.sub}
      </div>
    </div>
  );
}

// ── Year stats panel ──────────────────────────────────────────────────────────
function YearStatsPanel({ year }) {
  const data = getYearData(year);

  return (
    <div className="space-y-8">

      {/* Top companies */}
      {data.topCompanies.length > 0 && (
        <div>
          <h4 className="font-display font-bold text-[0.9375rem] mb-4 uppercase tracking-wide"
            style={{ color: college.primaryColor }}>
            Top Recruiters — {year}
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {data.topCompanies.map((c) => {
              const logo = COMPANY_LOGOS[c.name];
              return logo ? (
                <div key={c.name}
                  className="relative bg-white rounded-xl border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow overflow-hidden"
                  style={{ boxShadow: '0 1px 4px rgba(91,16,39,0.05)', height: '80px' }}>
                  {c.lpa && (
                    <span className="absolute top-2 right-2 text-[0.65rem] font-display font-bold px-1.5 py-0.5 rounded-full text-white leading-none z-10"
                      style={{ backgroundColor: college.primaryColor }}>
                      {c.lpa} L
                    </span>
                  )}
                  <img src={logo} alt={c.name} className="w-full h-full object-contain"
                    style={/\.(png|jpg|jpeg)$/.test(logo) ? {} : { transform: 'scale(1.5)', transformOrigin: 'center' }} />
                </div>
              ) : (
                <span key={c.name}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border font-display text-[0.8125rem] font-semibold bg-white text-center leading-tight"
                  style={{ borderColor: college.primaryColor + '40', color: '#374151' }}>
                  {c.name}
                  {c.lpa && (
                    <span className="text-[0.65rem] font-bold px-1.5 py-0.5 rounded-full text-white flex-shrink-0"
                      style={{ backgroundColor: college.primaryColor }}>
                      {c.lpa} L
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* No data state */}
      {data.total === '—' && (
        <div className="rounded-xl p-8 bg-gray-50 border border-gray-200 text-center">
          <p className="font-display font-semibold text-gray-500">
            Detailed data for {year} will be updated soon.
          </p>
          <p className="font-body text-[0.875rem] text-gray-400 mt-1">
            Visit <a href="https://www.griet.ac.in/placements.php" target="_blank" rel="noopener noreferrer"
              className="underline" style={{ color: college.primaryColor }}>griet.ac.in/placements.php</a> for year-specific data.
          </p>
        </div>
      )}
    </div>
  );
}

// ── Placement image carousel ──────────────────────────────────────────────────
const CAROUSEL_IMAGES = [
  { src: 'https://www.griet.ac.in/images/img_slide1.png',              alt: 'GRIET Placements Achievement' },
  { src: 'https://www.griet.ac.in/images/placements/img_slide2.jpg',   alt: 'GRIET Placements 2025' },
  { src: 'https://www.griet.ac.in/images/placements/img_slide3.jpg',   alt: 'GRIET Placements Highlights' },
  { src: 'https://www.griet.ac.in/images/placements/img_slide4.jpg',   alt: 'Campus Placements' },
  { src: 'https://www.griet.ac.in/images/placements/img_slide5.jpg',   alt: 'Top Recruiters at GRIET' },
  { src: 'https://www.griet.ac.in/images2/2022-Placements_1.jpg',      alt: 'GRIET Placements 2022' },
  { src: 'https://www.griet.ac.in/2025/highest%20package%202025.jpg',  alt: 'Highest Package 2025' },
  { src: 'https://www.griet.ac.in/images/placements/img_slide20.jpg',  alt: 'GRIET Placements Gallery' },
  { src: 'https://www.griet.ac.in/images/placements/img_slide2.1.jpg', alt: 'Placements Drive' },
];

// Hero carousel — full width, fixed 16:7 aspect ratio so every image is the same size
function PlacementHeroCarousel() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  const next = () => setActive((a) => (a + 1) % CAROUSEL_IMAGES.length);

  return (
    <div className="relative w-full bg-black overflow-hidden" style={{ aspectRatio: '16/7' }}>
      {/* Sliding track — all images in a row, translated to show active */}
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ width: `${CAROUSEL_IMAGES.length * 100}%`, transform: `translateX(-${active * (100 / CAROUSEL_IMAGES.length)}%)` }}
      >
        {CAROUSEL_IMAGES.map((img) => (
          <div key={img.src} className="flex-shrink-0 h-full" style={{ width: `${100 / CAROUSEL_IMAGES.length}%` }}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        ))}
      </div>

      {/* Nav arrows */}
      <button onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/75 text-white text-2xl flex items-center justify-center transition-colors z-10">
        ‹
      </button>
      <button onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/75 text-white text-2xl flex items-center justify-center transition-colors z-10">
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {CAROUSEL_IMAGES.map((_, i) => (
          <button key={i} onClick={() => setActive(i)}
            className="w-2.5 h-2.5 rounded-full transition-all"
            style={{ backgroundColor: i === active ? '#fff' : 'rgba(255,255,255,0.4)' }} />
        ))}
      </div>

    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function PlacementsPage() {
  const [activeYear, setActiveYear] = useState(2026);

  return (
    <CollegeLayout college={college}>
      {/* Hero carousel replaces text banner */}
      <PlacementHeroCarousel />

      <div className="page-pad">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          <PlacementSidebar activeYear={activeYear} onYearSelect={setActiveYear} />

          <div className="flex-1 min-w-0">

            <YearPillRow activeYear={activeYear} onYearSelect={setActiveYear} />

            <div className="space-y-10">
            {/* Congratulations banner — updates with selected year */}
            <PlacementsBanner year={activeYear} />

            {/* Overall highlights (fixed — latest figures) */}
            <section className="rounded-xl py-10 px-6" style={{ backgroundColor: '#F6F1F2' }}>
              <p className="font-display font-bold text-center text-[0.8125rem] uppercase tracking-widest mb-6"
                style={{ color: college.accentColor }}>
                Overall Placement Highlights
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { count: '54 LPA',  label: 'Highest Package',     desc: 'Microsoft, 2026 batch' },
                  { count: '1,255',   label: 'Students Placed',     desc: 'In 2026 alone' },
                  { count: '1,200+',  label: 'Offers Per Year',     desc: 'From 130+ visiting companies' },
                  { count: '25+',     label: 'Years of Excellence', desc: 'Strong track record since 1997' },
                ].map((s) => (
                  <div key={s.label}
                    className="bg-white rounded-xl px-5 py-7 flex flex-col items-center text-center gap-2"
                    style={{ borderLeft: `4px solid ${college.primaryColor}`, boxShadow: '0 1px 4px rgba(91,16,39,0.06), 0 4px 16px -4px rgba(91,16,39,0.10)' }}>
                    <span className="font-display font-bold text-[1.75rem] leading-none"
                      style={{ color: college.primaryColor }}>
                      {s.count}
                    </span>
                    <span className="font-display font-semibold text-sm" style={{ color: college.primaryColor }}>{s.label}</span>
                    <span className="font-body text-[0.75rem] text-gray-500 leading-relaxed">{s.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* About the Cell */}
            <section>
              <SectionHeading size="xl">Training &amp; Placements Cell</SectionHeading>
              <div className="space-y-3 font-body text-base leading-relaxed text-gray-700">
                <p>The Training &amp; Placements Cell of GRIET:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                  <li>
                    Imparts training in soft skills to students from the first year onwards to prepare
                    them appropriately for careers in industry.
                  </li>
                  <li>
                    Coordinates the Industry and the GRIETians for suitable training &amp; placements.
                  </li>
                </ol>
                <p>
                  The database of all students of different branches is compiled and furnished to identified
                  industries from time to time. As per the manpower requirements of the industries, On or Off
                  Campus Placements are conducted to provide suitable career opportunities to students.
                </p>
                <p>
                  A large number of students have been placed in all leading Software, Hardware, Manufacturing
                  and Maintenance industries. A good number of students pursue higher studies at home and abroad.
                  Every batch witnesses a few dawning the hats as entrepreneurs.
                </p>
              </div>
            </section>

            {/* Year-wise stats — updates on sidebar selection */}
            <section>
              <SectionHeading size="xl">Placement Statistics — {activeYear}</SectionHeading>
              <YearStatsPanel year={activeYear} />
            </section>

            {/* Recruitment process */}
            <section>
              <SectionHeading size="xl">Recruitment Process</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { step: '01', title: 'Pre-Placement Training',  desc: 'Year-round aptitude, soft skills, technical, and interview preparation from first year onwards.' },
                  { step: '02', title: 'Company Registration',    desc: 'Companies register with the T&P cell and share their requirements for the placement season.' },
                  { step: '03', title: 'Eligibility Screening',   desc: 'Students are shortlisted based on academic performance and company eligibility criteria.' },
                  { step: '04', title: 'Selection Process',       desc: 'Online tests, technical interviews, HR rounds conducted at campus or online.' },
                ].map((s) => (
                  <div key={s.step}
                    className="flex gap-4 p-5 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white text-sm"
                      style={{ backgroundColor: college.primaryColor }}>
                      {s.step}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-base mb-1" style={{ color: college.primaryColor }}>
                        {s.title}
                      </h3>
                      <p className="font-body text-[0.875rem] text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section>
              <SectionHeading size="xl">Contact Information</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { role: 'Dean Training & Placements', name: 'Dr. K. Butchi Raju',   phone: '7702964747',            email: null },
                  { role: 'Training & Placements Officer', name: 'Dr. M. Aravind Kumar', phone: '9849027132',          email: null },
                  { role: 'Placements Cell',             name: '',                      phone: '7207344440 / 7207714441', email: null },
                  { role: 'Email',                       name: '',                      phone: null,                   email: 'placements@gokaraju.org' },
                ].map((row, i) => (
                  <div key={i}
                    className="rounded-xl p-5 bg-white border-l-4 border border-gray-100 shadow-sm"
                    style={{ borderLeftColor: college.primaryColor, boxShadow: '0 1px 4px rgba(91,16,39,0.06), 0 4px 16px -4px rgba(91,16,39,0.10)' }}>
                    <p className="font-display font-bold text-[0.75rem] uppercase tracking-[0.1em] mb-1"
                      style={{ color: college.primaryColor }}>
                      {row.role}
                    </p>
                    {row.name && (
                      <p className="font-display font-semibold text-[0.9375rem] text-gray-800 mb-0.5">{row.name}</p>
                    )}
                    {row.phone && (
                      <a href={`tel:${row.phone.replace(/\D/g, '')}`}
                        className="font-body text-[0.9375rem] text-gray-600 hover:underline block">
                        📞 {row.phone}
                      </a>
                    )}
                    {row.email && (
                      <a href={`mailto:${row.email}`}
                        className="font-body text-[0.9375rem] hover:underline block"
                        style={{ color: college.primaryColor }}>
                        ✉ {row.email}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
            </div>{/* end space-y-10 */}

          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
