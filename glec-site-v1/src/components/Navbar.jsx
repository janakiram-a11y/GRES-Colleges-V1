import { withAlpha } from '../theme';

export default function Navbar({ college }) {
  return (
    <nav
      className="w-full bg-white/[0.95] backdrop-blur-md py-3 sticky top-0 z-50 overflow-hidden"
      style={{ borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.08)}` }}
    >
      <div className="max-w-[1320px] mx-auto px-[60px] flex justify-between items-center h-[88px]">
        <div className="flex items-center">
          <img
            src={college.logo}
            alt={`${college.shortName} Logo`}
            className="h-[72px] w-auto max-w-[260px] object-contain object-left flex-shrink-0"
          />
        </div>
        <div className="flex items-center">
          {college.accreditationLogo && (
            <img
              src={college.accreditationLogo}
              alt="Accreditation Logos"
              className="h-[86px] object-contain"
            />
          )}
        </div>
      </div>
    </nav>
  );
}
