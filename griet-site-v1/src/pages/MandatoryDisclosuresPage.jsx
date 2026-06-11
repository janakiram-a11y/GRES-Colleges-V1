import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

/* ── Shared sub-components ───────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <h2
        className="font-hind font-bold text-[15px] sm:text-[16px] shrink-0"
        style={{ color: college.primaryColor }}
      >
        {children}
      </h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

function DocRow({ label, url }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-3 sm:px-4 py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
      <div className="flex items-start gap-3 min-w-0 flex-1">
        <PdfIcon className="text-red-500 flex-shrink-0 mt-0.5" />
        <span className="font-dm-sans text-[12.5px] text-gray-800 leading-snug">{label}</span>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-hind font-semibold text-[11.5px] border flex-shrink-0 transition-colors"
        style={{ color: college.primaryColor, borderColor: college.primaryColor }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = college.primaryColor;
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = college.primaryColor;
        }}
      >
        <DownloadIcon />
        View
      </a>
    </div>
  );
}

function DocSection({ title, rows }) {
  return (
    <div className="mb-7">
      <SectionLabel>{title}</SectionLabel>
      <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
        {rows.map(({ label, url }) => (
          <DocRow key={label} label={label} url={url} />
        ))}
      </div>
    </div>
  );
}

function PdfIcon() {
  return (
    <svg className="w-4 h-4 text-red-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

/* ── Document data ───────────────────────────────────────────────────── */
const APPROVALS = [
  { label: 'JNTUH Affiliation Letter 2025–26', url: 'https://www.griet.ac.in/2026/JNTUH%20Affiliation%20Letter%202025-26.pdf' },
  { label: 'UGC Declaration', url: 'https://www.griet.ac.in/2026/UGC%20Declaration.pdf' },
  { label: 'AICTE EOA Report 2025–2026', url: 'https://www.griet.ac.in/2026/EOA%20Report%202025-2026.PDF' },
];

const AICTE_DISCLOSURE = [
  { label: 'AICTE Mandatory Disclosure 2025–26', url: 'https://www.griet.ac.in/2026/AICTE%20Mandatory%20Disclosure%202025-26.pdf' },
];

const NBA_DOCS = [
  { label: 'B.Tech. CSE – NBA Accreditation', url: 'https://www.griet.ac.in/2024/5%20UG_NBA_2024.pdf' },
  { label: 'B.Tech. IT – NBA Accreditation', url: 'https://www.griet.ac.in/2024/5%20UG_NBA_2024.pdf' },
  { label: 'B.Tech. ECE – NBA Accreditation', url: 'https://www.griet.ac.in/2024/5%20UG_NBA_2024.pdf' },
  { label: 'B.Tech. EEE – NBA Accreditation', url: 'https://www.griet.ac.in/2024/5%20UG_NBA_2024.pdf' },
  { label: 'B.Tech. Mechanical – NBA Accreditation', url: 'https://www.griet.ac.in/2024/5%20UG_NBA_2024.pdf' },
  { label: 'B.Tech. Civil – NBA Accreditation', url: 'https://www.griet.ac.in/2023/CIVIL_2023.pdf' },
  { label: 'M.Tech. Power Electronics – NBA Accreditation', url: 'https://www.griet.ac.in/2023/NBA%20PG%202023.pdf' },
  { label: 'M.Tech. CSE – NBA Accreditation', url: 'https://www.griet.ac.in/2023/3PG_NBA_EXTENSION_2021.pdf' },
  { label: 'M.Tech. VLSI – NBA Accreditation', url: 'https://www.griet.ac.in/2023/NBA%20PG%202023.pdf' },
  { label: 'M.Tech. Structural Engineering – NBA Accreditation', url: 'https://www.griet.ac.in/2023/NBA%20PG%202023.pdf' },
  { label: 'M.Tech. DFM – NBA Accreditation', url: 'https://www.griet.ac.in/images2/DFM%202022-23%20To%2030.06.2025.pdf' },
];

const NAAC_DOCS = [
  { label: 'NAAC Accreditation Certificate – Grade A++ (CGPA 3.55)', url: 'https://www.griet.ac.in/data/File%205.pdf' },
];

