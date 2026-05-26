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
import LibraryEBooksPage from './pages/LibraryEBooksPage';
import LibraryEResourcesPage from './pages/LibraryEResourcesPage';
import LibraryStaffCommitteePage from './pages/LibraryStaffCommitteePage';
import LibraryRulesPage from './pages/LibraryRulesPage';
import LibraryOtherFacilitiesPage from './pages/LibraryOtherFacilitiesPage';
import LibraryEResourcesDocPage from './pages/LibraryEResourcesDocPage';
import LibraryRareBooksPage from './pages/LibraryRareBooksPage';
import LibraryOnlineDatabasesPage from './pages/LibraryOnlineDatabasesPage';
import LibraryAutomationPage from './pages/LibraryAutomationPage';
import LibraryInterLibraryNetworkPage from './pages/LibraryInterLibraryNetworkPage';
import LibraryUsageStatisticsPage from './pages/LibraryUsageStatisticsPage';
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
import IQACPage from './pages/IQACPage';
import FAQsPage from './pages/FAQsPage';
import ContactPage from './pages/ContactPage';
import AccreditationsPage from './pages/AccreditationsPage';
import HonoursAwardsPage from './pages/HonoursAwardsPage';
import AntiRaggingPage from './pages/AntiRaggingPage';
import MOUsPage from './pages/MOUsPage';
import ConferencesPage from './pages/ConferencesPage';
import SportsPage from './pages/SportsPage';
import TransportPage from './pages/TransportPage';
import InfrastructurePage from './pages/InfrastructurePage';
import SupportServicesPage from './pages/SupportServicesPage';
import ProfessionalAssociationsPage from './pages/ProfessionalAssociationsPage';
import InternshipsPage from './pages/InternshipsPage';
import ValueAddedProgramsPage from './pages/ValueAddedProgramsPage';
import JournalsPage from './pages/JournalsPage';
import PhDFacultyPage from './pages/PhDFacultyPage';
import CentralFacilitiesPage from './pages/CentralFacilitiesPage';
import DTBUPage from './pages/DTBUPage';
import MargdarshanPage from './pages/MargdarshanPage';
import CareersPage from './pages/CareersPage';
import EDCPage from './pages/EDCPage';
import AlumniPage from './pages/AlumniPage';
import MandatoryDisclosuresPage from './pages/MandatoryDisclosuresPage';
import NSSPage from './pages/NSSPage';
import NIRFPage from './pages/NIRFPage';

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
        <Route path="/academics/library/ebooks" element={<LibraryEBooksPage />} />
        <Route path="/academics/library/eresources" element={<LibraryEResourcesPage />} />
        <Route path="/academics/library/staff-committee" element={<LibraryStaffCommitteePage />} />
        <Route path="/academics/library/rules" element={<LibraryRulesPage />} />
        <Route path="/academics/library/other-facilities" element={<LibraryOtherFacilitiesPage />} />
        <Route path="/academics/library/eresources-document" element={<LibraryEResourcesDocPage />} />
        <Route path="/academics/library/rare-books" element={<LibraryRareBooksPage />} />
        <Route path="/academics/library/online-databases" element={<LibraryOnlineDatabasesPage />} />
        <Route path="/academics/library/automation" element={<LibraryAutomationPage />} />
        <Route path="/academics/library/inter-library-network" element={<LibraryInterLibraryNetworkPage />} />
        <Route path="/academics/library/usage-statistics" element={<LibraryUsageStatisticsPage />} />
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
        <Route path="/iqac" element={<IQACPage />} />
        <Route path="/faq" element={<FAQsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/accreditations" element={<AccreditationsPage />} />
        <Route path="/honours-awards" element={<HonoursAwardsPage />} />
        <Route path="/anti-ragging" element={<AntiRaggingPage />} />
        <Route path="/mous" element={<MOUsPage />} />
        <Route path="/conferences" element={<ConferencesPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/transport" element={<TransportPage />} />
        <Route path="/infrastructure" element={<InfrastructurePage />} />
        <Route path="/support-services" element={<SupportServicesPage />} />
        <Route path="/professional-associations" element={<ProfessionalAssociationsPage />} />
        <Route path="/internships" element={<InternshipsPage />} />
        <Route path="/value-added-programs" element={<ValueAddedProgramsPage />} />
        <Route path="/journals" element={<JournalsPage />} />
        <Route path="/phd-faculty" element={<PhDFacultyPage />} />
        <Route path="/central-facilities" element={<CentralFacilitiesPage />} />
        <Route path="/dtbu" element={<DTBUPage />} />
        <Route path="/margdarshan" element={<MargdarshanPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/edc" element={<EDCPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/mandatory-disclosures" element={<MandatoryDisclosuresPage />} />
        <Route path="/nss" element={<NSSPage />} />
        <Route path="/nirf" element={<NIRFPage />} />
        <Route path="/departments/:deptId" element={<DepartmentPage />} />
      </Routes>
    </BrowserRouter>
  );
}
