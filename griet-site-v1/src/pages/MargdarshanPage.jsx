import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const ACTIVITIES = [
  {
    title: 'Faculty Development Programmes (FDPs)',
    desc: 'Conducted for faculty from mentee institutions on emerging topics such as AI/ML, IoT, Research Methodology, Data Analytics, and Curriculum Design. Expert faculty from GRIET and external institutions serve as resource persons.',
  },
  {
    title: 'NBA Mock Audits & Accreditation Guidance',
    desc: 'GRIET\'s experienced NBA-accredited departments conduct mock audits for mentee institutions, helping them assess their preparedness for NBA accreditation, identify gaps, and improve their SAR (Self-Assessment Report) quality.',
  },
  {
    title: 'Student Skill Enhancement Workshops',
    desc: 'Workshops on aptitude, communication skills, coding bootcamps, and personality development conducted at mentee institutions using GRIET\'s trained faculty and placement cell resources.',
  },
  {
    title: 'Research Mentoring & Publication Support',
    desc: 'Research faculty from GRIET guide junior faculty of mentee institutions in identifying research areas, co-authoring papers, filing patents, and applying for funded research projects (DST, AICTE, SERB).',
  },
  {
    title: 'Academic Process Benchmarking',
    desc: 'GRIET shares best practices in academic administration including examination reforms, outcome-based education (OBE), CO-PO attainment computation, and CAY/CAYm documentation with mentee colleges.',
  },
  {
    title: 'Infrastructure & Laboratory Sharing',
    desc: 'Mentee institutions can access GRIET\'s specialized laboratory facilities (SEM, HPC, IDEA Lab, etc.) for student project work and research activities under the Margdarshan umbrella.',
  },
];

const MENTEE_BENEFITS = [
  'Access to GRIET\'s experienced faculty as guest lecturers and workshop resource persons',
  'Guidance on NAAC/NBA accreditation processes and documentation',
  'Support in developing Outcome-Based Education (OBE) frameworks',
  'Exposure to GRIET\'s industry linkages and placement infrastructure',
  'Collaborative research opportunities with GRIET faculty',
  'Access to GRIET\'s library resources and digital subscriptions',
  'Training for their faculty in technical and pedagogical skills',
  'Administrative best practices in autonomous functioning',
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function MargdarshanPage() {
  return (
    <AcademicsLayout title="Margdarshan — AICTE Mentoring Scheme">

      <section className="mb-8">
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-hind font-bold text-[14px] mb-2" style={{ color: college.primaryColor }}>About the Margdarshan Scheme</p>
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed mb-3">
            <strong>Margdarshan</strong> is an AICTE initiative under which high-performing institutions (mentors) guide and support lesser-ranked institutions (mentees) in improving their academic quality, infrastructure, research output, and accreditation status.
          </p>
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
            GRIET was selected by AICTE as a <strong>Mentor Institution</strong> under the Margdarshan scheme, recognising its institutional excellence, NAAC A++ accreditation, and track record of academic leadership. GRIET mentors several engineering colleges in the Telangana and Andhra Pradesh region.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Mentoring Activities</SectionLabel>
        <div className="flex flex-col gap-4">
          {ACTIVITIES.map(({ title, desc }) => (
            <div key={title} className="p-5 rounded-xl border border-gray-200 bg-white">
              <p className="font-hind font-bold text-[13px] mb-1" style={{ color: college.primaryColor }}>{title}</p>
              <p className="font-dm-sans text-[12.5px] text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionLabel>Benefits for Mentee Institutions</SectionLabel>
        <div className="flex flex-col gap-2 p-5 rounded-xl bg-gray-50 border border-gray-200">
          {MENTEE_BENEFITS.map((b, i) => (
            <div key={i} className="flex items-start gap-2 font-dm-sans text-[12.5px] text-gray-700">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
              {b}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <SectionLabel>Contact</SectionLabel>
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="font-dm-sans text-[13px] text-gray-700 leading-relaxed">
            Institutions interested in being mentored by GRIET under the Margdarshan / AICTE scheme may contact the <strong>Dean of Academics</strong> or write to{' '}
            <a href="mailto:margdarshan@griet.ac.in" className="hover:underline" style={{ color: college.accentColor }}>margdarshan@griet.ac.in</a>.
            For official scheme details, visit{' '}
            <a href="https://www.aicte-india.org/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: college.accentColor }}>aicte-india.org</a>.
          </p>
        </div>
      </section>

    </AcademicsLayout>
  );
}
