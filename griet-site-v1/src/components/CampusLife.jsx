import { Link } from 'react-router-dom';

function GalleryCard({ title, desc, img, fallbackImg, link, gridClass }) {
  const card = (
    <div className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer group">
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        onError={e => {
          if (fallbackImg && e.currentTarget.src !== window.location.origin + fallbackImg) {
            e.currentTarget.src = fallbackImg;
          }
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
        <h4 className="font-hind font-bold text-white leading-tight mb-1">{title}</h4>
        <p className="font-dm-sans font-normal text-[14px] leading-[17px] text-white/80">{desc}</p>
        <span className="mt-2 inline-block font-hind font-semibold text-[12px] text-white/0 group-hover:text-white/80 transition-colors uppercase tracking-wide">
          View Photos →
        </span>
      </div>
    </div>
  );

  // Grid positioning classes must live on the outermost element (the grid child)
  if (link) {
    return <Link to={link} className={gridClass}>{card}</Link>;
  }
  return <div className={gridClass}>{card}</div>;
}

export default function CampusLife({ college }) {
  const [large, ...rest] = college.campusLifeCards;

  return (
    <section className="w-full bg-[#F6F1F2] page-pad">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end">
          <div className="flex flex-col gap-4">
            <p className="font-hind font-bold text-[14px] leading-5 uppercase tracking-[1.4px] text-[#5B1027]">
              {college.campusLifeLabel}
            </p>
            <h2 className="font-hind font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#2E2E2E]">
              {college.campusLifeHeading}
            </h2>
          </div>
          <Link
            to="/events-gallery"
            className="self-start sm:self-auto border-2 border-[#5B1027] text-[#5B1027] font-dm-sans font-medium text-[16px] leading-6 px-6 py-2 rounded-lg hover:bg-[#5B1027] hover:text-white transition-colors shrink-0"
          >
            Explore Gallery
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 lg:[grid-template-rows:384px_288px]">
          <GalleryCard
            title={large.title} desc={large.desc}
            img={large.img} fallbackImg={large.fallbackImg} link={large.link}
            gridClass="h-[200px] sm:h-[240px] md:h-[280px] lg:h-auto sm:col-span-2 lg:col-span-2 row-span-1"
          />
          {rest.slice(0, 1).map(card => (
            <GalleryCard key={card.title}
              title={card.title} desc={card.desc}
              img={card.img} fallbackImg={card.fallbackImg} link={card.link}
              gridClass="h-[200px] sm:h-[240px] md:h-[280px] lg:h-auto col-span-1 row-span-1"
            />
          ))}
          {rest.slice(1).map(card => (
            <GalleryCard key={card.title}
              title={card.title} desc={card.desc}
              img={card.img} fallbackImg={card.fallbackImg} link={card.link}
              gridClass="h-[200px] sm:h-[240px] md:h-[280px] lg:h-auto col-span-1 row-span-1"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
