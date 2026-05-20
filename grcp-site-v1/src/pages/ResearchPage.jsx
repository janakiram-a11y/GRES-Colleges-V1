import { useParams, Navigate } from 'react-router-dom';
import college from '../theme';
import AdminSidebarLayout from '../components/AdminSidebarLayout';

const { research: d } = college;
const primary = college.primaryColor;
const accent  = college.greenAccent;

// ── Shared primitives ─────────────────────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      {label && (
        <span
          className="font-dm-sans font-semibold text-[11px] tracking-[0.2em] uppercase"
          style={{ color: `${primary}80` }}
        >
          {label}
        </span>
      )}
      <h2 className="font-hind font-bold text-[26px] leading-tight" style={{ color: primary }}>
        {title}
      </h2>
      <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: accent }} />
    </div>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="font-hind font-semibold text-[17px] mb-5 mt-8 first:mt-0" style={{ color: primary }}>
      {children}
    </h3>
  );
}

function InfoCallout({ children }) {
  return (
    <div
      className="rounded-xl p-5 flex items-start gap-3 mt-6"
      style={{ backgroundColor: `${primary}08`, borderLeft: `4px solid ${accent}` }}
    >
      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
      <p className="font-dm-sans text-[14px] leading-[24px] text-[#4B5563]">{children}</p>
    </div>
  );
}

