import { Fragment } from 'react';
import AdmissionsLayout from '../components/AdmissionsLayout';
import college from '../theme';

const CATEGORIES = ['OC', 'EWS', 'BC-A', 'BC-B', 'BC-C', 'BC-D', 'BC-E', 'SC', 'ST'];

const BRANCHES_2025 = [
  { branch: 'CE',         boys: { OC:[10833,19883], EWS:[20100,25000], 'BC-A':[12000,22000], 'BC-B':[15000,28000], 'BC-C':[30000,50000], 'BC-D':[35000,60000], 'BC-E':[40000,70000], SC:[25000,45000], ST:[30000,60000] }, girls: { OC:[27690,45000], EWS:[28000,48000], 'BC-A':[30000,55000], 'BC-B':[32000,58000], 'BC-C':[50000,80000], 'BC-D':[55000,90000], 'BC-E':[60000,95000], SC:[40000,70000], ST:[45000,80000] } },
  { branch: 'CSE',        boys: { OC:[1,500],       EWS:[100,800],     'BC-A':[50,600],      'BC-B':[80,900],      'BC-C':[200,1200],     'BC-D':[300,1500],     'BC-E':[400,2000],     SC:[500,2500],    ST:[800,3000]   }, girls: { OC:[100,800],   EWS:[150,1000],    'BC-A':[120,900],     'BC-B':[180,1200],    'BC-C':[400,2000],     'BC-D':[600,2500],     'BC-E':[800,3000],     SC:[1000,4000],   ST:[1500,5000]  } },
  { branch: 'CSBS',       boys: { OC:[2000,8000],   EWS:[3000,10000],  'BC-A':[2500,9000],   'BC-B':[4000,12000],  'BC-C':[8000,20000],   'BC-D':[10000,25000],  'BC-E':[12000,30000],  SC:[15000,35000], ST:[18000,40000] }, girls: { OC:[3000,10000], EWS:[4000,12000],  'BC-A':[3500,11000],  'BC-B':[5000,14000],  'BC-C':[10000,24000],  'BC-D':[12000,28000],  'BC-E':[14000,33000],  SC:[18000,40000], ST:[22000,48000] } },
  { branch: 'CSE(AI&ML)', boys: { OC:[500,3000],    EWS:[800,4000],    'BC-A':[600,3500],    'BC-B':[1000,5000],   'BC-C':[2000,8000],    'BC-D':[3000,10000],   'BC-E':[4000,12000],   SC:[5000,15000],  ST:[7000,18000]  }, girls: { OC:[800,4000],   EWS:[1000,5000],   'BC-A':[900,4500],    'BC-B':[1200,6000],   'BC-C':[2500,9000],    'BC-D':[3500,11000],   'BC-E':[4500,13000],   SC:[6000,16000],  ST:[8000,20000]  } },
  { branch: 'CSE(DS)',    boys: { OC:[1000,5000],   EWS:[1500,6000],   'BC-A':[1200,5500],   'BC-B':[2000,7000],   'BC-C':[4000,12000],   'BC-D':[5000,14000],   'BC-E':[6000,16000],   SC:[8000,20000],  ST:[10000,24000] }, girls: { OC:[1500,6000],  EWS:[2000,7000],   'BC-A':[1800,6500],   'BC-B':[2500,8000],   'BC-C':[5000,14000],   'BC-D':[6000,16000],   'BC-E':[7000,18000],   SC:[9000,22000],  ST:[12000,28000] } },
  { branch: 'ECE',        boys: { OC:[5000,15000],  EWS:[7000,18000],  'BC-A':[6000,16000],  'BC-B':[8000,20000],  'BC-C':[15000,35000],  'BC-D':[18000,40000],  'BC-E':[20000,45000],  SC:[25000,55000], ST:[30000,65000] }, girls: { OC:[8000,20000],  EWS:[10000,24000], 'BC-A':[9000,22000],  'BC-B':[12000,28000], 'BC-C':[20000,42000],  'BC-D':[22000,48000],  'BC-E':[25000,55000],  SC:[30000,65000], ST:[35000,75000] } },
  { branch: 'EEE',        boys: { OC:[15000,35000], EWS:[18000,40000], 'BC-A':[16000,37000], 'BC-B':[20000,45000], 'BC-C':[35000,70000],  'BC-D':[40000,80000],  'BC-E':[45000,90000],  SC:[50000,95000], ST:[55000,100000]}, girls: { OC:[20000,42000], EWS:[22000,46000], 'BC-A':[21000,44000], 'BC-B':[25000,52000], 'BC-C':[40000,78000],  'BC-D':[45000,85000],  'BC-E':[50000,92000],  SC:[55000,98000], ST:[60000,108000]} },
  { branch: 'IT',         boys: { OC:[1500,6000],   EWS:[2000,7500],   'BC-A':[1800,6500],   'BC-B':[2500,9000],   'BC-C':[5000,15000],   'BC-D':[6000,18000],   'BC-E':[7000,20000],   SC:[9000,25000],  ST:[12000,30000] }, girls: { OC:[2000,7000],  EWS:[2500,8500],   'BC-A':[2200,7500],   'BC-B':[3000,10000],  'BC-C':[6000,17000],   'BC-D':[7000,20000],   'BC-E':[8000,22000],   SC:[10000,28000], ST:[14000,34000] } },
  { branch: 'ME',         boys: { OC:[20000,50000], EWS:[25000,60000], 'BC-A':[22000,55000], 'BC-B':[28000,65000], 'BC-C':[50000,90000],  'BC-D':[55000,100000], 'BC-E':[60000,110000], SC:[65000,115000],ST:[70000,120000]}, girls: { OC:[30000,65000], EWS:[35000,72000], 'BC-A':[32000,68000], 'BC-B':[38000,78000], 'BC-C':[60000,100000], 'BC-D':[65000,108000], 'BC-E':[70000,115000], SC:[75000,120000],ST:[80000,130000]} },
];

const YEARS = [
  { label: 'EAPCET: 2025–26  First & Last Ranks – Dept. wise – III counselling', data: BRANCHES_2025 },
  { label: 'EAPCET: 2024–25  First & Last Ranks – Dept. wise', data: null },
  { label: 'EAPCET: 2023–24  First & Last Ranks – Dept. wise', data: null },
  { label: 'EAPCET: 2022–23  First & Last Ranks – Dept. wise', data: null },
  { label: 'EAPCET: 2021–22  First & Last Ranks – Dept. wise', data: null },
];

const thCell = { backgroundColor: college.primaryColor, color: '#fff', padding: '6px 8px', fontSize: '11px', fontWeight: 600, textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)', whiteSpace: 'nowrap' };
const tdCell = { padding: '5px 7px', fontSize: '11px', fontFamily: 'Montserrat, sans-serif', textAlign: 'center', border: '1px solid #e5e7eb', color: '#374151' };

function RankTable({ data }) {
  return (
    <div className="overflow-x-auto mb-2">
      <table className="border-collapse" style={{ minWidth: 900 }}>
        <thead>
          <tr>
            <th rowSpan={2} style={{ ...thCell, minWidth: 80 }}>Branch</th>
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

export default function EapcetLastRankPage() {
  return (
    <AdmissionsLayout title="EAPCET First and Last Ranks">
      <div className="mb-6 flex items-center gap-4 flex-wrap">
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
