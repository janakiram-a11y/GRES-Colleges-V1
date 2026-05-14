import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const BTECH_YEAR_LABELS = ['I Year', 'II Year', 'III Year', 'IV Year'];
const MTECH_YEAR_LABELS = ['I Year', 'II Year'];

const RECENT_AYS = ['2025-26', '2024-25', '2023-24', '2022-23', '2021-22'];
const OLDER_AYS  = ['2020-21', '2019-20', '2018-19'];

function YearButton({ label }) {
  return (
    <a
      href="#"
      className="font-dm-sans font-semibold text-[13px] text-white text-center py-2.5 px-6 rounded-full hover:opacity-90 transition-opacity"
      style={{ backgroundColor: college.primaryColor }}
    >
      {label}
    </a>
  );
}

function ProgramRow({ title, years }) {
  return (
    <div className="mb-4">
      <h3 className="font-hind font-semibold text-[14px] mb-2" style={{ color: college.primaryColor }}>
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {years.map((y) => <YearButton key={y} label={y} />)}
      </div>
    </div>
  );
}

export default function AcademicCalendarPage() {
  return (
    <AcademicsLayout title="Academic Calendar">

      <p className="font-dm-sans text-[13px] text-gray-500 italic mb-8">
        Download academic schedules for B.Tech and M.Tech programmes by year.
      </p>

      {/* Recent AYs — two-column grid on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
        {RECENT_AYS.map((ay) => (
          <div key={ay} className="p-5 rounded-lg border border-gray-200 bg-white">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="font-hind font-bold text-[13px] px-3 py-0.5 rounded-full text-white"
                style={{ backgroundColor: college.accentColor }}
              >
                A.Y. {ay}
              </span>
            </div>
            <ProgramRow title="B.Tech" years={BTECH_YEAR_LABELS} />
            <ProgramRow title="M.Tech" years={MTECH_YEAR_LABELS} />
          </div>
        ))}
      </div>

      {/* Older years as text links */}
      <div className="pt-6 border-t border-gray-200">
        <h3 className="font-hind font-semibold text-[14px] mb-4 text-gray-500">Previous Years</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2">
          {OLDER_AYS.flatMap((ay) => [
            <a key={`b-${ay}`} href="#" className="font-dm-sans text-[13px] font-medium hover:underline" style={{ color: college.primaryColor }}>
              B.Tech A.Y. {ay}
            </a>,
            <a key={`m-${ay}`} href="#" className="font-dm-sans text-[13px] font-medium hover:underline" style={{ color: college.primaryColor }}>
              M.Tech A.Y. {ay}
            </a>,
          ])}
        </div>
      </div>

    </AcademicsLayout>
  );
}
