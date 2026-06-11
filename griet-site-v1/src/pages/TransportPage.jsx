import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const ROUTES = [
  { sno: 1,  route: 'Route 1',  area: 'LB Nagar – Dilsukhnagar – Mehdipatnam – Kukatpally – GRIET' },
  { sno: 2,  route: 'Route 2',  area: 'Secunderabad – Bowenpally – SR Nagar – Yousufguda – GRIET' },
  { sno: 3,  route: 'Route 3',  area: 'ECIL – Malkajgiri – Karkhana – Kompally – GRIET' },
  { sno: 4,  route: 'Route 4',  area: 'Patancheru – Miyapur – JNTU – Kukatpally – GRIET' },
  { sno: 5,  route: 'Route 5',  area: 'Mehdipatnam – Jubilee Hills – Madhapur – Kukatpally – GRIET' },
  { sno: 6,  route: 'Route 6',  area: 'Nagole – Uppal – Habsiguda – Tarnaka – Kukatpally – GRIET' },
  { sno: 7,  route: 'Route 7',  area: 'Attapur – Rajendra Nagar – Manikonda – Gachibowli – GRIET' },
  { sno: 8,  route: 'Route 8',  area: 'Alwal – Bolarum – Medchal Road – Kompally – GRIET' },
  { sno: 9,  route: 'Route 9',  area: 'Chandanagar – Bhel – Miyapur – JNTU – GRIET' },
  { sno: 10, route: 'Route 10', area: 'Vanasthalipuram – LB Nagar – Hayathnagar – Dilsukhnagar – GRIET' },
  { sno: 11, route: 'Route 11', area: 'Malkajgiri – Neredmet – Jawaharnagar – Quthbullapur – GRIET' },
  { sno: 12, route: 'Route 12', area: 'Nizamabad Road – Medak – Patancheru – Miyapur – GRIET' },
  { sno: 13, route: 'Route 13', area: 'Shamshabad – Rajendranagar – Mehdipatnam – Kukatpally – GRIET' },
  { sno: 14, route: 'Route 14', area: 'Bhimavaram (Andhra Pradesh) – Eluru – Vijayawada – Bus Stand – GRIET' },
  { sno: 15, route: 'Route 15', area: 'Ameerpet – SR Nagar – Kukatpally – GRIET' },
  { sno: 16, route: 'Route 16', area: 'Santoshnagar – Kothapet – Malakpet – Himayathnagar – GRIET' },
  { sno: 17, route: 'Route 17', area: 'Tolichowki – Rethibowli – Banjara Hills – Panjagutta – Kukatpally – GRIET' },
  { sno: 18, route: 'Route 18', area: 'Bachupally – Nizampet – Pragathi Nagar – JNTU – GRIET' },
  { sno: 19, route: 'Route 19', area: 'Peerzadiguda – Uppal – Nacharam – Ramanthapur – GRIET' },
  { sno: 20, route: 'Route 20', area: 'Chanda Nagar – Lingampally – KPHB – Nizampet – GRIET' },
  { sno: 21, route: 'Route 21', area: 'Vanasthalipuram – Meerpet – Kothapet – Dilsukhnagar – GRIET' },
  { sno: 22, route: 'Route 22', area: 'Miryalaguda – Nalgonda – Ibrahimpatnam – GRIET' },
  { sno: 23, route: 'Route 23', area: 'Karimnagar – Warangal – Uppal – GRIET' },
  { sno: 24, route: 'Route 24', area: 'Suryapet – Nalgonda – Raichur Road – GRIET' },
  { sno: 25, route: 'Route 25', area: 'Khammam – Suryapet – Kodad – GRIET' },
  { sno: 26, route: 'Route 26', area: 'Siddipet – Gajwel – Zahirabad – Patancheru – GRIET' },
  { sno: 27, route: 'Route 27', area: 'Wanaparthy – Jadcherla – Mahbubnagar – GRIET' },
];

const RULES = [
  'Students/staff must carry and display their I-Card / Bus Pass while on board.',
  'Personal vehicles of students are not permitted inside the campus premises.',
  'Buses depart strictly on schedule — students must board at the designated stop on time.',
  'Ragging, misbehaviour, or damage to bus property will lead to cancellation of transport facility.',
  'Consumption of food, beverages, or tobacco products is strictly prohibited in buses.',
  'Students must vacate buses promptly upon arrival; loitering near buses is not allowed.',
  'Any grievance regarding transport should be reported to the Transport In-Charge.',
  'Transport fee is non-refundable once paid for the semester.',
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function TransportPage() {
  return (
    <AcademicsLayout title="Transport Facility">

      <div className="flex flex-wrap items-center gap-6 mb-8 p-4 rounded-xl bg-gray-50 border border-gray-200">
        <div className="text-center">
          <p className="font-hind font-bold text-[32px]" style={{ color: college.primaryColor }}>27</p>
          <p className="font-dm-sans text-[0.875rem] text-gray-500 font-semibold">Bus Routes</p>
        </div>
        <div className="w-px h-12 bg-gray-200 hidden sm:block" />
        <div>
          <p className="font-hind font-bold text-base text-gray-800">College-Operated Fleet</p>
          <p className="font-dm-sans text-[12.5px] text-gray-500">Covering Hyderabad, Secunderabad, and surrounding districts. Safe, reliable, and affordable daily transport for students and staff.</p>
        </div>
      </div>

      <section className="mb-10">
        <SectionLabel>Bus Routes</SectionLabel>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-[12.5px] font-dm-sans border-collapse">
            <thead>
              <tr style={{ backgroundColor: `${college.primaryColor}15` }}>
                {['S.No', 'Route', 'Pickup / Drop Area'].map((h) => (
                  <th key={h} className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROUTES.map(({ sno, route, area }, i) => (
                <tr key={sno} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2.5 text-gray-400 border-b border-gray-100 w-12">{sno}</td>
                  <td className="px-4 py-2.5 font-semibold border-b border-gray-100" style={{ color: college.primaryColor }}>{route}</td>
                  <td className="px-4 py-2.5 text-gray-700 border-b border-gray-100">{area}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Rules & Regulations</SectionLabel>
        <div className="flex flex-col gap-2.5">
          {RULES.map((r, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-white font-hind font-bold text-[10px] flex-shrink-0 mt-0.5"
                style={{ backgroundColor: college.primaryColor }}
              >
                {i + 1}
              </span>
              <span className="font-dm-sans text-[12.5px] text-gray-700">{r}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <SectionLabel>Contact</SectionLabel>
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed">
            For transport enquiries, route information, or pass-related matters, please contact the <strong>Transport In-Charge</strong> at the college office or write to{' '}
            <a href="mailto:transport@griet.ac.in" className="hover:underline" style={{ color: college.accentColor }}>transport@griet.ac.in</a>.
          </p>
        </div>
      </section>

    </AcademicsLayout>
  );
}
