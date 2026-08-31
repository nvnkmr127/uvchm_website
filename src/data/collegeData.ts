export interface Program {
  id: string;
  title: string;
  department: string;
  level: 'Undergraduate' | 'Diploma' | 'Postgraduate' | 'Certification';
  duration: string;
  description: string;
  careers: string[];
  image?: string;
  featured?: boolean;
  overviewExtended?: string;
  whyChoose?: { title: string; description: string }[];
  faq?: { question: string; answer: string }[];
  modules?: string[];
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Masterclass' | 'Competition' | 'Workshop' | 'Placement';
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
}

export interface Facility {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  position: string;
  department: string;
  qualifications: string;
  expertise: string;
  perspective: string;
  image: string;
  imageStyle?: string;
}

export interface Recruiter {
  name: string;
  logoText: string;
  tier: string;
}

export const COLLEGE_INFO = {
  name: 'UVCHM',
  shortName: 'UVCHM',
  motto: 'Helping hospitality students become creators, business owners & achievers.',
  rankTag: "NORTHERN TELANGANA'S BIGGEST HOTEL MANAGEMENT COLLEGE",
  subtitle: '2 Own Campus Buildings with 5★ Star Infrastructure and International Experienced Faculty',
  established: '2024',
  accreditation: 'Govt Recognized • 100% Guaranteed 5-Star Placements',
  location: 'Nizamabad Campus, Hospitality Avenue, City Center',
  contact: {
    phone: '+91 84639 95959 / +91 84659 95959',
    email: 'Info@uvchm.com',
    address: '2nd floor, Never Give Up Building, 1, Gangastan, Nizamabad, Telangana 503003',
  },
  stats: [
    { label: 'OWN CAMPUS BUILDINGS', value: '2', subtext: 'Spacious Infrastructure' },
    { label: 'PRACTICAL LABS', value: '8+', subtext: '5★ Star Standard' },
    { label: 'LIVE SHOW KITCHEN', value: '1', subtext: 'Advanced Culinary Setup' },
    { label: 'DIGITAL CLASSROOMS', value: '4', subtext: 'Computer & Software Lab' },
  ],
};

export const CAREER_ROADMAP = [
  {
    step: '01',
    title: 'Get Admission to UVCHM',
    description: 'Apply, qualify, and complete admission to start your hospitality career.',
  },
  {
    step: '02',
    title: 'Choose Your Course',
    description: 'Pick a specialization based on your skills and interests.',
  },
  {
    step: '03',
    title: 'Learn & Grow',
    description: 'Gain practical skills, industry knowledge, and soft skills for hospitality success.',
  },
  {
    step: '04',
    title: 'Train in a 5-Star Hotel',
    description: 'Get real-world experience through internships at top luxury hotels.',
  },
  {
    step: '05',
    title: 'Get Certified & Graduate',
    description: 'Pass exams, earn your diploma, and prepare for job interviews.',
  },
  {
    step: '06',
    title: 'Start Your Global Career',
    description: 'Secure global job placements with UV Overseas Consultancy. Get expert interview and visa support!',
  },
];

export const BROCHURE_FACILITIES = [
  {
    title: '2 Advanced Training Kitchens & Bakery + 1 Live Show Kitchen',
    description: 'Hands-on culinary training in well-equipped kitchens with commercial cooking ranges.',
    category: 'Culinary Arts',
  },
  {
    title: '2 F&B Service Practical Labs',
    description: 'Fine dining, buffet, bar setup, cocktail mixology & barista coffee training.',
    category: 'Food & Beverage',
  },
  {
    title: '2 Housekeeping Practical Labs',
    description: 'Mock hotel guest rooms for real-time housekeeping, suite care & linen training.',
    category: 'Accommodation',
  },
  {
    title: '2 Front Office Labs',
    description: 'Simulated hotel reception desk & hotel management software administration training.',
    category: 'Administration',
  },
  {
    title: '4 Digital Classrooms & Computer Lab',
    description: 'Hospitality software, e-resources, audio-visual study materials & digital learning.',
    category: 'Academics',
  },
  {
    title: 'Full time Expert Faculty',
    description: 'Highly experienced in international hospitality industry, 5-star hotel chains & cruise liners.',
    category: 'Faculty',
  },
  {
    title: 'Internship & Placement Cell',
    description: 'Global & domestic placements through authorized UV Overseas Consultancy.',
    category: 'Placements',
  },
  {
    title: 'Seminar Hall',
    description: 'Industry expert talks, masterclasses, workshops & executive conferences.',
    category: 'Campus',
  },
  {
    title: 'Hostel Facilities',
    description: 'Separate hostel facilities for boys & girls with round-the-clock security.',
    category: 'Amenities',
  },
  {
    title: 'Recreational & Sports Facilities',
    description: 'Student activities, indoor/outdoor sports, events & cultural programs.',
    category: 'Life on Campus',
  },
  {
    title: 'Own Campus & Parking',
    description: 'Spacious 2 own campus buildings with convenient student and visitor parking.',
    category: 'Infrastructure',
  },
  {
    title: 'Soft Skills Training',
    description: 'Interview preparation, personality development, English communication & skill-based courses.',
    category: 'Career Growth',
  },
];

