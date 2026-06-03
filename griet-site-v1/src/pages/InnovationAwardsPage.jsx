import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

const majorAwards = [
  {
    title: 'Chhatra Vishwakarma Award 2019',
    prize: 'First Prize — Education Sector III',
    body: 'Awarded by the Hon. Vice President of India, this national-level AICTE recognition was conferred on Mechanical Engineering students of GRIET for outstanding innovation. It is one of the most prestigious student innovation awards in the country.',
  },
  {
    title: 'JNTUH Hackathon 2018',
    prize: 'All Three Trophies — First, Second & Third',
    body: 'At the JNTUH Hackathon held on February 23–24, 2018, GRIET students swept the entire podium, winning the First, Second, and Third prizes — a remarkable clean sweep that demonstrated the depth of technical talent at the institution.',
  },
  {
    title: 'International Blockchain Congress 2018',
    prize: 'First Prize — Rs. 50,000',
    body: 'GRIET students developed an innovative blockchain solution for a real-world application and won the First Prize of Rs. 50,000 at the International Blockchain Congress 2018.',
  },
  {
    title: 'BAJA Design ATV Competition 2018',
    prize: 'Second Place — Rs. 1,00,000',
    body: 'GRIET secured Second Place at the BAJA Design All-Terrain Vehicle (ATV) competition, taking home a prize of Rs. 1,00,000. This prestigious engineering competition challenges student teams to design, build, and race an off-road vehicle.',
  },
  {
    title: 'Smart India Hackathon (SIH)',
    prize: 'Consistent National-Level Participation',
    body: 'GRIET has participated in the Smart India Hackathon every year since 2017. Multiple teams have reached the national finals, and GRIET has produced winners in both the software and hardware editions of SIH.',
  },
];

const annualAwardCategories = [
  {
    title: 'Best Innovation',
    description: 'For the most impactful student innovation or project of the year.',
  },
  {
    title: 'Best Patent',
    description: 'For the most commercially viable patent filed by a faculty member or student.',
  },
  {
    title: 'Best Research Paper',
    description: 'For the highest-impact research publication, typically in Scopus Q1/Q2 journals.',
  },
  {
    title: 'Best Startup',
    description: 'For the best student startup or venture incubated at GRIET-TBI.',
  },
  {
    title: 'Best Social Innovation',
    description: 'For an innovation that addresses a meaningful social or community challenge.',
  },
  {
    title: 'Faculty Excellence in Research',
    description: 'Recognizing the faculty member with the highest research output during the year.',
  },
];

export default function InnovationAwardsPage() {
  return (
    <AcademicsLayout title="Innovation Awards & Recognition">
      <div className="max-w-5xl mx-auto py-10 space-y-14">

        {/* About */}
        <section>
          <SectionLabel>Innovation Culture at GRIET</SectionLabel>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            GRIET fosters a vibrant culture of innovation, encouraging students and faculty to translate ideas
            into real-world solutions. The institution is an AICTE-recognized <strong>Institution's Innovation Council
            (IIC)</strong> certified institution under the MoE Innovation Cell, reflecting its commitment to building
            an innovation ecosystem.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            GRIET students and faculty have won prestigious awards at national and international competitions,
            and the institution celebrates these achievements through Annual Innovation Awards presented at the
            Graduation Day / Annual Day ceremony.
          </p>
        </section>

        {/* IIC Badge */}
        <section>
          <div
            className="rounded-xl border-l-4 pl-5 pr-5 py-4 shadow-sm"
            style={{ borderLeftColor: college.accentColor, backgroundColor: '#FDF6F7' }}
          >
            <h3 className="font-hind font-bold text-base mb-1" style={{ color: college.primaryColor }}>
              IIC — Institution's Innovation Council
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              GRIET is certified by AICTE's MoE Innovation Cell as an Institution's Innovation Council (IIC)
              institution. This recognition acknowledges GRIET's structured approach to promoting innovation,
              entrepreneurship, and start-up culture among students and faculty.
            </p>
          </div>
        </section>

        {/* Major Awards */}
        <section>
          <SectionLabel>Major Awards & Achievements</SectionLabel>
          <div className="space-y-5">
            {majorAwards.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border p-5 shadow-sm"
                style={{ borderColor: 'rgba(91,16,39,0.18)', backgroundColor: '#FDFAF8' }}
              >
                <h3 className="font-hind font-bold text-base mb-0.5" style={{ color: college.primaryColor }}>
                  {item.title}
                </h3>
                <p className="text-xs font-semibold mb-2" style={{ color: college.accentColor }}>
                  {item.prize}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Annual Innovation Awards */}
        <section>
          <SectionLabel>Annual Innovation Awards (Internal)</SectionLabel>
          <p className="text-gray-600 text-sm mb-5 leading-relaxed">
            GRIET presents the following annual awards to recognize the best contributions in innovation,
            research, and entrepreneurship across the institution:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {annualAwardCategories.map((award) => (
              <div
                key={award.title}
                className="rounded-xl border p-5 flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: 'rgba(91,16,39,0.15)', backgroundColor: '#FDFAF8' }}
              >
                <h3 className="font-hind font-bold text-base" style={{ color: college.primaryColor }}>
                  {award.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <SectionLabel>Contact</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div
              className="rounded-xl border p-5 shadow-sm"
              style={{ borderColor: 'rgba(91,16,39,0.15)', backgroundColor: '#FDFAF8' }}
            >
              <p className="font-hind font-semibold text-sm mb-1" style={{ color: college.primaryColor }}>
                Innovation Cell
              </p>
              <a
                href="mailto:innovation@griet.ac.in"
                className="text-sm font-mono hover:underline"
                style={{ color: college.accentColor }}
              >
                innovation@griet.ac.in
              </a>
            </div>
            <div
              className="rounded-xl border p-5 shadow-sm"
              style={{ borderColor: 'rgba(91,16,39,0.15)', backgroundColor: '#FDFAF8' }}
            >
              <p className="font-hind font-semibold text-sm mb-1" style={{ color: college.primaryColor }}>
                Research Cell
              </p>
              <a
                href="mailto:research@griet.ac.in"
                className="text-sm font-mono hover:underline"
                style={{ color: college.accentColor }}
              >
                research@griet.ac.in
              </a>
            </div>
          </div>
        </section>

      </div>
    </AcademicsLayout>
  );
}
