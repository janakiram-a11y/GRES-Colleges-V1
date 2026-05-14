import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

/* ── Org Chart ──────────────────────────────────────────────────── */

const P = college.primaryColor;
const FILL = '#FEF4DC';
const STROKE = '#C89B3C';
const LINE = '#999';
const FONT = 'Montserrat, sans-serif';

const ACE_UNITS = [
  { label: 'Computerisation', sub: ['Student Profiles', 'Marks', 'Online Regist.', 'Hall Tickets'] },
  { label: 'Paper Setting',   sub: ['Preparation of', 'Question Papers'] },
  { label: 'Examinations',    sub: ['Answer Booklets', 'Invigilation', 'Conduction of Exams'] },
  { label: 'Evaluation',      sub: ['Evaluation', 'Revaluation', 'Recounting'] },
  { label: 'Promulgation-I',  sub: ['OMR Reading', 'Moderation', 'Result Processing'] },
  { label: 'Promulgation-II', sub: ['Marks Memo', 'Certificates', 'CMM & PC'] },
  { label: 'Finance',         sub: ['Exam Fee', 'Remuneration', 'Accounting of', 'Inc & Expend.'] },
];

const COL_CENTERS = [55, 185, 315, 430, 545, 675, 805];
const ACE_BOX_X   = COL_CENTERS.map(c => c - 55);

function TopBox({ x, y, w = 220, h = 38, title, name }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="4" fill={FILL} stroke={STROKE} strokeWidth="1.5" />
      <text x={x + w / 2} y={y + 14} textAnchor="middle" fontSize="11" fontWeight="700" fill={P} fontFamily={FONT}>{title}</text>
      <text x={x + w / 2} y={y + 28} textAnchor="middle" fontSize="10" fill="#374151" fontFamily={FONT}>{name}</text>
    </g>
  );
}

function AceBox({ x, y, label }) {
  return (
    <g>
      <rect x={x} y={y} width={110} height={44} rx="3" fill={FILL} stroke={STROKE} strokeWidth="1.5" />
      <text x={x + 55} y={y + 14} textAnchor="middle" fontSize="10" fontWeight="700" fill={P} fontFamily={FONT}>ACE</text>
      <text x={x + 55} y={y + 27} textAnchor="middle" fontSize="9" fill="#374151" fontFamily={FONT}>{label}</text>
    </g>
  );
}

function SubBox({ x, y, lines }) {
  const h = Math.max(52, lines.length * 13 + 10);
  return (
    <g>
      <rect x={x} y={y} width={110} height={h} rx="3" fill={FILL} stroke={STROKE} strokeWidth="1" />
      {lines.map((ln, i) => (
        <text key={i} x={x + 55} y={y + 13 + i * 13} textAnchor="middle" fontSize="8.5" fill="#374151" fontFamily={FONT}>{ln}</text>
      ))}
    </g>
  );
}

function OrgChart() {
  return (
    <div className="overflow-x-auto mb-8">
      <svg viewBox="0 0 860 390" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: 680, width: '100%' }}>
        {/* Header text */}
        <text x="430" y="14" textAnchor="middle" fontSize="9.5" fill="#555" fontFamily={FONT}>
          Gokaraju Rangaraju Institute of Engineering and Technology (Autonomous)
        </text>
        <text x="430" y="27" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={P} fontFamily={FONT}>
          Examination Branch — Organization Chart
        </text>

        {/* Director */}
        <TopBox x={320} y={40} title="Director" name="Dr. Jandhyala N Murthy" />
        <line x1="430" y1="78" x2="430" y2="96" stroke={LINE} strokeWidth="1" />

        {/* Principal */}
        <TopBox x={320} y={96} title="Principal" name="Dr. J Praveen" />
        <line x1="430" y1="134" x2="430" y2="152" stroke={LINE} strokeWidth="1" />

        {/* COE */}
        <TopBox x={320} y={152} title="COE" name="Dr. Ch Mallikarjuna Rao" />

        {/* Stem from COE → horizontal */}
        <line x1="430" y1="190" x2="430" y2="206" stroke={LINE} strokeWidth="1" />

        {/* Horizontal spanning line */}
        <line x1="55" y1="206" x2="805" y2="206" stroke={LINE} strokeWidth="1" />

        {/* Vertical drops to ACE boxes */}
        {COL_CENTERS.map((cx, i) => (
          <line key={i} x1={cx} y1="206" x2={cx} y2="222" stroke={LINE} strokeWidth="1" />
        ))}

        {/* ACE boxes */}
        {ACE_UNITS.map((ace, i) => (
          <AceBox key={i} x={ACE_BOX_X[i]} y={222} label={ace.label} />
        ))}

        {/* Vertical drops to sub-boxes */}
        {COL_CENTERS.map((cx, i) => (
          <line key={i} x1={cx} y1="266" x2={cx} y2="282" stroke={LINE} strokeWidth="1" />
        ))}

        {/* Sub-boxes */}
        {ACE_UNITS.map((ace, i) => (
          <SubBox key={i} x={ACE_BOX_X[i]} y={282} lines={ace.sub} />
        ))}
      </svg>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */

export default function ExaminationsPage() {
  return (
    <AcademicsLayout title="Examinations">
      {/* Contact */}
      <p className="font-dm-sans text-[13px] text-center mb-8" style={{ color: college.primaryColor }}>
        For any queries contact :{' '}
        <a href="mailto:doe@griet.ac.in" className="font-semibold hover:underline">
          doe@griet.ac.in
        </a>
      </p>

      {/* Org chart — centred, max-width lets it breathe on wide screens */}
      <div className="max-w-5xl mx-auto">
        <OrgChart />
      </div>

      {/* Bottom accent bar */}
      <div className="mt-6 h-2 rounded-full" style={{ backgroundColor: college.primaryColor }} />
    </AcademicsLayout>
  );
}
