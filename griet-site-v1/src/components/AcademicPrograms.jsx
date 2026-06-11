import CTAButton from './CTAButton';

const BookIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-12 h-12 md:w-14 md:h-14">
    <path d="M3 5h22v18H3z" stroke="#F3DAB2" strokeWidth="2" strokeLinejoin="round" />
    <path d="M14 5v18M3 12h11" stroke="#F3DAB2" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
const MortarIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-12 h-12 md:w-14 md:h-14">
    <path d="M14 4L3 10l11 5 11-5-11-6z" stroke="#F3DAB2" strokeWidth="2" strokeLinejoin="round" />
    <path d="M7 13v4c2 2 7 3 7 3s5-1 7-3v-4" stroke="#F3DAB2" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
const ChevronRight = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M6 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const programIcons = [BookIcon, MortarIcon]

export default function AcademicPrograms({ college }) {
  return (
    <section className="w-full bg-[#5B1027] page-pad py-8 md:py-14 lg:py-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-0">
        <div className="flex flex-col gap-6 w-full lg:w-[600px]">
          <p className="font-display font-bold text-[0.75rem] leading-4 uppercase tracking-[0.12em] text-[#F3DAB2]">
            {college.academicProgramsLabel}
          </p>
          <h2 className="font-display font-bold text-[1.75rem] md:text-[2.125rem] lg:text-[2.5rem] leading-[1.2] text-white">
            {college.academicProgramsHeading}
          </h2>
          <p className="font-body font-normal text-lg leading-[1.7] text-[#E1D3D9]">
            {college.academicProgramsDesc}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <CTAButton href="/admissions/programmes" size="lg">View all programs</CTAButton>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 sm:justify-items-end">
          {college.academicPrograms.map(({ count, title, desc, href }, i) => {
            const Icon = programIcons[i % programIcons.length]
            return (
              <div
                key={title}
                className="w-full sm:max-w-[320px] bg-white/10 border border-white/20 rounded-3xl p-6 flex flex-col justify-center gap-3 min-h-[240px]"
              >
                <Icon />
                <div>
                  <span className="font-display font-bold text-[2rem] leading-none text-[#F3DAB2] block">{count}</span>
                  <span className="font-display font-semibold text-[1.375rem] leading-snug text-white block">{title}</span>
                </div>
                <p className="font-body font-normal text-base leading-[1.6] text-[#E1D3D9]">{desc}</p>
                <a href={href || '/admissions/programmes'} className="flex items-center justify-end gap-1">
                  <span className="font-display font-semibold text-base text-white">Learn More</span>
                  <ChevronRight />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
