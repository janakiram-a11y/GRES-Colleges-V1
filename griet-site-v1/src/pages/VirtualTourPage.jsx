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
const EXPLORE_SPOTS = [
  'Main Academic Blocks',
  'Central Library',
  'Sports Complex',
  'Auditorium',
  'Cafeteria',
  'Hostel Campus',
  'Labs & Workshops',
  'Administrative Block',
];

/* ── Page ────────────────────────────────────────────────────────────── */
export default function VirtualTourPage() {
  return (
    <CollegeLayout college={college}>
      <AcademicsBanner title="360° Virtual Campus Tour" />

      <div className="page-pad">
        <div className="max-w-4xl mx-auto">

          {/* About */}
          <section className="mb-8">
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
              <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
                Explore <strong>GRIET's stunning 24-acre campus</strong> from anywhere in the world
                with our immersive 360° virtual tour. Whether you are a prospective student, a
                parent, or an alumnus, our interactive virtual walkthrough lets you experience every
                corner of our vibrant campus — from state-of-the-art laboratories to lush green
                open spaces.
              </p>
            </div>
          </section>

          {/* VR Tour CTA Banner */}
          <section className="mb-8">
            <div
              className="rounded-2xl overflow-hidden border-2 p-8 flex flex-col items-center text-center gap-5"
              style={{ borderColor: college.primaryColor, background: 'linear-gradient(135deg, #FAF4EE 0%, #F3E8D4 100%)' }}
            >
              {/* Globe / 360 icon */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: college.primaryColor }}
              >
                360°
              </div>

              <div>
                <p
                  className="font-hind font-bold text-[20px] mb-2"
                  style={{ color: college.primaryColor }}
                >
                  Immersive 360° Campus Experience
                </p>
                <p className="font-dm-sans text-[13px] text-gray-600 leading-relaxed max-w-lg mx-auto">
                  Take a fully interactive virtual reality tour of GRIET's campus. Navigate through
                  buildings, explore facilities, and get a true feel of life at GRIET — right from
                  your browser.
                </p>
              </div>

              <a
                href="https://www.griet.ac.in/VR TOUR/vrtour.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-hind font-bold text-[14px] text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: college.primaryColor }}
              >
                Launch Virtual Tour
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              <p className="font-dm-sans text-[11px] text-gray-400">
                Opens in a new tab — best experienced on a desktop browser or VR headset.
              </p>
            </div>
          </section>

          {/* What You Can Explore */}
          <section className="mb-8">
            <SectionLabel>What You Can Explore</SectionLabel>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {EXPLORE_SPOTS.map((spot) => (
                <div
                  key={spot}
                  className="p-3 rounded-xl border border-gray-200 bg-white flex items-center gap-2"
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: college.accentColor }}
                  />
                  <p className="font-dm-sans text-[12px] text-gray-700 leading-snug">{spot}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Resources */}
          <section className="mb-8">
            <SectionLabel>Additional Resources</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Google Street View */}
              <div className="p-4 rounded-xl border border-gray-200 bg-white">
                <p
                  className="font-hind font-bold text-[13px] mb-1"
                  style={{ color: college.primaryColor }}
                >
                  Google Street View
                </p>
                <p className="font-dm-sans text-[12px] text-gray-600 leading-relaxed">
                  GRIET's campus is also available on Google Street View. Search for
                  "Gokaraju Rangaraju Institute of Engineering and Technology" on Google Maps
                  and click the Street View icon to explore the campus entrance and surroundings.
                </p>
              </div>

              {/* Campus Photos Gallery */}
              <div className="p-4 rounded-xl border border-gray-200 bg-white">
                <p
                  className="font-hind font-bold text-[13px] mb-1"
                  style={{ color: college.primaryColor }}
                >
                  Campus Photos Gallery
                </p>
                <p className="font-dm-sans text-[12px] text-gray-600 leading-relaxed">
                  Browse our curated photo gallery featuring high-resolution images of classrooms,
                  labs, sports facilities, events, and everyday campus life at GRIET.
                </p>
                <a
                  href="https://www.griet.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 font-dm-sans text-[12px] font-semibold hover:underline"
                  style={{ color: college.accentColor }}
                >
                  View Gallery ↗
                </a>
              </div>

            </div>
          </section>

          {/* In-person Visits */}
          <section className="mb-4">
            <SectionLabel>Plan an In-Person Visit</SectionLabel>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
              <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-4">
                Nothing beats seeing GRIET in person. We welcome prospective students and families
                to visit our campus. Contact our Admissions Office to schedule a guided tour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: college.primaryColor }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div>
                    <p className="font-hind font-bold text-[12px] text-gray-700">Email</p>
                    <a
                      href="mailto:admissions@griet.ac.in"
                      className="font-dm-sans text-[12px] font-semibold hover:underline"
                      style={{ color: college.accentColor }}
                    >
                      admissions@griet.ac.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: college.primaryColor }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <p className="font-hind font-bold text-[12px] text-gray-700">Phone</p>
                    <a
                      href="tel:+914029708243"
                      className="font-dm-sans text-[12px] font-semibold hover:underline"
                      style={{ color: college.accentColor }}
                    >
                      +91-40-2970 8243
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </CollegeLayout>
  );
}
