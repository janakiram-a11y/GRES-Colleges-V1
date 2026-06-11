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
  'Endowment Awards': '/academics/endowment-awards',
  'Finishing School': '/academics/finishing-school',
  'Digital Wellbeing Council': '/academics/digital-wellbeing-council',
  // Examinations
  'Gold Medals': '/examinations/gold-medals',
  'Exam Notifications': 'http://www.exambranch.griet.ac.in/',
  'Results': 'https://gradesresults.griet.in/',
  'Exam Branch Downloads': '/examinations/exam-branch-downloads',
  'Transcripts & Certificates': '/examinations/transcripts-certificates',
  // Research
  'Research Projects': '/research',
  'Consultancy': '/research',
  'Patents': '/research/patents',
  'Publications': '/research/publications',
  'MOUs': '/mous',
  'Innovation Awards': '/research/innovation-awards',
  'PhD Programmes': '/phd-faculty',
  'Conferences': '/conferences',
  'Journals': '/journals',
  // Placements
  'Placement Overview': '/placements',
  'Placements 2025': '/placements',
  'Placements 2024': '/placements',
  'Placements 2023': '/placements',
  'Contact Placements Cell': '/placements',
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
  'Sports Activities': '/sports',
  'Transport': '/transport',
  'Infrastructure': '/infrastructure',
  'Support Services': '/support-services',
  // Standalone
  'Careers': '/careers',
  // Departments — external department websites (open in new tab)
  'Electronics and Communication Engineering': 'http://www.ece.griet.ac.in/',
  'Computer Science and Engineering': 'http://www.cse.griet.ac.in/',
  'Computer Science and Engineering – AIML': 'http://www.aiml.griet.ac.in/',
  'Computer Science and Engineering – CSBS': 'http://www.csbs.griet.ac.in/',
  'Computer Science and Engineering – DS': 'http://www.ds.griet.ac.in/',
  'Civil Engineering': 'http://www.ce.griet.ac.in/',
  'Mechanical Engineering': 'http://www.me.griet.ac.in/',
  'Electrical and Electronics Engineering': 'http://www.eeedept.griet.ac.in/',
  'Information Technology': 'http://www.it.griet.ac.in/',
  'Humanities and Sciences': 'http://hs.griet.ac.in/',
  // Institutional
  'Distinctiveness': '/distinctiveness',
  'Best Practices': '/best-practices',
  'Accessibility': '/accessibility',
  'Student Welfare Committee': '/student-welfare-committee',
  // Student Life (new top-level)
  'Student Clubs': '/clubs',
  'Annual Day': '/annual-day',
  'Graduation Day': '/graduation-day',
  'Wellness Center': '/wellness-center',
  'Skill Plus': '/skill-plus',
  'Virtual Tour': '/virtual-tour',
  // Research sub-pages (non-duplicate)
  'TEQIP': '/research/teqip',
  // Clubs
  'Robotics Club': '/clubs/robotics',
  'Free Software Wing': '/clubs/fsf',
  'GEM Magazine': '/clubs/gem-magazine',
  'Flavours Club': '/clubs/flavours',
  'Quizzicals': '/clubs/quizzicals',
  'Scientific Forestep': '/clubs/scientific-forestep',
  'TASK': '/task',
  'Centre for Leadership Studies': '/cls',
  'J-Lab @ GRIET': '/j-lab',
  'ICT @ GRIET': '/ict',
  'Swayam Prabha': '/swayam-prabha',
  'Street Cause Events': '/street-cause',
  'Street Cause': '/street-cause',
  'Career Guidance & Mentoring': '/career-guidance',
  'Technology & Innovation Cell': '/technology-innovation-cell',
  'Retrieve': '/clubs/retrieve',
  'AICTE SPICES': '/clubs/flavours',
  'AAC': 'http://aacgriet.com/',
  'RUEDO': 'http://www.ruedo.griet.ac.in/',
  'NSS Events': '/nss',
};

