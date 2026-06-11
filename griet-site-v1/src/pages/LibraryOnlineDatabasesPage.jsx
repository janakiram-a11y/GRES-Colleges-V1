import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const DATABASES = [
  {
    name: 'NPTEL',
    fullName: 'National Programme on Technology Enhanced Learning',
    desc: 'Initiative by seven IITs and IISc offering video lectures in engineering and science. Lectures downloadable in MP4, FLV, or 3GP; also available on YouTube.',
    href: 'http://nptel.iitm.ac.in',
    ytHref: 'http://www.youtube.com/iit',
  },
  {
    name: 'McGraw-Hill ACCESS Engineering',
    fullName: 'McGraw-Hill ACCESS Engineering',
    desc: 'Over 450 engineering reference texts available for online reading across all major engineering disciplines.',
    href: 'http://accessengineeringlibrary.com/',
  },
  {
    name: 'Kindle Unlimited',
    fullName: 'Amazon Kindle Unlimited',
    desc: 'GRIET maintains a subscription with Kindle devices available on campus. Books accessible within and outside campus. Covers History, Geography, Literature, Science, Technology, Medicine, Health, and related subjects.',
    href: null,
  },
  {
    name: 'Local Database',
    fullName: 'GRIET Local Database',
    desc: 'Institutional local database accessible within the campus network.',
    href: 'http://172.16.22.66/localg',
  },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>
        {children}
      </h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function LibraryOnlineDatabasesPage() {
  return (
    <AcademicsLayout title="Library — Online Databases">

      <SectionLabel>Available Online Databases</SectionLabel>

      <div className="flex flex-col gap-5">
        {DATABASES.map(({ name, fullName, desc, href, ytHref }) => (
          <div key={name} className="p-5 rounded-xl border border-gray-200 bg-white">
            <p className="font-hind font-bold text-[14.5px] mb-0.5" style={{ color: college.primaryColor }}>{name}</p>
            {name !== fullName && (
              <p className="font-dm-sans text-[11.5px] text-gray-400 mb-2">{fullName}</p>
            )}
            <p className="font-dm-sans text-[12.5px] text-gray-600 leading-relaxed mb-3">{desc}</p>
            <div className="flex flex-wrap gap-3">
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dm-sans text-[0.875rem] font-semibold hover:underline"
                  style={{ color: college.accentColor }}
                >
                  Access Database →
                </a>
              )}
              {ytHref && (
                <a
                  href={ytHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dm-sans text-[0.875rem] font-semibold hover:underline text-gray-500"
                >
                  Watch on YouTube →
                </a>
              )}
              {!href && (
                <span className="font-dm-sans text-[0.875rem] text-gray-400 italic">Available on campus devices</span>
              )}
            </div>
          </div>
        ))}
      </div>

    </AcademicsLayout>
  );
}
