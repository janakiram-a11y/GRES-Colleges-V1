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
        className="font-hind font-semibold text-[28px] leading-9 pb-3"
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

function OverviewSection() {
  const { overview, stats, activities, recruiters } = college.placements;

  return (
    <div className="space-y-12">
      <section>
        <SectionHeader label="Placements" title="Placement Cell @ GRCP" />
        <p className="font-dm-sans font-normal text-[16px] leading-6 text-[#474747] mt-4 max-w-[780px]">
          {overview}
        </p>
      </section>

      <section>
        <div
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: '#00873d' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center px-6 py-10 border-b border-r border-white/10 last:border-r-0"
                style={{
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  borderBottom: 'none',
                }}
              >
                <span
                  className="font-hind font-bold text-[38px] leading-none mb-2"
                  style={{ color: '#F3DAB2' }}
                >
                  {stat.value}
                </span>
                <span className="font-dm-sans text-[13px] text-white/75 uppercase tracking-[1px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h3
          className="font-hind font-semibold text-[18px] leading-7 mb-5"
          style={{ color: college.primaryColor }}
        >
          Key Activities
        </h3>
        <ul className="space-y-3 max-w-[720px]">
          {activities.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-[7px]"
                style={{ backgroundColor: college.greenAccent }}
              />
              <span className="font-dm-sans font-normal text-[16px] leading-6 text-[#474747]">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3
          className="font-hind font-semibold text-[18px] leading-7 mb-6"
          style={{ color: college.primaryColor }}
        >
          Our Recruiters
        </h3>
        <div className="flex flex-wrap gap-3 max-w-[780px]">
          {recruiters.map((r, i) => (
            <span
              key={i}
              className="font-dm-sans font-medium text-[13px] px-4 py-2 rounded-full border"
              style={{ color: college.primaryColor, borderColor: `${college.primaryColor}30`, backgroundColor: `${college.primaryColor}06` }}
            >
              {r.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

function PlacementStatusSection() {
  const rows = [
    { year: '2024–25', programme: 'B.Pharmacy', placed: '45+', highest: '6.2 LPA', average: '3.8 LPA' },
    { year: '2023–24', programme: 'B.Pharmacy', placed: '40+', highest: '5.8 LPA', average: '3.5 LPA' },
    { year: '2022–23', programme: 'B.Pharmacy', placed: '38+', highest: '5.2 LPA', average: '3.2 LPA' },
    { year: '2024–25', programme: 'M.Pharmacy', placed: '85%+', highest: 'Industry Absorption', average: 'Industry Absorption' },
    { year: '2023–24', programme: 'M.Pharmacy', placed: '82%+', highest: 'Industry Absorption', average: 'Industry Absorption' },
  ];

  return (
    <div className="space-y-10">
      <SectionHeader label="Track Record" title="Placement Status" />
      <p className="font-dm-sans font-normal text-[16px] leading-6 text-[#474747] max-w-[720px]">
        GRCP maintains a strong placement record with consistently high absorption rates across B.Pharmacy and M.Pharmacy programs.
        Below is a summary of placement statistics over recent academic years.
      </p>

      <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: `${college.primaryColor}18` }}>
        <table className="w-full min-w-[640px]">
          <thead>
            <tr style={{ backgroundColor: college.greenAccent }}>
              {['Academic Year', 'Programme', 'Students Placed', 'Highest Package', 'Average Package'].map((h) => (
                <th
                  key={h}
                  className="font-dm-sans font-semibold text-[13px] text-white text-left px-5 py-3.5"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-t"
                style={{ borderColor: `${college.primaryColor}10`, backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}
              >
                <td className="font-dm-sans text-[14px] font-medium text-[#474747] px-5 py-3.5">{row.year}</td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5">{row.programme}</td>
                <td className="px-5 py-3.5">
                  <span
                    className="font-dm-sans font-bold text-[14px]"
                    style={{ color: college.primaryColor }}
                  >
                    {row.placed}
                  </span>
                </td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5">{row.highest}</td>
                <td className="font-dm-sans text-[14px] text-[#474747] px-5 py-3.5">{row.average}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="rounded-2xl p-6 border max-w-[680px]"
        style={{ borderColor: `${college.greenAccent}30`, backgroundColor: `${college.greenAccent}0D` }}
      >
        <p className="font-dm-sans font-normal text-[14px] leading-[22px] text-[#474747]">
          <span className="font-semibold">Note:</span> Placement figures are updated annually. M.Pharmacy graduates are predominantly absorbed
          into pharmaceutical R&D, QA/QC, academic, and clinical research roles. For detailed placement reports, contact the Placement Cell.
        </p>
      </div>
    </div>
  );
}

const sectionConfig = {
  overview: {
    title: 'Placement Cell @ GRCP',
    subtitle: 'Bridging pharmaceutical education with rewarding industry careers',
    breadcrumb: ['Placements', 'Placement Cell @ GRCP'],
  },
  status: {
    title: 'Placement Status',
    subtitle: 'Year-wise placement records and industry absorption statistics',
    breadcrumb: ['Placements', 'Placement Status'],
  },
};

const sectionContent = {
  overview: <OverviewSection />,
  status: <PlacementStatusSection />,
};

export default function PlacementsPage() {
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
