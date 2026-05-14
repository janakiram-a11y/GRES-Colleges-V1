import CollegeLayout from '../CollegeLayout';
import college from '../theme';

export function AdmissionsBanner({ title }) {
  return (
    <div
      className="w-full flex items-center justify-center py-10"
      style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)` }}
    >
      <div className="text-center px-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="block h-px w-10 opacity-40" style={{ backgroundColor: college.accentColor }} />
          <span className="font-dm-sans text-[11px] font-semibold tracking-[0.2em] uppercase opacity-60 text-white">
            GRIET
          </span>
          <span className="block h-px w-10 opacity-40" style={{ backgroundColor: college.accentColor }} />
        </div>
        <h1 className="text-white font-hind font-bold text-2xl md:text-3xl tracking-widest uppercase">
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

export default function AdmissionsLayout({ title, children }) {
  return (
    <CollegeLayout college={college}>
      <AdmissionsBanner title={title} />
      <div className="page-pad">
        {children}
      </div>
    </CollegeLayout>
  );
}
