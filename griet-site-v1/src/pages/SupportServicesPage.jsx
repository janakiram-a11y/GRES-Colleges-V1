import { Link } from 'react-router-dom';
import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const SERVICES = [
  {
    title: 'Library & Information Centre',
    desc: '2-storey library housing 1,30,740+ volumes, 150 print journals, 6,500+ e-books, and 21,500+ e-journals. Fully automated with KOHA and cloud-based OPAC.',
    link: '/academics/library',
    internal: true,
  },
  {
    title: 'Computing & Networking',
    desc: 'High-bandwidth fiber-optic internet (1 Gbps campus network), computer labs with 24×7 access, Wi-Fi across academic blocks and hostels.',
    link: null,
  },
  {
    title: 'Sports Facilities',
    desc: 'Cricket ground, football field, basketball, volleyball, badminton and tennis courts, indoor gym, and table tennis room for student recreation and competitive sports.',
    link: '/sports',
    internal: true,
  },
  {
    title: 'Transport',
    desc: '27 bus routes covering all major areas of Hyderabad, Secunderabad, and surrounding districts. Affordable, safe, and punctual daily service.',
    link: '/transport',
    internal: true,
  },
  {
    title: 'Banking & ATM',
    desc: 'An on-campus bank branch with ATM facility to meet the day-to-day financial needs of students and staff without leaving campus.',
    link: null,
  },
  {
    title: 'Medical Centre',
    desc: 'Full-time resident doctor with a well-equipped first-aid room. Immediate emergency care and referral support available throughout the working day.',
    link: null,
  },
  {
    title: 'Water Treatment (RO Plant)',
    desc: 'On-campus Reverse Osmosis purification plant ensuring safe, clean, and potable drinking water at all points across campus 24×7.',
    link: null,
  },
  {
    title: 'Solar Power',
    desc: 'Rooftop solar photovoltaic power plant generating clean renewable energy, reducing electricity costs and lowering the campus carbon footprint.',
    link: null,
  },
  {
    title: 'Canteen & Food Court',
    desc: 'Hygienic, well-maintained canteen with affordable and nutritious meal options for students and staff, serving breakfast, lunch, and evening snacks.',
    link: null,
  },
  {
    title: 'Hostel',
    desc: 'Separate, secure hostels for boys and girls with furnished rooms, common areas, Wi-Fi, indoor games, round-the-clock security, and in-house catering.',
    link: null,
  },
  {
    title: 'NSS & Student Activities Cell',
    desc: 'Active National Service Scheme unit organising social service camps, cleanliness drives, blood donation camps, and community outreach programs.',
    link: null,
  },
  {
    title: 'Placement & Training Cell',
    desc: 'Dedicated team coordinating campus placements, internships, pre-placement training, aptitude coaching, mock interviews, and industry visits.',
    link: '/placements',
    internal: true,
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

export default function SupportServicesPage() {
  return (
    <AcademicsLayout title="Support Services">

      <p className="font-dm-sans text-[13px] text-gray-600 leading-relaxed mb-8">
        GRIET provides a comprehensive range of support services designed to enhance the quality of campus life,
        ensure student well-being, and enable a focused and comfortable learning environment.
      </p>

      <SectionLabel>Campus Support Services</SectionLabel>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SERVICES.map(({ title, desc, link, internal: isInternal }) => (
          <div key={title} className="p-5 rounded-xl border border-gray-200 bg-white flex flex-col gap-2">
            <p className="font-hind font-bold text-[13px]" style={{ color: college.primaryColor }}>{title}</p>
            <p className="font-dm-sans text-[12px] text-gray-600 leading-relaxed flex-1">{desc}</p>
            {link && (
              isInternal ? (
                <Link
                  to={link}
                  className="font-dm-sans text-[12px] font-semibold hover:underline self-start mt-1"
                  style={{ color: college.accentColor }}
                >
                  Learn more →
                </Link>
              ) : (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dm-sans text-[12px] font-semibold hover:underline self-start mt-1"
                  style={{ color: college.accentColor }}
                >
                  Learn more →
                </a>
              )
            )}
          </div>
        ))}
      </div>

    </AcademicsLayout>
  );
}
