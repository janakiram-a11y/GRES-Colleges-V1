import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const regulations = [
  { sno: 1,  year: '1997-98', i: 'OR',   ii: '',     iii: '',     iv: ''     },
  { sno: 2,  year: '1998-99', i: 'OR',   ii: 'OR',   iii: '',     iv: ''     },
  { sno: 3,  year: '1999-00', i: 'NR',   ii: 'OR',   iii: 'OR',   iv: ''     },
  { sno: 4,  year: '2000-01', i: 'NR',   ii: 'NR',   iii: 'OR',   iv: 'OR'   },
  { sno: 5,  year: '2001-02', i: 'NR',   ii: 'NR',   iii: 'NR',   iv: 'OR'   },
  { sno: 6,  year: '2002-03', i: 'RR',   ii: 'NR',   iii: 'NR',   iv: 'NR'   },
  { sno: 7,  year: '2003-04', i: 'RR',   ii: 'RR',   iii: 'NR',   iv: 'NR'   },
  { sno: 8,  year: '2004-05', i: 'RR',   ii: 'RR',   iii: 'RR',   iv: 'NR'   },
  { sno: 9,  year: '2005-06', i: 'R05',  ii: 'RR',   iii: 'RR',   iv: 'RR'   },
  { sno: 10, year: '2006-07', i: 'R05',  ii: 'R05',  iii: 'RR',   iv: 'RR'   },
  { sno: 11, year: '2007-08', i: 'R07',  ii: 'R05',  iii: 'R05',  iv: 'RR'   },
  { sno: 12, year: '2008-09', i: 'R07',  ii: 'R07',  iii: 'R05',  iv: 'R05'  },
  { sno: 13, year: '2009-10', i: 'R09',  ii: 'R07',  iii: 'R07',  iv: 'R05'  },
  { sno: 14, year: '2010-11', i: 'R09',  ii: 'R09',  iii: 'R07',  iv: 'R07'  },
  { sno: 15, year: '2011-12', i: 'GR11', ii: 'R09',  iii: 'R09',  iv: 'R07'  },
  { sno: 16, year: '2012-13', i: 'GR11', ii: 'GR11', iii: 'R09',  iv: 'R09'  },
  { sno: 17, year: '2013-14', i: 'GR11', ii: 'GR11', iii: 'GR11', iv: 'R09'  },
  { sno: 18, year: '2014-15', i: 'GR14', ii: 'GR11', iii: 'GR11', iv: 'GR11' },
  { sno: 19, year: '2015-16', i: 'GR15', ii: 'GR14', iii: 'GR11', iv: 'GR11' },
  { sno: 20, year: '2016-17', i: 'GR17', ii: 'GR15', iii: 'GR14', iv: 'GR11' },
  { sno: 21, year: '2017-18', i: 'GR17', ii: 'GR15', iii: 'GR15', iv: 'GR14' },
  { sno: 22, year: '2018-19', i: 'GR18', ii: 'GR17', iii: 'GR15', iv: 'GR15' },
  { sno: 23, year: '2019-20', i: 'GR18', ii: 'GR18', iii: 'GR17', iv: 'GR15' },
  { sno: 24, year: '2020-21', i: 'GR20', ii: 'GR18', iii: 'GR18', iv: 'GR17' },
  { sno: 25, year: '2021-22', i: 'GR20', ii: 'GR20', iii: 'GR18', iv: 'GR18' },
  { sno: 26, year: '2022-23', i: 'GR22', ii: 'GR20', iii: 'GR20', iv: 'GR18' },
  { sno: 27, year: '2023-24', i: 'GR22', ii: 'GR22', iii: 'GR20', iv: 'GR20' },
  { sno: 28, year: '2024-25', i: 'GR24', ii: 'GR22', iii: 'GR22', iv: 'GR20' },
];

const thStyle = {
  backgroundColor: college.primaryColor,
  color: '#fff',
  padding: '11px 18px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '13px',
  fontWeight: 600,
  textAlign: 'center',
  borderRight: '1px solid rgba(255,255,255,0.15)',
};

const tdBase = {
  padding: '9px 18px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '13px',
  border: '1px solid #e5e7eb',
  textAlign: 'center',
};

const latestCodes = new Set(['GR24', 'GR22']);

function RegCell({ code }) {
  if (!code) return <td style={{ ...tdBase, color: '#d1d5db' }}>—</td>;
  const isLatest = latestCodes.has(code);
  return (
    <td style={{ ...tdBase, color: college.primaryColor, fontWeight: isLatest ? 700 : 500 }}>
      <a href="#" className="hover:underline">{code}</a>
    </td>
  );
}

export default function RegulationsPage() {
  const latest = regulations[regulations.length - 1];
  return (
    <AcademicsLayout title="Regulations">

      {/* Current regulation highlight */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'I Year (2024-25)', code: latest.i },
          { label: 'II Year (2024-25)', code: latest.ii },
          { label: 'III Year (2024-25)', code: latest.iii },
          { label: 'IV Year (2024-25)', code: latest.iv },
        ].map(({ label, code }) => (
          <div key={label} className="rounded-lg p-4 text-center" style={{ backgroundColor: '#f9f5f6', border: `1px solid ${college.primaryColor}22` }}>
            <div className="font-hind font-bold text-[22px] leading-none mb-1" style={{ color: college.primaryColor }}>{code}</div>
            <div className="font-dm-sans text-[11px] text-gray-500 font-medium mt-1">{label}</div>
          </div>
        ))}
      </div>

      <p className="font-dm-sans text-[13px] text-gray-500 italic mb-5">
        Regulation codes applicable to B.Tech students based on their year of admission (1997-98 to present).
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb' }}>
          <thead>
            <tr>
              <th style={thStyle}>S.No</th>
              <th style={thStyle}>Academic Year</th>
              <th style={thStyle}>I Year</th>
              <th style={thStyle}>II Year</th>
              <th style={thStyle}>III Year</th>
              <th style={thStyle}>IV Year</th>
            </tr>
          </thead>
          <tbody>
            {regulations.map((row, i) => {
              const isRecent = i >= regulations.length - 4;
              return (
                <tr
                  key={row.sno}
                  style={{ backgroundColor: isRecent ? `${college.primaryColor}08` : i % 2 === 0 ? '#ffffff' : '#f9fafb' }}
                >
                  <td style={{ ...tdBase, color: '#9ca3af' }}>{row.sno}</td>
                  <td style={{ ...tdBase, fontWeight: isRecent ? 700 : 500, color: isRecent ? college.primaryColor : '#374151' }}>
                    {row.year}
                  </td>
                  <RegCell code={row.i} />
                  <RegCell code={row.ii} />
                  <RegCell code={row.iii} />
                  <RegCell code={row.iv} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </AcademicsLayout>
  );
}
