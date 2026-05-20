export default function Hero({ college }) {
  return (
    <section className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px] flex items-center overflow-hidden">

      {/* ── Background image ─────────────────────────────────────── */}
      {college.heroBgImage && (
        <img
          src={college.heroBgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.90) brightness(0.94) contrast(1.02)' }}
        />
      )}

      {/* ── Cinematic overlay system (back → front) ──────────────── */}

      {/* 1 · Primary depth sweep — multi-stop forest-to-transparent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(8,26,16,0.97) 0%, rgba(14,44,28,0.94) 10%, rgba(20,62,40,0.87) 22%, rgba(28,84,54,0.74) 36%, rgba(36,105,66,0.50) 50%, rgba(43,116,74,0.24) 64%, rgba(45,122,80,0.08) 78%, transparent 92%)',
        }}
      />

      {/* 2 · Atmospheric bottom vignette — grounds the image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(5,18,11,0.82) 0%, rgba(12,40,25,0.42) 18%, rgba(18,58,36,0.14) 38%, transparent 58%)',
        }}
      />

      {/* 3 · Warm beige radial bloom — healthcare warmth, anchored left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 72% 115% at 0% 54%, rgba(243,218,178,0.12) 0%, rgba(240,210,165,0.05) 36%, transparent 62%)',
        }}
      />

      {/* 4 · Top-edge cinematic shadow — letterbox depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(5,18,11,0.42) 0%, rgba(8,26,16,0.14) 14%, transparent 30%)',
        }}
      />

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 w-full section-pad flex justify-between items-center">
        <div className="flex flex-col gap-[14px] sm:gap-[18px] max-w-[660px]">

          {/* Heading — elegant off-white, layered shadow */}
          <h1
            className="font-hind font-semibold text-[32px] leading-[40px] sm:text-[38px] sm:leading-[50px] lg:text-[50px] lg:leading-[60px]"
            style={{
              color: '#E6F4EC',
              textShadow: '0 1px 4px rgba(0,0,0,0.42), 0 3px 16px rgba(0,0,0,0.32), 0 8px 36px rgba(0,0,0,0.18)',
              letterSpacing: '-0.01em',
            }}
          >
            {college.heroHeading}
          </h1>

          {/* Subtext — warm green-white, readable and soft */}
          <p
            className="font-dm-sans font-normal text-[14px] sm:text-[16px] lg:text-[17px] leading-[26px] lg:leading-[28px]"
            style={{
              color: 'rgba(208,238,220,0.80)',
              textShadow: '0 1px 10px rgba(0,0,0,0.36)',
              maxWidth: '560px',
            }}
          >
            {college.heroSubtext}
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap mt-1">

            {/* Primary — amaranth red, CTA hierarchy anchor */}
            <a
              href={college.heroCTAHref}
              target={college.heroCTAHref.startsWith('http') ? '_blank' : undefined}
              rel={college.heroCTAHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-white font-dm-sans font-semibold text-[14px] sm:text-[15px] leading-6 px-6 sm:px-8 py-3 sm:py-[13px] rounded-md inline-block"
              style={{
                background: 'linear-gradient(135deg, #D7283C 0%, #C72235 55%, #A81C2E 100%)',
                boxShadow: '0 3px 8px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.14)',
                letterSpacing: '0.01em',
                transition: 'all 0.18s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, #E12C41 0%, #D7283C 55%, #B51E30 100%)';
                e.currentTarget.style.boxShadow =
                  '0 6px 18px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.16)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, #D7283C 0%, #C72235 55%, #A81C2E 100%)';
                e.currentTarget.style.boxShadow =
                  '0 3px 8px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.14)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {college.heroCTALabel}
            </a>

            {/* Secondary — premium glassmorphism */}
            <button
              className="font-dm-sans font-semibold text-[14px] sm:text-[15px] leading-6 px-6 sm:px-8 py-3 sm:py-[13px] rounded-md"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: 'rgba(224,246,234,0.90)',
                boxShadow:
                  '0 2px 12px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.06)',
                letterSpacing: '0.01em',
                transition: 'all 0.20s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.16)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.34)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 8px 28px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(0,0,0,0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 2px 12px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.06)';
              }}
            >
              Explore Programs
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom shimmer — bridges hero → StatsBar ─────────────── */}
      <div
        className="absolute bottom-0 inset-x-0 h-[2px]"
        style={{
          background:
            'linear-gradient(to right, rgba(6,22,14,0.70) 0%, rgba(28,84,54,0.48) 20%, rgba(45,122,80,0.38) 38%, rgba(243,218,178,0.28) 55%, rgba(199,34,53,0.18) 75%, transparent 100%)',
        }}
      />
    </section>
  )
}
