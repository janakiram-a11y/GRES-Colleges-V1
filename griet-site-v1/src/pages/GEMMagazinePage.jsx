import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const ISSUES = [
  { issue: 19, label: 'February 2026' },
  { issue: 18, label: 'September 2025' },
  { issue: 17, label: 'March 2025' },
  { issue: 16, label: 'October 2024' },
  { issue: 15, label: 'March 2024' },
  { issue: 14, label: 'October 2023' },
  { issue: 13, label: 'March 2023 — Silver Jubilee Special' },
  { issue: 12, label: 'October 2022' },
  { issue: 11, label: 'March 2022' },
  { issue: 10, label: 'October 2021' },
  { issue: 9,  label: 'March 2021' },
  { issue: 8,  label: 'October 2020' },
  { issue: 7,  label: 'March 2020' },
  { issue: 6,  label: 'October 2019' },
  { issue: 5,  label: 'March 2019' },
  { issue: 4,  label: 'October 2018' },
  { issue: 3,  label: 'July 2018' },
  { issue: 2,  label: '2018' },
  { issue: 1,  label: 'Inaugural 2018' },
];

const SECTIONS = [
  { title: 'Cover Story', desc: 'An in-depth feature on a theme, person, or milestone that defines the issue.' },
  { title: 'Technical Articles', desc: 'Student and faculty authored papers on engineering, technology, and science topics.' },
  { title: 'Alumni Spotlight', desc: 'Profiles and interviews of accomplished GRIET graduates across industries.' },
  { title: 'Campus Life', desc: 'Events, fests, clubs, and memorable moments from student life at GRIET.' },
  { title: 'Research Digest', desc: 'Summaries of ongoing and published research from GRIET departments and labs.' },
  { title: 'Sports & Cultural', desc: 'Coverage of inter-collegiate competitions, cultural fests, and student achievements.' },
  { title: 'Faculty Corner', desc: 'Insights, opinion pieces, and contributions from GRIET faculty members.' },
];

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

export default function GEMMagazinePage() {
  return (
    <AcademicsLayout title="GEM Magazine — GRIET">

      {/* About */}
      <section className="mb-8">
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-3">
            <strong>GEM</strong> — the <strong>GRIET Engineering Magazine</strong> — is GRIET's official student
            publication, first published in <strong>2018–19</strong>. With <strong>19 issues</strong> published
            through February 2026, GEM serves as the voice of the GRIET community, covering student achievements,
            technical articles, campus life, alumni stories, and faculty contributions.
          </p>
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
            GEM is a <strong>bi-annual publication</strong> produced by a student editorial board with faculty
            guidance. Each issue brings together perspectives from across departments — academics, research,
            placements, campus life, alumni stories, and technical deep-dives — celebrating the spirit and
            progress of GRIET.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { stat: '19', label: 'Issues Published' },
            { stat: '2018–19', label: 'First Published' },
            { stat: 'Bi-Annual', label: 'Publication Frequency' },
            { stat: '7+', label: 'Sections Per Issue' },
          ].map(({ stat, label }) => (
            <div key={label} className="p-4 rounded-xl border border-gray-200 bg-white text-center">
              <p className="font-hind font-bold text-[22px] mb-0.5" style={{ color: college.primaryColor }}>{stat}</p>
              <p className="font-dm-sans text-[11.5px] text-gray-500 uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Issues Grid */}
      <section className="mb-10">
        <SectionLabel>Issues Archive</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ISSUES.map(({ issue, label }) => (
            <div
              key={issue}
              className="p-4 rounded-xl border border-gray-200 bg-white flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <span
                  className="font-hind font-bold text-[11px] px-2 py-0.5 rounded-full uppercase tracking-wide"
                  style={{ backgroundColor: `${college.primaryColor}15`, color: college.primaryColor }}
                >
                  Issue #{issue}
                </span>
              </div>
              <p className="font-dm-sans text-[12px] text-gray-600">{label}</p>
              <a
                href="https://www.griet.ac.in/gem.php"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 font-dm-sans text-[12px] font-semibold"
                style={{ color: college.accentColor }}
              >
                Read Issue
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <a
            href="https://www.griet.ac.in/gem.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-dm-sans text-[13px] font-semibold px-5 py-2.5 rounded-lg text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: college.primaryColor }}
          >
            View All Issues Archive
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Sections in each issue */}
      <section className="mb-10">
        <SectionLabel>Sections in Each Issue</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SECTIONS.map(({ title, desc }) => (
            <div key={title} className="flex gap-3 p-4 rounded-xl border border-gray-200 bg-white">
              <span
                className="flex-shrink-0 w-2 h-2 rounded-full"
                style={{ backgroundColor: college.accentColor, marginTop: '5px' }}
              />
              <div>
                <p className="font-hind font-bold text-[13px] mb-0.5" style={{ color: college.primaryColor }}>{title}</p>
                <p className="font-dm-sans text-[12px] text-gray-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Team */}
      <section className="mb-10">
        <SectionLabel>Editorial Team</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-gray-200 bg-white flex flex-col gap-1">
            <p className="font-hind font-bold text-[13px]" style={{ color: college.primaryColor }}>Student Editor-in-Chief</p>
            <p className="font-dm-sans text-[12px] text-gray-700 leading-relaxed">
              Elected annually from among student applicants. Leads the editorial board, coordinates content
              across departments, and manages the publication cycle for both issues each year.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-gray-200 bg-white flex flex-col gap-1">
            <p className="font-hind font-bold text-[13px]" style={{ color: college.primaryColor }}>Faculty Advisor</p>
            <p className="font-dm-sans text-[12px] text-gray-700 leading-relaxed">
              A faculty member provides editorial oversight, mentors the student team, and ensures quality
              and consistency across all issues.
            </p>
          </div>
        </div>
      </section>

      {/* Submit to GEM */}
      <section className="mb-10">
        <SectionLabel>Submit to GEM</SectionLabel>
        <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-3">
            Students and faculty are welcome to contribute articles, research summaries, opinion pieces,
            photographs, and creative writing to GEM. Submissions are reviewed by the editorial board
            before every issue.
          </p>
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-4">
            Accepted content types include technical articles, event reports, alumni interviews, research
            abstracts, campus photography, and faculty columns.
          </p>
          <div className="flex items-center gap-3">
            <span className="font-dm-sans text-[12px] text-gray-500 uppercase tracking-wide font-semibold">Submit via email:</span>
            <a
              href="mailto:gem@griet.ac.in"
              className="font-dm-sans text-[13px] font-semibold"
              style={{ color: college.accentColor }}
            >
              gem@griet.ac.in
            </a>
          </div>
        </div>
      </section>

    </AcademicsLayout>
  );
}