const BALANCE_SHEETS = [
  { label: 'Balance Sheet 2023–24', url: 'https://www.griet.ac.in/2025/Balance%20Sheet%20%202023-24.PDF' },
  { label: 'Balance Sheet 2022–23', url: 'https://www.griet.ac.in/2023/GRIET%20B%20S%2022-23.pdf' },
  { label: 'Balance Sheet 2021–22', url: 'https://www.griet.ac.in/2022/GRIET%20BS%2021-22.pdf' },
  { label: 'Balance Sheet 2020–21', url: 'https://www.griet.ac.in/images/balance%20sheet%202020-21.pdf' },
  { label: 'Balance Sheet 2019–20', url: 'https://www.griet.ac.in/images/Balance%20Sheet%2019-20.pdf' },
  { label: 'Balance Sheet 2018–19', url: 'https://www.griet.ac.in/images/Balancesheet_18_19.pdf' },
  { label: 'Balance Sheet 2017–18', url: 'https://www.griet.ac.in/images/GRES%20Balancesheet%2017-18.pdf' },
  { label: 'Balance Sheet 2016–17', url: 'https://www.griet.ac.in/images1/BS16-17.pdf' },
  { label: 'Balance Sheet 2015–16', url: 'https://www.griet.ac.in/images1/BALANCE%20SHEET%20%20MARCH%202016.pdf' },
  { label: 'Balance Sheet 2014–15', url: 'https://www.griet.ac.in/images1/BALANCE%20SHEET%20MARCH%202015.pdf' },
  { label: 'Balance Sheet 2013–14', url: 'https://www.griet.ac.in/images1/BALANCE%20SHEET%20MARCH%202014.pdf' },
];

const UGC_DOCS = [
  { label: 'Deemed to be University Application (UGC Portal)', url: 'https://www.griet.ac.in/2024/Deemed%20to%20be%20University%20Application%20submitted%20in%20the%20UGC%20Portal.pdf' },
  { label: 'DPR – Detailed Project Report', url: 'https://www.griet.ac.in/2024/DPR%20-%20Detailed%20Project%20Report.pdf' },
  { label: 'Aims and Objectives of the Sponsoring Body', url: 'https://www.griet.ac.in/2024/Aims%20and%20Objectives%20of%20the%20Sponsoring%20Body.pdf' },
  { label: 'Details of Members of the Sponsoring Body', url: 'https://www.griet.ac.in/2024/Details%20of%20Members%20of%20the%20Sponsoring%20Body.pdf' },
  { label: 'List of Programmes in Unique Disciplines', url: 'https://www.griet.ac.in/2024/List%20of%20programmes%20devoted%20to%20teaching%20or%20research%20in%20unique%20disciplines.pdf' },
  { label: 'Programme Justification (Distinct Category)', url: 'https://www.griet.ac.in/2024/Name%20of%20the%20programmes%20along%20with%20the%20justification%20on%20to%20how%20these%20programs%20fit%20into%20the%20distinct%20category.pdf' },
  { label: 'Syllabi for Unique Discipline Programmes', url: 'https://www.griet.ac.in/2024/Syllabi%20of%20the%20programmes%20devoted%20to%20teaching%20or%20research%20in%20unique%20disciplines.pdf' },
  { label: 'Memorandum of Association', url: 'https://www.griet.ac.in/2024/Memorandum%20of%20Association.pdf' },
  { label: 'Notarized Legal Undertaking', url: 'https://www.griet.ac.in/2024/Notarized%20Legal%20Undertaking.pdf' },
  { label: 'Department-wise List of Faculty', url: 'https://www.griet.ac.in/2024/Departmentwise%20List%20of%20Faculty.pdf' },
];

/* ── NBA Status Table ────────────────────────────────────────────────── */
const NBA_STATUS = [
  { programme: 'B.Tech (Civil)', period: '3 Years' },
  { programme: 'B.Tech (ECE)', period: '3 Years' },
  { programme: 'B.Tech (EEE)', period: '3 Years' },
  { programme: 'B.Tech (CSE)', period: '6 Years' },
  { programme: 'B.Tech (Mechanical)', period: '3 Years' },
  { programme: 'B.Tech (IT)', period: '3 Years' },
  { programme: 'M.Tech (DFM)', period: '3 Years' },
  { programme: 'M.Tech (Power Electronics)', period: '3 Years' },
  { programme: 'M.Tech (VLSI)', period: '3 Years' },
  { programme: 'M.Tech (Structural Engineering)', period: '3 Years' },
];

