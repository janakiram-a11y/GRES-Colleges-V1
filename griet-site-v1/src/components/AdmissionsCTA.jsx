import CTAButton from './CTAButton';

export default function AdmissionsCTA({ college }) {
  return (
    <section className="w-full bg-[#5B1027] page-pad">
      <div className="flex flex-col items-center gap-0">
        <h2 className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] text-white text-center mb-6">
          {college.ctaHeading}
        </h2>
        <p className="font-hind font-normal text-[20px] leading-7 text-white/90 text-center max-w-[672px] mb-10">
          {college.ctaDesc}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <CTAButton href={college.ctaCTAHref} size="lg" className="font-bold !py-[21px]">{college.ctaCTALabel}</CTAButton>
        </div>
      </div>
    </section>
  )
}
