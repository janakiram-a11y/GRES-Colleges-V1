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

const committees = [
  {
    name: 'Anti-Ragging Committee',
    desc: 'Ensures a ragging-free campus environment through awareness programmes, complaint redressal, and disciplinary action as per UGC norms.',
  },
  {
    name: 'Internal Complaints Committee (ICC)',
    desc: 'Handles complaints related to sexual harassment at the workplace, ensuring a safe and respectful environment for all.',
  },
  {
    name: 'Student Grievance Redressal Committee',
    desc: 'Addresses academic and non-academic grievances of students through a structured, confidential process.',
  },
  {
    name: 'Examination Malpractice Committee',
    desc: 'Investigates and takes disciplinary action in cases of malpractice during examinations.',
  },
  {
    name: 'Scholarship Committee',
    desc: 'Identifies eligible students and facilitates disbursement of government and institutional scholarships.',
  },
  {
    name: 'Alumni Committee',
    desc: 'Engages with GRIET alumni for knowledge sharing, mentoring, funding, and institutional development.',
  },
  {
    name: 'Sports Committee',
    desc: 'Organises intra- and inter-collegiate sports events and manages sports infrastructure and student participation.',
  },
  {
    name: 'Cultural Activities Committee',
    desc: 'Plans and executes cultural festivals, annual day celebrations, and student talent events.',
  },
  {
    name: 'NSS Committee',
    desc: 'Coordinates National Service Scheme activities including community service camps, awareness programmes, and social initiatives.',
  },
  {
    name: 'Library Committee',
    desc: 'Advises on library acquisition policies, digital resources, and ensures library services meet academic needs.',
  },
  {
    name: 'Safety & Security Committee',
    desc: 'Oversees campus safety measures, emergency preparedness, and security protocols.',
  },
  {
    name: 'Green Campus Committee',
    desc: 'Promotes environmental sustainability through green initiatives, waste management, and energy conservation.',
  },
];

export default function AdminCoordinatorsPage() {
  return (
    <AdministrationLayout title="Coordinators & Committees">
      <div className="space-y-8">

        <div>
          <SectionHeading>Coordinators &amp; Committees</SectionHeading>
          <p className="font-dm-sans text-base leading-relaxed text-gray-600 mb-2 max-w-2xl">
            GRIET operates through a network of specialised committees and coordinators responsible for diverse
            academic, administrative, welfare, and co-curricular functions across the institution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {committees.map(({ name, desc }) => (
            <div
              key={name}
              className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: college.primaryColor }}
                />
                <div>
                  <h3 className="font-hind font-semibold text-base leading-snug mb-1.5" style={{ color: college.primaryColor }}>
                    {name}
                  </h3>
                  <p className="font-dm-sans text-[0.875rem] leading-relaxed text-gray-600">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-[#F6F1F2] rounded-lg border border-gray-200 p-5">
          <p className="font-dm-sans text-[0.9375rem] text-gray-600">
            Each committee is constituted at the beginning of every academic year and is chaired by a senior
            faculty member. Committee rosters and minutes are maintained by the Dean of Academic Affairs and
            are available for inspection by NAAC/NBA/statutory bodies.
          </p>
        </section>

      </div>
    </AdministrationLayout>
  );
}
