import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlecPage from './pages/GlecPage';
import AboutPage from './pages/AboutPage';
import AdministrationPage from './pages/AdministrationPage';
import AdmissionsPage from './pages/AdmissionsPage';
import AcademicsPage from './pages/AcademicsPage';
import ResearchPage from './pages/ResearchPage';
import ExaminationsPage from './pages/ExaminationsPage';
import ContactPage from './pages/ContactPage';
import DepartmentPage from './pages/DepartmentPage';
import PlacementsPage from './pages/PlacementsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<GlecPage />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/vision-mission" element={<AboutPage />} />
        <Route path="/about/infrastructure" element={<AboutPage />} />

        {/* Administration — each section has its own route */}
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/administration/:section" element={<AdministrationPage />} />

        {/* Academics — each section has its own route */}
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/academics/:section" element={<AcademicsPage />} />

        {/* Departments */}
        <Route path="/departments/:slug" element={<DepartmentPage />} />

        {/* Examinations — each section has its own route */}
        <Route path="/examinations" element={<ExaminationsPage />} />
        <Route path="/examinations/:section" element={<ExaminationsPage />} />

        {/* Admissions — each section has its own route */}
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/admissions/:section" element={<AdmissionsPage />} />
        {/* Research — each section has its own route */}
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/research/:section" element={<ResearchPage />} />
        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Fallback */}
        <Route path="*" element={<GlecPage />} />
      </Routes>
    </BrowserRouter>
  );
}
