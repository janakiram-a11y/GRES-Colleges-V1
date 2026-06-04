import { Link } from 'react-router-dom';

const links = [
  {
    label: 'Mandatory Disclosures',
    href: '/mandatory-disclosures',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    label: 'NIRF',
    href: '/nirf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: 'Events',
    href: '/events',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

export default function QuickLinks() {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: '#F3DAB2', borderBottom: '1px solid rgba(199,34,53,0.12)' }}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-[60px]">
        <div className="grid grid-cols-3" style={{ height: 90 }}>
          {links.map(({ label, href, icon }, idx) => (
            <Link
              key={label}
              to={href}
              className="group flex flex-row items-center justify-center gap-3 transition-all duration-200"
              style={{
                borderRight: idx < links.length - 1 ? '1px solid rgba(74,20,40,0.18)' : 'none',
                color: '#4A1428',
              }}
            >
              <span
                className="w-6 h-6 flex-shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5"
                style={{ color: '#4A1428' }}
              >
                {icon}
              </span>
              <span
                className="font-display font-bold text-type-label uppercase tracking-widest text-center transition-colors duration-200 group-hover:text-[#C72235]"
                style={{ letterSpacing: '0.12em' }}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
