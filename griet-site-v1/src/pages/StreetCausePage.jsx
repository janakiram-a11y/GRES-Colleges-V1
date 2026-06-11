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

const initiatives = [
  { title: 'Road Safety Awareness', desc: 'Campus and community drives to promote safe road practices and reduce accidents.' },
  { title: 'Literacy Drives', desc: 'Volunteers teach basic reading and writing skills to underprivileged children and adults.' },
  { title: 'Blood Donation Camps', desc: 'Regular blood donation events organised in partnership with local hospitals.' },
  { title: 'Clean India / Swachh Bharat', desc: 'Cleanliness campaigns in villages, public spaces, and around the campus.' },
  { title: 'Project Aamani (Menstrual Hygiene)', desc: 'Awareness and distribution drives promoting menstrual hygiene among rural women and girls.' },
  { title: 'Meri Matti Mera Desh', desc: 'Patriotic soil-collection initiative honouring fallen soldiers and celebrating national pride.' },
  { title: 'Eco-Friendly Ganesha', desc: 'Promoting clay and eco-friendly Ganesha idols to reduce water pollution during festivals.' },
  { title: 'Health Check-up Camps', desc: 'Free medical check-ups, dental, and eye care camps organised in villages and slum areas.' },
];

const stats = [
  { value: '2000+', label: 'Volunteers' },
  { value: '50+', label: 'Camps' },
  { value: '20+', label: 'Villages' },
  { value: '10+', label: 'Years' },
];

export default function StreetCausePage() {
  return (
    <AcademicsLayout title="Street Cause — Social Service Initiative">
      {/* About */}
      <section className="mb-10">
        <SectionLabel>About Street Cause</SectionLabel>
        <p className="font-hind text-gray-700 text-[15px] leading-relaxed">
          Street Cause is GRIET's community service wing operating under the National Service Scheme (NSS).
          It was founded on the belief that engineers carry a responsibility beyond the classroom — to serve
          the society that nurtures them. Through sustained grassroots outreach, Street Cause mobilises
          students to address real-world challenges across health, literacy, sanitation, and the environment,
          bridging the gap between campus and community.
        </p>
      </section>

      {/* Initiatives */}
      <section className="mb-10">
        <SectionLabel>Our Initiatives</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {initiatives.map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3
                className="font-hind font-semibold text-[15px] mb-1"
                style={{ color: college.primaryColor }}
              >
                {item.title}
              </h3>
              <p className="font-hind text-gray-600 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mb-10">
        <SectionLabel>Impact at a Glance</SectionLabel>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg p-5 text-center"
              style={{ backgroundColor: college.primaryColor + '10' }}
            >
              <p
                className="font-hind font-bold text-2xl"
                style={{ color: college.primaryColor }}
              >
                {s.value}
              </p>
              <p className="font-hind text-gray-600 text-base mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="mb-10">
        <SectionLabel>Street Cause Awards 2020</SectionLabel>
        <p className="font-hind text-gray-700 text-[15px] leading-relaxed mb-3">
          Street Cause was recognised for its outstanding social contributions at the Street Cause Awards 2020,
          honouring teams and individuals who made a measurable difference to communities across the region.
        </p>
        <a
          href="https://www.griet.ac.in/scawards.php"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-hind font-semibold text-base px-4 py-2 rounded border transition-colors"
          style={{ color: college.primaryColor, borderColor: college.primaryColor }}
        >
          View Awards Page &rarr;
        </a>
      </section>

      {/* NSS Activity Book */}
      <section className="mb-10">
        <SectionLabel>NSS Full Activity Book</SectionLabel>
        <p className="font-hind text-gray-700 text-[15px] leading-relaxed mb-3">
          Download the complete NSS activity documentation covering all initiatives, camps, and outreach
          programmes conducted under the Street Cause banner.
        </p>
        <a
          href="https://www.griet.ac.in/images2/NSS%20Full%20book%20on%2011%20Nov%202020.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-hind font-semibold text-base px-4 py-2 rounded transition-colors text-white"
          style={{ backgroundColor: college.primaryColor }}
        >
          Download Activity Book (PDF)
        </a>
      </section>

      {/* Internal NSS Link */}
      <section className="mb-4">
        <SectionLabel>More on NSS</SectionLabel>
        <p className="font-hind text-gray-700 text-[15px] leading-relaxed mb-3">
          Street Cause operates as part of GRIET's broader NSS chapter. Learn more about our NSS activities,
          special camps, and volunteer opportunities.
        </p>
        <a
          href="/nss"
          className="inline-block font-hind font-semibold text-base px-4 py-2 rounded border transition-colors"
          style={{ color: college.primaryColor, borderColor: college.primaryColor }}
        >
          Visit NSS Page &rarr;
        </a>
      </section>
    </AcademicsLayout>
  );
}
