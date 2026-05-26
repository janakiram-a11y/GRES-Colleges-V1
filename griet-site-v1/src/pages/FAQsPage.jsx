import { useState } from 'react';
import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const { primaryColor, accentColor } = college;

const faqs = [
  {
    q: 'What is Industry 4.0?',
    a: 'Industry 4.0 is often used interchangeably with the notion of the fourth industrial revolution. Industry 4.0 refers to the intelligent networking of machines and processes for industry with the help of information and communication technology.',
  },
  {
    q: 'What changes in curriculum to meet Industry 4.0 requirements?',
    a: 'Industry 4.0 involves digital transformation across sectors. Critical disciplines include IoT, Cyber Security, Augmented Reality, Big Data, Autonomous robots, Additive manufacturing, simulation, and cloud computing. GRIET augments existing coursework with audit courses covering current industry skills and introduced new GR22 regulations beginning 2022-23 to prepare students for Industry 4.0 demands.',
  },
  {
    q: 'What are the new programmes introduced?',
    a: 'Beginning academic year 2023-24, GRIET launched B.Tech CSE (Artificial Intelligence) and B.Tech CSIT to address Industry 4.0 needs and prepare students for emerging technology careers.',
  },
  {
    q: 'What are their opportunities?',
    a: 'Graduates pursue careers as Product Analyst, Machine Learning Engineer, Decision Scientist, Information Security Analyst, Network Architect in IT/ITES sectors. These programmes open doors to high-demand roles in AI, data science, and cybersecurity.',
  },
  {
    q: 'What is affiliation and autonomous status?',
    a: 'Affiliation allows universities to grant institutions permission to conduct programmes per university curriculum. Autonomous institutions (granted by UGC) design their own curriculum, regulations, examinations, and declare results while remaining affiliated to universities for degree conferral.',
  },
  {
    q: 'Who issues the degree to GRIET students?',
    a: 'GRIET, since its establishment in 1997, is affiliated to JNTUH (Jawaharlal Nehru Technological University, Hyderabad) with autonomous status extended through 2030–31. JNTUH confers the final degrees to all GRIET graduates.',
  },
  {
    q: 'Who regulates GRIET engineering programmes?',
    a: 'AICTE (All India Council for Technical Education) approves programmes; JNTU Hyderabad provides university affiliation; Telangana State Higher Education Council recognizes GRIET; the State Fee Regulatory Committee determines fees for the institution.',
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <AcademicsLayout title="FAQs">
      <div className="space-y-6">

        {/* Intro */}
        <p className="font-dm-sans text-[14px] leading-relaxed text-gray-600 max-w-2xl">
          Find answers to commonly asked questions about GRIET's programmes, academic structure,
          accreditations, and industry-focused curriculum.
        </p>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="rounded-lg overflow-hidden border border-gray-200">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors"
                  style={{
                    backgroundColor: isOpen ? primaryColor : '#F6F1F2',
                    color: isOpen ? '#ffffff' : primaryColor,
                  }}
                >
                  <span className="font-hind font-semibold text-[14px] pr-4">{faq.q}</span>
                  <svg
                    className="w-4 h-4 flex-shrink-0 transition-transform"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 py-4 bg-white border-t border-gray-100">
                    <p className="font-dm-sans text-[14px] leading-relaxed text-gray-700">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div
          className="rounded-lg border p-5 mt-4"
          style={{
            backgroundColor: `${primaryColor}10`,
            borderColor: `${primaryColor}20`,
          }}
        >
          <p className="font-hind font-bold text-[15px] mb-1" style={{ color: primaryColor }}>
            Still have questions?
          </p>
          <p className="font-dm-sans text-[13px] text-gray-600 mb-3">
            Our team is happy to help with any queries not covered above.
          </p>
          <a
            href="/contact"
            className="inline-block font-hind font-semibold text-[13px] px-4 py-2 rounded text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: primaryColor }}
          >
            Contact Us
          </a>
        </div>

      </div>
    </AcademicsLayout>
  );
}
