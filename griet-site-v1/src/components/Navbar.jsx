import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { withAlpha } from '../theme';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024);
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isDesktop;
}

const QUICK_NAV_LINKS = [
  { label: 'College Diary', href: '/academics/college-diary', external: false },
  { label: 'QR-Codes', href: '/QR.pdf', external: true },
  { label: 'ECAP', href: 'http://www.webprosindia.com/Gokaraju', external: true },
  { label: 'GCAP', href: 'http://www.griet.in/gcap/greviance-login.php', external: true },
  { label: 'FAQs', href: '/faq', external: false },
  { label: 'Contact Us', href: '/contact', external: false },
];

const SEARCH_PAGES = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/about' },
  { title: 'Administration', href: '/administration' },
  { title: 'Governing Body', href: '/administration/governing-body' },
  { title: 'Academic Council', href: '/administration/academic-council' },
  { title: 'Director', href: '/administration/director' },
  { title: 'Principal', href: '/administration/principal' },
  { title: 'Deans', href: '/administration/deans' },
  { title: 'HODs', href: '/administration/hods' },
  { title: 'GRIET Strategic Plan', href: '/administration/strategic-plan' },
  { title: 'BOS', href: '/administration/bos' },
  { title: 'Finance Committee', href: '/administration/finance-committee' },
  { title: 'Coordinators & Committees', href: '/administration/coordinators' },
  { title: 'IDMC', href: '/administration/idmc' },
  { title: 'IIC', href: '/administration/iic' },
  { title: 'Anti-Sexual Harassment Cell', href: '/administration/anti-sexual-harassment-cell' },
  { title: "Women's Development Cell", href: '/administration/womens-development-cell' },
  { title: 'Organization Chart', href: '/administration/organization-chart' },
  { title: 'Annual Reports', href: '/administration/annual-reports' },
  { title: 'GRIET Skill Series', href: '/administration/griet-skill-series' },
  { title: 'Admissions', href: '/admissions' },
  { title: 'Programmes', href: '/admissions/programmes' },
  { title: 'Admission Procedure', href: '/admissions/admission-procedure' },
  { title: 'Fee Structure', href: '/admissions/fee-structure' },
  { title: 'EAPCET Last Rank', href: '/admissions/eapcet-last-rank' },
  { title: 'ECET Last Rank', href: '/admissions/ecet-last-rank' },
  { title: 'Scholarships', href: '/admissions/scholarships' },
  { title: 'Academics', href: '/academics' },
  { title: 'Regulations', href: '/academics/regulations' },
  { title: 'Syllabus', href: '/academics/syllabus' },
  { title: 'Academic Calendar', href: '/academics/academic-calendar' },
  { title: 'Library', href: '/academics/library' },
  { title: 'Code of Conduct', href: '/academics/code-of-conduct' },
  { title: 'College Diary', href: '/academics/college-diary' },
  { title: 'Endowment Awards', href: '/academics/endowment-awards' },
  { title: 'Finishing School', href: '/academics/finishing-school' },
  { title: 'Digital Wellbeing Council', href: '/academics/digital-wellbeing-council' },
  { title: 'Examinations', href: '/examinations' },
  { title: 'Gold Medals', href: '/examinations/gold-medals' },
  { title: 'Exam Notifications', href: '/examinations/exam-notifications' },
  { title: 'Results', href: '/examinations/results' },
  { title: 'Exam Branch Downloads', href: '/examinations/exam-branch-downloads' },
  { title: 'Transcripts & Certificates', href: '/examinations/transcripts-certificates' },
  { title: 'CSE Department', href: '/departments/cse' },
  { title: 'ECE Department', href: '/departments/ece' },
  { title: 'AIML Department', href: '/departments/aiml' },
  { title: 'CSBS Department', href: '/departments/csbs' },
  { title: 'Data Science Department', href: '/departments/ds' },
  { title: 'Civil Engineering', href: '/departments/civil' },
  { title: 'Mechanical Engineering', href: '/departments/mechanical' },
  { title: 'EEE Department', href: '/departments/eee' },
  { title: 'IT Department', href: '/departments/it' },
  { title: 'Humanities and Sciences', href: '/departments/hs' },
  { title: 'Rankings', href: '/rankings' },
  { title: 'Research', href: '/research' },
  { title: 'Research Projects', href: '/research' },
  { title: 'Patents', href: '/research' },
  { title: 'Publications', href: '/research' },
  { title: 'PhD Programmes', href: '/research' },
  { title: 'Placements', href: '/placements' },
  { title: 'IQAC', href: '/iqac' },
  { title: 'FAQs', href: '/faq' },
  { title: 'Contact Us', href: '/contact' },
  { title: 'Alumni', href: '/alumni' },
  { title: 'Careers', href: '/careers' },
  { title: 'NIRF', href: '/nirf' },
  { title: 'NIRF Rankings', href: '/nirf' },
  { title: 'Mandatory Disclosures', href: '/mandatory-disclosures' },
  { title: 'NSS', href: '/nss' },
  { title: 'National Service Scheme', href: '/nss' },
];

