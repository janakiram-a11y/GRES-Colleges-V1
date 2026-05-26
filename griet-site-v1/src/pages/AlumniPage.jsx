import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const NOTABLE_ALUMNI = [
  { name: 'Phani Sama', batch: 'ECE 2002', role: 'Co-founder & CEO, Veriown; Ex-Director, Innovation, Microsoft', domain: 'Entrepreneurship / Tech' },
  { name: 'Harish Abburi', batch: 'CSE 2006', role: 'Software Engineer, Google', domain: 'Technology' },
  { name: 'Mahesh Lingareddy', batch: 'ECE 1999', role: 'Founder, Smartron India', domain: 'Entrepreneurship' },
  { name: 'Srinivas Rao Kakulapati', batch: 'EEE 2003', role: 'Senior Principal Engineer, Intel', domain: 'Semiconductors' },
  { name: 'Priyanka Kadari', batch: 'CSE 2010', role: 'Machine Learning Engineer, Amazon AWS', domain: 'AI / Cloud' },
  { name: 'Venkat Reddivari', batch: 'Mechanical 2004', role: 'Lead Design Engineer, Ford Motor Company', domain: 'Automotive' },
];

const CHAPTERS = [
  { city: 'Hyderabad', members: '4,200+', coordinator: 'alumni.hyd@griet.ac.in' },
  { city: 'Bengaluru', members: '1,800+', coordinator: 'alumni.blr@griet.ac.in' },
  { city: 'USA (North America)', members: '900+', coordinator: 'alumni.usa@griet.ac.in' },
  { city: 'Dubai / UAE', members: '350+', coordinator: 'alumni.uae@griet.ac.in' },
  { city: 'Chennai', members: '600+', coordinator: 'alumni.chn@griet.ac.in' },
  { city: 'Pune', members: '420+', coordinator: 'alumni.pune@griet.ac.in' },
];

const EVENTS = [
  { name: 'GRIET Alumni Conclave', desc: 'Annual flagship gathering held on campus every January — panel discussions, networking dinner, and department reunions.' },
  { name: 'Silver & Golden Jubilee Meets', desc: 'Dedicated celebrations for the 25th and 50th graduation anniversary batches organised every year.' },
  { name: 'Alumni Guest Lecture Series', desc: 'Monthly on-campus/virtual talks by accomplished alumni covering industry trends, career paths, and leadership lessons.' },
  { name: 'Mentorship Drive', desc: 'Structured 6-month mentoring programme pairing final-year students with alumni professionals across sectors.' },
  { name: 'Alumni Scholarship Fund', desc: 'Crowdfunded scholarship pool managed by the Alumni Association to support meritorious students with financial need.' },
  { name: 'Industry Interface Day', desc: 'Quarterly event connecting alumni employers with current students for internship, project, and placement opportunities.' },
];