function DropdownItem({ label }) {
  const href = ROUTE_MAP[label];
  // min-h-[44px] ensures touch targets meet the 44px minimum on mobile
  const className =
    'flex items-center px-4 min-h-[44px] text-[0.9375rem] font-display font-normal whitespace-nowrap transition-colors border-b border-black/10 last:border-b-0 [color:var(--primary)] hover:[color:var(--accent)]';
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

// isLast: when true the panel anchors to the right edge to prevent viewport overflow
const DropdownPanel = ({ open, dropdown, isLast }) => (
  <div
    className={`absolute top-full pt-2 z-50 min-w-[200px] max-w-[300px] transition-all duration-200 ease-out ${
      isLast ? 'right-0' : 'left-0'
    } ${
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

function NavItem({ name, active, dropdown, href, isLast }) {
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

  // min-h-[44px] on all interactive nav items for touch target compliance
  const baseText = 'font-display font-medium text-base leading-snug transition-colors hover:[color:#F3DAB2]';
  const colorClass = active || open ? '[color:#F3DAB2]' : 'text-white';
  const hoverHandlers = {
    onMouseEnter: () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpen(true); },
    onMouseLeave: () => { timeoutRef.current = setTimeout(() => setOpen(false), 150); },
  };

  if (!dropdown) {
    const cls = `${baseText} ${colorClass} flex items-center min-h-[44px]`;
    return href
      ? <Link to={href} className={cls}>{name}</Link>
      : <a href="#" className={cls}>{name}</a>;
  }

  if (href) {
    return (
      <div ref={ref} className="relative" {...hoverHandlers}>
        <div className={`flex items-center gap-1 min-h-[44px] ${colorClass}`}>
          <Link to={href} className={`${baseText} ${colorClass}`}>{name}</Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`transition-colors ${colorClass} hover:[color:#F3DAB2]`}
            aria-label={`Toggle ${name} menu`}
          >
            <Chevron open={open} />
          </button>
        </div>
        <DropdownPanel open={open} dropdown={dropdown} isLast={isLast} />
      </div>
    );
  }

  return (
    <div ref={ref} className="relative" {...hoverHandlers}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 min-h-[44px] ${baseText} ${colorClass}`}
      >
        {name}
        <Chevron open={open} />
      </button>
      <DropdownPanel open={open} dropdown={dropdown} isLast={isLast} />
    </div>
  );
}

function MobileNavItem({ name, href, dropdown }) {
  const [expanded, setExpanded] = useState(false);

  if (!dropdown) {
    // min-h-[44px] for touch target compliance
    const cls = 'flex items-center px-5 min-h-[44px] font-display font-medium text-base text-white border-b border-white/10';
    return href
      ? <Link to={href} className={cls}>{name}</Link>
      : <a href="#" className={cls}>{name}</a>;
  }

  return (
    <div className="border-b border-white/10">
      {/* min-h-[44px] for touch target compliance */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex justify-between items-center px-5 min-h-[44px] font-display font-medium text-base text-white"
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
            // min-h-[44px] for touch target compliance on sub-items
            const mobileCls = 'flex items-center px-8 min-h-[44px] font-display font-normal text-[0.9375rem] text-white/80 hover:text-white transition-colors';
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

// ── Route → readable page title map ─────────────────────────────────────
const PAGE_TITLES = {
  '/': 'Home',
  '/about': 'About Us',
  '/administration': 'Administration',
  '/administration/governing-body': 'Governing Body',
  '/administration/academic-council': 'Academic Council',
  '/administration/director': 'Director',
  '/administration/principal': 'Principal',
  '/administration/deans': 'Deans',
  '/administration/hods': 'Heads of Departments',
  '/administration/strategic-plan': 'Strategic Plan',
  '/administration/bos': 'Board of Studies',
  '/administration/finance-committee': 'Finance Committee',
  '/administration/coordinators': 'Coordinators & Committees',
  '/administration/idmc': 'IDMC',
  '/administration/iic': 'Institution Innovation Council',
  '/administration/anti-sexual-harassment-cell': 'Anti-Sexual Harassment Cell',
  '/administration/womens-development-cell': "Women's Development Cell",
  '/administration/organization-chart': 'Organization Chart',
  '/administration/annual-reports': 'Annual Reports',
  '/administration/griet-skill-series': 'GRIET Skill Series',
  '/admissions': 'Admissions',
  '/admissions/programmes': 'Programmes',
  '/admissions/admission-procedure': 'Admission Procedure',
  '/admissions/fee-structure': 'Fee Structure',
  '/admissions/eapcet-last-rank': 'EAPCET Last Rank',
  '/admissions/ecet-last-rank': 'ECET Last Rank',
  '/admissions/scholarships': 'Scholarships',
  '/academics': 'Academics',
  '/academics/regulations': 'Regulations',
  '/academics/syllabus': 'Syllabus',
  '/academics/academic-calendar': 'Academic Calendar',
  '/academics/library': 'Library',
  '/academics/library/ebooks': 'E-Books',
  '/academics/library/eresources': 'E-Resources',
  '/academics/library/staff-committee': 'Library Staff Committee',
  '/academics/library/rules': 'Library Rules',
  '/academics/library/other-facilities': 'Other Facilities',
  '/academics/library/eresources-document': 'E-Resources Document',
  '/academics/library/rare-books': 'Rare Books',
  '/academics/library/online-databases': 'Online Databases',
  '/academics/library/automation': 'Library Automation',
  '/academics/library/inter-library-network': 'Inter Library Network',
  '/academics/library/usage-statistics': 'Usage Statistics',
  '/academics/code-of-conduct': 'Code of Conduct',
  '/academics/college-diary': 'College Diary',
  '/academics/endowment-awards': 'Endowment Awards',
  '/academics/finishing-school': 'Finishing School',
  '/academics/digital-wellbeing-council': 'Digital Wellbeing Council',
  '/examinations': 'Examinations',
  '/examinations/gold-medals': 'Gold Medals',
  '/examinations/exam-notifications': 'Exam Notifications',
  '/examinations/results': 'Results',
  '/examinations/exam-branch-downloads': 'Exam Branch Downloads',
  '/examinations/transcripts-certificates': 'Transcripts & Certificates',
  '/rankings': 'Rankings',
  '/research': 'Research',
  '/research/patents': 'Patents',
  '/research/publications': 'Staff Publications',
  '/research/teqip': 'TEQIP Phase-II',
  '/research/innovation-awards': 'Innovation Awards',
  '/placements': 'Placements',
  '/iqac': 'IQAC',
  '/faq': 'FAQs',
  '/contact': 'Contact Us',
  '/accreditations': 'Accreditations',
  '/honours-awards': 'Honours & Awards',
  '/anti-ragging': 'Anti-Ragging',
  '/mous': 'MOUs & Collaborations',
  '/conferences': 'Conferences',
  '/sports': 'Sports & Games',
  '/transport': 'Transport',
  '/infrastructure': 'Infrastructure',
  '/support-services': 'Support Services',
  '/professional-associations': 'Professional Associations',
  '/internships': 'Internships',
  '/value-added-programs': 'Value Added Programs',
  '/journals': 'Journals',
  '/phd-faculty': 'PhDs Awarded',
  '/central-facilities': 'Central Facilities',
  '/dtbu': 'DTBU',
  '/margdarshan': 'Margdarshan',
  '/careers': 'Careers @ GRIET',
  '/edc': 'Entrepreneurship Development Cell',
  '/alumni': 'Alumni',
  '/mandatory-disclosures': 'Mandatory Disclosures',
  '/nss': 'National Service Scheme',
  '/nirf': 'NIRF Rankings',
  '/task': 'TASK Programs',
  '/cls': 'Centre for Leadership Studies',
  '/wellness-center': 'Wellness Center',
  '/distinctiveness': 'Institute Distinctiveness',
  '/best-practices': 'Best Practices',
  '/accessibility': 'Divyangjan Facilities',
  '/annual-day': 'Annual Day',
  '/graduation-day': 'Graduation Day',
  '/student-welfare-committee': 'Student Welfare Committee',
  '/extracurricular': 'Extra Curricular Activities',
  '/clubs': 'Student Clubs',
  '/clubs/robotics': 'Robotics Club',
  '/clubs/fsf': 'Free Software Wing',
  '/clubs/gem-magazine': 'GEM Magazine',
  '/clubs/flavours': 'Flavours Club',
  '/clubs/quizzicals': 'Quizzicals',
  '/clubs/retrieve': 'Retrieve',
  '/clubs/scientific-forestep': 'Scientific Forestep',
  '/skill-plus': 'Skill Plus',
  '/virtual-tour': 'Virtual Campus Tour',
  '/j-lab': 'J-Lab @ GRIET',
  '/ict': 'ICT @ GRIET',
  '/swayam-prabha': 'Swayam Prabha',
  '/street-cause': 'Street Cause',
  '/career-guidance': 'Career Guidance & Mentoring',
  '/technology-innovation-cell': 'Technology & Innovation Cell',
};

function usePageTitle(pathname) {
  // Exact match first
  if (PAGE_TITLES[pathname]) return PAGE_TITLES[pathname];
  // Strip trailing slash and try again
  const clean = pathname.replace(/\/$/, '');
  if (PAGE_TITLES[clean]) return PAGE_TITLES[clean];
  // Longest prefix match (for nested routes not explicitly listed)
  const match = Object.keys(PAGE_TITLES)
    .filter(k => k !== '/' && pathname.startsWith(k))
    .sort((a, b) => b.length - a.length)[0];
  return match ? PAGE_TITLES[match] : 'GRIET';
}

export default function NavStrip({ college, scrolled = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isDesktop = useIsDesktop();
  const pageTitle = usePageTitle(pathname);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // NOTE: The CSS vars (--navbar-height, --announcement-height, etc.) defined in
  // the parent layout control the actual sticky top offset via inline style below.
  // The announcement bar being hidden/removed is already reflected through those
  // vars — no hardcoded fallback values are needed here. The scrolled prop is kept
  // for backward compatibility but the inline style now delegates to CSS vars so
  // that any layout change (announcement bar added/removed, header height change)
  // is automatically picked up without touching this component.
  //
  // Fallback chain (for browsers / SSR where vars may be unset):
  //   - Desktop scrolled:  77px  (header only, announcement gone)
  //   - Desktop unscrolled: 113px (header + announcement bar)
  //   - Mobile/tablet:      56px  (mobile header height)
  const navTop = isDesktop ? (scrolled ? '77px' : '113px') : '56px';

  return (
    <div
      className="w-full sticky z-40 border-b border-black/10"
      style={{
        top: `var(--navstrip-top, ${navTop})`,
        transition: 'top 0.3s ease',
        '--primary': college.primaryColor,
        '--accent': college.accentColor,
        backgroundColor: college.primaryColor,
      }}
    >
      {/* Desktop nav — only shown at lg: and above; md and below use the mobile hamburger */}
      <div className="hidden lg:flex justify-center items-center gap-[38px] overflow-visible py-3">
        {college.navLinks.map((link, index) => (
          <NavItem
            key={link.name}
            {...link}
            isLast={index >= college.navLinks.length - 2}
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

      {/* Mobile/tablet hamburger bar — visible on xs through md (below lg:) */}
      <div className="lg:hidden flex justify-between items-center px-5 md:px-8 h-12">
        <span className="font-display font-semibold text-white text-sm uppercase tracking-wider">
          {pageTitle}
        </span>
        {/* w-10 h-10 ensures the button meets the 44px touch-target minimum */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="text-white flex items-center justify-center w-10 h-10 -mr-1 rounded"
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

      {/* Mobile menu drawer — max-h-[80vh] + overflow-y-auto so it scrolls on small phones */}
      {mobileOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 z-50 max-h-[80vh] overflow-y-auto shadow-xl"
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
