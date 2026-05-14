export default function CareerOutcomes({ college }) {
  return (
    <section className="w-full bg-[#F6F1F2] section-pad">
      <div className="max-w-[1200px] mx-auto flex items-center gap-24">
        <div className="flex flex-col flex-1 gap-6">
          <div>
            <p className="font-hind font-bold text-[20px] leading-[30px] uppercase mb-3" style={{ color: '#00873d' }}>
              {college.careerLabel}
            </p>
            <h2 className="font-hind font-bold text-[36px] leading-[54px] text-[#111827] mb-4">
              {college.careerHeading}
            </h2>
            <p className="font-dm-sans font-normal text-[16px] leading-5 text-[#4B5563] max-w-[512px]">
              {college.careerDesc}
            </p>
          </div>

          <div className="flex">
            <div className="flex-1 pl-6 border-l-2 border-[#5B1027] flex flex-col gap-1">
              <span className="font-hind font-bold text-[36px] leading-10 text-[#111827]">{college.careerHighestPackage}</span>
              <span className="font-dm-sans font-bold text-[11px] leading-4 uppercase tracking-[1.1px] text-[#4B5563]">
                HIGHEST PACKAGE
              </span>
            </div>
            <div className="flex-1 pl-6 border-l-2 border-[#00873d] flex flex-col gap-1">
              <span className="font-hind font-bold text-[36px] leading-10 text-[#111827]">{college.careerOffersCount}</span>
              <span className="font-dm-sans font-bold text-[11px] leading-4 uppercase tracking-[1.1px] text-[#4B5563]">
                OFFERS MADE
              </span>
            </div>
          </div>

          <div
            className="border border-[rgba(229,231,235,0.5)] rounded-sm bg-white px-[14px] py-4 flex flex-col gap-3"
          >
            <p className="font-dm-sans font-bold text-[10px] leading-[15px] uppercase tracking-[1px] text-[#111827] opacity-70">
              Top Recruiters
            </p>
            <div className="flex items-center gap-10 opacity-60">
              {college.careerRecruiters.map(r => (
                <span key={r} className="font-hind font-bold text-[20px] leading-7 text-[#111827]">{r}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[548px] flex-shrink-0">
          <img
            src={college.careerImage}
            alt="Career Outcomes"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
