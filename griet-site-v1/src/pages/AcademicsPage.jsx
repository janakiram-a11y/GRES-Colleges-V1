import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

export default function AcademicsPage() {
  return (
    <AcademicsLayout title="Academics">

      {/* Overview paragraphs */}
      <div className="max-w-3xl mb-10 space-y-4 font-dm-sans text-[14px] leading-relaxed text-gray-700">
        <p>
          The departments of GRIET are responsible for academic activities which include Teaching,
          Research and Industrial Consultancy. Courses of study are organized on semester basis and
          the medium of instruction is English.
        </p>
        <p>
          Students are evaluated continuously across two semesters per year, each providing a minimum
          of seventeen weeks of instruction. Evaluation comprises Continuous Internal Evaluation (CIE)
          and Semester End Examination (SEE), balanced with co-curricular activities.
        </p>
        <p>
          Special lectures under the Extra Mural Lecture series, conferences, symposia, workshops,
          guest lectures, and industrial visits complement classroom interactions. All academic
          activities are monitored by the Dean of Academic Affairs.
        </p>
      </div>

    </AcademicsLayout>
  );
}
