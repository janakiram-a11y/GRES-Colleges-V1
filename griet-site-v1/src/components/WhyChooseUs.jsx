import { PhoneIcon, ShieldIcon, CapIcon, BuildingIcon } from './icons';

const PRIMARY = '#5B1027';
const featureIcons = [
  () => <PhoneIcon color={PRIMARY} size={20} />,
  () => <ShieldIcon color={PRIMARY} size={20} />,
  () => <CapIcon color={PRIMARY} size={20} />,
  () => <BuildingIcon color={PRIMARY} size={20} />,
]

export default function WhyChooseUs({ college }) {
  return (
    <section className="w-full bg-white page-pad">
      <div className="flex flex-col gap-[30px] items-start lg:flex-row">
        <div className="flex-1 flex flex-col gap-3 pr-8">
          <h2 className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] text-[#111827]">
            {college.aboutHeading}
          </h2>
          <p className="font-hind font-normal text-[16px] leading-6 text-[#666666]">
            {college.aboutP1}
          </p>
          <p className="font-hind font-normal text-[16px] leading-6 text-[#666666]">
            {college.aboutP2}
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 mt-3">
            {college.aboutFeatures.map(({ title, sub }, i) => {
              const Icon = featureIcons[i % featureIcons.length]
              return (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F3DAB2]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-hind font-bold text-[14px] leading-5 text-[#333333]">{title}</span>
                    <span className="font-hind font-normal text-[12px] leading-4 text-[#666666]">{sub}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex-1 flex justify-end relative" style={{ minHeight: '480px' }}>
          <div className="relative w-full lg:w-[585px]">
            <img
              src={college.aboutImage}
              alt={`${college.shortName} Campus`}
              className="w-full h-auto"
            />
            <div
              className="hidden lg:block absolute -left-6 -bottom-5 w-[256px] bg-white border-l-4 border-l-[#5B1027] rounded-3xl px-6 py-5"
              style={{ boxShadow: '0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)' }}
            >
              <span className="font-hind font-bold text-[48px] leading-[48px] text-[#5B1027] block">{college.aboutYears}</span>
              <span className="font-dm-sans font-medium text-[14px] leading-5 text-[#666666]">
                {college.aboutYearsLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
