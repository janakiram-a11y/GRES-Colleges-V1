import { Link, useLocation } from 'react-router-dom';
import college from '../theme';

const SIDEBAR_LINKS = [
  { label: 'Regulations', href: '/academics/regulations' },
  { label: 'Syllabus', href: '/academics/syllabus' },
  { label: 'Academic Calendar', href: '/academics/academic-calendar' },
  { label: 'Library', href: '/academics/library' },
  { label: 'Scholarships', href: '/admissions/scholarships' },
  { label: 'Endowment Awards', href: '/academics/endowment-awards' },
  { label: 'Moodle', href: '#' },
  { label: 'Diary 2024–25', href: '/academics/college-diary' },
  { label: 'Finishing School', href: '/academics/finishing-school' },
  { label: 'Code of Conduct for Students', href: '/academics/code-of-conduct' },
  { label: 'Digital Wellbeing Council', href: '/academics/digital-wellbeing-council' },
];

export default function AcademicsSidebar() {
  const { pathname } = useLocation();
  return (
    <div className="rounded-lg border border-gray-200 lg:sticky lg:top-[176px]">
      {/* Header */}
      <div
        className="rounded-t-lg px-5 py-3"
        style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)` }}
      >
        <span className="font-hind font-bold text-[13px] text-white tracking-wide">
          Important Links
        </span>
      </div>

      {/* Links */}
      <ul className="rounded-b-lg divide-y divide-gray-100 bg-white sidebar-scroll max-h-[calc(100vh-240px)]">
        {SIDEBAR_LINKS.map(({ label, href }) => {
          const isActive = pathname === href || (href !== '#' && pathname.startsWith(href));
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
