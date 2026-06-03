import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

// ── Helpers ──────────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="block h-px w-8" style={{ backgroundColor: college.accentColor }} />
      <span
        className="text-[11px] font-semibold tracking-[0.18em] uppercase font-dm-sans"
        style={{ color: college.accentColor }}
      >
        {children}
      </span>
      <span className="block h-px w-8" style={{ backgroundColor: college.accentColor }} />
    </div>
  );
}

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

// ── Service Card ──────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: '📚',
    title: 'Academic Stress',
    desc: 'Guidance for exam pressure, time management, and academic performance concerns.',
  },
  {
    icon: '🧠',
    title: 'Anxiety & Depression',
    desc: 'Confidential support and evidence-based strategies for managing anxiety and depression.',
  },
  {
    icon: '🤝',
    title: 'Relationship Issues',
    desc: 'Counseling for interpersonal conflicts, family concerns, and social challenges.',
  },
  {
    icon: '🎯',
    title: 'Career Counseling',
    desc: 'Help with career planning, goal setting, and navigating professional decisions.',
  },
  {
    icon: '🆘',
    title: 'Personal Crises',
    desc: 'Immediate and short-term support for personal crises and distressing life events.',
  },
  {
    icon: '👥',
    title: 'Group Support Sessions',
    desc: 'Structured group therapy sessions fostering shared experiences and peer healing.',
  },
];

