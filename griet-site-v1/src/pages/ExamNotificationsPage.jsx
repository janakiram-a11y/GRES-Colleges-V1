import { useEffect } from 'react';
import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const PORTAL_URL = 'http://www.exambranch.griet.ac.in/';

export default function ExamNotificationsPage() {
  // Auto-open the portal in a new tab as soon as this page loads
  useEffect(() => {
    window.open(PORTAL_URL, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <AcademicsLayout title="Exam Notifications">
      <div className="flex flex-col items-center justify-center py-20 gap-6 text-center">

        {/* Icon */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${college.primaryColor}12` }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ color: college.primaryColor }}>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </div>

        <div>
          <p className="font-hind font-bold text-[18px] mb-2" style={{ color: college.primaryColor }}>
            Opening Exam Notifications Portal
          </p>
          <p className="font-dm-sans text-[0.9375rem] text-gray-600 max-w-md leading-relaxed">
            Exam notifications are published on the GRIET Examination Branch portal.
            It should have opened in a new tab automatically.
          </p>
        </div>

        <a
          href={PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-hind font-bold text-[0.9375rem] text-white transition-opacity hover:opacity-85"
          style={{ backgroundColor: college.primaryColor }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Open Exam Branch Portal
        </a>

        <p className="font-dm-sans text-[0.875rem] text-gray-400">
          If the portal did not open, click the button above.
        </p>
      </div>
    </AcademicsLayout>
  );
}
