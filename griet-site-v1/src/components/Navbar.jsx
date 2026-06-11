import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { withAlpha } from '../theme';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024);
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isDesktop;
}

const QUICK_NAV_LINKS = [
  { label: 'College Diary', href: '/academics/college-diary', external: false },
  { label: 'QR-Codes', href: '/QR.pdf', external: true },
  { label: 'ECAP', href: 'http://www.webprosindia.com/Gokaraju', external: true },
  { label: 'GCAP', href: 'http://www.griet.in/gcap/greviance-login.php', external: true },
  { label: 'FAQs', href: '/faq', external: false },
  { label: 'Contact Us', href: '/contact', external: false },
];

/* ─────────────────────────────────────────────────────────────────────────
   SEARCH INDEX
   Each entry: { title, href, category, keywords, desc, external? }
   Categories: 'Pages' | 'Departments' | 'Programs' | 'Faculty' | 'Events' | 'Research' | 'Downloads'
───────────────────────────────────────────────────────────────────────── */
const SEARCH_INDEX = [

  // ── Pages ──────────────────────────────────────────────────────────────
  { title: 'Home', href: '/', category: 'Pages', desc: 'GRIET homepage', keywords: ['griet', 'home', 'main', 'welcome'] },
  { title: 'About GRIET', href: '/about', category: 'Pages', desc: 'History, vision, mission, accreditations', keywords: ['about', 'history', 'vision', 'mission', 'naac', 'established', '1997', 'bachupally'] },
  { title: 'Admissions', href: '/admissions', category: 'Pages', desc: 'Admissions overview for B.Tech & M.Tech', keywords: ['admissions', 'apply', 'join', 'intake', 'eapcet', 'ecet'] },
  { title: 'Programmes / Courses', href: '/admissions/programmes', category: 'Programs', desc: 'All UG and PG programmes offered', keywords: ['programmes', 'courses', 'btech', 'mtech', 'undergraduate', 'postgraduate', 'ug', 'pg', 'intake'] },
  { title: 'Admission Procedure', href: '/admissions/admission-procedure', category: 'Pages', desc: 'Step-by-step admission process', keywords: ['procedure', 'process', 'how to apply', 'steps', 'documents', 'eligibility'] },
  { title: 'Fee Structure', href: '/admissions/fee-structure', category: 'Pages', desc: 'Year-wise tuition and special fees', keywords: ['fee', 'fees', 'tuition', 'payment', 'cost', 'amount', '2025'] },
  { title: 'EAPCET Last Rank', href: '/admissions/eapcet-last-rank', category: 'Pages', desc: 'EAPCET first and last ranks by branch', keywords: ['eapcet', 'eamcet', 'rank', 'cutoff', 'last rank', 'first rank', 'branch wise'] },
  { title: 'ECET Last Rank', href: '/admissions/ecet-last-rank', category: 'Pages', desc: 'ECET ranks for lateral entry', keywords: ['ecet', 'lateral', 'diploma', 'rank'] },
  { title: 'Scholarships', href: '/admissions/scholarships', category: 'Pages', desc: 'EAMCET-based, fee reimbursement, NSP scholarships', keywords: ['scholarship', 'financial aid', 'fee reimbursement', 'epass', 'merit', 'nsp', 'pragathi'] },
  { title: 'Academics', href: '/academics', category: 'Pages', desc: 'Academic overview, semester system', keywords: ['academics', 'semester', 'curriculum', 'education', 'obe'] },
  { title: 'Regulations', href: '/academics/regulations', category: 'Pages', desc: 'Academic regulations — GR18, GR20, GR22, GR24, GR25', keywords: ['regulations', 'gr18', 'gr20', 'gr22', 'gr24', 'gr25', 'rules', 'academic rules', 'gcap'] },
  { title: 'Syllabus', href: '/academics/syllabus', category: 'Pages', desc: 'Download syllabus PDFs by regulation and branch', keywords: ['syllabus', 'curriculum', 'subjects', 'download', 'pdf', 'course material'] },
  { title: 'Academic Calendar', href: '/academics/academic-calendar', category: 'Pages', desc: 'Semester dates, holidays, exam schedule', keywords: ['calendar', 'schedule', 'dates', 'holidays', 'semester dates', 'academic year'] },
  { title: 'Library', href: '/academics/library', category: 'Pages', desc: '1,30,740 volumes, e-journals, OPAC, KNIMBUS', keywords: ['library', 'books', 'ebooks', 'journals', 'opac', 'knimbus', 'ndl', 'reading'] },
  { title: 'College Diary', href: '/academics/college-diary', category: 'Downloads', desc: 'Download the current year college diary PDF', keywords: ['diary', 'college diary', 'handbook', 'download', 'pdf', '2024', '2025'] },
  { title: 'Code of Conduct', href: '/academics/code-of-conduct', category: 'Pages', desc: 'Student code of conduct PDF', keywords: ['code of conduct', 'rules', 'discipline', 'student rules', 'behaviour'] },
  { title: 'Endowment Awards', href: '/academics/endowment-awards', category: 'Pages', desc: 'Merit-based endowment awards for students', keywords: ['endowment', 'awards', 'merit', 'gold medal', 'topper'] },
  { title: 'Finishing School', href: '/academics/finishing-school', category: 'Pages', desc: 'Remedial classes and mentoring programme', keywords: ['finishing school', 'remedial', 'slow learners', 'mentoring', 'zero hour'] },
  { title: 'Digital Wellbeing Council', href: '/academics/digital-wellbeing-council', category: 'Pages', desc: 'Digital ethics and online behaviour guidelines', keywords: ['digital wellbeing', 'dwc', 'digital ethics', 'online', 'end now', 'mental health'] },
  { title: 'Value Added Programs', href: '/value-added-programs', category: 'Programs', desc: 'CISCO, IBM, Oracle, Microsoft, AI/ML certifications', keywords: ['value added', 'vap', 'cisco', 'ibm', 'oracle', 'microsoft', 'certification', 'skill'] },
  { title: 'Internships', href: '/internships', category: 'Pages', desc: 'Higher education and internship opportunities', keywords: ['internship', 'higher education', 'training', 'industry', 'intern'] },
  { title: 'Examinations', href: '/examinations', category: 'Pages', desc: 'Exam branch — notifications, results, downloads', keywords: ['exams', 'examination', 'test', 'assessment'] },
  { title: 'Exam Notifications', href: 'http://www.exambranch.griet.ac.in/', category: 'Pages', desc: 'Official exam branch notification portal', keywords: ['exam notification', 'schedule', 'timetable', 'hall ticket'], external: true },
  { title: 'Results', href: 'https://gradesresults.griet.in/', category: 'Pages', desc: 'Check semester examination results', keywords: ['results', 'grades', 'marks', 'cgpa', 'sgpa', 'pass', 'fail'], external: true },
  { title: 'Gold Medals', href: '/examinations/gold-medals', category: 'Pages', desc: 'Graduation ceremony gold medal winners', keywords: ['gold medal', 'topper', 'graduation', 'rank holder', 'cgpa'] },
  { title: 'Exam Branch Downloads', href: '/examinations/exam-branch-downloads', category: 'Downloads', desc: 'Transcript form, revaluation form, no-dues, PC application', keywords: ['download', 'form', 'transcript', 'revaluation', 'no dues', 'pc'] },
  { title: 'Transcripts & Certificates', href: '/examinations/transcripts-certificates', category: 'Downloads', desc: 'How to obtain transcripts and degree certificates', keywords: ['transcript', 'certificate', 'degree', 'documents', 'migration'] },
  { title: 'Placements', href: '/placements', category: 'Pages', desc: '51 LPA highest package, 950+ offers, 120+ companies', keywords: ['placement', 'job', 'recruit', 'package', 'lpa', 'campus recruitment', 'training', 'career', 'company', 'offer'] },
  { title: 'Rankings', href: '/rankings', category: 'Pages', desc: 'NIRF, Careers360, Education World rankings', keywords: ['ranking', 'nirf', 'rank', 'band', '101', '150', 'careers360', 'top college'] },
  { title: 'NIRF Rankings', href: '/nirf', category: 'Pages', desc: 'NIRF detailed ranking parameters and scores', keywords: ['nirf', 'national ranking', 'ministry of education', 'ariia'] },
  { title: 'Accreditations', href: '/accreditations', category: 'Pages', desc: 'NAAC A++, NBA, ISO, SIRO, UGC Autonomous status', keywords: ['accreditation', 'naac', 'nba', 'iso', 'siro', 'ugc', 'autonomous', 'jntuh', 'nabl'] },
  { title: 'Research', href: '/research', category: 'Research', desc: '50+ funded projects, 1200+ publications, 85+ patents', keywords: ['research', 'projects', 'funded', 'dsr', 'aicte', 'serb', 'consultancy'] },
  { title: 'Patents', href: '/research/patents', category: 'Research', desc: '85+ patents filed by faculty and students', keywords: ['patent', 'ip', 'intellectual property', 'innovation', 'filed', 'granted'] },
  { title: 'Staff Publications', href: '/research/publications', category: 'Research', desc: 'Scopus and SCI journal publications by department', keywords: ['publication', 'journal', 'scopus', 'sci', 'paper', 'article', 'ieee'] },
  { title: 'PhD Programmes', href: '/phd-faculty', category: 'Research', desc: 'Faculty PhD details, thesis titles, dates', keywords: ['phd', 'doctorate', 'thesis', 'guide', 'research scholar'] },
  { title: 'Conferences', href: '/conferences', category: 'Events', desc: 'ICMPC, ICWSNUCA, SeFeT, ICMED and other conferences', keywords: ['conference', 'icmpc', 'icwsnuca', 'sefet', 'icmed', 'national', 'international', 'proceedings'] },
  { title: 'Journals', href: '/journals', category: 'Research', desc: 'IJAMMC, Management Today, IJAC — GRIET publications', keywords: ['journal', 'ijammc', 'management today', 'ijac', 'issn', 'publication', 'periodical'] },
  { title: 'Innovation Awards', href: '/research/innovation-awards', category: 'Research', desc: 'Chhatra Vishwakarma, JNTUH Hackathon, BAJA, Blockchain wins', keywords: ['innovation', 'award', 'chhatra vishwakarma', 'hackathon', 'baja', 'blockchain', 'prize', 'competition'] },
  { title: 'TEQIP Phase-II Grant', href: '/research/teqip', category: 'Research', desc: 'World Bank grant of Rs.400 Lakhs to GRIET', keywords: ['teqip', 'world bank', 'grant', 'funding', '400 lakhs'] },
  { title: 'MOUs & Collaborations', href: '/mous', category: 'Research', desc: '107+ MoUs with IITs, NITs, Wipro, TCS, Oracle, Red Hat', keywords: ['mou', 'collaboration', 'partnership', 'industry', 'iit', 'nit', 'tcs', 'wipro', 'oracle'] },
  { title: 'IQAC', href: '/iqac', category: 'Pages', desc: 'Internal Quality Assurance Cell objectives and reports', keywords: ['iqac', 'quality', 'assurance', 'aqar', 'naac', 'audit', 'accreditation'] },
  { title: 'Mandatory Disclosures', href: '/mandatory-disclosures', category: 'Pages', desc: 'AICTE, UGC, JNTUH, NBA disclosure documents', keywords: ['mandatory', 'disclosure', 'aicte', 'ugc', 'eoa', 'nba', 'balance sheet', 'affiliation'] },
  { title: 'Anti-Ragging', href: '/anti-ragging', category: 'Pages', desc: 'Anti-ragging committee, helpline, squad', keywords: ['ragging', 'anti ragging', 'helpline', 'committee', 'safety', 'complaint'] },
  { title: 'Alumni', href: '/alumni', category: 'Pages', desc: 'Alumni association, Sangam, Bridge Magazine, alumni portal', keywords: ['alumni', 'sangam', 'bridge magazine', 'old students', 'former', 'reunion', 'alum'] },
  { title: 'Contact Us', href: '/contact', category: 'Pages', desc: 'Address, phone, email, grievance portal', keywords: ['contact', 'address', 'phone', 'email', 'location', 'map', 'grievance', 'helpdesk'] },
  { title: 'FAQs', href: '/faq', category: 'Pages', desc: 'Frequently asked questions about GRIET', keywords: ['faq', 'frequently', 'question', 'answer', 'help', 'query', 'doubt'] },
  { title: 'Careers at GRIET', href: '/careers', category: 'Pages', desc: 'Faculty and staff job openings at GRIET', keywords: ['careers', 'jobs', 'vacancy', 'faculty job', 'recruitment', 'opening', 'apply'] },
  { title: 'NSS — National Service Scheme', href: '/nss', category: 'Pages', desc: 'NSS units, activities, blood donation, community service', keywords: ['nss', 'national service', 'volunteer', 'community', 'blood donation', 'swachh', 'social service'] },
  { title: 'Support Services', href: '/support-services', category: 'Pages', desc: 'Library, transport, medical, canteen, bank, gym', keywords: ['support', 'services', 'facilities', 'canteen', 'bank', 'atm', 'medical', 'gym'] },
  { title: 'Transport', href: '/transport', category: 'Pages', desc: '27 buses covering LB Nagar, Ameerpet, ECIL, Patancheru', keywords: ['transport', 'bus', 'route', 'commute', 'lb nagar', 'ameerpet', 'shuttle'] },
  { title: 'Infrastructure', href: '/infrastructure', category: 'Pages', desc: '24-acre campus, 80+ classrooms, 60+ labs, hostels', keywords: ['infrastructure', 'campus', 'hostel', 'lab', 'classroom', 'facilities', 'building', 'auditorium'] },
  { title: 'Central Facilities', href: '/central-facilities', category: 'Pages', desc: 'SEM, HPC, Fabrication Lab, Green House, Media Lab', keywords: ['central facilities', 'sem', 'hpc', 'fabrication', 'green house', 'media lab', 'museum', 'instrument'] },
  { title: 'Sports & Games', href: '/sports', category: 'Events', desc: 'Legacy Sports Meet, Khelostav, inter-university results', keywords: ['sports', 'games', 'cricket', 'football', 'basketball', 'chess', 'kabaddi', 'gym', 'athletics', 'legacy', 'khelostav'] },
  { title: 'Professional Associations', href: '/professional-associations', category: 'Pages', desc: 'IEEE, ISTE, CSI, SAE, IEI chapters at GRIET', keywords: ['ieee', 'iste', 'csi', 'sae', 'iei', 'isaca', 'professional', 'association', 'chapter', 'society'] },
  { title: 'EDC — Entrepreneurship Development Cell', href: '/edc', category: 'Pages', desc: 'Startup incubation, AICTE IDEA Lab, innovation support', keywords: ['edc', 'entrepreneurship', 'startup', 'incubation', 'idea lab', 'tbi', 'business'] },
  { title: 'DTBU — Deemed to be University', href: '/dtbu', category: 'Pages', desc: 'GRIET Deemed-to-be University application status', keywords: ['dtbu', 'deemed university', 'university', 'loi', 'autonomous', 'ugc'] },
  { title: 'Margdarshan — AICTE Mentoring', href: '/margdarshan', category: 'Pages', desc: 'GRIET as AICTE mentor institution for regional colleges', keywords: ['margdarshan', 'aicte', 'mentor', 'fdp', 'obe', 'nba mock audit'] },

  // ── Administration ──────────────────────────────────────────────────────
  { title: 'Administration', href: '/administration', category: 'Pages', desc: 'Chairman, Vice President, management overview', keywords: ['administration', 'management', 'chairman', 'leadership'] },
  { title: 'Governing Body', href: '/administration/governing-body', category: 'Pages', desc: 'Governing Body 2024–25 members with photos', keywords: ['governing body', 'gb', 'board', 'trustees', 'chairman', 'principal'] },
  { title: 'Academic Council', href: '/administration/academic-council', category: 'Pages', desc: 'Academic Council composition and minutes', keywords: ['academic council', 'ac', 'council'] },
  { title: 'Director', href: '/administration/director', category: 'Faculty', desc: 'Dr. Jandhyala N Murthy — Director, GRIET', keywords: ['director', 'jandhyala', 'murthy', 'iit madras', 'air force', 'wing commander'] },
  { title: 'Principal', href: '/administration/principal', category: 'Faculty', desc: 'Dr. J Praveen — Principal, Power Electronics, IEEE Senior Member', keywords: ['principal', 'praveen', 'power electronics', 'ieee', 'dst', 'young scientist'] },
  { title: 'Deans', href: '/administration/deans', category: 'Faculty', desc: '21 deans across academics, research, placements, IQAC and more', keywords: ['dean', 'deans', 'academics dean', 'research dean', 'placements dean', 'finishing school'] },
  { title: 'Heads of Departments', href: '/administration/hods', category: 'Faculty', desc: 'HODs for all 10 departments at GRIET', keywords: ['hod', 'head of department', 'department head', 'professor', 'cse hod', 'ece hod'] },
  { title: 'GRIET Strategic Plan', href: '/administration/strategic-plan', category: 'Pages', desc: 'Institutional strategic development plan', keywords: ['strategic plan', 'vision 2025', 'strategy', 'institutional plan'] },
  { title: 'Annual Reports', href: '/administration/annual-reports', category: 'Downloads', desc: 'Year-wise institutional annual reports', keywords: ['annual report', 'report', 'yearly report', 'download'] },
  { title: 'IIC — Institution Innovation Council', href: '/administration/iic', category: 'Pages', desc: 'MoE IIC-certified innovation council activities', keywords: ['iic', 'innovation council', 'moe', 'startup', 'sih'] },
  { title: 'IDMC', href: '/administration/idmc', category: 'Pages', desc: 'Institute Development and Monitoring Committee', keywords: ['idmc', 'committee', 'monitoring'] },
  { title: "Women's Development Cell", href: '/administration/womens-development-cell', category: 'Pages', desc: 'WDC activities, annual reports 2020-2025', keywords: ['wdc', "women's development", 'women', 'gender', 'iwd', 'harassment'] },
  { title: 'Anti-Sexual Harassment Cell', href: '/administration/anti-sexual-harassment-cell', category: 'Pages', desc: 'ICC — Internal Complaints Committee', keywords: ['icc', 'sexual harassment', 'posh', 'committee', 'complaint'] },
  { title: 'Honours & Awards', href: '/honours-awards', category: 'Pages', desc: 'Institutional awards and recognitions 2007-2019', keywords: ['honours', 'awards', 'recognition', 'achievement', 'iste', 'nirf', 'upsc'] },

  // ── Departments (external websites) ────────────────────────────────────
  { title: 'CSE — Computer Science & Engineering', href: 'http://www.cse.griet.ac.in/', category: 'Departments', desc: 'CSE dept website — 600 seats, B.Tech', keywords: ['cse', 'computer science', 'programming', 'software', 'cs'], external: true },
  { title: 'ECE — Electronics & Communication Engineering', href: 'http://www.ece.griet.ac.in/', category: 'Departments', desc: 'ECE dept website — 60 seats, B.Tech', keywords: ['ece', 'electronics', 'communication', 'vlsi', 'embedded', 'signal processing'], external: true },
  { title: 'CSE-AIML — Artificial Intelligence & Machine Learning', href: 'http://www.aiml.griet.ac.in/', category: 'Departments', desc: 'AIML dept website — 300 seats, B.Tech', keywords: ['aiml', 'artificial intelligence', 'machine learning', 'deep learning', 'ai', 'ml', 'data'], external: true },
  { title: 'CSE-CSBS — Computer Science & Business Systems', href: 'http://www.csbs.griet.ac.in/', category: 'Departments', desc: 'CSBS dept website — TCS partnership, 60 seats', keywords: ['csbs', 'business systems', 'tcs', 'management', 'computer science business'], external: true },
  { title: 'CSE-DS — Data Science', href: 'http://www.ds.griet.ac.in/', category: 'Departments', desc: 'Data Science dept website — 210 seats', keywords: ['ds', 'data science', 'analytics', 'statistics', 'big data', 'python', 'tableau'], external: true },
  { title: 'Civil Engineering', href: 'http://www.ce.griet.ac.in/', category: 'Departments', desc: 'Civil Engineering dept website — 30 seats', keywords: ['civil', 'structural', 'construction', 'surveying', 'rcc', 'transportation engineering'], external: true },
  { title: 'Mechanical Engineering', href: 'http://www.me.griet.ac.in/', category: 'Departments', desc: 'Mechanical Engineering dept website — 30 seats', keywords: ['mechanical', 'automobile', 'thermal', 'manufacturing', 'cad', 'cam', 'baja', 'icmpc'], external: true },
  { title: 'EEE — Electrical & Electronics Engineering', href: 'http://www.eeedept.griet.ac.in/', category: 'Departments', desc: 'EEE dept website — 30 seats', keywords: ['eee', 'electrical', 'power', 'drives', 'power electronics', 'machines', 'renewable'], external: true },
  { title: 'IT — Information Technology', href: 'http://www.it.griet.ac.in/', category: 'Departments', desc: 'IT dept website — 120 seats', keywords: ['it', 'information technology', 'networking', 'web', 'cloud', 'security', 'database'], external: true },
  { title: 'Humanities & Sciences', href: 'http://hs.griet.ac.in/', category: 'Departments', desc: 'H&S dept website — Maths, Physics, Chemistry, English', keywords: ['hs', 'humanities', 'sciences', 'mathematics', 'physics', 'chemistry', 'english', 'basic sciences'], external: true },

  // ── Programs ──────────────────────────────────────────────────────────
  { title: 'B.Tech Computer Science (CSE)', href: 'http://www.cse.griet.ac.in/', category: 'Programs', desc: 'B.Tech CSE — 600 seats, NBA accredited', keywords: ['btech cse', 'computer science degree', 'software engineering', 'nba cse'], external: true },
  { title: 'B.Tech Electronics & Communication (ECE)', href: 'http://www.ece.griet.ac.in/', category: 'Programs', desc: 'B.Tech ECE — 60 seats, NBA accredited', keywords: ['btech ece', 'electronics degree', 'communication degree', 'nba ece'], external: true },
  { title: 'B.Tech Artificial Intelligence & ML', href: 'http://www.aiml.griet.ac.in/', category: 'Programs', desc: 'B.Tech CSE-AIML — 300 seats', keywords: ['btech aiml', 'ai degree', 'ml degree', 'artificial intelligence course'], external: true },
  { title: 'B.Tech Data Science', href: 'http://www.ds.griet.ac.in/', category: 'Programs', desc: 'B.Tech CSE-DS — 210 seats', keywords: ['btech data science', 'data science course', 'analytics degree'], external: true },
  { title: 'B.Tech Civil Engineering', href: 'http://www.ce.griet.ac.in/', category: 'Programs', desc: 'B.Tech Civil — 30 seats, NBA accredited', keywords: ['btech civil', 'civil engineering course', 'construction degree'], external: true },
  { title: 'B.Tech Mechanical Engineering', href: 'http://www.me.griet.ac.in/', category: 'Programs', desc: 'B.Tech ME — 30 seats, NBA accredited', keywords: ['btech mechanical', 'mechanical course', 'me degree'], external: true },
  { title: 'B.Tech Electrical & Electronics (EEE)', href: 'http://www.eeedept.griet.ac.in/', category: 'Programs', desc: 'B.Tech EEE — 30 seats, NBA accredited', keywords: ['btech eee', 'electrical course', 'power systems degree'], external: true },
  { title: 'B.Tech Information Technology', href: 'http://www.it.griet.ac.in/', category: 'Programs', desc: 'B.Tech IT — 120 seats, NBA accredited', keywords: ['btech it', 'information technology degree', 'nba it'], external: true },
  { title: 'M.Tech Computer Science', href: '/admissions/programmes', category: 'Programs', desc: 'M.Tech CSE — 12 seats postgraduate programme', keywords: ['mtech cse', 'mtech computer science', 'pg cse', 'postgraduate'] },
  { title: 'M.Tech Structural Engineering', href: '/admissions/programmes', category: 'Programs', desc: 'M.Tech Structural Engg — 18 seats', keywords: ['mtech structural', 'mtech civil', 'structural engineering pg'] },

  // ── Faculty ───────────────────────────────────────────────────────────
  { title: 'Dr. Jandhyala N Murthy — Director', href: '/administration/director', category: 'Faculty', desc: 'B.Tech IIT Madras | Ph.D. Cranfield, UK | Wing Commander IAF', keywords: ['jandhyala', 'murthy', 'director', 'iit madras', 'cranfield', 'air force'] },
  { title: 'Dr. J Praveen — Principal', href: '/administration/principal', category: 'Faculty', desc: 'Ph.D. Power Electronics | DST Young Scientist | Senior IEEE Member', keywords: ['j praveen', 'principal', 'power electronics', 'ieee senior', 'dst'] },
  { title: 'Dr. Ch. Mallikarjuna Rao — Dean (CoE)', href: '/administration/deans', category: 'Faculty', desc: 'Controller of Examinations', keywords: ['mallikarjuna rao', 'cmr', 'controller of examinations', 'exam dean'] },
  { title: 'Dr. K Prasanna Lakshmi — Dean (Academics)', href: '/administration/deans', category: 'Faculty', desc: 'Dean of Academic Affairs', keywords: ['prasanna lakshmi', 'dean academics', 'academic affairs'] },
  { title: 'Dr. K. Butchi Raju — Dean (T&P)', href: '/administration/deans', category: 'Faculty', desc: 'Dean of Training & Placements', keywords: ['butchi raju', 'dean placements', 'training placements', 't&p'] },
  { title: 'Dr. B Sankara Babu — HoD CSE', href: '/administration/hods', category: 'Faculty', desc: 'Head of Department, Computer Science & Engineering', keywords: ['sankara babu', 'hod cse', 'cse head', 'computer science hod'] },
  { title: 'Dr. K Jamal — HoD ECE', href: '/administration/hods', category: 'Faculty', desc: 'Head of Department, Electronics & Communication Engineering', keywords: ['jamal', 'hod ece', 'electronics hod', 'ece head'] },
  { title: 'Dr. G. Karuna — HoD AIML', href: '/administration/hods', category: 'Faculty', desc: 'Head of Department, CSE-AIML', keywords: ['karuna', 'hod aiml', 'artificial intelligence hod'] },

  // ── Student Clubs & Events ─────────────────────────────────────────────
  { title: 'Student Clubs', href: '/clubs', category: 'Events', desc: '20+ student clubs — IEEE, Robotics, FSF, GEM, TEDx and more', keywords: ['clubs', 'student clubs', 'extracurricular', 'activities', 'society', 'chapter'] },
  { title: 'IEEE Student Branch', href: 'http://ieeegrietsb.com', category: 'Events', desc: 'Most active IEEE SB in Telangana', keywords: ['ieee', 'student branch', 'ieee griet', 'technical club'], external: true },
  { title: 'GEM Magazine', href: '/clubs/gem-magazine', category: 'Events', desc: 'GRIET student magazine — 19 issues published', keywords: ['gem', 'magazine', 'student magazine', 'publication', 'griet magazine'] },
  { title: 'Robotics Club', href: '/clubs/robotics', category: 'Events', desc: 'Robot competitions, Arduino, ROS, national wins', keywords: ['robotics', 'robot', 'arduino', 'raspberry pi', 'robo wars', 'automation'] },
  { title: 'Free Software Wing (FSF)', href: '/clubs/fsf', category: 'Events', desc: 'FOSS, Linux, IIT Bombay Spoken Tutorial partner', keywords: ['fsf', 'free software', 'foss', 'linux', 'open source', 'spoken tutorial', 'gnu'] },
  { title: 'Flavours — Culinary Club (AICTE SPICES)', href: '/clubs/flavours', category: 'Events', desc: 'AICTE SPICES culinary arts club', keywords: ['flavours', 'spices', 'culinary', 'cooking', 'food', 'aicte'] },
  { title: 'Quizzicals — Quiz Club', href: '/clubs/quizzicals', category: 'Events', desc: 'Intra and inter-college quiz competitions', keywords: ['quiz', 'quizzicals', 'trivia', 'gk', 'general knowledge', 'competition'] },
  { title: 'TEDx GRIET', href: '/clubs/gem-magazine', category: 'Events', desc: 'Annual TEDx conference at GRIET campus', keywords: ['tedx', 'ted', 'talk', 'speaker', 'conference', 'ideas'] },
  { title: 'Annual Day', href: '/annual-day', category: 'Events', desc: 'Annual Day events 2020-2025 with reports', keywords: ['annual day', 'cultural', 'fest', 'celebration', 'awards ceremony'] },
  { title: 'Graduation Day', href: '/graduation-day', category: 'Events', desc: 'Convocation ceremony — 23rd Graduation Day 2025', keywords: ['graduation', 'convocation', 'degree ceremony', '23rd', 'class of 2025'] },

  // ── Important Links ────────────────────────────────────────────────────
  { title: 'TASK — Skill & Knowledge Programs', href: '/task', category: 'Pages', desc: 'Oracle, IBM, Google, Microsoft, SAP certification programs', keywords: ['task', 'skill', 'oracle', 'ibm', 'google', 'microsoft', 'sap', 'autodesk', 'certification', 'telangana'] },
  { title: 'J-Lab @ GRIET', href: '/j-lab', category: 'Pages', desc: 'Junior Innovation Lab — Arduino, 3D printing, robotics kits', keywords: ['jlab', 'j-lab', 'junior lab', 'innovation lab', 'prototype', '3d printing', 'arduino'] },
  { title: 'ICT @ GRIET', href: '/ict', category: 'Pages', desc: '1 Gbps internet, smart classrooms, HPC, ERP portal', keywords: ['ict', 'networking', 'wifi', 'internet', 'smart classroom', 'hpc', 'erp', 'computer lab'] },
  { title: 'Swayam Prabha / NPTEL', href: '/swayam-prabha', category: 'Pages', desc: 'NPTEL, SWAYAM free online courses from IITs/IISc', keywords: ['swayam', 'nptel', 'mooc', 'online course', 'iit course', 'free course', 'certificate', 'nptelhrd'] },
  { title: 'Career Guidance & Mentoring', href: '/career-guidance', category: 'Pages', desc: 'HSCE Cell — GATE/GRE prep, abroad, civil services guidance', keywords: ['career guidance', 'hsce', 'gate', 'gre', 'ias', 'upsc', 'higher studies', 'mentoring', 'abroad'] },
  { title: 'Technology & Innovation Cell', href: '/technology-innovation-cell', category: 'Pages', desc: 'IP management, tech transfer, consultancy, SIRO recognition', keywords: ['technology cell', 'innovation cell', 'tic', 'patent filing', 'tech transfer', 'siro', 'dsir'] },
  { title: 'Wellness Center / GCC', href: '/wellness-center', category: 'Pages', desc: 'Counseling psychologist on campus, peer support program', keywords: ['wellness', 'counseling', 'mental health', 'stress', 'psychologist', 'gcc', 'peer support'] },
  { title: 'Skill Plus Programs', href: '/skill-plus', category: 'Programs', desc: 'AWS, Azure, CCNA, Full Stack, UI/UX, AI/ML programs', keywords: ['skill plus', 'aws', 'azure', 'cloud', 'fullstack', 'devops', 'security', 'task skill'] },
  { title: 'Street Cause Events', href: '/street-cause', category: 'Events', desc: 'NSS social service — blood donation, literacy, health camps', keywords: ['street cause', 'nss events', 'blood donation', 'literacy', 'social service', 'health camp', 'swachh'] },
  { title: 'Centre for Leadership Studies', href: '/cls', category: 'Pages', desc: '36 leadership and professional development resources', keywords: ['cls', 'leadership', 'professional development', 'soft skills', 'management'] },
  { title: 'Virtual Campus Tour', href: '/virtual-tour', category: 'Pages', desc: '360° immersive virtual tour of GRIET campus', keywords: ['virtual tour', '360', 'vr', 'campus tour', 'online tour', 'visit'] },
];

