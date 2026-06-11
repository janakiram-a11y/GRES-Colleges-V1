import college from '../theme';
import CollegeLayout from '../CollegeLayout';
import SectionHeading from '../components/SectionHeading';

function PageBanner({ image, title }) {
  return (
    <div
      className="relative w-full h-52 md:h-72 flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.52)' }} />
      <h1 className="relative z-10 text-white font-hind font-bold text-2xl md:text-3xl tracking-widest uppercase text-center px-4 drop-shadow-lg">
        {title}
      </h1>
    </div>
  );
}


const vmLabelMap = {
  Vision: 'Our Vision',
  Mission: 'Our Mission',
  'Quality Policy': 'Our Standard',
  Strategies: 'Our Approach',
};

function VisionCard({ item }) {
  const isStrategies = item.title === 'Strategies';
  const lines = item.text.split('\n');
  const intro = isStrategies ? lines[0] : null;
  const bullets = isStrategies
    ? lines.slice(1).filter(Boolean).map((l) => l.replace(/^•\s*/, ''))
    : [];

  return (
    <div
      className="rounded-xl p-7 bg-white"
      style={{
        border: '1.5px solid rgba(91,16,39,0.16)',
        boxShadow: '0 1px 3px rgba(91,16,39,0.05), 0 6px 20px -4px rgba(91,16,39,0.08)',
      }}
    >
      <span
        className="font-dm-sans font-semibold text-[11px] uppercase tracking-[2px] mb-2 block"
        style={{ color: college.accentColor }}
      >
        {vmLabelMap[item.title] || item.title}
      </span>
      <h3
        className="font-hind font-medium text-[20px] mb-3"
        style={{ color: college.primaryColor }}
      >
        {item.title}
      </h3>
      <div
        className="w-8 h-[3px] mb-4 rounded-full"
        style={{ backgroundColor: college.accentColor }}
      />
      {isStrategies ? (
        <>
          {intro && (
            <p className="font-hind font-normal text-[14px] leading-[22px] text-[#474747] mb-3">{intro}</p>
          )}
          <ul className="space-y-2">
            {bullets.map((line, i) => (
              <li key={i} className="flex items-start gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[9px]"
                  style={{ backgroundColor: college.accentColor }}
                />
                <span className="font-hind font-normal text-[14px] leading-[22px] text-[#474747]">{line}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="font-hind font-normal text-[14px] leading-[22px] text-[#474747]">{item.text}</p>
      )}
    </div>
  );
}

function CoreValuesBlock({ item }) {
  const values = item.text
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const colonIdx = line.indexOf(': ');
      return colonIdx !== -1
        ? { name: line.slice(0, colonIdx), desc: line.slice(colonIdx + 2) }
        : { name: line, desc: '' };
    });

  return (
    <div className="rounded-xl p-8" style={{ backgroundColor: '#F6F1F2' }}>
      <div className="mb-7 text-center">
        <span
          className="font-dm-sans font-semibold text-[11px] uppercase tracking-[2px] mb-2 block"
          style={{ color: college.accentColor }}
        >
          Our Foundation
        </span>
        <h3 className="font-hind font-medium text-[22px]" style={{ color: college.primaryColor }}>Core Values</h3>
        <div
          className="w-10 h-[3px] rounded-full mx-auto mt-3"
          style={{ backgroundColor: college.accentColor }}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {values.map((value) => (
          <div
            key={value.name}
            className="bg-white rounded-xl p-5"
            style={{
              border: '1.5px solid rgba(91,16,39,0.13)',
              borderLeftWidth: '4px',
              borderLeftColor: college.primaryColor,
              boxShadow: '0 1px 4px rgba(91,16,39,0.05)',
            }}
          >
            <h4 className="font-hind font-medium text-[15px] mb-1.5" style={{ color: college.primaryColor }}>{value.name}</h4>
            {value.desc && (
              <p className="font-hind font-normal text-[13px] leading-[22px] text-[#474747]">{value.desc}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { aboutInspirer, sponsoringSociety, aboutGriet, aboutVisionMission, aboutPageBannerImage } = college;

  return (
    <CollegeLayout college={college}>
      <PageBanner image={aboutPageBannerImage} title="About GRIET" />

      <div className="page-pad space-y-14">

        {/* About Inspirer and Promoters */}
        <section>
          <SectionHeading>{aboutInspirer.heading}</SectionHeading>
          <div className="mt-4 space-y-6 font-hind font-normal text-[15px] leading-relaxed text-gray-800">
            <div>
              <span className="font-semibold" style={{ color: college.primaryColor }}>
                {aboutInspirer.inspirer.label}
              </span>{' '}
              {aboutInspirer.inspirer.text}
            </div>

            <div>
              <p className="font-semibold mb-2" style={{ color: college.primaryColor }}>
                The Promoters:
              </p>
              {aboutInspirer.promoters.map((p) => (
                <p key={p.name} className="mb-2">
                  <span className="font-semibold">{p.name}</span> {p.desc}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsoring Society */}
        <section>
          <SectionHeading>{sponsoringSociety.heading}</SectionHeading>
          <p
            className="mt-4 font-hind font-normal text-[15px] leading-relaxed text-gray-800"
            dangerouslySetInnerHTML={{
              __html: sponsoringSociety.text.replace(
                /Gokaraju Rangaraju Educational Society \(GRES\)/,
                '<strong>Gokaraju Rangaraju Educational Society (GRES)</strong>'
              ),
            }}
          />
        </section>

        {/* About GRIET */}
        <section>
          <SectionHeading>{aboutGriet.heading}</SectionHeading>
          <div className="mt-4 space-y-4 font-hind font-normal text-[15px] leading-relaxed text-gray-800">
            {aboutGriet.paragraphs.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{
                __html: para
                  .replace(/(NAAC\s+with\s+)(A\+\+\s+grade(?:\s+\(CGPA:[^)]+\))?)/g, '$1<strong style="font-size:1.05em">$2</strong>')
                  .replace(/(accredited by[^(]*)(\(NAAC\))(.*?)(A\+\+\s+grade(?:\s+\(CGPA:[^)]+\))?)/g, '$1$2$3<strong style="font-size:1.05em">$4</strong>')
              }} />
            ))}
          </div>
        </section>


      </div>
    </CollegeLayout>
  );
}
