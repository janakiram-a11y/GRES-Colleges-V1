import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>
        {children}
      </h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

const events = [
  {
    title: 'Annual Quiz Championship',
    desc: 'The flagship inter-department quiz competition held every academic year, covering a wide range of subjects.',
  },
  {
    title: 'Tech Quiz',
    desc: 'A specialized quiz focused on technology, engineering, and science, designed to test technical aptitude.',
  },
  {
    title: 'Freshers Quiz',
    desc: "A welcoming competition organized exclusively for first-year students to ease them into the quiz culture.",
  },
  {
    title: 'Online Quiz Leagues',
    desc: 'Regular online quiz rounds conducted through the semester to keep members engaged and sharp.',
  },
];

const quizTypes = [
  { label: 'Technical', desc: 'Engineering, science, and technology topics.' },
  { label: 'Business', desc: 'Corporate world, economics, and entrepreneurship.' },
  { label: 'Sports', desc: 'National and international sports trivia.' },
  { label: 'Entertainment', desc: 'Films, music, pop culture, and the arts.' },
  { label: 'Current Affairs', desc: 'National and global news and events.' },
];

export default function QuizzicalsPage() {
  return (
    <AcademicsLayout title="Quizzicals — Quiz Club">
      <div className="max-w-5xl mx-auto py-10 space-y-12">

        {/* About */}
        <section>
          <SectionLabel>About Quizzicals</SectionLabel>
          <p className="text-gray-700 leading-relaxed">
            Quizzicals is GRIET's official quiz club, dedicated to promoting a culture of curiosity,
            general awareness, and intellectual debate among students. The club brings together quiz
            enthusiasts from all departments and provides a structured platform for competitive
            quizzing across a diverse range of subjects — from technology and science to sports,
            entertainment, and current affairs.
          </p>
        </section>

        {/* Events */}
        <section>
          <SectionLabel>Events</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-xl border p-5 flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: 'rgba(91,16,39,0.15)', backgroundColor: '#fff' }}
              >
                <h3 className="font-hind font-semibold text-base" style={{ color: college.primaryColor }}>
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Types of Quizzes */}
        <section
          className="rounded-xl p-6 border"
          style={{ backgroundColor: '#FAF4EE', borderColor: 'rgba(91,16,39,0.15)' }}
        >
          <SectionLabel>Types of Quizzes</SectionLabel>
          <ul className="space-y-3">
            {quizTypes.map((q) => (
              <li key={q.label} className="flex items-start gap-3 text-gray-700">
                <span
                  className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: college.accentColor }}
                />
                <span>
                  <strong>{q.label}:</strong> {q.desc}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Participation */}
        <section>
          <SectionLabel>Participation</SectionLabel>
          <p className="text-gray-700 leading-relaxed">
            Quiz events are open to all GRIET students. Teams typically consist of{' '}
            <strong>2 to 4 members</strong>. Individual participation is also welcome in select
            rounds. Registrations are announced on campus notice boards and through official GRIET
            communication channels at the start of each event.
          </p>
        </section>

        {/* Contact */}
        <section
          className="rounded-xl p-6 border"
          style={{ borderColor: 'rgba(91,16,39,0.15)', backgroundColor: '#fff' }}
        >
          <SectionLabel>Contact</SectionLabel>
          <p className="text-gray-700">
            For queries or to join the club, write to us at{' '}
            <a
              href="mailto:quizzicals@griet.ac.in"
              className="font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
              style={{ color: college.accentColor }}
            >
              quizzicals@griet.ac.in
            </a>
          </p>
        </section>

      </div>
    </AcademicsLayout>
  );
}
