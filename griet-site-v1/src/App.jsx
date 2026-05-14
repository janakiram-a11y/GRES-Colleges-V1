import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GrietPage from './pages/GrietPage';
import DepartmentPage from './pages/DepartmentPage';
import AboutPage from './pages/AboutPage';
import AdministrationPage from './pages/AdministrationPage';
import AdminGoverningBodyPage from './pages/AdminGoverningBodyPage';
import AdminAcademicCouncilPage from './pages/AdminAcademicCouncilPage';
import AdminDirectorPage from './pages/AdminDirectorPage';
import AdminPrincipalPage from './pages/AdminPrincipalPage';
import AdminDeansPage from './pages/AdminDeansPage';
import AdminHODsPage from './pages/AdminHODsPage';
import AdminStrategicPlanPage from './pages/AdminStrategicPlanPage';
import AdminBOSPage from './pages/AdminBOSPage';
import AdminFinanceCommitteePage from './pages/AdminFinanceCommitteePage';
import AdminCoordinatorsPage from './pages/AdminCoordinatorsPage';
import AdminIDMCPage from './pages/AdminIDMCPage';
import AdminIICPage from './pages/AdminIICPage';
import AdminAntiHarassmentCellPage from './pages/AdminAntiHarassmentCellPage';
import AdminWomensDevelopmentCellPage from './pages/AdminWomensDevelopmentCellPage';
import AdminOrganizationChartPage from './pages/AdminOrganizationChartPage';
import AdminAnnualReportsPage from './pages/AdminAnnualReportsPage';
import AdminSkillSeriesPage from './pages/AdminSkillSeriesPage';
import RankingsPage from './pages/RankingsPage';
import ResearchPage from './pages/ResearchPage';
import PlacementsPage from './pages/PlacementsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ProgrammesPage from './pages/ProgrammesPage';
import AdmissionProcedurePage from './pages/AdmissionProcedurePage';
import FeeStructurePage from './pages/FeeStructurePage';
import EapcetLastRankPage from './pages/EapcetLastRankPage';
import EcetLastRankPage from './pages/EcetLastRankPage';
import ScholarshipsPage from './pages/ScholarshipsPage';
import AcademicsPage from './pages/AcademicsPage';
import RegulationsPage from './pages/RegulationsPage';
import SyllabusPage from './pages/SyllabusPage';
import AcademicCalendarPage from './pages/AcademicCalendarPage';
import LibraryPage from './pages/LibraryPage';
import CodeOfConductPage from './pages/CodeOfConductPage';
import CollegeDiaryPage from './pages/CollegeDiaryPage';
import EndowmentAwardsPage from './pages/EndowmentAwardsPage';
import FinishingSchoolPage from './pages/FinishingSchoolPage';
import DigitalWellbeingCouncilPage from './pages/DigitalWellbeingCouncilPage';
import ExaminationsPage from './pages/ExaminationsPage';
import GoldMedalsPage from './pages/GoldMedalsPage';
import ExamNotificationsPage from './pages/ExamNotificationsPage';
import ResultsPage from './pages/ResultsPage';
import ExamBranchDownloadsPage from './pages/ExamBranchDownloadsPage';
import TranscriptsCertificatesPage from './pages/TranscriptsCertificatesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GrietPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Administration */}
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/administration/governing-body" element={<AdminGoverningBodyPage />} />
        <Route path="/administration/academic-council" element={<AdminAcademicCouncilPage />} />
        <Route path="/administration/director" element={<AdminDirectorPage />} />
        <Route path="/administration/principal" element={<AdminPrincipalPage />} />
        <Route path="/administration/deans" element={<AdminDeansPage />} />
        <Route path="/administration/hods" element={<AdminHODsPage />} />
        <Route path="/administration/strategic-plan" element={<AdminStrategicPlanPage />} />
        <Route path="/administration/bos" element={<AdminBOSPage />} />
        <Route path="/administration/finance-committee" element={<AdminFinanceCommitteePage />} />
        <Route path="/administration/coordinators" element={<AdminCoordinatorsPage />} />
        <Route path="/administration/idmc" element={<AdminIDMCPage />} />
        <Route path="/administration/iic" element={<AdminIICPage />} />
        <Route path="/administration/anti-sexual-harassment-cell" element={<AdminAntiHarassmentCellPage />} />
        <Route path="/administration/womens-development-cell" element={<AdminWomensDevelopmentCellPage />} />
        <Route path="/administration/organization-chart" element={<AdminOrganizationChartPage />} />
        <Route path="/administration/annual-reports" element={<AdminAnnualReportsPage />} />
        <Route path="/administration/griet-skill-series" element={<AdminSkillSeriesPage />} />

        <Route path="/rankings" element={<RankingsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/admissions/programmes" element={<ProgrammesPage />} />
        <Route path="/admissions/admission-procedure" element={<AdmissionProcedurePage />} />
        <Route path="/admissions/fee-structure" element={<FeeStructurePage />} />
        <Route path="/admissions/eapcet-last-rank" element={<EapcetLastRankPage />} />
        <Route path="/admissions/ecet-last-rank" element={<EcetLastRankPage />} />
        <Route path="/admissions/scholarships" element={<ScholarshipsPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/academics/regulations" element={<RegulationsPage />} />
        <Route path="/academics/syllabus" element={<SyllabusPage />} />
        <Route path="/academics/academic-calendar" element={<AcademicCalendarPage />} />
        <Route path="/academics/library" element={<LibraryPage />} />
        <Route path="/academics/code-of-conduct" element={<CodeOfConductPage />} />
        <Route path="/academics/college-diary" element={<CollegeDiaryPage />} />
        <Route path="/academics/endowment-awards" element={<EndowmentAwardsPage />} />
        <Route path="/academics/finishing-school" element={<FinishingSchoolPage />} />
        <Route path="/academics/digital-wellbeing-council" element={<DigitalWellbeingCouncilPage />} />
        <Route path="/examinations" element={<ExaminationsPage />} />
        <Route path="/examinations/gold-medals" element={<GoldMedalsPage />} />
        <Route path="/examinations/exam-notifications" element={<ExamNotificationsPage />} />
        <Route path="/examinations/results" element={<ResultsPage />} />
        <Route path="/examinations/exam-branch-downloads" element={<ExamBranchDownloadsPage />} />
        <Route path="/examinations/transcripts-certificates" element={<TranscriptsCertificatesPage />} />
        <Route path="/departments/:deptId" element={<DepartmentPage />} />
      </Routes>
    </BrowserRouter>
  );
}
