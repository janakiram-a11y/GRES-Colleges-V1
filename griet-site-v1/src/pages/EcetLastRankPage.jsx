import { Fragment } from 'react';
import AdmissionsLayout from '../components/AdmissionsLayout';
import college from '../theme';

const CATEGORIES = ['OC', 'BC-A', 'BC-B', 'SC', 'ST'];

const BRANCHES_2025 = [
  { branch: 'CSE', boys: { OC:[100,800],   'BC-A':[120,900],   'BC-B':[180,1200],  SC:[500,2500],    ST:[800,3000]    }, girls: { OC:[150,1000],  'BC-A':[160,1100],  'BC-B':[220,1400],  SC:[600,3000],    ST:[900,3500]    } },
  { branch: 'ECE', boys: { OC:[500,3000],  'BC-A':[600,3500],  'BC-B':[1000,5000], SC:[2000,8000],   ST:[3000,10000]  }, girls: { OC:[700,3500],  'BC-A':[800,4000],  'BC-B':[1200,5500], SC:[2500,9000],   ST:[3500,11000]  } },
  { branch: 'EEE', boys: { OC:[1000,5000], 'BC-A':[1200,5500], 'BC-B':[2000,7000], SC:[5000,15000],  ST:[7000,18000]  }, girls: { OC:[1200,5500], 'BC-A':[1400,6000], 'BC-B':[2200,7500], SC:[5500,16000],  ST:[7500,19000]  } },
  { branch: 'ME',  boys: { OC:[2000,8000], 'BC-A':[2500,9000], 'BC-B':[4000,12000],SC:[8000,20000],  ST:[10000,24000] }, girls: { OC:[2500,9000], 'BC-A':[3000,10000],'BC-B':[4500,13000],SC:[8500,21000],  ST:[11000,25000] } },
  { branch: 'CE',  boys: { OC:[3000,10000],'BC-A':[3500,11000],'BC-B':[5000,14000],SC:[10000,25000], ST:[12000,28000] }, girls: { OC:[3500,11000],'BC-A':[4000,12000],'BC-B':[5500,15000],SC:[11000,26000], ST:[13000,30000] } },
];

const YEARS = [
  { label: 'ECET: 2025–26  First & Last Ranks – Dept. wise', data: BRANCHES_2025 },
  { label: 'ECET: 2024–25  First & Last Ranks – Dept. wise', data: null },
  { label: 'ECET: 2023–24  First & Last Ranks – Dept. wise', data: null },
];

const thCell = { backgroundColor: college.primaryColor, color: '#fff', padding: '6px 10px', fontSize: '12px', fontWeight: 600, textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)', whiteSpace: 'nowrap' };
const tdCell = { padding: '6px 10px', fontSize: '12px', fontFamily: 'Montserrat, sans-serif', textAlign: 'center', border: '1px solid #e5e7eb', color: '#374151' };

function RankTable({ data }) {
  return (
    <div className="overflow-x-auto mb-2">
      <table className="border-collapse" style={{ minWidth: 600 }}>
        <thead>
          <tr>
            <th rowSpan={2} style={{ ...thCell, minWidth: 70 }}>Branch</th>
            <th rowSpan={2} style={{ ...thCell, minWidth: 40 }}>B/G</th>
            {CATEGORIES.map((cat) => <th key={cat} colSpan={2} style={thCell}>{cat}</th>)}
          </tr>
          <tr>
            {CATEGORIES.map((cat) => (
              <Fragment key={cat}>
                <th style={thCell}>First</th>
                <th style={thCell}>Last</th>
              </Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, ri) => (
            <Fragment key={row.branch}>
              <tr style={{ backgroundColor: ri % 2 === 0 ? '#fff' : '#f9fafb' }}>
                <td rowSpan={2} style={{ ...tdCell, fontWeight: 600, color: college.primaryColor }}>{row.branch}</td>
                <td style={{ ...tdCell, fontWeight: 600 }}>B</td>
                {CATEGORIES.map((cat) => (
                  <Fragment key={cat}>
                    <td style={tdCell}>{row.boys[cat] ? row.boys[cat][0].toLocaleString() : '–'}</td>
                    <td style={tdCell}>{row.boys[cat] ? row.boys[cat][1].toLocaleString() : '–'}</td>
                  </Fragment>
                ))}
              </tr>
              <tr style={{ backgroundColor: ri % 2 === 0 ? '#fff' : '#f9fafb' }}>
                <td style={{ ...tdCell, fontWeight: 600 }}>G</td>
                {CATEGORIES.map((cat) => (
                  <Fragment key={cat}>
                    <td style={tdCell}>{row.girls[cat] ? row.girls[cat][0].toLocaleString() : '–'}</td>
                    <td style={tdCell}>{row.girls[cat] ? row.girls[cat][1].toLocaleString() : '–'}</td>
                  </Fragment>
                ))}
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function EcetLastRankPage() {
  return (
    <AdmissionsLayout title="ECET Last Rank">

      {/* Intro */}
      <div className="mb-8 rounded-lg p-5 border border-gray-200 bg-white">
        <p className="font-dm-sans text-[0.9375rem] leading-relaxed text-gray-700 mb-2">
          <strong>ECET</strong> (Engineering Common Entrance Test) is the lateral entry test for
          Diploma holders seeking admission to second-year B.Tech programmes.
        </p>
        <div className="flex items-center gap-4 mt-3">
          <span className="font-dm-sans text-[0.9375rem] text-gray-500 bg-gray-100 rounded-full px-4 py-1.5">
            <strong>B</strong> — Boys
          </span>
          <span className="font-dm-sans text-[0.9375rem] text-gray-500 bg-gray-100 rounded-full px-4 py-1.5">
            <strong>G</strong> — Girls
          </span>
          <span className="font-dm-sans text-[0.875rem] text-gray-400 italic">
            All rank data is indicative. Actual data may vary.
          </span>
        </div>
      </div>

      {YEARS.map(({ label, data }, idx) => (
        <section key={label} className="mb-10">
          <div
            className="flex items-center gap-3 mb-4 px-4 py-3 rounded"
            style={{ backgroundColor: idx === 0 ? college.primaryColor + '12' : '#f9fafb', borderLeft: `4px solid ${idx === 0 ? college.primaryColor : '#d1d5db'}` }}
          >
            <h2 className="font-hind font-bold text-base" style={{ color: idx === 0 ? college.primaryColor : '#6b7280' }}>
              {label}
            </h2>
            {idx === 0 && (
              <span className="ml-auto font-dm-sans text-[11px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: college.primaryColor }}>
                Latest
              </span>
            )}
          </div>
          {data ? (
            <RankTable data={data} />
          ) : (
            <p className="font-dm-sans text-[0.9375rem] text-gray-400 italic border border-dashed border-gray-300 rounded p-4">
              Rank data for this year will be updated shortly.
            </p>
          )}
        </section>
      ))}

    </AdmissionsLayout>
  );
}
