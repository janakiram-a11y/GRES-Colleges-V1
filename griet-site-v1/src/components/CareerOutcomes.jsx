import SectionLabel from './SectionLabel';

export default function CareerOutcomes({ college }) {
  return (
    <section className="w-full bg-[#F6F1F2] page-pad">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-24">
        <div className="flex flex-col flex-1 gap-6 min-w-0">
          <div>
            <SectionLabel className="mb-3">{college.careerLabel}</SectionLabel>
            <h2 className="font-hind font-semibold text-[22px] leading-8 sm:text-[28px] sm:leading-9 lg:text-[40px] lg:leading-[48px] text-[#111827] mb-4">
              {college.careerHeading}
            </h2>
            <p className="font-hind font-normal text-[15px] sm:text-[16px] leading-6 text-[#4B5563]">
              {college.careerDesc}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="pl-4 sm:pl-6 border-l-2 border-[#5B1027] flex flex-col gap-1">
              <span className="font-hind font-bold text-[28px] sm:text-[36px] leading-10 text-[#111827]">{college.careerHighestPackage}</span>
              <span className="font-dm-sans font-bold text-[10px] sm:text-[11px] leading-4 uppercase tracking-[1.1px] text-[#4B5563]">
                HIGHEST PACKAGE
              </span>
            </div>
            <div className="pl-4 sm:pl-6 border-l-2 border-[#C32033] flex flex-col gap-1">
              <span className="font-hind font-bold text-[28px] sm:text-[36px] leading-10 text-[#111827]">{college.careerOffersCount}</span>
              <span className="font-dm-sans font-bold text-[10px] sm:text-[11px] leading-4 uppercase tracking-[1.1px] text-[#4B5563]">
                OFFERS MADE
              </span>
            </div>
          </div>

          <div className="border border-[rgba(229,231,235,0.5)] rounded-sm bg-white px-3 sm:px-[14px] py-4 flex flex-col gap-3 min-w-0">
            <p className="font-dm-sans font-bold text-[10px] leading-[15px] uppercase tracking-[1px] text-[#111827] opacity-70">
              Top Recruiters
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {college.careerRecruiters.map(r => (
                <span key={r} className="font-hind font-bold text-[16px] sm:text-[18px] leading-7 text-[#6B7280]">{r}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:flex-shrink-0">
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