/* ─────────────────────────────────────────────────────────────────────────
   SEARCH ENGINE — relevance-scored, category-aware
───────────────────────────────────────────────────────────────────────── */
const CATEGORY_ORDER = ['Departments', 'Programs', 'Faculty', 'Pages', 'Research', 'Events', 'Downloads'];
const MAX_RESULTS = 8;

function scoreEntry(entry, terms) {
  const titleLc = entry.title.toLowerCase();
  const descLc  = (entry.desc || '').toLowerCase();
  const kwLc    = (entry.keywords || []).join(' ').toLowerCase();
  let score = 0;
  for (const term of terms) {
    if (!term) continue;
    if (titleLc.startsWith(term))         score += 12;
    else if (titleLc.includes(term))      score += 7;
    if (kwLc.includes(term))              score += 4;
    if (descLc.includes(term))            score += 1;
  }
  return score;
}

function runSearch(query) {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const terms = q.split(/\s+/);
  const scored = SEARCH_INDEX
    .map(entry => ({ entry, score: scoreEntry(entry, terms) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return CATEGORY_ORDER.indexOf(a.entry.category) - CATEGORY_ORDER.indexOf(b.entry.category);
    });
  // Deduplicate by href
  const seen = new Set();
  const deduped = [];
  for (const { entry } of scored) {
    if (!seen.has(entry.href)) { seen.add(entry.href); deduped.push(entry); }
  }
  return deduped.slice(0, MAX_RESULTS);
}

/* Highlight matching text */
function Highlight({ text, query }) {
  if (!query) return <>{text}</>;
  const q = query.trim();
  if (!q) return <>{text}</>;
  try {
    const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').split(/\s+/).join('|')})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          regex.test(part)
            ? <mark key={i} className="bg-yellow-100 text-gray-900 rounded-sm px-0.5">{part}</mark>
            : <span key={i}>{part}</span>
        )}
      </>
    );
  } catch {
    return <>{text}</>;
  }
}

