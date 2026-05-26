import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const RARE_EBOOKS = [
  { title: 'Padmavati', href: 'https://www.griet.ac.in/images/rare/Padmavati.pdf' },
  { title: 'Bibliotheca India A Collection of oriental works', href: 'https://www.griet.ac.in/images/rare/Bibliotheca%20India%20A%20Collection%20of%20oriental%20works.pdf' },
  { title: 'A Cultural History of India', href: 'https://www.griet.ac.in/images/rare/A%20Cultural%20History%20of%20India.pdf' },
  { title: 'The Mughul Empire', href: 'https://www.griet.ac.in/images/rare/The%20Mughul%20Empire.pdf' },
  { title: 'The Wonder That Was India', href: 'https://www.griet.ac.in/images/rare/The%20Wonder%20That%20Was%20India.pdf' },
  { title: 'Journals of Indian History Vol-2', href: 'https://www.griet.ac.in/images/rare/Journals%20of%20Indian%20History%20Vol-2.pdf' },
  { title: 'The Administration of the East India Company', href: 'https://www.griet.ac.in/images/rare/The%20administration%20of%20the%20East%20India%20Company.pdf' },
  { title: 'The Padumawati', href: 'https://www.griet.ac.in/images/rare/The%20Padumawati.pdf' },
  { title: 'THE COLAS', href: 'https://www.griet.ac.in/images/rare/THE%20COLAS.pdf' },
  { title: 'Studies in the Puranic Records on Hindu Rites and Customs', href: 'https://www.griet.ac.in/images/rare/Studies%20in%20the%20Puranic%20Records%20on%20Hindu%20Rites%20and%20Customs.pdf' },
  { title: 'The English Factories in India', href: 'https://www.griet.ac.in/images/rare/The%20English%20Factories%20in%20India.pdf' },
  { title: 'The Treatment of Nature in Sangam Literature', href: 'https://www.griet.ac.in/images/rare/The%20Treatment%20of%20Nature%20in%20Sangam%20Literature.pdf' },
  { title: 'Castes and Tribes of Southern India', href: 'https://www.griet.ac.in/images/rare/Castes%20and%20Tribes%20of%20Southern%20India.pdf' },
  { title: 'The Markandeya Purana', href: 'https://www.griet.ac.in/images/rare/The%20Markandeya%20Purana.pdf' },
  { title: 'Gift of Horace W. Carpentier', href: 'https://www.griet.ac.in/images/rare/Gift%20of%20Horace%20W.Carpentier.pdf' },
  { title: 'A History of the Holy Shrine of Sri Venkatesa in Tirupati', href: 'https://www.griet.ac.in/images/rare/A%20History%20of%20the%20Holy%20Shrine%20of%20sri%20Venkatesa%20in%20Tirupati.pdf' },
  { title: 'The Heritage of India Series', href: 'https://www.griet.ac.in/images/rare/The%20Heritage%20of%20India%20Series.pdf' },
  { title: 'Kakatiya Nayaks — Their Contribution to Dakshinapatha\'s Independence', href: 'https://www.griet.ac.in/images/rare/Kakatiya%20Nayaks%20their%20constribution%20to%20dakshinapatha\'s%20independence.pdf' },
  { title: 'The Flight of Hanuman to Lanka via Sunda Islands', href: 'https://www.griet.ac.in/images/rare/The%20flight%20of%20Hanuman%20to%20Lanka%20via%20Sunda%20Islands.pdf' },
  { title: 'Padmavati — Albert Roussel', href: 'https://www.griet.ac.in/images/rare/Padmavati%20,%20Albert%20Roussel.pdf' },
  { title: 'The Religious Policy of the Mughal Emperors', href: 'https://www.griet.ac.in/images/rare/The%20Religious%20Policy%20of%20the%20Mughal%20Emperors.pdf' },
  { title: 'The Religious Life of India', href: 'https://www.griet.ac.in/images/rare/The%20Relegious%20Life%20of%20India.pdf' },
  { title: 'The Monetary System of India', href: 'https://www.griet.ac.in/images/rare/The%20Monetary%20System%20of%20India.pdf' },
  { title: 'The Good Old Bags of Honourable John Company', href: 'https://www.griet.ac.in/images/rare/The%20Good%20Old%20Bags%20of%20Honourable%20John%20Company.pdf' },
  { title: 'Mistress of Men', href: 'https://www.griet.ac.in/images/rare/Mistress%20of%20Men.pdf' },
  { title: 'The Growth of Currency Organisations in India', href: 'https://www.griet.ac.in/images/rare/The%20growth%20of%20Currency%20Organisations%20in%20India.pdf' },
  { title: 'Indian Finance Currency and Banking', href: 'https://www.griet.ac.in/images/rare/Indian%20Finance%20Currency%20and%20Banking.pdf' },
  { title: 'The History of Jahangir', href: 'https://www.griet.ac.in/images/rare/The%20History%20of%20Jahangir.pdf' },
  { title: 'Ancient India', href: 'https://www.griet.ac.in/images/rare/Ancient%20India.pdf' },
  { title: 'Gitanjali Facsimile of Original Manuscript', href: 'https://www.griet.ac.in/images/rare/Gitanjali%20Facsimile%20of%20original%20manuscript.pdf' },
  { title: 'Jahangir and The Jesuits', href: 'https://www.griet.ac.in/images/rare/Jahangir%20and%20The%20Jesuits.pdf' },
  { title: 'An Introduction to the History of Sufism', href: 'https://www.griet.ac.in/images/rare/An%20Introduction%20to%20the%20History%20of%20Sufism.pdf' },
  { title: 'The Reign of Aladdin Khilji', href: 'https://www.griet.ac.in/images/rare/The%20Reign%20of%20ALADDIN%20KHILJI.pdf' },
  { title: 'The Monetary Problems of India', href: 'https://www.griet.ac.in/images/rare/The%20Monetary%20Problems%20of%20India.pdf' },
  { title: 'The Purana Text of the Dynasties of the Kali Age', href: 'https://www.griet.ac.in/images/rare/The%20Purana%20Text%20of%20the%20Dynasties%20of%20the%20Kali%20Age.pdf' },
  { title: 'The Campaigns of Ala U\'D-Din Khilji', href: 'https://www.griet.ac.in/images/rare/The%20Campaigns%20of%20ALA%20U\'D-DIN%20KHILJI.pdf' },
  { title: 'British Beginnings in Western India', href: 'https://www.griet.ac.in/images/rare/British%20Beginnings%20in%20Western%20India.pdf' },
  { title: 'The Sethu and Rameshwaram', href: 'https://www.griet.ac.in/images/rare/The%20Sethu%20and%20Rameshwaram.pdf' },
  { title: 'The Religious Life of India (Vol. 2)', href: 'https://www.griet.ac.in/images/rare/39.pdf' },
  { title: 'The Embassy of Sir Thomas Roe to India Vol-2', href: 'https://www.griet.ac.in/images/rare/The%20Embassy%20of%20Sir%20Thomas%20Roe%20to%20India%20vol-2%20.pdf' },
  { title: 'Select Kakatiya Temples', href: 'https://www.griet.ac.in/images/rare/Select%20Kakatiya%20Temples.pdf' },
  { title: 'The Embassy of Sir Thomas Roe to India Vol-1', href: 'https://www.griet.ac.in/images/rare/The%20Embasy%20of%20Sir%20Thomas%20Roe%20to%20India%20vol%20-1.pdf' },
  { title: 'Economic Studies of the University of Chicago', href: 'https://www.griet.ac.in/images/rare/Economic%20Studies%20of%20the%20university%20of%20Chicago.pdf' },
  { title: 'Money', href: 'https://www.griet.ac.in/images/rare/Money.pdf' },
  { title: 'History of The Pallavas of Kanchi', href: 'https://www.griet.ac.in/images/rare/History%20of%20The%20pallavas%20of%20Kanchi.pdf' },
  { title: 'Iron and Steel in India', href: 'https://www.griet.ac.in/images/rare/Iron%20and%20Steel%20in%20India.pdf' },
  { title: 'The Founder of The Ahmadiyya Movement', href: 'https://www.griet.ac.in/images/rare/The%20Founder%20of%20The%20Ahmadiyya%20Movement.pdf' },
  { title: 'Pallavis', href: 'https://www.griet.ac.in/images/rare/Pallavis.pdf' },
  { title: 'The Compass of Truth', href: 'https://www.griet.ac.in/images/rare/The%20Compass%20of%20Truth.pdf' },
  { title: 'A Further Survey of Some Important Breeds of Cattle and Buffaloes in India', href: 'https://www.griet.ac.in/images/rare/A%20Further%20Survey%20of%20Some%20important%20Breeds%20of%20Cattle%20and%20Buffaloes%20in%20India.pdf' },
  { title: 'The Chola Temples', href: 'https://www.griet.ac.in/images/rare/The%20Chola%20Temples.pdf' },
  { title: 'Orientalism', href: 'https://www.griet.ac.in/images/rare/ORIENTALISM.pdf' },
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

export default function LibraryRareBooksPage() {
  return (
    <AcademicsLayout title="Library — Rare Books & Manuscripts">

      <section className="mb-10">
        <SectionLabel>Printed Collections</SectionLabel>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.griet.ac.in/images/Rarebooks.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md hover:border-transparent transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6 flex-shrink-0" style={{ color: college.primaryColor }}>
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <div>
              <p className="font-hind font-bold text-[13.5px]" style={{ color: college.primaryColor }}>Printed Rare Books</p>
              <p className="font-dm-sans text-[11.5px] text-gray-400">View collection PDF</p>
            </div>
          </a>
          <a
            href="https://www.griet.ac.in/images/1-s2.0-S2215098616303627-main.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md hover:border-transparent transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6 flex-shrink-0" style={{ color: college.primaryColor }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
            </svg>
            <div>
              <p className="font-hind font-bold text-[13.5px]" style={{ color: college.primaryColor }}>Manuscripts</p>
              <p className="font-dm-sans text-[11.5px] text-gray-400">View manuscripts PDF</p>
            </div>
          </a>
          <a
            href="http://indianmanuscripts.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md hover:border-transparent transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6 flex-shrink-0" style={{ color: college.primaryColor }}>
              <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <div>
              <p className="font-hind font-bold text-[13.5px]" style={{ color: college.primaryColor }}>indianmanuscripts.com</p>
              <p className="font-dm-sans text-[11.5px] text-gray-400">External resource</p>
            </div>
          </a>
        </div>
      </section>

      <section className="mb-6">
        <SectionLabel>Digital Rare E-Books ({RARE_EBOOKS.length} titles)</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {RARE_EBOOKS.map(({ title, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 p-3 rounded-lg border border-gray-200 bg-white hover:shadow-md hover:border-transparent transition-all group"
            >
              <span className="font-dm-sans text-[11px] text-gray-400 mt-0.5 flex-shrink-0 w-5">{i + 1}.</span>
              <span className="font-dm-sans text-[12px] font-medium text-gray-700 group-hover:underline leading-snug">
                {title}
              </span>
            </a>
          ))}
        </div>
      </section>

    </AcademicsLayout>
  );
}
