import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { withAlpha } from '../theme';

function DropdownItem({ label, href, college }) {
  const location = useLocation();
  const [path, hash] = (href || '/').split('#');
  const isActive = href && location.pathname === path;

  function handleClick(e) {
    if (hash && location.pathname === path) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 170;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }

  return (
    <Link
      to={href || '/'}
      onClick={handleClick}
      className="block px-4 py-[10px] text-[13px] font-dm-sans font-medium transition-colors whitespace-nowrap"
      style={{
        color: isActive ? college.accentColor : college.primaryColor,
        borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.08)}`,
        backgroundColor: isActive ? withAlpha(college.primaryColor, 0.04) : 'transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = college.accentColor;
        e.currentTarget.style.backgroundColor = withAlpha(college.primaryColor, 0.04);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = isActive ? college.accentColor : college.primaryColor;
        e.currentTarget.style.backgroundColor = isActive ? withAlpha(college.primaryColor, 0.04) : 'transparent';
      }}
    >
      {label}
    </Link>
  );
}

function NavItem({ name, href, dropdown, college }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  const isActive = href && (
    location.pathname === href ||
    (href !== '/' && location.pathname.startsWith(href.split('#')[0] + '/')) ||
    (href !== '/' && location.pathname === href.split('#')[0])
  );

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  const activeColor = '#F3DAB2';
  const defaultColor = '#ffffff';

  if (!dropdown) {
    return (
      <Link
        to={href || '/'}
        className="font-dm-sans font-semibold text-[14px] leading-[17px] transition-colors py-1"
        style={{ color: isActive ? activeColor : defaultColor }}
        onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#F3DAB2'; }}
        onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = defaultColor; }}
      >
        {name}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-0.5">
        {/* Main nav label — navigates to href */}
        <Link
          to={href || '/'}
          className="font-dm-sans font-semibold text-[14px] leading-[17px] transition-colors py-2"
          style={{ color: isActive || open ? activeColor : defaultColor }}
          onMouseEnter={(e) => { if (!isActive && !open) e.currentTarget.style.color = '#F3DAB2'; }}
          onMouseLeave={(e) => { if (!isActive && !open) e.currentTarget.style.color = defaultColor; }}
        >
          {name}
        </Link>
        {/* Chevron toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="p-1 transition-colors"
          style={{ color: isActive || open ? activeColor : defaultColor }}
          onMouseEnter={(e) => { if (!isActive && !open) e.currentTarget.style.color = '#F3DAB2'; }}
          onMouseLeave={(e) => { if (!isActive && !open) e.currentTarget.style.color = defaultColor; }}
        >
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown panel */}
      <div
        className={`absolute top-full left-0 pt-1 z-50 min-w-[256px] transition-all duration-200 ease-out ${
          open ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-1 invisible pointer-events-none'
        }`}
      >
        <div
          className="bg-white shadow-xl py-1"
          style={{
            borderTop: `3px solid ${college.accentColor}`,
            borderLeft: `1px solid ${withAlpha(college.primaryColor, 0.1)}`,
            borderRight: `1px solid ${withAlpha(college.primaryColor, 0.1)}`,
            borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.1)}`,
          }}
        >
          {dropdown.map((item) => (
            <DropdownItem
              key={item.label}
              label={item.label}
              href={item.href}
              college={college}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NavStrip({ college }) {
  return (
    <div
      className="w-full py-3 sticky top-[113px] z-40"
      style={{
        backgroundColor: college.primaryColor,
        borderBottom: `1px solid ${withAlpha('#000000', 0.1)}`,
      }}
    >
      <div className="flex justify-center items-center gap-[34px] overflow-visible flex-wrap">
        {college.navLinks.map((link) => (
          <NavItem key={link.name} {...link} college={college} />
        ))}
      </div>
    </div>
  );
}
