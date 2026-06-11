import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const MODULES = [
  {
    title: 'Professional Ethics & Values',
    desc: 'Foundations of ethical conduct in professional settings, value-based decision making, and integrity in leadership roles.',
  },
  {
    title: 'Communication Skills for Leaders',
    desc: 'Effective verbal, written, and interpersonal communication strategies essential for inspiring and guiding teams.',
  },
  {
    title: 'Team Building & Collaboration',
    desc: 'Principles and techniques for forming high-performance teams, fostering trust, and leveraging collective strengths.',
  },
  {
    title: 'Strategic Thinking & Decision Making',
    desc: 'Frameworks for analytical and creative thinking, structured problem-solving, and sound decision making under uncertainty.',
  },
  {
    title: 'Emotional Intelligence at Workplace',
    desc: 'Understanding and managing emotions, empathy, self-awareness, and social skills that differentiate effective leaders.',
  },
  {
    title: 'Conflict Resolution Strategies',
    desc: 'Approaches to identifying, managing, and resolving interpersonal and organisational conflicts constructively.',
  },
  {
    title: 'Project Management Fundamentals',
    desc: 'Core concepts of planning, executing, monitoring, and closing projects on time and within scope and budget.',
  },
  {
    title: 'Entrepreneurial Mindset',
    desc: 'Cultivating initiative, risk-taking ability, innovation orientation, and opportunity recognition in future leaders.',
  },
  {
    title: 'Time Management & Productivity',
    desc: 'Tools and habits for prioritisation, goal setting, delegation, and sustaining high personal and team productivity.',
  },
  {
    title: 'Public Speaking & Presentation Skills',
    desc: 'Building confidence and competence in addressing audiences, structuring speeches, and delivering compelling presentations.',
  },
  {
    title: 'Change Management',
    desc: 'Understanding organisational change dynamics, leading transitions, overcoming resistance, and embedding new practices.',
  },
  {
    title: 'Corporate Social Responsibility',
    desc: 'Concepts of sustainable business, stakeholder responsibility, community engagement, and ethical corporate governance.',
  },
];

const FACULTY = [
  { name: 'Dr. K V S Raju', designation: 'Professor' },
  { name: 'Dr. Jagannadha Swamy', designation: 'Professor' },
];

const AUDIENCE = [
  'B.Tech students (all branches and years)',
  'M.Tech students',
  'MBA students',
  'Faculty members',
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function CLSPage() {
  return (
    <AcademicsLayout title="Centre for Leadership Studies">

      {/* About CLS */}
      <section className="mb-8">
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed mb-3">
            The <strong>Centre for Leadership Studies (CLS)</strong> at GRIET was established with the mission of grooming well-rounded leaders who are equipped with strong ethical values, effective communication, and sound management skills. The centre recognises that technical excellence alone is insufficient — tomorrow's engineers and managers must also be capable, principled leaders.
          </p>
          <p className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed mb-3">
            The CLS resource compendium has been compiled by <strong>Dr. K V S Raju</strong> and <strong>Dr. Jagannadha Swamy</strong>, both Professors at GRIET, drawing on their extensive experience in academia and industry. The collection comprises <strong>36 resource modules</strong> spanning leadership, ethics, communication, and management — designed to complement the technical curriculum and develop holistic professionals.
          </p>
          <p className="font-dm-sans text-[0.9375rem] text-gray-700 leading-relaxed">
            These modules are made available to all students and faculty as self-study resources and are used in workshops, seminars, and co-curricular programmes organised by the centre.
          </p>
        </div>
      </section>

      {/* Resource Modules */}
      <section className="mb-10">
        <SectionLabel>Resource Modules (Representative Topics)</SectionLabel>
        <p className="font-dm-sans text-[12.5px] text-gray-500 mb-4">
          Showing 12 of 36 modules. All 36 PDF resources are available for download (see Downloads section below).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MODULES.map(({ title, desc }) => (
            <div key={title} className="p-4 rounded-xl border border-gray-200 bg-white">
              <p className="font-hind font-bold text-[0.9375rem] mb-1" style={{ color: college.primaryColor }}>{title}</p>
              <p className="font-dm-sans text-[0.875rem] text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Downloads */}
      <section className="mb-10">
        <SectionLabel>Downloads</SectionLabel>
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-hind font-bold text-[0.9375rem] mb-1" style={{ color: college.primaryColor }}>36 PDF Leadership Resources</p>
            <p className="font-dm-sans text-[12.5px] text-gray-600 leading-relaxed">
              All 36 CLS resource modules are available as downloadable PDFs on the official GRIET CLS page. Topics cover leadership, ethics, communication, management, entrepreneurship, and more.
            </p>
          </div>
          <a
            href="https://www.griet.ac.in/cls.php"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm-sans text-[12.5px] font-semibold px-4 py-2 rounded-lg border whitespace-nowrap hover:opacity-90 transition-opacity self-start sm:self-center"
            style={{ color: college.accentColor, borderColor: college.accentColor }}
          >
            Access All 36 Modules →
          </a>
        </div>
      </section>

      {/* Faculty Compilers */}
      <section className="mb-10">
        <SectionLabel>Faculty Compilers</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FACULTY.map(({ name, designation }) => (
            <div key={name} className="p-4 rounded-xl border border-gray-200 bg-white flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-hind font-bold text-white text-[15px] flex-shrink-0"
                style={{ backgroundColor: college.primaryColor }}
              >
                {name.split(' ').find(w => w.startsWith('Dr')) ? name.split(' ')[2]?.[0] ?? name[0] : name[0]}
              </div>
              <div>
                <p className="font-hind font-bold text-[0.9375rem]" style={{ color: college.primaryColor }}>{name}</p>
                <p className="font-dm-sans text-[0.875rem] text-gray-500">{designation}, GRIET</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Access */}
      <section className="mb-10">
        <SectionLabel>How to Access</SectionLabel>
        <div className="flex flex-col gap-3 p-5 rounded-xl bg-gray-50 border border-gray-200">
          {[
            { loc: 'CLS Library', detail: 'Physical copies of all 36 modules are available at the dedicated CLS library within the campus.' },
            { loc: 'GRIET Main Library', detail: 'The central library maintains a full set of CLS resource modules for reference and borrowing.' },
            { loc: 'Faculty Coordinators', detail: 'Students may contact the CLS faculty coordinators — Dr. K V S Raju or Dr. Jagannadha Swamy — to obtain specific modules or guidance on using the resources.' },
            { loc: 'Online (GRIET Website)', detail: 'All 36 PDF modules are freely accessible on the GRIET CLS portal at griet.ac.in/cls.php.' },
          ].map(({ loc, detail }) => (
            <div key={loc} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
              <div>
                <span className="font-hind font-bold text-[12.5px]" style={{ color: college.primaryColor }}>{loc}: </span>
                <span className="font-dm-sans text-[12.5px] text-gray-700">{detail}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Target Audience */}
      <section className="mb-6">
        <SectionLabel>Target Audience</SectionLabel>
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-dm-sans text-[12.5px] text-gray-600 mb-3">
            The CLS resources are designed for the entire GRIET academic community:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {AUDIENCE.map((item) => (
              <div key={item} className="flex items-center gap-2 font-dm-sans text-[12.5px] text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.primaryColor }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

    </AcademicsLayout>
  );
}
