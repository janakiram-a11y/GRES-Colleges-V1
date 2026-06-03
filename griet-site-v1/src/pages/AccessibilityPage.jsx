import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const facilities = [
  {
    icon: '🚑',
    title: 'Ambulance on Campus',
    description: '24/7 ambulance available for medical emergencies, ensuring rapid response for students and staff with special needs.',
  },
  {
    icon: '⚡',
    title: 'E-Bike Assistance',
    description: 'Electric mobility assistance within campus for students with mobility impairments, enabling easy movement across all areas.',
  },
  {
    icon: '🛗',
    title: 'Lifts / Elevators',
    description: 'Elevators installed in all major academic blocks to ensure barrier-free vertical access for physically challenged individuals.',
  },
  {
    icon: '♿',
    title: 'Access Ramps',
    description: 'Ramped entry at all buildings and academic blocks, designed to allow smooth wheelchair and assisted-mobility access.',
  },
  {
    icon: '🦽',
    title: 'Wheelchair Provision',
    description: 'Wheelchairs available at the main entrance and medical center for immediate use by students requiring mobility support.',
  },
  {
    icon: '🚻',
    title: 'Accessible Washrooms',
    description: 'Dedicated PH (physically handicapped) washrooms in all major blocks, equipped with grab rails and spacious layouts.',
  },
];

const supportServices = [
  'Medical Center with a full-time doctor available during college hours for immediate healthcare needs.',
  'Divyangjan reservations in hostels to ensure accessible and comfortable accommodation.',
  'Ground-floor classrooms allocated on request for students with mobility impairments.',
];

export default function AccessibilityPage() {
  return (
    <AcademicsLayout title="Divyangjan-Friendly Facilities">
      {/* About */}
      <section className="mb-10">
        <h2 className="font-hind font-bold text-xl md:text-2xl mb-3" style={{ color: college.primaryColor }}>
          Our Commitment to Inclusive Education
        </h2>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          GRIET is deeply committed to fostering an inclusive learning environment where every student
          can thrive regardless of physical ability. All campus facilities have been thoughtfully
          designed and continually upgraded to ensure full accessibility for persons with disabilities
          and the physically challenged community.
        </p>
      </section>

      {/* Facilities Grid */}
      <section className="mb-10">
        <h2 className="font-hind font-bold text-xl md:text-2xl mb-6" style={{ color: college.primaryColor }}>
          Accessibility Facilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="rounded-xl border p-6 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow bg-white"
              style={{ borderColor: `${college.primaryColor}22` }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full text-4xl mb-4"
                style={{ backgroundColor: `${college.primaryColor}12` }}
              >
                {facility.icon}
              </div>
              <h3 className="font-hind font-bold text-lg mb-2" style={{ color: college.primaryColor }}>
                {facility.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support Services */}
      <section className="mb-10">
        <h2 className="font-hind font-bold text-xl md:text-2xl mb-4" style={{ color: college.primaryColor }}>
          Support Services
        </h2>
        <ul className="space-y-3">
          {supportServices.map((service) => (
            <li key={service} className="flex items-start gap-3 text-gray-700 text-base">
              <span
                className="mt-1 flex-shrink-0 w-2 h-2 rounded-full"
                style={{ backgroundColor: college.accentColor }}
              />
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* AICTE Compliance */}
      <section
        className="mb-10 rounded-xl p-6 border"
        style={{ backgroundColor: `${college.primaryColor}08`, borderColor: `${college.primaryColor}22` }}
      >
        <h2 className="font-hind font-bold text-xl md:text-2xl mb-3" style={{ color: college.primaryColor }}>
          AICTE Compliance
        </h2>
        <p className="text-gray-700 leading-relaxed text-base">
          All accessibility facilities at GRIET comply with the norms set by the All India Council for
          Technical Education (AICTE) for inclusive infrastructure. The institute regularly reviews and
          upgrades these facilities to meet evolving standards and ensure a dignified and equitable
          experience for all Divyangjan students.
        </p>
      </section>

      {/* Contact */}
      <section
        className="rounded-xl p-6 border"
        style={{ borderColor: `${college.accentColor}44`, backgroundColor: `${college.accentColor}08` }}
      >
        <h2 className="font-hind font-bold text-xl md:text-2xl mb-3" style={{ color: college.primaryColor }}>
          Contact for Special Arrangements
        </h2>
        <p className="text-gray-700 leading-relaxed text-base mb-3">
          Students requiring personalized accessibility support or additional arrangements are encouraged
          to reach out to the Dean of Student Affairs. Our team is committed to ensuring that every
          student has equal access to all academic and campus resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <a
            href={`mailto:${college.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: college.primaryColor }}
          >
            <span>✉</span> Email Dean of Student Affairs
          </a>
          <a
            href={`tel:${college.phone}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border transition-colors hover:bg-white"
            style={{ color: college.primaryColor, borderColor: college.primaryColor }}
          >
            <span>📞</span> {college.phone}
          </a>
        </div>
      </section>
    </AcademicsLayout>
  );
}
