import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const BASE = 'https://www.griet.ac.in/';

const DOCUMENTS = [
  {
    sno: 1, name: 'IEEE Receipt',
    years: {
      '2020-21': `${BASE}2022/docs/E-%20Resources%20Documents%201%29%20IEEE%20Payment%20Payment%20Reciept%202020-21.pdf`,
      '2021-22': null,
      '2022-23': `${BASE}2023/E-%20Resources%20Documents%201%29%20IEEE%20Payment%20Payment%20Reciept%202022-23.pdf`,
      '2023-24': `${BASE}2024/IEEE.pdf`,
    },
  },
  {
    sno: 2, name: 'Elsevier Science Direct',
    years: {
      '2020-21': `${BASE}2022/docs/E-%20Resources%20Documents%202%29%20Elesevier%20Science%20Direct%20Payment%20Reciept%202020-21.pdf`,
      '2021-22': null, '2022-23': null, '2023-24': null,
    },
  },
  {
    sno: 3, name: 'ASCE',
    years: {
      '2020-21': `${BASE}2022/docs/E-%20Resources%20Documents%203%29%20ASCE%20Payment%20Reciept%202020-21.pdf`,
      '2021-22': null, '2022-23': null, '2023-24': null,
    },
  },
  {
    sno: 4, name: 'ASME',
    years: {
      '2020-21': `${BASE}2022/docs/E-%20Resources%20Documents%204%29%20ASME%20Payment%20Reciept%202020-21.pdf`,
      '2021-22': null, '2022-23': null, '2023-24': null,
    },
  },
  {
    sno: 5, name: 'JGATE',
    years: {
      '2020-21': `${BASE}2022/docs/E-%20Resources%20Documents%205%29%20J%20Gate%20Payment%20Reciept%202020-21.pdf`,
      '2021-22': `${BASE}2022/docs/E-%20Resources%20Documents%205%29%20J%20Gate%20Payment%20Receipt%202021-22.pdf`,
      '2022-23': `${BASE}2023/E-%20Resources%20Documents%205%29%20J%20Gate%20Payment%20Receipt%202022-23.pdf`,
      '2023-24': `${BASE}2024/J-Gate.pdf`,
    },
  },
  {
    sno: 6, name: 'DELNET',
    years: {
      '2020-21': `${BASE}2022/docs/E-%20Resources%20Documents%206%29%20Delnet%20Payment%20Reciept%202020-21.pdf`,
      '2021-22': `${BASE}2022/docs/E-%20Resources%20Documents%206%29%20Delnet%20Payment%20Receipt%202021-22.pdf`,
      '2022-23': `${BASE}2023/E-%20Resources%20Documents%206%29%20Delnet%20Payment%20Receipt%202022-23.pdf`,
      '2023-24': `${BASE}2024/DELNET.pdf`,
    },
  },
  {
    sno: 7, name: 'Knimbus Digital Library',
    years: {
      '2020-21': `${BASE}2022/docs/E-%20Resources%20Documents%207%29%20Knimbus%20Digital%20Library%20Payment%20Reciept%202020-21.pdf`,
      '2021-22': `${BASE}2022/docs/E-%20Resources%20Documents%207%29%20Knimbus%20Remote%20Acess%20Payment%20Receipts%202021-22.pdf`,
      '2022-23': `${BASE}2023/E-%20Resources%20Documents%207%29%20Knimbus%20Remote%20Acess%20Payment%20Receipts%202022-23.pdf`,
      '2023-24': `${BASE}2024/Knimbus.pdf`,
    },
  },
  {
    sno: 8, name: 'E-Shodh Sindhu N-List',
    years: {
      '2020-21': `${BASE}2022/docs/E-%20Resources%20Documents%208%29%20E-Shodh%20Sindhu%20N-List%20Payment%20Receipt%202021-22.pdf`,
      '2021-22': null,
      '2022-23': `${BASE}2023/E-%20Resources%20Documents%208%29%20E-Shodh%20Sindhu%20N-List%20Payment%20Receipt%202022-23.pdf`,
      '2023-24': `${BASE}2024/N-List.pdf`,
    },
  },
];

const YEAR_COLS = ['2020-21', '2021-22', '2022-23', '2023-24'];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="font-hind font-bold text-[17px] whitespace-nowrap" style={{ color: college.primaryColor }}>
        {children}
      </h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export default function LibraryEResourcesDocPage() {
  return (
    <AcademicsLayout title="Library — E-Resources Documents">

      <SectionLabel>Payment Receipts</SectionLabel>
      <p className="font-dm-sans text-[13px] text-gray-500 mb-6">
        Click any year link to view the corresponding payment receipt PDF.
      </p>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-[12.5px] font-dm-sans border-collapse">
          <thead>
            <tr style={{ backgroundColor: `${college.primaryColor}15` }}>
              <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200 w-8">S.No</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Resource</th>
              {YEAR_COLS.map((y) => (
                <th key={y} className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">{y}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DOCUMENTS.map(({ sno, name, years }, i) => (
              <tr key={sno} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 text-gray-500 border-b border-gray-100">{sno}</td>
                <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{name}</td>
                {YEAR_COLS.map((y) => (
                  <td key={y} className="px-4 py-3 text-center border-b border-gray-100">
                    {years[y] ? (
                      <a
                        href={years[y]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold hover:underline"
                        style={{ color: college.accentColor }}
                      >
                        PDF
                      </a>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </AcademicsLayout>
  );
}
