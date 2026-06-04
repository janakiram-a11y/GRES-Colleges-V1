export default function Hero({ college }) {
  return (
    <section className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px] flex items-center overflow-hidden">

      {/* ── Background image ─────────────────────────────────────── */}
      {college.heroBgImage && (
        <img
          src={college.heroBgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 40%', filter: 'saturate(0.90) brightness(0.85) contrast(1.02)' }}
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
            className="font-display font-bold text-type-h3 sm:text-[38px] lg:text-type-h1"
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
            className="font-body font-normal text-type-body"
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
              className="btn-red btn-lg"
            >
              {college.heroCTALabel}
            </a>

            {/* Secondary — premium glassmorphism */}
            <a href="/programmes" className="btn-ghost-white btn-lg">
              Explore Programs
            </a>
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
