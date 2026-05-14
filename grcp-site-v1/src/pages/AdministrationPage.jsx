import { useParams } from 'react-router-dom';
import college from '../theme';
import AdminSidebarLayout from '../components/AdminSidebarLayout';

function SectionHeader({ label, title }) {
  return (
    <div className="mb-6">
      {label && (
        <span
          className="font-dm-sans font-semibold text-[12px] uppercase tracking-[2px] mb-2 block"
          style={{ color: college.greenAccent }}
        >
          {label}
        </span>
      )}
      <h2
        className="font-hind font-bold text-[26px] leading-[34px] pb-3"
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

function SectionDesc({ text }) {
  return (
    <p className="font-dm-sans text-[15px] leading-[26px] text-[#474747]">
      {text}
    </p>
  );
}

function ObjectivesList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0 mt-[9px]"
            style={{ backgroundColor: college.greenAccent }}
          />
          <span className="font-dm-sans text-[15px] leading-[26px] text-[#474747]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CommitteeTable({ members, columns }) {
  return (
    <div className="overflow-x-auto rounded-xl border" style={{ borderColor: `${college.primaryColor}18` }}>
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ backgroundColor: college.greenAccent }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className="font-hind font-semibold text-[13px] text-white text-left px-5 py-3.5 first:rounded-tl-xl last:rounded-tr-xl"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((member, i) => (
            <tr
              key={i}
              style={{ backgroundColor: i % 2 === 0 ? '#FAFAFA' : '#FFFFFF' }}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5 border-b"
                  style={{ borderColor: `${college.primaryColor}10` }}
                >
                  {member[col.key] ?? '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProfileCard({ person }) {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm" style={{ borderColor: `${college.primaryColor}15` }}>
      <div
        className="h-2 w-full"
        style={{ backgroundColor: college.primaryColor }}
      />
      <div className="p-8 flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: `${college.primaryColor}12`, border: `3px solid ${college.primaryColor}20` }}
          >
            <img
              src={`/admin-${person.name?.toLowerCase().replace(/\s+/g, '-')}.jpg`}
              alt={person.fullName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.innerHTML = `<span style="font-family:Poppins,sans-serif;font-weight:700;font-size:36px;color:${college.primaryColor}">${(person.fullName || person.name || '?').charAt(0)}</span>`;
              }}
            />
          </div>
        </div>
        <div className="flex-1">
          <h3
            className="font-hind font-bold text-[22px] mb-1"
            style={{ color: college.primaryColor }}
          >
            {person.fullName}
          </h3>
          <p
            className="font-dm-sans font-semibold text-[14px] mb-5"
            style={{ color: college.greenAccent }}
          >
            {person.title}
          </p>
          <div className="space-y-3">
            {person.bio.map((para, i) => (
              <SectionDesc key={i} text={para} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadershipSection() {
  const { chairman, vicePresident, principal } = college.administration;
  return (
    <div className="space-y-10">
      <SectionHeader label="Leadership" title="Our Leaders" />
      <div className="space-y-6">
        <h3 className="font-hind font-semibold text-[16px]" style={{ color: college.greenAccent }}>Chairman</h3>
        <ProfileCard person={chairman} />
      </div>
      <div className="w-full h-px" style={{ backgroundColor: `${college.primaryColor}15` }} />
      <div className="space-y-6">
        <h3 className="font-hind font-semibold text-[16px]" style={{ color: college.greenAccent }}>Vice President</h3>
        <ProfileCard person={vicePresident} />
      </div>
      <div className="w-full h-px" style={{ backgroundColor: `${college.primaryColor}15` }} />
      <div className="space-y-6">
        <h3 className="font-hind font-semibold text-[16px]" style={{ color: college.greenAccent }}>Principal</h3>
        <ProfileCard person={principal} />
      </div>
    </div>
  );
}

function GoverningBodySection() {
  const { governingBody } = college.administration;
  return (
    <div className="space-y-6">
      <SectionHeader label="Governance" title="Governing Body" />
      {governingBody.year && (
        <p className="font-dm-sans font-semibold text-[13px]" style={{ color: college.greenAccent }}>
          Academic Year: {governingBody.year}
        </p>
      )}
      <div className="overflow-x-auto rounded-xl border" style={{ borderColor: `${college.primaryColor}18` }}>
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ backgroundColor: college.greenAccent }}>
              {['Sl. No.', 'Name of the Member', 'Designation', 'Category'].map((h) => (
                <th
                  key={h}
                  className="font-hind font-semibold text-[13px] text-white text-left px-5 py-3.5 first:rounded-tl-xl last:rounded-tr-xl"
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
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5 border-b align-top" style={{ borderColor: `${college.primaryColor}10` }}>
                  {m.no}
                </td>
                <td className="px-5 py-3.5 border-b align-top" style={{ borderColor: `${college.primaryColor}10` }}>
                  <span className="font-dm-sans font-semibold text-[14px]" style={{ color: college.primaryColor }}>{m.name}</span>
                  {m.details && (
                    <span className="block font-dm-sans text-[12px] text-[#6A7282] mt-0.5">{m.details}</span>
                  )}
                </td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5 border-b align-top" style={{ borderColor: `${college.primaryColor}10` }}>
                  {m.role}
                </td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5 border-b align-top" style={{ borderColor: `${college.primaryColor}10` }}>
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

function IdmcSection() {
  const { idmc } = college.administration;
  return (
    <div className="space-y-6">
      <SectionHeader label="Institutional Committee" title="IDMC" />
      <SectionDesc text={idmc.description} />
      {idmc.powers && (
        <ol className="space-y-2.5 max-w-[820px]">
          {idmc.powers.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="font-hind font-bold text-[13px] flex-shrink-0 w-6 text-right mt-[3px]"
                style={{ color: college.primaryColor }}
              >
                {i + 1}.
              </span>
              <span className="font-dm-sans text-[14px] leading-[24px] text-[#474747]">{item}</span>
            </li>
          ))}
        </ol>
      )}
      <h4
        className="font-hind font-semibold text-[16px] pt-2"
        style={{ color: college.primaryColor }}
      >
        The members of Institutional Development and Monitoring Committee (IDMC)
      </h4>
      <div className="overflow-x-auto rounded-xl border" style={{ borderColor: `${college.primaryColor}18` }}>
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ backgroundColor: college.greenAccent }}>
              {['Sl. No', 'Name', 'Designation', 'Position', 'E-mail ID'].map((h) => (
                <th
                  key={h}
                  className="font-hind font-semibold text-[13px] text-white text-left px-5 py-3.5 first:rounded-tl-xl last:rounded-tr-xl"
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
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5 border-b" style={{ borderColor: `${college.primaryColor}10` }}>{i + 1}.</td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5 border-b" style={{ borderColor: `${college.primaryColor}10` }}>{m.name}</td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5 border-b" style={{ borderColor: `${college.primaryColor}10` }}>{m.designation}</td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5 border-b" style={{ borderColor: `${college.primaryColor}10` }}>{m.role}</td>
                <td className="px-5 py-3.5 border-b" style={{ borderColor: `${college.primaryColor}10` }}>
                  {m.email ? (
                    <a
                      href={`mailto:${m.email}`}
                      className="font-dm-sans text-[13px] underline"
                      style={{ color: college.primaryColor }}
                    >
                      {m.email}
                    </a>
                  ) : (
                    <span className="font-dm-sans text-[14px] text-[#474747]">—</span>
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

function OrgChartSection() {
  const { orgChart } = college.administration;
  const pc = college.primaryColor;
  const ac = college.greenAccent;
  const lineClr = `${pc}55`;

  return (
    <div className="space-y-6">
      <SectionHeader label="Structure" title="Organizational Chart" />
      <p className="font-dm-sans text-[14px] leading-[24px] text-[#474747] max-w-[720px]">
        The organizational chart illustrates the governance and administrative hierarchy of Gokaraju Rangaraju College of Pharmacy, from the governing society through institutional leadership to academic departments.
      </p>

      <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: `${pc}12`, backgroundColor: '#FDFCFC' }}>
        <div className="min-w-[860px] py-12 px-8">

          {/* ── Top chain: Chairman → VP → Principal ── */}
          <div className="flex flex-col items-center">
            {orgChart.levels.map((lvl, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="rounded-xl px-12 py-4 text-center shadow-sm"
                  style={{ backgroundColor: pc, minWidth: 288 }}
                >
                  <p className="font-hind font-bold text-[12px] tracking-[2.5px] text-white uppercase">{lvl.role}</p>
                  <p className="font-dm-sans text-[13px] font-medium mt-1" style={{ color: 'rgba(255,255,255,0.85)' }}>{lvl.name}</p>
                </div>
                {i < orgChart.levels.length - 1 && (
                  <div style={{ width: 2, height: 32, backgroundColor: lineClr }} />
                )}
              </div>
            ))}
            {/* Stub below Principal */}
            <div style={{ width: 2, height: 28, backgroundColor: lineClr }} />
          </div>

          {/* ── Branching to HODs ── */}
          <div className="relative">
            {/* Horizontal branch line from center of col-1 to center of col-3 */}
            <div
              className="absolute"
              style={{ top: 0, left: '16.667%', right: '16.667%', height: 2, backgroundColor: lineClr }}
            />
            <div className="flex">
              {orgChart.departments.map((dep, i) => (
                <div key={i} className="flex-1 flex flex-col items-center px-4">
                  {/* Vertical drop from horizontal line */}
                  <div style={{ width: 2, height: 28, backgroundColor: lineClr }} />

                  {/* HOD Card */}
                  <div
                    className="w-full rounded-xl px-4 py-4 text-center"
                    style={{ backgroundColor: `${pc}08`, border: `1.5px solid ${pc}30` }}
                  >
                    <div
                      className="inline-block px-2.5 py-0.5 rounded-full font-hind font-semibold text-[10px] tracking-[1px] uppercase mb-2"
                      style={{ backgroundColor: 'rgba(0,135,61,0.10)', color: college.greenAccent }}
                    >
                      Department Head
                    </div>
                    <p className="font-hind font-semibold text-[12px] leading-[18px]" style={{ color: pc }}>{dep.hod}</p>
                    <p className="font-dm-sans text-[12px] mt-1.5" style={{ color: '#5A6275' }}>{dep.person}</p>
                  </div>

                  {/* Vertical connector to staff */}
                  <div style={{ width: 2, height: 20, backgroundColor: lineClr }} />

                  {/* Staff cards */}
                  <div className="w-full flex flex-col items-center">
                    {orgChart.staffLevels.map((s, j) => (
                      <div key={j} className="w-full flex flex-col items-center">
                        <div
                          className="w-full rounded-lg py-2.5 text-center"
                          style={{ backgroundColor: '#F3F4F6', border: `1px solid ${pc}15` }}
                        >
                          <p className="font-dm-sans text-[12px]" style={{ color: '#4B5563' }}>{s}</p>
                        </div>
                        {j < orgChart.staffLevels.length - 1 && (
                          <div style={{ width: 2, height: 8, backgroundColor: lineClr }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-5 pt-1">
        {[
          { color: pc, label: 'Institutional Leadership' },
          { color: `${pc}30`, label: 'Department Heads', fill: `${pc}08` },
          { color: `${pc}15`, label: 'Support Staff', fill: '#F3F4F6' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: item.fill ?? item.color, border: `1.5px solid ${item.color}` }}
            />
            <span className="font-dm-sans text-[12px] text-[#6A7282]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AntiRaggingSection() {
  const { antiRagging } = college.administration;
  return (
    <div className="space-y-8">
      <SectionHeader label="Student Safety" title="Anti-Ragging / Discipline" />
      <SectionDesc text={antiRagging.description} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-6" style={{ backgroundColor: '#F9F5FF', border: `1px solid ${college.primaryColor}15` }}>
          <h4 className="font-hind font-semibold text-[16px] mb-4" style={{ color: college.primaryColor }}>
            Preventive Measures
          </h4>
          <ObjectivesList items={antiRagging.measures} />
        </div>

        <div className="rounded-2xl p-6" style={{ backgroundColor: '#F0FBF4', border: `1px solid ${college.greenAccent}30` }}>
          <h4 className="font-hind font-semibold text-[16px] mb-4" style={{ color: college.primaryColor }}>
            Helplines
          </h4>
          <ul className="space-y-4">
            {antiRagging.helplines.map((h, i) => (
              <li key={i} className="flex flex-col gap-1">
                <span className="font-dm-sans text-[13px] text-[#6A7282]">{h.label}</span>
                <a
                  href={`tel:${h.number.replace(/\D/g, '')}`}
                  className="font-hind font-bold text-[20px]"
                  style={{ color: college.primaryColor }}
                >
                  {h.number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h4 className="font-hind font-semibold text-[16px] mb-4" style={{ color: college.primaryColor }}>
          Committee Members
        </h4>
        <CommitteeTable
          members={antiRagging.members}
          columns={[
            { key: 'name', label: 'Name' },
            { key: 'designation', label: 'Designation' },
            { key: 'phone', label: 'Contact' },
          ]}
        />
      </div>
    </div>
  );
}

function AntiHarassmentSection() {
  const { antiHarassment } = college.administration;
  return (
    <div className="space-y-8">
      <SectionHeader label="ICC" title="Anti-Sexual Harassment / ICC" />
      <SectionDesc text={antiHarassment.description} />

      <CommitteeTable
        members={antiHarassment.members.map((m) => ({
          sno: m.sno,
          name: m.name,
          designation: m.designation,
          phone: m.phone,
        }))}
        columns={[
          { key: 'sno', label: 'S.No.' },
          { key: 'name', label: 'Name' },
          { key: 'designation', label: 'Designation' },
          { key: 'phone', label: 'Contact' },
        ]}
      />

      <div className="rounded-2xl p-6" style={{ backgroundColor: '#FAFAFA', border: `1px solid ${college.primaryColor}12` }}>
        <h4 className="font-hind font-semibold text-[16px] mb-4" style={{ color: college.primaryColor }}>
          Functions of the ICC
        </h4>
        <ObjectivesList items={antiHarassment.functions} />
      </div>
    </div>
  );
}

function GrievanceSection() {
  const { grievance } = college.administration;
  return (
    <div className="space-y-8">
      <SectionHeader label="Student Support" title="Grievance Redressal" />
      <SectionDesc text={grievance.description} />

      <CommitteeTable
        members={grievance.members}
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'designation', label: 'Designation' },
          { key: 'role', label: 'Role' },
        ]}
      />

      <div>
        <h4 className="font-hind font-semibold text-[16px] mb-5" style={{ color: college.primaryColor }}>
          Grievance Resolution Process
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {grievance.process.map((step, i) => (
            <div
              key={i}
              className="rounded-xl p-5 text-center"
              style={{ backgroundColor: '#FAFAFA', border: `1px solid ${college.primaryColor}15` }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-hind font-bold text-[16px] text-white"
                style={{ backgroundColor: college.primaryColor }}
              >
                {i + 1}
              </div>
              <h5 className="font-hind font-semibold text-[14px] mb-2" style={{ color: college.primaryColor }}>
                {step.label}
              </h5>
              <p className="font-dm-sans text-[13px] leading-[21px] text-[#474747]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IqacSection() {
  const { iqac } = college.administration;
  return (
    <div className="space-y-8">
      <SectionHeader label="Quality Assurance" title="IQAC" />
      <SectionDesc text={iqac.description} />

      <div className="rounded-2xl p-6" style={{ backgroundColor: '#FAFAFA', border: `1px solid ${college.primaryColor}12` }}>
        <h4 className="font-hind font-semibold text-[16px] mb-4" style={{ color: college.primaryColor }}>
          Objectives
        </h4>
        <ObjectivesList items={iqac.objectives} />
      </div>

      <div>
        <h4 className="font-hind font-semibold text-[16px] mb-4" style={{ color: college.primaryColor }}>
          Committee Members
        </h4>
        <CommitteeTable
          members={iqac.members}
          columns={[
            { key: 'name', label: 'Name' },
            { key: 'designation', label: 'Designation' },
          ]}
        />
      </div>
    </div>
  );
}

const sectionRegistry = {
  leadership: { label: 'Leadership', content: <LeadershipSection /> },
  'governing-body': { label: 'Governing Body', content: <GoverningBodySection /> },
  idmc: { label: 'IDMC', content: <IdmcSection /> },
  'org-chart': { label: 'Organizational Chart', content: <OrgChartSection /> },
  'anti-ragging': { label: 'Anti-Ragging / Discipline', content: <AntiRaggingSection /> },
  'anti-harassment': { label: 'Anti-Sexual Harassment / ICC', content: <AntiHarassmentSection /> },
  grievance: { label: 'Grievance Redressal', content: <GrievanceSection /> },
  iqac: { label: 'IQAC', content: <IqacSection /> },
};

export default function AdministrationPage() {
  const { section = 'leadership' } = useParams();
  const currentSection = sectionRegistry[section] || sectionRegistry.leadership;

  return (
    <AdminSidebarLayout
      college={college}
      pageTitle="Administration"
      pageSubtitle="Governance, leadership, and institutional committees at GRCP"
      pageBreadcrumb={['Administration', currentSection.label]}
      currentSection={currentSection}
    />
  );
}
