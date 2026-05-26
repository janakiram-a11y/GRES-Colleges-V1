import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const SECTIONS = [
  {
    heading: 'Academic Infrastructure',
    items: [
      { title: 'Classrooms', desc: 'Spacious, well-ventilated classrooms equipped with audio-visual facilities, smart boards, and high-speed internet connectivity for interactive learning.' },
      { title: 'Laboratories', desc: 'State-of-the-art laboratories across all departments, stocked with modern equipment and instruments to provide hands-on practical experience.' },
      { title: 'Computer Centres', desc: 'High-end computing labs with the latest hardware and licensed software. 24×7 internet access with high-bandwidth fiber-optic connectivity.' },
      { title: 'Seminar Halls', desc: 'Fully equipped seminar halls and conference rooms with projectors, sound systems, and seating for small and large gatherings.' },
      { title: 'Language Lab', desc: 'A dedicated language and communication lab to strengthen English proficiency and soft skills among students.' },
    ],
  },
  {
    heading: 'Library & Learning Resources',
    items: [
      { title: 'Central Library', desc: '2-storey mezzanine spread over 1,670 sq.m. housing 17,155 titles, 1,30,740 volumes, 150 print journals, 6,500+ e-books and 21,500+ e-journals.' },
      { title: 'Digital Library', desc: 'Fully automated with KOHA software and cloud-based OPAC. Subscribed to IEEE, Elsevier, Springer, J-Gate, and ASCE databases.' },
      { title: 'Reading Rooms', desc: 'Quiet, air-conditioned reading rooms with separate sections for UG, PG, and PhD scholars.' },
    ],
  },
  {
    heading: 'Research & Innovation',
    items: [
      { title: 'AICTE IDEA Lab', desc: 'A dedicated innovation space for ideation, prototyping, and product development, equipped with 3D printers, laser cutters, and Arduino/Raspberry Pi kits.' },
      { title: 'Incubation Centre', desc: 'Nurtures student entrepreneurship with mentorship, seed funding support, and industry connections under the GRIET Technology Business Incubator.' },
      { title: 'Centre of Excellence Labs', desc: '15 specialised CoE labs including AI/ML, High Performance Computing, Material Processing & Characterization, and SEM (Scanning Electron Microscope worth ₹1.2 Cr, DST-FIST).' },
    ],
  },
  {
    heading: 'Campus Amenities',
    items: [
      { title: 'Canteen & Food Court', desc: 'Hygienic, affordable food facilities serving students and staff throughout the day. Separate staff and student canteen sections.' },
      { title: 'Banking & ATM', desc: 'On-campus bank branch with ATM facility for convenient financial transactions.' },
      { title: 'Medical Centre', desc: 'Full-time doctor available during working hours. First-aid and emergency medical facilities accessible round-the-clock.' },
      { title: 'Boys & Girls Hostels', desc: 'Comfortable and secure residential facilities with Wi-Fi, common rooms, indoor games, and round-the-clock security.' },
    ],
  },
  {
    heading: 'Utilities & Green Initiatives',
    items: [
      { title: 'Solar Roof-Top Power Plant', desc: 'Rooftop solar panels generating renewable electricity to meet a significant portion of campus energy needs.' },
      { title: 'RO & Water Treatment Plant', desc: 'Reverse Osmosis plant ensuring safe, potable drinking water throughout the campus.' },
      { title: 'Sewage Treatment Plant (STP)', desc: 'On-campus STP for sustainable wastewater management and recycling of treated water for landscaping.' },
      { title: 'Diesel Generators', desc: 'Uninterrupted power supply through DG sets ensuring zero downtime in academic activities.' },
    ],
  },
  {
    heading: 'Accessibility & Safety',
    items: [
      { title: 'Divyangjan-Friendly Infrastructure', desc: 'Ramps, elevators, and accessible restrooms to ensure inclusive access for persons with disabilities.' },
      { title: 'CCTV Surveillance', desc: 'Round-the-clock CCTV monitoring across campus premises for student and staff safety.' },
      { title: 'Parking', desc: 'Dedicated, well-organised parking facilities for faculty, staff, and visitors.' },
    ],
  },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function InfrastructurePage() {
  return (
    <AcademicsLayout title="Infrastructure">

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { stat: '24 Acres', label: 'Lush Green Campus' },
          { stat: '1670 sq.m', label: 'Library Area' },
          { stat: '15+', label: 'CoE Labs' },
          { stat: '24×7', label: 'Internet Access' },
        ].map(({ stat, label }) => (
          <div key={label} className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
            <p className="font-hind font-bold text-[20px]" style={{ color: college.primaryColor }}>{stat}</p>
            <p className="font-dm-sans text-[12px] text-gray-500 font-semibold">{label}</p>
          </div>
        ))}
      </div>

      {SECTIONS.map(({ heading, items }) => (
        <section key={heading} className="mb-10">
          <SectionLabel>{heading}</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map(({ title, desc }) => (
              <div key={title} className="p-4 rounded-xl border border-gray-200 bg-white">
                <p className="font-hind font-bold text-[13px] mb-1" style={{ color: college.primaryColor }}>{title}</p>
                <p className="font-dm-sans text-[12px] text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

    </AcademicsLayout>
  );
}
