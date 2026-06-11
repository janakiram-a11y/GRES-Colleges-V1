import college from '../theme';
import CollegeLayout from '../CollegeLayout';

export function AcademicsBanner({ title }) {
  return (
    <div
      className="relative w-full flex items-center justify-center py-10 sm:py-12 md:py-14 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FAF4EE 0%, #F3E8D4 100%)',
        borderBottom: '1px solid rgba(91,16,39,0.10)',
      }}
    >
      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #5B1027 0, #5B1027 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
          opacity: 0.025,
        }}
      />
      <div className="relative text-center px-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="block h-px w-6 sm:w-8 md:w-10" style={{ backgroundColor: 'rgba(91,16,39,0.25)' }} />
          <span
            className="font-dm-sans text-[11px] font-semibold tracking-[0.2em] uppercase"
            style={{ color: 'rgba(91,16,39,0.50)' }}
          >
            GRIET
          </span>
          <span className="block h-px w-6 sm:w-8 md:w-10" style={{ backgroundColor: 'rgba(91,16,39,0.25)' }} />
        </div>
        <h1
          className="font-hind font-bold text-xl sm:text-2xl md:text-3xl tracking-wider sm:tracking-widest uppercase"
          style={{ color: college.primaryColor }}
        >
          {title}
        </h1>
        <div className="mx-auto mt-3 h-0.5 w-16 rounded-full" style={{ backgroundColor: college.accentColor }} />
      </div>
    </div>
  );
}

export function SectionHeading({ children }) {
  return (
    <h2 className="font-hind font-bold text-xl md:text-2xl mb-4" style={{ color: college.primaryColor }}>
      {children}
    </h2>
  );
}

export default function AcademicsLayout({ title, children }) {
  return (
    <CollegeLayout college={college}>
      <AcademicsBanner title={title} />
      <div className="px-5 md:px-16 lg:px-[120px] py-8 md:py-14 lg:py-20">
        {children}
      </div>
    </CollegeLayout>
  );
}
