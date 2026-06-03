import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const categories = [
  {
    title: 'Technical Clubs',
    clubs: [
      {
        name: 'IEEE Student Branch',
        description: "India's largest student professional society chapter at GRIET. National competitions, workshops, and talks.",
        link: 'http://ieeegrietsb.com',
        external: true,
      },
      {
        name: 'Robotics Club',
        description: 'Design, build and program robots. National-level competition wins.',
        link: '/clubs/robotics',
        external: false,
      },
      {
        name: 'Free Software Wing (FSF)',
        description: 'Promoting open-source software and FOSS philosophy. IIT Bombay Spoken Tutorial partner.',
        link: '/clubs/fsf',
        external: false,
      },
      {
        name: 'X-Kernel',
        description: 'Systems programming, OS internals, and low-level computing.',
        link: 'https://xkernal-kappa.vercel.app/',
        external: true,
      },
      {
        name: 'Scientific Forestep',
        description: 'Science exploration, experiments, and cultivating scientific temperament.',
        link: '/clubs/scientific-forestep',
        external: false,
      },
    ],
  },
  {
    title: 'Creative & Cultural',
    clubs: [
      {
        name: 'GEM Magazine',
        description: 'Bi-monthly student magazine with 19 issues and counting.',
        link: '/clubs/gem-magazine',
        external: false,
      },
      {
        name: 'Flavours (AICTE SPICES)',
        description: 'Culinary arts and food innovation club under AICTE SPICES initiative.',
        link: '/clubs/flavours',
        external: false,
      },
      {
        name: 'Quizzicals',
        description: 'Quiz and trivia competitions club fostering general knowledge.',
        link: '/clubs/quizzicals',
        external: false,
      },
      {
        name: 'Retrieve',
        description: 'Technical event and treasure hunt organizer on campus.',
        link: '/clubs/retrieve',
        external: false,
      },
    ],
  },
  {
    title: 'Professional Societies',
    clubs: [
      {
        name: 'CSI Chapter',
        description: 'Computer Society of India student chapter promoting computing education.',
        link: 'http://csi.griet.ac.in/',
        external: true,
      },
      {
        name: 'ISTE Chapter',
        description: 'Indian Society for Technical Education chapter at GRIET.',
        link: 'http://iste.griet.ac.in/',
        external: true,
      },
      {
        name: 'SAE Chapter',
        description: 'Society of Automotive Engineers student chapter for mobility enthusiasts.',
        link: null,
        external: false,
      },
    ],
  },
  {
    title: 'Media & Communication',
    clubs: [
      {
        name: 'Pragnya 90.4 FM',
        description: 'Campus internet radio station broadcasting student voices and campus news.',
        link: 'http://www.pragnyafm.griet.ac.in/',
        external: true,
      },
      {
        name: 'RUEDO',
        description: 'Student-run digital platform for campus content and communication.',
        link: 'http://www.ruedo.griet.ac.in/',
        external: true,
      },
      {
        name: 'TEDx GRIET',
        description: 'Annual TEDx conference bringing inspiring ideas and speakers to campus.',
        link: null,
        external: false,
      },
    ],
  },
  {
    title: 'Social Service',
    clubs: [
      {
        name: 'NSS',
        description: 'National Service Scheme — two active units engaging students in community service.',
        link: '/nss',
        external: false,
      },
      {
        name: "Women's Development Cell",
        description: 'Empowering women students through programs, awareness, and support initiatives.',
        link: '/administration/womens-development-cell',
        external: false,
      },
    ],
  },
  {
    title: 'Entrepreneurship',
    clubs: [
      {
        name: 'EDC',
        description: 'Entrepreneurship Development Cell nurturing student startups and innovation.',
        link: '/edc',
        external: false,
      },
      {
        name: 'IIC',
        description: "Institution's Innovation Council fostering a culture of innovation and IPR.",
        link: '/administration/iic',
        external: false,
      },
    ],
  },
];

