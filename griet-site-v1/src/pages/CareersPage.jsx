import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const OPENINGS_TYPES = [
  {
    category: 'Faculty Positions',
    desc: 'GRIET invites applications from qualified and experienced candidates for faculty positions across all departments. We seek candidates with strong academic backgrounds, research aptitude, and passion for teaching.',
    requirements: [
      'Ph.D. / M.Tech. with First Class (as per AICTE norms)',
      'Strong research publications in Scopus/SCI-indexed journals preferred',
      'Relevant industry or teaching experience is an advantage',
      'Excellent communication and interpersonal skills',
    ],
  },
  {
    category: 'Non-Teaching / Administrative',
    desc: 'Opportunities for qualified candidates in administrative, technical, and support roles including lab technicians, system administrators, librarians, and office staff.',
    requirements: [
      'Relevant degree or diploma in the respective field',
      'Prior experience in an educational institution is preferred',
      'Proficiency in computers and digital tools',
      'Fluency in English and Telugu/Hindi',
    ],
  },
];

const HOW_TO_APPLY = [
  'Download the Application Form below and fill it in completely.',
  'Attach your updated CV, copies of certificates, and a recent passport photograph.',
  'Send the filled application to careers@griet.ac.in with subject line: "Application for [Position] – [Department]".',
  'Shortlisted candidates will be contacted for a written test and/or interview.',
  'No TA/DA is admissible for attending the selection process.',
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function CareersPage() {
  return (
    <AcademicsLayout title="Careers at GRIET">

      <p className="font-dm-sans text-[13px] text-gray-600 leading-relaxed mb-8">
        Join a team of passionate educators, researchers, and professionals at one of Telangana's premier engineering institutions.
        GRIET offers a stimulating work environment, opportunities for professional growth, and the chance to make a meaningful impact on the future engineers of India.
      </p>

      {/* ── Application Form CTA ─────────────────────────────────── */}
      <section className="mb-8">
        <div
          className="rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-5"
          style={{
            background: `linear-gradient(135deg, ${college.primaryColor} 0%, #8B1A3A 100%)`,
          }}
        >
          <div className="flex-1">
            <p className="font-hind font-bold text-[16px] text-white mb-1">Application Form — Faculty Positions</p>
            <p className="font-dm-sans text-[12.5px] text-white/80 leading-relaxed">
              Download the official application form, fill it in, and email it to{' '}
              <a href="mailto:careers@griet.ac.in" className="font-semibold underline text-white/90 hover:text-white">
                careers@griet.ac.in
              </a>
              {' '}along with your CV and supporting documents.
            </p>
          </div>
          <a
            href="https://www.griet.ac.in/images2/APPLICATION%20FORM%20FOR%20FACULTY%20POSITIONS.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg font-hind font-bold text-[13px] text-white border-2 border-white/60 hover:bg-white/10 transition-colors flex-shrink-0"
          >
            <DownloadIcon />
            Download Application Form
          </a>
        </div>
      </section>

      {/* ── No current openings notice ───────────────────────────── */}
      <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 mb-8">
        <p className="font-dm-sans text-[13px] text-amber-800">
          <strong>No specific openings advertised currently.</strong> Please check back regularly or send your CV to{' '}
          <a href="mailto:hr@griet.ac.in" className="font-semibold hover:underline" style={{ color: college.accentColor }}>hr@griet.ac.in</a>{' '}
          for consideration in future vacancies.
        </p>
      </div>

      {/* ── Types of Positions ───────────────────────────────────── */}
      <section className="mb-10">
        <SectionLabel>Types of Positions</SectionLabel>
        <div className="flex flex-col gap-5">
          {OPENINGS_TYPES.map(({ category, desc, requirements }) => (
            <div key={category} className="p-5 rounded-xl border border-gray-200 bg-white">
              <p className="font-hind font-bold text-[14px] mb-1" style={{ color: college.primaryColor }}>{category}</p>
              <p className="font-dm-sans text-[12.5px] text-gray-600 leading-relaxed mb-3">{desc}</p>
              <p className="font-dm-sans text-[12px] font-semibold text-gray-700 mb-2">General Requirements:</p>
              <div className="flex flex-col gap-1.5">
                {requirements.map((r, i) => (
                  <div key={i} className="flex items-start gap-2 font-dm-sans text-[12px] text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                    {r}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How to Apply ─────────────────────────────────────────── */}
      <section className="mb-10">
        <SectionLabel>How to Apply</SectionLabel>
        <div className="flex flex-col gap-2.5">
          {HOW_TO_APPLY.map((step, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-white font-hind font-bold text-[10px] flex-shrink-0 mt-0.5"
                style={{ backgroundColor: college.primaryColor }}
              >
                {i + 1}
              </span>
              <span className="font-dm-sans text-[12.5px] text-gray-700">{step}</span>
            </div>
          ))}
        </div>

        {/* Repeat CTA inline */}
        <div className="mt-5 flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white">
          <div className="flex-1">
            <p className="font-dm-sans text-[12.5px] text-gray-700">
              Ready to apply?{' '}
              <span className="font-semibold" style={{ color: college.primaryColor }}>Download the application form</span>{' '}
              and email your filled form with supporting documents.
            </p>
          </div>
          <a
            href="https://www.griet.ac.in/images2/APPLICATION%20FORM%20FOR%20FACULTY%20POSITIONS.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-hind font-bold text-[12px] text-white flex-shrink-0 transition-opacity hover:opacity-85"
            style={{ backgroundColor: college.primaryColor }}
          >
            <DownloadIcon />
            Download Form
          </a>
        </div>
      </section>

      {/* ── Contact HR ───────────────────────────────────────────── */}
      <section className="mb-6">
        <SectionLabel>Contact HR</SectionLabel>
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
            For career-related enquiries, contact the <strong>Human Resources Department</strong>:
          </p>
          <div className="mt-3 flex flex-col gap-1.5">
            <p className="font-dm-sans text-[12.5px] text-gray-600">
              Email:{' '}
              <a href="mailto:careers@griet.ac.in" className="font-semibold hover:underline" style={{ color: college.accentColor }}>careers@griet.ac.in</a>
              {' '}&nbsp;|&nbsp;{' '}
              <a href="mailto:hr@griet.ac.in" className="font-semibold hover:underline" style={{ color: college.accentColor }}>hr@griet.ac.in</a>
            </p>
            <p className="font-dm-sans text-[12.5px] text-gray-600">
              Phone: <strong>{college.phone}</strong>
            </p>
            <p className="font-dm-sans text-[12.5px] text-gray-600">
              Address: {college.address}
            </p>
          </div>
        </div>
      </section>

    </AcademicsLayout>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
