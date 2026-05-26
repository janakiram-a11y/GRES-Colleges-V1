import { useState } from 'react';
import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const CONFERENCES = [
  { dept: 'Mechanical Engineering',  name: '8th ICMPC',      year: 2018, dates: 'Mar 16–18',    location: 'GRIET, Hyderabad',              site: 'icmpc.com' },
  { dept: 'CSE',                     name: 'ICWSNUCA',        year: 2018, dates: 'Aug 24–25',    location: 'GRIET, Hyderabad',              site: 'icwsnuca.com' },
  { dept: 'EEE',                     name: 'SeFet',           year: 2019, dates: 'Feb 14–16',    location: 'GRIET, Hyderabad',              site: 'sefet.in' },
  { dept: 'Mechanical Engineering',  name: '9th ICMPC',       year: 2019, dates: 'Mar 8–10',     location: 'GRIET, Hyderabad',              site: 'icmpc.com' },
  { dept: 'Civil Engineering',       name: 'ICONCEAS',        year: 2020, dates: 'Feb 28–29',    location: 'GRIET, Hyderabad',              site: 'iconceas.com' },
  { dept: 'Civil Engineering',       name: 'RICEM',           year: 2020, dates: 'Aug 17',       location: 'GRIET, Hyderabad',              site: '' },
  { dept: 'ECE',                     name: 'ACCESS',          year: 2020, dates: 'Sep 18–19',    location: 'GRIET, Hyderabad',              site: '' },
  { dept: 'ME & EEE',                name: 'ICMED',           year: 2020, dates: 'Jul 10–12',    location: 'GRIET, Hyderabad',              site: 'icmed.co.in' },
  { dept: 'Mechanical Engineering',  name: '11th ICMPC',      year: 2020, dates: 'Dec 15–17',    location: 'IIT Indore',                   site: 'icmpc.com' },
  { dept: 'EEE',                     name: 'IEEE SeFeT',      year: 2021, dates: 'Jan 21–23',    location: 'GRIET, Hyderabad',              site: 'sefet.in' },
  { dept: 'CSE',                     name: 'ICWSNUCA',        year: 2021, dates: 'Feb 25–27',    location: 'GRIET, Hyderabad',              site: 'icwsnuca.com' },
  { dept: 'Civil Engineering',       name: 'ICONCEAS',        year: 2021, dates: 'Sep 2–4',      location: 'GRIET, Hyderabad',              site: 'iconceas.com' },
  { dept: 'ME & EEE',                name: 'ICMED-ICMPC',     year: 2021, dates: 'Sep 24–26',    location: 'GRIET, Hyderabad',              site: 'icmed.co.in' },
  { dept: 'Mechanical Engineering',  name: '12th ICMPC',      year: 2021, dates: 'Oct 6–9',      location: 'NITTTR, Chandigarh',           site: 'icmpc.com' },
  { dept: 'Humanities & Sciences',   name: 'NPLPIC',          year: 2022, dates: 'Feb 11–12',    location: 'GRIET, Hyderabad',              site: '' },
  { dept: 'Civil Engineering',       name: 'RICE',            year: 2022, dates: 'Feb 26',       location: 'GRIET, Hyderabad',              site: '' },
  { dept: 'CSE/IT',                  name: 'ICICIAC',         year: 2022, dates: 'Mar 25–26',    location: 'GRIET, Hyderabad',              site: '' },
  { dept: 'Mechanical Engineering',  name: '13th ICMPC',      year: 2022, dates: 'Apr 22–24',    location: 'GRIET, Hyderabad',              site: 'icmpc.com' },
  { dept: 'Mechanical Engineering',  name: '10th ICMPC',      year: 2022, dates: 'Aug 4–6',      location: 'GLA University, Mathura',       site: 'icmpc.com' },
  { dept: 'EEE',                     name: 'IEEE SeFeT',      year: 2022, dates: 'Aug 4–6',      location: 'GRIET, Hyderabad',              site: 'sefet.in' },
  { dept: 'Mechanical Engineering',  name: '14th ICMPC',      year: 2023, dates: 'Mar 24–26',    location: 'GRIET, Hyderabad',              site: 'icmpc.com' },
  { dept: 'Civil Engineering',       name: 'RICE',            year: 2023, dates: 'Apr 17–18',    location: 'GRIET, Hyderabad',              site: '' },
  { dept: 'ME & EEE',                name: 'ICMED-ICMPC',     year: 2023, dates: 'May 19–20',    location: 'GRIET, Hyderabad',              site: 'icmed.co.in' },
  { dept: 'Mechanical Engineering',  name: '15th ICMPC',      year: 2023, dates: 'Sep 5–8',      location: 'Northumbria University, Newcastle', site: 'icmpc.com' },
  { dept: 'EEE',                     name: 'ICMED',           year: 2023, dates: 'Nov 30–Dec 2', location: 'GRIET, Hyderabad',              site: 'icmed.co.in' },
  { dept: 'Mechanical Engineering',  name: '16th ICMPC',      year: 2024, dates: 'Jun 27–29',    location: 'Nirma University, Gujarat',    site: 'icmpc.com' },
  { dept: 'EEE',                     name: 'IEEE SeFeT',      year: 2024, dates: 'Jul 31–Aug 3', location: 'GRIET, Hyderabad',              site: 'sefet.in' },
  { dept: 'ME & EEE',                name: 'ICMED',           year: 2024, dates: 'Oct 25–27',    location: 'GRIET, Hyderabad',              site: 'icmed.co.in' },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>{children}</h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function ConferencesPage() {
  const [filter, setFilter] = useState('All');
  const years = ['All', ...Array.from(new Set(CONFERENCES.map((c) => c.year))).sort((a, b) => b - a)];
  const filtered = filter === 'All' ? CONFERENCES : CONFERENCES.filter((c) => c.year === Number(filter));

  return (
    <AcademicsLayout title="National & International Conferences">

      <div className="flex items-center gap-3 mb-8 p-4 rounded-xl bg-gray-50 border border-gray-200">
        <span className="font-hind font-bold text-[32px]" style={{ color: college.primaryColor }}>29+</span>
        <div>
          <p className="font-hind font-bold text-[14px] text-gray-800">Conferences Organized / Co-organized</p>
          <p className="font-dm-sans text-[12.5px] text-gray-500">National and International conferences hosted at GRIET and partner institutions (2018–2024)</p>
        </div>
      </div>

      <SectionLabel>Conference Directory</SectionLabel>

      {/* Year filter */}
      <div className="flex flex-wrap gap-2 mb-5">
        {years.map((y) => (
          <button
            key={y}
            onClick={() => setFilter(String(y))}
            className="px-3 py-1 rounded-full font-dm-sans text-[12px] font-semibold border transition-all"
            style={
              String(filter) === String(y)
                ? { backgroundColor: college.primaryColor, color: 'white', borderColor: college.primaryColor }
                : { backgroundColor: 'white', color: college.primaryColor, borderColor: `${college.primaryColor}40` }
            }
          >
            {y}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-[12.5px] font-dm-sans border-collapse">
          <thead>
            <tr style={{ backgroundColor: `${college.primaryColor}15` }}>
              {['Department', 'Conference', 'Year', 'Dates', 'Venue'].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{c.dept}</td>
                <td className="px-4 py-3 font-medium border-b border-gray-100" style={{ color: college.primaryColor }}>
                  {c.site ? (
                    <a href={`https://www.${c.site}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{c.name}</a>
                  ) : c.name}
                </td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{c.year}</td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{c.dates}</td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{c.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </AcademicsLayout>
  );
}
