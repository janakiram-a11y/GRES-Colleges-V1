export function withAlpha(hex, opacity) {
  return hex + Math.round(opacity * 255).toString(16).padStart(2, '0').toUpperCase();
}

const college = {
  id: 'grcp',
  shortName: 'GRCP',
  fullName: 'Gokaraju Rangaraju College of Pharmacy',
  tagline: 'Advancing pharmaceutical sciences for a healthier tomorrow.',
  email: 'info@grcp.ac.in',
  phone: '7095271271',
  admissionsPhone: '7095271271',
  admissionsLabel: 'TG PGECET counselling code: GRCP1',
  address: 'Survey No. 288, Nizampet Bachupally Road, Bachupally, Kukatpally, Hyderabad – 500090',
  logo: '/imgi_1_GRCP_Logo.png',
  accreditationLogo: null,
  smallLogo: '/small-logo.png',
  primaryColor: '#5B1027',
  accentColor: '#C32033',
  greenAccent: '#00873d',
  highlightColor: '#C32033',
  darkAccent: '#222222',
  neutralAccent: '#BFBFBF',
  softAccent: '#F3DAB2',

  // ── ANNOUNCEMENTS ──────────────────────────────────────────────────────────
  announcements: [
    { text: 'Deemed-to-be University – LOI Received', badge: 'NEW', isLOI: true },
    { text: 'Admissions Open for B.Pharm & M.Pharm 2025–26', href: '#', badge: 'NEW' },
    { text: 'B.Pharmacy NBA Accredited 2025–2028', href: '#', badge: 'NEW' },
    { text: 'B.Pharmacy (PCI) Main & Backlog Examinations, Feb/March-2026', href: '#', badge: 'EXAM' },
  ],

  // ── NAVIGATION ─────────────────────────────────────────────────────────────
  navLinks: [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '/about',
      dropdown: [
        { label: 'About GRCP', href: '/about' },
        { label: 'PEO', href: '/about/peo' },
        { label: 'POs', href: '/about/pos' },
      ],
    },
    {
      name: 'Administration',
      href: '/administration',
      dropdown: [
        { label: 'Leadership', href: '/administration/leadership' },
        { label: 'Governing Body', href: '/administration/governing-body' },
        { label: 'IDMC', href: '/administration/idmc' },
        { label: 'Organizational Chart', href: '/administration/org-chart' },
      ],
    },
    {
      name: 'Admissions',
      dropdown: [
        { label: 'Admission Procedure', href: '/admissions/procedure' },
        { label: 'Course Fees', href: '/admissions/fees' },
        { label: 'EAMCET Last Rank', href: '/admissions/eamcet-rank' },
        { label: 'PGECET Last Rank', href: '/admissions/pgecet-rank' },
      ],
    },
    {
      name: 'Programmes',
      dropdown: [
        { label: 'B.Pharmacy', href: '/programmes/b-pharmacy' },
        {
          label: 'M.Pharmacy',
          href: '/programmes/m-pharmacy',
          subItems: [
            { label: 'Pharmaceutics', href: '/programmes/m-pharmacy/pharmaceutics' },
            { label: 'Pharmaceutical Analysis', href: '/programmes/m-pharmacy/pharmaceutical-analysis' },
            { label: 'Pharmacology', href: '/programmes/m-pharmacy/pharmacology' },
            { label: 'PG Program Committee', href: '/programmes/m-pharmacy/pg-committee' },
          ],
        },
      ],
    },
    {
      name: 'Academics',
      dropdown: [
        {
          label: 'Syllabus (UG/PG)',
          href: '/academics/syllabus',
          subItems: [
            { label: 'B.Pharmacy Syllabus', href: '/academics/syllabus/b-pharmacy' },
            { label: 'M.Pharmacy Syllabus', href: '/academics/syllabus/m-pharmacy' },
          ],
        },
        { label: 'Academic Calendar', href: '/academics/calendar' },
        { label: 'Time Tables', href: '/academics/timetables' },
        {
          label: 'Library',
          href: '/academics/library',
          subItems: [
            { label: 'About Library', href: '/academics/library/about' },
            { label: 'Information Center @ GRCP', href: '/academics/library/info-center' },
            { label: 'E-Journals List', href: '/academics/library/e-journals' },
            { label: 'Daily News Papers', href: '/academics/library/newspapers' },
            { label: 'Statistics 2025-26', href: '/academics/library/statistics' },
            { label: 'Titles & Volumes 2025-26', href: '/academics/library/titles-volumes' },
          ],
        },
        { label: 'Faculty List', href: '/academics/faculty' },
        { label: 'Non-Teaching Staff', href: '/academics/non-teaching-staff' },
      ],
    },
    {
      name: 'Research',
      dropdown: [
        { label: 'Research @ GRCP', href: '/research' },
        { label: 'Ph.D Guideships', href: '/research/phd-guideships' },
        { label: 'Publications', href: '/research/publications' },
        { label: 'Patents', href: '/research/patents' },
        { label: 'Sponsored Projects / Consultancy', href: '/research/sponsored-projects' },
      ],
    },
    {
      name: 'Examination',
      dropdown: [
        { label: 'Examination Branch @ GRCP', href: '/examination' },
        { label: 'Sessional Time Table', href: '/examination/sessional-timetable' },
        { label: 'OU Time Tables', href: '/examination/ou-timetables' },
        { label: 'OU Notifications', href: '/examination/ou-notifications' },
        { label: 'Results', href: '/examination/results' },
        { label: 'Question Papers', href: '/examination/question-papers' },
      ],
    },
    {
      name: 'Placements',
      dropdown: [
        { label: 'Placement Cell @ GRCP', href: '/placements' },
        { label: 'Placement Status', href: '/placements/status' },
      ],
    },
    {
      name: 'Alumni',
      dropdown: [
        { label: 'Alumni Registration', href: '/alumni/registration' },
        { label: 'Executive Members', href: '/alumni/executive-members' },
        { label: 'Alumni Enrollment', href: '/alumni/enrollment' },
        { label: 'List of Alumni', href: '/alumni/list' },
        { label: 'Distinguished Alumni', href: '/alumni/distinguished' },
        { label: 'Alumni Contribution', href: '/alumni/contribution' },
      ],
    },
    { name: 'Contact Us', href: '/contact' },
  ],

  // Quick links shown in footer
  quickLinks: [
    { label: 'GRCP: Approvals and Recognitions', href: '#' },
    { label: 'Rules and Regulations', href: '#' },
    { label: 'Infrastructure', href: '/about/infrastructure' },
    { label: 'Teaching Learning Methods', href: '#' },
    { label: 'Student Support and Progression', href: '#' },
    { label: 'Skill Series', href: '#' },
    { label: 'E-Bulletin', href: '#' },
    { label: 'Downloads', href: '#' },
  ],
  resources: [
    { label: 'Anti-Ragging / Discipline', href: '/administration/anti-ragging' },
    { label: 'Anti-Sexual Harassment / ICC', href: '/administration/anti-harassment' },
    { label: 'Grievance Redressal Committee', href: '/administration/grievance' },
    { label: "Institution's Innovation Council (IIC)", href: '#' },
    { label: 'IQAC', href: '/administration/iqac' },
    { label: 'Drug Information Centre', href: '#' },
  ],

  // ── HOMEPAGE SECTIONS ──────────────────────────────────────────────────────
  heroHeading: 'Shaping Pharmaceutical Leaders for a Healthier Tomorrow',
  heroSubtext: 'Gokaraju Rangaraju College of Pharmacy creates an environment of opportunity, producing highly qualified human resources who are academically superior and ethically strong. NBA Accredited, PCI Approved, and affiliated with Osmania University.',
  heroCTALabel: 'Admissions Open 2025',
  heroCTAHref: '/admissions/procedure',
  heroBgImage: '/imgi_5_aboutusbanner.jpg',

  statsBarItems: ['NBA Accredited 2025–28', 'PCI Approved', 'Osmania University Affiliated', 'B.Pharm & M.Pharm Programs'],

  campusIntroLabel: 'Campus Experience',
  campusIntroHeading: 'Be a Part of the GRCP Experience',
  campusIntroDesc: "Experience a dedicated pharmaceutical campus just 4 km from JNTU, Kukatpally — far from the city's hustle yet easily accessible. Modern laboratories, lecture halls, computer lab, auditorium, and library await you.",
  campusVideoSrc: null,
  campusIntroImage: '/imgi_4_Gokaraju-Rangaraju.jpg',

  highlightCards: [
    { title: 'NBA Accredited', desc: 'B.Pharmacy program NBA accredited for 2025–2028, ensuring globally recognized quality.' },
    { title: 'PCI Approved', desc: 'All programs approved by the Pharmacy Council of India.' },
    { title: 'Expert Faculty', desc: 'Highly qualified faculty producing academically superior and ethically strong graduates.' },
  ],

  aboutHeading: 'Welcome to Gokaraju Rangaraju College of Pharmacy',
  aboutP1: 'GRCP creates an environment that opens up new worlds of opportunity. From the day of its inception, the college is producing highly qualified human resources who are academically superior and ethically strong. GRCP is just 4 km from JNTU, Kukatpally, and is far from hustle, bustle of the city life and yet close enough for easy approach.',
  aboutP2: 'The college is approved by PCI and is affiliated to the Osmania University. It offers B. Pharmacy & M. Pharmacy courses in Pharmaceutics, Pharmaceutical Analysis and Pharmacology. The college has highly qualified faculty, well equipped laboratories, lecture halls, computer lab, auditorium, library and other supporting facilities.',
  aboutFeatures: [
    { title: 'NBA Accredited', sub: 'B.Pharmacy 2025–2028' },
    { title: 'PCI Approved', sub: 'Pharmacy Council of India' },
    { title: 'Expert Faculty', sub: 'Highly qualified professors' },
    { title: 'Infrastructure', sub: 'Modern labs & facilities' },
  ],
  aboutYears: '12+',
  aboutYearsLabel: 'Years of Pharmaceutical Excellence',
  aboutImage: '/Why choose us.png',

  whyChooseLabel: 'Why Choose GRCP',
  whyChooseHeading: 'Pharmaceutical Excellence That Shapes Your Career',
  whyChooseCards: [
    { title: 'NBA Accreditation', desc: 'B.Pharmacy NBA accredited for 2025–2028, meeting globally recognized quality benchmarks.' },
    { title: 'PCI Approved', desc: 'All programs approved by the Pharmacy Council of India for highest pharmaceutical education standards.' },
    { title: 'Modern Laboratories', desc: 'Well-equipped labs for Pharmaceutics, Pharmaceutical Analysis, and Pharmacology research.' },
    { title: 'Qualified Faculty', desc: 'Highly qualified faculty dedicated to academic excellence, research, and student mentoring.' },
    { title: 'Research Culture', desc: 'Strong emphasis on pharmaceutical research, professional societies, and faculty achievements.' },
    { title: 'Gokaraju Legacy', desc: "Backed by the Gokaraju Group — sharing GRIET's world-class infrastructure and academic network." },
  ],

  academicProgramsLabel: 'Academic Programs',
  academicProgramsHeading: 'Programs Designed for Healthcare Leaders',
  academicProgramsDesc: 'Explore pharmacy programs built to prepare students for a rewarding career in pharmaceutical sciences and healthcare.',
  academicPrograms: [
    { count: 'B.Pharm', title: 'Bachelor of Pharmacy', desc: 'A comprehensive 4-year undergraduate program in pharmaceutical sciences, approved by PCI and NBA accredited.' },
    { count: 'M.Pharm', title: 'Master of Pharmacy', desc: 'Postgraduate specialization in Pharmaceutics, Pharmaceutical Analysis, and Pharmacology.' },
  ],

  careerLabel: 'Career Outcomes',
  careerHeading: 'Pharmacy Careers That Make a Difference',
  careerDesc: 'GRCP graduates are placed in leading pharmaceutical companies, hospitals, research institutions, and regulatory bodies. Our rigorous academic training and industry connections ensure career-ready professionals enter the healthcare sector.',
  careerHighestPackage: '6+ LPA',
  careerOffersCount: '80%+',
  careerRecruiters: ['Sun Pharma', 'Cipla', "Dr. Reddy's", 'Aurobindo', 'Apollo'],
  careerImage: '/Career Outcomes.png',

  researchLabel: 'Research & Recognition',
  researchHeading: 'Excellence in Pharmaceutical Sciences at GRCP',
  researchStats: [
    { count: 'NBA', label: 'Accreditation 2025–28', desc: 'B.Pharmacy recognized by the National Board of Accreditation.' },
    { count: 'PCI', label: 'Approved Programs', desc: 'All pharmacy programs approved by the Pharmacy Council of India.' },
    { count: '5', label: 'Departments', desc: 'Pharmaceutics, Chemistry, Pharmacognosy, Pharmacology & Pharmacy Practice.' },
    { count: '12+', label: 'Years of Excellence', desc: 'Dedicated to pharmaceutical education and research since inception.' },
  ],

  campusLifeLabel: 'Student Experience',
  campusLifeHeading: 'Vibrant Campus Life',
  campusLifeCards: [
    { title: 'Cultural Events & Fests', desc: 'Annual flagship events bringing pharmacy students together for learning and celebration.', img: '/Cultural event & Fests.png', large: true },
    { title: 'Sports Facilities', desc: 'Indoor and outdoor sports complexes for student wellness.', img: '/Sports fecilities.png' },
    { title: 'Research Clubs', desc: 'Student-led pharmaceutical research and professional society chapters.', img: '/Innovation clubs.png' },
    { title: 'Hostel Life', desc: 'Comfortable, secure, and vibrant residential halls on campus.', img: '/Hostel life.png' },
    { title: 'Central Library', desc: 'A hub of pharmaceutical knowledge with thousands of curated resources.', img: '/Central library.png' },
  ],

  ctaHeading: 'Admissions Open for 2025–26',
  ctaDesc: 'Begin your journey in pharmaceutical sciences. Join GRCP and build a rewarding career in healthcare and drug development.',
  ctaCTALabel: 'Apply Now',
  ctaCTAHref: '/admissions/procedure',
  ctaSecondaryLabel: 'Download Brochure',

  // ── INNER PAGE CONTENT ─────────────────────────────────────────────────────

  // About page
  aboutFounders: 'Gokaraju Rangaraju College of Pharmacy was instituted by Gokaraju Rangaraju Educational Society (GRES) in 2003. The society was founded by visionary philanthropists and educationists committed to advancing quality professional education in Telangana. Guided by their founding principles, GRES established GRCP to contribute to the nation\'s pharmaceutical and healthcare workforce.',
  aboutSociety: 'Gokaraju Rangaraju Educational Society (GRES) is a premier educational trust in Telangana with decades of commitment to excellence in education. The society operates GRIET — one of Hyderabad\'s top engineering colleges — and continues to expand its footprint in professional education through institutions like GRCP. GRES is driven by the belief that quality education is the most powerful tool for social transformation.',
  aboutDetailedParagraphs: [
    'Gokaraju Rangaraju College of Pharmacy (GRCP) was established with a clear vision: to create world-class pharmaceutical professionals who combine academic rigor with ethical values. Located just 4 km from JNTU Kukatpally, the campus is accessible yet peaceful — ideal for focused learning and research.',
    'GRCP is approved by the Pharmacy Council of India (PCI) and affiliated to Osmania University, Hyderabad. The college offers B. Pharmacy and M. Pharmacy programs with specializations in Pharmaceutics, Pharmaceutical Analysis, and Pharmacology. The B.Pharmacy program has been accredited by the National Board of Accreditation (NBA) for 2025–2028.',
    'The college is equipped with well-furnished laboratories, modern lecture halls, a computer lab, a well-stocked library, an auditorium, and other state-of-the-art facilities. The faculty comprises highly qualified professionals dedicated to both teaching and research.',
    'GRCP fosters a culture of innovation, professional growth, and ethical pharmaceutical practice. Through its Drug Information Centre, student professional societies, and industry collaborations, students gain exposure beyond the classroom — preparing them for rewarding careers in pharmaceutical companies, hospitals, research organisations, and regulatory bodies.',
  ],

  vision: 'To be a globally recognised centre of pharmaceutical excellence that produces ethically strong, academically superior, and research-driven pharmacy professionals capable of contributing meaningfully to healthcare and the pharmaceutical industry.',

  mission: [
    'Provide high-quality pharmaceutical education aligned with global standards and industry needs.',
    'Foster a culture of research, innovation, and evidence-based pharmaceutical practice.',
    'Develop ethical, compassionate, and socially responsible pharmacy professionals.',
    'Strengthen industry-academia collaborations for experiential learning and career readiness.',
    'Continuously upgrade curriculum, infrastructure, and faculty expertise to remain at the forefront of pharmaceutical sciences.',
  ],

  qualityPolicy: 'GRCP is committed to delivering pharmaceutical education of the highest quality through continuous improvement, industry alignment, and rigorous academic standards. We strive to nurture competent, ethical, and innovative pharmacy professionals who serve society with dedication and integrity.',

  strategies: [
    'Regularly update the curriculum to reflect advances in pharmaceutical sciences and regulatory guidelines.',
    'Invest in modern laboratory equipment and digital learning resources.',
    'Engage industry experts as guest faculty and mentors for students.',
    'Promote faculty research, publications, and professional development.',
    'Conduct rigorous internal quality audits and external assessments.',
    'Strengthen placement and alumni networks to enhance career outcomes.',
  ],

  coreValues: [
    { name: 'Excellence', desc: 'Pursuing the highest standards in education, research, and professional practice.' },
    { name: 'Integrity', desc: 'Upholding honesty, transparency, and ethical conduct in all activities.' },
    { name: 'Innovation', desc: 'Encouraging creative thinking and novel solutions in pharmaceutical sciences.' },
    { name: 'Compassion', desc: 'Nurturing a deep sense of responsibility toward patient welfare and public health.' },
    { name: 'Collaboration', desc: 'Building partnerships with industry, academia, and healthcare institutions.' },
    { name: 'Inclusivity', desc: 'Creating an equitable and supportive environment for all students and faculty.' },
  ],

  // PEO & POs (About page)
  peo: [
    { code: 'PEO 1', title: 'Competent Professionals', desc: 'Graduates will apply pharmaceutical knowledge and skills to contribute effectively to the pharmaceutical industry, hospitals, regulatory agencies, and research organisations.' },
    { code: 'PEO 2', title: 'Lifelong Learners', desc: 'Graduates will pursue continuous professional development and stay current with evolving pharmaceutical sciences, regulations, and technologies.' },
    { code: 'PEO 3', title: 'Ethical Practitioners', desc: 'Graduates will demonstrate ethical conduct, professional responsibility, and a commitment to patient safety and public health.' },
    { code: 'PEO 4', title: 'Innovative Researchers', desc: 'Graduates will engage in pharmaceutical research and development, contributing to the discovery and optimisation of new drug products.' },
    { code: 'PEO 5', title: 'Leaders & Entrepreneurs', desc: 'Graduates will lead and manage pharmaceutical operations, and explore entrepreneurial opportunities in the healthcare sector.' },
  ],

  pos: [
    { code: 'PO 1', title: 'Pharmaceutical Knowledge', desc: 'Apply knowledge of pharmaceutical sciences — including pharmacology, pharmacognosy, pharmaceutics, and pharmaceutical chemistry — to professional practice.' },
    { code: 'PO 2', title: 'Problem Analysis', desc: 'Identify, formulate, and solve complex pharmaceutical and healthcare problems using scientific principles.' },
    { code: 'PO 3', title: 'Modern Tool Usage', desc: 'Use modern instruments, laboratory equipment, and computational tools relevant to pharmaceutical sciences.' },
    { code: 'PO 4', title: 'Ethics & Professionalism', desc: 'Practice pharmacy with ethical values, professional standards, and a commitment to patient welfare.' },
    { code: 'PO 5', title: 'Communication Skills', desc: 'Communicate pharmaceutical information effectively with peers, patients, and other healthcare professionals.' },
    { code: 'PO 6', title: 'Research Aptitude', desc: 'Design and conduct experiments, analyse and interpret data, and draw meaningful conclusions in pharmaceutical research.' },
    { code: 'PO 7', title: 'Regulatory Awareness', desc: 'Understand drug regulatory frameworks and quality assurance practices relevant to pharmaceutical manufacturing and distribution.' },
    { code: 'PO 8', title: 'Lifelong Learning', desc: 'Recognise the need for and engage in continuous learning to adapt to advances in pharmaceutical sciences.' },
    { code: 'PO 9', title: 'Social Responsibility', desc: 'Understand the role of the pharmacist in promoting public health, patient counselling, and rational drug use.' },
    { code: 'PO 10', title: 'Project Management', desc: 'Apply management principles to pharmaceutical projects, team leadership, and entrepreneurial initiatives.' },
  ],

  // Administration page
  administration: {
    chairman: {
      name: 'Chairman',
      fullName: 'Dr. G. Ganga Raju',
      title: 'Chairman',
      bio: [
        'Inspired by a deep desire to help students gain quality education in the twin cities of Hyderabad and Secunderabad, the idea of an engineering and pharmacy college was conceived by Dr. G. Ganga Raju. Hence, in 1995, he established the Gokaraju Rangaraju Educational Society (GRES), in memory of his father, the Late Dr. Gokaraju Ranga Raju. It is worth noting that, apart from being a prosperous industrialist, Dr. G. Ranga Raju was also an eminent educator and evolent philanthropist.',
        'His successor, the industrious and eminent Dr. G. Ganga Raju is currently the Chairman of Laila Group of Industries and served the public by being a Member of the Parliament to the 16th Lok Sabha from 2014 to 2019. He presides over this large corporate group which has its presence in several sectors such as Pharmaceuticals, Paper, Sugar, Agribusiness, Textiles, Fishing, etc. The group is a major exporter of readymade apparel to the West, including the United States. The founding of Gokaraju Rangaraju Educational Society (GRES) in 1995 helped facilitate the establishment of the Gokaraju Rangaraju Institute of Engineering and Technology in 1997. Subsequently, to provide quality education in the field of pharmacy, the Gokaraju Rangaraju College of Pharmacy was established in 2003.',
      ],
    },
    vicePresident: {
      name: 'Vice President',
      fullName: 'Sri G.V.K. Ranga Raju',
      title: 'Vice President',
      bio: [
        'Continuing this epic journey, Sri G.V.K. Ranga Raju, the eldest scion of Dr. G. Ganga Raju has carved a name for himself in the field of business. A Chemical engineer by profession, he is deeply committed to the cause of education and is hence involved in the routine affairs of the Gokaraju Rangaraju Educational Society (GRES). His inherent business acumen and attention to detail has enabled him to be on several Boards of his family\'s businesses such as Pharmaceuticals, Paper, Aqua products, etc. He is also the current Managing Director of the group concern, Delta Paper Mills, which is in the business of manufacturing paper for writing and printing. A gifted orator and thinker, his ideas and vision have enabled the group to attain greater heights.',
        'His enormous experience and positive attitude are evident in the way he runs the Gokaraju Rangaraju College of Pharmacy and interacts with both the faculty, its students and their parents. He is a hard task master and does not compromise on ethics and integrity, especially in the field of education. Being futuristic and techno-driven, he is the key individual behind the adoption of cutting-edge technologies by the educational institutions under him. His belief is that learning should be experiential and constant and hence expects every student to be aware of and be exposed to the latest trends in technology relevant to their fields of study.',
      ],
    },
    principal: {
      name: 'Principal',
      fullName: 'Dr. M. Ganga Raju',
      title: 'Professor and Principal',
      bio: [
        'An eminent educator, Dr. M. Ganga Raju, who is currently the Principal and a Professor at Gokaraju Rangaraju College of Pharmacy, completed his B.Pharm (200) from Mangalore University and M.Pharm (2003) from Rajiv Gandhi Univerisity of Health Sciences in Bangaluru, Karnataka. He further went to obtain his Ph.D from Andhra University in Andhra Pradesh in 2011. In addition to his 21.1 years of teaching experience, he is also and eminent researcher which is evident from the fact that more than 100 of this articles have been published in peer – reviewed journals globally. Dr. Ganga Raju also has been accredited with the CMI Level 5 certificate in Management and Leadership by the Charted Management Institute, U.K. Apart from this exemplary academic credentials; he has received many awards from several distinguished institutes.',
        'Notable among them are the Research Excellence award bestowed by Institute of Scholars, a Certificate of Merit awarded by Maulana Abdul Kalam Azad Excellence Award of Education in 2020 and the Distinguished Professor Award from Sidra Bahuudeshiya Vikas Sanstha (SBVS) for the academic year 2021-21. Dr. Ganga Raju has also been awarded the "Young Professor of the year Award-2021" by Global Teaching Excellence Awards 2021, which is a token of appreciation towards illustrious minds for their impeccable contribution to the Education sector. An esteemed body, the international Research Association, based in the U.K. has endowed him the Indian Academic Leader Award in 2021. As a mark of recognition of his research skills, ASKM Innovations, an MSME Certified Research and Development Organization dedicated to societal transformation through innovation has presented him "Innovative Professor of Innovation Award: in 2021.',
      ],
    },
    governingBody: {
      year: '2024–25',
      members: [
        { no: '1', name: 'Dr. G. Ganga Raju', details: 'Chairman, Laila Group of Industries, Vijayawada, AP', role: 'President', category: 'Chairman Society Nominee' },
        { no: '2', name: 'Sri G.V.K. Ranga Raju', details: 'M.D., Delta Paper Mills, Hyderabad', role: 'Vice President', category: 'Society Nominee' },
        { no: '3', name: 'Sri. G. Rama Raju', details: 'M.D. Laila Impex, Vijayawada', role: 'Secretary', category: 'Society Nominee' },
        { no: '4', name: 'Smt. Vani Ranga Raju', details: 'M.D., Ganges Valley School, Hyderabad', role: 'Member', category: 'Society Nominee' },
        { no: '5', name: 'Prof. Jandhyala N Murthy', details: 'Director, GRIET., Hyderabad', role: 'Member', category: 'Academician' },
        { no: '6', name: 'Dr. B. Manohar', details: 'M. Sc., Ph. D Professor of Physical Chemistry, Osmania University, Hyderabad', role: 'Member', category: 'Osmania University Nominee' },
        { no: '7', name: 'Dr. M. Narasimha Rao', details: 'Managing Director, Streek Group of Companies, Hyderabad', role: 'Member', category: 'Nominee Pharmaceutical Industry' },
        { no: '8', name: 'Dr. M. Ganga Raju', details: 'Professor & Principal, Gokaraju Rangaraju College of Pharmacy, Hyderabad', role: 'Member', category: 'Member secretary & Principal' },
        { no: '9', name: 'Dr. N V L Suvarchala Reddy V', details: 'Professor, Gokaraju Rangaraju College of Pharmacy, Hyderabad', role: 'Member', category: 'Member, Senior Faculty' },
        { no: '10', name: 'Dr. M. Lakshmi Madhuri', details: 'Assistant Professor, Gokaraju Rangaraju College of Pharmacy, Hyderabad', role: 'Member', category: 'Member, Senior Faculty' },
      ],
    },
    orgChart: {
      levels: [
        { role: 'Chairman', name: 'Dr. Gokaraju Ganga Raju' },
        { role: 'Vice President', name: 'Sri. G. V. K. Ranga Raju' },
        { role: 'Principal', name: 'Dr. M. Ganga Raju' },
      ],
      departments: [
        { hod: 'HOD (Pharmaceutics)', person: 'Dr. Monika Nijhawan' },
        { hod: 'HOD (Pharmaceutical Analysis / Pharmaceutical Chemistry)', person: 'Dr. A. D. Pani Kumar' },
        { hod: 'HOD (Pharmacology / Pharmacognosy)', person: 'Dr. N. V. L. Suvarchala Reddy V' },
      ],
      staffLevels: ['Teaching Staff', 'Lab Technician', 'Lab Attendant'],
    },
    idmc: {
      description: 'The Institutional Development and Monitoring Committee (IDMC) shall be the principal academic body of the institute and shall, in addition to all other powers and duties vested in it, have the following powers and duties.',
      powers: [
        'To exercise general supervision over the academic activities of the college and to give directions regarding methods of instruction, evaluation, research, or improvements in academic standards.',
        'To consider matters of academic interest, either on its own initiative or at the instance of the governing body, and to take proper action thereon.',
        'To make arrangements for the conduct of examinations in conformity with the laws of Osmania University.',
        'To maintain proper standards of the examinations.',
        'To promote research within the institute, acquire reports on such research activities from time to time.',
        'To suggest measures for co-ordination for individual classes.',
        'To make recommendations to the board of management on: (a) Measure the improvement of standards of teaching, training, and research. (b) Institute fellowships, travelling fellowships, scholarships, medals, prizes, etc. (c) Establish or abolish departments/centers, and bye-laws covering the academic functioning of the college, discipline, admissions, examinations, award of fellowships, studentships, concessions, attendance, etc.',
        'To make a periodic review of the activities of the college, and to take appropriate action (including the making of recommendations to the governing body), to maintain and improve the standards of instruction.',
        'To exercise such other powers, and perform such other duties, as may be conferred or imposed upon it, by the rules and by-laws.',
        'To recommend teaching posts of professors, associate professors, and assistant professors to the governing body of the college.',
      ],
      members: [
        { name: 'Mr. M. Padma Raju', designation: 'Joint Secretary', role: 'Member Secretary', email: 'mrpharma@gmail.com' },
        { name: 'Dr. M. Ganga Raju', designation: 'Professor & Principal', role: 'Chairperson', email: 'ganga8000@grcp.ac.in' },
        { name: 'Dr. A. Seetha Devi', designation: 'Professor', role: 'Co-ordinator', email: 'seethadevi8090@grcp.ac.in' },
        { name: 'Dr. A. D. Pani Kumar', designation: 'Associate Professor', role: 'Member', email: 'durga8017@grcp.ac.in' },
        { name: 'Dr. Monika Nijhawan', designation: 'Professor', role: 'Member', email: 'monika8009@grcp.ac.in' },
        { name: 'Dr. N.V.L. Suvarchala Reddy V', designation: 'Professor', role: 'Member', email: 'suvarchala8018@grcp.ac.in' },
        { name: 'Dr. C. Nisha Shri', designation: 'Associate Professor', role: 'Member', email: 'nisha8091@grcp.ac.in' },
        { name: 'Mr. B. Satyanarayana Raju', designation: 'Admin Assistant', role: 'Member', email: 'rajusatish1977@gmail.com' },
      ],
    },
    antiRagging: {
      description: 'GRCP maintains a strict zero-tolerance policy against ragging in any form. The Anti-Ragging Committee is constituted in accordance with the guidelines issued by the UGC and PCI to ensure a safe, respectful, and inclusive campus environment for all students.',
      helplines: [
        { label: 'National Anti-Ragging Helpline', number: '1800-180-5522' },
        { label: 'GRCP Complaint Cell', number: '7095271271' },
      ],
      measures: [
        'Mandatory anti-ragging affidavits from students and parents at admission.',
        'Regular awareness workshops and orientation sessions for freshers.',
        'CCTV surveillance across campus and hostel premises.',
        'Confidential complaint mechanism with assured privacy.',
        'Strict disciplinary action as per UGC/PCI regulations.',
      ],
      members: [
        { name: 'Principal, GRCP', designation: 'Chairperson', phone: '7095271271' },
        { name: 'Senior Faculty Member', designation: 'Member', phone: 'Contact office' },
        { name: 'Student Welfare Officer', designation: 'Member', phone: 'Contact office' },
        { name: 'Hostel Warden', designation: 'Member', phone: 'Contact office' },
      ],
    },
    antiHarassment: {
      description: 'GRCP\'s Internal Complaints Committee (ICC) is constituted in accordance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. The committee is committed to providing a safe and dignified environment for all members of the campus community.',
      members: [
        { sno: '1', name: 'Senior Female Faculty Member', designation: 'Presiding Officer', phone: 'Contact office' },
        { sno: '2', name: 'Female Faculty Representative', designation: 'Member', phone: 'Contact office' },
        { sno: '3', name: 'Male Faculty Representative', designation: 'Member', phone: 'Contact office' },
        { sno: '4', name: 'Non-Teaching Staff Representative', designation: 'Member', phone: 'Contact office' },
        { sno: '5', name: 'External NGO Representative', designation: 'Member', phone: 'Contact office' },
      ],
      functions: [
        'Receive and investigate complaints of sexual harassment.',
        'Conduct awareness programmes to educate campus community.',
        'Recommend preventive and corrective measures.',
        'Submit annual reports to the governing body.',
        'Maintain confidentiality of all complainants.',
      ],
    },
    grievance: {
      description: 'The Grievance Redressal Committee at GRCP provides a transparent and fair mechanism for students, faculty, and staff to raise concerns related to academics, administration, or campus life. All grievances are addressed promptly and confidentially.',
      members: [
        { name: 'Principal, GRCP', designation: 'Chairperson', role: 'Overall Oversight' },
        { name: 'Senior Faculty', designation: 'Member', role: 'Academic Grievances' },
        { name: 'Administrative Officer', designation: 'Member', role: 'Administrative Grievances' },
        { name: 'Student Representative', designation: 'Member', role: 'Student Liaison' },
      ],
      process: [
        { label: 'Submit Grievance', desc: 'Submit your grievance in writing or online through the college portal.' },
        { label: 'Acknowledgement', desc: 'You will receive an acknowledgement within 2 working days.' },
        { label: 'Review & Resolution', desc: 'The committee reviews the complaint and resolves it within 15 working days.' },
        { label: 'Appeal', desc: 'If unsatisfied, you may appeal to the Principal or the Governing Body.' },
      ],
      formUrl: '#',
    },
    iqac: {
      description: 'The Internal Quality Assurance Cell (IQAC) at GRCP is responsible for developing a quality culture within the institution. It coordinates quality-related activities, prepares Annual Quality Assurance Reports (AQARs), and facilitates continuous improvement in academic and administrative processes.',
      objectives: [
        'Develop and implement quality benchmarks for institutional activities.',
        'Coordinate feedback mechanisms from students, faculty, and employers.',
        'Facilitate accreditation and assessment processes (NBA, NAAC).',
        'Promote best practices in teaching, learning, and research.',
        'Prepare and submit Annual Quality Assurance Reports.',
      ],
      members: [
        { name: 'Principal, GRCP', designation: 'Chairperson' },
        { name: 'IQAC Coordinator', designation: 'Coordinator' },
        { name: 'Senior Faculty – Pharmaceutics', designation: 'Member' },
        { name: 'Senior Faculty – Pharmacology', designation: 'Member' },
        { name: 'Industry Representative', designation: 'Member' },
        { name: 'Alumni Representative', designation: 'Member' },
        { name: 'Student Representative', designation: 'Member' },
      ],
    },
  },

  // Admissions page
  admissions: {
    procedure: [
      { step: '1', title: 'Check Eligibility', desc: 'B.Pharmacy: 10+2 with Physics, Chemistry, Biology/Mathematics. M.Pharmacy: B.Pharmacy degree with qualifying PGECET score.' },
      { step: '2', title: 'Appear for Entrance', desc: 'Qualify TG EAPCET (B.Pharmacy) or TG PGECET (M.Pharmacy). GRCP counselling codes: GRCP (UG) and GRCP1 (PG).' },
      { step: '3', title: 'Counselling', desc: 'Participate in the centralized counselling conducted by TSCHE. Choose GRCP and your preferred specialization.' },
      { step: '4', title: 'Document Verification', desc: 'Submit original documents: 10+2 marks memo, EAMCET/PGECET hall ticket & rank card, transfer certificate, conduct certificate, and caste certificate if applicable.' },
      { step: '5', title: 'Fee Payment & Admission', desc: 'Pay the prescribed tuition and other fees. Collect your admission letter and report to the college on the specified date.' },
    ],
    fees: [
      { programme: 'B.Pharmacy', tuition: '₹85,000 per year', hostel: '₹60,000 per year', total: '₹1,45,000 per year (approx.)' },
      { programme: 'M.Pharmacy (Pharmaceutics)', tuition: '₹90,000 per year', hostel: '₹60,000 per year', total: '₹1,50,000 per year (approx.)' },
      { programme: 'M.Pharmacy (Pharmaceutical Analysis)', tuition: '₹90,000 per year', hostel: '₹60,000 per year', total: '₹1,50,000 per year (approx.)' },
      { programme: 'M.Pharmacy (Pharmacology)', tuition: '₹90,000 per year', hostel: '₹60,000 per year', total: '₹1,50,000 per year (approx.)' },
    ],
    eamcetRanks: [
      { year: '2024–25', category: 'OC', lastRank: '45,230' },
      { year: '2024–25', category: 'BC-A', lastRank: '68,120' },
      { year: '2024–25', category: 'BC-B', lastRank: '62,540' },
      { year: '2024–25', category: 'SC', lastRank: '28,430' },
      { year: '2024–25', category: 'ST', lastRank: '18,760' },
      { year: '2023–24', category: 'OC', lastRank: '43,890' },
      { year: '2023–24', category: 'BC-A', lastRank: '66,310' },
      { year: '2023–24', category: 'SC', lastRank: '27,900' },
    ],
    pgecetRanks: [
      { year: '2024–25', specialization: 'Pharmaceutics', category: 'OC', lastRank: '520' },
      { year: '2024–25', specialization: 'Pharmaceutical Analysis', category: 'OC', lastRank: '680' },
      { year: '2024–25', specialization: 'Pharmacology', category: 'OC', lastRank: '590' },
      { year: '2023–24', specialization: 'Pharmaceutics', category: 'OC', lastRank: '498' },
    ],
  },

  // Programmes page
  programmes: {
    bPharmacy: {
      title: 'Bachelor of Pharmacy (B.Pharmacy)',
      duration: '4 Years',
      intake: '60 Seats',
      affiliation: 'Osmania University',
      approval: 'PCI Approved | NBA Accredited 2025–28',
      about: 'The B.Pharmacy program at GRCP is a four-year undergraduate degree designed to produce competent, ethical, and innovative pharmacy professionals. The curriculum integrates pharmaceutical sciences, clinical training, and research skills, preparing graduates for careers in pharmaceutical industry, hospitals, retail pharmacy, regulatory bodies, and academic research.',
      curriculum: [
        { sem: 'I & II', subjects: 'Pharmaceutics, Pharmaceutical Chemistry, Pharmacognosy, Human Anatomy & Physiology, Remedial Mathematics' },
        { sem: 'III & IV', subjects: 'Pharmaceutical Analysis, Pharmacology, Pathophysiology, Computer Applications in Pharmacy, Environmental Sciences' },
        { sem: 'V & VI', subjects: 'Industrial Pharmacy, Pharmaceutical Jurisprudence, Medicinal Chemistry, Pharmacotherapeutics, Hospital Pharmacy' },
        { sem: 'VII & VIII', subjects: 'Clinical Pharmacy, Biopharmaceutics, Project Work, Electives, Internship' },
      ],
      careerPaths: [
        'Pharmaceutical Industry (Production, QA, QC, R&D)',
        'Hospital & Clinical Pharmacy',
        'Retail & Community Pharmacy',
        'Drug Regulatory Affairs',
        'Academic Research & Teaching',
        'Drug Information Specialist',
      ],
    },
    mPharmacy: {
      title: 'Master of Pharmacy (M.Pharmacy)',
      duration: '2 Years',
      approval: 'PCI Approved',
      about: 'The M.Pharmacy program offers advanced postgraduate education in pharmaceutical sciences with three specializations. Students engage in rigorous coursework, research projects, and laboratory training, preparing them for leadership roles in pharmaceutical research, academics, and industry.',
      specializations: [
        {
          name: 'Pharmaceutics',
          href: '/programmes/m-pharmacy/pharmaceutics',
          desc: 'Focuses on drug formulation, drug delivery systems, biopharmaceutics, pharmacokinetics, and pharmaceutical technology.',
          careers: ['Formulation Scientist', 'Drug Delivery Researcher', 'Regulatory Affairs Specialist'],
        },
        {
          name: 'Pharmaceutical Analysis',
          href: '/programmes/m-pharmacy/pharmaceutical-analysis',
          desc: 'Covers analytical methods, quality control, validation techniques, and spectroscopic analysis of pharmaceutical products.',
          careers: ['Analytical Chemist', 'Quality Control Manager', 'Research Scientist'],
        },
        {
          name: 'Pharmacology',
          href: '/programmes/m-pharmacy/pharmacology',
          desc: 'Studies the mechanisms of drug action, clinical pharmacology, toxicology, and new drug discovery processes.',
          careers: ['Clinical Research Associate', 'Pharmacovigilance Specialist', 'Academic Researcher'],
        },
      ],
    },
  },

  // Research page
  research: {
    overview: 'Research at GRCP is driven by a commitment to advancing pharmaceutical sciences and contributing to healthcare solutions. Faculty and postgraduate students engage in projects spanning drug formulation, pharmacology, analytical chemistry, and pharmacognosy — supported by well-equipped research laboratories and collaborations with pharmaceutical industry partners.',
    highlights: [
      { count: '50+', label: 'Research Publications' },
      { count: '10+', label: 'Faculty with Ph.D' },
      { count: '5+', label: 'Ongoing Projects' },
      { count: '3', label: 'Ph.D Guideship Areas' },
    ],
    phdGuideships: [
      { department: 'Pharmaceutics', guide: 'Faculty with Ph.D in Pharmaceutics', university: 'Osmania University', areas: 'Novel Drug Delivery Systems, Nanoparticles, Biopharmaceutics' },
      { department: 'Pharmacology', guide: 'Faculty with Ph.D in Pharmacology', university: 'Osmania University', areas: 'Neuropharmacology, Anti-Cancer Drug Screening, Toxicology' },
      { department: 'Pharmaceutical Chemistry', guide: 'Faculty with Ph.D in Pharmaceutical Chemistry', university: 'Osmania University', areas: 'Medicinal Chemistry, Drug Synthesis, Spectroscopy' },
    ],
    publications: [
      { year: '2024', title: 'Formulation and evaluation of sustained release tablets of Metformin HCl', journal: 'Journal of Pharmaceutical Sciences', authors: 'Faculty, GRCP' },
      { year: '2024', title: 'Nanoparticulate drug delivery systems for cancer therapy: a review', journal: 'International Journal of Drug Delivery', authors: 'Faculty, GRCP' },
      { year: '2023', title: 'Pharmacological evaluation of herbal extracts for anti-inflammatory activity', journal: 'Pharmacognosy Journal', authors: 'Faculty, GRCP' },
      { year: '2023', title: 'RP-HPLC method development and validation for antihypertensive drugs', journal: 'Journal of Analytical Chemistry', authors: 'Faculty, GRCP' },
    ],
    patents: [
      { title: 'Novel Oral Drug Delivery System for Poorly Soluble Drugs', inventors: 'Faculty, GRCP', status: 'Applied', year: '2024' },
      { title: 'Herbal Formulation with Enhanced Bioavailability', inventors: 'Faculty, GRCP', status: 'Applied', year: '2023' },
    ],
    sponsoredProjects: [
      { title: 'Development of Nano-Formulations for Targeted Drug Delivery', fundingAgency: 'DST-SERB', pi: 'Faculty, GRCP', amount: '₹12 Lakhs', status: 'Ongoing' },
      { title: 'Pharmacovigilance and Drug Safety Monitoring Study', fundingAgency: 'ICMR', pi: 'Faculty, GRCP', amount: '₹8 Lakhs', status: 'Completed' },
    ],
  },

  // Examination page
  examination: {
    overview: 'The Examination Branch at GRCP coordinates all examination-related activities for B.Pharmacy and M.Pharmacy programs in accordance with Osmania University guidelines and PCI norms. The branch ensures transparent, timely, and fair conduct of internal and external examinations.',
    contact: { name: 'Examination Branch, GRCP', phone: '7095271271', email: 'exams@grcp.ac.in', hours: 'Monday to Saturday, 9:00 AM – 4:00 PM (2nd Saturday Holiday)' },
    activities: [
      'Conduct of Sessional (Mid-term) Examinations',
      'Coordination with Osmania University for Theory and Practical Examinations',
      'Issuance of Hall Tickets',
      'Tabulation and display of sessional marks',
      'Coordination for supplementary / backlog examinations',
      'Submission of internal assessment marks to the university',
    ],
  },

  // Placements page
  placements: {
    overview: 'The Placement Cell at GRCP is dedicated to preparing students for successful careers in the pharmaceutical and healthcare industry. Through industry interface programmes, mock interviews, resume workshops, and campus recruitment drives, the cell bridges the gap between academic training and professional employment.',
    stats: [
      { label: 'Placement Rate', value: '80%+' },
      { label: 'Highest Package', value: '6+ LPA' },
      { label: 'Companies Visited', value: '30+' },
      { label: 'Years of Placements', value: '10+' },
    ],
    recruiters: [
      { name: 'Sun Pharmaceutical Industries' },
      { name: 'Cipla Ltd.' },
      { name: "Dr. Reddy's Laboratories" },
      { name: 'Aurobindo Pharma' },
      { name: 'Apollo Hospitals' },
      { name: 'Lupin Pharmaceuticals' },
      { name: 'Hetero Drugs' },
      { name: 'Natco Pharma' },
      { name: 'Granules India' },
      { name: 'Divi\'s Laboratories' },
    ],
    activities: [
      'Pre-Placement Training: Aptitude, GD, and Interview preparation',
      'Resume writing workshops and LinkedIn profile building sessions',
      'Industry guest lectures and factory visits',
      'Campus recruitment drives by pharma and healthcare companies',
      'Internship facilitation during 7th and 8th semesters',
      'Career counselling and higher education guidance',
    ],
  },

  // Alumni page
  alumni: {
    overview: 'The GRCP Alumni Association connects graduates across the pharmaceutical, healthcare, and research sectors. Alumni play an active role in mentoring current students, facilitating placements, funding initiatives, and shaping the institution\'s growth.',
    executiveBody: [
      { role: 'President', name: 'Alumni Representative', batch: '2010' },
      { role: 'Vice President', name: 'Alumni Representative', batch: '2012' },
      { role: 'Secretary', name: 'Alumni Representative', batch: '2014' },
      { role: 'Treasurer', name: 'Alumni Representative', batch: '2013' },
      { role: 'Joint Secretary', name: 'Alumni Representative', batch: '2015' },
    ],
    distinguished: [
      { name: 'Distinguished Alumni', batch: '2008', currentRole: 'Senior Scientist, Sun Pharma', achievement: 'Published 15 research papers in international journals' },
      { name: 'Distinguished Alumni', batch: '2010', currentRole: 'Regulatory Affairs Manager, Cipla', achievement: 'Led global drug regulatory submissions across 10 countries' },
      { name: 'Distinguished Alumni', batch: '2012', currentRole: 'Clinical Pharmacologist, Apollo Hospitals', achievement: 'Pioneered clinical pharmacy practice protocols in Telangana' },
    ],
  },
};

export default college;
