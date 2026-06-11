import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

const STATS = [
  { stat: '24 Acres', label: 'Lush Green Campus' },
  { stat: '80+', label: 'Classrooms' },
  { stat: '60+', label: 'Laboratories' },
  { stat: '500-seat', label: 'Auditorium' },
  { stat: '1 MW', label: 'Solar Power' },
  { stat: '27', label: 'Transport Vehicles' },
];

const CATEGORIES = [
  {
    title: 'Academic Blocks',
    desc: '80+ audio-visual-enabled classrooms, seminar halls, tutorial rooms, and project labs spread across multiple academic blocks. All rooms are equipped with projectors, smart boards, and high-speed internet for interactive learning.',
  },
  {
    title: 'Laboratories',
    desc: '60+ fully-equipped labs across all departments. Notable facilities include the AICTE IDEA Lab, a Scanning Electron Microscope (SEM) worth Rs.1.2 crore funded by DST-FIST, a High Performance Computing (HPC) cluster, and the GRMTL material testing lab — NABL-accredited.',
  },
  {
    title: 'Central Library',
    desc: 'A 2-storey mezzanine library spread over 1,670 sq.m housing 17,155 titles, 1,30,740 volumes, 150 print journals, 6,500+ e-books, and 21,500+ e-journals. Fully automated with KOHA software and cloud-based OPAC. Subscribed to IEEE, Elsevier, Springer, J-Gate, and ASCE databases.',
  },
  {
    title: 'Auditorium & Seminar Halls',
    desc: 'A 500-seat main auditorium equipped with professional audio-visual systems, and multiple seminar halls with 100–200 seating capacity for conferences, workshops, guest lectures, and student events.',
  },
  {
    title: 'Sports Complex',
    desc: 'Comprehensive indoor and outdoor sports facilities supporting cricket, football, basketball, volleyball, table tennis, chess, and badminton. A well-equipped gymnasium is also available for students and staff.',
  },
  {
    title: 'Hostel Facilities',
    desc: 'Separate Boys\' and Girls\' hostels with 24/7 security, Wi-Fi connectivity, hygienic mess and canteen, common rooms, and indoor games. A safe and comfortable residential environment close to the academic blocks.',
  },
  {
    title: 'ICT Infrastructure',
    desc: '1 Gbps internet backbone with 100+ Wi-Fi access points covering the entire campus. 3,000+ network nodes, smart classrooms with interactive boards, and a campus-wide LAN connecting all academic and administrative buildings.',
  },
  {
    title: 'Dining & Canteen',
    desc: 'Multiple canteen outlets serving hygienic and nutritious food at subsidized rates. Separate sections for students and staff ensure convenience throughout the day.',
  },
  {
    title: 'Medical Centre',
    desc: 'A full-time resident doctor is available during working hours. The centre is equipped with first-aid facilities, an ambulance, and pharmacy tie-ups. Emergency medical assistance is accessible round-the-clock.',
  },
  {
    title: 'Green Campus Initiatives',
    desc: '1 MW solar rooftop power plant, rainwater harvesting system, a sewage treatment plant (STP), RO water plant, and lush green landscaping across the 24-acre campus. GRIET is committed to sustainable campus operations.',
  },
  {
    title: 'Skill Development Centre (SDC)',
    desc: 'TASK-authorized Skill Development Centre offering industry-recognized certifications and training programs. Accessible via the SDC portal at grietsdc.in, the centre bridges academia and industry skill requirements.',
  },
  {
    title: 'J-Lab & Innovation Facilities',
    desc: 'The Junior Innovation Lab (J-Lab) and AICTE IDEA Lab provide students with hands-on prototyping tools including 3D printers, laser cutters, Arduino/Raspberry Pi kits, and fabrication equipment to build and test real-world solutions.',
  },
];

export default function InfrastructurePage() {
  return (
    <AcademicsLayout title="Infrastructure">

      <p className="font-dm-sans text-[0.9375rem] text-gray-600 leading-relaxed mb-8">
        GRIET's 24-acre sprawling lush green campus at Bachupally, Hyderabad, is designed to support world-class technical education. From state-of-the-art laboratories and a NABL-accredited material testing lab to a 500-seat auditorium and a 1 MW solar power plant, the campus infrastructure enables holistic learning and sustainable growth.
      </p>

      {/* Key Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
        {STATS.map(({ stat, label }) => (
          <div key={label} className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
            <p className="font-hind font-bold text-[18px]" style={{ color: college.primaryColor }}>{stat}</p>
            <p className="font-dm-sans text-[11px] text-gray-500 font-semibold leading-snug mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Infrastructure Categories */}
      <section className="mb-10">
        <SectionLabel>Campus Facilities</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CATEGORIES.map(({ title, desc }) => (
            <div key={title} className="p-5 rounded-xl border border-gray-200 bg-white">
              <p className="font-hind font-bold text-[0.9375rem] mb-1.5" style={{ color: college.primaryColor }}>{title}</p>
              <p className="font-dm-sans text-[0.875rem] text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NABL Accreditation Note */}
      <div className="p-4 rounded-xl border border-gray-200 bg-gray-50 flex gap-3 items-start">
        <span className="mt-0.5 shrink-0 w-2 h-2 rounded-full mt-1.5" style={{ background: college.primaryColor }} />
        <p className="font-dm-sans text-[0.875rem] text-gray-600 leading-relaxed">
          <span className="font-semibold text-gray-800">NABL Accreditation:</span> GRMTL (Gokaraju Rangaraju Material Testing Laboratory) at GRIET is accredited by the National Accreditation Board for Testing and Calibration Laboratories (NABL), ensuring internationally recognized standards for material testing and characterization services.
        </p>
      </div>

    </AcademicsLayout>
  );
}
