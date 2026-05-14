const BookIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
    <path d="M3 5h22v18H3z" stroke="#F3DAB2" strokeWidth="2" strokeLinejoin="round" />
    <path d="M14 5v18M3 12h11" stroke="#F3DAB2" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
const MortarIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
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
    <section className="w-full bg-[#5B1027] section-pad">
      <div className="max-w-[1200px] mx-auto flex items-center gap-0">
        <div className="flex flex-col gap-6 w-[600px]">
          <p className="font-hind font-bold text-[14px] leading-5 uppercase tracking-[1.4px] text-[#F3DAB2]">
            {college.academicProgramsLabel}
          </p>
          <h2 className="font-hind font-bold text-[36px] leading-[54px] text-white">
            {college.academicProgramsHeading}
          </h2>
          <p className="font-dm-sans font-normal text-[18px] leading-[22px] text-[#E1D3D9]">
            {college.academicProgramsDesc}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <button
              className="bg-[#C32033] text-white font-dm-sans font-semibold text-[18px] leading-[22px] px-8 py-[19px] rounded hover:bg-[#a81b2a] transition-colors"
              style={{ boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)' }}
            >
              View all programs
            </button>
            <button className="border-2 border-white text-white font-dm-sans font-semibold text-[18px] leading-[22px] px-8 py-[14px] rounded hover:bg-white/10 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-end gap-6">
          {college.academicPrograms.map(({ count, title, desc }, i) => {
            const Icon = programIcons[i % programIcons.length]
            return (
              <div
                key={title}
                className="w-[288px] h-[320px] bg-white/10 border border-white/20 rounded-3xl p-6 flex flex-col justify-center gap-3"
              >
                <div>
                  <span className="font-hind font-bold text-[32px] leading-[38px] text-[#F3DAB2] block">{count}</span>
                  <span className="font-hind font-bold text-[20px] leading-7 text-white block">{title}</span>
                </div>
                <p className="font-dm-sans font-normal text-[14px] leading-[17px] text-[#E1D3D9]">{desc}</p>
                <div className="flex items-center justify-end gap-1">
                  <span className="font-dm-sans font-semibold text-[14px] leading-5 text-white">Learn More</span>
                  <ChevronRight />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
