import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const programCategories = [
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    programs: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
  },
  {
    title: 'AI & Data Science',
    icon: '🤖',
    programs: ['Python ML', 'TensorFlow', 'Data Analytics', 'Power BI'],
  },
  {
    title: 'Software Development',
    icon: '💻',
    programs: ['Java Full Stack', 'MEAN Stack', 'React', 'Node.js'],
  },
  {
    title: 'Networking & Security',
    icon: '🔒',
    programs: ['CCNA', 'CompTIA Security+', 'Ethical Hacking'],
  },
  {
    title: 'Design & Creativity',
    icon: '🎨',
    programs: ['AutoCAD', 'SolidWorks', 'UI/UX Design'],
  },
  {
    title: 'Soft Skills',
    icon: '🗣️',
    programs: ['Communication', 'Leadership', 'Interview Skills'],
  },
];

const certifications = ['TASK', 'Cisco', 'Oracle', 'Microsoft', 'IBM'];

const SkillPlusPage = () => {
  return (
    <AcademicsLayout>
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">

        {/* Header */}
        <div className="text-center space-y-3">
          <h1
            className="text-4xl font-bold"
            style={{ color: college.primary }}
          >
            Skill Plus Programs
          </h1>
          <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">
            GRIET Skill Development Cell · Powered by TASK
          </p>
        </div>

        {/* About */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: college.primary }}
          >
            About Skill Plus
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Skill Plus is GRIET's enhanced skill development initiative that goes beyond
            the standard curriculum to equip students with industry-ready competencies.
            The program is jointly powered by{' '}
            <span className="font-medium">
              TASK (Telangana Academy for Skill &amp; Knowledge)
            </span>{' '}
            and the{' '}
            <span className="font-medium">GRIET Skill Development Cell (SDC)</span>,
            offering students access to cutting-edge training in technology, design,
            and professional skills at subsidized rates.
          </p>
        </section>

        {/* Program Categories */}
        <section>
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: college.primary }}
          >
            Program Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programCategories.map(({ title, icon, programs }, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <h3
                    className="font-semibold text-lg"
                    style={{ color: college.primary }}
                  >
                    {title}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {programs.map((prog, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: college.primary }}
                      />
                      {prog}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section
          className="rounded-2xl p-8 text-white"
          style={{ backgroundColor: college.primary }}
        >
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <p className="text-white/90 mb-5">
            Students completing Skill Plus programs receive industry-recognized
            certificates from:
          </p>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, idx) => (
              <span
                key={idx}
                className="bg-white/20 border border-white/30 rounded-full px-4 py-1.5 text-sm font-medium"
              >
                {cert}
              </span>
            ))}
          </div>
        </section>

        {/* Delivery & Fee */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 space-y-2">
            <h3
              className="text-lg font-semibold"
              style={{ color: college.primary }}
            >
              Delivery Mode
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Training is conducted on <span className="font-medium">weekends and
              vacation periods</span> to avoid conflict with regular academics.
              Sessions are held in GRIET's on-campus labs with hands-on, project-based
              learning.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 space-y-2">
            <h3
              className="text-lg font-semibold"
              style={{ color: college.primary }}
            >
              Fee Structure
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Program fees are heavily{' '}
              <span className="font-medium">subsidized for GRIET students</span>{' '}
              through the TASK partnership, making industry-grade training accessible
              to all eligible students regardless of financial background.
            </p>
          </div>
        </section>

        {/* Registration */}
        <section className="bg-gray-50 border border-gray-100 rounded-2xl p-8 space-y-4">
          <h2
            className="text-2xl font-semibold"
            style={{ color: college.primary }}
          >
            Registration
          </h2>
          <p className="text-gray-700">
            Enroll through the SDC portal or contact us directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://grietsdc.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: college.primary }}
            >
              SDC Portal — grietsdc.in
            </a>
            <a
              href="mailto:skillplus@griet.ac.in"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border font-medium transition-colors hover:bg-gray-100"
              style={{ color: college.primary, borderColor: college.primary }}
            >
              skillplus@griet.ac.in
            </a>
          </div>
        </section>

      </div>
    </AcademicsLayout>
  );
};

export default SkillPlusPage;
