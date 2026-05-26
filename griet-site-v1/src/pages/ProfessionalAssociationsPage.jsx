import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const ASSOCIATIONS = [
  {
    short: 'IEEE',
    full: 'Institute of Electrical and Electronics Engineers',
    dept: 'ECE, EEE, CSE',
    desc: 'GRIET hosts an active IEEE Student Branch (SB) conducting technical talks, workshops, paper contests, and IEEE day celebrations. Students regularly participate in IEEE-sponsored events across South India.',
    website: 'https://www.ieee.org/',
  },
  {
    short: 'IETE',
    full: 'Institution of Electronics and Telecommunication Engineers',
    dept: 'ECE',
    desc: 'IETE Student Forum at GRIET organises technical symposia, project expos, and industry interaction programmes for ECE students.',
    website: 'https://www.iete.org/',
  },
  {
    short: 'CSI',
    full: 'Computer Society of India',
    dept: 'CSE, IT',
    desc: 'CSI Student Branch at GRIET conducts coding competitions, hackathons, seminars on emerging technologies, and certification workshops for computing students.',
    website: 'https://www.csi-india.org/',
  },
  {
    short: 'ISTE',
    full: 'Indian Society for Technical Education',
    dept: 'All Departments',
    desc: 'ISTE Faculty and Student chapters at GRIET are engaged in FDPs, STTPs, and skill-enhancement activities. GRIET has received multiple ISTE Best College and Best Principal awards.',
    website: 'https://www.isteindia.org/',
  },
  {
    short: 'SAE',
    full: 'Society of Automotive Engineers',
    dept: 'Mechanical Engineering',
    desc: 'SAE Collegiate Club at GRIET participates in BAJA SAE, SUPRA SAE, and Formula SAE competitions, winning national prizes in design and fabrication events.',
    website: 'https://www.saeindia.org/',
  },
  {
    short: 'SME',
    full: 'Society of Manufacturing Engineers',
    dept: 'Mechanical Engineering',
    desc: 'SME Student Chapter conducts activities related to manufacturing, machining, and production technologies through competitions and industry visits.',
    website: 'https://www.sme.org/',
  },
  {
    short: 'ICI',
    full: 'Indian Concrete Institute',
    dept: 'Civil Engineering',
    desc: 'ICI Student Chapter at GRIET participates in national concrete design competitions, organises talks by practicing civil engineers, and conducts technical seminars.',
    website: 'https://www.ici.org.in/',
  },
  {
    short: 'IEI',
    full: 'The Institution of Engineers (India)',
    dept: 'Civil, Mechanical, EEE',
    desc: 'IEI Student Chapter promotes engineering research, continuing education, and national-level technical competitions among engineering students.',
    website: 'https://www.ieindia.org/',
  },
  {
    short: 'ISACA',
    full: 'Information Systems Audit and Control Association',
    dept: 'CSE, IT',
    desc: 'ISACA Student Group at GRIET focuses on information security, IT governance, risk management, and professional certifications like CISA and CRISC.',
    website: 'https://www.isaca.org/',
  },
  {
    short: 'ISHRAE',
    full: 'Indian Society of Heating, Refrigerating and Air Conditioning Engineers',
    dept: 'Mechanical Engineering',
    desc: 'ISHRAE Student Chapter organises workshops on HVAC systems, energy conservation, and sustainable building technologies.',
    website: 'https://www.ishrae.in/',
  },
  {
    short: 'IGBC',
    full: 'Indian Green Building Council',
    dept: 'Civil Engineering',
    desc: 'IGBC Student Chapter promotes awareness of green building practices, LEED certification, and sustainable construction methods.',
    website: 'https://www.igbc.in/',
  },
  {
    short: 'CST-ERG',
    full: 'Centre for Smart Technologies – Engineering Research Group',
    dept: 'All Departments',
    desc: 'An inter-disciplinary research group at GRIET fostering collaboration on smart technologies, IoT, embedded systems, and cross-departmental student projects.',
    website: null,
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

export default function ProfessionalAssociationsPage() {
  return (
    <AcademicsLayout title="Professional Associations">

      <p className="font-dm-sans text-[13px] text-gray-600 leading-relaxed mb-8">
        GRIET houses active student and faculty chapters of 12 national and international professional bodies.
        These associations provide platforms for technical growth, research exposure, networking, and industry interaction.
      </p>

      <SectionLabel>Associations & Chapters</SectionLabel>

      <div className="flex flex-col gap-4">
        {ASSOCIATIONS.map(({ short, full, dept, desc, website }) => (
          <div key={short} className="p-5 rounded-xl border border-gray-200 bg-white">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <p className="font-hind font-bold text-[14px]" style={{ color: college.primaryColor }}>{short}</p>
              <span className="font-dm-sans text-[11px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: college.accentColor }}>{dept}</span>
            </div>
            <p className="font-dm-sans text-[11.5px] text-gray-500 mb-1.5">{full}</p>
            <p className="font-dm-sans text-[12.5px] text-gray-600 leading-relaxed mb-2">{desc}</p>
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm-sans text-[12px] font-semibold hover:underline"
                style={{ color: college.accentColor }}
              >
                Visit {short} website →
              </a>
            )}
          </div>
        ))}
      </div>

    </AcademicsLayout>
  );
}
