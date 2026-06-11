import college from '../theme';

/**
 * Shared branded section heading used across all inner pages.
 * Replaces the three nearly-identical local `SectionHeading` components that
 * had drifted apart (text-xl vs text-2xl, mb-4 vs mb-5, optional color prop).
 *
 * Props:
 *   size     – 'xl' | '2xl' (default '2xl')
 *   color    – override for heading color; defaults to college.primaryColor
 *   className – additional classes
 */
export default function SectionHeading({ children, size = '2xl', color, className = '' }) {
  /* size prop retained for API compat but all sizes now use the unified scale */
  return (
    <h2
      className={`font-display font-bold text-[1.375rem] md:text-[1.75rem] lg:text-[2.125rem] leading-[1.2] mb-4 pb-2 inline-block ${className}`}
      style={{
        color: color || college.primaryColor,
        borderBottom: `2px solid ${college.accentColor}`,
      }}
    >
      {children}
    </h2>
  );
}
