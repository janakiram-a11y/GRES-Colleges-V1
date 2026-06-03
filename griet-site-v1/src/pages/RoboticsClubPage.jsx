import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

/* ── Helpers ─────────────────────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <h2
        className="font-hind font-bold text-[16px] whitespace-nowrap"
        style={{ color: college.primaryColor }}
      >
        {children}
      </h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

/* ── Data ────────────────────────────────────────────────────────────── */
const ACTIVITIES = [
  {
    title: 'Robo Wars Competition',
    desc: 'Annual inter-college robot battle competition hosted at GRIET, attracting teams from across the region.',
  },
  {
    title: 'Line Follower Workshops',
    desc: 'Beginner-level robotics workshops designed for first-year students to get hands-on experience with basic robotics.',
  },
  {
    title: 'Autonomous Navigation Projects',
    desc: 'Advanced projects using Arduino, Raspberry Pi, and ROS to develop robots capable of autonomous navigation.',
  },
  {
    title: 'National Competition Participation',
    desc: 'Club teams actively participate in ABU Robocon, Smart India Hackathon (SIH), and other national-level events.',
  },
  {
    title: 'Industry Visits',
    desc: 'Organised visits to leading robotics and automation companies to expose students to real-world applications.',
  },
  {
    title: 'Certification Programs',
    desc: 'Structured certification workshops on Arduino, ROS (Robot Operating System), and IoT to enhance technical proficiency.',
  },
];

const TECHNOLOGIES = [
  'Arduino',
  'Raspberry Pi',
  'ROS',
  'MATLAB',
  'SolidWorks',
  '3D Printing',
  'Servo Motors',
  'Computer Vision',
  'OpenCV',
  'Python',
];

const ACHIEVEMENTS = [
  'Winner, Robo Wars — Regional Level (2023)',
  'Top 10 at ABU Robocon India (2022)',
  'Best Robotics Project — JNTUH TechFest (2022)',
  '50+ robots built and demonstrated (2019–2024)',
];

const REPORTS = [
  { label: 'Activity Report 2020-21', url: 'https://www.griet.ac.in/robotics_club.php' },
  { label: 'Activity Report 2019-20', url: 'https://www.griet.ac.in/robotics_club.php' },
];

/* ── Page ────────────────────────────────────────────────────────────── */
export default function RoboticsClubPage() {
  return (
    <AcademicsLayout title="Robotics Club">

      {/* About */}
      <section className="mb-8">
        <SectionLabel>About the Club</SectionLabel>
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-3">
            The <strong>GRIET Robotics Club</strong> is one of the most active technical clubs on campus. Students
            design, build, and program robots for national-level competitions, gaining invaluable hands-on engineering
            experience.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 mt-3">
            <p className="font-dm-sans text-[12.5px] text-gray-600">
              <span className="font-semibold">Coordinator:</span> Dr. Rajiv (IT Department)
            </p>
            <a
              href="mailto:robotics@griet.ac.in"
              className="font-dm-sans text-[12.5px] font-semibold hover:underline"
              style={{ color: college.accentColor }}
            >
              robotics@griet.ac.in
            </a>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="mb-8">
        <SectionLabel>Activities</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACTIVITIES.map(({ title, desc }) => (
            <div key={title} className="p-4 rounded-xl border border-gray-200 bg-white">
              <p
                className="font-hind font-bold text-[13px] mb-1"
                style={{ color: college.primaryColor }}
              >
                {title}
              </p>
              <p className="font-dm-sans text-[12px] text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Used */}
      <section className="mb-8">
        <SectionLabel>Technologies Used</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {TECHNOLOGIES.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full font-dm-sans text-[12px] font-semibold border"
              style={{
                borderColor: college.primaryColor,
                color: college.primaryColor,
                backgroundColor: 'rgba(91,16,39,0.05)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-8">
        <SectionLabel>Achievements</SectionLabel>
        <div className="flex flex-col gap-2 p-5 rounded-xl bg-gray-50 border border-gray-200">
          {ACHIEVEMENTS.map((item, i) => (
            <div key={i} className="flex items-start gap-2 font-dm-sans text-[12.5px] text-gray-700">
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: college.accentColor }}
              />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Activity Reports Downloads */}
      <section className="mb-8">
        <SectionLabel>Activity Reports</SectionLabel>
        <div className="flex flex-col gap-2">
          {REPORTS.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors group w-full sm:w-auto"
            >
              <svg
                className="w-4 h-4 text-red-400 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span className="font-dm-sans text-[12px] text-gray-700 group-hover:font-medium">{label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* How to Join */}
      <section className="mb-4">
        <SectionLabel>How to Join</SectionLabel>
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 font-dm-sans text-[12.5px] text-gray-700 leading-relaxed space-y-1">
          <p>Open to all B.Tech students at GRIET. Register at the start of each academic year — no prior experience needed. Join us and start building the future of robotics.</p>
        </div>
      </section>

    </AcademicsLayout>
  );
}
