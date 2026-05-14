import { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import college from '../theme';
import Navbar from '../components/Navbar';
import NavStrip from '../components/NavStrip';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

function SectionHeading({ children }) {
  return (
    <h2
      className="font-hind font-bold text-[22px] mb-5 pb-2 inline-block"
      style={{ color: college.primaryColor, borderBottom: `2px solid ${college.greenAccent}` }}
    >
      {children}
    </h2>
  );
}

const thStyle = {
  backgroundColor: college.greenAccent,
  color: '#ffffff',
  padding: '11px 16px',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '13px',
  fontWeight: 600,
  textAlign: 'left',
  borderRight: '1px solid rgba(255,255,255,0.15)',
};

const tdStyle = {
  padding: '10px 16px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '13px',
  color: '#374151',
  borderBottom: '1px solid #e5e7eb',
  borderRight: '1px solid #e5e7eb',
  verticalAlign: 'top',
};

function BPharmacyContent() {
  const { bPharmacy } = college.programmes;

  return (
    <>
      <div className="w-full py-5 px-6 md:px-10 flex flex-wrap gap-6 mb-10 rounded-lg" style={{ backgroundColor: college.greenAccent }}>
        {[
          { label: 'Duration', value: bPharmacy.duration },
          { label: 'Intake', value: bPharmacy.intake },
          { label: 'Affiliation', value: bPharmacy.affiliation },
          { label: 'Approval', value: bPharmacy.approval },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col">
            <span className="font-dm-sans text-[11px] font-semibold uppercase tracking-wide text-white/70">{label}</span>
            <span className="font-hind font-bold text-[15px] text-white">{value}</span>
          </div>
        ))}
      </div>

      <section className="mb-10">
        <SectionHeading>About the Programme</SectionHeading>
        <p className="font-dm-sans text-[15px] leading-[1.75] text-[#474747]">{bPharmacy.about}</p>
      </section>

      <section className="mb-10">
        <SectionHeading>Curriculum Overview</SectionHeading>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb' }}>
            <thead>
              <tr>
                {['Semester', 'Core Subjects'].map((h) => (
                  <th key={h} style={thStyle}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bPharmacy.curriculum.map((row, i) => (
                <tr key={row.sem} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td style={{ ...tdStyle, fontWeight: 700, color: college.primaryColor, whiteSpace: 'nowrap' }}>
                    Sem {row.sem}
                  </td>
                  <td style={tdStyle}>{row.subjects}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <SectionHeading>Career Paths</SectionHeading>
        <div className="flex flex-wrap gap-3">
          {bPharmacy.careerPaths.map((path) => (
            <span
              key={path}
              className="font-dm-sans text-[13px] font-medium px-4 py-2 rounded-full"
              style={{ border: `1.5px solid ${college.primaryColor}`, color: college.primaryColor, backgroundColor: `${college.primaryColor}08` }}
            >
              {path}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}

function MPharmacyOverviewContent() {
  const { mPharmacy } = college.programmes;

  return (
    <>
      <section className="mb-10">
        <div className="flex flex-wrap gap-6 mb-8">
          {[
            { label: 'Duration', value: mPharmacy.duration },
            { label: 'Approval', value: mPharmacy.approval },
            { label: 'Specializations', value: '3' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col px-6 py-4 rounded-lg"
              style={{ backgroundColor: `${college.primaryColor}10`, border: `1px solid ${college.primaryColor}25` }}
            >
              <span className="font-dm-sans text-[11px] font-semibold uppercase tracking-wide" style={{ color: college.greenAccent }}>{label}</span>
              <span className="font-hind font-bold text-[16px]" style={{ color: college.primaryColor }}>{value}</span>
            </div>
          ))}
        </div>

        <SectionHeading>About the Programme</SectionHeading>
        <p className="font-dm-sans text-[15px] leading-[1.75] text-[#474747]">{mPharmacy.about}</p>
      </section>

      <section>
        <SectionHeading>Specializations</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mPharmacy.specializations.map((spec) => (
            <div
              key={spec.name}
              className="flex flex-col p-6 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-hind font-bold text-[17px] mb-3" style={{ color: college.primaryColor }}>
                {spec.name}
              </h3>
              <p className="font-dm-sans text-[13px] leading-relaxed text-[#474747] flex-1 mb-4">{spec.desc}</p>
              <div className="mb-4">
                <p className="font-hind font-semibold text-[12px] uppercase tracking-wide mb-2" style={{ color: college.greenAccent }}>
                  Career Paths
                </p>
                <ul className="space-y-1">
                  {spec.careers.map((c) => (
                    <li key={c} className="font-dm-sans text-[12px] text-[#6B7280] flex items-start gap-2">
                      <span style={{ color: college.greenAccent }} className="mt-0.5 font-bold">▸</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={spec.href}
                className="font-hind font-semibold text-[13px] inline-flex items-center gap-1 mt-auto transition-colors"
                style={{ color: college.primaryColor }}
                onMouseEnter={(e) => (e.currentTarget.style.color = college.greenAccent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = college.primaryColor)}
              >
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function MPharmacySpecializationContent({ specialization }) {
  const spec = college.programmes.mPharmacy.specializations.find(
    (s) => s.href === `/programmes/m-pharmacy/${specialization}`
  );

  if (!spec) {
    return (
      <p className="font-dm-sans text-[15px] text-[#6B7280]">Specialization details not found.</p>
    );
  }

  return (
    <>
      <section className="mb-10">
        <SectionHeading>About the Specialization</SectionHeading>
        <p className="font-dm-sans text-[15px] leading-[1.75] text-[#474747]">{spec.desc}</p>
      </section>

      <section className="mb-10">
        <SectionHeading>Career Paths</SectionHeading>
        <div className="flex flex-wrap gap-3">
          {spec.careers.map((path) => (
            <span
              key={path}
              className="font-dm-sans text-[13px] font-medium px-4 py-2 rounded-full"
              style={{ border: `1.5px solid ${college.primaryColor}`, color: college.primaryColor, backgroundColor: `${college.primaryColor}08` }}
            >
              {path}
            </span>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading>Eligibility</SectionHeading>
        <div
          className="p-5 rounded-lg"
          style={{ backgroundColor: `${college.primaryColor}08`, border: `1px solid ${college.primaryColor}20` }}
        >
          <ul className="space-y-3">
            {[
              'B.Pharmacy degree from a recognized university (PCI approved institution).',
              'Qualifying score in TG PGECET (Pharmacy stream).',
              'Admission through centralized counselling conducted by TSCHE.',
            ].map((item) => (
              <li key={item} className="font-dm-sans text-[14px] text-[#474747] flex items-start gap-2">
                <span style={{ color: college.greenAccent }} className="mt-0.5 font-bold flex-shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
          <div
            className="mt-4 flex items-center gap-3 pt-4"
            style={{ borderTop: `1px solid ${college.primaryColor}20` }}
          >
            <span className="font-hind font-bold text-[13px]" style={{ color: college.primaryColor }}>
              Counselling Code:
            </span>
            <span
              className="font-hind font-bold text-[14px] px-3 py-0.5 rounded"
              style={{ backgroundColor: college.primaryColor, color: '#ffffff' }}
            >
              GRCP1
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

function PgCommitteeContent() {
  return (
    <>
      <section className="mb-10">
        <SectionHeading>PG Program Committee</SectionHeading>
        <p className="font-dm-sans text-[15px] leading-[1.75] text-[#474747] mb-6">
          The PG Program Committee at GRCP oversees the academic quality, research standards, and curriculum
          development for the Master of Pharmacy (M.Pharmacy) program. The committee comprises senior faculty
          members from each specialization and is responsible for:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            'Reviewing and updating the M.Pharmacy curriculum in line with PCI norms and industry trends.',
            'Monitoring the progress and quality of PG thesis and research projects.',
            'Coordinating guest lectures, seminars, and industrial visits for PG students.',
            'Evaluating the performance of M.Pharmacy students and recommending improvements.',
            'Facilitating collaboration between departments for interdisciplinary research.',
          ].map((item) => (
            <li key={item} className="font-dm-sans text-[14px] text-[#474747] flex items-start gap-2">
              <span style={{ color: college.greenAccent }} className="mt-0.5 font-bold flex-shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div
        className="p-6 rounded-lg text-center"
        style={{ backgroundColor: `${college.primaryColor}08`, border: `1px dashed ${college.primaryColor}40` }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: `${college.primaryColor}15` }}
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: college.primaryColor }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <h3 className="font-hind font-bold text-[16px] mb-2" style={{ color: college.primaryColor }}>
          Committee Details Being Updated
        </h3>
        <p className="font-dm-sans text-[13px] text-[#6B7280] max-w-md mx-auto">
          The complete list of PG Program Committee members and their contact details is currently being
          updated. Please contact the college office for more information.
        </p>
        <a
          href={`tel:${college.phone}`}
          className="inline-block mt-4 font-hind font-semibold text-[14px] px-6 py-2 rounded transition-opacity hover:opacity-80"
          style={{ backgroundColor: college.greenAccent, color: '#ffffff' }}
        >
          Contact College Office
        </a>
      </div>
    </>
  );
}

function getProgrammeInfo(programme, specialization) {
  if (programme === 'b-pharmacy') {
    return {
      title: college.programmes.bPharmacy.title,
      subtitle: `${college.programmes.bPharmacy.duration} | ${college.programmes.bPharmacy.intake} | PCI Approved | NBA Accredited`,
      breadcrumb: ['Programmes', 'B.Pharmacy'],
      content: <BPharmacyContent />,
    };
  }

  if (programme === 'm-pharmacy' && !specialization) {
    return {
      title: college.programmes.mPharmacy.title,
      subtitle: `${college.programmes.mPharmacy.duration} | PCI Approved | 3 Specializations`,
      breadcrumb: ['Programmes', 'M.Pharmacy'],
      content: <MPharmacyOverviewContent />,
    };
  }

  if (programme === 'm-pharmacy' && specialization === 'pg-committee') {
    return {
      title: 'PG Program Committee',
      subtitle: 'M.Pharmacy Academic Oversight & Research Governance',
      breadcrumb: ['Programmes', 'M.Pharmacy', 'PG Program Committee'],
      content: <PgCommitteeContent />,
    };
  }

  if (programme === 'm-pharmacy' && specialization) {
    const spec = college.programmes.mPharmacy.specializations.find(
      (s) => s.href === `/programmes/m-pharmacy/${specialization}`
    );
    const name = spec ? spec.name : 'M.Pharmacy Specialization';
    return {
      title: name,
      subtitle: `M.Pharmacy Specialization | ${college.programmes.mPharmacy.duration} | PCI Approved`,
      breadcrumb: ['Programmes', 'M.Pharmacy', name],
      content: <MPharmacySpecializationContent specialization={specialization} />,
    };
  }

  return {
    title: college.programmes.bPharmacy.title,
    subtitle: `${college.programmes.bPharmacy.duration} | ${college.programmes.bPharmacy.intake} | PCI Approved | NBA Accredited`,
    breadcrumb: ['Programmes', 'B.Pharmacy'],
    content: <BPharmacyContent />,
  };
}

export default function ProgrammesPage() {
  const { programme = 'b-pharmacy', specialization } = useParams();
  const location = useLocation();
  const info = getProgrammeInfo(programme, specialization);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar college={college} />
      <NavStrip college={college} />
      <PageHero
        college={college}
        title={info.title}
        subtitle={info.subtitle}
        breadcrumb={info.breadcrumb}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">
          {info.content}
        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
