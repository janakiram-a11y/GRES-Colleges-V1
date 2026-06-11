import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const AWARDS = [
  { title: 'Chhatra Vishwakarma Award', year: '2019', detail: 'GRIET Mechanical Engineering students won the First Prize from India\'s Vice President — Education Sector III.' },
  { title: 'JNTUH Hackathon', year: '2018', detail: 'GRIET students won all 3 trophies at the JNTUH Hackathon (Feb 23–24, 2018).' },
  { title: 'NIRF Engineering Rankings', year: '2017–2018', detail: 'Ranked in the 151–200 category in NIRF for both years.' },
  { title: 'International Blockchain Congress', year: '2018', detail: 'GRIET students won the Second Prize of ₹50,000 at the International Blockchain Congress.' },
  { title: 'JNTUH Research Center Status', year: '2018', detail: 'Mechanical Engineering department was awarded Research Center status by JNTUH.' },
  { title: 'BAJA Design ATV Competition', year: '2018', detail: 'Second Place and a prize of ₹1,00,000 at the BAJA Design ATV Competition.' },
  { title: 'ISTE Best Student Project Award', year: '2017', detail: 'Awarded by ISTE Telangana Section for outstanding student project.' },
  { title: 'All India Essay Writing', year: '2016', detail: 'Students won the Zonal First Prize in All India Essay Writing (August 2016).' },
  { title: 'TCS Awards', year: '2016', detail: 'Recognition for Best Student and Best Student Project categories.' },
  { title: 'Hackathon — CSE', year: '2015', detail: '"Direction via SMS" project won First Place at the CSE Hackathon 2015.' },
  { title: 'CSR-GHRDC Survey', year: '2015', detail: 'Ranked among the Top 4 colleges in Telangana.' },
  { title: 'Careers360 Ratings', year: '2013–2018', detail: 'Consistently rated AAA+ (2015–2018) and AAA (2013) in Andhra Pradesh.' },
  { title: 'GATE 2010 — All India 9th Rank', year: '2010', detail: 'An ECE student achieved All India 9th Rank in GATE 2010.' },
  { title: 'IAS Civil Services — 2nd Rank', year: '2010', detail: 'Alumna Swetha Mohanty (batch 2005, CSIT) achieved Second Rank in the All India Civil Services Examination.' },
  { title: 'ISTE Awards', year: '2007–2014', detail: 'Best CSE Student (2007, 2008, 2014), Best Overall Student (2008), Best College (2009), Best Principal (2009, 2014), Best Engineering Faculty (2014).' },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[15px] sm:text-[17px] shrink-0" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function HonoursAwardsPage() {
  return (
    <AcademicsLayout title="Honours & Awards">
      <SectionLabel>Awards & Recognitions</SectionLabel>
      <div className="flex flex-col gap-4">
        {AWARDS.map(({ title, year, detail }, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row gap-3 p-4 sm:p-5 rounded-xl border border-gray-200 bg-white hover:shadow-sm transition-shadow w-full overflow-hidden"
          >
            <div className="flex sm:flex-col items-center sm:items-start gap-2 sm:w-10 flex-shrink-0">
              <span
                className="font-hind font-bold text-[20px] sm:text-[22px] leading-none"
                style={{ color: `${college.primaryColor}30` }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <p className="font-hind font-bold text-[13px] sm:text-[14px] leading-snug break-words" style={{ color: college.primaryColor }}>{title}</p>
                <span
                  className="font-dm-sans text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full text-white whitespace-nowrap flex-shrink-0"
                  style={{ backgroundColor: college.accentColor }}
                >
                  {year}
                </span>
              </div>
              <p className="font-dm-sans text-[12px] sm:text-[12.5px] text-gray-600 leading-relaxed break-words">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </AcademicsLayout>
  );
}
