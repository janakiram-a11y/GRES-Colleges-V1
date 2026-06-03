import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const ANNUAL_DAYS = [
  { year: '2024-25', edition: '27th Annual Day', date: 'March 2025', chiefGuest: 'Eminent Industry Leader', theme: 'Innovation & Excellence', highlights: ['Cultural performances by 500+ students', 'Best outgoing student awards', 'Department achievement recognition', 'Alumni interaction session'], reportLink: 'https://www.griet.ac.in/annualday20.php' },
  { year: '2023-24', edition: '26th Annual Day', date: 'March 2024', chiefGuest: 'Distinguished Guest of Honor', theme: 'Technology & Transformation', highlights: ['25+ cultural programs', 'Sports achievement awards', 'Best project awards', 'NSS volunteer recognition'], reportLink: 'https://www.griet.ac.in/annualday20.php' },
  { year: '2022-23', edition: '25th Annual Day', date: 'March 2023', chiefGuest: 'Academic & Industry Leader', theme: 'Silver Jubilee Celebrations', highlights: ['Silver Jubilee special edition', '600+ participants', 'Alumni of the year award', 'Cultural extravaganza'], reportLink: 'https://www.griet.ac.in/annualday20.php' },
  { year: '2021-22', edition: '24th Annual Day', date: 'March 2022', chiefGuest: 'Principal, GRIET & Guests', theme: 'New Beginnings', highlights: ['First post-pandemic in-person event', 'Hybrid format', 'Student achievement showcase', 'Faculty recognition'], reportLink: 'https://www.griet.ac.in/annualday20.php' },
  { year: '2020-21', edition: '23rd Annual Day', date: 'March 2021', chiefGuest: 'Virtual Ceremony', theme: 'Resilience', highlights: ['Virtual format due to COVID-19', 'Online cultural performances', 'Digital awards ceremony', '1000+ live stream views'], reportLink: 'https://www.griet.ac.in/annualday20.php' },
  { year: '2019-20', edition: '22nd Annual Day', date: 'March 2020', chiefGuest: 'Industry Dignitary', theme: 'GRIET@20', highlights: ['20th year celebration special', 'Largest gathering in history', 'Special alumni felicitation', 'Inaugural of new facilities'], reportLink: 'https://www.griet.ac.in/annualday20.php' },
];

const ABOUT_ITEMS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: 'Cultural Fest',
    description: 'A grand showcase of student talent spanning classical dance, music, drama, and contemporary art forms performed by hundreds of participants.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0121 13c0 2.21-4.03 4-9 4s-9-1.79-9-4a12.083 12.083 0 012.84-2.422L12 14z" />
      </svg>
    ),
    title: 'Academic Recognition',
    description: 'Outstanding students, toppers, and departmental achievers are honoured with awards recognising their academic and extracurricular excellence.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Sports Awards',
    description: 'Athletes and sports teams who have brought laurels to GRIET at inter-collegiate, state, and national levels are felicitated during the ceremony.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Alumni Meet',
    description: 'Annual Day brings together generations of GRIET alumni, fostering a strong network and creating opportunities for mentorship, collaboration, and reconnection.',
  },
];

export default function AnnualDayPage() {
  return (
    <AcademicsLayout title="Annual Day">
      {/* Intro */}
      <section className="mb-10">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: college.colors.primary }}
        >
          A Tradition of Celebration Since 1998
        </h2>
        <p className="text-gray-700 leading-relaxed text-base mb-3">
          GRIET's Annual Day is the flagship event on the institution's cultural calendar, celebrated every year since the college's inception in 1998. It is a day that unites students, faculty, staff, alumni, and dignitaries in a vibrant celebration of academic achievement, artistic talent, and institutional pride.
        </p>
        <p className="text-gray-700 leading-relaxed text-base">
          Each edition carries a distinct theme that reflects the spirit of the times — from resilience during the pandemic years to milestone jubilee celebrations. The event serves as a platform to recognise excellence across academics, sports, and extracurricular pursuits while reinforcing GRIET's commitment to holistic education.
        </p>
      </section>

      {/* Annual Day Cards */}
      <section className="mb-12">
        <h2
          className="text-2xl font-bold mb-6"
          style={{ color: college.colors.primary }}
        >
          Annual Day Events (2019 – 2025)
        </h2>
        <div className="flex flex-col gap-6">
          {ANNUAL_DAYS.map((event) => (
            <div
              key={event.year}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
            >
              {/* Card header */}
              <div
                className="flex flex-wrap items-center justify-between gap-3 px-6 py-4"
                style={{ backgroundColor: college.colors.primary }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{ backgroundColor: college.colors.accent, color: college.colors.primary }}
                  >
                    {event.edition}
                  </span>
                  <span className="text-white font-semibold text-sm">{event.year}</span>
                </div>
                <span className="text-white/80 text-sm font-medium">{event.date}</span>
              </div>

              {/* Card body */}
              <div className="px-6 py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Theme</span>
                    <p
                      className="font-semibold text-base mt-0.5"
                      style={{ color: college.colors.primary }}
                    >
                      {event.theme}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Chief Guest</span>
                    <p className="font-medium text-gray-700 text-base mt-0.5">{event.chiefGuest}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Highlights</span>
                  <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {event.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span
                          className="mt-1 flex-shrink-0 w-2 h-2 rounded-full"
                          style={{ backgroundColor: college.colors.accent }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={event.reportLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
                  style={{ color: college.colors.primary }}
                >
                  View Report
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Annual Day */}
      <section>
        <h2
          className="text-2xl font-bold mb-6"
          style={{ color: college.colors.primary }}
        >
          About Annual Day
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {ABOUT_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-5"
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${college.colors.primary}15`, color: college.colors.primary }}
              >
                {item.icon}
              </div>
              <div>
                <h3
                  className="font-bold text-base mb-1"
                  style={{ color: college.colors.primary }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AcademicsLayout>
  );
}
