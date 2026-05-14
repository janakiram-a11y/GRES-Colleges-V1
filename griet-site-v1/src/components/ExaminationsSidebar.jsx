import { Link, useLocation } from 'react-router-dom';
import college from '../theme';

const SIDEBAR_LINKS = [
  { label: 'Gold Medals', href: '/examinations/gold-medals' },
  { label: 'Exam Notifications', href: '/examinations/exam-notifications' },
  { label: 'Results', href: '/examinations/results' },
  { label: 'Exam Branch Downloads', href: '/examinations/exam-branch-downloads' },
  { label: 'Examination Committee', href: '#' },
  { label: 'Committee Meeting Minutes', href: '#' },
];

export default function ExaminationsSidebar() {
  const { pathname } = useLocation();
  return (
    <div className="rounded-lg border border-gray-200 lg:sticky lg:top-[176px]">
      <div
        className="rounded-t-lg px-4 py-2.5"
        style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)` }}
      >
        <span className="font-hind font-bold text-[12.5px] text-white tracking-wide">
          Important Links
        </span>
      </div>
      <ul className="rounded-b-lg divide-y divide-gray-100 bg-white sidebar-scroll max-h-[calc(100vh-240px)]">
        {SIDEBAR_LINKS.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <li key={label}>
              <Link
                to={href}
                className="flex items-center gap-2.5 px-4 py-2.5 font-dm-sans text-[12px] transition-colors hover:bg-gray-50"
                style={{ color: isActive ? college.primaryColor : '#374151', fontWeight: isActive ? 700 : 500 }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: isActive ? college.primaryColor : college.accentColor }}
                />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
