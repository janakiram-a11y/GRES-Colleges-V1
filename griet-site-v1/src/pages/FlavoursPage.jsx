import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const activities = [
  {
    title: 'Culinary Workshops',
    desc: 'Hands-on cooking workshops featuring cuisines from across India.',
  },
  {
    title: 'Food Innovation Lab',
    desc: 'Experiments with food science and molecular gastronomy basics.',
  },
  {
    title: 'Cultural Food Festival',
    desc: 'Annual inter-cultural food festival showcasing state cuisines.',
  },
  {
    title: 'Baking & Confectionery',
    desc: 'Special baking workshops and competitions.',
  },
  {
    title: 'Guest Chef Sessions',
    desc: 'Inviting professional chefs for live demonstrations.',
  },
  {
    title: 'Nutrition Awareness',
    desc: 'Sessions on healthy eating and nutrition science.',
  },
];

const achievements = [
  'Runner-up in AICTE SPICES National Competition',
  'Best Cultural Event at Annual Day',
  '200+ students participated in the food festival',
];

const spicesReports = [
  { label: 'SPICES Report 2024 (2K24)', href: 'https://www.griet.ac.in/flavours.php' },
  { label: 'SPICES Report 2023 (2K23)', href: 'https://www.griet.ac.in/flavours.php' },
];

export default function FlavoursPage() {
  return (
    <AcademicsLayout title="Flavours — AICTE SPICES Club">
      <div className="max-w-5xl mx-auto py-10 space-y-12">

        {/* About */}
        <section>
          <h2 className="font-hind font-bold text-xl md:text-2xl mb-3" style={{ color: college.primaryColor }}>
            About Flavours
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Flavours is GRIET's culinary arts and food innovation club. It is part of AICTE's{' '}
            <strong>SPICES</strong> (Students Practice Innovation and Creativity in Engineering
            through Social activities) program. SPICES promotes non-technical skills and creativity
            alongside engineering education, helping students develop a well-rounded personality
            beyond their technical curriculum.
          </p>
        </section>

        {/* AICTE SPICES Program */}
        <section
          className="rounded-xl p-6 border"
          style={{
            backgroundColor: '#FAF4EE',
            borderColor: 'rgba(91,16,39,0.15)',
          }}
        >
          <h2 className="font-hind font-bold text-xl md:text-2xl mb-3" style={{ color: college.primaryColor }}>
            AICTE SPICES Program
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            SPICES is a national program by the All India Council for Technical Education (AICTE)
            that encourages engineering students to pursue arts, crafts, and culture alongside
            technology. The program recognizes that creativity and cultural awareness are essential
            complements to technical skills.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>GRIET is an authorized SPICES participant</strong>, allowing the Flavours club
            to organize and document activities under this prestigious national initiative.
          </p>
        </section>

        {/* Activities */}
        <section>
          <h2 className="font-hind font-bold text-xl md:text-2xl mb-5" style={{ color: college.primaryColor }}>
            Club Activities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="rounded-xl border p-5 flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: 'rgba(91,16,39,0.15)', backgroundColor: '#fff' }}
              >
                <h3 className="font-hind font-semibold text-base" style={{ color: college.primaryColor }}>
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{activity.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SPICES Reports */}
        <section>
          <h2 className="font-hind font-bold text-xl md:text-2xl mb-4" style={{ color: college.primaryColor }}>
            SPICES Reports
          </h2>
          <ul className="space-y-3">
            {spicesReports.map((report) => (
              <li key={report.label}>
                <a
                  href={report.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
                  style={{ color: college.accentColor }}
                >
                  <span>{report.label}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14M5 5H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-2" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        <section
          className="rounded-xl p-6 border"
          style={{
            backgroundColor: '#FAF4EE',
            borderColor: 'rgba(91,16,39,0.15)',
          }}
        >
          <h2 className="font-hind font-bold text-xl md:text-2xl mb-4" style={{ color: college.primaryColor }}>
            Achievements
          </h2>
          <ul className="space-y-2">
            {achievements.map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700">
                <span className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* How to Join */}
        <section>
          <h2 className="font-hind font-bold text-xl md:text-2xl mb-3" style={{ color: college.primaryColor }}>
            How to Join
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Flavours is open to <strong>all GRIET students</strong>. No prior cooking experience is
            required — just a passion for food and creativity. Registrations are accepted at the
            start of each semester. Look out for announcements on the campus notice boards and the
            official GRIET social media channels.
          </p>
        </section>

        {/* Contact */}
        <section
          className="rounded-xl p-6 border"
          style={{ borderColor: 'rgba(91,16,39,0.15)', backgroundColor: '#fff' }}
        >
          <h2 className="font-hind font-bold text-xl md:text-2xl mb-3" style={{ color: college.primaryColor }}>
            Contact
          </h2>
          <p className="text-gray-700">
            For queries, reach out to the Flavours club at{' '}
            <a
              href="mailto:flavours@griet.ac.in"
              className="font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
              style={{ color: college.accentColor }}
            >
              flavours@griet.ac.in
            </a>
          </p>
        </section>

      </div>
    </AcademicsLayout>
  );
}
