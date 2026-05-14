import AdministrationLayout from '../components/AdministrationLayout';
import college from '../theme';

function SectionHeading({ children }) {
  return (
    <h2
      className="font-hind font-bold text-2xl mb-6 pb-2 inline-block"
      style={{ color: college.primaryColor, borderBottom: `2px solid ${college.accentColor}` }}
    >
      {children}
    </h2>
  );
}

function LeaderCard({ name, role, qualification, desc, badge }) {
  return (
    <div className="bg-white rounded-lg border border-black/10 shadow-sm overflow-hidden">
      <div className="h-2 w-full" style={{ backgroundColor: college.primaryColor }} />
      <div className="p-6">
        <div className="flex items-start gap-5">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white font-hind font-bold text-2xl flex-shrink-0"
            style={{ backgroundColor: college.primaryColor }}
          >
            {name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-hind font-bold text-[18px] leading-snug" style={{ color: college.primaryColor }}>
              {name}
            </h3>
            <p className="font-dm-sans text-[13px] font-semibold mt-0.5" style={{ color: college.accentColor }}>
              {role}
            </p>
            {qualification && (
              <p className="font-dm-sans text-[12px] text-gray-500 mt-0.5">{qualification}</p>
            )}
            {badge && (
              <span
                className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-hind font-semibold text-white"
                style={{ backgroundColor: college.accentColor }}
              >
                {badge}
              </span>
            )}
          </div>
        </div>
        {desc && (
          <p className="mt-4 font-dm-sans text-[14px] leading-relaxed text-gray-600 border-t border-gray-100 pt-4">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

const management = [
  {
    name: 'Dr. Gokaraju Ganga Raju',
    role: 'Chairman, GRIET',
    qualification: 'B.Pharma., Ph.D. | Chairman, Laila Group of Companies',
    badge: 'Chairman',
    desc: 'Dr. Gokaraju Ganga Raju is the founder of Gokaraju Rangaraju Educational Society (GRES) and Chairman of Laila Group of Companies. An Indian politician and former Member of Parliament to the 16th Lok Sabha from Narsapuram, Andhra Pradesh, he initiated both engineering and pharmacy education under GRES in 1997. His dynamic, optimistic, and compassionate leadership has guided GRIET to become one of the foremost engineering institutions in Telangana. He is renowned for his deep commitment to quality education and student welfare.',
  },
  {
    name: 'Sri G.V.K. Ranga Raju',
    role: 'Vice President, GRIET',
    qualification: 'B.Tech. | Managing Director, Delta Paper Mills',
    badge: 'Vice President',
    desc: "Sri G.V.K. Ranga Raju is the eldest son of Dr. G. Ganga Raju and oversees the day-to-day administrative and institutional matters of GRIET. As Managing Director of Delta Paper Mills, he brings strong industry and management acumen to the institution's operations. He is a firm advocate of technology-driven education, student empowerment, and building an environment that nurtures innovation and entrepreneurship among students.",
  },
];

export default function AdministrationPage() {
  return (
    <AdministrationLayout title="Administration">

      <div className="space-y-10">

        <div>
          <SectionHeading>Management</SectionHeading>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 mb-8 max-w-2xl">
            Gokaraju Rangaraju Institute of Engineering &amp; Technology is governed by a visionary
            leadership committed to academic excellence, innovation, and the all-round development of students.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {management.map((m) => (
              <LeaderCard key={m.name} {...m} />
            ))}
          </div>
        </div>

        {/* Inspirer */}
        <section className="rounded-lg bg-[#F6F1F2] border border-gray-200 p-6 md:p-8">
          <h3 className="font-hind font-bold text-[18px] mb-1" style={{ color: college.primaryColor }}>
            The Inspirer
          </h3>
          <p className="font-dm-sans text-[13px] font-semibold mb-3" style={{ color: college.accentColor }}>
            Late Shri Gokaraju Rangaraju Garu
          </p>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-700">
            Late Shri Gokaraju Rangaraju Garu is the inspiration for the establishment of Gokaraju Rangaraju
            Educational Society. He served as a Member of Legislative Assembly from Undi Constituency in United
            Andhra Pradesh and as Chairman of the Board of Trustees of Tirumala Tirupathi Devasthanam twice. A
            crusader of education, he served as Chairman of Governing Bodies of DNR College and SRKR Engineering
            College in West Godavari Districts, Andhra Pradesh. His memory and values continue to guide the
            institution in its mission to promote modern and scientific education.
          </p>
        </section>

        {/* Society */}
        <section>
          <SectionHeading>The Sponsoring Society</SectionHeading>
          <p className="font-dm-sans text-[14px] leading-relaxed text-gray-700">
            Dr. Gokaraju Rangaraju Garu started the <strong>Gokaraju Rangaraju Educational Society (GRES)</strong> in
            fond memory of his father, Late Shri Gokaraju Rangaraju Garu, with the motto to{' '}
            <em>"Promote modern and scientific education and to help develop the character of the younger generation
            of all castes, communities and religions."</em> GRES currently runs GRIET (engineering), as well as
            pharmacy programmes, collectively serving thousands of students each year under the guiding principle
            of excellence, integrity, and service.
          </p>
        </section>

      </div>
    </AdministrationLayout>
  );
}