export const RECRUITERS: Recruiter[] = [
  { name: 'Marriott Hotels & Resorts', logoText: 'MARRIOTT', tier: 'Global Recruiter' },
  { name: 'Hyatt Hotels & Resorts', logoText: 'HYATT', tier: 'Premium Partner' },
  { name: 'Radisson Hotel Group', logoText: 'RADISSON', tier: 'International Partner' },
  { name: 'Hilton Hotels & Resorts', logoText: 'HILTON', tier: 'Global Partner' },
  { name: 'Accor Hotels', logoText: 'ACCOR', tier: 'Luxury Collection' },
  { name: 'Kempinski Hotels', logoText: 'KEMPINSKI', tier: '5-Star Deluxe' },
  { name: 'InterContinental Hotels Group', logoText: 'INTERCONTINENTAL', tier: 'International Partner' },
  { name: 'Jumeirah Hotels & Resorts', logoText: 'JUMEIRAH', tier: 'Dubai Luxury' },
  { name: 'Rotana Hotels & Resorts', logoText: 'ROTANA', tier: 'Middle East Partner' },
  { name: 'Six Senses Resorts', logoText: 'SIX SENSES', tier: 'Eco Luxury' },
  { name: 'Four Seasons Hotels', logoText: 'FOUR SEASONS', tier: 'Ultra Luxury' },
  { name: 'The Leela Palaces', logoText: 'THE LEELA', tier: 'Ultra Luxury' },
  { name: 'Oberoi Hotels & Resorts', logoText: 'OBEROI', tier: '5-Star Deluxe' },
  { name: 'ITC Hotels', logoText: 'ITC HOTELS', tier: 'Luxury Collection' },
  { name: 'Taj Hotels & Palaces', logoText: 'TAJ HOTELS', tier: 'Heritage Luxury' },
  { name: 'Vijan Mahal', logoText: 'VIJAN MAHAL', tier: 'Luxury Partner' },
  { name: 'Sheraton Hotels & Resorts', logoText: 'SHERATON', tier: 'Global Partner' },
  { name: 'Anantara Hotels & Spas', logoText: 'ANANTARA', tier: 'Luxury Spas' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'diploma-hotel-mgmt',
    title: 'Diploma in Hotel Management',
    level: 'Diploma',
    duration: '1 Year',
    department: 'Hospitality Management',
    description: 'A fast-tracked, intensive program designed to transform passionate individuals into polished hospitality professionals ready for 5-star placements.',
    overviewExtended: 'At UVCHM, we are committed to helping the next generation of hospitality leaders—creators, doers, thinkers, and business owners. Our Diploma Course in Hotel Management is carefully designed to give students the skills and knowledge to succeed in the hospitality world. As a top college, we take pride in offering a program that balances classroom learning with hands-on practice, making sure our students are job-ready.',
    whyChoose: [
      { title: 'Work Across the Globe', description: 'The hospitality industry is one of the fastest-growing sectors worldwide, providing ample opportunities for those willing to embark on a rewarding career. Our Hotel Management Diploma Course prepares you to work not just in your local market but across the globe.' },
      { title: 'Luxury Hotels', description: 'Experience the fast-paced environment of high-end hotels where service excellence is paramount.' },
      { title: 'Restaurants and Cafés', description: 'Learn the nuances of food and beverage management in various dining establishments.' },
      { title: 'Event Management', description: 'Dive into the world of planning and executing memorable events, from weddings to corporate gatherings.' },
      { title: 'Travel and Tourism', description: 'Gain insights into the tourism sector, opening doors to travel agencies and tour operations.' },
      { title: 'Value-Based Learning', description: 'At UVCHM, we believe in value-based learning. Our curriculum emphasizes practical knowledge, with up to 90% of the program dedicated to industry-oriented practicals, complemented by theoretical classes.' },
      { title: 'Engage in Real-World Scenarios', description: 'Participate in simulations that replicate actual hotel operations, preparing you for real challenges.' },
      { title: 'Learn from Industry Experts', description: 'Our faculty comprises seasoned professionals with extensive experience in the hospitality field, providing insights and mentorship.' },
      { title: 'Skills and Personality Development', description: 'In addition to technical knowledge, the SSC-based Diploma Course in Hotel Management places a significant focus on developing your personal and professional skills.' },
      { title: 'Soft Skills Training', description: 'Enhance your interpersonal skills, teamwork, and adaptability, essential traits in the hospitality industry.' },
      { title: 'Interview Preparation', description: 'Get ready to impress potential employers with tailored interview coaching, helping you to present your best self.' },
      { title: 'Communication Skills', description: 'Learn effective communication strategies that will enable you to connect with guests, colleagues, and industry professionals.' },
    ],
    faq: [
      { question: 'What is the Diploma Course in Hotel Management?', answer: 'The Diploma Course in Hotel Management is a comprehensive program designed to equip students with the skills and knowledge needed for a successful career in the hospitality industry, focusing on both theoretical and practical training.' },
      { question: 'What are the eligibility criteria for enrollment?', answer: 'The course is designed for students who have completed their Secondary School Certificate (SSC). No prior experience in hospitality is required.' },
      { question: 'How much of the course is practical training?', answer: 'Up to 90% of the course consists of industry-oriented practical training, ensuring students gain hands-on experience alongside theoretical learning.' },
      { question: 'How does UVCHM support skill development?', answer: 'UVCHM offers training in soft skills, communication, and interview preparation, ensuring students are well-rounded professionals ready for the job market.' },
      { question: 'Career information', answer: 'Upon completing the SSC-based Diploma Course in Hotel Management, graduates can pursue various career paths including roles in 5-Star Hotels, Luxury Resorts, International Cruise Liners, and Airlines.' }
    ],
    modules: [
      '5-Star Luxury Hotel Standard Operating Procedures',
      'Hotel Management Software & Hotel Front Desk Administration',
      'Advanced Culinary Arts & International Cuisines',
      'Mixology, Flair Bartending & Wine Etiquette',
      'Banquet Management & High-Profile Catering Operations',
      'Paid 6-Month Internship in Taj, Oberoi & Marriott',
    ],
    careers: ['Front Office Executive', 'F&B Associate', 'Housekeeping Supervisor', 'Guest Relations Officer'],
    image: '/images/bhm_premium.jpg',
    featured: true,
  },
  {
    id: 'advance-diploma-hotel-mgmt',
    title: 'Advance Diploma in Hotel Management',
    department: 'Hotel Administration',
    level: 'Diploma',
    duration: '1.5 Years',
    description: 'Advanced hospitality training including hotel management software, banquet management, commercial kitchen operations, and paid internship.',
    overviewExtended: 'At UVCHM, we help hospitality students become creators, doers, thinkers, and business owners. Our Advance Diploma Course in Hotel Management is designed for students who have finished their intermediate education and want to step into the hospitality world. This fast-tracked program prepares you with both the classroom foundation and the strong practical skills needed to succeed in supervisory roles across 5-star properties.',
    whyChoose: [
      { title: 'Supervisory Skill Development', description: 'Go beyond the basics. This program equips you with the leadership and management skills required to lead teams in front office, housekeeping, and F&B operations.' },
      { title: 'Advanced Software Training', description: 'Get hands-on experience with industry-standard hotel management software, giving you a competitive edge in front desk and revenue management roles.' },
      { title: 'Comprehensive Banquet Management', description: 'Learn the intricacies of planning, organizing, and executing large-scale events, conferences, and luxury weddings.' },
      { title: 'Paid Internship Opportunities', description: 'Gain invaluable real-world experience and earn while you learn through our guaranteed 6-month paid internship with top luxury brands.' },
      { title: 'Value-Based Practical Learning', description: 'Our curriculum emphasizes practical knowledge, with up to 90% of the program dedicated to industry-oriented practicals inside our campus training labs.' },
      { title: 'Global Placement Assistance', description: 'Our dedicated placement cell ensures you have access to lucrative career opportunities not just in India, but across the Middle East and international cruise liners.' },
    ],
    faq: [
      { question: 'What is the Advance Diploma Course in Hotel Management?', answer: 'It is a comprehensive 1.5-year program designed for intermediate students looking to enhance their skills and knowledge in the hospitality industry, focusing on advanced theoretical and practical training.' },
      { question: 'What are the eligibility criteria for enrollment?', answer: 'Candidates must have completed their intermediate education (12th grade or equivalent) to qualify for the program. No prior experience is required.' },
      { question: 'What kind of practical training is included?', answer: 'Up to 90% of the course consists of industry-oriented practical training, including commercial kitchen operations, front office simulations, and a paid internship.' }
    ],
    modules: [
      'Advanced Hotel Software & Revenue Management',
      'Strategic Front Desk & Lobby Operations',
      'Commercial Kitchen & Banquet Management',
      'Supervisory Leadership & Team Handling',
      'Luxury Guest Relations & VIP Services',
      'Paid 6-Month Executive Internship',
    ],
    careers: ['Assistant Front Office Manager', 'F&B Executive', 'Banquets Lead'],
    image: '/images/culinary_training_new.jpg',
    featured: true,
  },
  {
    id: 'pg-diploma-hotel-mgmt',
    title: 'PG Diploma in Hotel Management',
    department: 'Postgraduate',
    level: 'Postgraduate',
    duration: '1 Year',
    description: 'Postgraduate specialization for graduates focusing on luxury resort administration, yield management, and revenue optimization.',
    overviewExtended: 'At UVCHM, we help aspiring hospitality professionals become creators, doers, thinkers, and business owners. Our PG Diploma in Hotel Management is specifically designed for degree holders who want to advance their careers into managerial and executive roles within the hospitality industry. This program connects general graduation with specialized luxury resort management.',
    whyChoose: [
      { title: 'Fast-Track Manager Path', description: 'Designed exclusively for graduates, this program fast-tracks your journey into mid-level management and administrative roles in luxury properties.' },
      { title: 'Revenue & Yield Management', description: 'Learn advanced strategies for pricing, inventory control, and revenue optimization—critical skills highly sought after by modern hotel chains.' },
      { title: 'Luxury Resort Administration', description: 'Gain specialized insights into managing ultra-luxury resorts, boutique hotels, and eco-retreats.' },
      { title: 'Strategic Decision Making', description: 'Transition from operational tasks to strategic planning, focusing on HR management, hospitality marketing, and financial analysis.' },
      { title: 'Corporate Networking', description: 'Interact with industry veterans, participate in executive masterclasses, and build a professional network that will accelerate your career growth.' },
      { title: 'Leadership & Soft Skills', description: 'Intensive training on corporate communication, conflict resolution, and leadership traits essential for a hospitality executive.' },
    ],
    faq: [
      { question: 'What is the PG Diploma Course in Hotel Management?', answer: 'It is a 1-year postgraduate specialization program designed to equip degree holders with advanced administrative and managerial skills for the hospitality sector.' },
      { question: 'What are the eligibility criteria for enrollment?', answer: 'The course is designed for students who have completed their undergraduate Degree in any discipline. No prior experience in hospitality is required.' },
      { question: 'What career roles can I expect after this course?', answer: 'Graduates typically step into roles such as Assistant Resort Manager, Revenue Analyst, HR Coordinator, or Hospitality Operations Lead.' }
    ],
    modules: [
      'Luxury Resort & Boutique Hotel Administration',
      'Hospitality Marketing & Brand Strategy',
      'Yield Management & Pricing Optimization',
      'Corporate Communication & HR Management',
      'Executive Leadership & Conflict Resolution',
      'Management Trainee Internship Focus',
    ],
    careers: ['Assistant Resort Manager', 'Revenue Analyst', 'Hospitality Operations Lead'],
    image: '/images/culinary_sushi.jpg',
    featured: true,
  },
  {
    id: 'masters-diploma-hotel-mgmt',
    title: 'Masters in Diploma in Hotel Management',
    department: 'Postgraduate',
    level: 'Postgraduate',
    duration: '2 Years',
    description: 'Master level professional diploma preparing executive directors for international hotel chains, cruise liners, and aviation hospitality.',
    overviewExtended: 'The Masters in Diploma in Hotel Management is UVCHM’s flagship 2-year postgraduate program, tailored for ambitious individuals aiming for the top level of hospitality leadership. This complete curriculum dives deep into global hospitality trends, multi-property management, and executive-level decision making, preparing you to direct international hotel chains and luxury cruise liners.',
    whyChoose: [
      { title: 'Executive Leadership Focus', description: 'Move beyond management into true leadership. Learn how to direct entire properties, handle P&L responsibilities, and lead large-scale operations.' },
      { title: 'International Hospitality Standards', description: 'Study the standard rules and work methods of the world’s top luxury brands, from Four Seasons to Ritz-Carlton.' },
      { title: 'Complete Department Mastery', description: 'Gain a complete, big-picture view of all departments—Rooms Division, F&B, HR, Sales, and Finance—to effectively manage a commercial property.' },
      { title: 'Aviation & Cruise Line Management', description: 'Specialized modules focusing on the unique challenges and logistics of managing hospitality services in the aviation and cruise sectors.' },
      { title: 'Strategic Business Planning', description: 'Learn to conceptualize, plan, and execute business strategies, marketing campaigns, and brand expansions.' },
      { title: 'Elite Placement Opportunities', description: 'Graduates of this master-level program are prime candidates for executive trainee programs and direct managerial placements globally.' },
    ],
    faq: [
      { question: 'Who is this Masters program for?', answer: 'It is ideal for ambitious degree holders who want a comprehensive, 2-year deep dive into executive hospitality management to reach top-tier roles like General Manager or F&B Director.' },
      { question: 'What makes this different from the 1-year PG Diploma?', answer: 'The 2-year Masters provides a much deeper exploration into multi-department mastery, aviation/cruise management, and strategic business planning, along with extended internship opportunities.' },
      { question: 'Is prior hospitality experience necessary?', answer: 'While beneficial, it is not strictly required. A bachelor\'s degree in any discipline is the primary academic requirement.' }
    ],
    modules: [
      'International Hotel Chain SOP Mastery',
      'Strategic Business Planning & Expansion',
      'Multi-Property P&L Responsibility',
      'Aviation & Luxury Cruise Line Logistics',
      'Global Hospitality Trends & Analysis',
      'Direct Managerial Placement Pathway',
    ],
    careers: ['General Manager', 'Corporate Director', 'Regional Operations Manager'],
    image: '/images/front_office_real.jpg',
    featured: true,
  },
  {
    id: 'bartending-mixology',
    title: 'Bartending and Mixology',
    department: 'Food & Beverage',
    level: 'Certification',
    duration: '1 Year',
    description: 'Master flair bartending, classic & molecular cocktail mixology, wine service etiquette, bar cost control, and beverage inventory.',
    overviewExtended: 'Step behind the bar and into a world of creativity and showmanship. UVCHM’s Bartending and Mixology Certification is an immersive 1-year program dedicated entirely to the art and science of beverages. From classic cocktail craftsmanship to jaw-dropping flair bartending, this course is designed for passionate individuals who want to dominate the high-energy nightlife and luxury bar scenes.',
    whyChoose: [
      { title: 'Modern Mixology', description: 'Learn cutting-edge techniques using foams, smokes, and gels to create modern creative cocktails that wow guests.' },
      { title: 'Flair Bartending', description: 'Master the art of working flair and exhibition flair to entertain guests while efficiently mixing drinks.' },
      { title: 'Wine & Spirit Knowledge', description: 'Gain deep expertise in the origins, tasting notes, and pairing etiquette of global wines, single malts, and premium spirits.' },
      { title: 'Bar Operations & Cost Control', description: 'Understand the business side of the bar—inventory management, pour costs, pricing strategies, and licensing.' },
      { title: 'Specialized Training Lab', description: 'Train in our fully-equipped, campus-based mock bar designed to replicate high-volume club environments.' },
      { title: 'High-Earning Potential', description: 'Professional mixologists and flair bartenders are highly sought after in premium clubs, luxury hotels, and cruise ships worldwide.' },
    ],
    faq: [
      { question: 'Do I need prior F&B experience to join?', answer: 'No prior experience is necessary. This program teaches you everything from basic bar setup to advanced mixology from scratch.' },
      { question: 'Will I learn how to manage a bar business?', answer: 'Yes, the curriculum covers bar cost control, inventory management, and menu engineering to prepare you for Bar Manager roles.' },
      { question: 'Where can I work after this certification?', answer: 'Graduates find lucrative positions as Head Bartenders, Mixologists, and Beverage Managers in luxury hotels, standalone premium bars, and international cruise liners.' }
    ],
    modules: [
      'Molecular Mixology & Avant-Garde Cocktails',
      'Working & Exhibition Flair Bartending',
      'Global Wine & Single Malt Appreciation',
      'Bar Inventory & Pour Cost Optimization',
      'Menu Engineering & Pricing Strategy',
      'High-Volume Nightclub Simulation Training',
    ],
    careers: ['Head Bartender', 'Mixologist', 'Beverage Manager', 'Cruise Bar Lead'],
    image: '/images/bartending_training_new.jpg',
    featured: true,
  },
  {
    id: 'craft-course-food-production',
    title: 'Craft Course in Food Production',
    department: 'Culinary Arts',
    level: 'Diploma',
    duration: '1 Year',
    description: 'Practical culinary training in Indian, Continental, Chinese cuisines, butchery, cold kitchen, stocks, sauces, and kitchen hygiene.',
    overviewExtended: 'At UVCHM, we are dedicated to cultivating budding culinary artists. Our Craft Course in Food Production is tailored for students from an SSC background who aspire to excel in the kitchen. This highly intensive, hands-on program provides essential training in professional food production, teaching you the foundational techniques, international cuisines, and kitchen management skills required by top chefs globally.',
    whyChoose: [
      { title: 'Master Global Cuisines', description: 'Get hands-on training in preparing authentic Indian, Continental, Chinese, and European dishes.' },
      { title: 'Advanced Culinary Techniques', description: 'Learn professional knife skills, butchery, baking, and the art of plating to create visually stunning dishes.' },
      { title: 'Kitchen Management & Hygiene', description: 'Understand food safety standards (HACCP), commercial kitchen hygiene, and efficient kitchen workflow.' },
      { title: 'Bakery & Patisserie Basics', description: 'Gain introductory skills in baking breads, crafting pastries, and preparing classic desserts.' },
      { title: 'Commercial Training Kitchens', description: 'Train in our state-of-the-art campus kitchens that replicate the equipment and pressure of 5-star hotel kitchens.' },
      { title: 'Direct Culinary Placements', description: 'Graduates step directly into the culinary teams of renowned hotels, cloud kitchens, and fine-dining restaurants.' },
    ],
    faq: [
      { question: 'What is the Craft Course in Food Production?', answer: 'It is a specialized 1-year program designed to provide students with essential, hands-on culinary skills for a successful career as a chef.' },
      { question: 'What are the eligibility criteria?', answer: 'The course is designed for students who have completed their Secondary School Certificate (SSC) / 10th grade. No prior cooking experience is required.' },
      { question: 'How much of the course is practical training?', answer: 'Up to 90% of the course consists of industry-oriented practical training in our commercial kitchens, ensuring maximum hands-on experience.' }
    ],
    modules: [
      'Indian, Continental, & Chinese Culinary Arts',
      'Professional Knife Skills & Butchery',
      'Bakery, Breads, & Classic Patisserie',
      'HACCP Food Safety & Kitchen Hygiene',
      'Art of Plating & Visual Presentation',
      'Intensive Commercial Kitchen Training',
    ],
    careers: ['Chef de Partie', 'Commis Chef', 'Cloud Kitchen Specialist'],
    image: '/images/culinary_flambe.jpg',
    featured: true,
  },
  {
    id: 'craft-course-fb-service',
    title: 'Craft Course in Food & Beverage Service',
    department: 'Food & Beverage',
    level: 'Diploma',
    duration: '1 Year',
    description: 'Hands-on fine dining service, table layout aesthetics, Gueridon flambé service, banquet setup, and customer relations excellence.',
    overviewExtended: 'At UVCHM, we recognize that exceptional service is the heart of hospitality. Our Craft Course in Food and Beverage Service is tailored for students from an SSC background who aspire to excel on the frontlines of the industry. This program provides essential, specialized training in F&B service, table aesthetics, and guest relations—critical components of the dining experience in luxury settings.',
    whyChoose: [
      { title: 'Fine Dining Expertise', description: 'Master the intricate rules of silver service, French classical menus, and multi-course fine dining etiquette.' },
      { title: 'Gueridon & Flambé Service', description: 'Learn the specialized art of tableside preparation, carving, and flambéing to provide a theatrical guest experience.' },
      { title: 'Banquet & Event Setup', description: 'Understand the logistics of setting up layouts for massive corporate events, buffets, and luxury weddings.' },
      { title: 'Beverage & Wine Etiquette', description: 'Gain foundational knowledge of pouring techniques, glassware, and basic wine pairings to elevate the dining experience.' },
      { title: 'Customer Relations', description: 'Develop the soft skills, communication, and problem-solving abilities needed to handle VIP guests flawlessly.' },
      { title: 'Rapid Career Entry', description: 'This highly focused 1-year course is the fastest route to becoming a professional steward or restaurant captain.' },
    ],
    faq: [
      { question: 'What is the Craft Course in Food and Beverage Service?', answer: 'It is a 1-year program designed to provide students with the specific technical skills and knowledge for a successful career in F&B operations and restaurant service.' },
      { question: 'What are the eligibility criteria?', answer: 'The course is designed for students who have completed their Secondary School Certificate (SSC) / 10th grade. No prior experience is required.' },
      { question: 'What roles does this prepare me for?', answer: 'Graduates are immediately ready for roles such as F&B Steward, Restaurant Captain, Banquet Supervisor, and In-Room Dining Associate.' }
    ],
    modules: [
      'Silver Service & French Classical Menus',
      'Tableside Gueridon & Flambé Service',
      'Massive Banquet & Corporate Event Setup',
      'Wine Pouring & Beverage Etiquette',
      'VIP Guest Relations & Communication',
      'Rapid Career Entry as Restaurant Captain',
    ],
    careers: ['Restaurant Captain', 'F&B Steward', 'Banquet Supervisor'],
    image: '/images/fnb_training_new.jpg',
  },
  {
    id: 'craft-course-housekeeping',
    title: 'Craft Course in Housekeeping',
    department: 'Hotel Administration',
    level: 'Diploma',
    duration: '1 Year',
    description: 'Specialized training in luxury room cleaning standards, flower arrangements, linen management, laundry operations, and suite inspection.',
    overviewExtended: 'At UVCHM, we are dedicated to training the professionals who maintain the high standards of luxury properties. Our Craft Course in Housekeeping is designed for students from an SSC background who aspire to build a successful career in the accommodation sector. This course provides highly specialized training in housekeeping, an important part of hotel management that ensures guest satisfaction and smooth operations.',
    whyChoose: [
      { title: 'Luxury Room Standards', description: 'Learn the exact rules and standards required to prepare and maintain 5-star luxury suites and VIP rooms.' },
      { title: 'Plant Care & Flower Arrangements', description: 'Develop specialized skills in flower arrangements and indoor plant care to make lobbies and guest rooms look beautiful.' },
      { title: 'Linen & Laundry Management', description: 'Master the operations of a commercial laundry, including fabric care, inventory management, and uniform control.' },
      { title: 'Cleaning & Sanitization', description: 'Gain crucial knowledge regarding deep cleaning, pest control, and the latest international cleaning rules.' },
      { title: 'Room Decoration Basics', description: 'Understand the basics of color themes, lighting, and room layout to ensure rooms always look their best.' },
      { title: 'High Demand Profession', description: 'Housekeeping professionals are the backbone of any hotel, leading to high job security and rapid promotion opportunities to Executive Housekeeper roles.' },
    ],
    faq: [
      { question: 'What is the Craft Course in Housekeeping?', answer: 'It is a 1-year program designed to equip students with the specialized skills and knowledge necessary for a successful career managing the cleanliness and aesthetics of luxury hotels.' },
      { question: 'What are the eligibility criteria for enrollment?', answer: 'The course is designed for students who have completed their Secondary School Certificate (SSC) / 10th grade. No prior experience is required.' },
      { question: 'Is this course heavily practical?', answer: 'Yes! Up to 90% of the course consists of industry-oriented practical training in our mock guest rooms and laundry facilities.' }
    ],
    modules: [
      '5-Star Luxury Room Cleaning Standards',
      'Commercial Laundry & Linen Management',
      'Plant Care & Flower Arrangements',
      'Room Decoration & Lighting Setup',
      'International Cleaning & Hygiene Rules',
      'VIP Suite Preparation & Inspection',
    ],
    careers: ['Housekeeping Executive', 'Linen Room Supervisor', 'Floor Controller'],
    image: '/images/housekeeping_training_new.jpg',
  },
];

