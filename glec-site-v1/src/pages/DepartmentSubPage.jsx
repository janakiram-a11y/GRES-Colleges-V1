import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NavStrip from '../components/NavStrip';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';
import college from '../theme';

const primary = college.primaryColor;
const accent  = college.accentColor;

// ── HOD data by slug ──────────────────────────────────────────────────────────

const HOD_DATA = {
  cse: {
    name: 'Dr. Padmalaya Nayak',
    title: 'Professor & HOD, CSE/IT',
    image: '/images/padmalaya.jpg',
    scholar: 'https://scholar.google.com/citations?user=6gRzwWoAAAAJ&hl=en',
    scopus: 'https://shorturl.at/X246T',
    bio: [
      'Dr. Padmalaya Nayak is working as a Professor and Head of the Department, CSE/IT, at Gokaraju Lailavathi Engineering College, Hyderabad. Prior to that, she was working as a professor in the department of CSE at GRIET since 2009. She obtained her doctoral degree from the National Institute of Technology, Tiruchirappalli, India, in 2010 and her Master\'s in CSE from the University of Madras in 2002.',
      'She has 23 years of teaching and research experience in Ad hoc and Sensor Networks. She has published more than 80 research papers in peer-reviewed International Journals and Conferences, contributed 7 book chapters, one Indian Patent, and one Australian Patent. Prof. Nayak is the Editor of three books published by Taylor and Francis and is the Reviewer of many IEEE/SPRINGER/ELSEVIER Journals.',
      'She has received the Young Women Scientist Award from DRDO, the 100 Best Professor Award from the World Education Congress, and the Women Excellence Award by ILDC. She is a Senior Member of IEEE, IETE, CSI, and IEANG. Her h-index is 17, i10-index is 23, with 1,580+ citations. Research interests include WSN, IoT Networks, Network Security, AI/ML, and Deep Learning.',
    ],
  },
  'cse-aiml': {
    name: 'Dr. Padmalaya Nayak',
    title: 'Professor & HOD, CSE/IT',
    image: '/images/padmalaya.jpg',
    scholar: 'https://scholar.google.com/citations?user=6gRzwWoAAAAJ&hl=en',
    scopus: 'https://shorturl.at/X246T',
    bio: [
      'Dr. Padmalaya Nayak is working as a Professor and Head of the Department, CSE/IT, at Gokaraju Lailavathi Engineering College, Hyderabad. She obtained her doctoral degree from the National Institute of Technology, Tiruchirappalli, in 2010 and her Master\'s in CSE from the University of Madras in 2002. She has 23 years of teaching and research experience in Ad hoc and Sensor Networks.',
      'She has published more than 80 research papers in peer-reviewed International Journals and Conferences, contributed 7 book chapters, one Indian Patent, and one Australian Patent. She is a Senior Member of IEEE, IETE, CSI, and IEANG. Her h-index is 17, i10-index is 23, with 1,580+ citations. Research interests include WSN, IoT Networks, Network Security, AI/ML, and Deep Learning.',
    ],
  },
  it: {
    name: 'Dr. Padmalaya Nayak',
    title: 'Professor & HOD, CSE/IT',
    image: '/images/padmalaya.jpg',
    scholar: 'https://scholar.google.com/citations?user=6gRzwWoAAAAJ&hl=en',
    scopus: 'https://shorturl.at/X246T',
    bio: [
      'Dr. Padmalaya Nayak is working as a Professor and Head of the Department, CSE/IT, at Gokaraju Lailavathi Engineering College, Hyderabad. She obtained her doctoral degree from the National Institute of Technology, Tiruchirappalli, in 2010 and her Master\'s in CSE from the University of Madras in 2002. She has 23 years of teaching and research experience in Ad hoc and Sensor Networks.',
      'She has published more than 80 research papers in peer-reviewed International Journals and Conferences, contributed 7 book chapters, one Indian Patent, and one Australian Patent. She is a Senior Member of IEEE, IETE, CSI, and IEANG. Her h-index is 17, i10-index is 23, with 1,580+ citations.',
    ],
  },
  'cyber-security': {
    name: 'Dr. Padmalaya Nayak',
    title: 'Professor & HOD, CSE/IT',
    image: '/images/padmalaya.jpg',
    scholar: 'https://scholar.google.com/citations?user=6gRzwWoAAAAJ&hl=en',
    scopus: 'https://shorturl.at/X246T',
    bio: [
      'Dr. Padmalaya Nayak is working as a Professor and Head of the Department, CSE/IT, at Gokaraju Lailavathi Engineering College, Hyderabad. She obtained her doctoral degree from the National Institute of Technology, Tiruchirappalli, in 2010 and her Master\'s in CSE from the University of Madras in 2002.',
      'She has 23 years of teaching and research experience in Ad hoc and Sensor Networks. She has published more than 80 research papers in peer-reviewed International Journals and Conferences. Research interests include WSN, IoT Networks, Network Security, AI/ML, and Deep Learning.',
    ],
  },
  hs: {
    name: 'Dr. J. Kishore Babu',
    title: 'HOD, Humanities & Sciences',
    image: '/images/J-Kishore Babu.jpg',
    bio: [
      'Dr. J. Kishore Babu is the Head of the H&S Department at Gokaraju Lailavathi Engineering College (GLEC), Hyderabad. He earned his Ph.D. in Physics from Acharya Nagarjuna University and has an extensive teaching career spanning 20 years. He joined Gokaraju Rangaraju Institute of Engineering and Technology (GRIET) in 2012, where he played a crucial role in academics and research before taking on his leadership position at GLEC.',
      'He holds memberships in professional bodies such as the LSI & ISTE. With a deep commitment to education and scientific research, Dr. Kishore Babu has been instrumental in mentoring students and enhancing the quality of foundational sciences in engineering education. He has published several journal articles and conference proceedings, reflecting his dedication to advancing scientific knowledge.',
    ],
  },
};

