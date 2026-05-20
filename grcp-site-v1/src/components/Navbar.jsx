import { withAlpha } from '../theme';

export default function Navbar({ college }) {
  return (
    <nav
      className="w-full bg-white sticky top-0 z-50"
      style={{
        borderBottom: `2px solid rgba(45,122,80,0.15)`,
        boxShadow: '0 2px 12px rgba(45,122,80,0.07)',
      }}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-[60px] flex justify-between items-center h-[72px] sm:h-[80px] lg:h-[88px]">
        {/* Logo */}
        <div className="flex items-center min-w-0">
          <img
            src={college.logo}
            alt={`${college.shortName} Logo`}
            className="h-[52px] sm:h-[60px] lg:h-[72px] w-auto object-contain flex-shrink-0 max-w-[180px] sm:max-w-[220px] lg:max-w-[280px]"
          />
        </div>

        {/* Accreditation logo (right side) */}
        <div className="flex items-center flex-shrink-0">
          {college.accreditationLogo && (
            <img
              src={college.accreditationLogo}
              alt="Accreditation Logos"
              className="h-[44px] sm:h-[56px] lg:h-[70px] w-auto object-contain"
            />
          )}
        </div>
      </div>
    </nav>
  );
}
