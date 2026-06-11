import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const MILESTONES = [
  { year: '1997', event: 'GRIET established under the Gokaraju Rangaraju Educational Society (GRES)' },
  { year: '2004', event: 'UGC Autonomous Status granted — full academic autonomy in curriculum design and examination' },
  { year: '2010', event: 'NAAC Accreditation (First Cycle) — A Grade' },
  { year: '2015', event: 'NAAC Re-Accreditation (Second Cycle) — A Grade; TEQIP-II grant of ₹400 Lakhs from World Bank' },
  { year: '2018', event: 'JNTUH Research Centre Status for Mechanical Engineering; SIRO recognition from DSIR, Govt. of India' },
  { year: '2021', event: 'NAAC Re-Accreditation (Third Cycle) — A++ Grade (CGPA: 3.55), the highest grade awarded by NAAC' },
  { year: '2024', event: 'Letter of Intent (LOI) received from Ministry of Education for Deemed-to-be University status' },
];

const STRENGTHS = [
  'NAAC A++ accreditation (CGPA 3.55) — highest quality grade',
  'NBA-accredited UG and PG programmes in Engineering',
  'ISO 9001:2015 certified quality management system',
  'NABL-accredited materials testing laboratory (GRMTL)',
  'SIRO recognition from DSIR, Government of India',
  'NIRF rank 101–150 (2023 & 2024) among Engineering institutions',
  'TEQIP-II World Bank-funded institution',
  'Active research with 1,200+ publications, 85+ patents',
  'Strong industry partnerships: IIT Hyderabad, NIT Warangal, Curtin University, Infosys SpringBoard',
  'Autonomous curriculum aligned with NEP-2020 and industry requirements',
  '24-acre campus with state-of-the-art infrastructure',
  'MoUs with 107+ organisations including leading multinationals and international universities',
];

const DOCS = [
  { label: 'LOI Announcement (Official)', href: 'https://www.griet.ac.in/' },
  { label: 'NAAC A++ Certificate', href: 'https://www.griet.ac.in/' },
  { label: 'UGC Autonomous Status Certificate', href: 'https://www.griet.ac.in/' },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function DTBUPage() {
  return (
    <AcademicsLayout title="Deemed-to-be University (DTBU)">

      <div className="flex items-start gap-4 p-5 rounded-xl border-2 mb-8" style={{ borderColor: college.primaryColor, backgroundColor: `${college.primaryColor}05` }}>
        <div>
          <p className="font-hind font-bold text-[16px] mb-1" style={{ color: college.primaryColor }}>
            Letter of Intent (LOI) Received
          </p>
          <p className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed">
            GRIET has received a <strong>Letter of Intent (LOI) from the Ministry of Education, Government of India</strong> for the grant of Deemed-to-be University status. This milestone is a recognition of GRIET's sustained academic excellence, research output, and institutional quality over more than two decades.
          </p>
        </div>
      </div>

      <section className="mb-10">
        <SectionLabel>Journey to Excellence</SectionLabel>
        <div className="relative pl-5 border-l-2" style={{ borderColor: `${college.primaryColor}30` }}>
          {MILESTONES.map(({ year, event }) => (
            <div key={year} className="mb-5 relative">
              <span
                className="absolute -left-[23px] top-0.5 w-4 h-4 rounded-full border-2 bg-white flex-shrink-0"
                style={{ borderColor: college.primaryColor }}
              />
              <p className="font-hind font-bold text-[0.9375rem] mb-0.5" style={{ color: college.primaryColor }}>{year}</p>
              <p className="font-dm-sans text-[12.5px] text-gray-600 leading-relaxed">{event}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Institutional Strengths Supporting DTBU Application</SectionLabel>
        <div className="flex flex-col gap-2 p-5 rounded-xl bg-gray-50 border border-gray-200">
          {STRENGTHS.map((s, i) => (
            <div key={i} className="flex items-start gap-2 font-dm-sans text-[12.5px] text-gray-700">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
              {s}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <SectionLabel>Related Documents</SectionLabel>
        <div className="flex flex-col gap-2 p-5 rounded-xl bg-gray-50 border border-gray-200">
          {DOCS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm-sans text-[12.5px] font-medium hover:underline flex items-center gap-2"
              style={{ color: college.primaryColor }}
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              {label}
            </a>
          ))}
        </div>
      </section>

    </AcademicsLayout>
  );
}