export const EVENTS: EventItem[] = [
  {
    id: 'evt-1',
    title: 'UV Grand Chef Competition 2026: Live Cooking Battle',
    date: 'Aug 30, 2026',
    time: '09:30 AM - 04:30 PM',
    location: 'Advanced Culinary Training Kitchen',
    category: 'Competition',
    description: 'Student chef teams showcase 3-course gourmet menus judged by Taj & Marriott Executive Chefs.',
  },
  {
    id: 'evt-2',
    title: 'Flair Bartending & Mixology Masterclass',
    date: 'Sep 18, 2026',
    time: '02:00 PM - 05:30 PM',
    location: 'UV Model Bar Suite',
    category: 'Masterclass',
    description: 'Learn liquid nitrogen cocktails, bottle flipping techniques, and craft syrup recipes with celebrity mixologists.',
  },
  {
    id: 'evt-3',
    title: 'Annual 5-Star Hotel Campus Placement Drive',
    date: 'Oct 14, 2026',
    time: '09:00 AM - 06:00 PM',
    location: 'UVCHM Auditorium',
    category: 'Placement',
    description: 'On-campus interviews with Taj, Oberoi, Hyatt, ITC, and Marriott recruiters for immediate job offers.',
  },
];

export const NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'UVCHM Achieves 100% Campus Placement Record for 2026 Batch',
    date: 'August 04, 2026',
    category: 'Placements',
    summary: 'All final-year students of UVCHM secured job offers at top 5-star hotel chains across India and abroad.',
    image: '/images/IMG_8427.JPG',
  },
  {
    id: 'news-2',
    title: 'Inauguration of New Front Office Lab & Housekeeping Suite',
    date: 'July 28, 2026',
    category: 'Campus Expansion',
    summary: 'UVCHM upgrades practical infrastructure with real-time hotel PMS terminals and luxury mock guest rooms.',
    image: '/images/front_office_lab.jpg',
  },
];

