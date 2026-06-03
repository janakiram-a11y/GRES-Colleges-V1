import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const CEREMONIES = [
  { number: '23rd', year: '2025', theme: 'Reflections: Class of 2025', highlight: '1200+ graduates conferred degrees', link: 'https://www.griet.ac.in/gradday.php' },
  { number: '22nd', year: '2024', theme: 'Shaping Tomorrow', highlight: '1100+ graduates', link: 'https://www.griet.ac.in/gradday.php' },
  { number: '21st', year: '2023', theme: 'Excellence in Engineering', highlight: '1050+ graduates', link: 'https://www.griet.ac.in/gradday.php' },
  { number: '20th', year: '2022', theme: 'Resilience & Growth', highlight: '1000+ graduates', link: 'https://www.griet.ac.in/gradday.php' },
  { number: '19th', year: '2021', theme: 'New Horizons', highlight: '950+ graduates', link: 'https://www.griet.ac.in/gradday.php' },
];

function CeremonyCard({ ceremony }) {
  return (
    <div
      className="rounded-xl border p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
      style={{ borderColor: 'rgba(91,16,39,0.15)', background: '#FFFAF7' }}
    >
      <div className="flex items-center gap-3">
        <span
          className="inline-flex items-center justify-center rounded-full font-hind font-bold text-sm px-3 py-1"
          style={{ background: college.primaryColor, color: '#fff' }}
        >
          {ceremony.number}
        </span>
        <span
          className="font-hind font-semibold text-base"
          style={{ color: college.primaryColor }}
        >
          Graduation Ceremony
        </span>
        <span
          className="ml-auto font-dm-sans text-sm font-medium"
          style={{ color: college.accentColor }}
        >
          {ceremony.year}
        </span>
      </div>
      <p className="font-dm-sans text-sm text-gray-600 italic">{ceremony.theme}</p>
      <p className="font-dm-sans text-sm font-semibold" style={{ color: college.primaryColor }}>
        {ceremony.highlight}
      </p>
      <a
        href={ceremony.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 font-dm-sans text-sm font-medium underline underline-offset-2 mt-auto"
        style={{ color: college.accentColor }}
      >
        View Report &rarr;
      </a>
    </div>
  );
}

export default function GraduationDayPage() {
  return (
    <AcademicsLayout title="Graduation Day">
      <div className="max-w-5xl mx-auto py-10 space-y-12">

        {/* About */}
        <section>
          <h2 className="font-hind font-bold text-xl md:text-2xl mb-4" style={{ color: college.primaryColor }}>
            About the Convocation
          </h2>
          <p className="font-dm-sans text-gray-700 leading-relaxed">
            Gokaraju Rangaraju Institute of Engineering &amp; Technology (GRIET) holds an annual Graduation Ceremony
            — the Convocation — to celebrate the achievements of its graduating students. The ceremony brings together
            graduates, faculty, families, and distinguished guests in a proud academic tradition.
          </p>
          <p className="font-dm-sans text-gray-700 leading-relaxed mt-3">
            The <strong>23rd Graduation Ceremony</strong> was held in <strong>2025</strong>, marking another milestone
            year for the institution. Chief guests at each ceremony are eminent leaders from industry and academia who
            inspire graduates as they embark on their professional journeys.
          </p>
        </section>

        {/* Past Ceremonies */}
        <section>
          <h2 className="font-hind font-bold text-xl md:text-2xl mb-6" style={{ color: college.primaryColor }}>
            Past Ceremonies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CEREMONIES.map((c) => (
              <CeremonyCard key={c.number} ceremony={c} />
            ))}
          </div>
        </section>

        {/* Gold Medals */}
        <section
          className="rounded-xl p-6 border"
          style={{ borderColor: 'rgba(91,16,39,0.15)', background: 'linear-gradient(135deg, #FFF8F2 0%, #FAF0E4 100%)' }}
        >
          <h2 className="font-hind font-bold text-xl md:text-2xl mb-3" style={{ color: college.primaryColor }}>
            Gold Medal Recognition
          </h2>
          <p className="font-dm-sans text-gray-700 leading-relaxed">
            Academic excellence is recognized at the Convocation through the conferral of Gold Medals. Departmental
            gold medals are awarded to the top-ranking student in each branch of engineering, while university gold
            medals are conferred by Jawaharlal Nehru Technological University Hyderabad (JNTUH) for outstanding
            academic performance across the university.
          </p>
          <a
            href="/examinations/gold-medals"
            className="inline-flex items-center gap-1 font-dm-sans text-sm font-semibold mt-4 underline underline-offset-2"
            style={{ color: college.accentColor }}
          >
            View Complete Gold Medal Winners List &rarr;
          </a>
        </section>

        {/* Reflections: Class of 2025 */}
        <section
          className="rounded-xl p-6 border"
          style={{ borderColor: 'rgba(91,16,39,0.15)', background: '#FFFAF7' }}
        >
          <h2 className="font-hind font-bold text-xl md:text-2xl mb-3" style={{ color: college.primaryColor }}>
            Reflections: Class of 2025
          </h2>
          <p className="font-dm-sans text-gray-700 leading-relaxed">
            The commemorative publication <em>Reflections: Class of 2025</em> captures the journey, achievements,
            and memories of the graduating class. Download the PDF to relive the highlights of an extraordinary year.
          </p>
          <a
            href="https://www.griet.ac.in/2025/Class of 2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-lg font-dm-sans text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
            style={{ background: college.primaryColor }}
          >
            Download PDF &darr;
          </a>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="font-hind font-bold text-xl md:text-2xl mb-4" style={{ color: college.primaryColor }}>
            Eligibility to Attend
          </h2>
          <ul className="list-disc list-inside font-dm-sans text-gray-700 space-y-2">
            <li>Students who have fulfilled all academic requirements for their respective programmes are eligible to attend the Graduation Ceremony.</li>
            <li>Attendees receive their degree certificates at the ceremony.</li>
            <li>Official transcripts are not distributed at the ceremony and must be obtained separately through the Examinations office.</li>
          </ul>
        </section>

        {/* Documents Process */}
        <section
          className="rounded-xl p-6 border"
          style={{ borderColor: 'rgba(91,16,39,0.15)', background: '#FFFAF7' }}
        >
          <h2 className="font-hind font-bold text-xl md:text-2xl mb-3" style={{ color: college.primaryColor }}>
            Obtaining Academic Documents
          </h2>
          <p className="font-dm-sans text-gray-700 leading-relaxed">
            Graduates requiring transcripts, certificates, or other official academic documents can follow the process
            outlined by the Examinations section. Detailed instructions, required forms, and processing timelines are
            available on the dedicated page.
          </p>
          <a
            href="/examinations/transcripts-certificates"
            className="inline-flex items-center gap-1 font-dm-sans text-sm font-semibold mt-4 underline underline-offset-2"
            style={{ color: college.accentColor }}
          >
            Transcripts &amp; Certificates Process &rarr;
          </a>
        </section>

      </div>
    </AcademicsLayout>
  );
}
