import { AcademicsBanner } from './AcademicsLayout';
import CollegeLayout from '../CollegeLayout';
import college from '../theme';
import AdministrationSidebar from './AdministrationSidebar';

export default function AdministrationLayout({ title, children }) {
  return (
    <CollegeLayout college={college}>
      <AcademicsBanner title={title} />
      <div className="page-pad">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <aside className="w-full lg:w-60 flex-shrink-0">
            <AdministrationSidebar />
          </aside>
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </CollegeLayout>
  );
}