export const FACILITIES: Facility[] = [
  {
    id: 'fac-1',
    name: 'Advanced Culinary & Quantity Training Kitchens',
    category: 'Culinary',
    description: 'Commercial stainless steel cooking ranges, tandoors, ovens, combi-steamers, and dedicated butchery stations.',
    features: ['Basic & Quantity Kitchens', 'Individual Cooking Ranges', 'Live Chef Demo Counter'],
    image: '/images/culinary_bakery_display.jpg',
  },
  {
    id: 'fac-2',
    name: 'Front Office Simulator & Luxury Guest Suite Lab',
    category: 'Hospitality',
    description: 'Real-time front office check-in terminals, mock concierge desk, keycard encoders, and 5-star housekeeping guest room.',
    features: ['Front Office Software', 'Check-In/Out Counter', 'Housekeeping Suite'],
    image: '/images/front_office_real.jpg',
  },
  {
    id: 'fac-3',
    name: 'Model Bar & Fine Dining Training Restaurant',
    category: 'Beverage & F&B',
    description: 'Operational 60-seat fine dining training restaurant with flair bar, cocktail shakers, wine glass racks, and flambé trolleys.',
    features: ['60-Seat Restaurant', 'Flair Bartending Bar', 'Flambé Service Trolleys'],
    image: '/images/model_bar_real.jpg',
  },
];

