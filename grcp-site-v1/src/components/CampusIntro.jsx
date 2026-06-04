import { useEffect, useRef, useState } from 'react';

const YOUTUBE_VIDEO_ID = 'AmszlV1een0';

/* ── Load the YouTube IFrame API script once globally ─────────────────── */
function loadYTApi() {
  if (window.YT && window.YT.Player) return Promise.resolve();
  if (window.__ytApiLoading) return window.__ytApiLoading;

  window.__ytApiLoading = new Promise((resolve) => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => {
      resolve();
      delete window.__ytApiLoading;
    };
  });
  return window.__ytApiLoading;
}

export default function CampusIntro({ college }) {
  const containerRef  = useRef(null); // IntersectionObserver target
  const playerRef     = useRef(null); // YT.Player instance
  const iframeId      = 'grcp-yt-player';
  const [ready, setReady] = useState(false);

  /* ── 1. Load YT API + create player ──────────────────────────────────── */
  useEffect(() => {
    let player;
    loadYTApi().then(() => {
      player = new window.YT.Player(iframeId, {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay:       0,     // controlled by IntersectionObserver
          mute:           1,     // required for autoplay in browsers
          loop:           1,
          playlist:       YOUTUBE_VIDEO_ID, // needed for loop
          controls:       1,
          rel:            0,     // no related videos
          modestbranding: 1,
          playsinline:    1,
          cc_load_policy: 0,
          iv_load_policy: 3,     // hide video annotations
        },
        events: {
          onReady: () => {
            playerRef.current = player;
            setReady(true);
          },
        },
      });
    });
    return () => {
      try { player?.destroy(); } catch (_) {}
    };
  }, []);

  /* ── 2. IntersectionObserver — play/pause on scroll ──────────────────── */
  useEffect(() => {
    if (!ready) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const p = playerRef.current;
        if (!p) return;
        try {
          if (entry.isIntersecting) {
            p.playVideo();
          } else {
            p.pauseVideo();
          }
        } catch (_) {}
      },
      { threshold: 0.3 } // trigger when 30% of section is visible
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [ready]);

  return (
    <section className="w-full bg-white section-pad">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-2">
          <p
            className="font-display font-bold text-type-sub uppercase tracking-[0.12em] text-center"
            style={{ color: '#C72235' }}
          >
            {college.campusIntroLabel}
          </p>
          <h2 className="font-display font-semibold text-type-h2-mob lg:text-type-h2 text-[#222222] text-center">
            {college.campusIntroHeading}
          </h2>
          <p className="font-body font-normal text-type-body text-[#666666] text-center max-w-[680px]">
            {college.campusIntroDesc}
          </p>
        </div>

        {/* ── Video container ──────────────────────────────────────────── */}
        <div
          ref={containerRef}
          className="w-full rounded-xl overflow-hidden"
          style={{
            position: 'relative',
            aspectRatio: '16/9',
            boxShadow: '0px 24px 48px -12px rgba(74,13,38,0.15)',
            backgroundColor: '#000',
          }}
        >
          {/* YouTube IFrame — player is attached to this div by the API */}
          <div
            id={iframeId}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

      </div>
    </section>
  );
}
