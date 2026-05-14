import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

/* ── Shield logo (Digital Wellbeing Council) ────────────────────── */

function DWCShieldLogo() {
  return (
    <svg viewBox="0 0 160 180" className="w-36 h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Shield outline */}
      <path
        d="M80 6 L148 34 L148 98 C148 138 80 174 80 174 C80 174 12 138 12 98 L12 34 Z"
        fill="#fff"
        stroke="#d1d5db"
        strokeWidth="2"
      />
      {/* Shield inner fill top half */}
      <path
        d="M80 14 L140 38 L140 98 C140 132 80 165 80 165 C80 165 20 132 20 98 L20 38 Z"
        fill="#1A3A6B"
      />
      {/* Shield inner fill bottom accent */}
      <path
        d="M80 94 L140 94 L140 98 C140 132 80 165 80 165 C80 165 20 132 20 98 L20 94 Z"
        fill="#B71C1C"
      />
      {/* Red stripe across middle */}
      <rect x="20" y="88" width="120" height="14" fill="#B71C1C" />

      {/* Checkmark / tick icon */}
      <circle cx="80" cy="70" r="24" fill="none" stroke="#fff" strokeWidth="2.5" />
      <polyline points="68,70 76,78 94,60" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Text: DIGITAL WELLBEING */}
      <text x="80" y="108" textAnchor="middle" fill="white" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="700" letterSpacing="0.5">DIGITAL WELLBEING</text>
      {/* Text: COUNCIL */}
      <text x="80" y="120" textAnchor="middle" fill="white" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="700" letterSpacing="0.5">COUNCIL</text>

      {/* Star accents */}
      <text x="26" y="113" textAnchor="middle" fill="#C32033" fontFamily="serif" fontSize="10">★</text>
      <text x="134" y="113" textAnchor="middle" fill="#C32033" fontFamily="serif" fontSize="10">★</text>
    </svg>
  );
}

/* ── END NOW logo ────────────────────────────────────────────────── */

function EndNowLogo() {
  return (
    <div className="inline-flex items-center justify-center gap-0 rounded overflow-hidden my-4">
      {/* END part */}
      <div
        className="px-5 py-3 font-hind font-black text-[28px] text-white leading-none"
        style={{ backgroundColor: '#B71C1C' }}
      >
        END
      </div>
      {/* NOW part */}
      <div className="px-5 py-3 font-hind font-black text-[28px] leading-none" style={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
        NOW
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */

export default function DigitalWellbeingCouncilPage() {
  return (
    <AcademicsLayout title="Digital Wellbeing Council">
      <div className="flex flex-col items-center text-center py-6 max-w-xl mx-auto">

        {/* Shield logo */}
        <DWCShieldLogo />

        {/* Supported by */}
        <p className="font-dm-sans text-[13px] text-gray-500 mt-6 mb-1">supported by</p>

        {/* END NOW logo */}
        <EndNowLogo />

        {/* Foundation tag */}
        <p className="font-dm-sans font-semibold text-[11px] tracking-[0.18em] uppercase text-gray-500 -mt-2 mb-1">
          Foundation
        </p>

        {/* Tagline */}
        <p
          className="font-hind font-bold text-[13px] tracking-[0.12em] uppercase mt-4 mb-6"
          style={{ color: '#1a1a1a' }}
        >
          Advocacy on Digital Safety
        </p>

        {/* Divider */}
        <div className="w-16 h-0.5 rounded-full mb-6" style={{ backgroundColor: college.accentColor }} />

        {/* Description */}
        <p className="font-dm-sans text-[14px] leading-relaxed text-gray-700 text-justify">
          Advocating for better Internet Ethics and Digital Wellness to evoke responsible online behavioral
          patterns amongst Women, Children &amp; Adolescents.
        </p>

      </div>
    </AcademicsLayout>
  );
}
