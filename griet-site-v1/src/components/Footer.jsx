import { Link } from 'react-router-dom';

// ── Icons ────────────────────────────────────────────────────────────────
const TwitterIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 3l-6.5 6L4 3H2l7.5 6.5L2 17h2l5.5-4.5 2 2L18 17h2L13 10 20 3h-3z" strokeLinejoin="round" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="16" height="16" rx="2" />
    <path d="M6 9v5M6 6.5v.01M10 14v-3a2 2 0 014 0v3M10 9v5" strokeLinecap="round" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="16" height="16" rx="4" />
    <circle cx="10" cy="10" r="3" />
    <circle cx="14.5" cy="5.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 2H3a1 1 0 00-1 1v14a1 1 0 001 1h7v-6H8V9h2V7a3 3 0 013-3h2v3h-2a1 1 0 00-1 1v2h3l-.5 3H12v6h5a1 1 0 001-1V3a1 1 0 00-1-1z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
    <rect x="1" y="4" width="18" height="13" rx="3" />
    <path d="M8 8l5 3-5 3V8z" fill="currentColor" stroke="none" />
  </svg>
);
const SOCIAL_ICONS = { Twitter: TwitterIcon, LinkedIn: LinkedInIcon, Instagram: InstagramIcon, Facebook: FacebookIcon, YouTube: YouTubeIcon };

// ── Footer link data ─────────────────────────────────────────────────────
// Quick Links — nav-duplicates removed: DTBU (Admin ▸), MOUs (Research ▸),
// Sports (Student Life ▸), Central Facilities (Academics ▸),
// Accessibility (Admin ▸), Internships (Academics ▸)
const QUICK_LINKS = [
  { label: 'GRIET Rules (RED Book)', href: 'https://www.griet.ac.in/images/red%20book.pdf', external: true },
  { label: 'Pragnya 90.4 FM Radio', href: 'http://www.pragnyafm.griet.ac.in/', external: true },
  { label: 'Support Services', href: '/support-services' },
  { label: 'Transport', href: '/transport' },
  { label: 'Infrastructure', href: '/infrastructure' },
];

// Important Links — nav-duplicates removed: Professional Associations (Academics ▸),
// NSS Events (Student Life ▸ NSS), Internships (Academics ▸), Finishing School (Academics ▸)
const IMPORTANT_LINKS = [
  { label: 'Skill Development Cell', href: 'https://grietsdc.in/', external: true },
  { label: 'IQAC', href: '/iqac' },
  { label: 'J-Lab @ GRIET', href: '/j-lab' },
  { label: 'ICT @ GRIET', href: '/ict' },
  { label: 'Swayam Prabha', href: '/swayam-prabha' },
  { label: 'AAC', href: 'http://aacgriet.com/', external: true },
  { label: 'Street Cause Events', href: '/street-cause' },
  { label: 'Career Guidance & Mentoring', href: '/career-guidance' },
  { label: 'Technology & Innovation Cell', href: '/technology-innovation-cell' },
];

// R & D — nav-duplicates removed: Journals, Staff Publications, Patents,
// PhDs Awarded, Conferences (all in Research ▸ dropdown)
const RD_LINKS = [
  { label: 'Scopus SCI List', href: 'https://www.griet.ac.in/2022/Scopus%20Publications%20March%202023.pdf', external: true },
  { label: 'TEQIP Phase-II Grant', href: '/research/teqip' },
  { label: 'IRINS.ORG', href: 'https://griet.irins.org/', external: true },
  { label: 'Innovation Awards', href: '/research/innovation-awards' },
];

// Student Events — AICTE SPICES removed (identical href as Flavours, pure duplicate)
// All individual club pages are NOT in any dropdown, so all retained
const STUDENT_EVENTS = [
  { label: 'IEEE GRIET SB', href: 'http://ieeegrietsb.com', external: true },
  { label: 'Flavours', href: '/clubs/flavours' },
  { label: 'X-Kernel', href: 'https://xkernal-kappa.vercel.app/', external: true },
  { label: 'Quizzicals', href: '/clubs/quizzicals' },
  { label: 'Retrieve', href: '/clubs/retrieve' },
  { label: 'Gaming Club', href: 'https://www.griet.ac.in/images2/Gaming%20Club.pdf', external: true },
  { label: 'Robotic Club', href: '/clubs/robotics' },
  { label: 'Free Software Wing', href: '/clubs/fsf' },
  { label: 'G-Talks', href: 'https://www.griet.ac.in/images2/Gtalks%20report.pdf', external: true },
  { label: 'TED-X', href: 'https://www.griet.ac.in/2025/TEDx%20GRIET%20Final%20Report%202024.pdf', external: true },
  { label: 'GEM Magazine', href: '/clubs/gem-magazine' },
  { label: 'Scientific Forestep', href: '/clubs/scientific-forestep' },
];

// Special Days — Annual Day & Graduation Day removed (both in Student Life ▸ dropdown)
const SPECIAL_DAYS = [
  { label: 'Reflections: Class of 2025', href: 'https://www.griet.ac.in/2025/Class%20of%202025.pdf', external: true },
  { label: 'RUEDO', href: 'http://www.ruedo.griet.ac.in/', external: true },
  { label: 'Alumni Day', href: '/alumni' },
];

