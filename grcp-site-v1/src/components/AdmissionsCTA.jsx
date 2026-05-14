export default function AdmissionsCTA({ college }) {
  return (
    <section className="w-full bg-[#5B1027] section-pad">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <h2 className="font-hind font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight lg:leading-[48px] text-white text-center mb-6">
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
            className="text-white font-dm-sans font-bold text-[16px] sm:text-[18px] leading-7 px-8 sm:px-10 py-4 sm:py-[21px] rounded transition-colors inline-block"
            style={{ backgroundColor: '#00873d', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#006e31')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#00873d')}
          >
            {college.ctaCTALabel}
          </a>
          <button
            className="border-2 border-white text-white font-dm-sans font-bold text-[16px] sm:text-[18px] leading-7 px-8 sm:px-10 py-4 sm:py-[19px] rounded hover:bg-white/10 transition-colors"
            style={{ boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)' }}
          >
            {college.ctaSecondaryLabel}
          </button>
        </div>
      </div>
    </section>
  )
}
