export default function Topbar({ college }) {
  return (
    <div
      className="w-full py-[9px]"
      style={{
        backgroundColor: '#F3DAB2',
        borderBottom: '1px solid rgba(91,16,39,0.15)',
      }}
    >
      <div className="max-w-[1320px] mx-auto px-[60px] flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${college.email}`}
            className="font-dm-sans font-medium text-[13px] leading-4 transition-colors"
            style={{ color: college.primaryColor }}
            onMouseEnter={(e) => (e.currentTarget.style.color = college.accentColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = college.primaryColor)}
          >
            {college.email}
          </a>
          <span className="font-dm-sans font-medium text-[13px] leading-4" style={{ color: college.primaryColor }}>
            {college.admissionsPhone}
          </span>
          <span className="font-dm-sans font-medium text-[13px] leading-4" style={{ color: 'rgba(91,16,39,0.65)' }}>
            {college.admissionsLabel}
          </span>
        </div>
        <div className="flex items-center gap-6">
          {[
            { label: 'Alumni', href: '/alumni' },
            { label: 'Careers', href: '/careers' },
            { label: 'Student Portal', href: '/student-portal' },
            { label: 'Library', href: '/academics/library' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-dm-sans font-medium text-[13px] leading-4 transition-colors"
              style={{ color: college.primaryColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = college.accentColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = college.primaryColor)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