function ServiceCard({ icon, title, desc }) {
  return (
    <div
      className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow"
      style={{ borderTop: `3px solid ${college.accentColor}` }}
    >
      <div className="text-3xl">{icon}</div>
      <h3 className="font-hind font-bold text-base" style={{ color: college.primaryColor }}>
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Activities ────────────────────────────────────────────────────────────────

const ACTIVITIES = [
  { year: '2020', items: ['Mental Health Awareness Day', 'Movie Screenings on Mental Health'] },
  { year: '2021', items: ['Workshop on Stress Management', 'Guest Lectures by Psychologists'] },
  { year: '2022', items: ['Mindfulness Sessions', 'Mental Health Awareness Day', 'Workshop on Stress Management'] },
  { year: '2023', items: ['Guest Lectures by Psychologists', 'Movie Screenings on Mental Health', 'Mindfulness Sessions'] },
];

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function WellnessCenterPage() {
  return (
    <AcademicsLayout title="Resilience Wellness Center">
      <div className="max-w-5xl mx-auto py-10 space-y-14">

        {/* ── About ── */}
        <section id="about">
          <SectionLabel>GCC — GRIET Counseling Center</SectionLabel>
          <SectionHeading>About the Wellness Center</SectionHeading>
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              The <strong>Resilience Wellness Center</strong> at GRIET operates the{' '}
              <strong>Peer Support Counseling Programme (GCC)</strong> — a confidential, student-centred
              mental health initiative designed to nurture psychological well-being across the campus
              community.
            </p>
            <p>
              The center provides professional and peer-supported counseling to all enrolled students,
              facilitated by a qualified counseling psychologist stationed on campus. Services are
              strictly confidential and provided in a safe, non-judgmental environment.
            </p>
            <div
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium"
              style={{ background: `${college.primaryColor}12`, color: college.primaryColor }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Block 2, 5th Floor, GRIET Campus, Bachupally, Hyderabad
            </div>
          </div>
        </section>

        {/* ── Contact Card (prominent) ── */}
        <section id="contact">
          <SectionLabel>Get in Touch</SectionLabel>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            {/* Header strip */}
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #3a0b1a 100%)` }}
            >
              <div className="rounded-full bg-white bg-opacity-20 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-hind font-bold text-base leading-tight">Dr. Y. Butchi Raju</p>
                <p className="text-white text-opacity-80 text-xs tracking-wide uppercase">Counseling Psychologist</p>
              </div>
            </div>

            {/* Details grid */}
            <div className="bg-white px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <ContactDetail
                icon="🕑"
                label="Consultation Hours"
                value="Monday – Friday, 2:00 PM – 4:00 PM"
                sub="Also available by appointment"
              />
              <ContactDetail
                icon="📍"
                label="Location"
                value="Block 2, 5th Floor"
                sub="GRIET Campus, Bachupally"
              />
              <ContactDetail
                icon="✉️"
                label="Appointment Email"
                value={
                  <a
                    href="mailto:wellness@griet.ac.in"
                    className="underline underline-offset-2"
                    style={{ color: college.accentColor }}
                  >
                    wellness@griet.ac.in
                  </a>
                }
                sub="Response within 1 working day"
              />
              <ContactDetail
                icon="🔗"
                label="Online Appointment"
                value={
                  <a
                    href="https://www.griet.ac.in/gcc.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                    style={{ color: college.accentColor }}
                  >
                    griet.ac.in/gcc.php
                  </a>
                }
                sub="Fill the appointment request form"
              />
            </div>
          </div>
        </section>

        {/* ── Services Offered ── */}
        <section id="services">
          <SectionLabel>What We Offer</SectionLabel>
          <SectionHeading>Services Offered</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </section>

        {/* ── Peer Support Programme ── */}
        <section id="peer-support">
          <SectionLabel>Student-Led Initiative</SectionLabel>
          <SectionHeading>Peer Support Program</SectionHeading>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm space-y-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              The GCC Peer Support Programme trains selected student volunteers from each department
              to provide compassionate, confidential peer-to-peer support to their fellow students.
              Peer counselors act as a first point of contact, helping students navigate stress and
              directing them to professional resources when needed.
            </p>
            <ul className="space-y-3">
              {[
                'Trained peer counselors recruited from every academic department',
                'Annual training workshops covering listening skills, empathy, and referral protocols',
                'Strictly confidential peer-to-peer support sessions on campus',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                  <span
                    className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                    style={{ backgroundColor: college.accentColor }}
                  >
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Activities by Year ── */}
        <section id="activities">
          <SectionLabel>Events & Outreach</SectionLabel>
          <SectionHeading>Activities (2020–2023)</SectionHeading>
          <div className="relative border-l-2 pl-6 space-y-8" style={{ borderColor: `${college.primaryColor}30` }}>
            {ACTIVITIES.map(({ year, items }) => (
              <div key={year} className="relative">
                <span
                  className="absolute -left-[29px] top-0.5 h-4 w-4 rounded-full border-2 border-white"
                  style={{ backgroundColor: college.accentColor }}
                />
                <p className="font-hind font-bold text-base mb-2" style={{ color: college.primaryColor }}>
                  {year}
                </p>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-center gap-2">
                      <span style={{ color: college.accentColor }}>›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Crisis Support ── */}
        <section id="crisis-support">
          <div
            className="rounded-xl p-5 border flex gap-4 items-start"
            style={{ borderColor: `${college.accentColor}40`, background: `${college.accentColor}08` }}
          >
            <div
              className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-white text-xl"
              style={{ backgroundColor: college.accentColor }}
            >
              ⚠
            </div>
            <div>
              <p className="font-hind font-bold text-base mb-1" style={{ color: college.primaryColor }}>
                Crisis Support
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                If you need immediate support outside of counseling hours, please contact the{' '}
                <strong>Office of the Dean of Student Affairs</strong> or call the college helpline.
                Do not wait — help is available.
              </p>
            </div>
          </div>
        </section>

        {/* ── Appointment Form Link ── */}
        <section id="appointment" className="text-center">
          <SectionLabel>Book a Session</SectionLabel>
          <p className="text-gray-600 text-sm mb-5 max-w-md mx-auto">
            Fill out the online appointment request form to schedule a confidential counseling session
            with Dr. Y. Butchi Raju.
          </p>
          <a
            href="https://www.griet.ac.in/gcc.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg px-8 py-3 text-white font-hind font-semibold text-sm shadow-md hover:opacity-90 transition-opacity"
            style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, ${college.accentColor} 100%)` }}
          >
            Request an Appointment →
          </a>
        </section>

        {/* ── End Now Foundation Partnership ── */}
        <section id="partnership">
          <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div
              className="flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center text-white text-xl font-bold"
              style={{ backgroundColor: college.primaryColor }}
            >
              EN
            </div>
            <div>
              <p className="font-hind font-bold text-base mb-1" style={{ color: college.primaryColor }}>
                End Now Foundation Partnership
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                GRIET's Resilience Wellness Center proudly collaborates with the{' '}
                <strong>End Now Foundation</strong> — a mental health advocacy organization — to
                bring awareness campaigns, workshops, and training resources to our campus community,
                reinforcing our commitment to student well-being.
              </p>
            </div>
          </div>
        </section>

      </div>
    </AcademicsLayout>
  );
}

// ── Contact Detail sub-component ──────────────────────────────────────────────

function ContactDetail({ icon, label, value, sub }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-0.5">{label}</p>
        <p className="text-sm font-medium text-gray-800">{value}</p>
        {sub && <p className="text-xs text-gray-500 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}
