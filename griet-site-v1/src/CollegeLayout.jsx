import AnnouncementBar from './components/AnnouncementBar';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import NavStrip from './components/NavStrip';
import Footer from './components/Footer';

export default function CollegeLayout({ college, children }) {
  return (
    <div
      className="bg-[#FFFDFC] font-dm-sans"
      style={{
        '--college-primary': college.primaryColor,
        '--college-accent': college.accentColor,
      }}
    >
      <AnnouncementBar college={college} />
      <Topbar college={college} />
      <Navbar college={college} />
      <NavStrip college={college} />
      {children}
      <Footer college={college} />
    </div>
  );
}
