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
              className="hidden lg:block absolute -left-6 -bottom-6 w-[240px] bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
              style={{
                boxShadow: '0 4px 6px -1px rgba(91,16,39,0.06), 0 8px 32px -4px rgba(91,16,39,0.14)',
                border: '1px solid rgba(91,16,39,0.08)',
              }}
            >
              {/* Gradient accent stripe */}
              <div
                className="h-[3px] w-full"
                style={{ background: `linear-gradient(90deg, ${college.primaryColor}, ${college.accentColor})` }}
              />
              <div className="px-6 py-5">
                {/* Stat number */}
                <span
                  className="font-hind font-bold text-[52px] leading-[1] block"
                  style={{ color: college.primaryColor }}
                >
                  {college.aboutYears}
                </span>
                {/* Label */}
                <span className="font-dm-sans font-medium text-[13px] leading-[18px] text-[#555555] mt-1.5 block">
                  {college.aboutYearsLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
