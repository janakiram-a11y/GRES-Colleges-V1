import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const SERVICES = [
  {
    title: 'Transcripts',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    points: [
      'Official transcripts are issued by the Examination Branch.',
      'Requests must be submitted with the filled Transcript Application Form.',
      'Processing time: 10–15 working days from receipt of application.',
      'Fees: as per the prevailing fee structure.',
      'Express processing available for urgent requirements.',
    ],
  },
  {
    title: 'Provisional Certificate',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    points: [
      'Provisional Certificate is issued on completion of all examinations.',
      'Students must clear all dues before applying.',
      'Download the PC Application Form from the Exam Branch Downloads section.',
      'Application to be submitted to the Examination Branch office.',
    ],
  },
  {
    title: 'Degree Certificate',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    points: [
      'Degree Certificates are issued by JNTU Hyderabad.',
      'GRIET facilitates the application process on behalf of students.',
      'Students must have cleared all backlogs and dues.',
      'Certificates are dispatched to students after receipt from the university.',
    ],
  },
  {
    title: 'Migration Certificate',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    points: [
      'Required for students seeking admission to another university.',
      'Application form available at the Examination Branch.',
      'No Dues Certificate from all departments is mandatory.',
      'Processing time: 7–10 working days.',
    ],
  },
];

export default function TranscriptsCertificatesPage() {
  return (
    <AcademicsLayout title="Transcripts & Certificates">
      <p className="font-dm-sans text-[0.9375rem] text-gray-600 mb-8 leading-relaxed">
        The GRIET Examination Branch issues official transcripts, provisional certificates,
        and facilitates degree and migration certificates. For assistance, contact the
        Examination Branch at{' '}
        <a href="mailto:doe@griet.ac.in" className="font-semibold hover:underline" style={{ color: college.primaryColor }}>
          doe@griet.ac.in
        </a>.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.map(({ title, icon, points }) => (
          <div
            key={title}
            className="rounded-xl border border-gray-200 overflow-hidden bg-white"
          >
            <div
              className="flex items-center gap-3 px-5 py-3"
              style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)` }}
            >
              <span className="text-white">{icon}</span>
              <span className="font-hind font-bold text-[0.9375rem] text-white">{title}</span>
            </div>
            <ul className="px-5 py-4 space-y-2">
              {points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2 font-dm-sans text-[12.5px] text-gray-700 leading-snug">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Transcript Application Form */}
      <div className="mt-8 rounded-xl border border-gray-200 bg-white overflow-hidden">
        <div
          className="flex items-center gap-3 px-5 py-3"
          style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)` }}
        >
          <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="font-hind font-bold text-[0.9375rem] text-white">Transcript Application Form (Form No. 230)</span>
        </div>

        <div className="px-5 py-4">
          <p className="font-dm-sans text-[12.5px] text-gray-600 mb-4 leading-relaxed">
            Download and fill the official Transcript Application Form for B.Tech. (2011 batch onwards) and submit it to the Examination Branch.
          </p>

          {/* PDF Preview */}
          <div className="rounded-lg border border-gray-200 overflow-hidden mb-4 bg-gray-50" style={{ height: '480px' }}>
            <iframe
              src="/transcript-application.pdf"
              title="Transcript Application Form"
              className="w-full h-full"
              style={{ border: 'none' }}
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="/transcript-application.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-dm-sans font-semibold text-[12.5px] text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: college.primaryColor }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View
            </a>

            <a
              href="/transcript-application.pdf"
              download="Transcript_Application_Form_230.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-dm-sans font-semibold text-[12.5px] text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: college.accentColor }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>

            <button
              onClick={() => {
                const iframe = document.querySelector('iframe[title="Transcript Application Form"]');
                if (iframe) {
                  iframe.contentWindow.print();
                } else {
                  window.open('/transcript-application.pdf', '_blank');
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-dm-sans font-semibold text-[12.5px] border transition-colors hover:bg-gray-100"
              style={{ borderColor: college.primaryColor, color: college.primaryColor }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>
          </div>
        </div>
      </div>

      {/* Contact box */}
      <div className="mt-8 flex items-start gap-4 p-5 rounded-lg border border-gray-200 bg-gray-50">
        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: college.primaryColor }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <p className="font-dm-sans text-[12.5px] text-gray-600 leading-relaxed">
          For all enquiries regarding transcripts and certificates, visit the{' '}
          <strong>Examination Branch, Ground Floor, Admin Block</strong>, or email{' '}
          <a href="mailto:doe@griet.ac.in" className="font-semibold hover:underline" style={{ color: college.primaryColor }}>
            doe@griet.ac.in
          </a>
          {' '}during office hours (9:00 AM – 5:00 PM, Monday–Friday).
        </p>
      </div>
    </AcademicsLayout>
  );
}
