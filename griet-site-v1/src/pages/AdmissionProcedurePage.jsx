import AdmissionsLayout from '../components/AdmissionsLayout';
import college from '../theme';

function Panel({ title, badge, children }) {
  return (
    <div className="flex-1 rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm">
      <div className="px-6 py-4 flex items-center gap-3" style={{ backgroundColor: college.primaryColor }}>
        <span className="font-hind font-bold text-white text-[18px]">{title}</span>
        {badge && (
          <span className="ml-auto font-dm-sans text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white" style={{ color: college.primaryColor }}>
            {badge}
          </span>
        )}
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

function Step({ n, children }) {
  return (
    <div className="flex items-start gap-3 mb-3">
      <div
        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-hind font-bold text-[0.875rem] text-white mt-0.5"
        style={{ backgroundColor: college.accentColor }}
      >
        {n}
      </div>
      <p className="font-dm-sans text-[0.9375rem] leading-relaxed text-gray-700">{children}</p>
    </div>
  );
}

function Body({ children }) {
  return <p className="font-dm-sans text-[0.9375rem] leading-relaxed text-gray-700 mb-3">{children}</p>;
}

function SubLabel({ children }) {
  return (
    <p className="font-dm-sans font-bold text-[0.875rem] uppercase tracking-wide text-gray-400 mb-2 mt-4">{children}</p>
  );
}

export default function AdmissionProcedurePage() {
  return (
    <AdmissionsLayout title="Admission Procedure">

      {/* Eligibility note */}
      <p className="font-dm-sans text-[0.9375rem] text-gray-500 italic mb-8">
        Review the eligibility criteria and admission steps for B.Tech and M.Tech programmes at GRIET.
      </p>

      {/* Two-column panels */}
      <div className="flex flex-col lg:flex-row gap-6 mb-10">

        {/* B.Tech panel */}
        <Panel title="B.Tech Programmes" badge="EAPCET / TGEAPCET">
          <SubLabel>Eligibility</SubLabel>
          <Body>
            Pass in 10+2 (Intermediate) from the Board of Intermediate Education, Govt. of Telangana,
            or an equivalent examination with <strong>Mathematics, Physics and Chemistry</strong> as
            optional subjects.
          </Body>
          <Body>
            Admissions are made through <strong>EAPCET</strong> conducted by the Govt. of Telangana
            along with other Engineering colleges in the state.
          </Body>

          <SubLabel>Admission Steps</SubLabel>
          <Step n={1}>Qualify in TGEAPCET (Engineering stream).</Step>
          <Step n={2}>Attend state counselling conducted by the Convenor.</Step>
          <Step n={3}>
            70% of seats filled by EAPCET merit; 30% reserved for Management / NRI candidates.
          </Step>
          <Step n={4}>
            Diploma holders may apply for 2nd-year lateral entry (10% supernumerary seats) via{' '}
            <a href="#" style={{ color: college.primaryColor }} className="underline hover:opacity-80">ECET</a>.
          </Step>
        </Panel>

        {/* M.Tech panel */}
        <Panel title="M.Tech Programmes" badge="GATE / PGECET">
          <SubLabel>Eligibility — Non-Sponsored</SubLabel>
          <Body>
            B.E / B.Tech degree (or equivalent) from an AICTE-approved institution, with a valid
            <strong> GATE score</strong> or <strong>PGECET rank</strong>.
          </Body>

          <SubLabel>Eligibility — Sponsored</SubLabel>
          <Body>
            B.E / B.Tech with minimum <strong>55% aggregate</strong> from an AICTE-approved institution
            and at least <strong>2 years of full-time work experience</strong> in a recognised firm,
            industry, or government organisation in the relevant field.
          </Body>

          <SubLabel>Admission Steps</SubLabel>
          <Step n={1}>Admission made primarily through <strong>GATE</strong> score via convenor PGECET.</Step>
          <Step n={2}>When GATE candidates are unavailable, PGECET-qualified candidates are considered on merit.</Step>
          <Step n={3}>Sponsored candidates are admitted on merit; preference given to GATE-qualified.</Step>

          <div className="mt-5 pt-4 border-t border-gray-100 space-y-2">
            <a href="#" style={{ color: college.primaryColor }} className="font-dm-sans font-semibold text-[0.9375rem] underline hover:opacity-80 block">
              M.Tech Notification →
            </a>
            <a href="#" style={{ color: college.primaryColor }} className="font-dm-sans font-semibold text-[0.9375rem] underline hover:opacity-80 block">
              M.Tech Application Form (2024–25) →
            </a>
          </div>
        </Panel>

      </div>

      {/* AICTE scholarship note */}
      <div className="rounded-lg p-5" style={{ backgroundColor: '#fdf8ee', border: `1px solid ${college.accentColor}55` }}>
        <p className="font-hind font-semibold text-base mb-1" style={{ color: college.primaryColor }}>
          AICTE Scholarship Note
        </p>
        <p className="font-dm-sans text-[0.9375rem] text-gray-700">
          AICTE Scholarships are available to eligible GATE-qualified M.Tech candidates.
          Sponsored candidates are <strong>not eligible</strong> to receive stipend or scholarship,
          even if admitted on GATE score.
        </p>
      </div>

    </AdmissionsLayout>
  );
}
