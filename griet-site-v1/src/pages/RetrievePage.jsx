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

export default function RetrievePage() {
  const events = [
    {
      name: 'Annual Techno Hunt',
      description: 'Campus-wide multi-stage technical treasure hunt.',
    },
    {
      name: 'Code Breaker Challenge',
      description: 'Timed competitive coding.',
    },
    {
      name: 'Logic Lock',
      description: 'Lateral thinking puzzles.',
    },
    {
      name: 'Tech Trivia Sprint',
      description: 'Fast-paced CS/electronics trivia.',
    },
    {
      name: 'Capture the Flag',
      description: 'Cybersecurity challenges.',
    },
  ];

  return (
    <AcademicsLayout title="Retrieve — Technical Events Club">
      <section className="mb-10">
        <SectionLabel>About</SectionLabel>
        <p className="font-hind text-gray-700 text-[15px] leading-relaxed">
          Retrieve organizes multi-stage technical hunts, coding challenges, and problem-solving events testing knowledge, teamwork, and analytical thinking.
        </p>
      </section>

      <section className="mb-10">
        <SectionLabel>Events</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {events.map((event) => (
            <div
              key={event.name}
              className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm"
            >
              <h3 className="font-hind font-bold text-[15px] mb-1" style={{ color: college.primaryColor }}>
                {event.name}
              </h3>
              <p className="font-hind text-gray-600 text-base">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Achievements</SectionLabel>
        <ul className="list-disc list-inside font-hind text-gray-700 text-[15px] space-y-2">
          <li>500+ annual participants</li>
          <li>15+ college teams</li>
          <li>National exposure for top performers</li>
        </ul>
      </section>

      <section className="mb-10">
        <SectionLabel>Join</SectionLabel>
        <p className="font-hind text-gray-700 text-[15px] leading-relaxed">
          Teams of 2–4, open to all GRIET students. Contact us at{' '}
          <a
            href="mailto:retrieve@griet.ac.in"
            className="underline"
            style={{ color: college.primaryColor }}
          >
            retrieve@griet.ac.in
          </a>
        </p>
      </section>
    </AcademicsLayout>
  );
}
