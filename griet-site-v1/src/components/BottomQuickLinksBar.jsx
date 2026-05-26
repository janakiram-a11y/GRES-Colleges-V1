import { Link } from 'react-router-dom';

/* ── Icons ──────────────────────────────────────────────────────────── */
const IcoEDC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M12 2a7 7 0 0 1 7 7c0 3.5-2.5 6-4 7.5V18a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.5C7.5 15 5 12.5 5 9a7 7 0 0 1 7-7z" />
    <path d="M9 21h6M10 18v3M14 18v3" />
  </svg>
);

const IcoAlumni = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
  </svg>
);

const IcoDisclosures = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const IcoNIRF = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IcoNSS = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IcoCareers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);

/* ── Link data ──────────────────────────────────────────────────────── */
const LINKS = [
  {
    label: 'EDC',
    Icon: IcoEDC,
    href: 'https://ecellgriet.epizy.com/',
    external: true,
  },
  {
    label: 'Alumni',
    Icon: IcoAlumni,
    href: 'https://www.alumni.griet.ac.in/',
    external: true,
  },
  {
    label: 'Mandatory Disclosures',
    Icon: IcoDisclosures,
    href: '/mandatory-disclosures',
    external: false,
  },
  {
    label: 'NIRF',
    Icon: IcoNIRF,
    href: '/nirf',
    external: false,
  },
  {
    label: 'NSS',
    Icon: IcoNSS,
    href: '/nss',
    external: false,
  },
  {
    label: 'CAREERS@GRIET',
    Icon: IcoCareers,
    href: '/careers',
    external: false,
  },
];

/* ── Component ──────────────────────────────────────────────────────── */
export default function BottomQuickLinksBar({ college }) {
  const primary = college.primaryColor;

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: '#F3DAB2',
        borderTop: '1px solid rgba(91,16,39,0.15)',
        borderBottom: '1px solid rgba(91,16,39,0.15)',
      }}
    >
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-[60px]">
        <div className="grid grid-cols-3 sm:grid-cols-6 divide-x divide-[rgba(91,16,39,0.15)]">
          {LINKS.map(({ label, Icon, href, external }) => {
            const inner = (
              <div className="flex flex-col items-center justify-center gap-2 py-5 px-2 transition-colors group">
                <span
                  className="transition-colors"
                  style={{ color: primary }}
                >
                  <Icon />
                </span>
                <span
                  className="font-hind font-bold text-[11.5px] text-center tracking-wide leading-tight uppercase transition-colors"
                  style={{ color: primary }}
                >
                  {label}
                </span>
              </div>
            );

            if (external) {
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors cursor-pointer"
                  style={{ color: primary }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${primary}12`)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  {inner}
                </a>
              );
            }

            return (
              <Link
                key={label}
                to={href}
                className="block transition-colors cursor-pointer"
                style={{ color: primary }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${primary}12`)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