/* Category badge */
const CATEGORY_COLORS = {
  Departments: 'bg-blue-50 text-blue-700',
  Programs:    'bg-emerald-50 text-emerald-700',
  Faculty:     'bg-purple-50 text-purple-700',
  Research:    'bg-orange-50 text-orange-700',
  Events:      'bg-pink-50 text-pink-700',
  Downloads:   'bg-gray-100 text-gray-600',
  Pages:       'bg-gray-50 text-gray-500',
};

function CategoryBadge({ label }) {
  return (
    <span className={`text-[0.6875rem] font-display font-semibold px-1.5 py-0.5 rounded flex-shrink-0 ${CATEGORY_COLORS[label] || 'bg-gray-50 text-gray-500'}`}>
      {label}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   SEARCH BAR COMPONENT
───────────────────────────────────────────────────────────────────────── */
function SearchBar({ college }) {
  const [query, setQuery]       = useState('');
  const [open, setOpen]         = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const ref                     = useRef(null);
  const inputRef                = useRef(null);
  const navigate                = useNavigate();

  const results = runSearch(query);

  // Close on outside click
  useEffect(() => {
    const handle = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  // Reset active index when results change
  useEffect(() => { setActiveIdx(-1); }, [query]);

  const navigate_to = useCallback((entry) => {
    if (!entry) return;
    if (entry.external || entry.href.startsWith('http')) {
      window.open(entry.href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(entry.href);
    }
    setQuery('');
    setOpen(false);
    setActiveIdx(-1);
  }, [navigate]);

  const handleKeyDown = (e) => {
    if (!open || results.length === 0) {
      if (e.key === 'Escape') { setOpen(false); setQuery(''); }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIdx >= 0) navigate_to(results[activeIdx]);
      else if (results.length > 0) navigate_to(results[0]);
    } else if (e.key === 'Escape') {
      setOpen(false);
      setActiveIdx(-1);
    }
  };

  const showDropdown = open && query.trim().length >= 2;

  return (
    <div ref={ref} className="relative">
      <form onSubmit={(e) => { e.preventDefault(); if (results.length > 0) navigate_to(results[activeIdx >= 0 ? activeIdx : 0]); }} className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search pages, faculty, programs…"
          autoComplete="off"
          className="font-display text-[0.875rem] text-gray-700 placeholder-gray-400 border border-gray-300 rounded-l px-3 h-[30px] w-[220px] focus:outline-none focus:border-[#5B1027] transition-colors bg-white"
        />
        <button
          type="submit"
          className="h-[30px] w-[34px] flex items-center justify-center text-white rounded-r flex-shrink-0 transition-opacity hover:opacity-90"
          style={{ backgroundColor: college.primaryColor }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" strokeLinecap="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
          </svg>
        </button>
      </form>

      {showDropdown && (
        <div className="absolute right-0 top-full mt-1.5 w-[360px] bg-white border border-gray-200 shadow-xl z-[999] rounded-lg overflow-hidden">

          {results.length > 0 ? (
            <>
              <div className="px-3 py-2 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                <span className="font-display text-[0.6875rem] text-gray-400 uppercase tracking-wide">
                  {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
                </span>
                <span className="font-display text-[0.75rem] text-gray-400 hidden sm:block">↑↓ navigate · Enter select · Esc close</span>
              </div>
              <ul className="max-h-[380px] overflow-y-auto">
                {results.map((entry, i) => (
                  <li key={entry.href + entry.title}>
                    <button
                      onMouseEnter={() => setActiveIdx(i)}
                      onClick={() => navigate_to(entry)}
                      className={`w-full text-left px-4 py-3 border-b border-gray-50 last:border-b-0 transition-colors flex items-start gap-3 ${activeIdx === i ? 'bg-[#F6F1F2]' : 'hover:bg-gray-50'}`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-display font-semibold text-[0.875rem] text-gray-800 leading-tight">
                            <Highlight text={entry.title} query={query.trim()} />
                          </span>
                          {(entry.external || entry.href.startsWith('http')) && (
                            <svg className="w-3 h-3 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                          )}
                        </div>
                        {entry.desc && (
                          <p className="font-body text-[0.8125rem] text-gray-500 mt-0.5 leading-snug truncate">
                            {entry.desc}
                          </p>
                        )}
                      </div>
                      <CategoryBadge label={entry.category} />
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="px-4 py-8 text-center">
              <svg className="w-8 h-8 mx-auto mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <p className="font-display font-semibold text-[0.875rem] text-gray-500 mb-1">No results for "{query}"</p>
              <p className="font-body text-[0.8125rem] text-gray-400">
                Try searching for a department, faculty name, programme, or page.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────────────────────── */
export default function Navbar({ college, scrolled = false }) {
  const isDesktop = useIsDesktop();

  return (
    <>
      {/* Quick nav — hidden on mobile */}
      <div
        className="hidden md:block w-full bg-white"
        style={{ borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.08)}` }}
      >
        <div className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-[60px] flex justify-between items-center h-[40px]">
          <div className="flex items-center gap-4 lg:gap-6">
            {QUICK_NAV_LINKS.map(({ label, href, external }) =>
              external ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="font-display font-medium text-[0.875rem] leading-4 transition-colors"
                  style={{ color: college.primaryColor }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = college.accentColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = college.primaryColor)}
                >{label}</a>
              ) : (
                <Link key={label} to={href}
                  className="font-display font-medium text-[0.875rem] leading-4 transition-colors"
                  style={{ color: college.primaryColor }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = college.accentColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = college.primaryColor)}
                >{label}</Link>
              )
            )}
          </div>
          <SearchBar college={college} />
        </div>
      </div>

      <nav className="w-full bg-white/[0.95] backdrop-blur-md sticky top-0 z-50"
        style={{ padding: isDesktop ? (scrolled ? '8px 0' : '12px 0') : '0', borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.08)}`, transition: 'padding 0.3s ease' }}
      >
        <div className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-[60px] flex justify-between items-center"
          style={{ height: isDesktop ? (scrolled ? '60px' : '88px') : '56px', transition: 'height 0.3s ease' }}
        >
          <div className="flex items-center">
            <img src={college.logo} alt={`${college.shortName} Logo`} className="flex-shrink-0 object-contain"
              style={{ width: isDesktop ? '300px' : '180px', height: isDesktop ? (scrolled ? '50px' : '80px') : '40px', transition: 'height 0.3s ease' }}
            />
          </div>
          <div className="hidden md:flex items-center">
            {college.accreditationLogo && (
              <img src={college.accreditationLogo} alt="Accreditation Logos" className="object-contain"
                style={{ height: isDesktop ? (scrolled ? '46px' : '80px') : '40px', transition: 'height 0.3s ease' }}
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
