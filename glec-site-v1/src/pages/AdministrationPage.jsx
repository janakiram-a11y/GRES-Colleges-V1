import { useParams, Navigate } from 'react-router-dom';
import college from '../theme';
import AdminSidebarLayout from '../components/AdminSidebarLayout';

// ── Shared primitive sub-components ──────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      {label && (
        <span
          className="font-dm-sans font-semibold text-[11px] tracking-[0.2em] uppercase"
          style={{ color: `${college.primaryColor}80` }}
        >
          {label}
        </span>
      )}
      <h2
        className="font-hind font-bold text-[26px] leading-tight"
        style={{ color: college.primaryColor }}
      >
        {title}
      </h2>
      <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: college.accentColor }} />
    </div>
  );
}

function SectionDesc({ text }) {
  return (
    <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747] mb-8">
      {text}
    </p>
  );
}

function ObjectivesList({ items }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: college.accentColor }}
          />
          <span className="font-dm-sans font-normal text-[15px] leading-[26px] text-[#474747]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CommitteeTable({ members, columns }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
      <table className="w-full min-w-[480px]">
        <thead>
          <tr style={{ backgroundColor: college.primaryColor }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left font-dm-sans font-semibold text-[13px] text-white px-5 py-3.5"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((m, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="font-dm-sans font-normal text-[14px] text-[#374151] px-5 py-3.5"
                  style={col.accent ? { color: college.primaryColor, fontWeight: 600 } : {}}
                >
                  {m[col.key] ?? '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DownloadButton({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-dm-sans font-semibold text-[13px] text-white transition-colors self-start"
      style={{ backgroundColor: college.accentColor }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a81b2a')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = college.accentColor)}
    >
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 2v10m0 0l-3-3m3 3l3-3M3 15v2a1 1 0 001 1h12a1 1 0 001-1v-2"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </a>
  );
}

// ── Section content components ────────────────────────────────────────────────

function ManagementContent() {
  return (
    <>
      <SectionHeader label="Leadership" title="Management" />
      <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747] mb-10">
        GLEC is led by a distinguished management team under the Gokaraju Rangaraju Educational Society,
        comprising visionary industrialists, academic leaders, and experienced administrators committed to
        delivering world-class engineering education.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {college.leadership.map((person) => (
          <div
            key={person.name}
            className="flex flex-col gap-4 p-6 rounded-2xl border border-[#E5E7EB] bg-white hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <img
                src={person.image}
                alt={person.name}
                className="w-16 h-16 rounded-xl object-cover object-top flex-shrink-0"
                style={{ boxShadow: `0px 4px 12px -2px ${college.primaryColor}22` }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div>
                <h3
                  className="font-hind font-bold text-[16px] leading-snug"
                  style={{ color: college.primaryColor }}
                >
                  {person.name}
                </h3>
                <p
                  className="font-dm-sans font-semibold text-[12px] mt-0.5"
                  style={{ color: college.accentColor }}
                >
                  {person.title}
                </p>
              </div>
            </div>
            <p className="font-dm-sans font-normal text-[13px] leading-[22px] text-[#6B7280]">
              {person.bio}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function SponsoringBodyContent() {
  const sb = college.sponsoringBody;
  return (
    <>
      <SectionHeader label="Administration" title="Sponsoring Body & MOAG" />
      <SectionDesc text={sb.description} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div>
          <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
            Society Objectives
          </p>
          <ObjectivesList items={sb.objectives} />
        </div>
        <div
          className="rounded-2xl p-6 flex flex-col gap-3"
          style={{ backgroundColor: `${college.primaryColor}08`, border: `1px solid ${college.primaryColor}15` }}
        >
          <p className="font-hind font-bold text-[15px]" style={{ color: college.primaryColor }}>
            {sb.societyName}
          </p>
          <p className="font-dm-sans font-normal text-[13px] leading-[22px] text-[#6B7280]">
            {sb.address}
          </p>
        </div>
      </div>
      <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
        Executive Committee Members
      </p>
      <CommitteeTable
        members={sb.members}
        columns={[
          { key: 'role', label: 'Designation', accent: true },
          { key: 'name', label: 'Name' },
        ]}
      />
    </>
  );
}

function GoverningBodyContent() {
  const gb = college.governingBody;
  return (
    <>
      <SectionHeader label={`Academic Year ${gb.year}`} title="Governing Body" />
      <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747] mb-8">
        The Governing Body of GLEC is the apex decision-making authority responsible for academic,
        administrative, and financial oversight of the institution, comprising representatives from the
        sponsoring society, university nominees, faculty, and industry experts.
      </p>
      <CommitteeTable
        members={gb.members}
        columns={[
          { key: 'no', label: 'S.No.' },
          { key: 'name', label: 'Name', accent: true },
          { key: 'role', label: 'Role' },
          { key: 'category', label: 'Category' },
          { key: 'email', label: 'Email' },
        ]}
      />
    </>
  );
}

function RegistrarContent() {
  const r = college.registrar;
  return (
    <>
      <SectionHeader label="Administration" title="Registrar" />
      <div className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl border border-[#E5E7EB] bg-white">
        <div className="flex-shrink-0">
          <img
            src={r.image}
            alt={r.name}
            className="w-[160px] h-[180px] object-cover object-top rounded-xl"
            style={{ boxShadow: '0px 8px 24px -4px rgba(91,17,39,0.12)' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <div>
            <h3 className="font-hind font-bold text-[22px] leading-tight" style={{ color: college.primaryColor }}>
              {r.fullName}
            </h3>
            <p className="font-dm-sans font-semibold text-[14px] mt-1" style={{ color: college.accentColor }}>
              {r.title}
            </p>
          </div>
          {r.bio.map((para, i) => (
            <p key={i} className="font-dm-sans font-normal text-[14px] leading-[26px] text-[#474747]">
              {para}
            </p>
          ))}
          <div>
            <p className="font-hind font-semibold text-[13px] mb-3" style={{ color: college.primaryColor }}>
              Qualifications
            </p>
            <ObjectivesList items={r.qualifications} />
          </div>
        </div>
      </div>
    </>
  );
}

function PrincipalContent() {
  const pp = college.principalProfile;
  return (
    <>
      <SectionHeader label="Academic Leadership" title="Principal" />
      <div className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl border border-[#E5E7EB] bg-white">
        <div className="flex-shrink-0">
          <img
            src={pp.image}
            alt={pp.name}
            className="w-[160px] h-[180px] object-cover object-top rounded-xl"
            style={{ boxShadow: '0px 8px 24px -4px rgba(91,17,39,0.12)' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <div>
            <h3 className="font-hind font-bold text-[22px] leading-tight" style={{ color: college.primaryColor }}>
              {pp.fullName}
            </h3>
            <p className="font-dm-sans font-semibold text-[14px] mt-1" style={{ color: college.accentColor }}>
              {pp.title}
            </p>
            <span
              className="inline-flex mt-2 items-center px-3 py-1 rounded-full text-[12px] font-dm-sans font-semibold"
              style={{ backgroundColor: `${college.primaryColor}0F`, color: college.primaryColor }}
            >
              {pp.experience}
            </span>
          </div>
          {pp.bio.map((para, i) => (
            <p key={i} className="font-dm-sans font-normal text-[14px] leading-[26px] text-[#474747]">
              {para}
            </p>
          ))}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-hind font-semibold text-[13px] mb-3" style={{ color: college.primaryColor }}>
                Qualifications
              </p>
              <ObjectivesList items={pp.qualifications} />
            </div>
            <div>
              <p className="font-hind font-semibold text-[13px] mb-3" style={{ color: college.primaryColor }}>
                Research Interests
              </p>
              <ObjectivesList items={pp.researchInterests} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-hind font-semibold text-[13px] mb-3" style={{ color: college.primaryColor }}>
                Administrative Roles
              </p>
              <ObjectivesList items={pp.roles} />
            </div>
            <div>
              <p className="font-hind font-semibold text-[13px] mb-3" style={{ color: college.primaryColor }}>
                Patents
              </p>
              <ObjectivesList items={pp.patents} />
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div
              className="px-4 py-2 rounded-lg text-[13px] font-dm-sans font-semibold"
              style={{ backgroundColor: `${college.accentColor}18`, color: '#7a5a0a' }}
            >
              {pp.publications}
            </div>
            {pp.memberships.map((m) => (
              <div
                key={m}
                className="px-4 py-2 rounded-lg text-[13px] font-dm-sans font-semibold"
                style={{ backgroundColor: `${college.primaryColor}0F`, color: college.primaryColor }}
              >
                {m} Member
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function IdPlanContent() {
  const idp = college.idPlan;
  return (
    <>
      <SectionHeader label="Strategic Planning" title={idp.title} />
      <SectionDesc text={idp.description} />
      <div
        className="rounded-2xl p-6 flex flex-col gap-4 mb-10"
        style={{ backgroundColor: `${college.primaryColor}08`, border: `1px solid ${college.primaryColor}15` }}
      >
        <p className="font-hind font-bold text-[20px]" style={{ color: college.primaryColor }}>
          {idp.subtitle}
        </p>
        <p className="font-dm-sans font-normal text-[13px] leading-[22px] text-[#6B7280]">
          Strategic plan covering academic, infrastructure, research, and administrative development for 2021–2026.
        </p>
        <DownloadButton href={idp.pdfLink} label="Download IDP 2021–26" />
      </div>
      <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
        IDP Core Committee
      </p>
      <CommitteeTable
        members={idp.committee}
        columns={[
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'role', label: 'Role in IDP' },
        ]}
      />
    </>
  );
}

function AntiRaggingContent() {
  const ar = college.antiRagging;
  return (
    <>
      <SectionHeader label="Student Safety" title="Anti Ragging Committee" />
      <SectionDesc text={ar.description} />
      <CommitteeTable
        members={ar.members}
        columns={[
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'phone', label: 'Contact' },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div>
          <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
            Preventive Measures
          </p>
          <ObjectivesList items={ar.measures} />
        </div>
        <div>
          <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
            Emergency Helplines
          </p>
          <div className="flex flex-col gap-3">
            {ar.helplines.map((h, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-5 py-3 rounded-xl border"
                style={{ borderColor: `${college.primaryColor}20`, backgroundColor: `${college.primaryColor}06` }}
              >
                <span className="font-dm-sans font-medium text-[13px] text-[#374151]">{h.label}</span>
                <a
                  href={`tel:${h.number}`}
                  className="font-hind font-bold text-[16px]"
                  style={{ color: college.primaryColor }}
                >
                  {h.number}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function AntiSexualHarassmentContent() {
  const ash = college.antiSexualHarassment;
  return (
    <>
      <SectionHeader label="Student Safety" title="Anti Sexual Harassment Committee" />
      <SectionDesc text={ash.description} />
      <CommitteeTable
        members={ash.members}
        columns={[
          { key: 'sno', label: 'S.No.' },
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'phone', label: 'Contact' },
        ]}
      />
      <div className="mt-10">
        <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
          Committee Functions
        </p>
        <ObjectivesList items={ash.functions} />
      </div>
    </>
  );
}

function GrievanceContent() {
  const g = college.grievance;
  return (
    <>
      <SectionHeader label="Student Support" title="Grievance Redressal Policy" />
      <SectionDesc text={g.description} />
      <CommitteeTable
        members={g.members}
        columns={[
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'role', label: 'Role' },
        ]}
      />
      <div className="mt-10">
        <p className="font-hind font-semibold text-[15px] mb-6" style={{ color: college.primaryColor }}>
          How to Submit a Grievance
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {g.process.map((step, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 p-5 rounded-xl border"
              style={{ borderColor: `${college.primaryColor}18` }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-hind font-bold text-[14px] text-white flex-shrink-0"
                style={{ backgroundColor: college.primaryColor }}
              >
                {i + 1}
              </div>
              <p className="font-hind font-semibold text-[14px]" style={{ color: college.primaryColor }}>
                {step.label}
              </p>
              <p className="font-dm-sans font-normal text-[13px] leading-[22px] text-[#6B7280]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        <a
          href={g.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-dm-sans font-semibold text-[14px] text-white transition-colors"
          style={{ backgroundColor: college.accentColor }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a81b2a')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = college.accentColor)}
        >
          Submit Online Grievance →
        </a>
      </div>
    </>
  );
}

function SegdContent() {
  const s = college.segd;
  return (
    <>
      <SectionHeader label="Inclusive Education" title={s.shortName} />
      <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747] mb-2">
        <span className="font-semibold" style={{ color: college.primaryColor }}>Full Name: </span>
        {s.fullName}
      </p>
      <SectionDesc text={s.description} />
      <CommitteeTable
        members={s.members}
        columns={[
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'role', label: 'Role' },
        ]}
      />
      <div className="mt-10">
        <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
          Cell Objectives
        </p>
        <ObjectivesList items={s.objectives} />
      </div>
    </>
  );
}

function FinanceContent() {
  const fc = college.financeCommittee;
  return (
    <>
      <SectionHeader label={`Academic Year ${fc.year}`} title="Finance Committee" />
      <SectionDesc text={fc.description} />
      <CommitteeTable
        members={fc.members}
        columns={[
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'role', label: 'Role' },
        ]}
      />
    </>
  );
}

function EqualOpportunityContent() {
  const eoc = college.equalOpportunityCell;
  return (
    <>
      <SectionHeader label="Inclusive Campus" title="Equal Opportunity Cell" />
      <SectionDesc text={eoc.description} />
      <CommitteeTable
        members={eoc.members}
        columns={[
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'role', label: 'Role' },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div>
          <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
            Objectives
          </p>
          <ObjectivesList items={eoc.objectives} />
        </div>
        <div>
          <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
            Activities
          </p>
          <ObjectivesList items={eoc.activities} />
        </div>
      </div>
    </>
  );
}

function IccContent() {
  const icc = college.icc;
  return (
    <>
      <SectionHeader label="Complaints & Safety" title={icc.fullName} />
      <SectionDesc text={icc.description} />
      <CommitteeTable
        members={icc.members}
        columns={[
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'role', label: 'Role' },
          { key: 'phone', label: 'Contact' },
        ]}
      />
      <div className="mt-10">
        <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
          Committee Objectives
        </p>
        <ObjectivesList items={icc.objectives} />
      </div>
    </>
  );
}

// ── New section content components ────────────────────────────────────────────

function ChairmanContent() {
  return (
    <>
      <SectionHeader label="Leadership" title="Chairman" />
      <div className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl border border-[#E5E7EB] bg-white">
        <div className="flex-shrink-0 flex flex-col items-center gap-2">
          <img
            src="/images/Gokaraju_Ganga_Raju.jpg"
            alt="Dr. Gokaraju Ganga Raju"
            className="rounded-full object-cover"
            style={{ width: '140px', height: '140px', border: '3px solid rgba(91,16,39,0.12)' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <p className="font-hind font-bold text-[14px] text-center" style={{ color: college.primaryColor }}>Dr. Gokaraju Ganga Raju</p>
          <p className="font-dm-sans text-[12px] text-center" style={{ color: 'rgba(91,16,39,0.6)' }}>Chairman</p>
        </div>
        <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#374151]">
          Dr. G. Ganga Raju is renowned for his dynamic, optimistic, and compassionate nature. As an outstanding team leader, he takes ownership of issues around him, takes control of situations, and promotes universal good. Notably, leading by example he drives people to change. Dr. G. Ganga Raju initiated the promotion of Engineering and Pharmacy education under the Gokaraju Rangaraju Educational Society (GRES). In 1997, he established the Gokaraju Rangaraju Institute of Engineering and Technology, and in 2003, the Gokaraju Rangaraju College of Pharmacy. GRES is promoted by Dr Gokaraju Ganga Raju, Chairman of Laila Group of Industries having varied interests in Pharmaceuticals, Paper, Sugar, Agro-Products etc. Dr Gokaraju Ganga Raju, an educationalist and philanthropist, established GRIET as a fitting tribute to his dynamic and visionary father Late Sri Gokaraju Ranga Raju.
        </p>
      </div>
    </>
  );
}

function VicePresidentContent() {
  return (
    <>
      <SectionHeader label="Leadership" title="Vice President" />
      <div className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl border border-[#E5E7EB] bg-white">
        <div className="flex-shrink-0 flex flex-col items-center gap-2">
          <img
            src="/images/Ranga_Raju.jpg"
            alt="Sri G.V.K. Ranga Raju"
            className="rounded-full object-cover"
            style={{ width: '140px', height: '140px', border: '3px solid rgba(91,16,39,0.12)' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <p className="font-hind font-bold text-[14px] text-center" style={{ color: college.primaryColor }}>Sri G.V.K. Ranga Raju</p>
          <p className="font-dm-sans text-[12px] text-center" style={{ color: 'rgba(91,16,39,0.6)' }}>Vice President</p>
        </div>
        <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#374151]">
          Sri G.V.K. Ranga Raju is the eldest son of Dr. G. Ganga Raju. He brings to Gokaraju Rangaraju Educational Society his business acumen, knowledge and wide reading. His exceptional people skills have enabled him to create resounding goodwill and respect for himself and GRES. G.V.K. Ranga Raju takes care of all the day-to-day matters concerning GRIET, and promptly addresses the concerns of the parents and students. He believes in a no-compromise policy, when it comes to personal supervision of educational institutions and in maintaining academic schedule & discipline. Extraordinarily gifted and tech savvy, he understands the importance of technology in today's fast paced world. He believes in exposing students on cutting edge technology so that they are equipped to not just face the challenges of the modern day living but become leaders in their own right. For him, education is a journey of discovery.
        </p>
      </div>
    </>
  );
}

function AcademicDirectorContent() {
  return (
    <>
      <SectionHeader label="Administration" title="Academic Director" />
      <div className="p-8 rounded-2xl border border-[#E5E7EB] bg-white">
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6">
          <img
            src="/images/deepaganu.png"
            alt="Deepa Ganu"
            className="rounded-full object-cover flex-shrink-0"
            style={{ width: '140px', height: '140px', border: '3px solid rgba(91,16,39,0.12)' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div>
            <h3 className="font-hind font-bold text-[22px] leading-tight" style={{ color: college.primaryColor }}>Deepa Ganu</h3>
            <span className="inline-block text-[13px] font-semibold px-3 py-1 rounded-full mt-1" style={{ backgroundColor: 'rgba(195,32,51,0.09)', color: college.accentColor }}>
              Academic Director
            </span>
            <p className="font-dm-sans text-[13px] mt-1 text-[#6B7280]">Gokaraju Lailavathi Engineering College</p>
          </div>
        </div>
        <div className="rounded-lg px-4 py-4 flex flex-col gap-3" style={{ borderLeft: `3px solid ${college.primaryColor}`, backgroundColor: '#F9F7F7' }}>
          {[
            'Deepa Ganu, Academic Director of Gokaraju Lailavathi Engineering College has always been a proactive person and has involved herself in all the activities of the college. She graduated B. Tech in ECE from PUNE University and M. Tech from JNTU Hyderabad. She worked as an Academic Director at KMIT Hyderabad from its inception. She displays a keen interest in the affairs of the college and being a student-friendly person is avidly interested in the academic progress of the students and staff.',
            'She took up a mission to ignite young minds to nurture the students with the potential to reach greater horizons. She strongly believed in herself, her mentors, her peers and her team. IBM, Google, and Virtusa were bestowed with the prestigious titles "Best Mentor", and "Acharya" for her unprecedented instruction/pedagogy. Deepa Ganu for her inspirational role in the field of education made her the Recipient of the "Drona" Award.',
            'She trained and shared her expertise with thousands of students to excel and compete at National and International platforms like Microsoft Imagine Cup, IBM\'s The Great Mind Challenge, Google Summer of Code, and Amazon Campus Mentorship Series. She conducted various corporate pieces of training for prestigious campuses like Verizon, HP, and CA Global and government agencies like DRDL and RCI.',
            'Her daring to dream, work smart and strive for excellence, and enjoy the journey every step of the way, made her scale greater heights. Above all, she took up a mission to ignite young minds to nurture the students with the potential to reach greater horizons. She strongly believed in herself, her mentors, her peers and her team.',
            'Authored a book titled "JAVA spoken Tutorials", an IIT Bombay initiative. She is specialized in identifying and enlightening students\' technical edge in the right direction by guiding and enlightening them.',
          ].map((para, i) => (
            <p key={i} className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#374151]">{para}</p>
          ))}
        </div>
      </div>
    </>
  );
}

function OmbudspersonContent() {
  return (
    <>
      <SectionHeader label="Transparency & Accountability" title="Ombudsperson" />
      <SectionDesc text="Gokaraju Lailavathi Engineering College (GLEC), approved by AICTE and affiliated to Osmania University, Hyderabad, is located in GRIET Campus, Bachupally, Kukatpally, Hyderabad — 500090. For all types of grievances which would arise for resolution outside the purview of the College Management, the Registrar of Osmania University would be approached as the Ombudsperson, since the appointment is at the discretion of the Registrar, Osmania University." />
      <div className="rounded-xl overflow-hidden border border-[#E5E7EB] bg-white">
        <div className="flex items-center gap-3 px-5 py-3 border-b" style={{ backgroundColor: `${college.primaryColor}06` }}>
          <div className="w-1 h-5 rounded-full" style={{ backgroundColor: college.accentColor }} />
          <span className="font-dm-sans font-bold text-[13px] uppercase tracking-[1.5px]" style={{ color: college.primaryColor }}>Ombudsperson Contact</span>
        </div>
        <div className="p-6 flex flex-col gap-2">
          <p className="font-hind font-bold text-[16px]" style={{ color: college.primaryColor }}>Dr. Gaddam Naresh Reddy</p>
          <p className="font-dm-sans text-[14px] text-[#374151]">Registrar<br />Professor in Commerce, University College of Commerce, Osmania University Campus</p>
          <div className="pt-3 flex flex-col gap-1.5 border-t border-[#F3F4F6]">
            <p className="font-dm-sans text-[14px] text-[#374151]">Administrative Building, Osmania University Campus</p>
            <p className="font-dm-sans text-[14px] text-[#374151]">Hyderabad — 500 007, Telangana State, India</p>
            <a href="mailto:registrar@osmania.ac.in" className="font-dm-sans font-semibold text-[14px] hover:underline" style={{ color: college.accentColor }}>registrar@osmania.ac.in</a>
            <a href="tel:04027098048" className="font-dm-sans font-semibold text-[14px]" style={{ color: college.accentColor }}>040-27098048</a>
          </div>
        </div>
      </div>
    </>
  );
}

function RtiActContent() {
  const contacts = [
    { name: 'K.V.S.Raju, Registrar, GLEC', role: 'Public Information Officer (PIO)', email: 'aogriet@gmail.com', phone: '9339818181' },
    { name: 'K. Srinivasa Rao, Assistant Professor, GLEC', role: 'Assistant Public Information Officer (APIO)', email: 'srinivasaraokglwec@gmail.com', phone: '9441283890' },
  ];
  return (
    <>
      <SectionHeader label="Transparency & Accountability" title="Right to Information Act" />
      <div className="p-7 rounded-xl border border-[#E5E7EB] bg-white mb-6">
        <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747]">
          The Right to <strong>Information</strong> Act, 2005 (22 of 2005) has been enacted by the Parliament and has come into force from 15 June, 2005. This Act provides for right to information for citizens to secure access to information under the control of public authorities in order to promote transparency and accountability in the working of every public authority. All Universities and Colleges established by law made by Parliament or by State Legislature or by notification by the appropriate Government or owned, controlled or substantially financed directly or indirectly by funds provided by the Government shall come within the meaning of a Public Authority under this Act.
        </p>
      </div>
      <div className="rounded-xl p-5 flex items-start gap-3 mb-6" style={{ backgroundColor: `${college.primaryColor}06`, borderLeft: `4px solid ${college.accentColor}` }}>
        <p className="font-dm-sans font-normal text-[14px] leading-[24px] text-[#474747]">
          For any information related to GLEC, students, parents and staff can contact the following persons.
        </p>
      </div>
      <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>RTI Contact Officers</p>
      <CommitteeTable
        members={contacts}
        columns={[
          { key: 'name', label: 'Name & Designation', accent: true },
          { key: 'role', label: 'Role' },
          { key: 'email', label: 'Email' },
          { key: 'phone', label: 'Phone' },
        ]}
      />
    </>
  );
}

function AlumniAssociationContent() {
  const committee = [
    { sno: 1, name: 'Dr. A. Ushasree', current: 'Asst. Prof., CSE', role: 'Incharge Alumni Association' },
    { sno: 2, name: 'Mrs. P. M. Maduri', current: 'Asst. Prof., CSE', role: 'Coordinator Alumni Association' },
    { sno: 3, name: 'Mr. R. Sai Nikhil', current: 'Asst. Prof, CSE', role: 'Coordinator Alumni Association' },
    { sno: 4, name: 'Dr. Padmalaya Nayak', current: 'HOD (CSE)', role: 'Member' },
    { sno: 5, name: 'Dr. Kishore Babu', current: 'HOD (H&S)', role: 'Member' },
    { sno: 6, name: 'Ms. B. Arthi Reddy', current: 'CSE Student (21-25 Batch)', role: 'Member' },
    { sno: 7, name: 'Ms. B. Sripada', current: 'IT Student (21-25 Batch)', role: 'Member' },
    { sno: 8, name: 'Ms. P. Sriya', current: 'IT Student (21-25 Batch)', role: 'Member' },
  ];
  return (
    <>
      <SectionHeader label="Community" title="Alumni Association" />
      <SectionDesc text="Gokaraju Lailavathi Engineering College (GLEC) Alumni Association is formed with a view to create a platform that helps improve student interaction and relations beyond the completion of their course at GLEC. It keeps alive cherished memories and ensures connections nourished for a lifetime. The association serves as a forum for discussion, academic exploration, guidance, and community service — enabling real-time learning, knowledge transfer, and interpersonal bonds." />
      <CommitteeTable
        members={committee}
        columns={[
          { key: 'sno', label: 'S.No' },
          { key: 'name', label: 'Name', accent: true },
          { key: 'current', label: 'Current Position' },
          { key: 'role', label: 'Association Role' },
        ]}
      />
    </>
  );
}

function StudentCouncilContent() {
  const goals = [
    'Act as a liaison between students and management.',
    'Represent student issues and concerns.',
    'Equip students with opportunities to develop their skills as leaders and make a positive contribution to GLEC policies, strategies and academic regulations.',
    'Enhance communication and encourage more involvement in the institutional proceedings.',
  ];
  const members = [
    { sno: '1', roll: '245621733072', branch: 'CSE – B', name: 'B. Aarthi Reddy', role: 'President' },
    { sno: '2', roll: '245621737010', branch: 'IT – A', name: 'B. Sriprada', role: 'General Secretary' },
    { sno: '3', roll: '245621733175', branch: 'CSE – C', name: 'P. Sriya', role: 'Treasurer' },
  ];
  return (
    <>
      <SectionHeader label="Student Governance" title="Student Council" />
      <div className="mb-6 p-6 rounded-xl border border-[#E5E7EB] bg-white" style={{ borderLeft: `3px solid ${college.primaryColor}` }}>
        <div className="flex flex-col gap-3">
          {[
            'GLEC encourages and promotes leadership qualities and shapes responsible leaders among students through Student Council. The aim is to impart leadership skills while carrying out college activities and service projects.',
            'Student council is a group of elected students working together with a faculty coordinator within the framework of bylaws to provide resources for students\' expression and assistance in college affairs and endeavours. It is the \'Voice of students\' where students come up with their ideas, interests and concerns with the college community.',
            'Student council election is a replica of the democratic process of election, where students elect and selected leaders for the post of President, General Secretary and Treasurer.',
          ].map((text, i) => (
            <p key={i} className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#374151]">{text}</p>
          ))}
        </div>
      </div>
      <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>Goals of the Student Council</p>
      <ObjectivesList items={goals} />
      <p className="font-hind font-semibold text-[15px] mt-8 mb-4" style={{ color: college.primaryColor }}>Student Council Members — Academic Year 2022</p>
      <CommitteeTable
        members={members}
        columns={[
          { key: 'sno', label: 'S.No' },
          { key: 'roll', label: 'Roll No' },
          { key: 'branch', label: 'Branch / Section' },
          { key: 'name', label: 'Name', accent: true },
          { key: 'role', label: 'Role' },
        ]}
      />
    </>
  );
}

function MandatoryDisclosuresContent() {
  const disclosures = [
    {
      category: 'AICTE Disclosures',
      links: [
        { label: 'EOA 2025–26', href: '/downloads/MD/EOA_Report_2025-26.pdf' },
        { label: 'EOA 2024–25', href: '/downloads/MD/EOA_Report_2024-25.pdf' },
        { label: 'EOA 2023–24', href: '/downloads/MD/EOA_Report_2023-24.pdf' },
        { label: 'EOA 2022–23', href: '/downloads/MD/EOA_Report_2022-23.pdf' },
        { label: 'LOA 2021–22', href: '/downloads/MD/LOA_Report_2021-22.pdf' },
      ],
    },
    {
      category: 'AICTE Mandatory Disclosures',
      links: [
        { label: 'Download 2024–25', href: '/downloads/MD/AICTE MandatoryDisclosure 24-25.pdf' },
      ],
    },
    {
      category: 'Annual Reports',
      links: [
        { label: 'Annual Report 2023–24', href: '/downloads/MD/Annual Report 2023-2024.pdf' },
      ],
    },
    {
      category: 'Balance Sheet',
      links: [
        { label: 'Balance Sheet 2023–24', href: '/downloads/MD/2023-2024.pdf' },
        { label: 'Balance Sheet 2022–23', href: '/downloads/MD/2022-2023.pdf' },
      ],
    },
    {
      category: 'Osmania University Affiliation',
      links: [
        { label: 'OU Affiliation 2024–25', href: '/downloads/MD/OU Affiliation 2024-25.pdf' },
        { label: 'OU Affiliation 2023–24', href: '/downloads/MD/OU Affiliation 2023-24.pdf' },
        { label: 'OU Affiliation 2022–23', href: '/downloads/MD/OU Affiliation 2022-23.pdf' },
        { label: 'OU Affiliation 2021–22', href: '/downloads/MD/OU Affiliation 2021-22.pdf' },
      ],
    },
  ];
  return (
    <>
      <SectionHeader label="Compliance" title="Mandatory Disclosures" />
      <div className="flex flex-col gap-4">
        {disclosures.map(group => (
          <div key={group.category} className="rounded-xl overflow-hidden border border-[#E5E7EB]">
            <div className="px-5 py-3 flex items-center gap-2 border-b" style={{ backgroundColor: `${college.primaryColor}06` }}>
              <div className="w-1 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
              <h4 className="font-hind font-bold text-[14px]" style={{ color: college.primaryColor }}>{group.category}</h4>
            </div>
            <div className="px-5 py-4 flex flex-wrap gap-2 bg-white">
              {group.links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded font-dm-sans font-medium text-[13px] transition-all"
                  style={{ backgroundColor: `${college.primaryColor}0F`, color: college.primaryColor, border: `1px solid ${college.primaryColor}20` }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = college.primaryColor; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = `${college.primaryColor}0F`; e.currentTarget.style.color = college.primaryColor; }}
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// ── Section registry — single source of truth for all admin sections ──────────

const SECTIONS = [
  {
    id: 'management',
    path: '/administration/management',
    label: 'Management',
    content: <ManagementContent />,
  },
  {
    id: 'sponsoring-body',
    path: '/administration/sponsoring-body',
    label: 'Sponsoring Body & MOAG',
    content: <SponsoringBodyContent />,
  },
  {
    id: 'governing-body',
    path: '/administration/governing-body',
    label: 'Governing Body',
    content: <GoverningBodyContent />,
  },
  {
    id: 'registrar',
    path: '/administration/registrar',
    label: 'Registrar',
    content: <RegistrarContent />,
  },
  {
    id: 'principal',
    path: '/administration/principal',
    label: 'Principal',
    content: <PrincipalContent />,
  },
  {
    id: 'id-plan',
    path: '/administration/id-plan',
    label: 'ID Plan',
    content: <IdPlanContent />,
  },
  {
    id: 'anti-ragging',
    path: '/administration/anti-ragging',
    label: 'Anti Ragging Committee',
    content: <AntiRaggingContent />,
  },
  {
    id: 'anti-harassment',
    path: '/administration/anti-harassment',
    label: 'Anti Sexual Harassment',
    content: <AntiSexualHarassmentContent />,
  },
  {
    id: 'grievance',
    path: '/administration/grievance',
    label: 'Grievance Redressal',
    content: <GrievanceContent />,
  },
  {
    id: 'segd',
    path: '/administration/segd',
    label: 'SEGD Cell',
    content: <SegdContent />,
  },
  {
    id: 'finance',
    path: '/administration/finance',
    label: 'Finance Committee',
    content: <FinanceContent />,
  },
  {
    id: 'equal-opportunity',
    path: '/administration/equal-opportunity',
    label: 'Equal Opportunity Cell',
    content: <EqualOpportunityContent />,
  },
  {
    id: 'icc',
    path: '/administration/icc',
    label: 'ICC',
    content: <IccContent />,
  },
  {
    id: 'chairman',
    path: '/administration/chairman',
    label: 'Chairman',
    content: <ChairmanContent />,
  },
  {
    id: 'vice-president',
    path: '/administration/vice-president',
    label: 'Vice President',
    content: <VicePresidentContent />,
  },
  {
    id: 'academic-director',
    path: '/administration/academic-director',
    label: 'Academic Director',
    content: <AcademicDirectorContent />,
  },
  {
    id: 'ombudsperson',
    path: '/administration/ombudsperson',
    label: 'Ombudsperson',
    content: <OmbudspersonContent />,
  },
  {
    id: 'rti-act',
    path: '/administration/rti-act',
    label: 'RTI Act',
    content: <RtiActContent />,
  },
  {
    id: 'alumni-association',
    path: '/administration/alumni-association',
    label: 'Alumni Association',
    content: <AlumniAssociationContent />,
  },
  {
    id: 'student-council',
    path: '/administration/student-council',
    label: 'Student Council',
    content: <StudentCouncilContent />,
  },
  {
    id: 'mandatory-disclosures',
    path: '/administration/mandatory-disclosures',
    label: 'Mandatory Disclosures',
    content: <MandatoryDisclosuresContent />,
  },
];

// ── Page component ────────────────────────────────────────────────────────────

export default function AdministrationPage() {
  const { section } = useParams();

  // /administration (no section) → default to management
  const activeId = section || 'management';

  // Find current section
  const currentSection = SECTIONS.find((s) => s.id === activeId);

  // Unknown section → redirect to management
  if (!currentSection) {
    return <Navigate to="/administration/management" replace />;
  }

  return (
    <AdminSidebarLayout
      college={college}
      pageTitle="Administration"
      pageSubtitle="Governance, leadership, and institutional committees at GLEC"
      pageBreadcrumb={['Administration', currentSection.label]}
      sections={SECTIONS}
      currentSection={currentSection}
    />
  );
}
