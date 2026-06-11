import CTAButton from './CTAButton';

export default function AdmissionsCTA({ college }) {
  return (
    <section className="w-full bg-[#5B1027] page-pad">
      <div className="flex flex-col items-center gap-0">
        <h2 className="font-display font-bold text-[1.75rem] md:text-[2.125rem] lg:text-[2.5rem] leading-[1.2] text-white text-center mb-6">
          {college.ctaHeading}
        </h2>
        <p className="font-body font-normal text-xl leading-[1.7] text-white/90 text-center max-w-[672px] mb-10">
          {college.ctaDesc}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <CTAButton href={college.ctaCTAHref} size="lg" className="font-bold !py-[21px]">{college.ctaCTALabel}</CTAButton>
        </div>
      </div>
    </section>
  )
}
