import { AcademicsBanner } from '../components/AcademicsLayout';
import CollegeLayout from '../CollegeLayout';
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
    title: 'Science Exhibitions',
    desc: 'Students design and display innovative science projects and experiments, showcasing scientific concepts to peers and visitors.',
  },
  {
    title: 'Physics & Chemistry Demonstrations',
    desc: 'Hands-on demonstrations of fascinating physics and chemistry phenomena that bring textbook concepts to life.',
  },
  {
    title: 'Astronomy Nights',
    desc: 'Telescope viewing sessions organised on campus for stargazing, planet observation, and discussions on celestial events.',
  },
  {
    title: 'Science Film Screenings',
    desc: 'Curated screenings of science documentaries and films that explore cutting-edge discoveries, space, and the natural world.',
  },
  {
    title: 'Quiz & Debate on Science Topics',
    desc: 'Competitive quizzes and structured debates on contemporary science and technology topics to sharpen critical thinking.',
  },
  {
    title: 'Visits to Science Centres & Museums',
    desc: 'Educational field trips to science centres and museums across the region for an immersive, hands-on learning experience.',
  },
];

const ACHIEVEMENTS = [
  'Participation in Science Olympiads at the national and state level.',
  'Recognition in state-level science competitions across multiple disciplines.',
  'Consistent representation of GRIET in inter-collegiate science fests.',
];

/* ── Page ────────────────────────────────────────────────────────────── */
export default function ScientificForestepPage() {
  return (
    <CollegeLayout college={college}>
      <AcademicsBanner title="Scientific Forestep" />

      <div className="page-pad">
        <div className="max-w-4xl mx-auto">

          {/* About */}
          <section className="mb-8">
            <SectionLabel>About</SectionLabel>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
              <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
                <strong>Scientific Forestep</strong> is GRIET's science and technology exploration
                club. It fosters scientific temperament, curiosity, and evidence-based thinking among
                engineering students. The club creates a vibrant community of science enthusiasts who
                go beyond the curriculum to explore, question, and discover the wonders of the
                natural and technological world.
              </p>
            </div>
          </section>

          {/* Activities */}
          <section className="mb-8">
            <SectionLabel>Activities</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ACTIVITIES.map(({ title, desc }) => (
                <div
                  key={title}
                  className="p-4 rounded-xl border border-gray-200 bg-white"
                >
                  <p
                    className="font-hind font-bold text-[13px] mb-1"
                    style={{ color: college.primaryColor }}
                  >
                    {title}
                  </p>
                  <p className="font-dm-sans text-[12px] text-gray-600 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-8">
            <SectionLabel>Achievements</SectionLabel>
            <div className="flex flex-col gap-2 p-5 rounded-xl bg-gray-50 border border-gray-200">
              {ACHIEVEMENTS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 font-dm-sans text-[12.5px] text-gray-700"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: college.accentColor }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="mb-4">
            <SectionLabel>Contact</SectionLabel>
            <div className="p-5 rounded-xl border border-gray-200 bg-white flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-1">
                <p className="font-hind font-bold text-[13px] mb-0.5" style={{ color: college.primaryColor }}>
                  Scientific Forestep Club
                </p>
                <p className="font-dm-sans text-[12px] text-gray-600">
                  Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad
                </p>
              </div>
              <a
                href="mailto:scientificforestep@griet.ac.in"
                className="font-dm-sans text-[12.5px] font-semibold hover:underline self-start sm:self-center"
                style={{ color: college.accentColor }}
              >
                scientificforestep@griet.ac.in
              </a>
            </div>
          </section>

        </div>
      </div>
    </CollegeLayout>
  );
}
