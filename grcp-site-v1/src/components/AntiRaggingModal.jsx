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

  /* ── Shared link style ────────────────────────────────────────────────── */
  const linkStyle = {
    color: '#0d6efd',
    textDecoration: 'none',
    fontSize: '14px',
    fontFamily: 'Montserrat, sans-serif',
  };
  const linkHover = (e) => (e.currentTarget.style.textDecoration = 'underline');
  const linkOut  = (e) => (e.currentTarget.style.textDecoration = 'none');

  return (
    /* ── Backdrop ─────────────────────────────────────────────────────────── */
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="anti-ragging-title"
    >
      {/* ── Modal card ────────────────────────────────────────────────────── */}
      <div
        className="relative bg-white w-full max-w-[600px] max-h-[90vh] overflow-y-auto"
        style={{
          border: '3px solid #d31329',
          borderRadius: '4px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.22)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close Anti-Ragging modal"
          style={{
            position: 'absolute',
            top: '10px',
            right: '14px',
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: 1,
            color: '#555',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            zIndex: 10,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#000')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
        >
          &#x00D7;
        </button>

        {/* Content */}
        <div
          style={{
            padding: '24px 28px 28px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px',
            lineHeight: '1.65',
            color: '#212529',
          }}
        >
          {/* Title */}
          <h2
            id="anti-ragging-title"
            style={{
              fontSize: '22px',
              fontWeight: '700',
              color: '#212529',
              marginBottom: '4px',
              paddingRight: '28px',
              lineHeight: '1.3',
            }}
          >
            National Ragging Prevention Programme
          </h2>
          <p style={{ fontSize: '14px', color: '#212529', marginBottom: '18px' }}>
            National Anti-Ragging Helpline
          </p>

          {/* Helpline */}
          <p style={{ fontSize: '14px', color: '#212529', marginBottom: '2px' }}>
            24X7 Toll Free
          </p>
          <p style={{ fontSize: '14px', fontWeight: '700', color: '#212529', marginBottom: '22px' }}>
            1800-180-5522
          </p>

          {/* UGC Monitoring Agency */}
          <h3
            style={{
              fontSize: '20px',
              fontWeight: '400',
              color: '#212529',
              marginBottom: '4px',
              lineHeight: '1.3',
            }}
          >
            UGC Monitoring Agency
          </h3>
          <p style={{ fontSize: '14px', color: '#212529', marginBottom: '4px' }}>
            Centre for Youth (C4Y)
          </p>
          <p style={{ marginBottom: '22px' }}>
            <a
              href="mailto:antiragging@c4yindia.org"
              style={linkStyle}
              onMouseEnter={linkHover}
              onMouseLeave={linkOut}
            >
              antiragging@c4yindia.org
            </a>
            {' | '}
            <a
              href="https://www.c4yindia.org"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={linkHover}
              onMouseLeave={linkOut}
            >
              www.c4yindia.org
            </a>
          </p>

          {/* Nodal officers */}
          <p
            style={{
              fontSize: '14px',
              fontWeight: '700',
              color: '#212529',
              marginBottom: '8px',
              lineHeight: '1.5',
            }}
          >
            Contact Details of the Nodal Officers of Anti-Ragging Committee and Squad
          </p>
          <p style={{ marginBottom: '22px' }}>
            <a
              href="https://grcp.ac.in/Anti_Ragging_Committee.php"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={linkHover}
              onMouseLeave={linkOut}
            >
              Anti-Ragging Committee (ARC)
            </a>
            {' | '}
            <a
              href="https://grcp.ac.in/Anti_Ragging_Squad.php"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={linkHover}
              onMouseLeave={linkOut}
            >
              Anti-Ragging Squad (ARS)
            </a>
          </p>

          {/* Warning */}
          <p
            style={{
              fontSize: '14px',
              fontWeight: '700',
              color: '#d31329',
              marginBottom: '18px',
              lineHeight: '1.55',
            }}
          >
            Ragging is a criminal offence and the culprits will attract punitive
            action as mentioned in the UGC Regulations
          </p>

          {/* PDF link */}
          <a
            href="https://www.ugc.gov.in/oldpdf/ugcregulations09.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseEnter={linkHover}
            onMouseLeave={linkOut}
          >
            UGC Regulations PDF
          </a>
        </div>
      </div>
    </div>
  );
}
