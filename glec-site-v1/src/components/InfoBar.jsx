import { useState } from 'react';
import { withAlpha } from '../theme';

export default function InfoBar({ college }) {
  const [query, setQuery] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(q)}&sitesearch=${encodeURIComponent('glwec.in')}`,
        '_blank',
        'noopener,noreferrer',
      );
    }
  }

  return (
    <div
      className="w-full bg-white hidden md:block"
      style={{ borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.08)}` }}
    >
      <div className="max-w-[1320px] mx-auto px-[60px] flex justify-between items-center h-[40px]">

        {/* Left — counselling code */}
        <div className="flex items-center gap-2.5">
          <span
            className="font-dm-sans font-medium text-[13px] leading-4"
            style={{ color: college.primaryColor }}
          >
            {college.counsellingExam} counselling code:
          </span>
          <span
            className="font-dm-sans font-bold text-[11px] tracking-wide text-white px-2 py-0.5 rounded"
            style={{ backgroundColor: college.accentColor }}
          >
            {college.counsellingCode}
          </span>
        </div>

        {/* Right — search */}
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="font-dm-sans text-[13px] text-gray-700 placeholder-gray-400 border border-gray-300 rounded-l px-3 h-[30px] w-[180px] focus:outline-none transition-colors bg-white"
            style={{ '--tw-ring-color': college.primaryColor }}
            onFocus={(e) => (e.currentTarget.style.borderColor = college.primaryColor)}
            onBlur={(e) => (e.currentTarget.style.borderColor = '')}
          />
          <button
            type="submit"
            className="h-[30px] w-[34px] flex items-center justify-center text-white rounded-r flex-shrink-0 transition-opacity hover:opacity-90"
            style={{ backgroundColor: college.primaryColor }}
            aria-label="Search"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeLinecap="round" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
