import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const JOURNALS = [
  {
    abbr: 'IJAMMC',
    name: 'International Journal of Advanced Multidisciplinary and Mathematical Computing',
    issn: '2454-5260',
    frequency: 'Bi-annual',
    scope: 'Mathematics, Statistics, Computational Sciences, Engineering Mathematics, Applied Physics',
    editor: 'Editorial Board, GRIET',
    desc: 'An internationally peer-reviewed journal focusing on advanced topics in multidisciplinary research encompassing mathematics and computing. Encourages contributions from academicians, researchers, and industry professionals.',
    href: 'https://www.griet.ac.in/IJAMMC/ijammc.php',
  },
  {
    abbr: 'Management Today',
    name: 'Management Today — An Empirical Journal of Management Sciences',
    issn: '2248-9711',
    frequency: 'Quarterly',
    scope: 'Management Sciences, Business Administration, Finance, Human Resources, Marketing, Operations',
    editor: 'Dept. of Management Studies, GRIET',
    desc: 'A UGC-listed peer-reviewed journal dedicated to empirical and theoretical research in management sciences. Covers business strategy, organisational behaviour, finance, and entrepreneurship.',
    href: 'https://www.griet.ac.in/ManagementToday/managementtoday.php',
  },
  {
    abbr: 'IJAC',
    name: 'International Journal of Advanced Computing',
    issn: '0976-2280',
    frequency: 'Bi-annual',
    scope: 'Computer Science, Information Technology, Software Engineering, Data Science, AI, Networks',
    editor: 'Editorial Board, GRIET',
    desc: 'A peer-reviewed international journal publishing original research in computing and information technology. Topics include algorithms, machine learning, distributed systems, cybersecurity, and cloud computing.',
    href: 'https://www.griet.ac.in/IJAC/ijac.php',
  },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function JournalsPage() {
  return (
    <AcademicsLayout title="Journals Published by GRIET">

      <p className="font-dm-sans text-[13px] text-gray-600 leading-relaxed mb-8">
        GRIET publishes three peer-reviewed research journals covering engineering, computing, management, and mathematics. These provide a platform for academicians, researchers, and industry professionals to disseminate original research and innovations.
      </p>

      <SectionLabel>Our Journals</SectionLabel>

      <div className="flex flex-col gap-6">
        {JOURNALS.map(({ abbr, name, issn, frequency, scope, editor, desc, href }) => (
          <div key={abbr} className="p-5 rounded-xl border border-gray-200 bg-white">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <p className="font-hind font-bold text-[15px]" style={{ color: college.primaryColor }}>{abbr}</p>
              <span className="font-dm-sans text-[11px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: college.accentColor }}>ISSN {issn}</span>
              <span
                className="font-dm-sans text-[11px] font-semibold px-2 py-0.5 rounded-full border"
                style={{ color: college.primaryColor, borderColor: `${college.primaryColor}30` }}
              >
                {frequency}
              </span>
            </div>
            <p className="font-dm-sans text-[12px] text-gray-500 mb-2">{name}</p>
            <p className="font-dm-sans text-[12.5px] text-gray-600 leading-relaxed mb-3">{desc}</p>
            <div className="flex flex-col gap-1 mb-3">
              <p className="font-dm-sans text-[12px] text-gray-500">
                <span className="font-semibold text-gray-700">Scope: </span>{scope}
              </p>
              <p className="font-dm-sans text-[12px] text-gray-500">
                <span className="font-semibold text-gray-700">Managed by: </span>{editor}
              </p>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm-sans text-[12px] font-semibold hover:underline"
              style={{ color: college.accentColor }}
            >
              Visit Journal Page →
            </a>
          </div>
        ))}
      </div>

      <section className="mt-8">
        <SectionLabel>Submission & Editorial Policy</SectionLabel>
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <div className="flex flex-col gap-2.5">
            {[
              'All submitted manuscripts undergo double-blind peer review by subject matter experts.',
              'Authors must confirm that submitted work is original and has not been published elsewhere.',
              'Manuscripts should be submitted in MS Word format following the journal\'s prescribed template.',
              'The editorial board reserves the right to accept, reject, or request revisions of submitted papers.',
              'Accepted papers are published online and in print in the next available issue.',
              'For submission enquiries, contact the respective journal editorial board through the journal website.',
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-2 font-dm-sans text-[12.5px] text-gray-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

    </AcademicsLayout>
  );
}
