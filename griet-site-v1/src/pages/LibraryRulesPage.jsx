import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const RULES = [
  {
    heading: 'Operating Hours & Access',
    items: [
      'Library is open 8:00 AM – 8:00 PM on all college working days.',
      'Members must register upon entry by completing the visitor log.',
      'The library remains closed during institutional holidays (open 10:00 AM – 3:00 PM on select holidays).',
    ],
  },
  {
    heading: 'Conduct',
    items: [
      'Strict and absolute silence shall be observed in the Library.',
      'Mobile devices must be powered off or kept on silent.',
      'Bags, large handbags, raincoats, and casual outerwear are not permitted inside.',
      'Personal valuables should not be left unattended; the institution assumes no liability for lost items.',
    ],
  },
  {
    heading: 'Book Borrowing',
    items: [
      'Books are issued exclusively against valid student or staff identity cards.',
      'Borrowed materials cannot be brought back into the library for additional checkout.',
      'No sub-lending of books is permitted.',
      'Renewal requires physical book presentation; a maximum of one renewal is allowed.',
      'Reference materials, magazines, and journals remain non-circulating.',
    ],
  },
  {
    heading: 'Damage & Loss',
    items: [
      'Members causing damage must either replace the item or compensate at double the current market price plus handling fees, as determined by the librarian.',
    ],
  },
  {
    heading: 'Overdue & Fine Structure',
    items: [
      'Late returns incur a fine of ₹1 per day with no examination period exemptions.',
    ],
  },
  {
    heading: 'No-Dues',
    items: [
      'Completion of all library obligations is mandatory before final project submission or college departure.',
    ],
  },
];

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

export default function LibraryRulesPage() {
  return (
    <AcademicsLayout title="Library — Rules & Regulations">

      <SectionLabel>Rules and Regulations</SectionLabel>

      <div className="flex flex-col gap-6">
        {RULES.map(({ heading, items }) => (
          <div key={heading} className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <p className="font-hind font-bold text-[14px] mb-3" style={{ color: college.primaryColor }}>
              {heading}
            </p>
            <ul className="flex flex-col gap-2">
              {items.map((rule, i) => (
                <li key={i} className="flex items-start gap-2 font-dm-sans text-[12.5px] text-gray-700">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </AcademicsLayout>
  );
}
