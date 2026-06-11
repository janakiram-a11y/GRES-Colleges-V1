/**
 * Shared CTA button / link.
 * Replaces three different padding + font-size combos for the same red primary
 * action across Hero, AcademicPrograms, and AdmissionsCTA.
 *
 * Props:
 *   href      – renders an <a> when provided, a <button> otherwise
 *   onClick   – for <button> usage
 *   variant   – 'primary' (red filled) | 'outline' (white bordered, for dark backgrounds)
 *   size      – 'md' (default, px-8 py-[14px] text-[16px]) | 'lg' (px-10 py-[18px] text-[18px])
 *   className – extra classes
 *   children
 */

const SHADOW = '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)';

function externalProps(href) {
  if (typeof href === 'string' && href.startsWith('http')) {
    return { target: '_blank', rel: 'noopener noreferrer' };
  }
  return {};
}

export default function CTAButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) {
  const sizeCls =
    size === 'lg'
      ? 'px-10 py-[18px] text-base leading-6'
      : 'px-8 py-[14px] text-base leading-6';

  const variantCls =
    variant === 'outline'
      ? 'border-2 border-white text-white hover:bg-white/10'
      : 'bg-[#C32033] text-white hover:bg-[#a81b2a]';

  const base = `font-display font-semibold rounded transition-colors inline-block ${sizeCls} ${variantCls} ${className}`;

  const shadow = variant === 'primary' ? { boxShadow: SHADOW } : {};

  if (href) {
    return (
      <a href={href} className={base} style={shadow} {...externalProps(href)}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={base} style={shadow}>
      {children}
    </button>
  );
}
