import { AcademicsBanner } from '../components/AcademicsLayout';
import CollegeLayout from '../CollegeLayout';
import college from '../theme';

/* ── Sidebar components ──────────────────────────────────────────────── */
function SidebarBlock({ title, children }) {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden mb-4">
      <div
        className="px-4 py-3"
        style={{ backgroundColor: college.primaryColor }}
      >
        <p className="font-hind font-bold text-[13px] text-white">{title}</p>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}

function SidebarLink({ label, url, isExternal = false }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 px-4 py-2.5 border-b border-gray-100 last:border-b-0 transition-colors hover:bg-gray-50 group"
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors"
        style={{ backgroundColor: college.accentColor }}
      />
      <span
        className="font-dm-sans text-[12px] text-gray-700 group-hover:font-medium leading-snug flex-1"
      >
        {label}
      </span>
      {isExternal && (
        <svg className="w-3 h-3 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )}
    </a>
  );
}

function SidebarDocLink({ label, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 px-4 py-3 border-b border-gray-100 last:border-b-0 transition-colors hover:bg-gray-50 group"
    >
      <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
      <span className="font-dm-sans text-[12px] text-gray-700 group-hover:font-medium leading-snug">{label}</span>
    </a>
  );
}

/* ── Main section label ──────────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <h2 className="font-hind font-bold text-[16px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

/* ── Data ────────────────────────────────────────────────────────────── */
const NSS_DOCS = [
  { label: 'NSS Report 2020–23', url: 'https://www.griet.ac.in/2022/NSS%20activities%20book%202020-23%20print.pdf' },
  { label: 'NSS Activities 2022–23', url: 'https://www.griet.ac.in/2023/22-23%20NSS%20activities%20and%20acchievements.pdf' },
  { label: 'NSS Activities 2021–22', url: 'https://www.griet.ac.in/2023/21-22%20NSS%20activities%20and%20acchievements.pdf' },
  { label: 'NSS Activities 2020–21', url: 'https://www.griet.ac.in/2023/20-21%20NSS%20activities%20and%20acchievements.pdf' },
  { label: 'NSS Activities 2014–19', url: 'https://www.griet.ac.in/images/NSS_Activities_2014-19.pdf' },
  { label: 'NSS Report 2019–20', url: 'https://www.griet.ac.in/images2/NSS%20Events%20summary%202019-2020.pdf' },
  { label: 'NSS Report 2018–19', url: 'https://www.griet.ac.in/images/NSS%20report%202018-19.pdf' },
  { label: 'Street Cause Report 2018–19', url: 'https://www.griet.ac.in/images/report%202018-19%20street%20cause%20wing%20of%20GRIET.pdf' },
];

const QUICK_ACTIVITY_LINKS = [
  { label: 'Street Cause Awards 2020', url: 'https://www.griet.ac.in/scawards.php' },
  { label: 'Blood Donation Camps', url: 'https://www.griet.ac.in/Blood_Donation_Camps.php' },
  { label: 'Walk for a Cause', url: 'https://www.griet.ac.in/Walk_for_a_Cause.php' },
  { label: 'Eco Friendly Ganesha', url: 'https://www.griet.ac.in/Eco_Friendly_Ganesha.php' },
  { label: 'Nirman – Mentally Challenged Institute', url: 'https://www.griet.ac.in/Nirman_mentally_challenged_institute.php' },
  { label: 'Harithaharam', url: 'https://www.griet.ac.in/Harithaharam.php' },
  { label: 'Health Check-up Camp', url: 'https://www.griet.ac.in/Health%20check-up.php' },
  { label: 'Audio Recording of Books', url: 'https://www.griet.ac.in/Audio_recording_of_books.php' },
  { label: 'Swachh Bharat', url: 'https://www.griet.ac.in/Swachh_Bharat.php' },
  { label: 'Women Empowerment', url: 'https://www.griet.ac.in/Women_Empowerment.php' },
];

const ACTIVITIES = [
  { title: 'Jaganath Rath Yatra', desc: 'NSS volunteers participated in community services organised alongside the Rath Yatra, spreading awareness on cleanliness and health.' },
  { title: 'Road Safety Survey — GRIET Bus Drivers', desc: 'Comprehensive survey on road safety and traffic rules awareness conducted with GRIET transport drivers.' },
  { title: 'CPR Workshop by SLG Hospitals', desc: 'Life-saving CPR training workshop conducted in association with SLG Hospitals for NSS volunteers and students.' },
  { title: 'Visit to Mythri Orphanage — Rakshabandhan', desc: 'NSS volunteers visited Mythri Orphanage on Rakshabandhan, distributing gifts and spending time with children.' },
  { title: 'Azadi Ka Amrit Mahotsav Rally — Nizampet', desc: 'Student volunteers participated in a large rally commemorating 75 years of Indian independence in Nizampet.' },
  { title: 'ZPHS Gundlapochampally Survey', desc: 'Socio-economic survey conducted in Gundlapochampally village school identifying student needs and infrastructure gaps.' },
  { title: 'Blood Donation Camp — Miyapur Bus Depot', desc: 'Mega blood donation drive organised at Miyapur Bus Depot. GRIET NSS consistently records 300+ units per camp.' },
  { title: 'Clean India Campaign', desc: 'Cleanliness drives at Miyapur Bus Depot and KPHB Saraswati Temple premises under the Swachh Bharat Abhiyan.' },
  { title: 'Blanket Distribution Drive — Basavatarakam Hospital', desc: 'Distributed blankets and essentials to underprivileged patients at Basavatarakam Indo American Cancer Hospital.' },
  { title: 'Yoga Day Celebrations', desc: 'International Yoga Day celebrations on campus with demonstrations, awareness sessions, and community participation.' },
  { title: 'Meri Matti Mera Desh — ZPHS Nizampet', desc: 'Participation in the national "Meri Matti Mera Desh" campaign at ZPHS Nizampet, honoring soldiers and the motherland.' },
  { title: 'Aksharmaala — IIT Hyderabad Collaboration', desc: 'Literacy and education initiative conducted in coordination with IIT Hyderabad to support underprivileged students.' },
  { title: 'Project Aamani — Sanitary Pad Distribution', desc: 'Sanitary pad distribution drive targeting rural women and girls to promote menstrual hygiene awareness.' },
];

const ACHIEVEMENTS = [
  'Best NSS Unit Award — JNTUH University',
  '3 volunteers selected for Republic Day Parade NSS Camp, New Delhi',
  '500+ blood units donated in a single camp — Hyderabad Zone record',
  'State-level Best Volunteer award recipients — multiple years',
  'Recognition by Ministry of Youth Affairs & Sports under Annual NSS Awards',
  'Completed 20,000+ volunteer hours in 2023–24 academic year',
  'Adopted Janwada village — completed sanitation and road improvement project',
];

const OFFICERS = [
  { name: 'Dr. K. Srinivas Rao', role: 'Programme Officer — Unit I', dept: 'Civil Engineering', email: 'nss1@griet.ac.in' },
  { name: 'Dr. P. Anitha Kumari', role: 'Programme Officer — Unit II', dept: 'Computer Science', email: 'nss2@griet.ac.in' },
  { name: 'Dr. M. Venkat Reddy', role: 'NSS Nodal Coordinator', dept: 'Mechanical Engineering', email: 'nss@griet.ac.in' },
];

/* ── Page ────────────────────────────────────────────────────────────── */
export default function NSSPage() {
  const sidebar = (
    <>
      {/* NSS Activity Quick Links */}
      <SidebarBlock title="NSS Activity Gallery">
        {QUICK_ACTIVITY_LINKS.map(({ label, url }) => (
          <SidebarLink key={label} label={label} url={url} isExternal />
        ))}
      </SidebarBlock>

      {/* Document Downloads */}
      <SidebarBlock title="Download Reports">
        {NSS_DOCS.map(({ label, url }) => (
          <SidebarDocLink key={label} label={label} url={url} />
        ))}
      </SidebarBlock>

      {/* NSS National Portal */}
      <div className="rounded-xl border border-gray-200 p-4 bg-white">
        <p className="font-hind font-bold text-[12.5px] mb-1" style={{ color: college.primaryColor }}>NSS National Portal</p>
        <p className="font-dm-sans text-[11.5px] text-gray-600 mb-3 leading-relaxed">Official Government of India NSS portal with guidelines and national awards.</p>
        <a
          href="https://nss.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-hind font-bold text-[12px] hover:underline"
          style={{ color: college.accentColor }}
        >
          Visit nss.gov.in ↗
        </a>
      </div>
    </>
  );

  return (
    <CollegeLayout college={college}>
      <AcademicsBanner title="National Service Scheme (NSS)" />

      <div className="page-pad">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── Main Content ─────────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* About */}
            <section className="mb-8">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-3">
                  The <strong>National Service Scheme (NSS)</strong> unit at GRIET operates under the Ministry of Youth Affairs &amp; Sports, Government of India, with the motto <em>"Not Me But You."</em> GRIET runs <strong>two active NSS units</strong> with over <strong>200 enrolled volunteers</strong> each academic year.
                </p>
                <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
                  GRIET NSS focuses on community development, social awareness, and nation-building — from village adoption and health camps to digital literacy drives and disaster relief. The programme instils leadership, empathy, and civic responsibility in student volunteers.
                </p>
              </div>
            </section>

            {/* Stats */}
            <section className="mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { stat: '2', label: 'Active Units' },
                  { stat: '200+', label: 'Volunteers / Year' },
                  { stat: '20,000+', label: 'Hours (2023–24)' },
                  { stat: '500+', label: 'Blood Units / Camp' },
                ].map(({ stat, label }) => (
                  <div key={label} className="p-3 rounded-xl border border-gray-200 bg-white text-center">
                    <p className="font-hind font-bold text-[20px] mb-0.5" style={{ color: college.primaryColor }}>{stat}</p>
                    <p className="font-dm-sans text-[11px] text-gray-500 uppercase tracking-wide leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Activities */}
            <section className="mb-8">
              <SectionLabel>NSS Activities</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ACTIVITIES.map(({ title, desc }) => (
                  <div key={title} className="p-4 rounded-xl border border-gray-200 bg-white">
                    <p className="font-hind font-bold text-[13px] mb-1" style={{ color: college.primaryColor }}>{title}</p>
                    <p className="font-dm-sans text-[12px] text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section className="mb-8">
              <SectionLabel>Awards &amp; Recognition</SectionLabel>
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-gray-50 border border-gray-200">
                {ACHIEVEMENTS.map((a, i) => (
                  <div key={i} className="flex items-start gap-2 font-dm-sans text-[12.5px] text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                    {a}
                  </div>
                ))}
              </div>
            </section>

            {/* Programme Officers */}
            <section className="mb-8">
              <SectionLabel>Programme Officers</SectionLabel>
              <div className="flex flex-col gap-3">
                {OFFICERS.map(({ name, role, dept, email }) => (
                  <div key={name} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-4 rounded-xl border border-gray-200 bg-white">
                    <div className="flex-1">
                      <p className="font-hind font-bold text-[13px]" style={{ color: college.primaryColor }}>{name}</p>
                      <p className="font-dm-sans text-[12px] text-gray-600">{role} — {dept}</p>
                    </div>
                    <a href={`mailto:${email}`} className="font-dm-sans text-[12px] font-semibold hover:underline self-start sm:self-center" style={{ color: college.accentColor }}>
                      {email}
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Join */}
            <section className="mb-4">
              <SectionLabel>How to Join</SectionLabel>
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-gray-50 border border-gray-200">
                {[
                  'Open to all regular B.Tech / M.Tech / MBA students at GRIET.',
                  'Register via the NSS notice published at the start of each academic year.',
                  'Minimum commitment: 120 hours of NSS activities over two years.',
                  'Certified volunteers receive NSS certificates recognised by JNTUH and the Ministry of Youth Affairs.',
                  'Outstanding volunteers are nominated for university-level and national-level camps.',
                  'Membership is free — NSS is a government-funded programme.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 font-dm-sans text-[12.5px] text-gray-700">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center font-hind font-bold text-[10px] text-white"
                      style={{ backgroundColor: college.primaryColor }}
                    >
                      {i + 1}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ── Right Sidebar ─────────────────────────────────────── */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            {sidebar}
          </aside>

        </div>
      </div>
    </CollegeLayout>
  );
}
