import AdministrationLayout from '../components/AdministrationLayout';
import college from '../theme';

function SectionHeading({ children }) {
  return (
    <h2
      className="font-hind font-bold text-2xl mb-6 pb-2 inline-block"
      style={{ color: college.primaryColor, borderBottom: `2px solid ${college.accentColor}` }}
    >
      {children}
    </h2>
  );
}

const deans = [
  { sno: 1,  name: 'Dr. Ch. Mallikarjuna Rao',   portfolio: 'Controller of Examinations' },
  { sno: 2,  name: 'Dr. K Prasanna Lakshmi',      portfolio: 'Academic Affairs' },
  { sno: 3,  name: 'Dr. Swadish Kumar Singh',     portfolio: 'Research & Consultancy' },
  { sno: 4,  name: 'Prof. P Gopala Krishna',      portfolio: 'Assessment & Accreditation' },
  { sno: 5,  name: 'Dr. A Vinay Kumar',           portfolio: 'Student Affairs' },
  { sno: 6,  name: 'Dr. VN Rama Devi',            portfolio: 'Mentor Coordination' },
  { sno: 7,  name: 'Dr. K. Butchi Raju',          portfolio: 'Training & Placements' },
  { sno: 8,  name: 'Dr. Y Rama Krishna Prasad',   portfolio: 'Discipline' },
  { sno: 9,  name: 'Dr. B.Ch. Nookaraju',         portfolio: 'Admissions' },
  { sno: 10, name: 'Dr. Hima Bindu Valiveti',     portfolio: 'Faculty Development Programs' },
  { sno: 11, name: 'Dr. M Kiran Kumar',           portfolio: 'Advanced Academic Centre (AAC)' },
  { sno: 12, name: 'Dr. J Sridevi',               portfolio: 'Finishing School' },
  { sno: 13, name: 'Dr. V Rama Sundari',          portfolio: 'Technology and Innovation Cell' },
  { sno: 14, name: 'Dr. T Padma',                 portfolio: 'Green Campus & Outreach' },
  { sno: 15, name: 'Dr. K Madhavi',               portfolio: 'ICT' },
  { sno: 16, name: 'Dr. T Srinivas',              portfolio: 'PG Studies' },
  { sno: 17, name: 'Dr. GS Bapiraju',            portfolio: 'Internships' },
  { sno: 18, name: 'Dr. C Lavanya',              portfolio: 'IQAC' },
  { sno: 19, name: 'Dr. T Jagannadha Swamy',     portfolio: 'Alumni Affairs' },
  { sno: 20, name: 'Dr. N Rajashekar',           portfolio: 'Higher Studies & Competitive Exams' },
  { sno: 21, name: 'Dr. P Sri Vidya Devi',       portfolio: 'Skill Plus' },
];

export default function AdminDeansPage() {
  return (
    <AdministrationLayout title="Deans">
      <div className="space-y-8">

        <div>
          <SectionHeading>Deans</SectionHeading>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 mb-8 max-w-2xl">
            GRIET's administrative and academic operations are led by experienced deans overseeing 21 distinct
            portfolios spanning academics, research, placements, student welfare, and quality assurance.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-[13px] font-dm-sans">
            <thead>
              <tr style={{ backgroundColor: college.primaryColor }}>
                <th className="text-left px-4 py-3 text-white font-hind font-semibold text-[12px] w-14">S.No</th>
                <th className="text-left px-4 py-3 text-white font-hind font-semibold text-[12px]">Dean Name</th>
                <th className="text-left px-4 py-3 text-white font-hind font-semibold text-[12px]">Portfolio</th>
              </tr>
            </thead>
            <tbody>
              {deans.map(({ sno, name, portfolio }, i) => (
                <tr key={sno} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border-b border-gray-100 text-gray-400 font-medium">{sno}</td>
                  <td className="px-4 py-3 border-b border-gray-100 font-semibold text-gray-800">{name}</td>
                  <td className="px-4 py-3 border-b border-gray-100 text-gray-600">{portfolio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </AdministrationLayout>
  );
}
