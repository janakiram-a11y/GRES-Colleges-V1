import AdmissionsLayout from '../components/AdmissionsLayout';
import college from '../theme';

export default function AdmissionsPage() {
  return (
    <AdmissionsLayout title="Admissions">

      {/* Intro strip */}
      <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 mb-10 max-w-3xl">
        GRIET offers world-class engineering education through EAPCET and GATE-based admissions.
        Explore the sections below to understand eligibility, procedures, fee structure, and scholarship opportunities.
      </p>

      {/* B.Tech & M.Tech side-by-side cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

        <div className="border-l-4 rounded-r-lg p-6 bg-white shadow-sm" style={{ borderColor: college.primaryColor }}>
          <h2 className="font-hind font-bold text-[20px] mb-3" style={{ color: college.primaryColor }}>
            B.Tech Programmes
          </h2>
          <p className="font-dm-sans text-[13px] leading-relaxed text-gray-700 mb-4">
            Candidates must qualify in <strong>TGEAPCET</strong> (Engineering, Agricultural and Medical
            Common Entrance Test) conducted by the Govt. of Telangana. Eligible students must have
            passed 10+2 with Maths, Physics, and Chemistry. Seats are allotted through state counselling
            based on EAPCET rank.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="font-dm-sans text-[12px] font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: college.primaryColor }}>
              70% Merit Seats
            </span>
            <span className="font-dm-sans text-[12px] font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#f3f4f6', color: '#374151' }}>
              30% Management / NRI
            </span>
            <span className="font-dm-sans text-[12px] font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#f3f4f6', color: '#374151' }}>
              10% Lateral Entry (ECET)
            </span>
          </div>
        </div>

        <div className="border-l-4 rounded-r-lg p-6 bg-white shadow-sm" style={{ borderColor: college.accentColor }}>
          <h2 className="font-hind font-bold text-[20px] mb-3" style={{ color: college.primaryColor }}>
            M.Tech Programmes
          </h2>
          <p className="font-dm-sans text-[13px] leading-relaxed text-gray-700 mb-4">
            Admissions are made primarily through <strong>GATE</strong>. When GATE candidates are
            unavailable, PGECET-qualified candidates are considered on merit. Sponsored category
            admissions are merit-based, with preference to GATE-qualified candidates.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="font-dm-sans text-[12px] font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: college.primaryColor }}>
              GATE Qualified
            </span>
            <span className="font-dm-sans text-[12px] font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#f3f4f6', color: '#374151' }}>
              PGECET Merit
            </span>
            <span className="font-dm-sans text-[12px] font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#f3f4f6', color: '#374151' }}>
              Sponsored Category
            </span>
          </div>
        </div>

      </div>

    </AdmissionsLayout>
  );
}
