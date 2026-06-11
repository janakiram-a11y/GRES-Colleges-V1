import { useParams } from 'react-router-dom';
import CollegeLayout from '../CollegeLayout';
import college from '../theme';
import departments from '../data/departments';
import SectionHeading from '../components/SectionHeading';

// ── Icons (using the site's bronze/gold stroke style) ──────────────────────
const BookIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M4 4h12v13H4zM4 4a3 3 0 013-3h6a3 3 0 013 3" stroke="#5B1027" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7 8h6M7 11h4" stroke="#5B1027" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const FlaskIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M7 3v6L3 16h14L13 9V3" stroke="#5B1027" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 3h8" stroke="#5B1027" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="9" cy="13" r="1" fill="#5B1027" />
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M10 2l2.5 5.5 6 .5-4.5 4 1.5 6L10 15l-5.5 3 1.5-6L1.5 8l6-.5L10 2z"
      stroke="#5B1027" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
const UsersIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M13 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="#5B1027" strokeWidth="1.5" />
    <path d="M3 17a7 7 0 0114 0" stroke="#5B1027" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <rect x="2" y="7" width="16" height="10" rx="2" stroke="#5B1027" strokeWidth="1.5" />
    <path d="M6 7V5a2 2 0 014 0v2M6 7h8" stroke="#5B1027" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const ChipIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <rect x="5" y="5" width="10" height="10" rx="1" stroke="#5B1027" strokeWidth="1.5" />
    <path d="M8 5V3M12 5V3M8 17v-2M12 17v-2M5 8H3M5 12H3M17 8h-2M17 12h-2" stroke="#5B1027" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const featureIcons = [FlaskIcon, BriefcaseIcon, BookIcon, ChipIcon, StarIcon, UsersIcon];

// ── Banner ──────────────────────────────────────────────────────────────────
function DeptBanner({ dept }) {
  return (
    <div
      className="w-full flex items-center justify-center py-12"
      style={{
        background: `linear-gradient(135deg, ${dept.bannerFrom} 0%, ${college.primaryColor} 100%)`,
      }}
    >
      <div className="text-center px-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="block h-px w-10 opacity-40" style={{ backgroundColor: college.accentColor }} />
          <span className="font-dm-sans text-[11px] font-semibold tracking-[0.22em] uppercase opacity-70 text-white">
            GRIET – Department
          </span>
          <span className="block h-px w-10 opacity-40" style={{ backgroundColor: college.accentColor }} />
        </div>
        <h1 className="text-white font-hind font-bold text-2xl md:text-[32px] leading-tight tracking-wide">
          {dept.fullName}
        </h1>
        <div
          className="mx-auto mt-4 h-0.5 w-16 rounded-full"
          style={{ backgroundColor: college.accentColor }}
        />
      </div>
    </div>
  );
}

