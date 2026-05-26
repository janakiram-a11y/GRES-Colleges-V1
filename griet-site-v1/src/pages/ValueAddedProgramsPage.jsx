import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const PROGRAMS = [
  {
    name: 'Cisco Networking Academy',
    category: 'Networking',
    dept: 'CSE / IT / ECE',
    desc: 'Cisco NetAcad courses including CCNA, IT Essentials, and Cybersecurity Essentials. Students earn globally recognised Cisco certifications and develop real-world networking skills.',
    certifying: 'Cisco Systems Inc.',
  },
  {
    name: 'IBM SkillsBuild / Academic Initiative',
    category: 'Cloud & AI',
    dept: 'CSE / IT',
    desc: 'IBM-sponsored training on Cloud Computing, AI, Data Science, and Blockchain through IBM SkillsBuild. Students earn IBM digital badges and micro-credentials.',
    certifying: 'IBM India',
  },
  {
    name: 'Oracle Academy',
    category: 'Database & Java',
    dept: 'CSE / IT',
    desc: 'Oracle Academy curriculum covering Java Fundamentals, Database Design, SQL, and Application Express. Students receive Oracle Academy certificates recognised worldwide.',
    certifying: 'Oracle Corporation',
  },
  {
    name: 'Microsoft Azure / AI Fundamentals',
    category: 'Cloud & AI',
    dept: 'CSE / IT / ECE',
    desc: 'Microsoft Azure certification preparatory courses (AZ-900, AI-900) delivered through Microsoft Learn and Azure for Students subscription, enabling students to access cloud resources.',
    certifying: 'Microsoft Corporation',
  },
  {
    name: 'AI & Machine Learning Workshop',
    category: 'AI / ML',
    dept: 'CSE / IT / ECE',
    desc: 'Hands-on training in Python, TensorFlow, Keras, and Scikit-learn. Students work on real datasets and deploy ML models. Delivered in collaboration with industry experts.',
    certifying: 'GRIET / Industry Partner',
  },
  {
    name: 'Dell EMC Academic Alliance',
    category: 'Storage & Cloud',
    dept: 'CSE / IT',
    desc: 'Dell Technologies curriculum covering Cloud Infrastructure, Data Analytics, and Virtualization. MoU-backed programme offering Dell EMC academic certifications.',
    certifying: 'Dell Technologies',
  },
  {
    name: 'Training & Employability Programme (TEP)',
    category: 'Soft Skills & Placement',
    dept: 'All Departments',
    desc: 'A structured pre-placement training programme covering aptitude, logical reasoning, verbal ability, communication skills, group discussions, and mock interviews for placement readiness.',
    certifying: 'GRIET Placement Cell',
  },
  {
    name: 'NPTEL Spoken Tutorial',
    category: 'Open Education',
    dept: 'All Departments',
    desc: 'IIT Bombay\'s Spoken Tutorial programme offering free online courses in C, C++, Python, Java, Linux, MATLAB, and other tools. Students appear for the online certification test.',
    certifying: 'IIT Bombay / NPTEL',
  },
  {
    name: 'IoT & Embedded Systems Workshop',
    category: 'IoT / Embedded',
    dept: 'ECE / EEE / CSE',
    desc: 'Hands-on workshops covering Arduino, Raspberry Pi, sensor interfacing, communication protocols (MQTT, Zigbee), and IoT cloud integration (AWS IoT, Google Cloud IoT).',
    certifying: 'GRIET / Industry Partner',
  },
  {
    name: 'Energy Simulation (ES) Workshop',
    category: 'Energy / Simulation',
    dept: 'EEE / Mechanical',
    desc: 'Workshops on energy system simulation using MATLAB/Simulink, HOMER Energy, and ETAP. Covers renewable energy modelling, grid simulation, and power electronics.',
    certifying: 'GRIET / MathWorks Academic',
  },
];

const CATEGORIES = [...new Set(PROGRAMS.map((p) => p.category))];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function ValueAddedProgramsPage() {
  return (
    <AcademicsLayout title="Value Added Programs">

      <p className="font-dm-sans text-[13px] text-gray-600 leading-relaxed mb-8">
        In addition to the regular curriculum, GRIET offers a wide range of industry-sponsored value-added programs and certification courses. These equip students with in-demand skills, globally recognised credentials, and enhanced employability.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORIES.map((c) => (
          <span
            key={c}
            className="font-dm-sans text-[11px] font-semibold px-3 py-1 rounded-full border"
            style={{ color: college.primaryColor, borderColor: `${college.primaryColor}40`, backgroundColor: `${college.primaryColor}08` }}
          >
            {c}
          </span>
        ))}
      </div>

      <SectionLabel>Programs & Certifications</SectionLabel>

      <div className="flex flex-col gap-4">
        {PROGRAMS.map(({ name, category, dept, desc, certifying }) => (
          <div key={name} className="p-5 rounded-xl border border-gray-200 bg-white">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <p className="font-hind font-bold text-[14px]" style={{ color: college.primaryColor }}>{name}</p>
              <span className="font-dm-sans text-[11px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: college.accentColor }}>{category}</span>
              <span
                className="font-dm-sans text-[11px] font-semibold px-2 py-0.5 rounded-full border"
                style={{ color: college.primaryColor, borderColor: `${college.primaryColor}30` }}
              >
                {dept}
              </span>
            </div>
            <p className="font-dm-sans text-[12.5px] text-gray-600 leading-relaxed mb-1.5">{desc}</p>
            <p className="font-dm-sans text-[11.5px] text-gray-400">
              <span className="font-semibold">Certifying Body:</span> {certifying}
            </p>
          </div>
        ))}
      </div>

    </AcademicsLayout>
  );
}
