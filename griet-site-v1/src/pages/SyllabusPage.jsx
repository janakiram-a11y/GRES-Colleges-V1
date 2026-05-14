import { useState } from 'react';
import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const UG_BRANCHES = [
  'Civil Engineering',
  'Computer Science and Engineering',
  'Computer Science and Engineering (Data Science)',
  'Computer Science and Business System',
  'Computer Science and Engineering (AI & ML)',
  'Electrical and Electronics Engineering',
  'Electronics and Communication Engineering',
  'Mechanical Engineering',
];

const PG_GR25_BRANCHES = ['Computer Science and Engineering', 'Structural Engineering'];
const PG_GR22_BRANCHES = [
  'Computer Science and Engineering',
  'Data Science',
  'Design for Manufacturing',
  'Power Electronics',
  'Structural Engineering',
  'VLSI',
];

const UG_REGULATIONS = [
  { code: 'GR25', branches: UG_BRANCHES },
  { code: 'GR24', branches: UG_BRANCHES },
  { code: 'GR22', branches: UG_BRANCHES },
  { code: 'GR20', branches: [] },
  { code: 'GR18', branches: [] },
  { code: 'GR17', branches: [] },
  { code: 'GR15', branches: [] },
  { code: 'GR14', branches: [] },
];

const PG_REGULATIONS = [
  { code: 'GR25', branches: PG_GR25_BRANCHES },
  { code: 'GR24', branches: PG_GR25_BRANCHES },
  { code: 'GR22', branches: PG_GR22_BRANCHES },
  { code: 'GR20', branches: [] },
  { code: 'GR18', branches: [] },
  { code: 'GR17', branches: [] },
  { code: 'GR15', branches: [] },
  { code: 'GR14', branches: [] },
];

const SPECIAL_LINKS = ['GR15 MBA Syllabus', 'GR14 MBA Syllabus', 'GR14 MCA Syllabus'];

function PdfIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" style={{ color: college.primaryColor }}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
    </svg>
  );
}

function RegulationGroup({ code, branches, isOpen, onToggle }) {
  const hasBranches = branches.length > 0;
  return (
    <div className="mb-2">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-2.5 rounded-full text-left font-dm-sans font-semibold text-[13px] text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: college.primaryColor }}
      >
        <span>{code}</span>
        {hasBranches && (
          <svg className={`w-4 h-4 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      {isOpen && hasBranches && (
        <div className="border border-t-0 border-gray-200 rounded-b px-5 py-4 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {branches.map((branch) => (
              <a
                key={branch}
                href="#"
                className="flex items-center gap-2 font-dm-sans text-[13px] hover:underline"
                style={{ color: college.primaryColor }}
              >
                <PdfIcon />
                {branch}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ProgramSection({ title, regulations, open, onToggle }) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="font-hind font-bold text-[17px]" style={{ color: college.primaryColor }}>{title}</h2>
        <span className="h-px flex-1 bg-gray-200" />
      </div>
      <div className="space-y-2">
        {regulations.map(({ code, branches }) => (
          <RegulationGroup
            key={code}
            code={code}
            branches={branches}
            isOpen={open.has(code)}
            onToggle={() => onToggle(code)}
          />
        ))}
      </div>
    </div>
  );
}

export default function SyllabusPage() {
  const [ugOpen, setUgOpen] = useState(new Set(['GR25', 'GR24']));
  const [pgOpen, setPgOpen] = useState(new Set(['GR25', 'GR24', 'GR22']));

  const toggleUg = (code) => setUgOpen((prev) => {
    const next = new Set(prev);
    next.has(code) ? next.delete(code) : next.add(code);
    return next;
  });

  const togglePg = (code) => setPgOpen((prev) => {
    const next = new Set(prev);
    next.has(code) ? next.delete(code) : next.add(code);
    return next;
  });

  return (
    <AcademicsLayout title="Syllabus">

      {/* UG + PG side-by-side on large screens */}
      <div className="flex flex-col lg:flex-row gap-10 mb-10">
        <ProgramSection
          title="UG (B.Tech)"
          regulations={UG_REGULATIONS}
          open={ugOpen}
          onToggle={toggleUg}
        />
        <ProgramSection
          title="PG (M.Tech)"
          regulations={PG_REGULATIONS}
          open={pgOpen}
          onToggle={togglePg}
        />
      </div>

      {/* Special links */}
      <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
        {SPECIAL_LINKS.map((label) => (
          <a
            key={label}
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded font-dm-sans font-semibold text-[13px] text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#5B1027' }}
          >
            <PdfIcon />
            <span style={{ color: '#fff' }}>{label}</span>
          </a>
        ))}
      </div>

    </AcademicsLayout>
  );
}