// ── Stats strip (accent-color background, like StatsBar) ───────────────────
function DeptStatsStrip({ dept }) {
  const stats = [
    `Est. ${dept.established}`,
    ...dept.statsItems,
  ];
  return (
    <div
      className="w-full py-3"
      style={{
        backgroundColor: '#F3DAB2',
        borderTop: '1px solid rgba(91,16,39,0.12)',
        borderBottom: '1px solid rgba(91,16,39,0.12)',
      }}
    >
      <div className="flex flex-wrap justify-center items-center gap-8 px-6">
        {stats.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span
              className="font-hind font-semibold text-base leading-5"
              style={{ color: college.primaryColor }}
            >
              {item}
            </span>
            {i < stats.length - 1 && (
              <span className="text-[10px]" style={{ color: college.accentColor }}>●</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


// ── Vision / Mission cards (matches AboutPage VisionCard) ──────────────────
const visionCards = [
  { key: 'vision',   bg: '#F6F1F2', dark: false },
  { key: 'mission',  bg: '#5B1027', dark: true  },
  { key: 'quality',  bg: '#F6F1F2', dark: false },
  { key: 'strategy', bg: '#5B1027', dark: true  },
];

function VisionMissionCards({ dept }) {
  const cards = [];
  if (dept.vision)       cards.push({ title: 'Vision',  text: dept.vision,                ...visionCards[0] });
  if (dept.mission?.length) cards.push({ title: 'Mission', text: dept.mission.join('\n\n'), ...visionCards[1] });
  if (!cards.length) return null;
  return (
    <div className={`grid gap-6 ${cards.length === 1 ? 'grid-cols-1 max-w-2xl' : 'grid-cols-1 md:grid-cols-2'}`}>
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-lg p-6"
          style={{ backgroundColor: card.bg, border: card.dark ? 'none' : `1px solid rgba(91,16,39,0.10)` }}
        >
          <h3
            className="font-hind font-bold text-xl mb-3"
            style={{ color: card.dark ? '#fff' : college.primaryColor }}
          >
            {card.title}
          </h3>
          <div className="w-8 h-0.5 rounded-full mb-3" style={{ backgroundColor: college.accentColor }} />
          <p
            className="font-dm-sans text-sm leading-relaxed whitespace-pre-line italic"
            style={{ color: card.dark ? 'rgba(255,255,255,0.85)' : '#474747' }}
          >
            {card.text}
          </p>
        </div>
      ))}
    </div>
  );
}

// ── News & Events section ───────────────────────────────────────────────────
function NewsBadge() {
  return (
    <span className="inline-block bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm align-middle ml-1">
      NEW
    </span>
  );
}

function NewsEventsSection({ dept }) {
  if (!dept.newsEvents?.length) return null;
  return (
    <section className="py-12 border-t border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <SectionHeading>News &amp; Events</SectionHeading>
        <a
          href="#"
          className="text-xs font-dm-sans font-semibold px-4 py-2 rounded transition-colors text-white hover:opacity-90"
          style={{ backgroundColor: college.primaryColor }}
        >
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {dept.newsEvents.slice(0, 6).map((item, i) => (
          <a
            key={i}
            href="#"
            className="group flex flex-col p-5 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow"
          >
            <div
              className="w-full h-1 rounded-full mb-4"
              style={{ backgroundColor: dept.bannerFrom }}
            />
            <p className="font-hind font-semibold text-[0.9375rem] leading-snug group-hover:underline"
              style={{ color: college.primaryColor }}>
              {item.title}
              {item.isNew && <NewsBadge />}
            </p>
            {item.desc && (
              <p className="mt-2 font-dm-sans text-[0.875rem] text-gray-500 leading-relaxed">{item.desc}</p>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}

// ── Announcements sidebar ───────────────────────────────────────────────────
function AnnouncementsPanel({ dept }) {
  if (!dept.announcements?.length) return null;
  return (
    <aside className="w-full lg:w-[280px] flex-shrink-0">
      <div
        className="text-white text-sm font-hind font-bold px-4 py-2.5 flex items-center gap-2 rounded-t"
        style={{ backgroundColor: college.primaryColor }}
      >
        <span aria-hidden="true">📢</span>
        <span>Announcements</span>
      </div>
      <div className="border border-t-0 border-gray-200 rounded-b bg-white overflow-y-auto"
        style={{ maxHeight: 320 }}>
        {dept.announcements.map((item, i) => (
          <a
            key={i}
            href="#"
            className="block px-4 py-3 border-b last:border-b-0 border-gray-100 font-dm-sans text-[0.875rem] leading-snug text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </aside>
  );
}

// ── Research / highlights stats (matches ResearchSection dark bg) ──────────
function DeptHighlights({ dept }) {
  if (!dept.highlights?.length) return null;
  return (
    <section
      className="w-full page-pad"
      style={{ backgroundColor: '#5B1027' }}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <p
            className="font-hind font-bold text-[18px] uppercase tracking-[1.4px]"
            style={{ color: '#F3DAB2' }}
          >
            Department at a Glance
          </p>
          <h2 className="font-hind font-bold text-2xl md:text-3xl text-white">
            {dept.shortName} – Key Achievements
          </h2>
        </div>
        <div
          className={`grid gap-6 ${dept.highlights.length <= 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2 md:grid-cols-4'}`}
        >
          {dept.highlights.map(({ count, label, desc }) => (
            <div
              key={label}
              className="bg-white/10 border border-white/20 rounded-xl px-6 py-8 flex flex-col items-center text-center gap-3"
            >
              <span
                className="font-hind font-bold text-[28px] leading-none"
                style={{ color: '#F3DAB2' }}
              >
                {count}
              </span>
              <span className="font-hind font-semibold text-base text-white">{label}</span>
              {desc && <span className="font-dm-sans text-[0.875rem] text-white/70 leading-relaxed">{desc}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Feature cards (matches HighlightCards dark-bg glass style) ─────────────
function DeptFeatureCards({ dept }) {
  if (!dept.featureCards?.length) return null;
  return (
    <section
      className="w-full page-pad"
      style={{ backgroundColor: '#F6F1F2' }}
    >
      <div>
        <div className="text-center mb-10">
          <p
            className="font-hind font-bold text-[16px] uppercase tracking-[1.4px] mb-2"
            style={{ color: college.accentColor }}
          >
            What We Offer
          </p>
          <h2 className="font-hind font-bold text-2xl md:text-3xl" style={{ color: college.accentColor }}>
            Facilities &amp; Opportunities
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dept.featureCards.map((card, i) => {
            const Icon = featureIcons[i % featureIcons.length];
            return (
              <div
                key={card.title}
                className="relative bg-white rounded-lg p-6 flex flex-col gap-3"
                style={{ border: '1px solid rgba(91,16,39,0.12)', boxShadow: '0px 4px 12px rgba(0,0,0,0.06)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${college.accentColor}15` }}>
                    <Icon />
                  </div>
                  <h3 className="font-dm-sans font-bold text-base" style={{ color: college.primaryColor }}>{card.title}</h3>
                </div>
                <p className="font-dm-sans text-[0.9375rem] leading-relaxed" style={{ color: '#474747' }}>{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Notable alumni section (ECE-specific) ──────────────────────────────────
function AlumniSection({ dept }) {
  if (!dept.placedStudents?.length) return null;
  return (
    <section className="py-12 border-t border-gray-100">
      <SectionHeading>Notable Placed Alumni</SectionHeading>
      <div className="overflow-x-auto mt-2">
        <table className="w-full text-[0.9375rem] font-dm-sans border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr style={{ backgroundColor: college.primaryColor }}>
              <th className="text-left px-5 py-3 text-white font-hind font-semibold text-[0.875rem]">Name</th>
              <th className="text-left px-5 py-3 text-white font-hind font-semibold text-[0.875rem]">Role</th>
              <th className="text-left px-5 py-3 text-white font-hind font-semibold text-[0.875rem]">Company</th>
            </tr>
          </thead>
          <tbody>
            {dept.placedStudents.map((s, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-5 py-2.5 border-b border-gray-100 font-medium text-gray-800">{s.name}</td>
                <td className="px-5 py-2.5 border-b border-gray-100 text-gray-600">{s.role}</td>
                <td className="px-5 py-2.5 border-b border-gray-100 text-gray-600">{s.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function DepartmentPage() {
  const { deptId } = useParams();
  const dept = departments.find((d) => d.id === deptId);

  if (!dept) {
    return (
      <CollegeLayout college={college}>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-hind font-bold text-2xl mb-3" style={{ color: college.primaryColor }}>
              Department Not Found
            </h2>
            <p className="font-dm-sans text-gray-500">
              The department you are looking for does not exist.
            </p>
          </div>
        </div>
      </CollegeLayout>
    );
  }

  return (
    <CollegeLayout college={college}>
      {/* 1. Banner */}
      <DeptBanner dept={dept} />

      {/* 2. Stats strip */}
      <DeptStatsStrip dept={dept} />

      {/* 3. Main content container */}
      <div className="page-pad space-y-14">

        {/* About */}
        <section>
          <SectionHeading>About the Department</SectionHeading>
          <div className="flex flex-col lg:flex-row gap-10 items-start mt-2">
            <div className="flex-1 min-w-0 space-y-4 font-dm-sans text-[15px] leading-relaxed text-gray-800 whitespace-pre-line">
              {dept.about}
            </div>
            <AnnouncementsPanel dept={dept} />
          </div>
        </section>

        {/* Vision & Mission */}
        {(dept.vision || dept.mission?.length > 0) && (
          <section>
            <SectionHeading>Vision &amp; Mission</SectionHeading>
            <VisionMissionCards dept={dept} />
          </section>
        )}

        {/* News & Events */}
        <NewsEventsSection dept={dept} />

        {/* Placed Alumni (ECE) */}
        <AlumniSection dept={dept} />

      </div>

      {/* 4. Highlights stats (dark bg, full-width) */}
      <DeptHighlights dept={dept} />

      {/* 5. Feature cards (dept accent bg, full-width) */}
      <DeptFeatureCards dept={dept} />

    </CollegeLayout>
  );
}
