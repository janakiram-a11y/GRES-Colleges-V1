export function withAlpha(hex, opacity) {
  return hex + Math.round(opacity * 255).toString(16).padStart(2, '0').toUpperCase();
}

const college = {
  id: 'griet',
  shortName: 'GRIET',
  fullName: 'Gokaraju Rangaraju Institute of Engineering & Technology',
  tagline: 'Empowering minds and shaping future leaders since 1997.',
  email: 'info@griet.ac.in',
  phone: '+91 40 2304 2758',
  admissionsPhone: '+91-40-2970 8243',
  admissionsLabel: 'Admissions helpdesk available for 2025–26',
  address: 'Nizampet Road, Bachupally, Kukatpally, Hyderabad, Telangana 500090',
  logo: '/imgi_1_GRIET_Logo.png',
  accreditationLogo: '/imgi_2_accrediation_logos.png',
  smallLogo: '/small-logo.png',
  primaryColor: '#5B1027',
  accentColor: '#C32033',
  highlightColor: '#C32033',
  darkAccent: '#222222',
  neutralAccent: '#BFBFBF',
  softAccent: '#F3DAB2',
  announcements: [
    { text: 'Deemed-to-be University – LOI Received', badge: 'NEW', isLOI: true },
    { text: 'Admissions Open', href: 'https://greit-login-portal.vercel.app/', badge: 'NEW' },
  ],
  navLinks: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Administration',
      href: '/administration',
      dropdown: ['Management', 'Governing Body', 'Academic Council', 'Director', 'Principal', 'Deans', 'HODs', 'GRIET Strategic Plan', 'BOS', 'Finance Committee', 'Coordinators & Committees', 'IDMC', 'IIC', 'Anti-Sexual Harassment Cell', "Women's Development Cell", 'Organization Chart', 'Annual Reports', 'GRIET Skill Series', 'Accreditations', 'Honours & Awards', 'Anti-Ragging', 'DTBU', 'Margdarshan'],
    },
    {
      name: 'Admissions',
      href: '/admissions',
      dropdown: ['Programmes', 'Admission Procedure', 'Fee Structure', 'EAPCET Last Rank', 'ECET Last Rank', 'Scholarships'],
    },
    {
      name: 'Academics',
      href: '/academics',
      dropdown: ['Regulations', 'Syllabus', 'Academic Calendar', 'Library', 'Scholarships', 'Endowment Awards', 'Moodle', 'Diary 24–25', 'Finishing School', 'Code of Conduct for Students', 'Digital Wellbeing Council', 'Internships', 'Value Added Programs', 'Professional Associations', 'Central Facilities'],
    },
    {
      name: 'Examinations',
      href: '/examinations',
      dropdown: ['Gold Medals', 'Exam Notifications', 'Results', 'Exam Branch Downloads', 'Transcripts & Certificates'],
    },
    {
      name: 'Departments',
      dropdown: ['Electronics and Communication Engineering', 'Computer Science and Engineering', 'Computer Science and Engineering – AIML', 'Computer Science and Engineering – CSBS', 'Computer Science and Engineering – DS', 'Civil Engineering', 'Mechanical Engineering', 'Electrical and Electronics Engineering', 'Information Technology', 'Humanities and Sciences'],
    },
    { name: 'Rankings', href: '/rankings' },
    {
      name: 'Research',
      href: '/research',
      dropdown: ['Research Projects', 'Consultancy', 'Patents', 'Publications', 'MOUs', 'Innovation Awards', 'PhD Programmes', 'Conferences', 'Journals'],
    },
    {
      name: 'Placements',
      href: '/placements',
    },
  ],
  quickLinks: [
    { label: 'About GRIET', href: '/about' },
    { label: 'Academic Programs', href: '/admissions/programmes' },
    { label: 'Admissions 2025', href: '/admissions' },
    { label: 'Fee Structure', href: '/admissions/fee-structure' },
    { label: 'Scholarships', href: '/admissions/scholarships' },
    { label: 'Placements', href: '/placements' },
    { label: 'Rankings & Accreditations', href: '/rankings' },
    { label: 'Research', href: '/research' },
    { label: 'Departments', href: '/departments/cse' },
    { label: 'Contact Us', href: '/contact' },
  ],
  resources: [
    { label: 'Student Portal', href: 'https://greit-login-portal.vercel.app/' },
    { label: 'Library & e-Resources', href: '/academics/library' },
    { label: 'Moodle LMS', href: 'http://moodle.griet.ac.in/' },
    { label: 'OPAC (Library Catalogue)', href: 'https://griet.bestbookbuddies.com' },
    { label: 'Exam Notifications', href: '/examinations/exam-notifications' },
    { label: 'Results', href: '/examinations/results' },
    { label: 'Anti-Ragging Cell', href: '/anti-ragging' },
    { label: 'IQAC', href: '/iqac' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Careers at GRIET', href: '/careers' },
  ],
  socialLinks: [
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61567249664086' },
    { label: 'Instagram', href: 'https://www.instagram.com/griet_engineering_college' },
    { label: 'Twitter', href: 'https://x.com/GRIET_Engg_Inst' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/griet-engineering-college-19632a273/' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCjSaY5jWUAqMjJY6-u661Ew' },
  ],

  heroHeading: 'Empowering Innovation, Excellence & Future Leaders',
  heroSubtext: 'For over two decades, Gokaraju Rangaraju Institute of Engineering & Technology has been shaping bright minds into industry-ready professionals, innovators, and responsible leaders. With world-class academics, vibrant campus life, and strong placements, GRIET prepares students for a global future.',
  heroCTALabel: 'Admissions Open 2025',
  heroCTAHref: 'https://greit-login-portal.vercel.app/',
  heroBgImage: '/imgi_5_aboutusbanner.jpg',

  statsBarItems: ['NAAC A++ Accredited', 'NBA Accredited Programs', '900+ Recruiters', '44 LPA Highest Package'],

  campusIntroLabel: 'Campus Experience',
  campusIntroHeading: 'Be a Part of the GRIET Experience',
  campusIntroDesc: 'Step into a future-focused campus where innovation meets opportunity. At GRIET, students learn beyond classrooms through hands-on labs, collaborative projects, industry exposure, and a thriving student community.',
  campusVideoSrc: '/Gokaraju Rangaraju Institute of Engineering and Technology BTech Review.mp4',
  campusIntroImage: null,

  highlightCards: [
    { title: 'Rankings', desc: 'Consistently ranked among the top 100 engineering colleges in India.' },
    { title: 'Placements', desc: 'Highest package of 44 LPA with 900+ offers this year.' },
    { title: 'Community', desc: 'A vibrant and diverse student community from all over.' },
  ],

  aboutHeading: 'Welcome to Gokaraju Rangaraju Institute of Engineering and Technology',
  aboutP1: 'Established in 1997, GRIET is a premier institute dedicated to excellence in technical education. We strive to provide a conducive environment for learning, research, and innovation, ensuring our students are well-equipped to face global challenges.',
  aboutP2: 'With state-of-the-art infrastructure, experienced faculty, and strong industry connections, we focus on the holistic development of our students, nurturing them into competent professionals and responsible citizens.',
  aboutFeatures: [
    { title: 'NBA Accredited', sub: 'Top-tier programs' },
    { title: 'Autonomous', sub: 'UGC recognized' },
    { title: 'Expert Faculty', sub: 'Ph.D. qualified professors' },
    { title: 'Infrastructure', sub: 'Modern labs & campus' },
  ],
  aboutYears: '25+',
  aboutYearsLabel: 'Years of Academic Excellence',
  aboutImage: '/Why choose us.png',

  whyChooseLabel: 'Why Choose GRIET',
  whyChooseHeading: 'Academic Excellence That Shapes Your Success',
  whyChooseCards: [
    { title: 'Trusted Academic Standards', desc: 'Programs designed with strong educational benchmarks and global quality standards.' },
    { title: 'Career Advantage', desc: 'Credentials that strengthen your professional profile in the highly competitive job market.' },
    { title: 'Contemporary Learning', desc: 'Courses updated continuously to match rapid industry transformation and tech evolution.' },
    { title: 'Leadership Readiness', desc: 'Build the precise mindset required to succeed in high-stakes competitive environments.' },
    { title: 'Innovation Culture', desc: 'Extensive support for fresh ideas, deep experiments, and high-impact student projects.' },
    { title: 'Holistic Development', desc: 'A carefully balanced focus on rigorous academics, soft skills, and personal well-being.' },
  ],

  academicProgramsLabel: 'Academic Programs',
  academicProgramsHeading: 'Programs Designed for Future Engineers',
  academicProgramsDesc: 'Explore career-focused programs built to prepare students for innovation, leadership, and industry success.',
  academicPrograms: [
    { count: '8+', title: 'Undergraduate Programs', desc: 'Industry-focused engineering degrees with strong academic foundations.', href: '/admissions/programmes' },
    { count: '2+', title: 'Postgraduate Programs', desc: 'Advanced specializations for higher learning and research.', href: '/admissions/programmes' },
  ],

  careerLabel: 'Career Outcomes',
  careerHeading: 'Where Talent Meets Opportunity',
  careerDesc: 'Our graduates are hired by top recruiters across technology, consulting, analytics, and core engineering domains. Strong placement training and industry collaborations help students launch successful careers.',
  careerHighestPackage: '44 LPA',
  careerOffersCount: '900+',
  careerRecruiters: ['Google', 'TCS', 'Infosys', 'Wipro', 'Deloitte'],
  careerImage: '/Career Outcomes.png',

  researchLabel: 'Pushing Boundaries',
  researchHeading: 'Research & Innovation at GRIET',
  researchStats: [
    { count: '50+', label: 'Funded Projects', desc: 'Backed by DST, AICTE, and top industry partners.' },
    { count: '1200+', label: 'Publications', desc: 'High-impact papers in Scopus and IEEE journals.' },
    { count: '85+', label: 'Patents Filed', desc: 'Showcasing strong innovation and IP generation.' },
    { count: '15', label: 'Centre of Excellence Labs', desc: 'Dedicated advanced labs for niche technologies.' },
  ],

  campusLifeLabel: 'Student Experience',
  campusLifeHeading: 'Vibrant Campus Life',
  campusLifeCards: [
    { title: 'Cultural Events & Fests', desc: 'Annual flagship events bringing students together from across the country.', img: '/Cultural event & Fests.png', large: true },
    { title: 'Sports Facilities', desc: 'Indoor and outdoor sports complexes.', img: '/Sports fecilities.png' },
    { title: 'Innovation Clubs', desc: 'Student-run tech and non-tech chapters.', img: '/Innovation clubs.png' },
    { title: 'Hostel Life', desc: 'Comfortable, secure, and vibrant residential halls.', img: '/Hostel life.png' },
    { title: 'Central Library', desc: 'A hub of knowledge with thousands of resources.', img: '/Central library.png' },
  ],

  ctaHeading: 'Admissions Open for 2025–26',
  ctaDesc: 'Take the first step towards a bright future. Join GRIET and shape your career with world-class education.',
  ctaCTALabel: 'Apply Now',
  ctaCTAHref: 'https://greit-login-portal.vercel.app/',
  ctaSecondaryLabel: 'Download Brochure',

  aboutPageBannerImage: '/imgi_5_aboutusbanner.jpg',
  administrationPageBannerImage: '/imgi_5_aboutusbanner.jpg',

  administration: {
    governingBody: {
      heading: 'Governing Body',
      members: [
        {
          name: 'Dr. Gokaraju Ganga Raju',
          role: 'Chairman',
          desc: 'Chairman of Laila Group of Industries; founder of GRES. Initiated Engineering and Pharmacy education under GRES in 1997.',
        },
        {
          name: 'Sri G.V.K. Ranga Raju',
          role: 'Vice President',
          desc: 'Oversees day-to-day matters of GRIET. Advocates technology-driven education and student empowerment.',
        },
        {
          name: 'Secretary, GRES',
          role: 'Secretary',
          desc: 'Responsible for administrative and statutory governance of the Gokaraju Rangaraju Educational Society.',
        },
      ],
    },
    principal: {
      heading: "Principal's Message",
      name: 'Prof. V. Kamakshi Prasad',
      designation: 'Principal, GRIET',
      message:
        'At GRIET, we believe that education is not just about acquiring knowledge, but about developing the ability to think critically, innovate relentlessly, and serve society with integrity. Our commitment to academic excellence, research, and holistic development shapes every engineer who walks out of our campus.',
    },
    academicLeadership: {
      heading: 'Academic Leadership',
      members: [
        { name: 'Dean – Academics', role: 'Dean of Academics', desc: 'Oversees curriculum design, faculty development, and academic policy.' },
        { name: 'Dean – Research', role: 'Dean of Research & Development', desc: 'Leads sponsored research, publications, patents, and industry collaboration.' },
        { name: 'Dean – Student Affairs', role: 'Dean of Student Affairs', desc: 'Manages student welfare, counselling, clubs, and extracurricular activities.' },
      ],
    },
  },

  aboutInspirer: {
    heading: 'About Inspirer and Promoters',
    inspirer: {
      label: 'The Inspirer:',
      text: 'Late Shri Gokaraju Rangaraju garu is the inspiration for establishment of Gokaraju Rangaraju Educational Society. He served as Member of Legislative Assembly from Undi Constituency in United Andhra Pradesh. He served as the Chairman of Board of Trustees of Tirumala Tirupathi Devasthanam twice. He is a crusader of Education and with his utmost interest in education, he served as Chairman of Governing Bodies of DNR College and SRKR Engineering College of West Godavari Districts, Andhra Pradesh.',
    },
    promoters: [
      {
        name: 'Dr. Gokaraju Ganga Raju',
        desc: 'is an Indian politician and a Member of Parliament to the 16th Lok Sabha from Narsapuram (Lok Sabha constituency), Andhra Pradesh in 2014. He is also the founder of Kala Group of Companies.',
      },
      {
        name: 'Dr. Ganga Raju',
        desc: 'was the Secretary of Andhra Cricket Association (2001–2019). He was a Vice-President, South Zone, BCCI (2015–2019).',
      },
    ],
  },

  sponsoringSociety: {
    heading: 'The Sponsoring Society:',
    text: 'Dr. Gokaraju Rangaraju garu started Gokaraju Educational Society in fond memory of his father late Shri Gokaraju Rangaraju garu with a motto to "Promote modern and scientific education and to help develop the character of the younger generation of all castes, communities and religions".',
  },

  aboutGriet: {
    heading: 'About GRIET:',
    paragraphs: [
      'Gokaraju Rangaraju Institute of Engineering and Technology (GRIET), established in 1997 under the patronage of the Gokaraju Rangaraju Educational Society, is an AICTE approved and permanently affiliated college with UGC Autonomous status under JNTUH, Hyderabad. Following its mission to "achieve and impart quality education on students with an emphasis on practical skills and social relevance", GRIET\'s endeavour has been to create a conducive teaching learning environment accentuated by qualified staff from academia and industry, infrastructure and support facilities.',
      'GRIET is accredited by National Assessment and Accreditation Council (NAAC) with A++ grade (CGPA:3.55) and 06 UG programs(CSE, IT, ECE, EEE, CIVIL,MECH) and 04 PG programs(Sr Engg, VLSI, PE, DIM) are accredited by National Board of Accreditation (NBA). The quality management system at the Institution is certified by ISO 9001:2015. GRMTL, the material testing laboratory at GRIET is accredited by NABL. GRES is recognized as Scientific Industrial Research Organization(SIRO) by Department of Scientific and Industrial Research(DSIR) by Government of India.',
      'GRIET is ranked in National Institutional Ranking Framework (NIRF) by Ministry of Education, Government of India with 101-150 rank band in 2024 & 2023, 148th rank in 2022, 115th rank in 2021, 172nd rank in 2020, 179th rank in 2019, 151-200 rank band in 2017 & 2018.',
      'GRIET is a proud recipient of TEQIP-II grant of Rs.400 Lakhs from World Bank, and AICTE Margadarshan scheme.',
      'The campus spread across 24 acres of sprawling lush green land of small hilly with excellent landscaping. The institution emphasizes to prepare young engineering graduates with practical skills and social relevance with right attitude, skill and knowledge.',
      'All Undergraduate and Postgraduate engineering programs offered at GRIET incorporate cross-cutting themes of professional ethics, gender equality, human values, environmental sustainability, and social responsibility. These programs are designed to address local, regional, national, and global challenges, emphasizing employability, entrepreneurship, and skill development.',
      'In line with the NEP-2020, the institution has registered for Digi-locker National Academic Depository (NAD) and ABC/APAAR-ID.',
      'The Institution has adequate classrooms with Audio Visual facilities and laboratories with state-of-art equipment. The computer laboratories are equipped with high end computers and necessary software.',
      'The Institution has conducive support facilities like Computer Centre, Language-laboratories, Training-placement cell, Canteen, Indoor-outdoor sports, NSS Cell, Gym, Medical Centre with full time doctor, Ramps, elevator, Stores, Bank with ATM, Parking, Solar Roof top, Diesel generators, RO plant and STP and Divyangjan friendly Infrastructure.',
      'GRIET Library and Information Centre is a 2-storey mezzanine spread over 1670 sq.mt housing a collection of 17,155 titles and 1,30,740 volumes, 150 National and International Print Journals, more than 6500 e-books and 21500+ E-journals. The Dewey Decimal Classification is being practised at GRIET library for classification and shelving of books. The library is fully automated with KOHA software and cloud based OPAC.',
      'GRIET has established cutting-edge facilities including the AICTE IDEA Lab and Incubation Centre to nurture entrepreneurial endeavours under MTML Centre of Excellence in Material Processing and Characterization, High Performance Computing, Artificial Intelligence and Machine Learning, a central facility of Scanning Electron Microscope(SEM) worth 1.2crores sponsored by DST-FIST with EDAX and Core Scan. The International Conference (ICMPC) hosted by GRIET is a renowned conference for Material Processing and Characterization.',
      'GRIET is holding MoUs with leading educational institutions and industries like IIT Hyderabad, NIT Warangal, Curtin University at Malaysia and Infosys Spring Board.',
      'The Vision of the Institute is "To be among the best of the institutions for engineers and technologists with attitudes, skills and knowledge and to become an epicentre of creative solutions" and the mission is "To achieve and impart quality education with an emphasis on practical skills and social relevance" with core values of "Excellence, Integrity, Innovation, Entrepreneurship, Leadership, Sustainability and Service to the Nation"',
    ],
  },

  aboutVisionMission: [
    {
      title: 'Vision',
      text: 'To be among the best of the institutions for engineers and technologists with attitudes, skills and knowledge and to become an epicentre of creative solutions.',
      bg: '#1B3A4B',
    },
    {
      title: 'Mission',
      text: 'To achieve and impart quality education with an emphasis on practical skills and social relevance.',
      bg: '#5B1027',
    },
    {
      title: 'Quality Policy',
      text: 'To provide an integrated learning environment to enable students to grow towards their full potential and meet the high expectations of the industry and the Society.',
      bg: '#1A1A2E',
    },
    {
      title: 'Strategies',
      text: 'To translate our vision into action and accomplish our mission, we strive to:\n• provide state-of-art infrastructure.\n• recruit, motivate and develop high caliber multi-speciality faculty.\n• continuously review, innovate and experiment teaching methodologies and learning resources.\n• focus on research, training and consultancy through an integrated Institute-Industry symbiosis.',
      bg: '#2D2D2D',
    },
    {
      title: 'Core Values',
      text: 'Excellence: Continually strive to achieve the highest standards in education and research\nIntegrity: Sustain an atmosphere of honesty, openness, and transparency in all dealings\nInnovation: Promote a culture of curiosity and reward originality of thought and action\nEntrepreneurship: Promote and nurture entrepreneurial spirit among students\nLeadership: Develop leaders with ability to find creative solutions to the problems of the industry\nSustainability: Conduct research that addresses critical global challenges and promote public awareness of the issues involved\nService to the Nation: Utilize technology for building national wealth',
      bg: '#1E3A1E',
    },
  ],
};

export default college;
