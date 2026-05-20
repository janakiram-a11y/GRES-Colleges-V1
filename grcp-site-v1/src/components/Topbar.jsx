export default function Topbar({ college }) {
  return (
    <div
      className="w-full py-[9px]"
      style={{
        backgroundColor: '#F3DAB2',
        borderBottom: '1px solid rgba(45,122,80,0.15)',
      }}
    >
      <div className="max-w-[1320px] mx-auto px-[60px] flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${college.email}`}
            className="font-dm-sans font-medium text-[13px] leading-4 transition-colors"
            style={{ color: college.accentColor }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#A81C2E')}
            onMouseLeave={(e) => (e.currentTarget.style.color = college.accentColor)}
          >
            {college.email}
          </a>
          <span className="font-dm-sans font-medium text-[13px] leading-4" style={{ color: college.accentColor }}>
            {college.admissionsPhone}
          </span>
          <span className="font-dm-sans font-medium text-[13px] leading-4" style={{ color: 'rgba(199,34,53,0.65)' }}>
            {college.admissionsLabel}
          </span>
        </div>
        <div className="flex items-center gap-6">
          {['Alumni', 'Careers', 'Student Portal', 'Library'].map((link) => (
            <a
              key={link}
              href="#"
              className="font-dm-sans font-medium text-[13px] leading-4 transition-colors"
              style={{ color: college.accentColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#A81C2E')}
              onMouseLeave={(e) => (e.currentTarget.style.color = college.accentColor)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