// ── Syllabus data by slug ─────────────────────────────────────────────────────

const SYLLABUS_DATA = {
  cse: {
    batch2024: null,
    batch2020: [
      { label: 'CSE Semester 1 Syllabus', href: '/downloads/syllabus/CSE 1 SEM.pdf' },
      { label: 'CSE Semester 2 Syllabus', href: '/downloads/syllabus/CSE 2 SEM.pdf' },
      { label: 'CSE Semester 3 & 4 Syllabus', href: '/downloads/syllabus/CSE 3 & 4 SEM.pdf' },
      { label: 'CSE Semester 5 & 6 Syllabus', href: '/downloads/syllabus/CSE 5 & 6 SEM.pdf' },
      { label: 'CSE Semester 7 & 8 Syllabus', href: '/downloads/syllabus/CSE 7 & 8 SEM.pdf' },
    ],
  },
  'cse-aiml': {
    single: [
      { label: 'CSE (AI & ML) Syllabus — 2024–25', href: '/downloads/syllabus/CSE (AI&ML).pdf' },
    ],
  },
  'cyber-security': {
    batch2024: [
      { label: 'BE (CS) III Semester 2024–25', href: '/downloads/syllabus/BE (CS) III-Sem 2024_25.PDF' },
      { label: 'BE (CS) IV Semester 2024–25', href: '/downloads/syllabus/BE (CS) IV-Sem 2024_25.PDF' },
    ],
  },
  it: {
    batch2020: [
      { label: 'IT Semester 1 & 2 Syllabus', href: '/downloads/syllabus/IT 1 & 2 SEM.pdf' },
      { label: 'IT Semester 3 & 4 Syllabus', href: '/downloads/syllabus/IT 3 & 4 SEM.pdf' },
      { label: 'IT Semester 5 & 6 Syllabus', href: '/downloads/syllabus/IT 5 & 6 SEM.pdf' },
      { label: 'IT Semester 7 & 8 Syllabus', href: '/downloads/syllabus/IT 7 & 8 SEM.pdf' },
    ],
  },
  hs: {
    note: 'Syllabus for H&S is aligned with Osmania University curriculum for B.E. I Year foundational courses.',
  },
};

