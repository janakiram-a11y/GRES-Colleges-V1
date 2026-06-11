import { AcademicsBanner } from './AcademicsLayout';
import CollegeLayout from '../CollegeLayout';
import college from '../theme';
import AdministrationSidebar from './AdministrationSidebar';

export default function AdministrationLayout({ title, children }) {
  return (
    <CollegeLayout college={college}>
      <AcademicsBanner title={title} />
      <div className="page-content px-5 md:px-16 lg:px-[120px] py-8 md:py-14 lg:py-20">
        {/* Mobile / tablet: horizontal scrollable chip row */}
        <div className="lg:hidden mb-4">
          <AdministrationSidebar mobileChips />
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Sidebar: hidden on mobile/tablet, visible on lg+ */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <AdministrationSidebar />
          </aside>
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </CollegeLayout>
  );
}
