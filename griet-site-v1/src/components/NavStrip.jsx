import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024);
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isDesktop;
}

const ROUTE_MAP = {
  // Administration
  'Management': '/administration',
  'Governing Body': '/administration/governing-body',
  'Academic Council': '/administration/academic-council',
  'Director': '/administration/director',
  'Principal': '/administration/principal',
  'Deans': '/administration/deans',
  'HODs': '/administration/hods',
  'GRIET Strategic Plan': '/administration/strategic-plan',
  'BOS': '/administration/bos',
  'Finance Committee': '/administration/finance-committee',
  'Coordinators & Committees': '/administration/coordinators',
  'IDMC': '/administration/idmc',
  'IIC': '/administration/iic',
  'Anti-Sexual Harassment Cell': '/administration/anti-sexual-harassment-cell',
  "Women's Development Cell": '/administration/womens-development-cell',
  'Organization Chart': '/administration/organization-chart',
  'Annual Reports': '/administration/annual-reports',
  'GRIET Skill Series': '/administration/griet-skill-series',
  // Admissions
  'Programmes': '/admissions/programmes',
  'Admission Procedure': '/admissions/admission-procedure',
  'Fee Structure': '/admissions/fee-structure',
  'EAPCET Last Rank': '/admissions/eapcet-last-rank',
  'ECET Last Rank': '/admissions/ecet-last-rank',
  'Scholarships': '/admissions/scholarships',
  // Academics
  'Regulations': '/academics/regulations',
  'Syllabus': '/academics/syllabus',
  'Academic Calendar': '/academics/academic-calendar',
  'Library': '/academics/library',
  'Code of Conduct for Students': '/academics/code-of-conduct',
  'Diary 24–25': '/academics/college-diary',
  'Endowment Awards': '/academics/endowment-awards',
  'Finishing School': '/academics/finishing-school',
  'Digital Wellbeing Council': '/academics/digital-wellbeing-council',
  // Examinations
  'Gold Medals': '/examinations/gold-medals',
  'Exam Notifications': '/examinations/exam-notifications',
  'Results': '/examinations/results',
  'Exam Branch Downloads': '/examinations/exam-branch-downloads',
  'Transcripts & Certificates': '/examinations/transcripts-certificates',
  // Research
  'Research Projects': '/research#research-projects',
  'Consultancy': '/research#consultancy',
  'Patents': '/research#patents',
  'Publications': '/research#publications',
  'MOUs': '/mous',
  'Innovation Awards': '/research#innovation',
  'PhD Programmes': '/phd-faculty',
  'Conferences': '/conferences',
  'Journals': '/journals',
  // Placements
  'Placement Overview': '/placements',
  'Placements 2025': '/placements',
  'Placements 2024': '/placements',
  'Placements 2023': '/placements',
  'Contact Placements Cell': '/placements',
  // Moodle (external)
  'Moodle': 'http://moodle.griet.ac.in/',
  // Academics extras
  'Internships': '/internships',
  'Value Added Programs': '/value-added-programs',
  'Professional Associations': '/professional-associations',
  'Central Facilities': '/central-facilities',
  // Administration extras
  'Anti-Ragging': '/anti-ragging',
  'Accreditations': '/accreditations',
  'Honours & Awards': '/honours-awards',
  'DTBU': '/dtbu',
  'Margdarshan': '/margdarshan',
  // Campus
  'Sports & Games': '/sports',
  'Transport': '/transport',
  'Infrastructure': '/infrastructure',
  'Support Services': '/support-services',
  // Standalone
  'Careers': '/careers',
  // Departments
  'Electronics and Communication Engineering': '/departments/ece',
  'Computer Science and Engineering': '/departments/cse',
  'Computer Science and Engineering – AIML': '/departments/aiml',
  'Computer Science and Engineering – CSBS': '/departments/csbs',
  'Computer Science and Engineering – DS': '/departments/ds',
  'Civil Engineering': '/departments/civil',
  'Mechanical Engineering': '/departments/mechanical',
  'Electrical and Electronics Engineering': '/departments/eee',
  'Information Technology': '/departments/it',
  'Humanities and Sciences': '/departments/hs',
};

function DropdownItem({ label }) {
  const href = ROUTE_MAP[label];
  const className =
    'block px-4 py-2 text-[13px] font-dm-sans font-medium whitespace-nowrap transition-colors border-b border-black/10 last:border-b-0 [color:var(--primary)] hover:[color:var(--accent)]';
  if (href) {
    if (href.startsWith('http')) {
      return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{label}</a>;
    }
    return <Link to={href} className={className}>{label}</Link>;
  }
  return <a href="#" className={className}>{label}</a>;
}

