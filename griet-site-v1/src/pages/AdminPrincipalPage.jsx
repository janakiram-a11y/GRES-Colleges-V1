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

const credentials = [
  { label: 'Ph.D.', value: 'Power Electronics, Osmania University (Research conducted at BHEL R&D with UGC Junior Research Fellowship)' },
  { label: 'Publications', value: '35 papers in SCI and Scopus-indexed international journals' },
  { label: 'Ph.D. Guidance', value: 'Registered Ph.D. Guide at JNTU Hyderabad; 2 scholars awarded, more in progress' },
  { label: 'IEEE', value: 'Senior Member, IEEE' },
  { label: 'Professional', value: 'FIE (Fellow, Institution of Engineers); Life Member ISTE; FIETE' },
  { label: 'Certifications', value: 'Cambridge International Certification for Teachers and Trainers (CICTT) – Distinction; Dale Carnegie High Impact Teaching Skills' },
  { label: 'LabVIEW', value: 'Certified LabVIEW Associate Developer (National Instruments)' },
  { label: 'MIT', value: 'MIT Honor Code Certificate in Circuits and Electronics – Grade A' },
];

const funding = [
  { agency: 'DST (Young Scientist Award)', amount: '₹28 Lakhs', purpose: 'Research project in Power Electronics' },
  { agency: 'DST (R&D)', amount: '₹48 Lakhs', purpose: 'Research & Development project' },
  { agency: 'MSME', amount: '₹30 Lakhs', purpose: 'Industry-linked research project' },
];

const awards = [
  'Young Scientist Award – Department of Science & Technology (DST), Government of India',
  'Best Teacher Award – ISTE',
  'Best Project Award – ISTE',
  "Cambridge International Certification for Teachers and Trainers (CICTT) with Distinction",
  'International Certification in High Impact Teaching Skills (Dale Carnegie & Associates)',
];

export default function AdminPrincipalPage() {
  return (
    <AdministrationLayout title="Principal">
      <div className="space-y-8">

        <SectionHeading>Principal</SectionHeading>

        {/* Profile card */}
        <div className="bg-white rounded-lg border border-black/10 shadow-sm overflow-hidden">
          <div className="h-2 w-full" style={{ backgroundColor: college.primaryColor }} />
          <div className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src="https://www.griet.ac.in/images/j_praveen_griet.jpg"
                alt="Dr. J Praveen — Principal, GRIET"
                className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-2"
                style={{ borderColor: college.primaryColor }}
              />
              <div>
                <h3 className="font-hind font-bold text-[22px] leading-snug" style={{ color: college.primaryColor }}>
                  Dr. J Praveen
                </h3>
                <p className="font-dm-sans text-base font-semibold mt-1" style={{ color: college.accentColor }}>
                  Principal, GRIET
                </p>
                <p className="font-dm-sans text-[0.9375rem] text-gray-500 mt-0.5">
                  Ph.D. (Osmania University) &nbsp;|&nbsp; Senior Member IEEE &nbsp;|&nbsp; FIE &nbsp;|&nbsp; Life Member ISTE
                </p>
              </div>
            </div>

            {/* Principal's message */}
            <blockquote
              className="mt-6 border-l-4 pl-5 py-2 italic font-dm-sans text-base leading-relaxed text-gray-700"
              style={{ borderColor: college.primaryColor }}
            >
              "At GRIET, we believe that education is not just about acquiring knowledge, but about developing the
              ability to think critically, innovate relentlessly, and serve society with integrity. Our commitment to
              academic excellence, research, and holistic development shapes every engineer who walks out of our campus."
            </blockquote>
          </div>
        </div>

        {/* Academic Credentials */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Academic Credentials &amp; Memberships
          </h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-[0.9375rem] font-dm-sans">
              <thead>
                <tr style={{ backgroundColor: college.primaryColor }}>
                  <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem] w-36">Category</th>
                  <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem]">Details</th>
                </tr>
              </thead>
              <tbody>
                {credentials.map(({ label, value }, i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2.5 border-b border-gray-100 font-semibold" style={{ color: college.accentColor }}>{label}</td>
                    <td className="px-4 py-2.5 border-b border-gray-100 text-gray-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Research Funding */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Research Funding Received
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {funding.map(({ agency, amount, purpose }) => (
              <div key={agency} className="bg-[#F6F1F2] rounded-lg p-4 border border-gray-200">
                <p
                  className="font-hind font-bold text-[22px] mb-1"
                  style={{ color: college.primaryColor }}
                >
                  {amount}
                </p>
                <p className="font-hind font-semibold text-[0.875rem] mb-1.5" style={{ color: college.accentColor }}>
                  {agency}
                </p>
                <p className="font-dm-sans text-[0.875rem] text-gray-600">{purpose}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Awards &amp; Recognition
          </h3>
          <ul className="space-y-2.5">
            {awards.map((item) => (
              <li key={item} className="flex items-start gap-3 font-dm-sans text-base text-gray-700">
                <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                {item}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </AdministrationLayout>
  );
}
