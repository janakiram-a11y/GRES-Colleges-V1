import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function SwayamPrabhaPage() {
  const platforms = [
    {
      name: 'NPTEL',
      description: 'IIT/IISc courses with exam certification',
      url: 'https://nptel.ac.in',
    },
    {
      name: 'SWAYAM',
      description: 'National MOOCs, UGC credit-eligible',
      url: 'https://swayam.gov.in',
    },
    {
      name: 'Swayam Prabha',
      description: '32 DTH channels, 24x7 broadcast',
      url: 'https://www.swayamprabha.gov.in',
    },
    {
      name: 'NPTELHRD YouTube',
      description: '50,000+ lecture videos',
      url: null,
    },
  ];

  const enrollSteps = [
    'Visit nptel.ac.in',
    'Register with your griet.ac.in email',
    'Browse & enroll in your chosen course',
    'Complete lectures & assignments',
    'Appear for proctored exam (optional)',
    'Earn IIT/IISc certificate',
  ];

  const benefits = [
    'UGC credit transfer',
    'IIT/IISc certificates',
    'Free access to all courses',
    'Self-paced learning',
  ];

  return (
    <AcademicsLayout title="Swayam Prabha — Online Learning">
      {/* About */}
      <section className="mb-10">
        <SectionLabel>About</SectionLabel>
        <p className="font-hind text-gray-700 leading-relaxed">
          GRIET participates in SWAYAM (Study Webs of Active Learning for Young Aspiring Minds) and
          NPTEL — the national MOOC platforms for engineering education. These platforms offer free
          courses from IITs, IIMs, and other premier institutions, enabling students to learn from
          the best faculty in the country at no cost.
        </p>
      </section>

      {/* Platform Cards */}
      <section className="mb-10">
        <SectionLabel>Platforms</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="border border-gray-200 rounded-lg p-5 flex flex-col gap-2 shadow-sm"
            >
              <h3
                className="font-hind font-bold text-[16px]"
                style={{ color: college.primaryColor }}
              >
                {platform.name}
              </h3>
              <p className="font-hind text-gray-600 text-sm">{platform.description}</p>
              {platform.url && (
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-hind text-sm mt-auto"
                  style={{ color: college.primaryColor }}
                >
                  {platform.url}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* GRIET NPTEL Local Chapter */}
      <section className="mb-10">
        <SectionLabel>GRIET NPTEL Local Chapter</SectionLabel>
        <p className="font-hind text-gray-700 leading-relaxed mb-3">
          The GRIET NPTEL Local Chapter actively promotes course enrollment among students and
          faculty, hosts proctored examinations on campus, and recognises top performers with awards
          and felicitations.
        </p>
        <p className="font-hind text-gray-700">
          <span className="font-semibold">Coordinator:</span>{' '}
          <a
            href="mailto:nptel@griet.ac.in"
            className="underline"
            style={{ color: college.primaryColor }}
          >
            nptel@griet.ac.in
          </a>
        </p>
      </section>

      {/* How to Enroll */}
      <section className="mb-10">
        <SectionLabel>How to Enroll</SectionLabel>
        <ol className="list-decimal list-inside space-y-2">
          {enrollSteps.map((step, index) => (
            <li key={index} className="font-hind text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Benefits */}
      <section className="mb-10">
        <SectionLabel>Benefits</SectionLabel>
        <ul className="list-disc list-inside space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="font-hind text-gray-700">
              {benefit}
            </li>
          ))}
        </ul>
      </section>
    </AcademicsLayout>
  );
}
