/**
 * StatsBar
 *
 * variant="light" (default) — original beige hero strip  (used previously after Hero)
 * variant="dark"            — compact dark-maroon divider (used mid-page, after WhyChooseUs)
 *
 * Each item may be a plain string or an object { number, label }.
 * Plain strings are displayed as a single label line.
 */

function parseItem(item) {
  if (item && typeof item === 'object' && item.number !== undefined) {
    return { number: item.number, label: item.label };
  }
  // Try to split "900+ Recruiters" → number "900+", label "Recruiters"
  const match = String(item).match(/^([0-9][0-9+,. LPA]*)\s+(.+)$/);
  if (match) {
    return { number: match[1], label: match[2] };
  }
  return { number: null, label: String(item) };
}

export default function StatsBar({ college, variant = 'light' }) {
  const items = college.statsBarItems;

  /* ── Dark mid-page variant ─────────────────────────────────────── */
  if (variant === 'dark') {
    return (
      <div
        className="w-full"
        style={{ backgroundColor: college.primaryColor }}
      >
        <div className="max-w-[1320px] mx-auto px-5 md:px-16 lg:px-[120px]">
          {/* Mobile: 2-col grid with gap-px separators; lg: single row */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10"
          >
            {items.map((item) => {
              const { number, label } = parseItem(item);
              return (
                <div
                  key={typeof item === 'string' ? item : item.label}
                  className="flex items-center justify-center px-4 md:px-10 lg:px-14 py-3 md:py-4"
                  style={{ backgroundColor: college.primaryColor }}
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <span
                      className="w-[2px] h-[16px] rounded-full flex-shrink-0 opacity-60"
                      style={{ backgroundColor: college.softAccent }}
                    />
                    <div className="flex flex-col">
                      {number && (
                        <span
                          className="font-hind font-bold text-2xl md:text-3xl lg:text-4xl leading-tight"
                          style={{ color: college.softAccent }}
                        >
                          {number}
                        </span>
                      )}
                      <span
                        className={`font-hind font-semibold tracking-wider uppercase leading-snug text-[13px] md:text-[14px] lg:text-[15px] ${label.length <= 15 ? 'whitespace-nowrap' : 'break-words'}`}
                        style={{ color: college.softAccent }}
                      >
                        {label}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  /* ── Light hero variant (original) ───────────────────────────── */
  return (
    <div
      className="w-full py-6 md:py-[40px]"
      style={{
        backgroundColor: '#F3DAB2',
        borderBottom: '1px solid rgba(91,16,39,0.15)',
      }}
    >
      {/* Mobile: 2-col grid with gap-px bg-gray-200 separators; lg: 4-col */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
        {items.map((item) => {
          const { number, label } = parseItem(item);
          return (
            <div
              key={typeof item === 'string' ? item : item.label}
              className="flex items-center justify-center px-4 md:px-8 lg:px-12 py-3 md:py-4 bg-[#F3DAB2]"
            >
              <div className="flex items-center gap-2.5 md:gap-3.5 min-w-0">
                <span
                  className="w-[3px] h-[18px] md:h-[22px] rounded-full flex-shrink-0"
                  style={{ backgroundColor: college.accentColor }}
                />
                <div className="flex flex-col min-w-0">
                  {number && (
                    <span
                      className="font-hind font-bold text-2xl md:text-3xl lg:text-4xl leading-tight"
                      style={{ color: college.primaryColor }}
                    >
                      {number}
                    </span>
                  )}
                  <span
                    className={`font-hind font-bold tracking-wider leading-snug text-[13px] md:text-[14px] lg:text-[15px] ${label.length <= 15 ? 'whitespace-nowrap' : 'break-words'}`}
                    style={{ color: college.primaryColor }}
                  >
                    {label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
