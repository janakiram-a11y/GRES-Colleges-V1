import CollegeLayout from '../CollegeLayout';
import college from '../theme';

export function AdmissionsBanner({ title }) {
  return (
    <div
      className="w-full flex items-center justify-center py-10 sm:py-12 md:py-14 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)` }}
    >
      {/* Decorative elements — scale with viewport */}
      <span
        className="pointer-events-none absolute -left-8 -top-8 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full opacity-10"
        style={{ backgroundColor: college.accentColor }}
      />
      <span
        className="pointer-events-none absolute -right-8 -bottom-8 w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-full opacity-10"
        style={{ backgroundColor: college.accentColor }}
      />

      <div className="text-center px-4 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="block h-px w-8 sm:w-10 opacity-40" style={{ backgroundColor: college.accentColor }} />
          <span className="font-dm-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase opacity-60 text-white">
            GRIET
          </span>
          <span className="block h-px w-8 sm:w-10 opacity-40" style={{ backgroundColor: college.accentColor }} />
        </div>
        <h1 className="text-white font-display font-bold text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] tracking-wide sm:tracking-wider uppercase">
          {title}
        </h1>
        <div className="mx-auto mt-3 h-0.5 w-14 sm:w-16 rounded-full" style={{ backgroundColor: college.accentColor }} />
      </div>
    </div>
  );
}

export function SectionHeading({ children }) {
  return (
    <h2 className="font-display font-bold text-[1.375rem] md:text-[1.75rem] lg:text-[2.125rem] leading-[1.2] mb-4" style={{ color: college.primaryColor }}>
      {children}
    </h2>
  );
}

export default function AdmissionsLayout({ title, children, sidebar }) {
  return (
    <CollegeLayout college={college}>
      <AdmissionsBanner title={title} />
      <div className="page-content px-5 md:px-16 lg:px-[120px] py-8 md:py-14 lg:py-20">
        {sidebar ? (
          <div className="flex gap-8">
            <div className="flex-1 min-w-0">{children}</div>
            <aside className="hidden lg:block w-64 shrink-0">{sidebar}</aside>
          </div>
        ) : (
          children
        )}
      </div>
    </CollegeLayout>
  );
}
