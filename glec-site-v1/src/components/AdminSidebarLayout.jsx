import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import NavStrip from './NavStrip';
import PageHero from './PageHero';
import AdmissionsCTA from './AdmissionsCTA';
import Footer from './Footer';

/**
 * AdminSidebarLayout
 * Full-width layout for Administration section pages.
 * Navigation between sections happens via the navbar dropdown.
 *
 * Props:
 *   college        — college config object
 *   pageTitle      — hero banner title
 *   pageSubtitle   — hero banner subtitle
 *   pageBreadcrumb — array of breadcrumb labels (last is current page)
 *   sections       — [{ id, path, label }]  — (kept for API compatibility)
 *   currentSection — { id, path, label, content } — the section to render
 */
export default function AdminSidebarLayout({
  college,
  pageTitle,
  pageSubtitle,
  pageBreadcrumb = [],
  currentSection,
}) {
  const location = useLocation();

  // Scroll to top whenever the section (route) changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar college={college} />
      <NavStrip college={college} />

      <PageHero
        college={college}
        title={pageTitle}
        subtitle={pageSubtitle}
        breadcrumb={pageBreadcrumb}
        bgImage={college.heroBgImage}
      />

      {/* Page content — full width */}
      <main className="flex-1 section-pad">
        {currentSection?.content}
      </main>

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
