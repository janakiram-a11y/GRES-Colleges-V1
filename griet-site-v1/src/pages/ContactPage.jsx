import college from '../theme';
import CollegeLayout from '../CollegeLayout';
import { AcademicsBanner } from '../components/AcademicsLayout';

const { primaryColor, accentColor } = college;

function SectionHeading({ children }) {
  return (
    <h2
      className="font-display font-bold text-xl mb-4 pb-2 inline-block"
      style={{ color: primaryColor, borderBottom: `2px solid ${accentColor}` }}
    >
      {children}
    </h2>
  );
}

const reachUs = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Address',
    lines: [
      'Gokaraju Rangaraju Institute of Engineering & Technology',
      'Nizampet Road, Bachupally, Kukatpally',
      'Hyderabad – 500090, Telangana, India',
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    lines: [
      'Main: 7207344440',
      '24×7 Women Helpline: +91 72073 44440',
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    lines: [
      'info@griet.ac.in',
      'placements@gokaraju.org',
    ],
  },
];

const deptContacts = [
  { dept: 'Administration', person: 'P Ayub Khan, Administrative Officer', phone: '7207344440', email: 'info@griet.ac.in' },
  { dept: 'Scholarships', person: 'M. Vijay / S. Anjani, Scholarship Coordinators', phone: '—', email: '—' },
  { dept: 'Transcripts & Certificates', person: 'Exam Branch', phone: '—', email: 'doe@griet.ac.in' },
  { dept: 'Placements Cell', person: 'Training & Placements', phone: '7207344440', email: 'placements@gokaraju.org' },
  { dept: 'Website Queries', person: 'Mr. P Prasanth Kumar, Asst. Prof., EEE', phone: '—', email: 'grietwebsite@gmail.com' },
];

const portals = [
  {
    label: 'Student/Faculty Feedback',
    title: 'ECAP Portal',
    href: 'http://www.webprosindia.com/Gokaraju',
  },
  {
    label: 'Grievance Registration',
    title: 'GCAP Portal',
    href: 'http://www.griet.in/gcap/greviance-login.php',
  },
  {
    label: 'AICTE Feedback',
    title: 'AICTE Portal',
    href: 'https://www.aicte-india.org/feedback/index.php',
  },
];

export default function ContactPage() {
  return (
    <CollegeLayout college={college}>
      <AcademicsBanner title="Contact Us" />

      <div className="page-pad">
        <div className="space-y-10">

          {/* Reach Us */}
          <section>
            <SectionHeading>Reach Us</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reachUs.map(({ icon, label, lines }) => (
                <div key={label} className="rounded-lg border border-gray-200 bg-white p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full flex-shrink-0"
                      style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                    >
                      {icon}
                    </div>
                    <span className="font-hind font-semibold text-[0.9375rem] uppercase tracking-wide self-center" style={{ color: primaryColor }}>{label}</span>
                  </div>
                  <div className="space-y-0.5 pl-1">
                    {lines.map((line, i) => (
                      <p key={i} className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed break-words">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Departmental Contacts */}
          <section>
            <SectionHeading>Departmental Contacts</SectionHeading>

            {/* Mobile: stacked cards (hidden on md+) */}
            <div className="flex flex-col gap-4 md:hidden">
              {deptContacts.map(({ dept, person, phone, email }, i) => (
                <div key={i} className="rounded-lg border border-gray-200 bg-white p-4 space-y-2">
                  <p className="font-hind font-bold text-base" style={{ color: accentColor }}>{dept}</p>
                  <div className="flex items-start gap-3">
                    <span className="font-dm-sans text-[0.875rem] text-gray-500 w-16 flex-shrink-0">Person</span>
                    <span className="font-dm-sans text-[0.9375rem] text-gray-700 break-words">{person}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-dm-sans text-[0.875rem] text-gray-500 w-16 flex-shrink-0">Phone</span>
                    <span className="font-dm-sans text-[0.9375rem] text-gray-700">{phone}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-dm-sans text-[0.875rem] text-gray-500 w-16 flex-shrink-0">Email</span>
                    <span className="font-dm-sans text-[0.9375rem] text-gray-700 break-all">{email}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: table (hidden below md) */}
            <div className="overflow-x-auto rounded-lg border border-gray-200 hidden md:block">
              <table className="w-full text-[0.9375rem] font-dm-sans">
                <thead>
                  <tr style={{ backgroundColor: primaryColor }}>
                    <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem]">Department</th>
                    <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem]">Contact Person</th>
                    <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem]">Phone</th>
                    <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem]">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {deptContacts.map(({ dept, person, phone, email }, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 border-b border-gray-100 font-semibold" style={{ color: accentColor }}>{dept}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{person}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{phone}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Feedback & Grievance Portals */}
          <section>
            <SectionHeading>Feedback &amp; Grievance Portals</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portals.map(({ label, title, href }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-200 bg-white p-5 flex flex-col gap-1 hover:shadow-sm transition-shadow group min-h-[44px]"
                >
                  <span className="font-hind font-bold text-[11px] uppercase tracking-widest" style={{ color: accentColor }}>{label}</span>
                  <span className="font-hind font-bold text-[15px]" style={{ color: primaryColor }}>{title}</span>
                  <span className="font-dm-sans text-[0.875rem] text-gray-500 mt-1 group-hover:underline">Click to access →</span>
                </a>
              ))}
            </div>
          </section>

          {/* Location */}
          <section>
            <SectionHeading>Location</SectionHeading>
            <div className="rounded-lg overflow-hidden border border-gray-200 h-[250px] sm:h-[300px] md:h-[400px]">
              <iframe
                title="GRIET Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6569986895!2d78.38052831527305!3d17.49394188785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b0f3f2a4c5%3A0x1a2b3c4d5e6f7a8b!2sGRIET!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

        </div>
      </div>
    </CollegeLayout>
  );
}
