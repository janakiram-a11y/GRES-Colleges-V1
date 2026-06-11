import { Link, useLocation } from 'react-router-dom';
import college from '../theme';

const SIDEBAR_LINKS = [
  { label: 'Management', href: '/administration' },
  { label: 'Governing Body', href: '/administration/governing-body' },
  { label: 'Academic Council', href: '/administration/academic-council' },
  { label: 'Director', href: '/administration/director' },
  { label: 'Principal', href: '/administration/principal' },
  { label: 'Deans', href: '/administration/deans' },
  { label: 'HODs', href: '/administration/hods' },
  { label: 'GRIET Strategic Plan', href: '/administration/strategic-plan' },
  { label: 'BOS', href: '/administration/bos' },
  { label: 'Finance Committee', href: '/administration/finance-committee' },
  { label: 'Coordinators & Committees', href: '/administration/coordinators' },
  { label: 'IDMC', href: '/administration/idmc' },
  { label: 'IIC', href: '/administration/iic' },
  { label: 'Anti Sexual Harassment Cell', href: '/administration/anti-sexual-harassment-cell' },
  { label: "Women's Development Cell", href: '/administration/womens-development-cell' },
  { label: 'Organization Chart', href: '/administration/organization-chart' },
  { label: 'Annual Reports', href: '/administration/annual-reports' },
  { label: 'GRIET Skill Series', href: '/administration/griet-skill-series' },
];

export default function AdministrationSidebar({ mobileChips = false }) {
  const { pathname } = useLocation();

  if (mobileChips) {
    return (
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {SIDEBAR_LINKS.map(({ label, href }) => {
          const isActive =
            pathname === href || (href !== '/administration' && pathname.startsWith(href));
          return (
            <Link
              key={label}
              to={href}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-[12px] font-dm-sans font-medium border transition-colors whitespace-nowrap"
              style={{
                backgroundColor: isActive ? college.primaryColor : '#fff',
                color: isActive ? '#fff' : '#374151',
                borderColor: isActive ? college.primaryColor : '#d1d5db',
              }}
            >
              {label}
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-200 lg:sticky lg:top-[176px]">
      <div
        className="rounded-t-lg px-5 py-3"
        style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)` }}
      >
        <span className="font-hind font-bold text-[13px] text-white tracking-wide">
          Administration
        </span>
      </div>
      <ul className="rounded-b-lg divide-y divide-gray-100 bg-white sidebar-scroll max-h-[calc(100vh-240px)]">
        {SIDEBAR_LINKS.map(({ label, href }) => {
          const isActive =
            pathname === href || (href !== '/administration' && pathname.startsWith(href));
          return (
            <li key={label}>
              <Link
                to={href}
                className="flex items-center gap-3 px-5 py-2.5 transition-colors hover:bg-gray-50"
                style={{ backgroundColor: isActive ? `${college.primaryColor}0d` : undefined }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 transition-colors"
                  style={{ backgroundColor: isActive ? college.primaryColor : college.accentColor }}
                />
                <span
                  className="font-dm-sans text-[13px] leading-snug"
                  style={{
                    color: isActive ? college.primaryColor : '#374151',
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
