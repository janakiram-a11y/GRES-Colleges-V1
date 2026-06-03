import { useParams } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';
import AdminSidebarLayout from '../components/AdminSidebarLayout';

const pc = college.primaryColor;   // #2D7A50
const ac = college.greenAccent;    // #C72235

// ── Section config ────────────────────────────────────────────────────────────

const sectionConfig = {
  chairman: {
    title: 'Chairman',
    subtitle: 'Leadership & Vision at Gokaraju Rangaraju College of Pharmacy',
    breadcrumb: ['Administration', 'Chairman'],
  },
  'vice-president': {
    title: 'Vice President',
    subtitle: 'Leadership & Vision at Gokaraju Rangaraju College of Pharmacy',
    breadcrumb: ['Administration', 'Vice President'],
  },
  principal: {
    title: 'Principal',
    subtitle: 'Academic Leadership at Gokaraju Rangaraju College of Pharmacy',
    breadcrumb: ['Administration', 'Principal'],
  },
  'governing-body': {
    title: 'Governing Body',
    subtitle: 'Governance structure of Gokaraju Rangaraju College of Pharmacy',
    breadcrumb: ['Administration', 'Governing Body'],
  },
  idmc: {
    title: 'IDMC',
    subtitle: 'Institutional Development and Monitoring Committee',
    breadcrumb: ['Administration', 'IDMC'],
  },
  'org-chart': {
    title: 'Organizational Chart',
    subtitle: 'Administrative hierarchy of Gokaraju Rangaraju College of Pharmacy',
    breadcrumb: ['Administration', 'Organizational Chart'],
  },
};

// ── Shared sub-components ─────────────────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="mb-6">
      {label && (
        <span
          className="font-dm-sans font-semibold text-[12px] uppercase tracking-[2px] mb-2 block"
          style={{ color: ac }}
        >
          {label}
        </span>
      )}
      <h2
        className="font-hind font-bold text-[26px] leading-[34px] pb-3"
        style={{
          color: pc,
          borderBottom: `3px solid ${ac}`,
          display: 'inline-block',
        }}
      >
        {title}
      </h2>
    </div>
  );
}

// ── Profile card (matches Recreated AdminProfile.jsx) ─────────────────────────