/* ── Page ────────────────────────────────────────────────────────────── */
export default function MandatoryDisclosuresPage() {
  return (
    <AcademicsLayout title="Mandatory Disclosures">

      {/* Intro */}
      <section className="mb-8">
        <div className="p-4 sm:p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
            In compliance with <strong>AICTE Regulations</strong> and UGC guidelines, GRIET publishes all mandatory institutional disclosures here. Documents are grouped by category. Click <strong>View</strong> on any document to open it in a new tab.
          </p>
        </div>
      </section>

      {/* 1. Regulatory Approvals */}
      <DocSection title="Regulatory Approvals" rows={APPROVALS} />

      {/* 2. AICTE Mandatory Disclosure */}
      <DocSection title="AICTE Mandatory Disclosure" rows={AICTE_DISCLOSURE} />

      {/* 3. NAAC */}
      <DocSection title="NAAC Accreditation" rows={NAAC_DOCS} />

      {/* 4. NBA */}
      <div className="mb-7">
        <SectionLabel>NBA Accreditation</SectionLabel>

        {/* Status table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
          <table className="w-full text-left min-w-[400px]">
            <thead>
              <tr style={{ backgroundColor: college.primaryColor }}>
                <th className="font-hind font-semibold text-[11.5px] sm:text-[12px] text-white/90 px-3 sm:px-4 py-3 uppercase tracking-wide">Programme</th>
                <th className="font-hind font-semibold text-[11.5px] sm:text-[12px] text-white/90 px-3 sm:px-4 py-3 uppercase tracking-wide">Accreditation Period</th>
                <th className="font-hind font-semibold text-[11.5px] sm:text-[12px] text-white/90 px-3 sm:px-4 py-3 uppercase tracking-wide">Status</th>
              </tr>
            </thead>
            <tbody>
              {NBA_STATUS.map(({ programme, period }, i) => (
                <tr key={programme} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="font-dm-sans text-[12px] sm:text-[12.5px] text-gray-800 px-3 sm:px-4 py-2.5">{programme}</td>
                  <td className="font-dm-sans text-[12px] sm:text-[12.5px] text-gray-700 px-3 sm:px-4 py-2.5">{period}</td>
                  <td className="px-3 sm:px-4 py-2.5">
                    <span className="font-dm-sans text-[11px] font-semibold px-2 py-0.5 rounded-full bg-green-50 text-green-700 whitespace-nowrap">
                      Accredited
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* NBA PDFs */}
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
          {NBA_DOCS.map(({ label, url }) => (
            <DocRow key={label} label={label} url={url} />
          ))}
        </div>
      </div>

      {/* 5. Balance Sheets */}
      <DocSection title="Annual Balance Sheets" rows={BALANCE_SHEETS} />

      {/* 6. UGC / Deemed University Documents */}
      <DocSection title="UGC — Deemed University Application Documents" rows={UGC_DOCS} />

      {/* Contact */}
      <div className="p-4 sm:p-5 rounded-xl bg-gray-50 border border-gray-200 mt-4">
        <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
          For regulatory compliance queries, contact the <strong>Office of the Principal</strong> or the <strong>IQAC Coordinator</strong>.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 font-dm-sans text-[13px] text-gray-700">
          <span>Email:</span>
          <a href="mailto:principal@griet.ac.in" className="font-semibold hover:underline break-all" style={{ color: college.accentColor }}>principal@griet.ac.in</a>
          <span className="hidden sm:inline text-gray-400">|</span>
          <a href="mailto:iqac@griet.ac.in" className="font-semibold hover:underline break-all" style={{ color: college.accentColor }}>iqac@griet.ac.in</a>
          <span className="hidden sm:inline text-gray-400">|</span>
          <span>Phone: <strong>{college.phone}</strong></span>
        </div>
      </div>

    </AcademicsLayout>
  );
}
