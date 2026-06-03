import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const practices = [
  {
    number: 'Practice 1',
    title: 'Finishing School Programme',
    objectives: [
      'Identify and support slow learners within the student cohort.',
      'Bridge academic gaps through structured remedial teaching across all departments.',
    ],
    context:
      'Engineering colleges face the persistent challenge of students arriving with varied levels of entry-level preparation. Differences in school board standards, medium of instruction, and foundational subject exposure create a wide disparity in readiness. Without targeted intervention, weaker students risk falling further behind, leading to poor academic performance and dropouts.',
    practice:
      'Zero-hour classes are conducted daily (3–4 PM or 9–10 AM) for students identified as slow learners through internal assessment data. Moodle-based assignments reinforce concepts covered in remedial sessions. A structured mentoring system pairs students with faculty representatives drawn from all nine departments of the institute. The programme tracks each student individually, ensuring personalised academic support throughout the semester.',
    impact: [
      'Measurable improvement in overall pass percentage across departments.',
      'Significant reduction in academic dropouts and re-admissions.',
      'Improved CGPA distribution, particularly in the lower quartile.',
    ],
    evidence:
      'Year-wise remedial teaching reports from 2014–15 through 2023–24, maintained by individual department coordinators and compiled by the Academic Cell.',
  },
  {
    number: 'Practice 2',
    title: 'Resilience Wellness Center — Peer Counseling',
    objectives: [
      'Provide confidential and accessible mental health support to all enrolled students.',
      'Reduce academic-stress-related issues including anxiety, withdrawal, and self-harm risk.',
    ],
    context:
      'Engineering students routinely face high academic pressure compounded by homesickness, relationship challenges, financial stress, and career uncertainty. Left unaddressed, these issues manifest as declining attendance, poor performance, or more serious wellbeing crises. Institutional mental health infrastructure is essential for early identification and intervention.',
    practice:
      'The Resilience Wellness Center is staffed by a professional psychologist, Dr. Y. Butchi Raju, who offers one-on-one counseling sessions on campus. A cohort of student peer counselors is trained annually to identify distress signals among their peers and refer cases appropriately. GRIET maintains a formal partnership with the End Now Foundation to extend support resources and awareness programming. Awareness campaigns, workshops, and sensitisation drives are conducted each semester.',
    impact: [
      'Over 200 students counseled annually through formal and peer-led sessions.',
      'Improved student retention, particularly among first-year students.',
      'Reduced stigma around mental health through campus-wide awareness campaigns.',
    ],
    evidence:
      'Activity reports and session logs for 2020, 2021, 2022, and 2023, maintained by the Wellness Center and the End Now Foundation partnership coordinator.',
  },
  {
    number: 'Practice 3',
    title: 'Comprehensive Anti-Ragging Framework',
    objectives: [
      'Enforce a zero-tolerance policy against all forms of ragging on campus.',
      'Create a safe, respectful, and inclusive environment for first-year and junior students.',
    ],
    context:
      'Anti-ragging measures are a mandatory regulatory requirement under AICTE and UGC guidelines. Beyond compliance, ragging poses a direct threat to the physical and psychological wellbeing of incoming students. Effective prevention requires a multi-layered institutional framework combining policy, surveillance, community engagement, and external coordination.',
    practice:
      'An Anti-Ragging Committee, constituted in accordance with AICTE norms, oversees all prevention and response activities. The institute maintains a direct liaison with Inspector J. Upender Rao for immediate law enforcement coordination when required. An online reporting mechanism allows students to submit complaints confidentially. Regular awareness programmes, orientation sessions for freshers, and signed affidavits from students and parents reinforce the institute\'s commitment. Hostel wardens and senior students are included in the monitoring network.',
    impact: [
      'Zero ragging incidents formally reported since the framework was implemented.',
      'High first-year student satisfaction scores on campus safety in feedback surveys.',
      'Full regulatory compliance with AICTE and UGC anti-ragging mandates.',
    ],
    evidence:
      'AICTE compliance reports, anti-ragging committee meeting minutes, and online portal complaint records, reviewed annually by the Principal\'s office.',
  },
  {
    number: 'Practice 4',
    title: 'Student Skill Development Cell (SDC)',
    objectives: [
      'Bridge the gap between the academic curriculum and industry skill requirements.',
      'Enable students to earn recognised certifications alongside their engineering degrees.',
    ],
    context:
      'Employers increasingly demand industry certifications and demonstrable technical skills in addition to academic degrees. Students graduating without recognised certifications face a competitive disadvantage in placements. On-campus access to authorised certification programmes removes logistical and financial barriers that prevent students from upskilling independently.',
    practice:
      'GRIET operates a TASK (Telangana Academy for Skill and Knowledge) authorised Skill Development Centre on campus. The SDC maintains active partnerships with Oracle, IBM, Google, Microsoft, Autodesk, and SAP to deliver authorised certification programmes. Students can enrol, train, and appear for certification examinations without leaving campus. The portal grietsdc.in provides a centralised interface for programme registration, schedules, and results.',
    impact: [
      'Over 500 students certified annually across partner programmes.',
      'Improved placement statistics, with certified students demonstrating higher offer rates.',
      'Strengthened industry relationships that feed directly into recruitment pipelines.',
    ],
    evidence:
      'Placement data correlated with SDC certification records, grietsdc.in portal activity logs, and annual skill development reports submitted to TASK.',
  },
];

