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
    <section className="w-full bg-white page-pad py-8 md:py-14 lg:py-20">
      <div className="flex flex-col gap-[30px] items-start lg:flex-row">
        <div className="flex-1 flex flex-col gap-3 lg:pr-8">
          <h2 className="font-display font-bold text-[1.75rem] md:text-[2.125rem] lg:text-[2.5rem] leading-[1.2] text-[#111827]">
            {college.aboutHeading}
          </h2>
          <p className="font-body font-normal text-lg leading-[1.7] text-[#555555]">
            {college.aboutP1}
          </p>
          <p className="font-body font-normal text-lg leading-[1.7] text-[#555555]">
            {college.aboutP2}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 mt-3">
            {college.aboutFeatures.map(({ title, sub }, i) => {
              const Icon = featureIcons[i % featureIcons.length]
              return (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F3DAB2]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-display font-semibold text-base text-[#333333]">{title}</span>
                    <span className="font-body font-normal text-[15px] leading-[1.5] text-[#666666]">{sub}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex-1 flex justify-end relative">
          <div className="relative w-full lg:w-[585px]">
            <img
              src={college.aboutImage}
              alt={`${college.shortName} Campus`}
              className="w-full h-auto aspect-video lg:aspect-auto"
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
                  className="font-display font-bold text-[3rem] leading-none block"
                  style={{ color: college.primaryColor }}
                >
                  {college.aboutYears}
                </span>
                <span className="font-display font-medium text-sm leading-snug text-[#555555] mt-1.5 block">
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