function SearchBar({ college }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  const results =
    query.trim().length > 1
      ? SEARCH_PAGES.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 8)
      : [];

  useEffect(() => {
    const handle = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (results.length > 0) {
      navigate(results[0].href);
      setQuery('');
      setOpen(false);
    }
  };

  const handleSelect = (href) => {
    navigate(href);
    setQuery('');
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => query.trim().length > 1 && setOpen(true)}
          placeholder="Search"
          className="font-dm-sans text-[13px] text-gray-700 placeholder-gray-400 border border-gray-300 rounded-l px-3 h-[30px] w-[180px] focus:outline-none focus:border-[#5B1027] transition-colors bg-white"
        />
        <button
          type="submit"
          className="h-[30px] w-[34px] flex items-center justify-center text-white rounded-r flex-shrink-0 transition-opacity hover:opacity-90"
          style={{ backgroundColor: college.primaryColor }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" strokeLinecap="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
          </svg>
        </button>
      </form>
      {open && results.length > 0 && (
        <div className="absolute right-0 top-full mt-1 w-[260px] bg-white border border-gray-200 shadow-lg z-50 rounded overflow-hidden">
          {results.map((page) => (
            <button
              key={page.href + page.title}
              onClick={() => handleSelect(page.href)}
              className="w-full text-left px-4 py-2.5 font-dm-sans text-[13px] text-gray-700 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
            >
              {page.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar({ college, scrolled = false }) {
  const isDesktop = useIsDesktop();

  return (
    <>
      {/* Quick nav — hidden on mobile */}
      <div
        className="hidden md:block w-full bg-white"
        style={{ borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.08)}` }}
      >
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-[60px] flex justify-between items-center h-[40px]">
          <div className="flex items-center gap-4 lg:gap-6">
            {QUICK_NAV_LINKS.map(({ label, href, external }) =>
              external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dm-sans font-medium text-[13px] leading-4 transition-colors"
                  style={{ color: college.primaryColor }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = college.accentColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = college.primaryColor)}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  to={href}
                  className="font-dm-sans font-medium text-[13px] leading-4 transition-colors"
                  style={{ color: college.primaryColor }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = college.accentColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = college.primaryColor)}
                >
                  {label}
                </Link>
              )
            )}
          </div>
          <SearchBar college={college} />
        </div>
      </div>

      <nav
        className="w-full bg-white/[0.95] backdrop-blur-md sticky top-0 z-50"
        style={{
          padding: isDesktop ? (scrolled ? '8px 0' : '12px 0') : '0',
          borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.08)}`,
          transition: 'padding 0.3s ease',
        }}
      >
        <div
          className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-[60px] flex justify-between items-center"
          style={{
            height: isDesktop ? (scrolled ? '60px' : '88px') : '56px',
            transition: 'height 0.3s ease',
          }}
        >
          <div className="flex items-center">
            <img
              src={college.logo}
              alt={`${college.shortName} Logo`}
              className="flex-shrink-0 object-contain"
              style={{
                width: isDesktop ? '300px' : '180px',
                height: isDesktop ? (scrolled ? '50px' : '80px') : '40px',
                transition: 'height 0.3s ease',
              }}
            />
          </div>
          <div className="hidden md:flex items-center">
            {college.accreditationLogo && (
              <img
                src={college.accreditationLogo}
                alt="Accreditation Logos"
                className="object-contain"
                style={{
                  height: isDesktop ? (scrolled ? '46px' : '80px') : '40px',
                  transition: 'height 0.3s ease',
                }}
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