const stats = [
  { label: 'Active Clubs', value: '20+' },
  { label: 'Student Members', value: '5000+' },
  { label: 'Events/Year', value: '100+' },
  { label: 'National Awards', value: '15+' },
];

function ClubCard({ club }) {
  const cardContent = (
    <div
      className="h-full flex flex-col rounded-xl border p-5 transition-shadow duration-200 hover:shadow-md"
      style={{
        borderColor: 'rgba(91,16,39,0.12)',
        backgroundColor: '#FDFAF7',
      }}
    >
      <h4
        className="font-hind font-bold text-base mb-2"
        style={{ color: college.primaryColor }}
      >
        {club.name}
      </h4>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">{club.description}</p>
      {club.link && (
        <span
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide"
          style={{ color: college.accentColor }}
        >
          Visit &rarr;
        </span>
      )}
    </div>
  );

  if (!club.link) return <div>{cardContent}</div>;

  if (club.external) {
    return (
      <a href={club.link} target="_blank" rel="noopener noreferrer" className="block no-underline">
        {cardContent}
      </a>
    );
  }

  return (
    <a href={club.link} className="block no-underline">
      {cardContent}
    </a>
  );
}

export default function StudentClubsPage() {
  return (
    <AcademicsLayout title="Student Clubs & Activities">
      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center py-10">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          GRIET is home to <strong>20+ active student clubs</strong> spanning technology, culture,
          sports, social service, and entrepreneurship. These clubs offer students a platform to
          explore interests, build skills, compete nationally, and make a lasting impact on campus
          and beyond.
        </p>
      </div>

      {/* Stats bar */}
      <div
        className="rounded-2xl mb-12 py-6 px-4"
        style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #8B1A3A 100%)` }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold font-hind">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest mt-1 opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Club categories */}
      <div className="space-y-12 mb-16">
        {categories.map((cat) => (
          <section key={cat.title}>
            <h2
              className="font-hind font-bold text-xl md:text-2xl mb-5 pb-2 border-b"
              style={{ color: college.primaryColor, borderColor: 'rgba(91,16,39,0.15)' }}
            >
              {cat.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.clubs.map((club) => (
                <ClubCard key={club.name} club={club} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* How to Join */}
      <div
        className="rounded-2xl p-8 mb-10"
        style={{ backgroundColor: '#FAF4EE', border: '1px solid rgba(91,16,39,0.10)' }}
      >
        <h2
          className="font-hind font-bold text-xl md:text-2xl mb-4"
          style={{ color: college.primaryColor }}
        >
          How to Join
        </h2>
        <ul className="text-gray-700 text-sm md:text-base space-y-2 list-disc list-inside leading-relaxed">
          <li>Most clubs hold open recruitment drives at the start of each academic semester.</li>
          <li>Look out for recruitment notices on the college notice boards and official social media pages.</li>
          <li>Approach the club coordinator or faculty advisor directly to express your interest.</li>
          <li>Some technical clubs may hold a brief selection process or orientation session.</li>
          <li>There are no fees for joining most clubs — participation and enthusiasm are all you need.</li>
        </ul>

        <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(91,16,39,0.12)' }}>
          <h3
            className="font-hind font-semibold text-base mb-3"
            style={{ color: college.primaryColor }}
          >
            Contact
          </h3>
          <p className="text-sm text-gray-700">
            For general inquiries about student clubs and extracurricular activities, reach out to:
          </p>
          <ul className="mt-2 text-sm text-gray-700 space-y-1">
            <li>
              <span className="font-semibold">Email: </span>
              <a
                href="mailto:extracurricular@griet.ac.in"
                style={{ color: college.accentColor }}
                className="hover:underline"
              >
                extracurricular@griet.ac.in
              </a>
            </li>
            <li>
              <span className="font-semibold">Office: </span>Dean of Student Affairs, GRIET
            </li>
          </ul>
        </div>
      </div>
    </AcademicsLayout>
  );
}
