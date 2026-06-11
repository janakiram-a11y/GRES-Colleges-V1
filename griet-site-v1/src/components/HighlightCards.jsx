import { StarIcon, MortarIcon, UsersIcon } from './icons';

// Each icon needs to render at currentColor to work inside the colored circle container
const icons = [
  () => <StarIcon color="currentColor" size={20} />,
  () => <MortarIcon color="currentColor" size={20} />,
  () => <UsersIcon color="currentColor" size={20} />,
]

export default function HighlightCards({ college }) {
  return (
    <section className="w-full section-pad" style={{ backgroundColor: '#FAF4EE' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {college.highlightCards.map(({ title, desc }, i) => {
          const Icon = icons[i % icons.length]
          return (
            <div
              key={title}
              className="bg-white rounded-2xl px-8 py-10 flex flex-col gap-5"
              style={{ boxShadow: '0 1px 6px rgba(91,16,39,0.07)' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: college.primaryColor, color: '#F3DAB2' }}
              >
                <Icon />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="font-display font-semibold text-[1.375rem] leading-[1.3]" style={{ color: college.primaryColor }}>
                  {title}
                </h3>
                <p className="font-body font-normal text-base leading-[1.6]" style={{ color: '#606060' }}>
                  {desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
