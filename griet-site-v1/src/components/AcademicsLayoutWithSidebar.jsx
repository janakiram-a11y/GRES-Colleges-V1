import { AcademicsBanner } from './AcademicsLayout';
import CollegeLayout from '../CollegeLayout';
import college from '../theme';

export default function AcademicsLayoutWithSidebar({ title, children, sidebar }) {
  return (
    <CollegeLayout college={college}>
      <AcademicsBanner title={title} />
      <div className="px-5 md:px-16 lg:px-[120px] py-8 md:py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar — collapses to full width on mobile/tablet, fixed width on desktop */}
          {sidebar && (
            <aside className="w-full lg:w-60 flex-shrink-0">{sidebar}</aside>
          )}
          {/* Main content */}
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </CollegeLayout>
  );
}
