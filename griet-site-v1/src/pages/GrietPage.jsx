import college from '../theme';
import CollegeLayout from '../CollegeLayout';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import BottomQuickLinksBar from '../components/BottomQuickLinksBar';
import WhyChooseUs from '../components/WhyChooseUs';
import AccreditationSection from '../components/AccreditationSection';
import AcademicPrograms from '../components/AcademicPrograms';
import CareerOutcomes from '../components/CareerOutcomes';
import ResearchSection from '../components/ResearchSection';
import CampusLife from '../components/CampusLife';
import AdmissionsCTA from '../components/AdmissionsCTA';

export default function GrietPage() {
  return (
    <CollegeLayout college={college}>
      <Hero college={college} />
      <BottomQuickLinksBar college={college} />
      <WhyChooseUs college={college} />
      <StatsBar college={college} variant="dark" />
      <AccreditationSection college={college} />
      <AcademicPrograms college={college} />
      <CareerOutcomes college={college} />
      <ResearchSection college={college} />
      <CampusLife college={college} />
      <AdmissionsCTA college={college} />
    </CollegeLayout>
  );
}
