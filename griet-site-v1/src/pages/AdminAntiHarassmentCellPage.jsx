import AdministrationLayout from '../components/AdministrationLayout';
import college from '../theme';

function SectionHeading({ children }) {
  return (
    <h2
      className="font-display font-bold text-xl mb-5 pb-2 inline-block"
      style={{ color: college.primaryColor, borderBottom: `2px solid ${college.accentColor}` }}
    >
      {children}
    </h2>
  );
}

const mandate = [
  'Prevent sexual harassment at the workplace as mandated by the POSH Act, 2013',
  'Ensure a safe, respectful, and dignified environment for all students, faculty, and staff',
  'Receive, investigate, and redress complaints of sexual harassment promptly and confidentially',
  'Conduct awareness campaigns, sensitisation programmes, and workshops',
  'Submit annual reports to the District Officer as required by law',
];

const composition = [
  { role: 'Presiding Officer', desc: 'A woman employed at a senior level at the workplace' },
  { role: 'Members (Faculty)', desc: 'At least two faculty members, preferably with experience in social work or legal knowledge' },
  { role: 'Members (Staff)', desc: 'At least one non-teaching staff member' },
  { role: 'External Member', desc: 'Member from a non-governmental organisation or association committed to the cause of women' },
];

const helpInfo = [
  { label: 'Filing a Complaint', desc: 'Complaints must be submitted in writing to the Presiding Officer within 3 months of the incident. The committee ensures complete confidentiality throughout the process.' },
  { label: 'Inquiry Process', desc: 'The committee completes inquiry within 90 days. Both parties are heard. The principles of natural justice are followed throughout.' },
  { label: 'Support & Counselling', desc: 'The institution provides counselling support and interim relief measures during the inquiry process to the aggrieved person.' },
  { label: 'Appeals', desc: 'Any party aggrieved by the findings may appeal to the appellate authority within 90 days of receiving the recommendations.' },
];

export default function AdminAntiHarassmentCellPage() {
  return (
    <AdministrationLayout title="Anti Sexual Harassment Cell">
      <div className="space-y-8">

        <div>
          <SectionHeading>Anti Sexual Harassment Cell</SectionHeading>
          <p className="font-dm-sans text-base leading-relaxed text-gray-600 mb-2 max-w-2xl">
            The Anti Sexual Harassment Cell (Internal Complaints Committee) at GRIET is constituted as per
            the <strong>Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013</strong> to
            provide a safe and respectful environment for every individual on campus.
          </p>
        </div>

        {/* Mandate */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Mandate &amp; Scope
          </h3>
          <ul className="space-y-2.5">
            {mandate.map((item) => (
              <li key={item} className="flex items-start gap-3 font-dm-sans text-base text-gray-700">
                <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: college.primaryColor }} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Composition */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Committee Composition
          </h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-[0.9375rem] font-dm-sans">
              <thead>
                <tr style={{ backgroundColor: college.primaryColor }}>
                  <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem] w-44">Role</th>
                  <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem]">Description</th>
                </tr>
              </thead>
              <tbody>
                {composition.map(({ role, desc }, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border-b border-gray-100 font-semibold" style={{ color: college.accentColor }}>{role}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Complaint Process */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Complaint &amp; Redressal Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {helpInfo.map(({ label, desc }) => (
              <div key={label} className="bg-[#F6F1F2] rounded-lg border border-gray-200 p-5">
                <h4 className="font-hind font-semibold text-base mb-2" style={{ color: college.primaryColor }}>{label}</h4>
                <p className="font-dm-sans text-[0.9375rem] leading-relaxed text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Awareness */}
        <section
          className="rounded-xl p-6 bg-white border-l-4"
          style={{ borderColor: college.primaryColor, boxShadow: '0 1px 4px rgba(91,16,39,0.06), 0 4px 16px -4px rgba(91,16,39,0.10)' }}
        >
          <span className="inline-block font-display font-bold text-[0.75rem] uppercase tracking-[0.12em] mb-3 px-3 py-1 rounded-full text-white" style={{ backgroundColor: college.primaryColor }}>
            Awareness Programmes
          </span>
          <p className="font-body text-[1.0625rem] leading-[1.75] text-gray-700">
            GRIET regularly conducts orientation sessions for new students and staff, sensitisation workshops,
            and legal literacy programmes on the POSH Act. Posters, notices, and information on the complaint
            process are displayed prominently across campus.
          </p>
        </section>

      </div>
    </AdministrationLayout>
  );
}
