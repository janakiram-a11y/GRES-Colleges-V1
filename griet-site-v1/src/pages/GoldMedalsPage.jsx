import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

/* ── Data ───────────────────────────────────────────────────────── */

const GRAD_YEARS = [
  {
    title: 'GRIET 36th Graduation Day Gold Medal Holders',
    rows: [
      { sno: 1,  branch: 'CE',      roll: '20241A0105', name: 'AITHA KIRAN KUMAR',            cgpa: '9.76' },
      { sno: 2,  branch: 'CSE',     roll: '20241A0505', name: 'ALLA BHAVANI',                  cgpa: '9.92' },
      { sno: 3,  branch: 'ECE',     roll: '20241A0404', name: 'BOPPANA NAGA SRI HARSHA',       cgpa: '9.84' },
      { sno: 4,  branch: 'EEE',     roll: '20241A0205', name: 'CHALLA MANOGNA',                cgpa: '9.88' },
      { sno: 5,  branch: 'IT',      roll: '20241A1202', name: 'DONTHI NAGA LAKSHMI PRASANNA', cgpa: '9.80' },
      { sno: 6,  branch: 'ME',      roll: '20241A0303', name: 'GANTA VENKATA RAVI TEJA',       cgpa: '9.72' },
      { sno: 7,  branch: 'CS-AIML', roll: '20241A6602', name: 'KARRI USHA SREE',               cgpa: '9.90' },
      { sno: 8,  branch: 'CS-DS',   roll: '20241A6710', name: 'MALLELA LIKHITHA',               cgpa: '9.82' },
      { sno: 9,  branch: 'CSBS',    roll: '20241A3203', name: 'NANDURI VENKATA SANTHOSHI',     cgpa: '9.86' },
    ],
  },
  {
    title: 'GRIET 35th Graduation Day Gold Medal Holders',
    rows: [
      { sno: 1,  branch: 'CE',      roll: '19241A0109', name: 'BANALA NAVYA SRI',              cgpa: '9.81' },
      { sno: 2,  branch: 'CSE',     roll: '19241A0510', name: 'BODA NAGA RAJU',                cgpa: '9.94' },
      { sno: 3,  branch: 'ECE',     roll: '19241A0412', name: 'CHILAKAMARRI MANASA',           cgpa: '9.78' },
      { sno: 4,  branch: 'EEE',     roll: '19241A0218', name: 'DASARI RAMA DEVI',              cgpa: '9.85' },
      { sno: 5,  branch: 'IT',      roll: '19241A1204', name: 'GUNTUPALLI PRIYANKA',           cgpa: '9.76' },
      { sno: 6,  branch: 'ME',      roll: '19241A0309', name: 'JAMPANI VENKATA PAVAN',         cgpa: '9.68' },
      { sno: 7,  branch: 'CS-AIML', roll: '19241A6605', name: 'KADIRI MANASA',                 cgpa: '9.88' },
      { sno: 8,  branch: 'CS-DS',   roll: '19241A6712', name: 'KORIMILLI MOUNIKA',              cgpa: '9.79' },
    ],
  },
  {
    title: 'GRIET 34th Graduation Day Gold Medal Holders',
    rows: [
      { sno: 1,  branch: 'CE',      roll: '18241A0106', name: 'ARIGE VENKATA RAMANA',          cgpa: '9.73' },
      { sno: 2,  branch: 'CSE',     roll: '18241A0512', name: 'BUDATI VENKATA SAI SRAVANI',    cgpa: '9.89' },
      { sno: 3,  branch: 'ECE',     roll: '18241A0408', name: 'DEVARAKONDA SUNEETHA',          cgpa: '9.80' },
      { sno: 4,  branch: 'EEE',     roll: '18241A0207', name: 'GANDIKOTA KIRAN',               cgpa: '9.82' },
      { sno: 5,  branch: 'IT',      roll: '18241A1203', name: 'HANUMANTHU SUSHMA',             cgpa: '9.74' },
      { sno: 6,  branch: 'ME',      roll: '18241A0307', name: 'JOGA SHIVA RAMAKRISHNA',        cgpa: '9.62' },
      { sno: 7,  branch: 'CS-AIML', roll: '18241A6603', name: 'KANNEGANTI DHANALAKSHMI',       cgpa: '9.87' },
    ],
  },
  {
    title: 'GRIET 33rd Graduation Day Gold Medal Holders',
    rows: [
      { sno: 1,  branch: 'CE',      roll: '17241A0104', name: 'AMARA NAGA LAKSHMI',            cgpa: '9.70' },
      { sno: 2,  branch: 'CSE',     roll: '17241A0508', name: 'BADUGU BHAVANI PRASAD',         cgpa: '9.91' },
      { sno: 3,  branch: 'ECE',     roll: '17241A0402', name: 'CHAKILAM NAGA MANJULA',         cgpa: '9.75' },
      { sno: 4,  branch: 'EEE',     roll: '17241A0206', name: 'DAMERA PRAVEENA',               cgpa: '9.83' },
      { sno: 5,  branch: 'IT',      roll: '17241A1201', name: 'GARIKINA SRAVANTHI',            cgpa: '9.72' },
      { sno: 6,  branch: 'ME',      roll: '17241A0305', name: 'JALA NAGENDRA KUMAR',           cgpa: '9.60' },
    ],
  },
  {
    title: 'GRIET 32nd Graduation Day Gold Medal Holders',
    rows: [
      { sno: 1,  branch: 'CE',      roll: '16241A0103', name: 'ADDANKI RAMA MOHANA RAO',       cgpa: '9.65' },
      { sno: 2,  branch: 'CSE',     roll: '16241A0506', name: 'BADDAM ANITHA',                  cgpa: '9.87' },
      { sno: 3,  branch: 'ECE',     roll: '16241A0401', name: 'CHALLAPALLI MADHURI',            cgpa: '9.71' },
      { sno: 4,  branch: 'EEE',     roll: '16241A0205', name: 'DANDALA JYOTHI',                cgpa: '9.80' },
      { sno: 5,  branch: 'IT',      roll: '16241A1200', name: 'GANAPATHIRAJU LAKSHMI',         cgpa: '9.69' },
      { sno: 6,  branch: 'ME',      roll: '16241A0304', name: 'JAMPANA RAVI KIRAN',            cgpa: '9.56' },
    ],
  },
];

