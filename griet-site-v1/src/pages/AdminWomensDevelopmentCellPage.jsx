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

const objectives = [
  'Empower women students and staff through education, awareness, and leadership development',
  'Foster gender equality and a culture of respect and dignity on campus',
  'Organise workshops, seminars, and events on women\'s health, safety, and legal rights',
  'Provide a platform for women to voice their concerns and aspirations',
  'Encourage women students to pursue leadership roles in academics, research, and sports',
  'Support women entrepreneurs and researchers through mentoring and resources',
  'Collaborate with external organisations working on women\'s empowerment',
];

const activities = [
  { icon: '📚', title: 'Awareness Workshops', desc: 'Sessions on legal rights, health, safety, digital literacy, and financial independence.' },
  { icon: '🌸', title: 'Women\'s Day Celebrations', desc: 'Annual International Women\'s Day events celebrating achievements of women in STEM.' },
  { icon: '🎤', title: 'Guest Lectures', desc: 'Inspirational talks by women leaders from industry, academia, and public service.' },
  { icon: '💼', title: 'Career Guidance', desc: 'Special placement preparation and career guidance sessions for women students.' },
  { icon: '🏆', title: 'Leadership Development', desc: 'Programmes to build confidence, communication, and leadership skills among women.' },
  { icon: '🤝', title: 'Support Network', desc: 'A confidential support system for women facing any academic or personal challenges on campus.' },
];

export default function AdminWomensDevelopmentCellPage() {
  return (
    <AdministrationLayout title="Women's Development Cell">
      <div className="space-y-8">

        <div>
          <SectionHeading>Women's Development Cell</SectionHeading>
          <p className="font-dm-sans text-base leading-relaxed text-gray-600 mb-2 max-w-2xl">
            The Women's Development Cell (WDC) at GRIET is dedicated to the holistic empowerment of women
            students and staff through education, awareness, support, and leadership opportunities, ensuring a
            safe, inclusive, and inspiring campus environment.
          </p>
        </div>

        {/* Vision */}
        <div
          className="rounded-xl p-6 bg-white border-l-4"
          style={{ borderColor: college.primaryColor, boxShadow: '0 1px 4px rgba(91,16,39,0.06), 0 4px 16px -4px rgba(91,16,39,0.10)' }}
        >
          <span className="inline-block font-display font-bold text-[0.75rem] uppercase tracking-[0.12em] mb-3 px-3 py-1 rounded-full text-white" style={{ backgroundColor: college.primaryColor }}>
            Cell Vision
          </span>
          <p className="font-body text-[1.0625rem] leading-[1.75] text-gray-700 italic">
            "To create a campus where every woman thrives — academically, professionally, and personally —
            through equal opportunity, mutual respect, and unwavering support."
          </p>
        </div>

        {/* Objectives */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Objectives
          </h3>
          <ul className="space-y-2.5">
            {objectives.map((item) => (
              <li key={item} className="flex items-start gap-3 font-dm-sans text-base text-gray-700">
                <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Activities */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Activities &amp; Initiatives
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#F6F1F2] rounded-lg border border-gray-200 p-4">
                <div className="text-2xl mb-2">{icon}</div>
                <h4 className="font-hind font-semibold text-[0.9375rem] mb-1.5" style={{ color: college.primaryColor }}>{title}</h4>
                <p className="font-dm-sans text-[0.875rem] leading-relaxed text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Photo Gallery
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              'IMG_0001.JPG','IMG_0002.JPG','IMG_0003.JPG',
              'IMG_0004.JPG','IMG_0005.JPG','IMG_0006.JPG',
            ].map(f => (
              <div key={f} className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                <img src={`/gallery/womens/womens-day/${f}`} alt="Women's Day" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="mt-3 text-right">
            <a href="/events-gallery#womens" className="font-hind font-bold text-[0.875rem] hover:underline" style={{ color: college.accentColor }}>
              View all Women's Day photos →
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-[#F6F1F2] rounded-lg border border-gray-200 p-5">
          <h3 className="font-hind font-bold text-[15px] mb-2" style={{ color: college.primaryColor }}>
            How to Reach the WDC
          </h3>
          <p className="font-dm-sans text-[0.9375rem] text-gray-600">
            Women students and staff can approach the WDC coordinator directly, through their department
            faculty mentor, or via a written request dropped at the WDC office (Administrative Block).
            All communications are treated with complete confidentiality.
          </p>
        </section>

      </div>
    </AdministrationLayout>
  );
}
