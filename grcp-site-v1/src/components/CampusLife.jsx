const GalleryCard = ({ title, desc, img, className }) => (
  <div className={`relative rounded-3xl overflow-hidden ${className}`}>
    <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-8">
      <h4 className="font-hind font-bold text-white leading-tight mb-1">{title}</h4>
      <p className="font-dm-sans font-normal text-[14px] leading-[17px] text-white/80">{desc}</p>
    </div>
  </div>
)

export default function CampusLife({ college }) {
  const [large, ...rest] = college.campusLifeCards

  return (
    <section className="w-full bg-[#F6F1F2] section-pad">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-4">
            <p className="font-dm-sans font-bold text-[14px] leading-5 uppercase tracking-[1.4px]" style={{ color: '#C72235' }}>
              {college.campusLifeLabel}
            </p>
            <h2 className="font-hind font-bold text-[36px] leading-[54px] text-[#2E2E2E]">
              {college.campusLifeHeading}
            </h2>
          </div>
          <button
            className="text-white font-dm-sans font-semibold text-[16px] leading-6 px-6 py-3 rounded-md"
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
            Explore Gallery
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6" style={{ gridTemplateRows: '384px 288px' }}>
          <GalleryCard
            title={large.title}
            desc={large.desc}
            img={large.img}
            className="col-span-2 row-span-1 text-2xl"
          />
          {rest.slice(0, 1).map(card => (
            <GalleryCard key={card.title} {...card} className="col-span-1 row-span-1 text-xl" />
          ))}
          {rest.slice(1).map(card => (
            <GalleryCard key={card.title} {...card} className="col-span-1 row-span-1 text-xl" />
          ))}
        </div>
      </div>
    </section>
  )
}
