export default function AdmissionsCTA({ college }) {
  return (
    <section className="w-full section-pad" style={{ background: 'linear-gradient(135deg, #1E5C3A 0%, #2D7A50 60%, #1A4D33 100%)' }}>
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <h2 className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] text-white text-center mb-6">
          {college.ctaHeading}
        </h2>
        <p className="font-dm-sans font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-7 text-white/90 text-center max-w-[672px] mb-10">
          {college.ctaDesc}
        </p>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a
            href={college.ctaCTAHref}
            target={college.ctaCTAHref.startsWith('http') ? '_blank' : undefined}
            rel={college.ctaCTAHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="btn-red btn-lg"
          >
            {college.ctaCTALabel}
          </a>
        </div>
      </div>
    </section>
  )
}
