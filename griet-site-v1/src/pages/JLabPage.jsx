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

const stats = [
  { value: '500+', label: 'Students/Year' },
  { value: '20+', label: 'Project Kits' },
  { value: '8', label: 'Sessions/Week' },
  { value: 'Est. 2015', label: 'Established' },
];

const facilities = [
  {
    icon: '🔬',
    title: 'Basic Electronics Workbenches',
    description: 'Oscilloscopes, multimeters, soldering stations for hands-on circuit exploration and debugging.',
  },
  {
    icon: '🤖',
    title: 'Microcontroller Kits',
    description: 'Arduino, NodeMCU, and Raspberry Pi kits for embedded systems and rapid prototyping.',
  },
  {
    icon: '🖨️',
    title: '3D Printing Corner',
    description: 'FDM printers for rapid prototyping of enclosures, mechanical parts, and project housings.',
  },
  {
    icon: '⚙️',
    title: 'Robotics Kit Zone',
    description: 'Chassis, servo motors, and motor drivers for building and testing autonomous robots.',
  },
  {
    icon: '📡',
    title: 'IoT Experimentation',
    description: 'Wi-Fi/BT modules, sensor arrays, and cloud tools for connected-device projects.',
  },
  {
    icon: '💡',
    title: 'Display & Demo Area',
    description: 'LED boards and presentation space for live project showcases and peer demonstrations.',
  },
];

const programs = [
  {
    title: 'J-Lab Induction (Sem 1)',
    description: 'Foundational sessions covering basic electronics, lab safety, and tool familiarization for all first-year students.',
  },
  {
    title: 'Mini Project Challenge (Sem 2)',
    description: 'A structured 4-week team project where students design, build, and present a working prototype.',
  },
  {
    title: 'J-Lab Open House (Annual)',
    description: 'An annual event where student projects are displayed to industry visitors, faculty, and senior students.',
  },
  {
    title: 'Summer Innovation Camp',
    description: 'An intensive 2-week vacation program for deep dives into robotics, IoT, and creative engineering challenges.',
  },
];

export default function JLabPage() {
  return (
    <AcademicsLayout title="J-Lab @ GRIET">

      {/* About */}
      <section className="mb-10">
        <SectionLabel>About J-Lab</SectionLabel>
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="text-gray-700 leading-relaxed text-base">
            J-Lab is GRIET's dedicated undergraduate innovation lab for first and second-year students.
            It provides hands-on prototyping, peer collaboration, and guided projects — giving junior
            students a strong practical foundation before they enter advanced semester labs. J-Lab
            bridges the gap between classroom theory and real-world engineering practice from day one.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-10">
        <SectionLabel>At a Glance</SectionLabel>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border p-5 flex flex-col items-center justify-center text-center shadow-sm bg-white"
              style={{ borderColor: `${college.primaryColor}22` }}
            >
              <span className="font-hind font-bold text-2xl md:text-3xl" style={{ color: college.primaryColor }}>
                {stat.value}
              </span>
              <span className="text-gray-500 text-sm mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="mb-10">
        <SectionLabel>Lab Facilities</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="rounded-xl border p-6 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow bg-white"
              style={{ borderColor: `${college.primaryColor}22` }}
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-full text-3xl mb-4"
                style={{ backgroundColor: `${college.primaryColor}12` }}
              >
                {facility.icon}
              </div>
              <h3 className="font-hind font-bold text-base mb-2" style={{ color: college.primaryColor }}>
                {facility.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="mb-10">
        <SectionLabel>Programs & Activities</SectionLabel>
        <ol className="space-y-4">
          {programs.map((program, index) => (
            <li
              key={program.title}
              className="flex gap-4 rounded-xl border p-5 bg-white shadow-sm"
              style={{ borderColor: `${college.primaryColor}22` }}
            >
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-hind font-bold text-sm text-white"
                style={{ backgroundColor: college.primaryColor }}
              >
                {index + 1}
              </span>
              <div>
                <h3 className="font-hind font-bold text-base mb-1" style={{ color: college.primaryColor }}>
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section
        className="rounded-xl p-6 border"
        style={{ borderColor: `${college.accentColor}44`, backgroundColor: `${college.accentColor}08` }}
      >
        <SectionLabel>Contact J-Lab</SectionLabel>
        <p className="text-gray-700 leading-relaxed text-base mb-4">
          For queries about J-Lab sessions, project kit requests, or program enrollment, reach out
          to the J-Lab coordinator directly.
        </p>
        <a
          href="mailto:jlab@griet.ac.in"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: college.primaryColor }}
        >
          <span>✉</span> jlab@griet.ac.in
        </a>
      </section>

    </AcademicsLayout>
  );
}
