import { useState } from 'react';
import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const PHD_FACULTY = [
  // CSE
  { sno: 1,  name: 'Dr. K. Suvarna Vani',        dept: 'CSE', university: 'JNTUH',    year: 2010, thesis: 'Adaptive Routing Protocols in Mobile Ad-Hoc Networks' },
  { sno: 2,  name: 'Dr. P. Chandra Sekhar Reddy', dept: 'CSE', university: 'JNTUH',    year: 2011, thesis: 'Cluster-Based Energy-Efficient Protocols for WSN' },
  { sno: 3,  name: 'Dr. B. Eswara Reddy',          dept: 'CSE', university: 'JNTUH',    year: 2012, thesis: 'Machine Learning Algorithms for Medical Image Analysis' },
  { sno: 4,  name: 'Dr. N. Subhash Chandra',       dept: 'CSE', university: 'JNTUH',    year: 2013, thesis: 'Intrusion Detection Systems Using Data Mining Techniques' },
  { sno: 5,  name: 'Dr. G. Rama Mohan Babu',       dept: 'CSE', university: 'JNTUH',    year: 2014, thesis: 'Performance Enhancement in Cloud Computing Environments' },
  { sno: 6,  name: 'Dr. S. Srinivasa Rao',          dept: 'CSE', university: 'Osmania',  year: 2015, thesis: 'Deep Learning Approaches for Natural Language Processing' },
  { sno: 7,  name: 'Dr. V. Saritha',                dept: 'CSE', university: 'JNTUH',    year: 2016, thesis: 'Semantic Web Technologies for Knowledge Representation' },
  // ECE
  { sno: 8,  name: 'Dr. T. Kishore Kumar',          dept: 'ECE', university: 'JNTUH',    year: 2009, thesis: 'VLSI Design of High-Speed Adder Architectures' },
  { sno: 9,  name: 'Dr. Ch. Santhi Rani',           dept: 'ECE', university: 'JNTUH',    year: 2011, thesis: 'MIMO Antenna Design for 5G Wireless Communications' },
  { sno: 10, name: 'Dr. M. Asha Rani',              dept: 'ECE', university: 'JNTUH',    year: 2012, thesis: 'Signal Processing Algorithms for Biomedical Applications' },
  { sno: 11, name: 'Dr. G. Sravani',                dept: 'ECE', university: 'JNTUH',    year: 2014, thesis: 'Compressive Sensing Techniques for Wireless Sensor Networks' },
  { sno: 12, name: 'Dr. P. Rajesh Kumar',           dept: 'ECE', university: 'IIT Kgp',  year: 2015, thesis: 'Adaptive Filter Design for Noise Cancellation in Speech' },
  { sno: 13, name: 'Dr. K. Hymavathi',              dept: 'ECE', university: 'JNTUH',    year: 2016, thesis: 'Photovoltaic System Integration in Smart Grid Architecture' },
  // EEE
  { sno: 14, name: 'Dr. D. Ravi Kumar',             dept: 'EEE', university: 'JNTUH',    year: 2010, thesis: 'Optimal Power Flow Solutions in Deregulated Power Systems' },
  { sno: 15, name: 'Dr. V. Usha Reddy',             dept: 'EEE', university: 'JNTUH',    year: 2012, thesis: 'Hybrid Renewable Energy Systems for Rural Electrification' },
  { sno: 16, name: 'Dr. B. Venkata Prasanth',       dept: 'EEE', university: 'JNTUH',    year: 2013, thesis: 'Intelligent Controllers for Variable Speed Motor Drives' },
  { sno: 17, name: 'Dr. Ch. Rambabu',               dept: 'EEE', university: 'JNTUH',    year: 2015, thesis: 'Power Quality Improvement Using Active Power Filters' },
  { sno: 18, name: 'Dr. N. Venkateswara Rao',       dept: 'EEE', university: 'Osmania',  year: 2016, thesis: 'Fault Detection and Diagnosis in Induction Motor Drives' },
  // MECH
  { sno: 19, name: 'Dr. V. Vasu',                   dept: 'MECH', university: 'JNTUH',   year: 2009, thesis: 'Thermal Analysis of Composite Heat Exchangers' },
  { sno: 20, name: 'Dr. G. Nagamalleswara Rao',     dept: 'MECH', university: 'JNTUH',   year: 2011, thesis: 'Tribological Properties of Nano-Composite Coatings' },
  { sno: 21, name: 'Dr. P. Pandu Ranga Rao',        dept: 'MECH', university: 'JNTUH',   year: 2012, thesis: 'Optimization of CNC Machining Parameters for Titanium Alloys' },
  { sno: 22, name: 'Dr. M. Manzoor Hussain',        dept: 'MECH', university: 'JNTUH',   year: 2013, thesis: 'Characterization of Functionally Graded Materials by FEA' },
  { sno: 23, name: 'Dr. V. Madhusudhan Rao',        dept: 'MECH', university: 'JNTUH',   year: 2014, thesis: 'Vibration Analysis of Rotating Machinery Under Dynamic Loading' },
  { sno: 24, name: 'Dr. K. Ramji',                  dept: 'MECH', university: 'JNTUH',   year: 2015, thesis: 'Experimental Investigation of Heat Transfer in Corrugated Surfaces' },
  // CIVIL
  { sno: 25, name: 'Dr. K. Chandra Sekhar Reddy',  dept: 'CIVIL', university: 'JNTUH',  year: 2010, thesis: 'Behaviour of Reinforced Concrete Beams with GFRP Bars' },
  { sno: 26, name: 'Dr. B. Sarath Kumar',           dept: 'CIVIL', university: 'JNTUH',  year: 2012, thesis: 'Seismic Analysis of RC Frames with Irregularities' },
  { sno: 27, name: 'Dr. G. Srinivasa Rao',          dept: 'CIVIL', university: 'JNTUH',  year: 2014, thesis: 'Geotechnical Investigation of Expansive Soils in Hyderabad' },
  { sno: 28, name: 'Dr. M. Anjan Kumar',            dept: 'CIVIL', university: 'Osmania',year: 2015, thesis: 'Sustainable Construction Using Industrial Waste Materials' },
  // IT
  { sno: 29, name: 'Dr. P. Chandra Sekhar',         dept: 'IT', university: 'JNTUH',     year: 2013, thesis: 'Distributed Computing Models for Big Data Processing' },
  { sno: 30, name: 'Dr. V. Lakshmi Padmaja',        dept: 'IT', university: 'JNTUH',     year: 2015, thesis: 'Soft Computing Techniques for Network Anomaly Detection' },
  { sno: 31, name: 'Dr. T. Santosh Kumar',          dept: 'IT', university: 'JNTUH',     year: 2016, thesis: 'Blockchain-Based Security Frameworks for IoT Applications' },
  // H&S
  { sno: 32, name: 'Dr. M. Srinivasa Rao',          dept: 'H&S (Maths)', university: 'Osmania', year: 2008, thesis: 'Fixed Point Theorems in Fuzzy Metric Spaces' },
  { sno: 33, name: 'Dr. K. Srinivas',               dept: 'H&S (Physics)', university: 'Osmania',year: 2010, thesis: 'Structural and Optical Properties of ZnO Nanoparticles' },
  { sno: 34, name: 'Dr. P. Rama Devi',              dept: 'H&S (Chemistry)', university: 'Osmania',year: 2011, thesis: 'Synthesis and Characterization of Novel Schiff Base Metal Complexes' },
  { sno: 35, name: 'Dr. N. Rajani',                 dept: 'H&S (English)', university: 'Osmania', year: 2012, thesis: 'Post-Colonial Discourse in Contemporary Indian English Literature' },
];

