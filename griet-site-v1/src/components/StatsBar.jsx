/**
 * StatsBar
 *
 * variant="light" (default) — original beige hero strip  (used previously after Hero)
 * variant="dark"            — compact dark-maroon divider (used mid-page, after WhyChooseUs)
 */
export default function StatsBar({ college, variant = 'light' }) {
  const items = college.statsBarItems;

  /* ── Dark mid-page variant ─────────────────────────────────────── */
  if (variant === 'dark') {
    return (
      <div
        className="w-full"
        style={{ backgroundColor: college.primaryColor }}
      >
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-[60px]">
          <div className="flex justify-center items-stretch flex-wrap divide-x divide-white/10">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center px-6 md:px-10 lg:px-14 py-4"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-[2px] h-[16px] rounded-full flex-shrink-0 opacity-60"
                    style={{ backgroundColor: college.softAccent }}
                  />
                  <span
                    className="font-hind font-semibold text-[13.5px] leading-5 tracking-wider whitespace-nowrap uppercase"
                    style={{ color: college.softAccent }}
                  >
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Light hero variant (original) ───────────────────────────── */
  return (
    <div
      className="w-full py-[40px]"
      style={{
        backgroundColor: '#F3DAB2',
        borderBottom: '1px solid rgba(91,16,39,0.15)',
      }}
    >
      <div className="flex justify-center items-stretch flex-wrap">
        {items.map((item, i) => (
          <div
            key={item}
            className="flex items-center px-4 md:px-8 lg:px-12 py-2"
            style={{
              borderRight: i < items.length - 1 ? `1px solid rgba(91,16,39,0.2)` : 'none',
            }}
          >
            <div className="flex items-center gap-3.5">
              <span
                className="w-[3px] h-[22px] rounded-full flex-shrink-0"
                style={{ backgroundColor: college.accentColor }}
              />
              <span
                className="font-hind font-bold text-[16px] leading-6 tracking-wider whitespace-nowrap"
                style={{ color: college.primaryColor }}
              >
                {item}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
