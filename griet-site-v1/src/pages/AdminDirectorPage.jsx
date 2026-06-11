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

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-2.5 border-b border-gray-100">
      <span className="font-hind font-semibold text-[0.875rem] uppercase tracking-wide w-40 flex-shrink-0" style={{ color: college.accentColor }}>
        {label}
      </span>
      <span className="font-dm-sans text-base text-gray-700">{value}</span>
    </div>
  );
}


const achievements = [
  'Served in IAF Maintenance Branch covering operations, overhaul, and training at multiple levels',
  'Served as Instructor at Air Force Technical College, Bangalore',
  'Led an international training mission to Botswana in support of their Defence Force',
  'Expertise in Thermal Engineering, Gas Turbine Combustion Chambers, simulation, and engineering education',
  "Instrumental in expanding GRIET's research output and national rankings during tenure as Principal",
  'Guided the institution through NAAC A++ accreditation and NBA accreditation for multiple programmes',
];

export default function AdminDirectorPage() {
  return (
    <AdministrationLayout title="Director">
      <div className="space-y-8">

        <SectionHeading>Director</SectionHeading>

        {/* Profile card */}
        <div className="bg-white rounded-lg border border-black/10 shadow-sm overflow-hidden">
          <div className="h-2 w-full" style={{ backgroundColor: college.primaryColor }} />
          <div className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src="https://www.griet.ac.in/images/jandhyalanmurthy.jpg"
                alt="Dr. Jandhyala N Murthy — Director, GRIET"
                className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-2"
                style={{ borderColor: college.primaryColor }}
              />
              <div>
                <h3 className="font-hind font-bold text-[22px] leading-snug" style={{ color: college.primaryColor }}>
                  Dr. Jandhyala N Murthy
                </h3>
                <p className="font-dm-sans text-base font-semibold mt-1" style={{ color: college.accentColor }}>
                  Director, GRIET
                </p>
                <p className="font-dm-sans text-[0.9375rem] text-gray-500 mt-0.5">
                  B.Tech (IIT Madras) &nbsp;|&nbsp; Ph.D. (Cranfield, UK) &nbsp;|&nbsp; Wing Commander (Retd.), IAF
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-100 pt-6 space-y-0">
              <InfoRow label="Current Role" value="Director, Gokaraju Rangaraju Institute of Engineering & Technology" />
              <InfoRow label="Specialisation" value="Thermal Engineering, Gas Turbine Combustion Chambers, Simulation" />
              <InfoRow label="Education" value="B.Tech – Mechanical Engineering, IIT Madras; Ph.D. – Thermal Power Engineering, Cranfield Institute of Technology, UK" />
              <InfoRow label="Military Career" value="Wing Commander, Indian Air Force (Maintenance Branch) – 25+ years of distinguished service" />
              <InfoRow label="Director Since" value="January 31, 2018" />
            </div>
          </div>
        </div>


        {/* Key Achievements */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Key Achievements
          </h3>
          <ul className="space-y-2.5">
            {achievements.map((item) => (
              <li key={item} className="flex items-start gap-3 font-dm-sans text-base text-gray-700">
                <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: college.primaryColor }} />
                {item}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </AdministrationLayout>
  );
}