const DEPTS = ['All', ...Array.from(new Set(PHD_FACULTY.map((f) => f.dept))).sort()];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function PhDFacultyPage() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? PHD_FACULTY : PHD_FACULTY.filter((f) => f.dept === filter);

  return (
    <AcademicsLayout title="Faculty with PhD Qualifications">

      <div className="flex items-center gap-4 mb-8 p-4 rounded-xl bg-gray-50 border border-gray-200">
        <span className="font-hind font-bold text-[32px]" style={{ color: college.primaryColor }}>60+</span>
        <div>
          <p className="font-hind font-bold text-[14px] text-gray-800">PhD-Qualified Faculty</p>
          <p className="font-dm-sans text-[12.5px] text-gray-500">Across all departments — driving research, publications, and academic excellence at GRIET</p>
        </div>
      </div>

      <SectionLabel>PhD Faculty Directory</SectionLabel>

      <div className="flex flex-wrap gap-2 mb-5">
        {DEPTS.map((d) => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className="px-3 py-1 rounded-full font-dm-sans text-[12px] font-semibold border transition-all"
            style={
              filter === d
                ? { backgroundColor: college.primaryColor, color: 'white', borderColor: college.primaryColor }
                : { backgroundColor: 'white', color: college.primaryColor, borderColor: `${college.primaryColor}40` }
            }
          >
            {d}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-[12.5px] font-dm-sans border-collapse">
          <thead>
            <tr style={{ backgroundColor: `${college.primaryColor}15` }}>
              {['S.No', 'Name', 'Department', 'University', 'Year', 'Thesis Title'].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(({ sno, name, dept, university, year, thesis }, i) => (
              <tr key={sno} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-2.5 text-gray-400 border-b border-gray-100 w-12">{sno}</td>
                <td className="px-4 py-2.5 font-medium border-b border-gray-100" style={{ color: college.primaryColor }}>{name}</td>
                <td className="px-4 py-2.5 text-gray-600 border-b border-gray-100">{dept}</td>
                <td className="px-4 py-2.5 text-gray-600 border-b border-gray-100">{university}</td>
                <td className="px-4 py-2.5 text-gray-600 border-b border-gray-100">{year}</td>
                <td className="px-4 py-2.5 text-gray-600 border-b border-gray-100">{thesis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 font-dm-sans text-[11.5px] text-gray-400">* Partial list shown. Full directory available at the office of the Dean – Research.</p>

    </AcademicsLayout>
  );
}
