import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

// ── Icons — filled brand-accurate SVGs ───────────────────────────────────

/* X / Twitter */
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/* Instagram */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

/* Facebook */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

/* LinkedIn */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* YouTube */
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
  { label: 'GEM Magazine', href: '/clubs/gem-magazine' },
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
  { label: 'IRINS.ORG', href: 'https://griet.irins.org/', external: true },
  { label: 'Innovation Awards', href: '/research/innovation-awards' },
];

// Student Events — AICTE SPICES removed (identical href as Flavours, pure duplicate)
// All individual club pages are NOT in any dropdown, so all retained
const STUDENT_EVENTS = [
  { label: 'Flavours', href: '/clubs/flavours' },
  { label: 'X-Kernel', href: 'https://xkernal-kappa.vercel.app/', external: true },
  { label: 'Quizzicals', href: '/clubs/quizzicals' },
  { label: 'Retrieve', href: '/clubs/retrieve' },
  { label: 'Gaming Club', href: 'https://www.griet.ac.in/images2/Gaming%20Club.pdf', external: true },
  { label: 'Robotic Club', href: '/clubs/robotics' },
  { label: 'Free Software Wing', href: '/clubs/fsf' },
  { label: 'G-Talks', href: 'https://www.griet.ac.in/images2/Gtalks%20report.pdf', external: true },
  { label: 'TED-X', href: 'https://www.griet.ac.in/2025/TEDx%20GRIET%20Final%20Report%202024.pdf', external: true },
  { label: 'Scientific Forestep', href: '/clubs/scientific-forestep' },
];

// Special Days — Annual Day & Graduation Day removed (both in Student Life ▸ dropdown)
const SPECIAL_DAYS = [
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

// ── Compact GRIET Theme Song Player (sits below social icons) ────────────
function ThemePlayer({ primaryColor, accentColor }) {
  const [playing, setPlaying]   = useState(false);
  const [current, setCurrent]   = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted]       = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setCurrent(a.currentTime);
    const onMeta = () => setDuration(a.duration || 0);
    const onEnd  = () => { setPlaying(false); setCurrent(0); };
    a.addEventListener('timeupdate', onTime);
    a.addEventListener('loadedmetadata', onMeta);
    a.addEventListener('ended', onEnd);
    return () => {
      a.removeEventListener('timeupdate', onTime);
      a.removeEventListener('loadedmetadata', onMeta);
      a.removeEventListener('ended', onEnd);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); } else { a.play().catch(() => {}); }
    setPlaying(!playing);
  };

  const seek = (e) => {
    const a = audioRef.current;
    if (!a || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    a.currentTime = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)) * duration;
  };

  const fmt = (s) => {
    if (!s || isNaN(s)) return '0:00';
    return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  };

  const pct = duration ? (current / duration) * 100 : 0;

  return (
    <div className="flex flex-col gap-1.5 mt-1">
      <audio ref={audioRef} src="/griet-theme.mp3" preload="metadata" />

      {/* Label row */}
      <div className="flex items-center gap-1.5">
        <svg className="w-3 h-3 flex-shrink-0" style={{ color: accentColor }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
        </svg>
        <span className="font-hind font-semibold text-[10.5px] uppercase tracking-widest text-gray-400">
          GRIET Theme Song
        </span>
      </div>

      {/* Controls row */}
      <div className="flex items-center gap-2">

        {/* Play / Pause */}
        <button
          onClick={toggle}
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110 active:scale-95"
          style={{ backgroundColor: primaryColor }}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="w-2.5 h-2.5 text-white ml-px" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          )}
        </button>

        {/* Time + scrubber */}
        <span className="font-dm-sans text-[10px] text-gray-400 flex-shrink-0">{fmt(current)}</span>

        <div
          className="relative flex-1 h-1 rounded-full cursor-pointer group"
          style={{ backgroundColor: `${primaryColor}20` }}
          onClick={seek}
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ width: `${pct}%`, backgroundColor: accentColor }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ left: `calc(${pct}% - 5px)`, backgroundColor: accentColor }}
          />
        </div>

        <span className="font-dm-sans text-[10px] text-gray-400 flex-shrink-0">{fmt(duration)}</span>

        {/* Mute toggle */}
        <button
          onClick={() => { setMuted(!muted); if (audioRef.current) audioRef.current.muted = !muted; }}
          className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? (
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          )}
        </button>

      </div>
    </div>
  );
}

// ── Main Footer ──────────────────────────────────────────────────────────
export default function Footer({ college }) {
  return (
    <footer className="w-full bg-white" style={{ borderTop: '1px solid rgba(91,16,39,0.08)' }}>
      <div className="max-w-[1320px] mx-auto px-5 md:px-16 lg:px-[120px]">

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

            {/* Theme song player — compact, sits below social icons */}
            <ThemePlayer primaryColor={college.primaryColor} accentColor={college.accentColor} />
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
