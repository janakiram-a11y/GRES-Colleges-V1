import SectionLabel from './SectionLabel';

export default function ResearchSection({ college }) {
  return (
    <section className="w-full bg-[#5B1027] page-pad">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-3">
          <SectionLabel variant="light" className="text-center">{college.researchLabel}</SectionLabel>
          <h2 className="font-display font-bold text-[1.75rem] md:text-[2.125rem] lg:text-[2.5rem] leading-[1.2] text-white text-center">
            {college.researchHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {college.researchStats.map(({ count, label, desc }) => (
            <div
              key={label}
              className="bg-white/10 border border-white/20 rounded-xl px-8 py-[31px] flex flex-col items-center text-center gap-3"
            >
              <span className="font-display font-bold text-[2rem] leading-none text-[#F3DAB2]">{count}</span>
              <span className="font-display font-semibold text-[1.125rem] leading-snug text-white">{label}</span>
              <span className="font-body font-normal text-base leading-[1.6] text-[#E1D3D9]">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
