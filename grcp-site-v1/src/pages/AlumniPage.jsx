import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import college from '../theme';
import Navbar from '../components/Navbar';
import NavStrip from '../components/NavStrip';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

function SectionHeader({ label, title }) {
  return (
    <div className="mb-6">
      {label && (
        <span
          className="font-dm-sans font-semibold text-[12px] uppercase tracking-[2px] mb-2 block"
          style={{ color: college.greenAccent }}
        >
          {label}
        </span>
      )}
      <h2
        className="font-hind font-bold text-[26px] leading-[34px] pb-3"
        style={{
          color: college.primaryColor,
          borderBottom: `3px solid ${college.greenAccent}`,
          display: 'inline-block',
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function RegistrationSection() {
  const fields = [
    { label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
    { label: 'Batch Year', type: 'text', placeholder: 'e.g. 2018' },
    { label: 'Programme', type: 'select', options: ['B.Pharmacy', 'M.Pharmacy – Pharmaceutics', 'M.Pharmacy – Pharmaceutical Analysis', 'M.Pharmacy – Pharmacology'] },
    { label: 'Current Organisation', type: 'text', placeholder: 'Your current employer or institution' },
    { label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
    { label: 'Phone Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
  ];

  const inputClass = 'w-full font-dm-sans text-[14px] text-[#474747] border rounded-lg px-4 py-2.5 outline-none focus:ring-2 bg-white';

  return (
    <div className="space-y-8">
      <SectionHeader label="Join the Network" title="Alumni Registration" />
      <div className="max-w-[680px]">
        <p className="font-dm-sans text-[15px] leading-[26px] text-[#474747] mb-8">
          Register with the GRCP Alumni Association to stay connected with your alma mater and fellow graduates.
          Fill the form below and our alumni team will reach out to you.
        </p>
        <div
          className="rounded-2xl p-8 border shadow-sm"
          style={{ borderColor: `${college.primaryColor}18` }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            {fields.map((field, i) => (
              <div key={i} className={field.label === 'Current Organisation' ? 'sm:col-span-2' : ''}>
                <label className="font-dm-sans font-semibold text-[13px] text-[#474747] block mb-1.5">
                  {field.label}
                </label>
                {field.type === 'select' ? (
                  <select
                    className={inputClass}
                    style={{ borderColor: `${college.primaryColor}30` }}
                    defaultValue=""
                  >
                    <option value="" disabled>Select programme</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className={inputClass}
                    style={{ borderColor: `${college.primaryColor}30` }}
                  />
                )}
              </div>
            ))}
          </div>
          <div
            className="rounded-xl p-4 mb-6"
            style={{ backgroundColor: `${college.greenAccent}12`, border: `1px solid ${college.greenAccent}25` }}
          >
            <p className="font-dm-sans text-[13px] text-[#474747]">
              <span className="font-semibold">Note:</span> Fill the form and our alumni team will reach out to you within 5–7 working days
              to complete the registration process and provide your alumni membership details.
            </p>
          </div>
          <button
            className="font-dm-sans font-semibold text-[14px] text-white px-8 py-3 rounded-lg transition-opacity hover:opacity-85"
            style={{ backgroundColor: college.greenAccent }}
          >
            Submit Registration
          </button>
        </div>
      </div>
    </div>
  );
}

function ExecutiveMembersSection() {
  const { executiveBody } = college.alumni;

  return (
    <div className="space-y-8">
      <SectionHeader label="Leadership" title="Executive Members" />
      <p className="font-dm-sans text-[15px] leading-[26px] text-[#474747] max-w-[680px]">
        The GRCP Alumni Association is governed by an elected executive committee that works to strengthen
        alumni connections, support current students, and contribute to the institution's growth.
      </p>
      <div className="overflow-x-auto rounded-2xl border max-w-[680px]" style={{ borderColor: `${college.primaryColor}18` }}>
        <table className="w-full min-w-[480px]">
          <thead>
            <tr style={{ backgroundColor: college.greenAccent }}>
              {['Role', 'Name', 'Batch Year'].map((h) => (
                <th
                  key={h}
                  className="font-dm-sans font-semibold text-[13px] text-white text-left px-6 py-3.5"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {executiveBody.map((member, i) => (
              <tr
                key={i}
                className="border-t"
                style={{ borderColor: `${college.primaryColor}10`, backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}
              >
                <td className="px-6 py-4">
                  <span
                    className="font-dm-sans font-semibold text-[13px] px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${college.primaryColor}12`, color: college.primaryColor }}
                  >
                    {member.role}
                  </span>
                </td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-6 py-4">{member.name}</td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-6 py-4">{member.batch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EnrollmentSection() {
  const benefits = [
    { title: 'Professional Networking', desc: 'Connect with GRCP graduates working across pharma, healthcare, research, and regulatory sectors.' },
    { title: 'Mentorship Opportunities', desc: 'Guide current students through career counselling, internship advice, and industry insights.' },
    { title: 'Placement Support', desc: 'Access exclusive job postings and referral opportunities within the GRCP alumni network.' },
    { title: 'Events & Reunions', desc: 'Participate in annual alumni meets, seminars, webinars, and commemorative events at GRCP.' },
  ];

  const steps = [
    { step: '01', label: 'Fill Registration Form', desc: 'Complete the online alumni registration form with your details.' },
    { step: '02', label: 'Verification', desc: 'The alumni team verifies your academic records and batch details.' },
    { step: '03', label: 'Membership Issued', desc: 'Receive your alumni membership certificate and association ID.' },
    { step: '04', label: 'Stay Connected', desc: 'Join WhatsApp groups, attend events, and contribute to the GRCP community.' },
  ];

  return (
    <div className="space-y-12">
      <SectionHeader label="Alumni Association" title="Alumni Enrollment" />
      <p className="font-dm-sans text-[15px] leading-[26px] text-[#474747] max-w-[720px]">
        Joining the GRCP Alumni Association keeps you connected to your roots and opens doors to a
        vibrant professional community. Enrollment is open to all graduates of B.Pharmacy and M.Pharmacy programs.
      </p>

      <section>
        <h3
          className="font-hind font-semibold text-[18px] mb-6"
          style={{ color: college.primaryColor }}
        >
          Benefits of Enrollment
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[760px]">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 border"
              style={{ borderColor: `${college.primaryColor}18`, backgroundColor: '#FAFAFA' }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: college.greenAccent }}
              >
                <span className="font-hind font-bold text-[13px] text-white">{i + 1}</span>
              </div>
              <h4 className="font-hind font-semibold text-[15px] mb-1.5" style={{ color: college.primaryColor }}>
                {b.title}
              </h4>
              <p className="font-dm-sans text-[13px] leading-[22px] text-[#474747]">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3
          className="font-hind font-semibold text-[18px] mb-6"
          style={{ color: college.primaryColor }}
        >
          Enrollment Steps
        </h3>
        <div className="space-y-4 max-w-[680px]">
          {steps.map((s) => (
            <div key={s.step} className="flex items-start gap-5">
              <span
                className="font-hind font-bold text-[22px] flex-shrink-0 w-10 text-center leading-none mt-1"
                style={{ color: college.greenAccent }}
              >
                {s.step}
              </span>
              <div
                className="flex-1 rounded-xl p-4 border"
                style={{ borderColor: `${college.primaryColor}18`, backgroundColor: '#FAFAFA' }}
              >
                <h4 className="font-hind font-semibold text-[14px] mb-1" style={{ color: college.primaryColor }}>
                  {s.label}
                </h4>
                <p className="font-dm-sans text-[13px] text-[#474747]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function AlumniListSection() {
  return (
    <div className="space-y-8">
      <SectionHeader label="Our Graduates" title="List of Alumni" />
      <div
        className="rounded-2xl p-10 border max-w-[600px]"
        style={{ borderColor: `${college.primaryColor}18`, backgroundColor: '#FAFAFA' }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: `${college.primaryColor}12` }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke={college.primaryColor} strokeWidth="1.5">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3
          className="font-hind font-semibold text-[18px] text-center mb-3"
          style={{ color: college.primaryColor }}
        >
          Alumni Database
        </h3>
        <p className="font-dm-sans text-[15px] leading-[26px] text-[#474747] text-center mb-6">
          The complete alumni database is maintained by the GRCP Alumni Association.
          For specific queries regarding alumni contacts or batch information, please contact the college office.
        </p>
        <div
          className="rounded-xl p-5 border"
          style={{ borderColor: `${college.primaryColor}18`, backgroundColor: '#fff' }}
        >
          <p className="font-dm-sans font-semibold text-[13px] text-[#474747] mb-1">Contact the Alumni Office</p>
          <a
            href={`mailto:${college.email}`}
            className="font-dm-sans text-[14px] underline"
            style={{ color: college.primaryColor }}
          >
            {college.email}
          </a>
          <span className="font-dm-sans text-[13px] text-[#6B7280] block mt-1">
            or call{' '}
            <a href={`tel:${college.phone}`} className="underline" style={{ color: college.primaryColor }}>
              {college.phone}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

function DistinguishedSection() {
  const { distinguished } = college.alumni;

  return (
    <div className="space-y-8">
      <SectionHeader label="Our Pride" title="Distinguished Alumni" />
      <p className="font-dm-sans text-[15px] leading-[26px] text-[#474747] max-w-[720px]">
        GRCP is proud of its alumni who have gone on to make significant contributions to the pharmaceutical
        industry, clinical research, and healthcare. Here are some of our distinguished graduates.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {distinguished.map((alum, i) => (
          <div
            key={i}
            className="rounded-2xl p-7 flex flex-col"
            style={{ backgroundColor: '#5B1027' }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: college.greenAccent }}
            >
              <span className="font-hind font-bold text-[18px] text-white">
                {alum.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <h4 className="font-hind font-bold text-[17px] text-white mb-1">{alum.name}</h4>
              <span
                className="font-dm-sans font-semibold text-[11px] px-2.5 py-1 rounded-full inline-block mb-3"
                style={{ backgroundColor: college.greenAccent, color: '#fff' }}
              >
                Batch of {alum.batch}
              </span>
              <p className="font-dm-sans text-[13px] text-white/75 mb-3">{alum.currentRole}</p>
              <div
                className="w-8 h-0.5 rounded-full mb-3"
                style={{ backgroundColor: college.greenAccent }}
              />
              <p className="font-dm-sans text-[13px] leading-[22px] text-white/65">{alum.achievement}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContributionSection() {
  const contributions = [
    {
      title: 'Guest Lectures & Seminars',
      desc: 'Alumni return to campus as guest faculty, sharing real-world pharmaceutical industry experience with current students.',
      icon: (
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 0v10l6-3M12 12l-6-3" strokeLinecap="round" strokeLinejoin="round" />
      ),
    },
    {
      title: 'Placement Support',
      desc: 'Alumni at leading pharma companies actively refer GRCP students for internships and full-time positions through their networks.',
      icon: (
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z" strokeLinecap="round" strokeLinejoin="round" />
      ),
    },
    {
      title: 'Scholarship Donations',
      desc: 'Distinguished alumni contribute to scholarship funds to support meritorious students from economically weaker backgrounds.',
      icon: (
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v1m0 10v1m6-6a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      ),
    },
    {
      title: 'Infrastructure Contributions',
      desc: 'Alumni have supported the college through donations toward laboratory equipment, library resources, and campus infrastructure.',
      icon: (
        <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V9h6v12" strokeLinecap="round" strokeLinejoin="round" />
      ),
    },
    {
      title: 'Mentorship Programs',
      desc: 'One-on-one and group mentorship programs pair final-year students with experienced alumni for career guidance and industry readiness.',
      icon: (
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" strokeLinecap="round" strokeLinejoin="round" />
      ),
    },
  ];

  return (
    <div className="space-y-10">
      <SectionHeader label="Giving Back" title="Alumni Contribution" />
      <p className="font-dm-sans text-[15px] leading-[26px] text-[#474747] max-w-[720px]">
        GRCP alumni are the institution's greatest ambassadors. Through their expertise, time, and generosity,
        our graduates continue to shape the next generation of pharmacy professionals.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {contributions.map((c, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 border"
            style={{ borderColor: `${college.primaryColor}18`, backgroundColor: '#FAFAFA' }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: `${college.primaryColor}10` }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke={college.primaryColor} strokeWidth="1.5">
                {c.icon}
              </svg>
            </div>
            <h4
              className="font-hind font-semibold text-[15px] mb-2"
              style={{ color: college.primaryColor }}
            >
              {c.title}
            </h4>
            <p className="font-dm-sans text-[13px] leading-[22px] text-[#474747]">{c.desc}</p>
          </div>
        ))}
      </div>
      <div
        className="rounded-2xl p-6 border max-w-[680px]"
        style={{ borderColor: `${college.greenAccent}30`, backgroundColor: `${college.greenAccent}0D` }}
      >
        <p className="font-dm-sans text-[14px] text-[#474747]">
          <span className="font-semibold">Interested in contributing?</span> Contact the Alumni Association or reach out to the college at{' '}
          <a href={`mailto:${college.email}`} className="underline" style={{ color: college.primaryColor }}>
            {college.email}
          </a>
          . We welcome all forms of engagement from our distinguished graduates.
        </p>
      </div>
    </div>
  );
}

const sectionConfig = {
  overview: {
    title: 'Alumni',
    subtitle: 'Connecting GRCP graduates across the pharmaceutical and healthcare world',
    breadcrumb: ['Alumni'],
  },
  registration: {
    title: 'Alumni Registration',
    subtitle: 'Register with the GRCP Alumni Association and stay connected',
    breadcrumb: ['Alumni', 'Alumni Registration'],
  },
  'executive-members': {
    title: 'Executive Members',
    subtitle: 'The elected leadership of the GRCP Alumni Association',
    breadcrumb: ['Alumni', 'Executive Members'],
  },
  enrollment: {
    title: 'Alumni Enrollment',
    subtitle: 'Join the GRCP Alumni Association and become part of a thriving community',
    breadcrumb: ['Alumni', 'Alumni Enrollment'],
  },
  list: {
    title: 'List of Alumni',
    subtitle: 'GRCP graduates serving the pharmaceutical and healthcare sectors',
    breadcrumb: ['Alumni', 'List of Alumni'],
  },
  distinguished: {
    title: 'Distinguished Alumni',
    subtitle: 'GRCP graduates who have made outstanding contributions to their fields',
    breadcrumb: ['Alumni', 'Distinguished Alumni'],
  },
  contribution: {
    title: 'Alumni Contribution',
    subtitle: 'Ways in which our alumni give back to the GRCP community',
    breadcrumb: ['Alumni', 'Alumni Contribution'],
  },
};

const sectionContent = {
  overview: <EnrollmentSection />,
  registration: <RegistrationSection />,
  'executive-members': <ExecutiveMembersSection />,
  enrollment: <EnrollmentSection />,
  list: <AlumniListSection />,
  distinguished: <DistinguishedSection />,
  contribution: <ContributionSection />,
};

export default function AlumniPage() {
  const { section } = useParams();
  const activeSection = section || 'overview';
  const config = sectionConfig[activeSection] || sectionConfig.overview;
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar college={college} />
      <NavStrip college={college} />
      <PageHero
        college={college}
        title={config.title}
        subtitle={config.subtitle}
        breadcrumb={config.breadcrumb}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">
          {sectionContent[activeSection] || sectionContent.overview}
        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
