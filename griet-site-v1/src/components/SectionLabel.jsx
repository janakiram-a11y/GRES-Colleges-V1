/**
 * Shared section eyebrow / overline label.
 * Replaces identical `<p className="font-hind font-bold text-[20px] ...">` blocks
 * repeated in CareerOutcomes, CampusIntro, AccreditationSection, ResearchSection.
 *
 * Props:
 *   variant  – 'primary' (dark maroon on light bg, default) | 'light' (gold on dark bg)
 *   className – additional classes
 */
export default function SectionLabel({ children, variant = 'primary', className = '' }) {
  const colorClass =
    variant === 'light'
      ? 'text-[#F3DAB2] tracking-[1.4px] leading-5'
      : 'text-[#5B1027] leading-[30px]';

  return (
    <p className={`font-hind font-bold text-[20px] uppercase ${colorClass} ${className}`}>
      {children}
    </p>
  );
}
