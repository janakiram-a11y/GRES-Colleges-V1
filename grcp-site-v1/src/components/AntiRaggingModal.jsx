/**
 * AntiRaggingModal — National Ragging Prevention Programme popup
 *
 * Display logic (controlled by the parent GrcpPage):
 *  • Shown on every fresh page load / browser hard-refresh of the Home page.
 *  • NOT shown on client-side SPA navigation (module-level flag persists
 *    across route changes but resets when the browser re-executes JavaScript).
 *  • NOT rendered on any page other than the Home page.
 *
 * Closes on: × button click, backdrop click, or Escape key.
 */

import { useEffect, useCallback } from 'react';

export default function AntiRaggingModal({ onClose }) {
  /* ── Keyboard + scroll-lock ───────────────────────────────────────────── */
  const handleKeyDown = useCallback(
    (e) => { if (e.key === 'Escape') onClose(); },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prev;
    };
  }, [handleKeyDown]);

  /* ── Link styles matching reference exactly ──────────────────────────── */
  const font     = "'Montserrat', Arial, sans-serif";
  const baseSz   = '14px';

  // Standard blue links (email, website, PDF)
  const blueLink = { color: '#0d6efd', textDecoration: 'none', fontSize: baseSz, fontFamily: font };
  // Teal/cyan links (ARC, ARS) — matches reference site
  const tealLink = { color: '#17a2b8', textDecoration: 'none', fontSize: baseSz, fontFamily: font };

  const hoverOn  = (e) => (e.currentTarget.style.textDecoration = 'underline');
  const hoverOff = (e) => (e.currentTarget.style.textDecoration = 'none');

  return (
    /* ── Backdrop ─────────────────────────────────────────────────────────── */
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="anti-ragging-title"
    >
      {/* ── Modal card ────────────────────────────────────────────────────── */}
      <div
        className="relative bg-white w-full max-w-[560px] max-h-[90vh] overflow-y-auto"
        style={{
          border: '2px solid #dc3545',
          borderRadius: '4px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Close button ────────────────────────────────────────────────── */}
        <button
          onClick={onClose}
          aria-label="Close Anti-Ragging modal"
          style={{
            position: 'absolute',
            top: '8px',
            right: '12px',
            fontSize: '22px',
            fontWeight: '400',
            lineHeight: 1,
            color: '#000',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '2px 6px',
            opacity: 0.5,
            zIndex: 10,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.5')}
        >
          ×
        </button>

        {/* ── Body ────────────────────────────────────────────────────────── */}
        <div style={{ padding: '20px 24px 24px', fontFamily: font, color: '#212529', lineHeight: '1.6' }}>

          {/* Title */}
          <h2
            id="anti-ragging-title"
            style={{ fontSize: '20px', fontWeight: '700', color: '#212529', margin: '0 0 6px', paddingRight: '24px', lineHeight: '1.35' }}
          >
            National Ragging Prevention Programme
          </h2>

          {/* Helpline label */}
          <p style={{ fontSize: baseSz, color: '#212529', margin: '0 0 14px' }}>
            National Anti-Ragging Helpline
          </p>

          {/* Toll-free number */}
          <p style={{ fontSize: baseSz, color: '#212529', margin: '0 0 2px' }}>24X7 Toll Free</p>
          <p style={{ fontSize: baseSz, fontWeight: '700', color: '#212529', margin: '0 0 18px' }}>
            1800-180-5522
          </p>

          {/* UGC section heading */}
          <h3 style={{ fontSize: '22px', fontWeight: '400', color: '#212529', margin: '0 0 6px', lineHeight: '1.35' }}>
            UGC Monitoring Agency
          </h3>

          {/* C4Y */}
          <p style={{ fontSize: baseSz, color: '#212529', margin: '0 0 4px' }}>Centre for Youth (C4Y)</p>
          <p style={{ margin: '0 0 18px' }}>
            <a href="mailto:antiragging@c4yindia.org" style={blueLink} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
              antiragging@c4yindia.org
            </a>
            {' | '}
            <a href="https://www.c4yindia.org" target="_blank" rel="noopener noreferrer" style={blueLink} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
              www.c4yindia.org
            </a>
          </p>

          {/* Nodal officers heading */}
          <p style={{ fontSize: baseSz, fontWeight: '700', color: '#212529', margin: '0 0 8px', lineHeight: '1.5' }}>
            Contact Details of the Nodal Officers of Anti-Ragging Committee and Squad
          </p>

          {/* ARC / ARS links — teal/cyan matching reference */}
          <p style={{ margin: '0 0 18px' }}>
            <a href="https://grcp.ac.in/Anti_Ragging_Committee.php" target="_blank" rel="noopener noreferrer" style={tealLink} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
              Anti-Ragging Committee (ARC)
            </a>
            {' | '}
            <a href="https://grcp.ac.in/Anti_Ragging_Squad.php" target="_blank" rel="noopener noreferrer" style={tealLink} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
              Anti-Ragging Squad (ARS)
            </a>
          </p>

          {/* Warning — bold red */}
          <p style={{ fontSize: baseSz, fontWeight: '700', color: '#dc3545', margin: '0 0 16px', lineHeight: '1.55' }}>
            Ragging is a criminal offence and the culprits will attract punitive action as mentioned in the UGC Regulations
          </p>

          {/* PDF link */}
          <a href="https://www.ugc.gov.in/oldpdf/ugcregulations09.pdf" target="_blank" rel="noopener noreferrer" style={blueLink} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
            UGC Regulations PDF
          </a>

        </div>
      </div>
    </div>
  );
}
