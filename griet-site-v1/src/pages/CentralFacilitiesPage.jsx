import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const FACILITIES = [
  {
    name: 'Fabrication Laboratory',
    category: 'Manufacturing',
    desc: 'A fully equipped fabrication lab with CNC machines, welding stations, lathe machines, milling machines, and precision measurement instruments. Used for prototype development, project work, and advanced manufacturing research across Mechanical and Civil engineering.',
    features: ['CNC Machining Centre', 'TIG/MIG Welding Station', 'Lathe & Milling Machines', 'Precision Measurement Instruments', 'Surface Roughness Tester'],
  },
  {
    name: 'Instrumentation & Calibration Centre',
    category: 'Research',
    desc: 'A dedicated instrumentation centre offering calibration, testing, and measurement services to internal departments and external organisations. Equipped with high-precision sensors, data acquisition systems, and LabVIEW-based instruments.',
    features: ['Data Acquisition Systems (NI)', 'Precision Signal Generators', 'Oscilloscopes & DMMs', 'LabVIEW Software Platform', 'Calibration Standards Equipment'],
  },
  {
    name: 'Greenhouse & Botanical Garden',
    category: 'Environmental Science',
    desc: 'A functioning greenhouse and botanical garden within the GRIET campus maintaining rare plant species, running experiments on controlled environment agriculture, and contributing to campus biodiversity. Supports Civil and Environmental Engineering research.',
    features: ['Rare Plant Species Collection', 'Drip Irrigation System', 'Soil Testing Facility', 'Composting Unit', 'Botanical Research Area'],
  },
  {
    name: 'Media Lab & Multimedia Studio',
    category: 'Media & Communication',
    desc: 'A state-of-the-art media lab with green screen studio, audio recording booth, video editing workstations, and broadcasting equipment. Used for academic video production, student media projects, and the college\'s digital communication activities.',
    features: ['Green Screen Studio', 'Audio Recording Booth', 'Adobe Creative Cloud Suite', 'High-End Video Editing Workstations', 'Broadcasting & Live-Streaming Setup'],
  },
  {
    name: 'GRIET Museum',
    category: 'History & Heritage',
    desc: 'A curated museum showcasing GRIET\'s institutional history, milestones, awards, and significant academic and research achievements since 1997. Also houses vintage engineering models, historical instruments, and exhibits on the evolution of engineering at GRIET.',
    features: ['Institutional History Exhibits', 'Vintage Engineering Models', 'Award & Recognition Gallery', 'Alumni Achievement Wall', 'Historical Instrument Collection'],
  },
  {
    name: 'Scanning Electron Microscope (SEM) Facility',
    category: 'Research',
    desc: 'DST-FIST funded Scanning Electron Microscope (worth ₹1.2 Crore) with EDAX and Core Scan attachments. Supports research in materials science, nanotechnology, and advanced characterization across Mechanical, ECE, and Chemical Engineering departments.',
    features: ['High-Resolution SEM Imaging', 'EDAX Elemental Analysis', 'Core Scan Mapping', 'DST-FIST Sponsored', 'Open Access for PhD Scholars'],
  },
  {
    name: 'High Performance Computing (HPC) Centre',
    category: 'Computing',
    desc: 'A Centre of Excellence in High Performance Computing equipped with multi-node GPU clusters for AI/ML research, simulation, and large-scale data processing. Available to faculty researchers and PhD scholars.',
    features: ['GPU Clusters (NVIDIA)', 'Parallel Computing Infrastructure', 'Deep Learning Frameworks', 'MATLAB & ANSYS HPC Licences', 'Remote Access for Researchers'],
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

export default function CentralFacilitiesPage() {
  return (
    <AcademicsLayout title="Central Facilities">

      <p className="font-dm-sans text-[13px] text-gray-600 leading-relaxed mb-8">
        GRIET maintains a range of centrally accessible facilities that support research, innovation, and creative work across all departments. These shared resources are available to faculty, PhD scholars, and students with appropriate authorization.
      </p>

      <SectionLabel>Facilities</SectionLabel>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {FACILITIES.map(({ name, category, desc, features }) => (
          <div key={name} className="p-5 rounded-xl border border-gray-200 bg-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <p className="font-hind font-bold text-[14px]" style={{ color: college.primaryColor }}>{name}</p>
              <span className="font-dm-sans text-[11px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: college.accentColor }}>{category}</span>
            </div>
            <p className="font-dm-sans text-[12.5px] text-gray-600 leading-relaxed mb-3">{desc}</p>
            <div className="flex flex-wrap gap-2">
              {features.map((f) => (
                <span
                  key={f}
                  className="font-dm-sans text-[11px] font-semibold px-2.5 py-1 rounded-lg border"
                  style={{ color: college.primaryColor, borderColor: `${college.primaryColor}25`, backgroundColor: `${college.primaryColor}06` }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="mt-8">
        <SectionLabel>Access & Booking</SectionLabel>
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
            Central facilities are available to GRIET faculty and students on a booking basis. Research scholars requiring access to specialized equipment (SEM, HPC, etc.) should contact the respective facility in-charge or submit a request through the Dean of Research office.
            For enquiries: <a href="mailto:research@griet.ac.in" className="hover:underline" style={{ color: college.accentColor }}>research@griet.ac.in</a>
          </p>
        </div>
      </section>

    </AcademicsLayout>
  );
}
