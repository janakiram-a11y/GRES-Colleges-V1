import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const EVENTS = [
  { name: "Legacy'23 Annual Sports Meet", date: 'December 29–30, 2023', desc: 'Organized by GRIET Sports Club, featuring competitions across multiple sporting disciplines.' },
  { name: 'State Open Chess Tournament', date: '2023', desc: 'Collaboration with Pragathi Chess Foundation, held at GRIET campus with competitive chess matches.' },
  { name: 'Khelostav 2K23', date: 'April 26–27, 2023', desc: 'Multi-sport athletic competition with participants from various departments.' },
];

const ACHIEVEMENTS = [
  'South Zone Inter-University Championship — Kabaddi, Table Tennis, and Basketball',
  'All India Inter-University Championship — Chess and other events',
  'Power Lifting Competition — Guru Kashi University tournament (Talwandi Sabo, Punjab)',
];

const FACILITIES = [
  'Cricket Ground', 'Basketball Courts', 'Volleyball Courts', 'Badminton Courts',
  'Table Tennis', 'Chess Room', 'Gym / Fitness Centre', 'Athletics Track',
  'Kabaddi Court', 'Football Ground',
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function SportsPage() {
  return (
    <AcademicsLayout title="Sports Activities">

      <section className="mb-10">
        <SectionLabel>Sports Facilities</SectionLabel>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {FACILITIES.map((f) => (
            <div key={f} className="p-3 rounded-xl border border-gray-200 bg-gray-50 text-center">
              <p className="font-dm-sans font-semibold text-[0.875rem] text-gray-700">{f}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Events & Tournaments</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {EVENTS.map(({ name, date, desc }) => (
            <div key={name} className="p-5 rounded-xl border border-gray-200 bg-white">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <p className="font-hind font-bold text-base" style={{ color: college.primaryColor }}>{name}</p>
                <span className="font-dm-sans text-[11px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: college.accentColor }}>{date}</span>
              </div>
              <p className="font-dm-sans text-[12.5px] text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <SectionLabel>Student Achievements</SectionLabel>
        <div className="flex flex-col gap-2.5 p-5 rounded-xl bg-gray-50 border border-gray-200">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="flex items-start gap-2 font-dm-sans text-[12.5px] text-gray-700">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
              {a}
            </div>
          ))}
        </div>
      </section>

    </AcademicsLayout>
  );
}