export const FACULTY: FacultyMember[] = [
  {
    id: 'fac-vp',
    name: 'A. SadaShiv',
    position: 'Vice Principal',
    department: 'College Administration',
    qualifications: 'Costa & Princess, Cruise Lines — 15 Years Experience',
    expertise: 'International Cruise Line Operations & Academic Leadership',
    perspective: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today. We are committed to shaping the next generation of hospitality professionals.',
    image: '/images/faculty/Vice.jpg',
  },
  {
    id: 'fac-rakesh',
    name: 'K. Rakesh',
    position: 'HOD, Kitchen Dept.',
    department: 'Kitchen Dept.',
    qualifications: 'Burj Al Arab Hotel, U.A.E. — 16 Years Experience',
    expertise: 'Luxury Culinary Arts & Kitchen Leadership',
    perspective: 'Having worked at the iconic Burj Al Arab, I know what it takes to excel at the highest echelons of luxury hospitality. My goal is to instil that same level of culinary perfection in our students.',
    image: '/images/faculty/4.png',
  },
  {
    id: 'fac-prashanth',
    name: 'V. Prashanth',
    position: 'Culinary Instructor',
    department: 'Kitchen Dept.',
    qualifications: '17 Yrs U.A.E. Exp.',
    expertise: 'International Cuisine & Kitchen Operations',
    perspective: 'Culinary arts is about passion and discipline. With 17 years of experience in the U.A.E., I aim to bring global standards to our students\' training.',
    image: '/images/faculty/3.png',
  },
  {
    id: 'fac-naresh',
    name: 'P. Naresh',
    position: 'F&B Instructor',
    department: 'F & B Service',
    qualifications: 'Qatar (7 Yrs Exp.)',
    expertise: 'Fine Dining Service & Guest Relations',
    perspective: 'Exceptional service is the hallmark of great hospitality. I bring 7 years of international experience from Qatar to train our students in delivering world-class food and beverage service.',
    image: '/images/faculty/2.png',
  },
  {
    id: 'fac-akash',
    name: 'K. Akash',
    position: 'Housekeeping Instructor',
    department: 'Housekeeping',
    qualifications: '5 Yrs Exp.',
    expertise: 'Luxury Room Maintenance & Hygiene Standards',
    perspective: 'Attention to detail is what makes a great hotel stay unforgettable. With 5 years of experience, I am dedicated to teaching students the highest standards of luxury housekeeping.',
    image: '/images/faculty/1.png',
  },
  {
    id: 'fac-triveni',
    name: 'M. Triveni',
    position: 'Academic Counselor',
    department: 'Student Affairs',
    qualifications: 'Student Counseling & Career Guidance',
    expertise: 'Academic Planning & Career Roadmapping',
    perspective: 'Every student has a unique path to success. My goal is to provide personalized guidance and support to help each student discover their true potential and build a rewarding career in hospitality.',
    image: '/images/faculty/5.png',
    imageStyle: 'scale-[1.3] object-center origin-top',
  },
  {
    id: 'fac-saroja',
    name: 'B. Saroja',
    position: 'Academic Counselor',
    department: 'Student Affairs',
    qualifications: 'Student Counseling & Admissions',
    expertise: 'Student Mentorship & Guidance',
    perspective: 'I believe in nurturing student aspirations. I am here to guide students through their academic journey, ensuring they make informed decisions for a bright future in the hospitality sector.',
    image: '/images/faculty/6.png',
    imageStyle: 'scale-[1.3] object-center origin-top',
  },
  {
    id: 'fac-mamatha',
    name: 'A. Mamatha',
    position: 'Administrative Executive',
    department: 'Administration',
    qualifications: 'Campus Operations & Coordination',
    expertise: 'Administrative Planning & Campus Management',
    perspective: 'Smooth operations form the backbone of a successful educational institution. I am dedicated to ensuring a seamless, organized, and welcoming campus environment for all our students and staff.',
    image: '/images/faculty/7.png',
  },
  {
    id: 'fac-chaithanya',
    name: 'B. Chaithanya',
    position: 'Administrative Executive',
    department: 'Administration',
    qualifications: 'Campus Administration & Support',
    expertise: 'Administrative Support & Operations',
    perspective: 'Our administration team works tirelessly behind the scenes to provide a supportive and efficient foundation, empowering both students and faculty to focus entirely on academic excellence.',
    image: '/images/faculty/8.png',
  },
  {
    id: 'fac-srujana',
    name: 'R. Srujana Rani',
    position: 'Administrative Executive',
    department: 'Administration',
    qualifications: 'Campus Operations & Support',
    expertise: 'Administrative Logistics & Operations',
    perspective: 'Every successful institution relies on strong administrative support. I am committed to maintaining efficient campus operations so our students can thrive in a distraction-free environment.',
    image: '/images/faculty/9.png',
  },

];
