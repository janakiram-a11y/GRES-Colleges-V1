/**
 * Shared icon library — single source of truth for all inline SVG icons used
 * across components. Each icon accepts `color` and `size` props so callers
 * don't need to hardcode stroke colors or duplicate viewBox/path data.
 *
 * Usage:
 *   import { MortarIcon, UsersIcon, StarIcon } from './icons';
 *   <MortarIcon color="#F3DAB2" size={28} />
 */

export const StarIcon = ({ color = 'currentColor', size = 20 }) => (
  <svg viewBox="0 0 20 20" fill="none" width={size} height={size} aria-hidden="true">
    <path
      d="M10 2l2.5 5.5 6 .5-4.5 4 1.5 6L10 15l-5.5 3 1.5-6L1.5 8l6-.5L10 2z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const MortarIcon = ({ color = 'currentColor', size = 20 }) => (
  <svg viewBox="0 0 20 20" fill="none" width={size} height={size} aria-hidden="true">
    <path d="M10 3L2 7l8 4 8-4-8-4z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M6 9v3.5c0 1.5 4 2.5 4 2.5s4-1 4-2.5V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const UsersIcon = ({ color = 'currentColor', size = 20 }) => (
  <svg viewBox="0 0 20 20" fill="none" width={size} height={size} aria-hidden="true">
    <path d="M13 7a3 3 0 11-6 0 3 3 0 016 0z" stroke={color} strokeWidth="1.5" />
    <path d="M3 17a7 7 0 0114 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BookIcon = ({ color = 'currentColor', size = 20 }) => (
  <svg viewBox="0 0 20 20" fill="none" width={size} height={size} aria-hidden="true">
    <path d="M4 4h12v13H4zM4 4a3 3 0 013-3h6a3 3 0 013 3" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7 8h6M7 11h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BriefcaseIcon = ({ color = 'currentColor', size = 20 }) => (
  <svg viewBox="0 0 20 20" fill="none" width={size} height={size} aria-hidden="true">
    <rect x="2" y="7" width="16" height="10" rx="2" stroke={color} strokeWidth="1.5" />
    <path d="M6 7V5a2 2 0 014 0v2M6 7h8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const PhoneIcon = ({ color = 'currentColor', size = 20 }) => (
  <svg viewBox="0 0 20 20" fill="none" width={size} height={size} aria-hidden="true">
    <path
      d="M2 3a1 1 0 011-1h2a1 1 0 011 .836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74A1 1 0 0118 15v2a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
      stroke={color}
      strokeWidth="1.5"
    />
  </svg>
);

export const ShieldIcon = ({ color = 'currentColor', size = 20 }) => (
  <svg viewBox="0 0 20 20" fill="none" width={size} height={size} aria-hidden="true">
    <path d="M10 2l7 3v5c0 4-3.5 7-7 8-3.5-1-7-4-7-8V5l7-3z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7 10l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CapIcon = ({ color = 'currentColor', size = 20 }) => (
  <svg viewBox="0 0 20 20" fill="none" width={size} height={size} aria-hidden="true">
    <path d="M10 3l8 4-8 4-8-4 8-4z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M6 9v3.5C7.333 13.833 8.667 14.5 10 14.5S12.667 13.833 14 12.5V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BuildingIcon = ({ color = 'currentColor', size = 20 }) => (
  <svg viewBox="0 0 20 20" fill="none" width={size} height={size} aria-hidden="true">
    <rect x="3" y="3" width="14" height="15" rx="1" stroke={color} strokeWidth="1.5" />
    <path d="M8 7h1M8 11h1M11 7h1M11 11h1M8 15h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const FlaskIcon = ({ color = 'currentColor', size = 20 }) => (
  <svg viewBox="0 0 20 20" fill="none" width={size} height={size} aria-hidden="true">
    <path d="M7 3v6L3 16h14L13 9V3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 3h8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="9" cy="13" r="1" fill={color} />
  </svg>
);

export const ChipIcon = ({ color = 'currentColor', size = 20 }) => (
  <svg viewBox="0 0 20 20" fill="none" width={size} height={size} aria-hidden="true">
    <rect x="5" y="5" width="10" height="10" rx="1" stroke={color} strokeWidth="1.5" />
    <path d="M8 5V3M12 5V3M8 17v-2M12 17v-2M5 8H3M5 12H3M17 8h-2M17 12h-2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
