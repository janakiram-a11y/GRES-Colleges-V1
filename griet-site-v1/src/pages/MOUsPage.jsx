import { useState } from 'react';
import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const MOUS = [
  { sno: 1,  org: 'Pi-SQUARE Technologies India Pvt. Ltd.',      start: '19.05.2025', expiry: '18.05.2026' },
  { sno: 2,  org: 'SR University, Watangal',                     start: '08.01.2025', expiry: '07.01.2030' },
  { sno: 3,  org: 'Texas A&M University-San Antonio',            start: '18.12.2024', expiry: '17.12.2029' },
  { sno: 4,  org: 'Curtin University, Malaysia',                 start: '25.10.2024', expiry: '24.10.2029' },
  { sno: 5,  org: 'Global AI Academic Alliance – Thub / talentfarm.ai', start: '17.05.2024', expiry: '17.05.2025' },
  { sno: 6,  org: 'IIT Hyderabad',                               start: '—', expiry: 'Perpetual' },
  { sno: 7,  org: 'NIT Warangal',                                start: '—', expiry: 'Perpetual' },
  { sno: 8,  org: 'Wipro Limited',                               start: '—', expiry: '—' },
  { sno: 9,  org: 'Tata Consultancy Services Ltd.',              start: '—', expiry: '—' },
  { sno: 10, org: 'Oracle Academy',                              start: '—', expiry: '—' },
  { sno: 11, org: 'Red Hat India',                               start: '—', expiry: '—' },
  { sno: 12, org: 'Dell EMC',                                    start: '—', expiry: '—' },
  { sno: 13, org: 'NRSC-ISRO',                                   start: '—', expiry: '—' },
  { sno: 14, org: 'NPTEL Local Chapter',                         start: '—', expiry: 'Perpetual' },
  { sno: 15, org: 'British Council',                             start: '—', expiry: 'Perpetual' },
  { sno: 16, org: 'University of Central Missouri, USA',         start: '—', expiry: '—' },
  { sno: 17, org: 'University of Jaén, Spain',                   start: '—', expiry: '—' },
  { sno: 18, org: 'Samara National Research University',         start: '—', expiry: '—' },
  { sno: 19, org: 'SkyySkill Academy',                           start: '—', expiry: '—' },
  { sno: 20, org: 'SkillDzire Technologies',                     start: '—', expiry: '—' },
  { sno: 21, org: 'TASK – Telangana Academy for Skill and Knowledge', start: '—', expiry: '—' },
  { sno: 22, org: 'Eleven 01 Technologies',                      start: '—', expiry: 'Perpetual' },
  { sno: 23, org: 'Information Data Systems Inc.',               start: '—', expiry: 'Perpetual' },
  { sno: 24, org: 'IBC Media',                                   start: '—', expiry: 'Perpetual' },
  { sno: 25, org: 'Infosys SpringBoard',                         start: '—', expiry: '—' },
];

const CATEGORIES = [
  { label: 'International Universities', orgs: ['Texas A&M University-San Antonio', 'Curtin University, Malaysia', 'University of Central Missouri, USA', 'University of Jaén, Spain', 'Samara National Research University'] },
  { label: 'Research Institutions', orgs: ['IIT Hyderabad', 'NIT Warangal', 'NRSC-ISRO', 'NPTEL Local Chapter'] },
  { label: 'IT & Technology', orgs: ['Wipro Limited', 'Tata Consultancy Services Ltd.', 'Oracle Academy', 'Red Hat India', 'Dell EMC', 'Eleven 01 Technologies', 'Infosys SpringBoard'] },
  { label: 'Skill Development', orgs: ['SkyySkill Academy', 'SkillDzire Technologies', 'TASK – Telangana Academy for Skill and Knowledge'] },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function MOUsPage() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? MOUS : MOUS.slice(0, 10);

  return (
    <AcademicsLayout title="Memoranda of Understanding (MoUs)">

      <div className="flex items-center gap-4 mb-8 p-4 rounded-xl bg-gray-50 border border-gray-200">
        <span className="font-hind font-bold text-[32px]" style={{ color: college.primaryColor }}>107+</span>
        <div>
          <p className="font-hind font-bold text-base text-gray-800">Active & Historical MoUs</p>
          <p className="font-dm-sans text-[12.5px] text-gray-500">With leading industries, universities, and research institutions (2016–2026)</p>
        </div>
      </div>

      <section className="mb-10">
        <SectionLabel>Partnership Categories</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CATEGORIES.map(({ label, orgs }) => (
            <div key={label} className="p-4 rounded-xl border border-gray-200 bg-white">
              <p className="font-hind font-bold text-[0.9375rem] mb-2" style={{ color: college.primaryColor }}>{label}</p>
              <ul className="flex flex-col gap-1">
                {orgs.map((o) => (
                  <li key={o} className="font-dm-sans text-[0.875rem] text-gray-600 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <SectionLabel>MoU Directory</SectionLabel>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-[12.5px] font-dm-sans border-collapse">
            <thead>
              <tr style={{ backgroundColor: `${college.primaryColor}15` }}>
                {['S.No', 'Organization', 'Start Date', 'Expiry'].map((h) => (
                  <th key={h} className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visible.map(({ sno, org, start, expiry }, i) => (
                <tr key={sno} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-gray-400 border-b border-gray-100 w-12">{sno}</td>
                  <td className="px-4 py-3 text-gray-800 font-medium border-b border-gray-100">{org}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{start}</td>
                  <td className="px-4 py-3 border-b border-gray-100">
                    <span
                      className="font-semibold"
                      style={{ color: expiry === 'Perpetual' ? college.primaryColor : 'inherit' }}
                    >
                      {expiry}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {!showAll && MOUS.length > 10 && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-4 font-dm-sans text-[0.9375rem] font-semibold hover:underline"
            style={{ color: college.primaryColor }}
          >
            Show all {MOUS.length} MoUs ↓
          </button>
        )}
      </section>

    </AcademicsLayout>
  );
}
