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
  { sno: 1,  name: 'Dr. Ch. Mallikarjuna Rao',   portfolio: 'Controller of Examinations',          photo: 'https://www.griet.ac.in/2022/iqac%20committee/cmr.jpg' },
  { sno: 2,  name: 'Dr. K Prasanna Lakshmi',      portfolio: 'Academic Affairs',                    photo: 'https://www.griet.ac.in/2022/iqac%20committee/prasanna%20lakshmi.jpg' },
  { sno: 3,  name: 'Dr. Swadish Kumar Singh',      portfolio: 'Research & Consultancy',              photo: 'https://www.griet.ac.in/2022/iqac%20committee/swadesh.jpg' },
  { sno: 4,  name: 'Prof. P Gopala Krishna',       portfolio: 'Assessment & Accreditation',          photo: 'https://www.griet.ac.in/images/gopal.jpeg' },
  { sno: 5,  name: 'Dr. A Vinay Kumar',            portfolio: 'Student Affairs',                     photo: 'https://www.griet.ac.in/2023/avk.jpg' },
  { sno: 6,  name: 'Dr. VN Rama Devi',             portfolio: 'Mentor Coordination',                 photo: 'https://www.griet.ac.in/2023/Deans%20Photos/IMG-20231026-WA0042.jpg' },
  { sno: 7,  name: 'Dr. K. Butchi Raju',           portfolio: 'Training & Placements',               photo: 'https://www.griet.ac.in/2023/Deans%20Photos/butchiraju.jpg' },
  { sno: 8,  name: 'Dr. Y Rama Krishna Prasad',    portfolio: 'Discipline',                          photo: 'https://www.griet.ac.in/images/yrk.jpeg' },
  { sno: 9,  name: 'Dr. B.Ch. Nookaraju',          portfolio: 'Admissions',                          photo: 'https://www.griet.ac.in/2023/Deans%20Photos/nookaraju.jpg' },
  { sno: 10, name: 'Dr. Hima Bindu Valiveti',      portfolio: 'Faculty Development Programs',        photo: 'https://www.griet.ac.in/2025/himabindu.jpg' },
  { sno: 11, name: 'Dr. M Kiran Kumar',            portfolio: 'Advanced Academic Centre (AAC)',      photo: 'https://www.griet.ac.in/2023/Deans%20Photos/kiran.jpg' },
  { sno: 12, name: 'Dr. J Sridevi',                portfolio: 'Finishing School',                    photo: 'https://www.griet.ac.in/2023/sridevi.jpg' },
  { sno: 13, name: 'Dr. V Rama Sundari',           portfolio: 'Technology & Innovation Cell',        photo: 'https://www.griet.ac.in/2023/Deans%20Photos/sundari.jpg' },
  { sno: 14, name: 'Dr. T Padma',                  portfolio: 'Green Campus & Outreach',             photo: 'https://www.griet.ac.in/2023/Deans%20Photos/IMG-20231026-WA0039.jpg' },
  { sno: 15, name: 'Dr. K Madhavi',                portfolio: 'ICT',                                 photo: 'https://www.griet.ac.in/images/madhavi.jpg' },
  { sno: 16, name: 'Dr. T Srinivas',               portfolio: 'PG Studies',                          photo: 'https://www.griet.ac.in/2023/Deans%20Photos/IMG-20231026-WA0032.jpg' },
  { sno: 17, name: 'Dr. GS Bapiraju',              portfolio: 'Internships',                         photo: 'https://www.griet.ac.in/2023/bapiraju.jpg' },
  { sno: 18, name: 'Dr. C Lavanya',                portfolio: 'IQAC',                                photo: 'https://www.griet.ac.in/images/Lavanya.jpeg' },
  { sno: 19, name: 'Dr. T Jagannadha Swamy',       portfolio: 'Alumni Affairs',                      photo: 'https://www.griet.ac.in/2023/Deans%20Photos/IMG-20231026-WA0038.jpg' },
  { sno: 20, name: 'Dr. N Rajashekar',             portfolio: 'Higher Studies & Competitive Exams',  photo: 'https://www.griet.ac.in/2023/Deans%20Photos/rajasekhar.jpg' },
  { sno: 21, name: 'Dr. P Sri Vidya Devi',         portfolio: 'Skill Plus',                          photo: 'https://www.griet.ac.in/2023/Deans%20Photos/IMG-20231026-WA0031.jpg' },
];

export default function AdminDeansPage() {
  return (
    <AdministrationLayout title="Deans">
      <div className="space-y-10">

        <div>
          <SectionHeading>Deans</SectionHeading>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 mb-8 max-w-2xl">
            GRIET's administrative and academic operations are led by experienced deans overseeing 21 distinct
            portfolios spanning academics, research, placements, student welfare, and quality assurance.
          </p>
        </div>

        {/* Photo card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {deans.map(({ sno, name, portfolio, photo }) => (
            <div key={sno} className="flex flex-col items-center text-center bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
              <img
                src={photo}
                alt={name}
                className="w-20 h-20 rounded-full object-cover border-2 mb-3"
                style={{ borderColor: college.primaryColor }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div
                className="w-20 h-20 rounded-full items-center justify-center text-white font-hind font-bold text-xl mb-3 border-2 hidden"
                style={{ backgroundColor: college.primaryColor, borderColor: college.primaryColor }}
              >
                {name.split(' ').pop()[0]}
              </div>
              <p className="font-hind font-bold text-[12px] leading-snug mb-1" style={{ color: college.primaryColor }}>
                {name}
              </p>
              <p className="font-dm-sans text-[11px] text-gray-500 leading-tight">{portfolio}</p>
            </div>
          ))}
        </div>

        {/* Table reference */}
        <section>
          <h3 className="font-hind font-bold text-[16px] mb-4" style={{ color: college.primaryColor }}>Dean Portfolios</h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-[600px] w-full text-[13px] font-dm-sans">
              <thead>
                <tr style={{ backgroundColor: college.primaryColor }}>
                  <th className="text-left px-4 py-3 text-white font-hind font-semibold text-[12px] w-14 whitespace-nowrap">S.No</th>
                  <th className="text-left px-4 py-3 text-white font-hind font-semibold text-[12px]">Dean Name</th>
                  <th className="text-left px-4 py-3 text-white font-hind font-semibold text-[12px]">Portfolio</th>
                </tr>
              </thead>
              <tbody>
                {deans.map(({ sno, name, portfolio }, i) => (
                  <tr key={sno} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-400 font-medium whitespace-nowrap">{sno}</td>
                    <td className="px-4 py-3 border-b border-gray-100 font-semibold text-gray-800 whitespace-nowrap">{name}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-600">{portfolio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </AdministrationLayout>
  );
}