const sectionLabel = {
  objectives: 'Objectives',
  context: 'The Context',
  practice: 'The Practice',
  impact: 'Impact',
  evidence: 'Evidence of Success',
};

function PracticeCard({ practice, index }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className="rounded-2xl overflow-hidden mb-10 shadow-md border"
      style={{ borderColor: 'rgba(91,16,39,0.12)' }}
    >
      {/* Card header */}
      <div
        className="flex items-center gap-4 px-7 py-5"
        style={{ background: isEven ? college.primaryColor : '#1B3A4B' }}
      >
        <span
          className="font-hind font-bold text-xs tracking-widest uppercase px-3 py-1 rounded-full"
          style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
        >
          {practice.number}
        </span>
        <h2 className="font-hind font-bold text-lg md:text-xl text-white leading-snug">
          {practice.title}
        </h2>
      </div>

      {/* Card body */}
      <div className="bg-white px-7 py-7 grid gap-6">
        {/* Objectives */}
        <Section label={sectionLabel.objectives} accent={college.accentColor}>
          <ul className="list-disc list-inside space-y-1">
            {practice.objectives.map((obj, i) => (
              <li key={i} className="font-dm-sans text-sm text-gray-700 leading-relaxed">
                {obj}
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* Context */}
        <Section label={sectionLabel.context} accent={college.primaryColor}>
          <p className="font-dm-sans text-sm text-gray-700 leading-relaxed">{practice.context}</p>
        </Section>

        <Divider />

        {/* Practice */}
        <Section label={sectionLabel.practice} accent={college.accentColor}>
          <p className="font-dm-sans text-sm text-gray-700 leading-relaxed">{practice.practice}</p>
        </Section>

        <Divider />

        {/* Impact */}
        <Section label={sectionLabel.impact} accent={college.primaryColor}>
          <ul className="list-disc list-inside space-y-1">
            {practice.impact.map((item, i) => (
              <li key={i} className="font-dm-sans text-sm text-gray-700 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* Evidence */}
        <Section label={sectionLabel.evidence} accent={college.accentColor}>
          <p className="font-dm-sans text-sm text-gray-700 leading-relaxed italic">
            {practice.evidence}
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ label, accent, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span
          className="block w-1 h-5 rounded-full flex-shrink-0"
          style={{ backgroundColor: accent }}
        />
        <h3 className="font-hind font-semibold text-sm uppercase tracking-widest" style={{ color: accent }}>
          {label}
        </h3>
      </div>
      {children}
    </div>
  );
}

function Divider() {
  return (
    <hr style={{ borderColor: 'rgba(91,16,39,0.08)' }} />
  );
}

export default function BestPracticesPage() {
  return (
    <AcademicsLayout title="Institute Best Practices">
      <div className="max-w-4xl mx-auto py-10">
        {/* Intro */}
        <p className="font-dm-sans text-sm text-gray-600 leading-relaxed mb-10 text-center">
          In accordance with NAAC requirements, GRIET has documented and implemented four best
          practices that reflect its commitment to holistic student development, academic excellence,
          and campus wellbeing. These practices are reviewed and refined annually based on outcome
          data and stakeholder feedback.
        </p>

        {/* Practice cards */}
        {practices.map((practice, index) => (
          <PracticeCard key={practice.number} practice={practice} index={index} />
        ))}
      </div>
    </AcademicsLayout>
  );
}
