import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const POLICIES = [
  'Ragging is strictly banned institution-wide.',
  'Burden of proof lies with the accused, not the victim.',
  'Anti-Ragging Squad (staff and students) on vigil throughout operational hours.',
  'Surprise visits to prone locations during the first three months.',
  'Two-month gap between freshman and senior coursework.',
  'Staggered class timings preventing freshman-senior interaction.',
  'Orientation and counseling sessions for first-year students and parents.',
  'Anti-ragging information displayed on notice boards, canteen, and meeting spaces.',
  'Posters at strategic campus locations and website scrolling bar messaging.',
  'Committee contact numbers prominently displayed across campus.',
];

const DOCUMENTS = [
  { label: 'AICTE Anti-Ragging Guidelines', href: 'https://www.griet.ac.in/2025/Anti-Ragging%20Policy%202025.pdf' },
  { label: 'Anti-Ragging Policy (2025)', href: 'https://www.griet.ac.in/2025/Anti-Ragging%20Policy%202025.pdf' },
  { label: 'JNTUH GRC Guidelines (2021)', href: '#' },
  { label: 'UGC Anti-Ragging Guidelines (2009)', href: '#' },
  { label: 'AP Prohibition of Ragging Act (1997)', href: '#' },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function AntiRaggingPage() {
  return (
    <AcademicsLayout title="Anti-Ragging Measures">

      <section className="mb-10">
        <SectionLabel>Committee Composition</SectionLabel>
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
            The Anti-Ragging Committee comprises the <strong>Principal</strong>, Dean Discipline, Inspector of Police (Bachupally Circle),
            Dean Student Affairs, Dean Academic Affairs, Physical Director, Senior Administrative Officer,
            and senior student representatives from all programs.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Key Policies & Measures</SectionLabel>
        <div className="flex flex-col gap-2.5">
          {POLICIES.map((p, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-white font-hind font-bold text-[10px] flex-shrink-0 mt-0.5"
                style={{ backgroundColor: college.primaryColor }}
              >
                {i + 1}
              </span>
              <span className="font-dm-sans text-[12.5px] text-gray-700">{p}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Emergency Contacts</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-gray-200 bg-white">
            <p className="font-hind font-bold text-[13px] mb-2" style={{ color: college.primaryColor }}>Balanagar Zone She Team</p>
            <p className="font-dm-sans text-[12.5px] text-gray-600">Emergency: <strong>Dial 100</strong></p>
            <p className="font-dm-sans text-[12.5px] text-gray-600">WhatsApp: <strong>9490617444</strong></p>
          </div>
          <div className="p-5 rounded-xl border border-gray-200 bg-white">
            <p className="font-hind font-bold text-[13px] mb-2" style={{ color: college.primaryColor }}>Inspector of Police, Bachupally Circle</p>
            <p className="font-dm-sans text-[12.5px] text-gray-600">J Upender Rao</p>
            <p className="font-dm-sans text-[12.5px] text-gray-600">Cell: <strong>9491060942</strong> · Landline: <strong>8333993552</strong></p>
            <a href="mailto:sho-bcpy-cyb@tspolice.gov.in" className="font-dm-sans text-[12px] hover:underline" style={{ color: college.accentColor }}>
              sho-bcpy-cyb@tspolice.gov.in
            </a>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <SectionLabel>Policy Documents</SectionLabel>
        <div className="flex flex-col gap-2 p-5 rounded-xl bg-gray-50 border border-gray-200">
          {DOCUMENTS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm-sans text-[12.5px] font-medium hover:underline flex items-center gap-2"
              style={{ color: college.primaryColor }}
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              {label}
            </a>
          ))}
        </div>
      </section>

    </AcademicsLayout>
  );
}