function ProfileCard({ person, institution, qualifications, bio }) {
  const name = person?.fullName || person?.name || '';
  const title = person?.title || '';
  const imgSrc = person?.img || null;

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${pc}18`, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
    >
      {/* Photo + header info */}
      <div className="flex flex-col md:flex-row gap-8 p-8 items-start">
        {/* Photo */}
        <div className="flex-shrink-0">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={name}
              style={{
                width: 220,
                height: 'auto',
                objectFit: 'cover',
                borderRadius: 12,
                border: `2px solid ${pc}20`,
                display: 'block',
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextSibling;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
          ) : null}
          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: 12,
              border: `2px solid ${pc}20`,
              backgroundColor: `${pc}18`,
              display: imgSrc ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 72,
              fontWeight: 700,
              color: pc,
              fontFamily: 'Hind, sans-serif',
            }}
          >
            {name.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Name / title / qualifications */}
        <div className="flex-1 min-w-0">
          <h3
            className="font-hind font-bold text-[28px] leading-tight mb-1"
            style={{ color: pc }}
          >
            {name}
          </h3>
          {title && (
          <p
            className="font-dm-sans font-semibold text-[15px] mb-1"
            style={{ color: ac }}
          >
            {title}
          </p>
          )}
          {institution && (
            <p className="font-dm-sans text-[14px] text-[#555] mb-3">
              {institution}
            </p>
          )}
          {qualifications && qualifications.length > 0 && (
            <ul className="space-y-1 mt-3">
              {qualifications.map((q, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]"
                    style={{ backgroundColor: pc }}
                  />
                  <span className="font-dm-sans text-[14px] text-[#474747]">{q}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: `${pc}18`, marginLeft: 32, marginRight: 32 }} />

      {/* Bio paragraphs */}
      <div className="p-8 space-y-4">
        {bio.map((para, i) => (
          <p key={i} className="font-dm-sans text-[15px] leading-[27px] text-[#474747]">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

// ── Section: Chairman ─────────────────────────────────────────────────────────

function ChairmanSection() {
  return (
    <div className="space-y-6">
      <SectionHeader label="Administration" title="Chairman" />
      <ProfileCard
        person={college.administration.chairman}
        institution="Gokaraju Rangaraju College of Pharmacy"
        qualifications={[]}
        bio={college.administration.chairman.bio}
      />
    </div>
  );
}

// ── Section: Vice President ───────────────────────────────────────────────────

function VicePresidentSection() {
  return (
    <div className="space-y-6">
      <SectionHeader label="Administration" title="Vice President" />
      <ProfileCard
        person={college.administration.vicePresident}
        qualifications={['Chemical Engineer']}
        bio={college.administration.vicePresident.bio}
      />
    </div>
  );
}

// ── Section: Principal ────────────────────────────────────────────────────────

function PrincipalSection() {
  return (
    <div className="space-y-6">
      <SectionHeader label="Administration" title="Principal" />
      <ProfileCard
        person={college.administration.principal}
        qualifications={[
          'B.Pharm (2000) – Mangalore University',
          'M.Pharm (2003) – Rajiv Gandhi University of Health Sciences',
          'Ph.D. (2011) – Andhra University',
          'CMI Level 5 Certificate in Management and Leadership – Chartered Management Institute, U.K.',
        ]}
        bio={college.administration.principal.bio}
      />
    </div>
  );
}

// ── Section: Governing Body ───────────────────────────────────────────────────

function GoverningBodySection() {
  const { governingBody } = college.administration;
  return (
    <div className="space-y-6">
      <SectionHeader label="Governance" title="Governing Body" />
      {governingBody.year && (
        <p className="font-dm-sans font-semibold text-[13px]" style={{ color: ac }}>
          Academic Year: {governingBody.year}
        </p>
      )}
      <div className="overflow-x-auto rounded-xl border" style={{ borderColor: `${pc}18` }}>
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ backgroundColor: ac }}>
              {['S.No.', 'Photo', 'Name', 'Designation', 'Category'].map((h) => (
                <th
                  key={h}
                  className="font-dm-sans font-semibold text-[13px] text-white text-left px-5 py-3.5 first:rounded-tl-xl last:rounded-tr-xl"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {governingBody.members.map((m, i) => (
              <tr
                key={i}
                style={{ backgroundColor: i % 2 === 0 ? '#FAFAFA' : '#FFFFFF' }}
              >
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5 border-b align-middle" style={{ borderColor: `${pc}10` }}>
                  {m.no}
                </td>
                <td className="px-5 py-3.5 border-b align-middle" style={{ borderColor: `${pc}10` }}>
                  {m.photo && (
                    <img
                      src={m.photo}
                      alt={m.name}
                      style={{ width: 70, height: 80, objectFit: 'cover', borderRadius: 4, display: 'block' }}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                </td>
                <td className="px-5 py-3.5 border-b align-middle" style={{ borderColor: `${pc}10` }}>
                  <span className="font-dm-sans font-semibold text-[14px]" style={{ color: pc }}>
                    {m.name}
                  </span>
                  {(m.org || m.details) && (
                    <span className="block font-dm-sans text-[12px] text-[#6A7282] mt-0.5 whitespace-pre-line">
                      {m.org || m.details}
                    </span>
                  )}
                </td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5 border-b align-middle" style={{ borderColor: `${pc}10` }}>
                  {m.role}
                </td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5 border-b align-middle" style={{ borderColor: `${pc}10` }}>
                  {m.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Section: IDMC ─────────────────────────────────────────────────────────────

function IdmcSection() {
  const { idmc } = college.administration;
  return (
    <div className="space-y-6">
      <SectionHeader label="Institutional Committee" title="IDMC" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747]">
        {idmc.description}
      </p>
      <div className="overflow-x-auto rounded-xl border" style={{ borderColor: `${pc}18` }}>
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ backgroundColor: ac }}>
              {['S.No.', 'Name', 'Designation', 'Position', 'Email'].map((h) => (
                <th
                  key={h}
                  className="font-dm-sans font-semibold text-[13px] text-white text-left px-5 py-3.5 first:rounded-tl-xl last:rounded-tr-xl"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {idmc.members.map((m, i) => (
              <tr
                key={i}
                style={{ backgroundColor: i % 2 === 0 ? '#FAFAFA' : '#FFFFFF' }}
              >
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5 border-b" style={{ borderColor: `${pc}10` }}>
                  {i + 1}.
                </td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5 border-b" style={{ borderColor: `${pc}10` }}>
                  {m.name}
                </td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5 border-b" style={{ borderColor: `${pc}10` }}>
                  {m.designation}
                </td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5 border-b" style={{ borderColor: `${pc}10` }}>
                  {m.role}
                </td>
                <td className="px-5 py-3.5 border-b" style={{ borderColor: `${pc}10` }}>
                  {m.email ? (
                    <a
                      href={`mailto:${m.email}`}
                      className="font-dm-sans text-[13px] underline"
                      style={{ color: pc }}
                    >
                      {m.email}
                    </a>
                  ) : (
                    <span className="font-dm-sans text-[14px] text-[#474747]">&mdash;</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Section: Org Chart ────────────────────────────────────────────────────────

function OrgChartSection() {
  return (
    <div className="space-y-6">
      <SectionHeader label="Structure" title="Organizational Chart" />
      <div>
        <img
          src="https://grcp.ac.in/images/Organizational_Chart.png?v=0.1"
          alt="Organizational Chart"
          style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = document.createElement('p');
            fallback.style.cssText = 'font-family:DM Sans,sans-serif;font-size:15px;color:#474747;text-align:center;padding:40px 0;';
            fallback.textContent = 'Organizational chart image is currently unavailable.';
            e.currentTarget.parentNode.appendChild(fallback);
          }}
        />
      </div>
    </div>
  );
}

const sectionRegistry = {
  chairman: { label: 'Chairman', content: <ChairmanSection /> },
  'vice-president': { label: 'Vice President', content: <VicePresidentSection /> },
  principal: { label: 'Principal', content: <PrincipalSection /> },
  'governing-body': { label: 'Governing Body', content: <GoverningBodySection /> },
  idmc: { label: 'IDMC', content: <IdmcSection /> },
  'org-chart': { label: 'Organizational Chart', content: <OrgChartSection /> },
};

export default function AdministrationPage() {
  const { section = 'chairman' } = useParams();
  const currentSection = sectionRegistry[section] || sectionRegistry.chairman;
  const config = sectionConfig[section] || sectionConfig.chairman;

  return (
    <AdminSidebarLayout
      college={college}
      pageTitle={config.title}
      pageSubtitle={config.subtitle}
      pageBreadcrumb={config.breadcrumb}
      currentSection={currentSection}
    />
  );
}