const Chevron = ({ open }) => (
  <svg
    className={`w-3 h-3 transition-transform shrink-0 ${open ? 'rotate-180' : ''}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const DropdownPanel = ({ open, dropdown }) => (
  <div
    className={`absolute top-full left-0 pt-2 z-50 min-w-[240px] transition-all duration-200 ease-out ${
      open ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-1 invisible pointer-events-none'
    }`}
  >
    <div className="bg-white shadow-xl py-2 border border-black/10 border-t-[3px] [border-top-color:var(--accent)]">
      {dropdown.map((label) => (
        <DropdownItem key={label} label={label} />
      ))}
    </div>
  </div>
);

function NavItem({ name, active, dropdown, href }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!dropdown) return;
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [dropdown]);

  const baseText = 'font-dm-sans font-semibold text-[14px] leading-[17px] transition-colors hover:[color:#F3DAB2]';
  const colorClass = active || open ? '[color:#F3DAB2]' : 'text-white';
  const hoverHandlers = {
    onMouseEnter: () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpen(true); },
    onMouseLeave: () => { timeoutRef.current = setTimeout(() => setOpen(false), 150); },
  };

  if (!dropdown) {
    const cls = `${baseText} ${colorClass}`;
    return href
      ? <Link to={href} className={cls}>{name}</Link>
      : <a href="#" className={cls}>{name}</a>;
  }

  if (href) {
    return (
      <div ref={ref} className="relative" {...hoverHandlers}>
        <div className={`flex items-center gap-1 py-2 ${colorClass}`}>
          <Link to={href} className={`${baseText} ${colorClass}`}>{name}</Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`transition-colors ${colorClass} hover:[color:#F3DAB2]`}
            aria-label={`Toggle ${name} menu`}
          >
            <Chevron open={open} />
          </button>
        </div>
        <DropdownPanel open={open} dropdown={dropdown} />
      </div>
    );
  }

  return (
    <div ref={ref} className="relative" {...hoverHandlers}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 py-2 ${baseText} ${colorClass}`}
      >
        {name}
        <Chevron open={open} />
      </button>
      <DropdownPanel open={open} dropdown={dropdown} />
    </div>
  );
}

function MobileNavItem({ name, href, dropdown }) {
  const [expanded, setExpanded] = useState(false);

  if (!dropdown) {
    const cls = 'block px-5 py-3 font-dm-sans font-semibold text-[14px] text-white border-b border-white/10';
    return href
      ? <Link to={href} className={cls}>{name}</Link>
      : <a href="#" className={cls}>{name}</a>;
  }

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex justify-between items-center px-5 py-3 font-dm-sans font-semibold text-[14px] text-white"
      >
        {name}
        <svg
          className={`w-4 h-4 transition-transform duration-200 shrink-0 ${expanded ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {expanded && (
        <div className="bg-black/20">
          {dropdown.map((label) => {
            const dHref = ROUTE_MAP[label];
            const mobileCls = 'block px-8 py-2.5 font-dm-sans text-[13px] text-white/80 hover:text-white transition-colors';
            if (dHref) {
              if (dHref.startsWith('http')) {
                return <a key={label} href={dHref} target="_blank" rel="noopener noreferrer" className={mobileCls}>{label}</a>;
              }
              return <Link key={label} to={dHref} className={mobileCls}>{label}</Link>;
            }
            return <a key={label} href="#" className={mobileCls}>{label}</a>;
          })}
        </div>
      )}
    </div>
  );
}

export default function NavStrip({ college, scrolled = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isDesktop = useIsDesktop();

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const navTop = isDesktop ? (scrolled ? '77px' : '113px') : '56px';

  return (
    <div
      className="w-full sticky z-40 relative border-b border-black/10"
      style={{
        top: navTop,
        transition: 'top 0.3s ease',
        '--primary': college.primaryColor,
        '--accent': college.accentColor,
        backgroundColor: college.primaryColor,
      }}
    >
      {/* Desktop nav */}
      <div className="hidden lg:flex justify-center items-center gap-[38px] overflow-visible py-3">
        {college.navLinks.map((link) => (
          <NavItem
            key={link.name}
            {...link}
            active={
              link.href
                ? (link.href === '/' ? pathname === '/' : pathname.startsWith(link.href))
                : link.dropdown
                  ? link.dropdown.some((label) => ROUTE_MAP[label] && pathname.startsWith(ROUTE_MAP[label]))
                  : false
            }
          />
        ))}
      </div>

      {/* Mobile hamburger bar */}
      <div className="lg:hidden flex justify-between items-center px-4 h-12">
        <span className="font-dm-sans font-bold text-white text-[13px] uppercase tracking-wider">
          Navigation
        </span>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="text-white p-2 -mr-2"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 z-50 max-h-[65vh] overflow-y-auto shadow-xl"
          style={{ backgroundColor: college.primaryColor }}
        >
          {college.navLinks.map((link) => (
            <MobileNavItem key={link.name} {...link} />
          ))}
        </div>
      )}
    </div>
  );
}
