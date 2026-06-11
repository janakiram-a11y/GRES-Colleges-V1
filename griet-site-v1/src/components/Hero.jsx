import { Link } from 'react-router-dom';
import CTAButton from './CTAButton';

export default function Hero({ college }) {
  return (
    <section className="relative w-full min-h-[320px] sm:min-h-[420px] md:min-h-[480px] md:h-[600px] flex items-center overflow-hidden">
      {college.heroBgImage && (
        <img
          src={college.heroBgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5B1027] via-[#5B1027]/70 to-transparent" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-16 lg:px-[120px] flex flex-col md:flex-row justify-between items-center py-10 md:py-0 gap-8 md:gap-0">
        <div className="flex flex-col gap-[18px] w-full lg:max-w-[686px]">
          <h1
            className="font-hind font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white"
            style={{ textShadow: '0px 3px 3px rgba(0,0,0,0.12)' }}
          >
            {college.heroHeading}
          </h1>
          <p
            className="font-dm-sans font-normal text-sm sm:text-base md:text-lg leading-relaxed text-white/90"
            style={{ textShadow: '0px 1px 2px rgba(0,0,0,0.15)' }}
          >
            {college.heroSubtext}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
            <CTAButton href={college.heroCTAHref} className="w-full sm:w-auto min-h-[44px]">{college.heroCTALabel}</CTAButton>
            <Link
              to={college.heroExploreProgramsHref || '/admissions/programmes'}
              className="w-full sm:w-auto min-h-[44px] flex items-center justify-center bg-white text-[#5B1027] font-dm-sans font-semibold text-[16px] leading-6 px-8 py-[14px] rounded hover:bg-gray-50 transition-colors"
              style={{ boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)' }}
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
