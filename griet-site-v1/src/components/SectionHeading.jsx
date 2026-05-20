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
const SIZE_CLASS = { xl: 'text-xl', '2xl': 'text-2xl' };

export default function SectionHeading({ children, size = '2xl', color, className = '' }) {
  const sizeClass = SIZE_CLASS[size] ?? 'text-2xl';
  return (
    <h2
      className={`font-hind font-bold ${sizeClass} mb-4 pb-2 inline-block ${className}`}
      style={{
        color: color || college.primaryColor,
        borderBottom: `2px solid ${college.accentColor}`,
      }}
    >
      {children}
    </h2>
  );
}
