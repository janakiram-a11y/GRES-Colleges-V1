import AdministrationLayout from '../components/AdministrationLayout';
import college from '../theme';

function SectionHeading({ children }) {
  return (
    <h2
      className="font-display font-bold text-xl mb-5 pb-2 inline-block"
      style={{ color: college.primaryColor, borderBottom: `2px solid ${college.accentColor}` }}
    >
      {children}
    </h2>
  );
}

const deptsBOS = [
  'Computer Science and Engineering (CSE)',
  'CSE – Artificial Intelligence & Machine Learning (AIML)',
  'CSE – Data Science (DS)',
  'Computer Science and Business Systems (CSBS)',
  'Electronics and Communication Engineering (ECE)',
  'Electrical and Electronics Engineering (EEE)',
  'Mechanical Engineering (ME)',
  'Civil Engineering (CE)',
  'Information Technology (IT)',
  'Humanities and Sciences (H & S)',
];

const functions_ = [
  'Prescribe courses of study, scheme of instruction, and syllabi for each programme',
  'Suggest improvement of the course content and teaching techniques',
  'Recommend new programmes as per AICTE and JNTUH guidelines',
  'Review and update syllabi periodically in line with industry requirements',
  'Propose introduction of elective courses and open electives',
  'Evaluate and recommend textbooks and reference materials',
  'Suggest measures for improving the quality of teaching and assessment',
];

export default function AdminBOSPage() {
  return (
    <AdministrationLayout title="BOS">
      <div className="space-y-8">

        <div>
          <SectionHeading>Board of Studies (BOS)</SectionHeading>
          <p className="font-dm-sans text-base leading-relaxed text-gray-600 mb-2 max-w-2xl">
            The Board of Studies (BOS) is constituted for each department and is responsible for the design,
            review, and periodic update of curricula and syllabi for all programmes offered at GRIET.
          </p>
        </div>

        {/* Composition */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Composition
          </h3>
          <div className="bg-[#F6F1F2] rounded-lg border border-gray-200 p-5">
            <p className="font-dm-sans text-base leading-relaxed text-gray-700 mb-4">
              Each departmental BOS typically comprises:
            </p>
            <ul className="space-y-2">
              {[
                'Head of Department – Chairperson',
                'All Professors and Associate Professors of the Department',
                'Two external subject experts from other universities or industry',
                'One industry expert from the relevant domain',
                'One alumni representative',
                'One student representative (final-year)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-dm-sans text-[0.9375rem] text-gray-700">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.primaryColor }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Departments with BOS */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Departments with Board of Studies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {deptsBOS.map((dept, i) => (
              <div
                key={dept}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-gray-200"
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white font-hind font-bold text-[11px] flex-shrink-0"
                  style={{ backgroundColor: college.primaryColor }}
                >
                  {i + 1}
                </span>
                <span className="font-dm-sans text-[0.9375rem] text-gray-700">{dept}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Functions */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Functions of the BOS
          </h3>
          <ul className="space-y-2.5">
            {functions_.map((item) => (
              <li key={item} className="flex items-start gap-3 font-dm-sans text-base text-gray-700">
                <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                {item}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </AdministrationLayout>
  );
}
