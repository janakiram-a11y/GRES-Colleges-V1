import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GrcpPage from './pages/GrcpPage';
import AboutPage from './pages/AboutPage';
import AdministrationPage from './pages/AdministrationPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ProgrammesPage from './pages/ProgrammesPage';
import AcademicsPage from './pages/AcademicsPage';
import ResearchPage from './pages/ResearchPage';
import ExaminationPage from './pages/ExaminationPage';
import PlacementsPage from './pages/PlacementsPage';
import AlumniPage from './pages/AlumniPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<GrcpPage />} />

        {/* About Us */}
        <Route path="/about" element={<AboutPage section="about" />} />
        <Route path="/about/peo" element={<AboutPage section="peo" />} />
        <Route path="/about/pos" element={<AboutPage section="pos" />} />

        {/* Administration */}
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/administration/:section" element={<AdministrationPage />} />

        {/* Admissions */}
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/admissions/:section" element={<AdmissionsPage />} />

        {/* Programmes */}
        <Route path="/programmes" element={<ProgrammesPage />} />
        <Route path="/programmes/:programme" element={<ProgrammesPage />} />
        <Route path="/programmes/:programme/:specialization" element={<ProgrammesPage />} />

        {/* Academics */}
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/academics/:section" element={<AcademicsPage />} />
        <Route path="/academics/:section/:sub" element={<AcademicsPage />} />

        {/* Research */}
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/research/:section" element={<ResearchPage />} />

        {/* Examination */}
        <Route path="/examination" element={<ExaminationPage />} />
        <Route path="/examination/:section" element={<ExaminationPage />} />

        {/* Placements */}
        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/placements/:section" element={<PlacementsPage />} />

        {/* Alumni */}
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/alumni/:section" element={<AlumniPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Fallback */}
        <Route path="*" element={<GrcpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
