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
}

export interface Recruiter {
  name: string;
  logoText: string;
  tier: string;
}

export const COLLEGE_INFO = {
  name: 'UV College of Hotel Management',
  shortName: 'UV College',
  motto: 'Shaping hospitality aspirants into creators, entrepreneurs & achievers.',
  rankTag: "NORTHERN TELANGANA'S BIGGEST HOTEL MANAGEMENT COLLEGE",
  subtitle: '2 Own Campus Buildings with 5★ Star Infrastructure and International Experienced Faculty',
  established: '2010',
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
    description: 'Simulated hotel reception desk & Opera PMS concierge administration training.',
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
    title: 'Hostel & Transport',
    description: 'Separate hostel facilities for boys & girls with round-the-clock security & bus pass facility.',
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
  { name: 'Hilton Hotels & Resorts', logoText: 'HILTON', tier: 'Global Partner' },
  { name: 'Accor Hotels', logoText: 'ACCOR', tier: 'Luxury Collection' },
  { name: 'Kempinski Hotels', logoText: 'KEMPINSKI', tier: '5-Star Deluxe' },
  { name: 'InterContinental Hotels Group', logoText: 'INTERCONTINENTAL', tier: 'International Partner' },
  { name: 'Jumeirah Hotels & Resorts', logoText: 'JUMEIRAH', tier: 'Dubai Luxury' },
  { name: 'Rotana Hotels & Resorts', logoText: 'ROTANA', tier: 'Middle East Partner' },
  { name: 'Six Senses Resorts', logoText: 'SIX SENSES', tier: 'Eco Luxury' },
  { name: 'Four Seasons Hotels', logoText: 'FOUR SEASONS', tier: 'Ultra Luxury' },
  { name: 'Radisson Hotel Group', logoText: 'RADISSON', tier: 'International Partner' },
  { name: 'JA Resorts & Hotels', logoText: 'JA RESORTS', tier: 'Resort Partner' },
  { name: 'Anantara Hotels & Spas', logoText: 'ANANTARA', tier: 'Luxury Spas' },
  { name: 'The Leela Palaces', logoText: 'THE LEELA', tier: 'Ultra Luxury' },
  { name: 'Oberoi Hotels & Resorts', logoText: 'OBEROI', tier: '5-Star Deluxe' },
  { name: 'Taj Hotels & Palaces', logoText: 'TAJ HOTELS', tier: 'Heritage Luxury' },
  { name: 'ITC Hotels', logoText: 'ITC HOTELS', tier: 'Luxury Collection' },
  { name: 'The LaLiT Hotels', logoText: 'THE LALIT', tier: '5-Star Partner' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'diploma-hotel-mgmt',
    title: 'Diploma in Hotel Management',
    department: 'Hotel Administration',
    level: 'Diploma',
    duration: '1 Year',
    description: 'Foundational course covering front office operations, housekeeping management, basic food production, and 5-star hotel guest relations.',
    careers: ['Front Office Assistant', 'Housekeeping Supervisor', 'Guest Service Associate'],
    image: '/images/frontoffice_dept.png',
    featured: true,
  },
  {
    id: 'advance-diploma-hotel-mgmt',
    title: 'Advance Diploma in Hotel Management',
    department: 'Hotel Administration',
    level: 'Diploma',
    duration: '1.5 Years',
    description: 'Advanced hospitality training including Opera PMS software, banquet management, commercial kitchen operations, and paid internship.',
    careers: ['Assistant Front Office Manager', 'F&B Executive', 'Banquets Lead'],
    image: '/images/frontoffice_dept.png',
    featured: true,
  },
  {
    id: 'pg-diploma-hotel-mgmt',
    title: 'PG Diploma in Hotel Management',
    department: 'Postgraduate',
    level: 'Postgraduate',
    duration: '1 Year',
    description: 'Postgraduate specialization for graduates focusing on luxury resort administration, yield management, and revenue optimization.',
    careers: ['Assistant Resort Manager', 'Revenue Analyst', 'Hospitality Operations Lead'],
    image: '/images/frontoffice_dept.png',
    featured: true,
  },
  {
    id: 'masters-diploma-hotel-mgmt',
    title: 'Masters in Diploma in Hotel Management',
    department: 'Postgraduate',
    level: 'Postgraduate',
    duration: '2 Years',
    description: 'Master level professional diploma preparing executive directors for international hotel chains, cruise liners, and aviation hospitality.',
    careers: ['General Manager', 'Director of Food & Beverage', 'International Resort Lead'],
    image: '/images/frontoffice_dept.png',
    featured: true,
  },
  {
    id: 'bartending-mixology',
    title: 'Bartending and Mixology',
    department: 'Food & Beverage',
    level: 'Certification',
    duration: '1 Year',
    description: 'Master flair bartending, classic & molecular cocktail mixology, wine service etiquette, bar cost control, and beverage inventory.',
    careers: ['Head Bartender', 'Mixologist', 'Beverage Manager', 'Cruise Bar Lead'],
    image: '/images/bartending_dept.png',
    featured: true,
  },
  {
    id: 'craft-course-food-production',
    title: 'Craft Course in Food Production',
    department: 'Culinary Arts',
    level: 'Diploma',
    duration: '1 Year',
    description: 'Practical culinary training in Indian, Continental, Chinese cuisines, butchery, cold kitchen, stocks, sauces, and kitchen hygiene.',
    careers: ['Chef de Partie', 'Commis Chef', 'Cloud Kitchen Specialist'],
    image: '/images/culinary_dept.png',
    featured: true,
  },
  {
    id: 'craft-course-fb-service',
    title: 'Craft Course in Food & Beverage Service',
    department: 'Food & Beverage',
    level: 'Diploma',
    duration: '1 Year',
    description: 'Hands-on fine dining service, table layout aesthetics, Gueridon flambé service, banquet setup, and customer relations excellence.',
    careers: ['Restaurant Captain', 'F&B Steward', 'Banquet Supervisor'],
    image: '/images/bartending_dept.png',
  },
  {
    id: 'craft-course-housekeeping',
    title: 'Craft Course in Housekeeping',
    department: 'Hotel Administration',
    level: 'Diploma',
    duration: '1 Year',
    description: 'Specialized training in luxury room cleaning standards, flower arrangements, linen management, laundry operations, and suite inspection.',
    careers: ['Housekeeping Executive', 'Linen Room Supervisor', 'Floor Controller'],
    image: '/images/housekeeping_dept.png',
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
    location: 'UV College Auditorium',
    category: 'Placement',
    description: 'On-campus interviews with Taj, Oberoi, Hyatt, ITC, and Marriott recruiters for immediate job offers.',
  },
];

