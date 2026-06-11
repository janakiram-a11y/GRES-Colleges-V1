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
      ? 'text-[#F3DAB2]'
      : 'text-[#5B1027]';

  return (
    <p className={`font-display font-bold text-[0.75rem] leading-4 tracking-[0.12em] uppercase ${colorClass} ${className}`}>
      {children}
    </p>
  );
}
