import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';


const DOCUMENTS = [
  'Procedure for issue of transcripts',
  'Procedure for Obtaining Documents by Post',
  'Transcript_application',
  'Challenge Revaluation Registration Form & Guidelines',
  'No Dues Form',
  'PC application',
];

function DocIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" style={{ color: college.primaryColor }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

export default function ExamBranchDownloadsPage() {
  return (
    <AcademicsLayout title="Exam Branch Documents">
      <p className="font-dm-sans text-[13px] text-gray-500 mb-6">
        Download official forms and documents from the GRIET Examination Branch.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DOCUMENTS.map((doc) => (
          <a
            key={doc}
            href="#"
            className="group flex items-start gap-3 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md hover:border-transparent transition-all"
          >
            <span
              className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full mt-0.5"
              style={{ backgroundColor: `${college.primaryColor}14` }}
            >
              <DocIcon />
            </span>
            <span
              className="font-dm-sans font-semibold text-[12.5px] leading-snug group-hover:underline"
              style={{ color: college.primaryColor }}
            >
              {doc}
            </span>
          </a>
        ))}
      </div>
    </AcademicsLayout>
  );
}
