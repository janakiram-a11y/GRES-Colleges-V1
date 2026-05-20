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
            className="text-white font-dm-sans font-semibold text-[16px] sm:text-[18px] leading-7 px-8 sm:px-10 py-4 sm:py-[21px] rounded-md inline-block"
            style={{
              background: 'linear-gradient(135deg, #D7283C 0%, #C72235 55%, #A81C2E 100%)',
              boxShadow: '0 3px 8px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.12)',
              letterSpacing: '0.01em',
              transition: 'all 0.18s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #E12C41 0%, #D7283C 55%, #B51E30 100%)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.14)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #D7283C 0%, #C72235 55%, #A81C2E 100%)';
              e.currentTarget.style.boxShadow = '0 3px 8px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.12)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {college.ctaCTALabel}
          </a>
          <button
            className="text-white font-dm-sans font-semibold text-[16px] sm:text-[18px] leading-7 px-8 sm:px-10 py-4 sm:py-[19px] rounded-md"
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.35)',
              boxShadow: '0 3px 8px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.10)',
              letterSpacing: '0.01em',
              transition: 'all 0.18s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.14)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.boxShadow = '0 3px 8px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.10)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {college.ctaSecondaryLabel}
          </button>
        </div>
      </div>
    </section>
  )
}
