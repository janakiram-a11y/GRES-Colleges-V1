export default function StatsBar({ college }) {
  const items = college.statsBarItems

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
            className="flex items-center px-12 py-2"
            style={{
              borderRight: i < items.length - 1 ? `1px solid rgba(91,16,39,0.2)` : 'none',
            }}
          >
            <div className="flex items-center gap-3.5">
              <span
                className="w-[3px] h-[22px] rounded-full flex-shrink-0"
                style={{ backgroundColor: college.greenAccent }}
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
  )
}
