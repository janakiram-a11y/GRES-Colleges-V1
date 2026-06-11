import { Link } from 'react-router-dom';

/* ── Icons ──────────────────────────────────────────────────────────── */

/* EDC — Rocket (entrepreneurship / launch) */
const IcoEDC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

/* Alumni — Graduation cap */
const IcoAlumni = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
  </svg>
);

/* Mandatory Disclosures — Shield with checkmark (compliance / official) */
const IcoDisclosures = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

/* NIRF — Trophy (national ranking) */
const IcoNIRF = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
);

/* NSS — Heart with hands (community service / volunteering) */
const IcoNSS = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

/* Careers@GRIET — Briefcase with upward arrow (career growth) */
const IcoCareers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M12 12v4" />
    <path d="M9.5 14.5 12 12l2.5 2.5" />
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
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-6 divide-x divide-[rgba(91,16,39,0.15)] px-5 md:px-16 lg:px-[120px]">
          {LINKS.map(({ label, Icon, href, external }) => {
            const inner = (
              <div className="flex flex-col items-center justify-center gap-2.5 py-5 px-5 md:px-6 transition-colors group w-full">
                <span
                  className="transition-colors"
                  style={{ color: primary }}
                >
                  <Icon />
                </span>
                <span
                  className="font-display font-bold text-[0.8125rem] text-center tracking-[0.03em] leading-snug uppercase transition-colors"
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
