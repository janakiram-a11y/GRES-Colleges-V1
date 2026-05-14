import { AcademicsBanner } from './AcademicsLayout';
import CollegeLayout from '../CollegeLayout';
import college from '../theme';

export default function AcademicsLayoutWithSidebar({ title, children, sidebar }) {
  return (
    <CollegeLayout college={college}>
      <AcademicsBanner title={title} />
      <div className="page-pad">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar — left */}
          {sidebar && (
            <aside className="w-full lg:w-60 flex-shrink-0">{sidebar}</aside>
          )}
          {/* Main content — right */}
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </CollegeLayout>
  );
}
