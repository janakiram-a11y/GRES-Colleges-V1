import SectionLabel from './SectionLabel';

export default function CampusIntro({ college }) {
  return (
    <section className="w-full bg-white page-pad">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-2">
          <SectionLabel className="text-center">{college.campusIntroLabel}</SectionLabel>
          <h2 className="font-display font-bold text-[1.75rem] md:text-[2.125rem] lg:text-[2.5rem] leading-[1.2] text-[#111827] text-center">
            {college.campusIntroHeading}
          </h2>
          <p className="font-body font-normal text-lg leading-[1.7] text-[#666666] text-center">
            {college.campusIntroDesc}
          </p>
        </div>

        <div
          className="w-full rounded-xl overflow-hidden"
          style={{ aspectRatio: '16/9', boxShadow: '0px 24px 48px -12px rgba(74,13,38,0.15)' }}
        >
          {college.campusVideoSrc ? (
            <video
              src={college.campusVideoSrc}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src={college.campusIntroImage}
              alt={college.campusIntroHeading}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  )
}