const BENEFITS = [
  'Access to GRIET Alumni Directory (30,000+ members)',
  'Priority registration for Alumni Conclave and reunions',
  'GRIET campus library and e-resource access',
  'Dedicated alumni lounge on campus',
  'Newsletter subscription — quarterly updates on GRIET',
  'Discount on GRIET professional development programmes',
  'Eligibility to mentor current students via the Mentorship Drive',
  'Recognition in the Annual Alumni Excellence Awards',
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function AlumniPage() {
  return (
    <AcademicsLayout title="Alumni — GRIET">

      {/* Overview */}
      <section className="mb-8">
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-3">
            The <strong>GRIET Alumni Association (GAA)</strong> connects over <strong>30,000 alumni</strong> spread across India and 40+ countries. Founded alongside the institution in 1997, GAA fosters lifelong bonds between graduates and their alma mater through networking, mentorship, philanthropy, and industry collaboration.
          </p>
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
            Alumni are GRIET's most powerful ambassadors — contributing to student development through mentoring, internship facilitation, guest lectures, and scholarship funding. The association is registered under the Societies Registration Act and operates active regional chapters.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { stat: '30,000+', label: 'Total Alumni' },
            { stat: '40+', label: 'Countries Represented' },
            { stat: '6', label: 'Active Regional Chapters' },
            { stat: '1997', label: 'Association Founded' },
          ].map(({ stat, label }) => (
            <div key={label} className="p-4 rounded-xl border border-gray-200 bg-white text-center">
              <p className="font-hind font-bold text-[22px] mb-0.5" style={{ color: college.primaryColor }}>{stat}</p>
              <p className="font-dm-sans text-[11.5px] text-gray-500 uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="mb-10">
        <SectionLabel>Notable Alumni</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {NOTABLE_ALUMNI.map(({ name, batch, role, domain }) => (
            <div key={name} className="p-4 rounded-xl border border-gray-200 bg-white flex flex-col gap-1">
              <p className="font-hind font-bold text-[13px]" style={{ color: college.primaryColor }}>{name}</p>
              <p className="font-dm-sans text-[12px] text-gray-700 leading-relaxed">{role}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-dm-sans text-[11px] text-gray-500">{batch}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span
                  className="font-dm-sans text-[11px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${college.accentColor}15`, color: college.accentColor }}
                >
                  {domain}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Chapters */}
      <section className="mb-10">
        <SectionLabel>Regional Chapters</SectionLabel>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-left">
            <thead>
              <tr style={{ backgroundColor: college.primaryColor }}>
                <th className="font-hind font-semibold text-[12px] text-white/90 px-4 py-3 uppercase tracking-wide">Chapter</th>
                <th className="font-hind font-semibold text-[12px] text-white/90 px-4 py-3 uppercase tracking-wide">Members</th>
                <th className="font-hind font-semibold text-[12px] text-white/90 px-4 py-3 uppercase tracking-wide">Chapter Coordinator Email</th>
              </tr>
            </thead>
            <tbody>
              {CHAPTERS.map(({ city, members, coordinator }, i) => (
                <tr key={city} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="font-dm-sans text-[12.5px] text-gray-800 px-4 py-3 font-medium">{city}</td>
                  <td className="font-dm-sans text-[12.5px] text-gray-700 px-4 py-3">{members}</td>
                  <td className="font-dm-sans text-[12.5px] px-4 py-3">
                    <a href={`mailto:${coordinator}`} className="hover:underline" style={{ color: college.accentColor }}>{coordinator}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Events */}
      <section className="mb-10">
        <SectionLabel>Alumni Events & Programmes</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {EVENTS.map(({ name, desc }) => (
            <div key={name} className="p-4 rounded-xl border border-gray-200 bg-white">
              <p className="font-hind font-bold text-[13px] mb-1" style={{ color: college.primaryColor }}>{name}</p>
              <p className="font-dm-sans text-[12px] text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="mb-10">
        <SectionLabel>Membership Benefits</SectionLabel>
        <div className="flex flex-col gap-2 p-5 rounded-xl bg-gray-50 border border-gray-200">
          {BENEFITS.map((b, i) => (
            <div key={i} className="flex items-start gap-2 font-dm-sans text-[12.5px] text-gray-700">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* Register & Connect */}
      <section className="mb-6">
        <SectionLabel>Register / Stay Connected</SectionLabel>
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-4">
            If you are a GRIET graduate and have not yet registered with the Alumni Association, please fill out the registration form or reach out directly. Membership is free for all GRIET graduates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:alumni@griet.ac.in"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-hind font-bold text-[13px] text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: college.primaryColor }}
            >
              Email Alumni Office
            </a>
            <a
              href="https://www.linkedin.com/school/gokaraju-rangaraju-institute-of-engineering-and-technology/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-hind font-bold text-[13px] border transition-colors hover:bg-gray-100"
              style={{ color: college.primaryColor, borderColor: college.primaryColor }}
            >
              Connect on LinkedIn ↗
            </a>
          </div>
          <p className="font-dm-sans text-[12px] text-gray-500 mt-4">
            Alumni Relations Office &nbsp;|&nbsp; <strong>{college.phone}</strong> &nbsp;|&nbsp; {college.address}
          </p>
        </div>
      </section>

    </AcademicsLayout>
  );
}