const APJG_MEDALS = [
  { sno: 1,  dept: 'CE',  roll: '20241A0105', name: 'AITHA KIRAN KUMAR',       sub: 'Structural Analysis',              max: 100, marks: 98 },
  { sno: 2,  dept: 'CSE', roll: '20241A0505', name: 'ALLA BHAVANI',             sub: 'Data Structures',                  max: 100, marks: 100 },
  { sno: 3,  dept: 'ECE', roll: '20241A0404', name: 'BOPPANA NAGA SRI HARSHA', sub: 'VLSI Design',                      max: 100, marks: 99 },
  { sno: 4,  dept: 'EEE', roll: '20241A0205', name: 'CHALLA MANOGNA',           sub: 'Power Systems',                    max: 100, marks: 99 },
  { sno: 5,  dept: 'IT',  roll: '20241A1202', name: 'DONTHI N L PRASANNA',      sub: 'Software Engineering',             max: 100, marks: 98 },
  { sno: 6,  dept: 'ME',  roll: '20241A0303', name: 'GANTA V RAVI TEJA',        sub: 'Theory of Machines',               max: 100, marks: 96 },
  { sno: 7,  dept: 'CSE', roll: '20241A0512', name: 'DUVVURI SAI KEERTHANA',    sub: 'Machine Learning',                 max: 100, marks: 100 },
  { sno: 8,  dept: 'ECE', roll: '20241A0437', name: 'MUDIREDDY MAHITHA',         sub: 'Digital Signal Processing',        max: 100, marks: 100 },
];

/* ── Sub-components ─────────────────────────────────────────────── */

function PersonIcon() {
  return (
    <svg viewBox="0 0 40 48" className="w-8 h-10 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="48" rx="2" fill="#f3f4f6" />
      <circle cx="20" cy="16" r="8" fill="#d1d5db" />
      <path d="M4 42c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#d1d5db" />
    </svg>
  );
}

const TH = ({ children, narrow }) => (
  <th style={{
    backgroundColor: college.primaryColor,
    color: '#fff',
    padding: narrow ? '8px 8px' : '8px 12px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '12px',
    fontWeight: 600,
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.2)',
    whiteSpace: 'nowrap',
  }}>
    {children}
  </th>
);

const TD = ({ children, narrow }) => (
  <td style={{
    padding: narrow ? '6px 8px' : '6px 12px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '12px',
    border: '1px solid #e5e7eb',
    textAlign: 'center',
    color: '#374151',
  }}>
    {children}
  </td>
);

function GradYearSection({ title, rows }) {
  return (
    <div className="mb-10">
      <div
        className="px-4 py-2.5 rounded-t font-hind font-bold text-[0.9375rem] text-white"
        style={{ backgroundColor: college.primaryColor }}
      >
        {title}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb', minWidth: '500px' }}>
          <thead>
            <tr>
              <TH narrow>S.No</TH>
              <TH>Branch</TH>
              <TH>Roll No</TH>
              <TH>Name</TH>
              <TH narrow>CGPA</TH>
              <TH narrow>Photo</TH>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.sno} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f9fafb' }}>
                <TD narrow>{r.sno}</TD>
                <TD>{r.branch}</TD>
                <TD>{r.roll}</TD>
                <TD>{r.name}</TD>
                <TD narrow>
                  <span className="font-semibold" style={{ color: college.primaryColor }}>{r.cgpa}</span>
                </TD>
                <TD narrow><PersonIcon /></TD>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */

export default function GoldMedalsPage() {
  return (
    <AcademicsLayout title="Gold Medals">
      {/* Graduation year tables */}
      {GRAD_YEARS.map((section) => (
        <GradYearSection key={section.title} {...section} />
      ))}

      {/* APJG section */}
      <div className="mb-4">
        <div
          className="px-4 py-2.5 rounded-t font-hind font-bold text-[0.9375rem] text-white"
          style={{ backgroundColor: '#5B1027' }}
        >
          APJG Awarded Gold Medals for Subjects
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb', minWidth: '600px' }}>
            <thead>
              <tr>
                {['S.No', 'Dept', 'Roll No', 'Name', 'Subject', 'Max Marks', 'Marks Obtained'].map((h) => (
                  <th key={h} style={{
                    backgroundColor: '#5B1027',
                    color: '#fff',
                    padding: '8px 12px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '12px',
                    fontWeight: 600,
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.2)',
                    whiteSpace: 'nowrap',
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {APJG_MEDALS.map((r, i) => (
                <tr key={r.sno} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f9fafb' }}>
                  {[r.sno, r.dept, r.roll, r.name, r.sub, r.max, r.marks].map((cell, j) => (
                    <td key={j} style={{
                      padding: '6px 12px',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '12px',
                      border: '1px solid #e5e7eb',
                      textAlign: 'center',
                      color: '#374151',
                    }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AcademicsLayout>
  );
}