function DataTable({ rows, columns }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
      <table className="w-full min-w-[540px]">
        <thead>
          <tr style={{ backgroundColor: accent }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left font-dm-sans font-semibold text-[12px] text-white px-5 py-3.5 tracking-wide"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="font-dm-sans text-[14px] px-5 py-3.5 align-top"
                  style={col.accent ? { color: primary, fontWeight: 600 } : { color: '#374151' }}
                >
                  {col.badge ? (
                    <StatusBadge status={row[col.key]} />
                  ) : (
                    row[col.key] ?? '—'
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatusBadge({ status }) {
  const isOngoing = status?.toLowerCase() === 'ongoing';
  const isApplied = status?.toLowerCase() === 'applied';
  const style = isOngoing
    ? { bg: '#F0FDF4', text: '#15803D' }
    : isApplied
    ? { bg: '#EFF6FF', text: '#1D4ED8' }
    : { bg: '#F3F4F6', text: '#6B7280' };

  return (
    <span
      className="inline-block px-2.5 py-0.5 rounded-full font-dm-sans font-semibold text-[11px] tracking-wide"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {status}
    </span>
  );
}

// ── Section: Overview ─────────────────────────────────────────────────────────

function OverviewContent() {
  return (
    <>
      <SectionHeader label="Research at GRCP" title="Research @ GRCP" />

      {/* Overview paragraph */}
      <p className="font-dm-sans text-[15px] leading-[28px] text-[#474747] mb-10">
        {d.overview}
      </p>

      {/* Stats strip */}
      <div
        className="rounded-2xl px-6 py-8 mb-10"
        style={{ backgroundColor: '#00873d' }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {d.highlights.map((h, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-1">
              <span
                className="font-hind font-bold text-[40px] leading-none text-white"
              >
                {h.count}
              </span>
              <span className="font-dm-sans text-[13px] text-white/70 mt-1">
                {h.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Research areas */}
      <SubHeading>Research Areas</SubHeading>
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        Our research spans Pharmaceutics, Pharmaceutical Chemistry, Pharmacognosy, and Pharmacology —
        with faculty actively publishing in indexed journals and guiding Ph.D scholars at Osmania University.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          {
            title: 'Pharmaceutics',
            desc: 'Novel drug delivery systems, nanoparticulate formulations, biopharmaceutics, and pharmaceutical technology for improved therapeutic outcomes.',
          },
          {
            title: 'Pharmaceutical Chemistry',
            desc: 'Medicinal chemistry, drug synthesis, spectroscopic characterization, and computational drug design for new chemical entities.',
          },
          {
            title: 'Pharmacognosy',
            desc: 'Isolation and characterization of bioactive compounds from natural sources, herbal drug standardization, and ethnopharmacology.',
          },
          {
            title: 'Pharmacology',
            desc: 'Neuropharmacology, anti-cancer drug screening, toxicology studies, and clinical pharmacology research.',
          },
        ].map((area, i) => (
          <div
            key={i}
            className="flex gap-4 p-5 rounded-xl border"
            style={{ borderColor: `${primary}14` }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 font-dm-sans font-bold text-[12px] text-white"
              style={{ backgroundColor: primary }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <p className="font-dm-sans font-semibold text-[14px] mb-1" style={{ color: primary }}>
                {area.title}
              </p>
              <p className="font-dm-sans text-[13px] leading-[22px] text-[#6B7280]">{area.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <InfoCallout>
        Faculty and postgraduate students interested in collaborative research may contact the Research
        Cell through the Principal's office at{' '}<strong>{college.phone}</strong>.
      </InfoCallout>
    </>
  );
}

// ── Section: Ph.D Guideships ──────────────────────────────────────────────────

function PhdGuideships() {
  return (
    <>
      <SectionHeader label="Doctoral Research" title="Ph.D Guideships" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        GRCP faculty recognized as Ph.D guides at Osmania University actively supervise doctoral scholars
        across multiple departments. Below is the list of recognized guides and their research areas.
      </p>

      <DataTable
        rows={d.phdGuideships}
        columns={[
          { key: 'department', label: 'Department', accent: true },
          { key: 'guide',      label: 'Guide' },
          { key: 'university', label: 'University' },
          { key: 'areas',      label: 'Research Areas' },
        ]}
      />

      <InfoCallout>
        Scholars interested in pursuing Ph.D research under GRCP faculty may contact the Research Cell.
        Eligibility is as per Osmania University Ph.D regulations.
      </InfoCallout>
    </>
  );
}

// ── Section: Publications ─────────────────────────────────────────────────────

function PublicationsContent() {
  return (
    <>
      <SectionHeader label="Research Output" title="Publications" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        GRCP faculty and postgraduate students publish research in reputed national and international
        pharmaceutical journals. A selection of recent publications is listed below.
      </p>

      {/* Summary stat chips */}
      <div className="flex flex-wrap gap-4 mb-10">
        {[
          { label: 'Total Publications', value: '50+' },
          { label: 'Indexed Journals', value: 'Scopus / PubMed' },
          { label: 'Years of Research', value: '2020–2025' },
        ].map((s) => (
          <div
            key={s.label}
            className="flex-1 min-w-[140px] rounded-xl p-4"
            style={{ backgroundColor: `${primary}07`, border: `1px solid ${primary}14` }}
          >
            <p className="font-hind font-bold text-[20px]" style={{ color: primary }}>{s.value}</p>
            <p className="font-dm-sans text-[12px] text-[#6B7280] mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Publication cards */}
      <div className="flex flex-col gap-4">
        {d.publications.map((pub, i) => (
          <div
            key={i}
            className="rounded-xl p-5 border bg-white"
            style={{ borderColor: `${primary}10`, borderLeft: `4px solid ${accent}` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="inline-block px-2.5 py-0.5 rounded-full font-dm-sans font-semibold text-[11px] tracking-wide"
                style={{ backgroundColor: `${accent}18`, color: '#7a5a0a' }}
              >
                {pub.year}
              </span>
            </div>
            <p className="font-dm-sans font-semibold text-[15px] leading-[24px] text-[#1F2937] mb-2">
              {pub.title}
            </p>
            <p className="font-dm-sans text-[13px] text-[#6B7280] mb-1">
              <span className="font-medium text-[#374151]">Journal: </span>{pub.journal}
            </p>
            <p className="font-dm-sans text-[13px] text-[#6B7280]">
              <span className="font-medium text-[#374151]">Authors: </span>{pub.authors}
            </p>
          </div>
        ))}
      </div>

      <InfoCallout>
        A complete list of publications with DOI links is available in the GRCP IQAC report and upon
        request from the Research Cell. Faculty are encouraged to publish in SCOPUS/WoS-indexed journals.
      </InfoCallout>
    </>
  );
}

// ── Section: Patents ──────────────────────────────────────────────────────────

function PatentsContent() {
  return (
    <>
      <SectionHeader label="Intellectual Property" title="Patents" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        GRCP faculty and researchers have filed patents for novel pharmaceutical inventions contributing
        to the intellectual property portfolio of the institution.
      </p>

      <div className="flex flex-col gap-4">
        {d.patents.map((patent, i) => (
          <div
            key={i}
            className="rounded-xl border p-6 bg-white hover:shadow-sm transition-shadow"
            style={{ borderColor: `${primary}14` }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <h3 className="font-hind font-bold text-[16px] leading-snug flex-1" style={{ color: primary }}>
                {patent.title}
              </h3>
              <div className="flex items-center gap-2 flex-shrink-0">
                <StatusBadge status={patent.status} />
                <span
                  className="font-dm-sans font-semibold text-[12px] px-2.5 py-0.5 rounded-full"
                  style={{ backgroundColor: `${primary}0E`, color: primary }}
                >
                  {patent.year}
                </span>
              </div>
            </div>
            <p className="font-dm-sans text-[13px] text-[#6B7280]">
              <span className="font-medium text-[#374151]">Inventors: </span>{patent.inventors}
            </p>
          </div>
        ))}
      </div>

      <InfoCallout>
        GRCP encourages faculty to file patents for research outcomes. The institution provides support for
        IP filing through the administration office in coordination with Osmania University.
      </InfoCallout>
    </>
  );
}

// ── Section: Sponsored Projects ───────────────────────────────────────────────

function SponsoredProjectsContent() {
  return (
    <>
      <SectionHeader label="Funded Research" title="Sponsored Projects / Consultancy" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        GRCP faculty have secured research grants from government funding bodies for sponsored projects
        in pharmaceutical sciences. These projects strengthen the research culture and contribute to
        societal healthcare needs.
      </p>

      <DataTable
        rows={d.sponsoredProjects}
        columns={[
          { key: 'title',          label: 'Project Title', accent: true },
          { key: 'fundingAgency',  label: 'Funding Agency' },
          { key: 'pi',             label: 'Principal Investigator' },
          { key: 'amount',         label: 'Amount' },
          { key: 'status',         label: 'Status', badge: true },
        ]}
      />

      <InfoCallout>
        Faculty interested in applying for research grants (DST, SERB, ICMR, AICTE etc.) may contact the
        Research Cell for guidance on proposal preparation and submission.
      </InfoCallout>
    </>
  );
}

// ── Section registry ──────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'overview',           path: '/research',                       label: 'Research @ GRCP',              content: <OverviewContent /> },
  { id: 'phd-guideships',     path: '/research/phd-guideships',        label: 'Ph.D Guideships',              content: <PhdGuideships /> },
  { id: 'publications',       path: '/research/publications',          label: 'Publications',                 content: <PublicationsContent /> },
  { id: 'patents',            path: '/research/patents',               label: 'Patents',                      content: <PatentsContent /> },
  { id: 'sponsored-projects', path: '/research/sponsored-projects',    label: 'Sponsored Projects',           content: <SponsoredProjectsContent /> },
];

// ── Page component ────────────────────────────────────────────────────────────

export default function ResearchPage() {
  const { section } = useParams();
  const activeId = section || 'overview';
  const currentSection = SECTIONS.find((s) => s.id === activeId);

  if (!currentSection) {
    return <Navigate to="/research" replace />;
  }

  return (
    <AdminSidebarLayout
      college={college}
      pageTitle="Research"
      pageSubtitle="Publications, Ph.D guideships, patents, and sponsored research projects"
      pageBreadcrumb={['Research', currentSection.label]}
      sections={SECTIONS}
      currentSection={currentSection}
    />
  );
}
