import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import college from '../theme';
import AdminSidebarLayout from '../components/AdminSidebarLayout';

const primary = college.primaryColor;
const accent  = college.accentColor;

function SectionHeader({ label, title }) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      {label && (
        <span className="font-dm-sans font-semibold text-[11px] tracking-[0.2em] uppercase" style={{ color: `${primary}80` }}>
          {label}
        </span>
      )}
      <h2 className="font-hind font-bold text-[26px] leading-tight" style={{ color: primary }}>{title}</h2>
      <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: accent }} />
    </div>
  );
}

// ── Infrastructure ────────────────────────────────────────────────────────────

function InfrastructureContent() {
  const [active, setActive] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const galleryItems = [
    { src: '/images/GLWEC2.png', caption: 'Campus View', cat: 'Campus' },
    { src: '/images/GLWEC3.jpg', caption: 'Campus', cat: 'Campus' },
    { src: '/images/GLWEC4.jpg', caption: 'Computer Lab', cat: 'ComputerLab' },
    { src: '/images/GLWEC5.jpg', caption: 'Computer Lab', cat: 'ComputerLab' },
    { src: '/images/GLWEC6.jpg', caption: 'Computer Lab', cat: 'ComputerLab' },
    { src: '/images/GLWEC_bee_1.jpg', caption: 'BEE Lab', cat: 'BEELAB' },
    { src: '/images/GLWEC_bee_2.jpg', caption: 'BEE Lab', cat: 'BEELAB' },
    { src: '/images/GLWEC_bee_3.jpg', caption: 'BEE Lab', cat: 'BEELAB' },
    { src: '/images/GLWEC_bee_4.jpg', caption: 'BEE Lab', cat: 'BEELAB' },
    { src: '/images/GLWEC_PhysicsLab_1.jpg', caption: 'Physics Lab', cat: 'PhysicsLab' },
    { src: '/images/GLWEC_PhysicsLab_2.jpg', caption: 'Physics Lab', cat: 'PhysicsLab' },
    { src: '/images/GLWEC_PhysicsLab_3.jpg', caption: 'Physics Lab', cat: 'PhysicsLab' },
    { src: '/images/GLWEC_PhysicsLab_4.jpg', caption: 'Physics Lab', cat: 'PhysicsLab' },
    { src: '/images/GLWEC12.jpg', caption: 'Chemistry Lab', cat: 'ChemistryLab' },
    { src: '/images/GLWEC_ChemistryLab_1.jpg', caption: 'Chemistry Lab', cat: 'ChemistryLab' },
    { src: '/images/GLWEC_Workshop_1.jpg', caption: 'Engineering Workshop', cat: 'Workshop' },
    { src: '/images/GLWEC_Workshop_2.jpg', caption: 'Engineering Workshop', cat: 'Workshop' },
    { src: '/images/GLWEC16.jpg', caption: 'Library', cat: 'Library' },
    { src: '/images/GLWEC17.jpg', caption: 'Library', cat: 'Library' },
  ];

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Campus', value: 'Campus' },
    { label: 'Computer Lab', value: 'ComputerLab' },
    { label: 'BEE Lab', value: 'BEELAB' },
    { label: 'Physics Lab', value: 'PhysicsLab' },
    { label: 'Chemistry Lab', value: 'ChemistryLab' },
    { label: 'Workshop', value: 'Workshop' },
    { label: 'Library', value: 'Library' },
  ];

  const specs = ['Area: 3.0 Acres', 'Building Permission: 1,10,000 sq ft', 'First Year Built Area: ~55,000 sq ft', 'Spacious Canteen', 'Sports: Volleyball, Basketball, Table Tennis, Caroms, Chess, Gym'];
  const filtered = active === 'all' ? galleryItems : galleryItems.filter(i => i.cat === active);

  return (
    <>
      <SectionHeader label="Campus Facilities" title="Infrastructure" />
      <div className="flex flex-wrap gap-2 mb-6">
        {specs.map(s => (
          <span key={s} className="px-3 py-1.5 rounded font-dm-sans text-[13px] font-medium" style={{ backgroundColor: `${primary}0F`, color: primary, border: `1px solid ${primary}18` }}>{s}</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => {
          const isActive = active === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className="px-3 py-1.5 rounded font-dm-sans font-semibold text-[13px] transition-all cursor-pointer"
              style={{ backgroundColor: isActive ? primary : `${primary}0F`, color: isActive ? '#fff' : primary, border: `1px solid ${isActive ? primary : `${primary}18`}` }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
        {filtered.map((item, idx) => (
          <div key={idx} className="mb-3 break-inside-avoid rounded-lg overflow-hidden cursor-pointer group" onClick={() => setLightbox(item.src)} style={{ border: `1px solid ${primary}12` }}>
            <div className="relative overflow-hidden">
              <img src={item.src} alt={item.caption} className="w-full h-auto transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2" style={{ background: `linear-gradient(to top, ${primary}B3 0%, transparent 60%)` }}>
                <span className="text-white text-[12px] font-medium">{item.caption}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {lightbox && (
        <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.88)', zIndex: 9999 }} onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[90vw] rounded-lg" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }} />
          <button className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[18px] cursor-pointer" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} onClick={() => setLightbox(null)}>×</button>
        </div>
      )}
    </>
  );
}

// ── Sports Facilities ─────────────────────────────────────────────────────────

function SportsFacilitiesContent() {
  const images = Array.from({ length: 17 }, (_, i) => i + 1);
  return (
    <>
      <SectionHeader label="Physical Education" title="Sports Facilities" />
      <div className="flex flex-col gap-5">
        <div className="rounded-xl px-5 py-4 border border-[#E5E7EB] bg-white" style={{ borderLeft: `3px solid ${primary}` }}>
          <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#374151]">
            The college has been actively encouraging students to participate in various sports &amp; games as it believes that there should be holistic development of an individual. The Department of Physical Education conducts sports and games for the staff and students viz., Cricket, Basketball, Volleyball, Kabbadi, Athletics, Throw Ball, Tennikoit and also Indoor games like Table tennis, Carroms, Badminton and Chess. Our students have excelled and won prizes in various intra-college, inter-college and university competitions. To encourage the students, facilities are also made available even beyond college hours and transport facility is provided for all who participate in various sports &amp; games beyond college hours.
          </p>
        </div>
        <div className="rounded-xl px-5 py-4 border border-[#E5E7EB] bg-white" style={{ borderLeft: `3px solid ${accent}` }}>
          <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#374151]">
            A full-time trained staff nurse has been appointed who will stay upto 6.30 p.m. and attend to the first-aid in case the students injured during the conduct of sports &amp; games. An Ambulance with all facilities is available in the college for emergency services round the clock. Five beds are provided in the health centre for any medical emergency. General medicines are made available in the centre. First-aid boxes are kept in the Sports &amp; Games Department for medical emergency.
          </p>
        </div>
        <div className="rounded-xl px-5 py-4 border border-[#E5E7EB] bg-white">
          <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#374151]">
            Our students have also participated in various games and sports organized by Osmania University, JNTU, and other colleges.
          </p>
        </div>
        <div className="rounded-xl px-5 py-4 border border-[#E5E7EB] bg-white">
          <p className="font-hind font-bold text-[16px] mb-4" style={{ color: primary }}>Sports Gallery</p>
          <div className="flex flex-wrap gap-2">
            {images.map(n => (
              <a key={n} href={`/images/sports/${n}.jpg`} target="_blank" rel="noreferrer" className="w-1/4 min-w-[140px] cursor-pointer">
                <img src={`/images/sports/${n}.jpg`} alt="Sports Facilities" className="max-w-full h-auto w-full rounded-lg" style={{ border: `1px solid ${primary}12` }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ── Health Facilities ─────────────────────────────────────────────────────────

function HealthFacilitiesContent() {
  const facilities = [
    { title: 'Health Centers', desc: 'On-campus health centers provide basic medical services, often staffed by qualified doctors and nurses.' },
    { title: 'Emergency Services', desc: 'Arrangements with nearby hospitals ensure students have access to emergency medical care.' },
    { title: 'Pharmacy', desc: 'On-campus pharmacies provide easy access to medications and health supplies.' },
    { title: 'Counseling Services', desc: 'Mental health support is available through counseling services for emotional and psychological well-being.' },
    { title: 'Health Camps and Check-ups', desc: 'Regular health camps and check-ups help monitor and maintain students\' health.' },
  ];
  return (
    <>
      <SectionHeader label="Student Well-being" title="Health Facilities" />
      <div className="flex flex-col gap-5">
        <div className="rounded-xl px-5 py-4 border border-[#E5E7EB] bg-white" style={{ borderLeft: `3px solid ${primary}` }}>
          <p className="font-hind font-bold text-[16px] mb-4" style={{ color: primary }}>Available Facilities</p>
          <div className="flex flex-col gap-3">
            {facilities.map(item => (
              <div key={item.title} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-[7px]" style={{ backgroundColor: accent }} />
                <p className="font-dm-sans text-[15px] leading-[27px] text-[#374151]">
                  <span className="font-semibold" style={{ color: primary }}>{item.title}:</span> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl px-5 py-4 border border-[#E5E7EB] bg-white" style={{ borderLeft: `3px solid ${accent}` }}>
          <p className="font-dm-sans text-[15px] leading-[27px] text-[#374151]">
            These facilities aim to ensure the well-being of students during their time at college.
          </p>
        </div>
        <div className="rounded-xl px-5 py-4 border border-[#E5E7EB] bg-white">
          <p className="font-hind font-bold text-[16px] mb-4" style={{ color: primary }}>Health Facilities Gallery</p>
          <div className="flex flex-wrap gap-2">
            {[2, 1, 3, 4].map(n => (
              <a key={n} href={`/images/hf/${n}.jpg`} target="_blank" rel="noreferrer" className="w-1/4 min-w-[140px] cursor-pointer">
                <img src={`/images/hf/${n}.jpg`} alt="Health Facilities" className="max-w-full h-auto w-full rounded-lg" style={{ border: `1px solid ${primary}12` }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ── Physically Challenged ─────────────────────────────────────────────────────

function PhysicallyChallengedContent() {
  return (
    <>
      <SectionHeader label="Inclusive Campus" title="Physically Challenged Facilities" />
      <div className="flex flex-col gap-5">
        <div className="rounded-xl px-5 py-4 border border-[#E5E7EB] bg-white" style={{ borderLeft: `3px solid ${primary}` }}>
          <h4 className="font-hind font-bold text-[16px] mb-3" style={{ color: primary }}>Facilities in Campus for Physically Challenged</h4>
          <p className="font-dm-sans font-semibold text-[13px] mb-2 uppercase tracking-wide" style={{ color: accent }}>The Institution Has Disabled-Friendly Built Environment with Ramps/Lifts for Easy Access to Classrooms</p>
          <p className="font-dm-sans text-[15px] leading-[27px] text-[#374151]">
            It has been felt that differently-abled persons need special arrangements in the GLEC premises for their mobility and independent functioning. GLEC has architectural barrier free environment that disabled persons find easy for their day-to-day functioning. The college addresses the accessibility relevant issues as per the stipulations of the Persons with Disabilities Act 1995. All the existing infrastructure in the college is disabled-friendly and GLEC ensures that the future construction will also be based on the principle of inclusion. The institute has special facilities such as Wheel chairs, Walkers, Lifts, Ramps, Hand Rails, Special Toilets, and other necessary changes to meet the needs of differently-abled persons.
          </p>
        </div>
        <div className="rounded-xl px-5 py-4 border border-[#E5E7EB] bg-white" style={{ borderLeft: `3px solid ${accent}` }}>
          <h4 className="font-hind font-bold text-[16px] mb-3" style={{ color: primary }}>Ramps and Hand Rails</h4>
          <p className="font-dm-sans text-[15px] leading-[27px] text-[#374151] mb-4">
            Apart from stair access and lifts, GLEC blocks are constructed with Ramps and Hand Rails as sloped pathways used to provide access to outside buildings. Ramps provide an alternative to stairs for wheelchair users, people with mobility issues and people with prams, bicycles and other wheeled items. Adequate space is allocated for persons using mobility devices, as well as those walking with the assistance of other persons.
          </p>
          <div className="flex gap-3">
            {[1, 2].map(n => (
              <a key={n} href={`/images/pc/${n}.jpg`} target="_blank" rel="noreferrer" className="w-1/3 cursor-pointer">
                <img src={`/images/pc/${n}.jpg`} alt="Facilities for Physically Challenged" className="max-w-full h-auto w-full rounded-lg" style={{ border: `1px solid ${primary}12` }} />
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-xl px-5 py-4 border border-[#E5E7EB] bg-white">
          <h4 className="font-hind font-bold text-[16px] mb-3" style={{ color: primary }}>Physical Facilities</h4>
          <p className="font-dm-sans text-[15px] leading-[27px] text-[#374151] mb-4">Mobility devices like Wheel Chairs and Walker are made available in the College.</p>
          <a href="/images/pc/3.jpg" target="_blank" rel="noreferrer" className="w-1/3 inline-block cursor-pointer">
            <img src="/images/pc/3.jpg" alt="Physical Facilities" className="max-w-full h-auto w-full rounded-lg" style={{ border: `1px solid ${primary}12` }} />
          </a>
        </div>
        <div className="rounded-xl px-5 py-4 border border-[#E5E7EB] bg-white" style={{ borderLeft: `3px solid ${primary}` }}>
          <h4 className="font-hind font-bold text-[16px] mb-3" style={{ color: primary }}>Scribes for Examination</h4>
          <p className="font-dm-sans text-[15px] leading-[27px] text-[#374151]">
            GLEC provides scribes for differently-abled students if required during examinations. As per the OU and AICTE rules of examinations.
          </p>
        </div>
      </div>
    </>
  );
}

// ── Industry Connect ──────────────────────────────────────────────────────────

function IndustryConnectContent() {
  return (
    <>
      <SectionHeader label="Collaboration" title="Industry Connect" />
      <div className="rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4" style={{ backgroundColor: '#F6F1F2', border: '1px solid rgba(91,16,39,0.1)' }}>
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(91,16,39,0.08)' }}>
          <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="10" width="10" height="14" rx="2" stroke={primary} strokeWidth="1.8" />
            <rect x="18" y="4" width="10" height="20" rx="2" stroke={primary} strokeWidth="1.8" />
            <path d="M14 17h4" stroke={accent} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <h3 className="font-hind font-bold text-[20px]" style={{ color: primary }}>Coming Soon</h3>
          <p className="font-dm-sans text-[15px] text-[#474747] mt-1">Content for Industry Connect is being prepared and will be updated soon. Please check back later.</p>
        </div>
      </div>
      <div className="rounded-xl p-5 flex items-start gap-3 mt-6" style={{ backgroundColor: `${primary}06`, borderLeft: `4px solid ${accent}` }}>
        <p className="font-dm-sans font-normal text-[14px] leading-[24px]" style={{ color: primary }}>Content for this section is being prepared and will be updated soon. Please check back later.</p>
      </div>
    </>
  );
}

// ── Section registry ──────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'overview',             path: '/infrastructure/overview',             label: 'Infrastructure',          content: <InfrastructureContent /> },
  { id: 'sports',               path: '/infrastructure/sports',               label: 'Sports Facilities',       content: <SportsFacilitiesContent /> },
  { id: 'health',               path: '/infrastructure/health',               label: 'Health Facilities',       content: <HealthFacilitiesContent /> },
  { id: 'physically-challenged',path: '/infrastructure/physically-challenged',label: 'Physically Challenged',   content: <PhysicallyChallengedContent /> },
  { id: 'industry-connect',     path: '/infrastructure/industry-connect',     label: 'Industry Connect',        content: <IndustryConnectContent /> },
];

export default function InfrastructurePage() {
  const { section } = useParams();
  const activeId = section || 'overview';
  const currentSection = SECTIONS.find(s => s.id === activeId);

  if (!currentSection) {
    return <Navigate to="/infrastructure/overview" replace />;
  }

  return (
    <AdminSidebarLayout
      college={college}
      pageTitle="Infrastructure & Facilities"
      pageSubtitle="Campus infrastructure, laboratories, sports, health and accessibility facilities at GLEC"
      pageBreadcrumb={['Infrastructure', currentSection.label]}
      sections={SECTIONS}
      currentSection={currentSection}
    />
  );
}
