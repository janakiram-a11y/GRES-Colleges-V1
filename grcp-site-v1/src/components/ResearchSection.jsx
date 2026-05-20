export default function ResearchSection({ college }) {
  return (
    <section className="w-full section-pad" style={{ background: 'linear-gradient(135deg, #1E5C3A 0%, #2D7A50 60%, #1A4D33 100%)' }}>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center gap-3">
          <p className="font-dm-sans font-bold text-[20px] leading-5 uppercase tracking-[1.4px] text-[#F3DAB2] text-center">
            {college.researchLabel}
          </p>
          <h2 className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] text-white text-center">
            {college.researchHeading}
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {college.researchStats.map(({ count, label, desc }) => (
            <div
              key={label}
              className="bg-white/15 border border-white/25 rounded-xl px-8 py-[31px] flex flex-col items-center text-center gap-3 transition-all duration-200 hover:bg-white/20"
            >
              <span className="font-hind font-bold text-[30px] leading-[38px] text-[#F3DAB2]">{count}</span>
              <span className="font-hind font-semibold text-[18px] leading-7 text-white">{label}</span>
              <span className="font-dm-sans font-normal text-[14px] leading-5" style={{ color: 'rgba(205,240,220,0.80)' }}>{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
