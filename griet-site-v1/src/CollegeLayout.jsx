import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NavStrip from './components/NavStrip';
import Footer from './components/Footer';

export default function CollegeLayout({ college, children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="bg-[#FFFDFC] font-dm-sans"
      style={{
        '--college-primary': college.primaryColor,
        '--college-accent': college.accentColor,
      }}
    >
      <Navbar college={college} scrolled={scrolled} />
      <NavStrip college={college} scrolled={scrolled} />
      {children}
      <Footer college={college} />
    </div>
  );
}
