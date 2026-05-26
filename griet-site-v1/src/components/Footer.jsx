import { Link } from 'react-router-dom';

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
const MapPinIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4 flex-shrink-0 mt-[2px]" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 1.5C6.5 1.5 4.5 3.5 4.5 6c0 3.75 4.5 10.5 4.5 10.5S13.5 9.75 13.5 6c0-2.5-2-4.5-4.5-4.5z" />
    <circle cx="9" cy="6" r="1.5" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4 flex-shrink-0" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 2.5a1 1 0 011-1h1.8a1 1 0 01.98.84l.67 4a1 1 0 01-.54 1.06l-1.4.7a9.9 9.9 0 005.4 5.4l.7-1.4a1 1 0 011.06-.54l4 .67a1 1 0 01.84.98V15.5a1 1 0 01-1 1H15C8.1 16.5 1.5 9.9 1.5 3V2.5z" />
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4 flex-shrink-0" stroke="currentColor" strokeWidth="1.5">
    <rect x="1.5" y="4.5" width="15" height="10.5" rx="1.5" />
    <path d="M1.5 6l7.5 5 7.5-5" strokeLinecap="round" />
  </svg>
);

const SOCIAL_ICONS = {
  Twitter: TwitterIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  YouTube: () => (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="4" width="18" height="13" rx="3" />
      <path d="M8 8l5 3-5 3V8z" fill="currentColor" stroke="none" />
    </svg>
  ),
};

function ColHeading({ college, children }) {
  return (
    <div className="mb-6">
      <h4
        className="font-hind font-bold text-[13px] uppercase tracking-[2px] mb-3"
        style={{ color: college.primaryColor }}
      >
        {children}
      </h4>
      <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: college.accentColor }} />
    </div>
  );
}

function FooterLink({ href, isExternal, college, children }) {
  const base = 'font-dm-sans text-[13px] leading-[22px] transition-colors flex items-start gap-2';
  const color = '#222222';
  const handlers = {
    onMouseEnter: (e) => (e.currentTarget.style.color = college.accentColor),
    onMouseLeave: (e) => (e.currentTarget.style.color = color),
  };
  const inner = (
    <>
      <span className="w-1 h-1 rounded-full flex-shrink-0 mt-[8px]" style={{ backgroundColor: college.accentColor }} />
      <span>{children}</span>
    </>
  );
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base} style={{ color }} {...handlers}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={href} className={base} style={{ color }} {...handlers}>
      {inner}
    </Link>
  );
}

export default function Footer({ college }) {
  return (
    <footer
      className="w-full bg-white"
      style={{ borderTop: `1px solid rgba(91,16,39,0.08)` }}
    >
      {/* Main content */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-[60px] pt-[48px] md:pt-[72px] pb-[40px] md:pb-[56px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <img
              src={college.logo}
              alt={`${college.shortName} Logo`}
              className="w-[200px] object-contain"
            />
            <p className="font-dm-sans text-[13px] leading-[22px]" style={{ color: '#222222' }}>
              {college.fullName}. {college.tagline}
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
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{ border: '1px solid rgba(91,16,39,0.12)', color: '#222222', backgroundColor: 'transparent' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = college.accentColor;
                      e.currentTarget.style.color = college.accentColor;
                      e.currentTarget.style.backgroundColor = 'rgba(195,32,51,0.06)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(91,16,39,0.12)';
                      e.currentTarget.style.color = '#222222';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <ColHeading college={college}>Quick Links</ColHeading>
            <ul className="flex flex-col gap-2.5">
              {college.quickLinks.map((l) => {
                const label = l.label || l;
                const href = l.href || '#';
                return (
                  <li key={label}>
                    <FooterLink href={href} isExternal={href.startsWith('http')} college={college}>{label}</FooterLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <ColHeading college={college}>Resources</ColHeading>
            <ul className="flex flex-col gap-2.5">
              {college.resources.map((l) => {
                const label = l.label || l;
                const href = l.href || '#';
                return (
                  <li key={label}>
                    <FooterLink href={href} isExternal={href.startsWith('http')} college={college}>{label}</FooterLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ColHeading college={college}>Contact Us</ColHeading>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3" style={{ color: '#222222' }}>
                <MapPinIcon />
                <span className="font-dm-sans text-[13px] leading-[22px]" style={{ color: '#222222' }}>{college.address}</span>
              </li>
              <li className="flex items-center gap-3" style={{ color: '#222222' }}>
                <PhoneIcon />
                <span className="font-dm-sans text-[13px]" style={{ color: '#222222' }}>{college.phone}</span>
              </li>
              <li className="flex items-center gap-3" style={{ color: '#222222' }}>
                <EmailIcon />
                <a
                  href={`mailto:${college.email}`}
                  className="font-dm-sans text-[13px] transition-colors"
                  style={{ color: '#222222' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = college.accentColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#222222')}
                >
                  {college.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex justify-between items-center flex-wrap gap-4"
          style={{ borderTop: '1px solid rgba(91,16,39,0.08)' }}
        >
          <span className="font-dm-sans text-[12px]" style={{ color: '#222222' }}>
            © 2024 {college.fullName}. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service'].map((text) => (
              <a
                key={text}
                href="#"
                className="font-dm-sans text-[12px] transition-colors"
                style={{ color: '#222222' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = college.accentColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#222222')}
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
