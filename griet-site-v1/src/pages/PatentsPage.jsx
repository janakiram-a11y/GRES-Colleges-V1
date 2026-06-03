import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

// ── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ count, label }) {
  return (
    <div
      className="flex-1 min-w-[140px] flex flex-col items-center justify-center py-6 px-4 rounded-lg text-center"
      style={{
        background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)`,
      }}
    >
      <span className="font-hind font-bold text-3xl text-white">{count}</span>
      <span className="font-dm-sans text-sm text-white opacity-80 mt-1">{label}</span>
    </div>
  );
}

// ── Section Heading ──────────────────────────────────────────────────────────
function SectionHeading({ children }) {
  return (
    <h2
      className="font-hind font-bold text-xl md:text-2xl mb-4 pb-2 inline-block"
      style={{ color: college.primaryColor, borderBottom: `2px solid ${college.accentColor}` }}
    >
      {children}
    </h2>
  );
}

// ── Patent Category Card ─────────────────────────────────────────────────────
function CategoryCard({ title, description }) {
  return (
    <div
      className="rounded-lg border p-5"
      style={{ borderColor: 'rgba(91,16,39,0.15)', background: '#FAF4EE' }}
    >
      <h3
        className="font-hind font-bold text-base mb-2"
        style={{ color: college.primaryColor }}
      >
        {title}
      </h3>
      <p className="font-dm-sans text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

// ── Filing Step ──────────────────────────────────────────────────────────────
function FilingStep({ number, text }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-hind font-bold text-sm text-white"
        style={{ backgroundColor: college.primaryColor }}
      >
        {number}
      </div>
      <p className="font-dm-sans text-sm text-gray-700 leading-relaxed pt-1">{text}</p>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function PatentsPage() {
  const STATS = [
    { count: '85+', label: 'Patents Filed' },
    { count: '60+', label: 'Granted' },
    { count: '15+', label: 'Published' },
    { count: 'Multiple', label: 'International' },
  ];

  const CATEGORIES = [
    {
      title: 'Computer Science & AI',
      description: 'Machine Learning algorithms, data processing systems, software architectures',
    },
    {
      title: 'Electronics & Communication',
      description: 'Antenna designs, signal processing, embedded systems',
    },
    {
      title: 'Mechanical & Manufacturing',
      description: 'Material processing, manufacturing innovations, design patents',
    },
    {
      title: 'Electrical Systems',
      description: 'Power electronics, energy harvesting, smart grid technologies',
    },
    {
      title: 'Biomedical',
      description: 'Medical devices, diagnostic tools, healthcare applications',
    },
    {
      title: 'Civil & Environmental',
      description: 'Construction materials, environmental monitoring systems',
    },
  ];

  const STEPS = [
    'Idea disclosure to Dean of Research',
    'Prior art search and patentability assessment',
    'Patent application drafting by IP Cell',
    'Filing with Patent Office (Indian/International)',
    'Examination and grant process',
    'Certificate issued by Patent Office',
  ];

  return (
    <AcademicsLayout title="Patents">
      <div className="max-w-5xl mx-auto py-10 space-y-12">

        {/* 1. Stats Bar */}
        <div className="flex flex-wrap gap-4">
          {STATS.map((s) => (
            <StatCard key={s.label} count={s.count} label={s.label} />
          ))}
        </div>

        {/* 2. About */}
        <section>
          <SectionHeading>About GRIET Patents</SectionHeading>
          <p className="font-dm-sans text-sm text-gray-700 leading-relaxed">
            GRIET has filed 85+ patents across its departments. The patent filing process is
            supported by the Dean of Research office and the EDC. GRES (Gokaraju Rangaraju
            Educational Society) is recognized as a SIRO (Scientific and Industrial Research
            Organisation) by DSIR.
          </p>
        </section>

        {/* 3. Patent Categories */}
        <section>
          <SectionHeading>Patent Categories</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.title} title={cat.title} description={cat.description} />
            ))}
          </div>
        </section>

        {/* 4. Filing Process */}
        <section>
          <SectionHeading>Filing Process</SectionHeading>
          <div className="space-y-4">
            {STEPS.map((step, i) => (
              <FilingStep key={i} number={i + 1} text={step} />
            ))}
          </div>
        </section>

        {/* 5. Support Available */}
        <section>
          <SectionHeading>Support Available</SectionHeading>
          <ul className="font-dm-sans text-sm text-gray-700 leading-relaxed list-disc list-inside space-y-2">
            <li>End-to-end support from the IP Cell and Dean of Research office</li>
            <li>No cost to faculty or students for Indian patent filings</li>
            <li>Seed funding available for international patent filings</li>
          </ul>
        </section>

        {/* 6. Notable Patents */}
        <section>
          <SectionHeading>Notable Patents</SectionHeading>
          <p className="font-dm-sans text-sm text-gray-700 mb-3">
            For a detailed list of patents filed and granted by GRIET, visit the official patents
            page.
          </p>
          <a
            href="https://www.griet.ac.in/Patents.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded font-dm-sans font-semibold text-sm text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: college.primaryColor }}
          >
            View Patents on GRIET Website
          </a>
        </section>

        {/* 7. Contact */}
        <section>
          <SectionHeading>Contact</SectionHeading>
          <div
            className="rounded-lg border p-5"
            style={{ borderColor: 'rgba(91,16,39,0.15)', background: '#FAF4EE' }}
          >
            <p className="font-hind font-bold text-base mb-1" style={{ color: college.primaryColor }}>
              Dean of Research
            </p>
            <a
              href="mailto:research@griet.ac.in"
              className="font-dm-sans text-sm hover:underline"
              style={{ color: college.accentColor }}
            >
              research@griet.ac.in
            </a>
          </div>
        </section>

      </div>
    </AcademicsLayout>
  );
}
