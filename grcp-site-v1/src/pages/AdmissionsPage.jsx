import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

// ── Design tokens ──────────────────────────────────────────────────────────────

const thStyle = {
  backgroundColor: college.greenAccent,
  color: '#ffffff',
  padding: '11px 16px',
  fontFamily: 'inherit',
  fontSize: '13px',
  fontWeight: 600,
  textAlign: 'left',
  borderRight: '1px solid rgba(255,255,255,0.15)',
  whiteSpace: 'nowrap',
};

const tdStyle = {
  padding: '10px 16px',
  fontSize: '13px',
  color: '#374151',
  borderBottom: '1px solid #e5e7eb',
  borderRight: '1px solid #e5e7eb',
};

// ── Shared sub-components ──────────────────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="mb-8">
      {label && (
        <span
          className="font-display font-bold text-type-cap uppercase tracking-[0.12em] mb-2 block"
          style={{ color: college.greenAccent }}
        >
          {label}
        </span>
      )}
      <h2
        className="font-display font-semibold text-type-h2-mob pb-3"
        style={{
          color: college.primaryColor,
          borderBottom: `3px solid ${college.greenAccent}`,
          display: 'inline-block',
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function SubHeading({ children }) {
  return (
    <h3
      className="font-display font-bold text-type-body-lg mb-4 mt-6"
      style={{ color: college.primaryColor }}
    >
      {children}
    </h3>
  );
}

function IntakeBox({ text }) {
  return (
    <div
      className="font-display text-type-ui font-semibold px-5 py-3 rounded mb-6"
      style={{
        backgroundColor: `${college.primaryColor}0D`,
        borderLeft: `4px solid ${college.primaryColor}`,
        color: college.primaryColor,
      }}
    >
      Intake: {text}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0 mt-[8px]"
            style={{ backgroundColor: college.greenAccent }}
          />
          <span className="font-body text-type-body-xs text-[#474747]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb' }}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} style={thStyle}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
              <td style={{ ...tdStyle, fontWeight: 600, color: college.primaryColor }}>
                {row.label}
              </td>
              {row.values.map((val, j) => (
                <td key={j} style={tdStyle}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Section: Procedure ─────────────────────────────────────────────────────────

function ProcedureProgram({ heading, data, showLateralEntry }) {
  return (
    <div className="mb-12">
      <SubHeading>{heading}</SubHeading>
      <IntakeBox text={data.intake} />

      <h4
        className="font-display font-semibold text-type-body mb-3"
        style={{ color: college.primaryColor }}
      >
        {data.firstYear.heading}
      </h4>
      <div className="space-y-3 mb-4">
        {data.firstYear.items.map((item, i) => (
          <div key={i} className="flex gap-3 font-body text-type-body-xs text-[#474747]">
            <span className="font-semibold flex-shrink-0" style={{ color: college.primaryColor }}>
              {item.label}
            </span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {data.firstYear.notes && data.firstYear.notes.length > 0 && (
        <div
          className="px-4 py-3 rounded mt-4"
          style={{
            backgroundColor: `${college.primaryColor}08`,
            borderLeft: `3px solid ${college.greenAccent}`,
          }}
        >
          <p
            className="font-display font-bold text-type-cap uppercase tracking-[0.12em] mb-2"
            style={{ color: college.greenAccent }}
          >
            Notes
          </p>
          <BulletList items={data.firstYear.notes} />
        </div>
      )}

      {showLateralEntry && data.lateralEntry && (
        <div className="mt-8">
          <h4
            className="font-display font-semibold text-type-body mb-3"
            style={{ color: college.primaryColor }}
          >
            {data.lateralEntry.heading}
          </h4>
          <div className="space-y-3">
            {data.lateralEntry.items.map((item, i) => (
              <div key={i} className="flex gap-3 font-body text-type-body-xs text-[#474747]">
                <span className="font-semibold flex-shrink-0" style={{ color: college.primaryColor }}>
                  {item.label}
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ProcedureContent() {
  const { bPharm, mPharm } = college.admissions.procedure;
  return (
    <div>
      <SectionHeader label="Admissions" title="Admission Procedure" />
      <ProcedureProgram
        heading="Admission Procedure of B. Pharmacy"
        data={bPharm}
        showLateralEntry
      />
      <ProcedureProgram
        heading="Admission Procedure of M. Pharmacy"
        data={mPharm}
        showLateralEntry={false}
      />
    </div>
  );
}

// ── Section: Fees ──────────────────────────────────────────────────────────────

function FeeBlock({ title, headers, rows }) {
  return (
    <div className="mb-8">
      <h3
        className="font-display font-semibold text-type-body-lg mb-3"
        style={{ color: college.primaryColor }}
      >
        {title}
      </h3>
      <DataTable headers={headers} rows={rows} />
    </div>
  );
}

function FeesContent() {
  return (
    <div>
      <SectionHeader label="Admissions" title="Course Fees" />

      <SubHeading>B. Pharmacy Fees</SubHeading>
      {college.admissions.bPharmFees.map((entry, i) => (
        <FeeBlock
          key={i}
          title={entry.title}
          headers={entry.headers}
          rows={entry.rows}
        />
      ))}

      <div className="mt-10">
        <SubHeading>M. Pharmacy Fees</SubHeading>
        {college.admissions.mPharmFees.map((entry, i) => (
          <FeeBlock
            key={i}
            title={entry.title}
            headers={entry.headers}
            rows={entry.rows}
          />
        ))}
      </div>
    </div>
  );
}

// ── Section: EAMCET Ranks ──────────────────────────────────────────────────────

function EamcetRankContent() {
  const eamcetCols = ['Stream', 'OC', 'BC-A', 'BC-B', 'BC-C', 'BC-D', 'BC-E', 'SC', 'ST'];

  return (
    <div>
      <SectionHeader label="Admissions" title="EAMCET Last Ranks" />
      {college.admissions.eamcetYears.map((yearData) => (
        <div key={yearData.year} className="mb-10">
          <h3
            className="font-display font-semibold text-type-body-lg mb-3"
            style={{ color: college.primaryColor }}
          >
            Academic Year: {yearData.year}
          </h3>
          <div className="overflow-x-auto mb-2">
            <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb' }}>
              <thead>
                <tr>
                  {eamcetCols.map((col) => (
                    <th key={col} style={thStyle}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {yearData.rows.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                    <td style={{ ...tdStyle, fontWeight: 600, color: college.primaryColor, whiteSpace: 'nowrap' }}>
                      {row.stream}
                    </td>
                    <td style={tdStyle}>{row.OC}</td>
                    <td style={tdStyle}>{row.BCA}</td>
                    <td style={tdStyle}>{row.BCB}</td>
                    <td style={tdStyle}>{row.BCC}</td>
                    <td style={tdStyle}>{row.BCD}</td>
                    <td style={tdStyle}>{row.BCE}</td>
                    <td style={tdStyle}>{row.SC}</td>
                    <td style={tdStyle}>{row.ST}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Section: PGECET Ranks ──────────────────────────────────────────────────────

function PgecetSpecialization({ label, data }) {
  return (
    <div className="mb-10">
      <SubHeading>{label}</SubHeading>
      {data.map((yearEntry) => (
        <div key={yearEntry.year} className="mb-6">
          <h4
            className="font-display font-semibold text-type-body mb-3 pl-3"
            style={{
              color: college.primaryColor,
              borderLeft: `3px solid ${college.primaryColor}`,
            }}
          >
            {yearEntry.year}
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb' }}>
              <thead>
                <tr>
                  {['Gender', 'Category', 'Last Rank'].map((col) => (
                    <th key={col} style={thStyle}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {yearEntry.entries.map((entry, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                    <td style={{ ...tdStyle, fontWeight: 600 }}>{entry.gender}</td>
                    <td style={tdStyle}>{entry.category}</td>
                    <td style={{ ...tdStyle, fontWeight: 600, color: college.primaryColor }}>
                      {entry.rank}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

function PgecetRankContent() {
  const { pharmaceutics, pharmaceuticalAnalysis, pharmacology } = college.admissions.pgecetRanks;
  return (
    <div>
      <SectionHeader label="Admissions" title="PGECET Last Ranks" />
      <div
        className="mb-8 flex items-center gap-3 px-4 py-3 rounded"
        style={{
          backgroundColor: `${college.greenAccent}15`,
          border: `1px solid ${college.greenAccent}40`,
        }}
      >
        <span className="font-display font-bold text-type-ui-sm" style={{ color: college.primaryColor }}>
          TG PGECET Counselling Code:
        </span>
        <span
          className="font-display font-bold text-type-body px-3 py-0.5 rounded"
          style={{ backgroundColor: college.primaryColor, color: '#ffffff' }}
        >
          GRCP1
        </span>
      </div>
      <PgecetSpecialization label="Pharmaceutics" data={pharmaceutics} />
      <PgecetSpecialization label="Pharmaceutical Analysis" data={pharmaceuticalAnalysis} />
      <PgecetSpecialization label="Pharmacology" data={pharmacology} />
    </div>
  );
}

// ── Section config ─────────────────────────────────────────────────────────────

const sectionConfig = {
  'admission-procedure': {
    title: 'Admission Procedure',
    subtitle: 'Step-by-step guide to join B. Pharmacy and M. Pharmacy programs at GRCP',
    breadcrumb: ['Admissions', 'Admission Procedure'],
  },
  'course-fees': {
    title: 'Course Fees',
    subtitle: 'Transparent fee structures for B. Pharmacy and M. Pharmacy programs',
    breadcrumb: ['Admissions', 'Course Fees'],
  },
  eamcet: {
    title: 'EAMCET Last Ranks',
    subtitle: 'Historical EAPCET last rank data for B. Pharmacy admissions at GRCP',
    breadcrumb: ['Admissions', 'EAMCET Last Ranks'],
  },
  pgecet: {
    title: 'PGECET Last Ranks',
    subtitle: 'Historical TG PGECET last rank data for M. Pharmacy admissions at GRCP',
    breadcrumb: ['Admissions', 'PGECET Last Ranks'],
  },
};

const sectionContent = {
  'admission-procedure': <ProcedureContent />,
  'course-fees': <FeesContent />,
  eamcet: <EamcetRankContent />,
  pgecet: <PgecetRankContent />,
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AdmissionsPage() {
  const { section = 'admission-procedure' } = useParams();
  const location = useLocation();
  const config = sectionConfig[section] || sectionConfig['admission-procedure'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title={config.title}
        subtitle={config.subtitle}
        breadcrumb={config.breadcrumb}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">
          {sectionContent[section] || sectionContent['admission-procedure']}
        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