// ── Dept label by slug ────────────────────────────────────────────────────────

function getDeptLabel(slug) {
  const map = {
    cse: 'Computer Science & Engineering',
    'cse-aiml': 'CSE (AI & Machine Learning)',
    it: 'Information Technology',
    'cyber-security': 'Cyber Security',
    hs: 'Humanities & Sciences',
  };
  return map[slug] || slug.toUpperCase();
}

// ── Sub-section sidebar links ─────────────────────────────────────────────────

const SUB_SECTIONS = [
  { id: 'hod',          label: 'Head of Department' },
  { id: 'syllabus',     label: 'Syllabus' },
  { id: 'events',       label: 'Events' },
  { id: 'faculty',      label: 'Faculty' },
  { id: 'publications', label: 'Publications & Projects' },
];

// ── HOD Content ───────────────────────────────────────────────────────────────

function HodContent({ slug, deptLabel }) {
  const hod = HOD_DATA[slug];
  if (!hod) return <p className="text-[#6B7280]">HOD information not available.</p>;
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-xl overflow-hidden border border-[#E5E7EB]" style={{ backgroundColor: '#FDFCFC' }}>
        <div className="flex items-center gap-3 px-5 py-3 border-b" style={{ backgroundColor: `${primary}05` }}>
          <div className="w-1 h-5 rounded-full" style={{ backgroundColor: accent }} />
          <span className="font-hind font-bold text-[13px] uppercase tracking-[1.5px]" style={{ color: primary }}>Head of Department — {deptLabel}</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 p-5">
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <img
              src={hod.image}
              alt={hod.name}
              className="rounded-full object-cover"
              style={{ width: '140px', height: '140px', border: `3px solid ${primary}20` }}
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="text-center">
              <p className="font-hind font-bold text-[14px]" style={{ color: primary }}>{hod.name}</p>
              <p className="font-dm-sans text-[11px] mt-0.5" style={{ color: `${primary}99` }}>{hod.title}</p>
            </div>
            {(hod.scholar || hod.scopus) && (
              <div className="flex flex-col gap-1.5 mt-1 w-full">
                {hod.scholar && (
                  <a href={hod.scholar} target="_blank" rel="noreferrer" className="text-center text-[11px] font-semibold px-2 py-1 rounded font-dm-sans" style={{ backgroundColor: `${primary}0F`, color: primary, border: `1px solid ${primary}18` }}>Google Scholar</a>
                )}
                {hod.scopus && (
                  <a href={hod.scopus} target="_blank" rel="noreferrer" className="text-center text-[11px] font-semibold px-2 py-1 rounded font-dm-sans" style={{ backgroundColor: `${primary}0F`, color: primary, border: `1px solid ${primary}18` }}>Scopus Profile</a>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3 flex-1">
            {hod.bio.map((para, i) => (
              <p key={i} className="font-dm-sans text-[14px] leading-[1.85] text-[#374151]">{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Syllabus Content ──────────────────────────────────────────────────────────

function SyllabusContent({ slug }) {
  const data = SYLLABUS_DATA[slug];
  const [tab, setTab] = useState('2020');

  const DownloadLink = ({ href, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all"
      style={{ border: `1px solid ${primary}14`, backgroundColor: '#FDFCFC', textDecoration: 'none' }}
      onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.boxShadow = `0 2px 8px ${primary}14`; }}
      onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#FDFCFC'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: accent }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
      <span className="font-hind font-medium text-[14px] text-[#1F2937]">{label}</span>
    </a>
  );

  if (!data) return <p className="font-dm-sans text-[15px] text-[#6B7280] italic">Syllabus information for this department will be updated soon.</p>;

  if (data.note) return (
    <div className="rounded-xl p-5 border border-[#E5E7EB] bg-[#FDFCFC]">
      <p className="font-dm-sans text-[15px] text-[#374151]">{data.note}</p>
    </div>
  );

  if (data.single) return (
    <div className="flex flex-col gap-2">
      {data.single.map(d => <DownloadLink key={d.href} {...d} />)}
    </div>
  );

  const hasBoth = data.batch2024 && data.batch2020;
  const hasBatch2024 = data.batch2024;
  const hasBatch2020 = data.batch2020;

  if (hasBoth) {
    return (
      <div className="flex flex-col gap-5">
        <div className="flex gap-2">
          {[{ label: '2024 Admitted Batch', value: '2024' }, { label: '2020–23 Admitted Batch', value: '2020' }].map(t => {
            const isActive = tab === t.value;
            return (
              <button key={t.value} onClick={() => setTab(t.value)}
                className="px-4 py-2 rounded-lg font-dm-sans font-semibold text-[13px] transition-all cursor-pointer"
                style={{ backgroundColor: isActive ? primary : `${primary}0F`, color: isActive ? '#fff' : primary, border: `1px solid ${isActive ? primary : `${primary}18`}` }}>
                {t.label}
              </button>
            );
          })}
        </div>
        {tab === '2024' && hasBatch2024 && <div className="flex flex-col gap-2">{data.batch2024.map(d => <DownloadLink key={d.href} {...d} />)}</div>}
        {tab === '2024' && !hasBatch2024 && <div className="rounded-xl p-6 flex items-center justify-center border border-[#E5E7EB] bg-[#FDFCFC]" style={{ minHeight: '120px' }}><p className="text-[14px] text-[#6B7280]">Syllabus for the 2024 admitted batch will be updated soon.</p></div>}
        {tab === '2020' && hasBatch2020 && <div className="flex flex-col gap-2">{data.batch2020.map(d => <DownloadLink key={d.href} {...d} />)}</div>}
      </div>
    );
  }

  if (hasBatch2020) return <div className="flex flex-col gap-2">{data.batch2020.map(d => <DownloadLink key={d.href} {...d} />)}</div>;
  if (hasBatch2024) return <div className="flex flex-col gap-2">{data.batch2024.map(d => <DownloadLink key={d.href} {...d} />)}</div>;
  return null;
}

// ── Events Content ────────────────────────────────────────────────────────────

function EventsContent({ deptLabel }) {
  return (
    <div className="rounded-xl p-8 flex flex-col items-center justify-center text-center" style={{ border: `1px solid ${primary}14`, backgroundColor: '#FDFCFC', minHeight: '200px' }}>
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${primary}0F` }}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" style={{ color: primary }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5"/>
        </svg>
      </div>
      <p className="font-hind font-semibold text-[16px]" style={{ color: primary }}>{deptLabel} Events</p>
      <p className="font-dm-sans text-[13px] mt-1 text-[#6B7280]">Department events and activities will be published here. Check back for updates.</p>
    </div>
  );
}

// ── Faculty Content ───────────────────────────────────────────────────────────

function FacultyContent({ slug, deptLabel }) {
  const pdfMap = {
    cse: '/downloads/CSE-Faculty.pdf',
    'cse-aiml': '/downloads/CSE-AI_ML-Faculty.pdf',
    it: '/downloads/IT-Faculty.pdf',
    hs: '/downloads/CSE-H_S-Faculty.pdf',
  };
  const pdf = pdfMap[slug];
  return (
    <div className="flex flex-col gap-5">
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747]">
        The {deptLabel} department is supported by experienced faculty with strong academic backgrounds and industry exposure. Faculty profiles and updated list will be available below.
      </p>
      {pdf ? (
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-dm-sans font-semibold text-[13px] text-white transition-opacity hover:opacity-90 self-start"
          style={{ backgroundColor: accent }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Download Faculty List (PDF)
        </a>
      ) : (
        <div className="rounded-xl p-6 border border-[#E5E7EB] bg-[#FDFCFC] text-center">
          <p className="font-dm-sans text-[14px] text-[#6B7280] italic">Faculty details will be updated soon.</p>
        </div>
      )}
    </div>
  );
}

// ── Publications Content ──────────────────────────────────────────────────────

function PublicationsContent({ deptLabel }) {
  return (
    <div className="rounded-xl p-8 flex flex-col items-center justify-center text-center" style={{ border: `1px solid ${primary}14`, backgroundColor: '#FDFCFC', minHeight: '200px' }}>
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${primary}0F` }}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" style={{ color: primary }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
        </svg>
      </div>
      <p className="font-hind font-semibold text-[16px]" style={{ color: primary }}>{deptLabel} Publications & Projects</p>
      <p className="font-dm-sans text-[13px] mt-1 text-[#6B7280]">Faculty publications and student project information will be updated here soon.</p>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function DepartmentSubPage() {
  const { slug, subsection } = useParams();
  const dept = college.departments?.find(d => d.slug === slug);

  if (!dept) return <Navigate to="/" replace />;

  const activeSection = SUB_SECTIONS.find(s => s.id === subsection);
  if (!activeSection) return <Navigate to={`/departments/${slug}/hod`} replace />;

  const deptLabel = getDeptLabel(slug);

  function renderContent() {
    switch (subsection) {
      case 'hod':          return <HodContent slug={slug} deptLabel={deptLabel} />;
      case 'syllabus':     return <SyllabusContent slug={slug} deptLabel={deptLabel} />;
      case 'events':       return <EventsContent deptLabel={deptLabel} />;
      case 'faculty':      return <FacultyContent slug={slug} deptLabel={deptLabel} />;
      case 'publications': return <PublicationsContent deptLabel={deptLabel} />;
      default:             return null;
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar college={college} />
      <NavStrip college={college} />
      <PageHero
        college={college}
        title={dept.name}
        subtitle={activeSection.label}
        breadcrumb={['Departments', dept.shortName, activeSection.label]}
        bgImage={dept.heroBgImage}
      />
      <main className="flex-1 w-full section-pad">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-[220px] flex-shrink-0">
            <div className="rounded-xl overflow-hidden border border-[#E5E7EB] sticky top-4">
              <div className="px-4 py-3 border-b" style={{ backgroundColor: primary }}>
                <p className="font-hind font-bold text-[13px] text-white">{dept.shortName}</p>
              </div>
              <nav className="flex flex-col">
                {SUB_SECTIONS.map(s => {
                  const isActive = s.id === subsection;
                  return (
                    <Link
                      key={s.id}
                      to={`/departments/${slug}/${s.id}`}
                      className="px-4 py-3 font-dm-sans text-[13px] font-medium border-b border-[#F3F4F6] last:border-0 transition-colors"
                      style={{
                        backgroundColor: isActive ? `${primary}0F` : '#fff',
                        color: isActive ? primary : '#374151',
                        borderLeft: isActive ? `3px solid ${accent}` : '3px solid transparent',
                      }}
                    >
                      {s.label}
                    </Link>
                  );
                })}
                <div className="border-t border-[#F3F4F6]">
                  <Link
                    to={`/departments/${slug}`}
                    className="px-4 py-3 font-dm-sans text-[12px] font-medium flex items-center gap-1.5 transition-colors hover:bg-[#FAFAFA]"
                    style={{ color: `${primary}80` }}
                  >
                    ← Department Overview
                  </Link>
                </div>
              </nav>
            </div>
          </aside>
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="font-hind font-bold text-[24px] leading-tight" style={{ color: primary }}>{activeSection.label}</h2>
              <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: accent }} />
            </div>
            {renderContent()}
          </div>
        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