const PORTALS = [
  { label: 'Student Portal', href: 'https://greit-login-portal.vercel.app/', external: true },
  { label: 'Moodle LMS', href: 'http://moodle.griet.ac.in/', external: true },
  { label: 'Exam Notifications', href: '/examinations/exam-notifications' },
  { label: 'Results', href: '/examinations/results' },
  { label: 'OPAC – Library Catalogue', href: 'https://griet.bestbookbuddies.com', external: true },
  { label: 'Alumni Portal', href: 'https://www.alumni.griet.ac.in/', external: true },
];

// ── Sub-components ───────────────────────────────────────────────────────
function ColHeading({ children, primaryColor, accentColor }) {
  return (
    <div className="mb-5">
      <h4 className="font-hind font-bold text-[12px] uppercase tracking-[2px] mb-1" style={{ color: primaryColor }}>
        {children}
      </h4>
      <div className="w-6 h-[2px] rounded-full" style={{ backgroundColor: accentColor }} />
    </div>
  );
}

function FooterLink({ item, college }) {
  const { label, href, external } = item;
  const isExt = external || (href && href.startsWith('http'));
  const className = 'group flex items-start gap-2 font-dm-sans text-[12px] leading-[20px] text-gray-600 transition-colors hover:text-gray-900';
  const dot = <span className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: college.accentColor }} />;
  if (isExt) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {dot}<span>{label}</span>
      </a>
    );
  }
  return (
    <Link to={href} className={className}>
      {dot}<span>{label}</span>
    </Link>
  );
}

function FooterColumn({ title, links, college }) {
  return (
    <div>
      <ColHeading primaryColor={college.primaryColor} accentColor={college.accentColor}>{title}</ColHeading>
      <ul className="flex flex-col gap-2">
        {links.map((item) => (
          <li key={item.label}>
            <FooterLink item={item} college={college} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Main Footer ──────────────────────────────────────────────────────────
export default function Footer({ college }) {
  return (
    <footer className="w-full bg-white" style={{ borderTop: '1px solid rgba(91,16,39,0.08)' }}>
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-[60px]">

        {/* ── Main links: 5 columns ── */}
        <div className="py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10" style={{ borderBottom: '1px solid rgba(91,16,39,0.08)' }}>
          <FooterColumn title="Quick Links" links={QUICK_LINKS} college={college} />
          <FooterColumn title="Important Links" links={IMPORTANT_LINKS} college={college} />
          <FooterColumn title="R & D" links={RD_LINKS} college={college} />
          <FooterColumn title="Student Events" links={STUDENT_EVENTS} college={college} />
          <FooterColumn title="Special Days" links={SPECIAL_DAYS} college={college} />
        </div>

        {/* ── Bottom band: brand + contact + portals ── */}
        <div className="pt-10 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <img src={college.logo} alt={college.shortName + ' Logo'} className="w-[180px] object-contain" />
            <p className="font-dm-sans text-[12.5px] leading-relaxed text-gray-600 max-w-xs">
              {college.tagline}
            </p>
            <div className="flex items-center gap-2 mt-1">
              {(college.socialLinks || []).map(({ label, href }) => {
                const Icon = SOCIAL_ICONS[label];
                if (!Icon) return null;
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 text-gray-500 hover:text-gray-900"
                    style={{ borderColor: 'rgba(91,16,39,0.12)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = college.accentColor; e.currentTarget.style.color = college.accentColor; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(91,16,39,0.12)'; e.currentTarget.style.color = ''; }}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <ColHeading primaryColor={college.primaryColor} accentColor={college.accentColor}>Contact Us</ColHeading>
            <div className="flex flex-col gap-3 font-dm-sans text-[12.5px] text-gray-600 leading-relaxed">
              <span>{college.address}</span>
              <span>Tel: {college.phone}</span>
              <a href={'mailto:' + college.email} className="transition-colors hover:text-gray-900" style={{ color: college.accentColor }}>
                {college.email}
              </a>
              <a href="https://www.griet.ac.in/contactus.php" target="_blank" rel="noopener noreferrer" className="font-semibold text-[12px] transition-colors hover:underline" style={{ color: college.primaryColor }}>
                View Full Contact Page →
              </a>
            </div>
          </div>

          {/* Portals */}
          <div>
            <ColHeading primaryColor={college.primaryColor} accentColor={college.accentColor}>Portals & Resources</ColHeading>
            <ul className="flex flex-col gap-2">
              {PORTALS.map(item => (
                <li key={item.label}><FooterLink item={item} college={college} /></li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="py-5 flex flex-col sm:flex-row justify-between items-center gap-3 flex-wrap"
          style={{ borderTop: '1px solid rgba(91,16,39,0.08)' }}
        >
          <span className="font-dm-sans text-[12px] text-gray-400">
            © 2025 {college.fullName}. All rights reserved.
          </span>
          <div className="flex items-center gap-5 flex-wrap">
            <Link to="/mandatory-disclosures" className="font-dm-sans text-[12px] text-gray-400 hover:text-gray-700 transition-colors">
              Mandatory Disclosures
            </Link>
            <Link to="/nirf" className="font-dm-sans text-[12px] text-gray-400 hover:text-gray-700 transition-colors">
              NIRF Rankings
            </Link>
            <Link to="/accreditations" className="font-dm-sans text-[12px] text-gray-400 hover:text-gray-700 transition-colors">
              Accreditations
            </Link>
            <a
              href="https://www.griet.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm-sans text-[12px] text-gray-400 hover:text-gray-700 transition-colors"
            >
              Official Website ↗
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