export const NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'UV College Achieves 100% Campus Placement Record for 2026 Batch',
    date: 'August 04, 2026',
    category: 'Placements',
    summary: 'All final-year students of UV College of Hotel Management secured job offers at top 5-star hotel chains across India and abroad.',
    image: '/images/culinary_dept.png',
  },
  {
    id: 'news-2',
    title: 'Inauguration of New Opera PMS Front Office Lab & Housekeeping Suite',
    date: 'July 28, 2026',
    category: 'Campus Expansion',
    summary: 'UV College upgrades practical infrastructure with real-time hotel PMS terminals and luxury mock guest rooms.',
    image: '/images/frontoffice_dept.png',
  },
];

export const FACILITIES: Facility[] = [
  {
    id: 'fac-1',
    name: 'Advanced Culinary & Quantity Training Kitchens',
    category: 'Culinary',
    description: 'Commercial stainless steel cooking ranges, tandoors, ovens, combi-steamers, and dedicated butchery stations.',
    features: ['Basic & Quantity Kitchens', 'Individual Cooking Ranges', 'Live Chef Demo Counter'],
    image: '/images/culinary_dept.png',
  },
  {
    id: 'fac-2',
    name: 'Front Office Simulator & Luxury Guest Suite Lab',
    category: 'Hospitality',
    description: 'Real-time Opera PMS check-in terminals, mock concierge desk, keycard encoders, and 5-star housekeeping guest room.',
    features: ['Opera PMS Software', 'Check-In/Out Counter', 'Housekeeping Suite'],
    image: '/images/frontoffice_dept.png',
  },
  {
    id: 'fac-3',
    name: 'Model Bar & Fine Dining Training Restaurant',
    category: 'Beverage & F&B',
    description: 'Operational 60-seat fine dining training restaurant with flair bar, cocktail shakers, wine glass racks, and flambé trolleys.',
    features: ['60-Seat Restaurant', 'Flair Bartending Bar', 'Flambé Service Trolleys'],
    image: '/images/bartending_dept.png',
  },
];

export const FACULTY: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Chef Vikramaditya Rao',
    position: 'Head of Culinary Arts',
    department: 'Food Production',
    qualifications: 'Former Executive Chef at Taj Palaces (22+ Yrs Exp)',
    expertise: 'Modern Indian Gastronomy, French Classical Cuisine & Kitchen Leadership',
    perspective: 'At UV College, we don’t just teach recipes; we instil Michelin-level precision, kitchen discipline, and culinary artistry. Our students graduate ready to command 5-star hotel kitchens worldwide!',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fac-2',
    name: 'Prof. Sunita Deshmukh',
    position: 'HOD Hotel Administration',
    department: 'Front Office & Management',
    qualifications: 'M.Sc. Hotel Mgmt, Ex-Marriott Front Office Director',
    expertise: 'Hospitality Yield Management, Opera PMS & VIP Guest Relations',
    perspective: 'Hospitality is about creating unforgettable guest experiences. Through real-time Opera PMS simulators and VIP guest relations training, we transform passionate students into confident hotel managers.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fac-3',
    name: 'Mr. Rajesh Nair',
    position: 'Senior Beverage & Mixology Director',
    department: 'Bar & F&B Service',
    qualifications: 'Certified Sommelier, Ex-Oberoi Beverage Lead (15+ Yrs)',
    expertise: 'Molecular Mixology, Flair Bartending & Wine Service Etiquette',
    perspective: 'Mixology is an art of flavor and flair. From classic cocktail chemistry to modern liquid nitrogen presentation, our training prepares students to lead top luxury bars and cruise lines globally.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fac-4',
    name: 'Ms. Ananya Sharma',
    position: 'Executive Housekeeping Specialist',
    department: 'Accommodation Operations',
    qualifications: 'Former Housekeeping Director at Hyatt Regency (14+ Yrs)',
    expertise: 'Luxury Suite Aesthetics, Sustainable Linen Protocols & Room Auditing',
    perspective: 'Luxury hospitality is defined by attention to detail. We train our students in world-class suite aesthetics, sustainable linen management, and 5-star housekeeping protocols.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fac-5',
    name: 'Chef Marcus Dupont',
    position: 'Master Pastry & Bakery Director',
    department: 'Bakery & Confectionery',
    qualifications: 'Diploma de Pâtisserie Paris, Former Leela Pastry Lead',
    expertise: 'Artisanal Viennoiserie, Chocolate Tempering & Wedding Cake Artistry',
    perspective: 'Baking is science meets artistry. Our hands-on confectionery workshops empower students to master artisanal viennoiserie, wedding cake sculpting, and international dessert presentation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
];
