import heroPortraitImage from '../assets/images/profile_cutout.png';

export interface ProjectCaseStudy {
  id: string;
  index: string;
  title: string;
  category: 'Web Experience' | 'Graphic Design' | 'Other Works';
  displayCategory?: string;
  client: string;
  year: string;
  summary: string;
  features?: string[];
  techStack?: string[];
  liveUrl?: string;
  githubUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
  telegramUrl?: string;
  ctaLabel?: string;
  image: string;
  imageAlt: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  outcomes: { label: string; value: string }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: string;
  projectPrice: string;
  description: string;
  highlighted: boolean;
  features: string[];
}

export interface TestimonialItem {
  id: number;
  badge?: string;
  title?: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  imageAlt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  label: string;
  readTime: string;
  published: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  body: string[];
}

export const PORTFOLIO_OWNER = {
  brandName: 'ABDUL LATHEEF J',
  fullName: 'Abdul Latheef',
  email: 'abdullatheefsjcetcse@gmail.com',
  role: 'Mern Stack, Graphic Design',
  location: 'Available Worldwide · Remote & Studio',
  heroPortrait: heroPortraitImage,
  aboutPortrait: '/src/assets/images/about_user_portrait_1795531733651.jpg',
  resumePdf: '/assets/portfolio-media/Abdul_Latheef_J_Resume_7c73b019.pdf',
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'docume-readme-generator',
    index: '01',
    title: 'Docume - AI README Generator',
    category: 'Web Experience',
    displayCategory: 'Web Design',
    client: 'Mern + AI',
    year: '2026',
    summary:
      'Docume is a full-stack web app that generates professional READMEs for GitHub. Repome builds a README for any project repository, and Imme builds a GitHub profile README from templates. An AI assistant (Google Gemini) writes sections from your input, and a "magic wand" rewrites any text to make it better. It also has an icon and badge picker.',
    features: [
      'Repo README and profile README generators with ready-made templates',
      'AI-assisted writing with per-user rate limits (6 generations and 15 magic-wand uses per 5-hour window) and site-wide daily caps',
      'Google and GitHub login',
      'Live preview of the README as you edit',
    ],
    techStack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB Atlas',
      'Google Gemini API',
      'Vercel',
      'Render',
    ],
    liveUrl: 'https://docume.co.in',
    githubUrl: 'https://github.com/Abdullatheef01/Docume',
    image: '/src/assets/images/docume_tablet_mockup_1795595658513.jpg',
    imageAlt: 'Docume AI README Generator website displayed on a tilted tablet mockup over cobalt-blue studio pedestals',
    challenge:
      'Developers often spend unnecessary time writing and formatting repository and GitHub profile READMEs manually from scratch.',
    solution:
      'Built a full-stack MERN + Google Gemini platform with Repome and Imme generators, live Markdown preview, magic-wand rewriting, an icon/badge picker, and per-user rate-limiting.',
    deliverables: ['Repome & Imme Generators', 'Gemini AI Magic Wand', 'OAuth (Google & GitHub)', 'Live Markdown Preview'],
    outcomes: [
      { label: 'AI Window Limit', value: '6 / 5h' },
      { label: 'Magic Wand Uses', value: '15 / 5h' },
      { label: 'Auth Providers', value: '2 OAuth' },
    ],
  },
  {
    id: 'growmate-mentorship',
    index: '02',
    title: 'GrowMate - Student Mentorship Platform',
    category: 'Web Experience',
    client: 'Mern',
    year: '2026',
    summary:
      'GrowMate is a full-stack web app that helps colleges manage student mentoring. Students track their profile, scores and counselling, mentors follow their assigned students, and admins control the whole system from one dashboard.',
    features: [
      'Three roles: student, mentor and admin, with JWT authentication and email OTP verification',
      'Mentors publish exam and semester tables, and students fill in their own scores. Saved scores lock until the mentor allows editing',
      'Counselling sessions are recorded by mentors and confirmed by students',
      'Admin assigns students to mentors by batch and keeps the full history of past mentors',
      'Alumni section where students move automatically after four years',
      'Paginated lists, skeleton loaders and rate-limited, secure APIs',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    liveUrl: 'https://grow-mate-dun.vercel.app/',
    githubUrl: 'https://github.com/Abdullatheef01/GrowMate',
    image: '/src/assets/images/growmate_devices_mockup_1795596442882.jpg',
    imageAlt: 'GrowMate desktop and mobile login screens displayed on laptop and smartphone mockups',
    challenge:
      'Colleges needed a structured digital workflow to track student academic scores, counselling logs, mentor assignments across batches, and alumni transitions securely.',
    solution:
      'Built a role-based MERN + JWT platform with email OTP verification, mentor-published semester score tables with lock controls, confirmed counselling records, mentor history tracking, and automated 4-year alumni promotion.',
    deliverables: ['JWT + Email OTP Auth', 'Locked Score Tables', 'Counselling Confirmation', 'Alumni Auto-Transition'],
    outcomes: [
      { label: 'User Roles', value: '3 Roles' },
      { label: 'Auth Security', value: 'JWT + OTP' },
      { label: 'Alumni Cycle', value: '4 Years' },
    ],
  },
  {
    id: 'titan-tech-fest-2026',
    index: '03',
    title: 'Titan Tech Fest 2026 - Symposium Website',
    category: 'Web Experience',
    client: 'React + Firebase',
    year: '2026',
    summary:
      "Official website for the CSE Department's symposium, with an anime and Titan theme in deep navy and gold. It presents the fest, its events and a live schedule, and handles participant registration end to end.",
    features: [
      'Single-page site with Home, About, Events, Schedule, Register and Contact sections, with scroll animations and 3D elements (Three.js)',
      '10 events in 4 categories (Technical, Semi-Technical, Esports, Non-Technical), with a details popup for rules, rounds, team size and timing',
      'Live event timeline that updates in real time and highlights events as they start',
      'Secure 5-step registration: basic info, event count, events, team, payment (QR code and screenshot upload), with validation on every step and a unique registration ID',
      'Two registration packages with the event limit enforced',
      'Bot protection with Firebase App Check (reCAPTCHA Enterprise) plus a reCAPTCHA v2 checkbox',
      'Password-protected admin page to manage registrations',
    ],
    techStack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Three.js',
      'React Three Fiber',
      'Firebase (Firestore, Authentication)',
      'Vercel',
    ],
    liveUrl: 'https://ttf-26.vercel.app',
    githubUrl: 'https://github.com/Abdullatheef01/TTF-26',
    image: '/src/assets/images/ttf26_phone_mockup_1795597210361.jpg',
    imageAlt: 'Titan Tech Fest 2026 mobile hero screen displayed inside a smartphone studio mockup',
    challenge:
      'The CSE Department needed an engaging symposium portal capable of handling 10 multi-category events, live schedule updates, package-enforced registrations, and bot-protected payment verification.',
    solution:
      'Engineered an anime-and-Titan themed SPA in deep navy and gold with Three.js 3D visuals, real-time event status tracking, a validated 5-step registration workflow with QR payment upload, Firebase App Check, and a password-protected admin console.',
    deliverables: ['3D Theme & Scroll FX', '5-Step Registration', 'Live Event Timeline', 'Admin Management Portal'],
    outcomes: [
      { label: 'Total Events', value: '10 Events' },
      { label: 'Categories', value: '4 Tracks' },
      { label: 'Registration Flow', value: '5 Steps' },
    ],
  },
  {
    id: 'docume-ui-design',
    index: '04',
    title: 'Docume - UI Design',
    category: 'Graphic Design',
    client: 'Figma',
    year: '2026',
    summary:
      'UI/UX Design (Figma): I designed the complete Docume interface in Figma before writing any code, planning the layout and user flow for both the Repome (repository README) and Imme (profile README) generators. The design covered the template picker, the live editor, the icon and badge picker, the AI input with its magic wand button, and the usage-limit state that dulls the input and shows when it renews. I then built the designs in React and Tailwind CSS, keeping the layout, spacing and colors consistent with the Figma screens.',
    techStack: ['Figma'],
    liveUrl: 'https://drive.google.com/drive/folders/1O4qlbUCUBl8YCR1Bjkkq8xWSVxuX8lVb?usp=drive_link',
    linkedinUrl: 'https://lnkd.in/p/gCRbEeY8',
    ctaLabel: 'Explore Design',
    image: '/src/assets/images/docume_ui_design_mockup_1795598090828.jpg',
    imageAlt: 'Docume Figma UI/UX design interface displayed on a MacBook Pro studio mockup over cobalt-blue and concrete pedestals',
    challenge:
      'Translating dual README generator workflows (Repome and Imme), AI prompt controls, icon/badge picking, and rate-limit feedback states into a single distraction-free workspace.',
    solution:
      'Designed the complete end-to-end UI system in Figma first, mapping editor layouts, renewal-time limit states, and visual tokens before implementing them faithfully in React and Tailwind CSS.',
    deliverables: ['Complete Figma UI System', 'Repome & Imme Flows', 'Usage-Limit State Design', 'Design-to-Code Parity'],
    outcomes: [
      { label: 'Core Flows', value: 'Repome + Imme' },
      { label: 'Primary Tool', value: 'Figma' },
      { label: 'Code Fidelity', value: '100% Match' },
    ],
  },
  {
    id: 'youtube-thumbnail-design',
    index: '05',
    title: 'YouTube Thumbnail Design',
    category: 'Graphic Design',
    client: 'Canva + Photoshop',
    year: '2026',
    summary:
      "I design eye-catching YouTube thumbnails that grab attention and make viewers click. Each design is planned around the video's topic, with strong visuals, bold text and a clear focus point. I collect references and ideas on Pinterest, generate and refine visual elements with Gemini, and finish the final design in Canva and Photoshop.",
    techStack: ['Canva', 'Photoshop', 'Gemini', 'Pinterest'],
    liveUrl: 'https://drive.google.com/drive/folders/1lffJs4t1WfDI7D2g2ngKVRvFBahbyx3L?usp=drive_link',
    youtubeUrl: 'https://www.youtube.com/@CodewithAbdulofficial',
    ctaLabel: 'Explore Design',
    image: '/src/assets/images/youtube_thumbnails_monitor_composite.jpg',
    imageAlt: 'Studio monitor displaying Naan Mudhalvan and Git & GitHub YouTube thumbnail designs',
    challenge:
      'Standing out in crowded developer and tech video feeds requires instant visual hierarchy, high-contrast typography, and clear subject focus within milliseconds.',
    solution:
      'Combined Pinterest moodboards, Gemini-assisted visual asset generation, and crisp Photoshop/Canva compositing to craft high-CTR thumbnails tailored to each video topic.',
    deliverables: ['Thumbnail Concepts', 'AI Visual Compositing', 'High-Contrast Typography', 'Channel Branding Consistency'],
    outcomes: [
      { label: 'Workflow Stack', value: '4 Tools' },
      { label: 'Focus Goal', value: 'High CTR' },
      { label: 'Channel', value: '@CodewithAbdul' },
    ],
  },
  {
    id: 'myzo-plus-job-bot',
    index: '06',
    title: 'Myzo Plus - Automated Job Alert Bot',
    category: 'Other Works',
    client: 'Telegram Bot',
    year: '2026',
    summary:
      'A serverless bot that fetches fresh developer jobs from four sources (We Work Remotely, RemoteOK, Jobicy, Adzuna) and posts them to a public Telegram channel every hour. A cron-job.org trigger starts a GitHub Actions workflow that runs a single Node.js script. It fetches all sources in parallel, removes duplicates, and sends each job as a formatted message with company, location, salary and apply link. No server, no database, no npm dependencies.',
    techStack: ['Node.js', 'GitHub Actions', 'Telegram Bot API', 'cron-job.org'],
    liveUrl: 'https://t.me/myzopluse_io',
    githubUrl: 'https://github.com/Abdullatheef01/Myzo_Plus',
    telegramUrl: 'https://t.me/myzopluse_io',
    ctaLabel: 'Explore Work',
    image: '/src/assets/images/myzo_plus_real_screen_1795600683866.jpg',
    imageAlt: 'Myzo Plus live Telegram channel screenshot displayed inside a smartphone studio mockup on a cobalt pedestal',
    challenge:
      'Delivering hourly remote developer job alerts across multiple job boards reliably without paying for or maintaining dedicated servers, databases, or external npm packages.',
    solution:
      'Built a zero-dependency Node.js automation pipeline triggered hourly by cron-job.org via GitHub Actions, fetching four job APIs in parallel, deduplicating listings, and broadcasting formatted alerts to Telegram.',
    deliverables: ['Zero-Dependency Node Script', 'GitHub Actions Hourly Pipeline', '4-Source Parallel Scraper', 'Telegram Channel Bot'],
    outcomes: [
      { label: 'Job Sources', value: '4 Feeds' },
      { label: 'Dependencies', value: '0 npm' },
      { label: 'Schedule', value: 'Hourly' },
    ],
  },
  {
    id: 'nucu-chrome-extension',
    index: '07',
    title: 'NUCU - Translate Anything to Your Mother Tongue',
    category: 'Other Works',
    client: 'Chrome Extension',
    year: '2026',
    summary:
      'A Chrome extension that translates websites into your own language without breaking the page layout. It also has instant tooltip translation for any selected word or phrase, and a built-in text box for translating typed or pasted text. Each feature remembers its own language setting. Designed with a custom dark theme.',
    techStack: [
      'JavaScript',
      'HTML',
      'CSS',
      'Chrome Extension APIs (Manifest V3)',
      'Google Translate endpoint',
    ],
    liveUrl: 'https://github.com/Abdullatheef01/nucu-chrome-extension',
    githubUrl: 'https://github.com/Abdullatheef01/nucu-chrome-extension',
    ctaLabel: 'Explore Work',
    image: '/src/assets/images/nucu_real_mockup_1795600962856.jpg',
    imageAlt: 'Real NUCU Chrome Extension dark popup open on The Verge inside a MacBook Pro studio mockup',
    challenge:
      'Translating complex web pages often distorts DOM layouts and forces users to repeatedly re-select target languages between quick lookups and full-page reads.',
    solution:
      'Built a Manifest V3 Chrome extension with layout-preserving DOM text translation, selection-triggered tooltip lookups, a built-in quick translator box, and per-feature persistent language preferences in a custom dark theme.',
    deliverables: ['Manifest V3 Extension', 'Layout-Safe Page Translator', 'Selection Tooltip Lookup', 'Custom Dark Theme UI'],
    outcomes: [
      { label: 'Modes', value: '3 Translators' },
      { label: 'Architecture', value: 'Manifest V3' },
      { label: 'Theme', value: 'Custom Dark' },
    ],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: '$1,800',
    projectPrice: '$2,400',
    description:
      'Perfect for startups needing consistent product design support and structured visual direction.',
    highlighted: false,
    features: [
      'Website Or Landing Page Design',
      'Core UI System Setup',
      'Mobile-Responsive Layouts',
      'Monthly Strategy Sync',
      'Two Revision Rounds',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    monthlyPrice: '$3,200',
    projectPrice: '$4,800',
    description:
      'For scaling brands seeking advanced UX thinking, conversion strategy, and continuous design iteration.',
    highlighted: true,
    features: [
      'Full Website Or Product Design',
      'UX Research & Wireframing',
      'Conversion Optimization',
      'Analytics Review & Insights',
      'Priority Design Support',
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    badge: '1st Place · Coding Quiz',
    title: 'CodeCamp: Winner (1st Place)',
    quote:
      'Won first place in CodeCamp, a coding quiz competition for final year students at my college, and received the certificate from our Head of the Department.',
    author: 'Final Year Coding Quiz',
    role: 'Awarded by Head of the Department',
    company: 'College Technical Competition',
    image: '/src/assets/images/win_codecamp_2024.jpg',
    imageAlt: 'Abdul Latheef receiving the 1st Place CodeCamp certificate from the Head of the Department',
  },
  {
    id: 2,
    badge: 'Qualified for Level 2 · State Skill Exam',
    title: 'TN Skill 2025: Web Technology (Cleared Level 1)',
    quote:
      'Cleared the Level 1 offline examination conducted by the Tamil Nadu Government in the Web Technology skill category and qualified for Level 2. Also completed the Infosys Springboard HTML, CSS and JavaScript certification courses as part of the process.',
    author: 'Tamil Nadu Government Skill Competition',
    role: 'Web Technology · Infosys Springboard Certified',
    company: 'Level 2 Qualifier',
    image: '/src/assets/images/win_tnskill_2025.jpg',
    imageAlt: 'TN Skill 2025 Web Technologies qualification list highlighting Abdul Latheef J from Thanjavur',
  },
  {
    id: 3,
    badge: '4th Place · Augmented Reality',
    title: 'Mini Project Expo 2026: 4th Place',
    quote:
      'Presented "Squid Game in AR" at the Mini Project Expo 2026 held at King College, along with my friend Akash Gunasekaran. We recreated the "Red Light, Green Light" game using Augmented Reality in real time, and visitors played it live at our stall.',
    author: 'Squid Game in AR',
    role: 'With Akash Gunasekaran',
    company: 'King College · Live Interactive Stall',
    image: '/src/assets/images/win_expo_2026.jpg',
    imageAlt: 'Abdul Latheef and teammate Akash Gunasekaran after presenting Squid Game in AR at Mini Project Expo 2026',
  },
  {
    id: 4,
    badge: 'Round 2 Selected · SIH1637',
    title: 'Smart India Hackathon 2024: Selected for Round 2',
    quote:
      'With Team OKITAA, built VEG VENDOR for problem statement SIH1637 (Mobile App for Direct Market Access for Farmers). The app connects rural farmers and vegetable/fruit vendors directly with consumers, reducing dependency on middlemen. Our team was selected for Round 2 at the college-level round held at Arifa Institute of Technology.',
    author: 'Team OKITAA · VEG VENDOR',
    role: 'Problem Statement SIH1637',
    company: 'Arifa Institute of Technology',
    image: '/src/assets/images/win_sih_2024_final.jpg',
    imageAlt: 'Team OKITAA at Arifa Institute of Technology for Smart India Hackathon 2024 Round 2 selection',
  },
  {
    id: 5,
    badge: 'Industrial Visit · Oct 10, 2026',
    title: 'Industrial Visit: Elevado Softwares Pvt Ltd, Coimbatore',
    quote:
      'Visited Elevado Softwares, an IT company in Coimbatore, on October 10, 2026, as part of our final-year industrial visit. Learned technical concepts and how an IT company works from the team.',
    author: 'Final-Year Industrial Visit',
    role: 'Technical Exposure & Industry Workflow',
    company: 'Elevado Softwares Pvt Ltd · Coimbatore',
    image: '/src/assets/images/win_elevado_iv_2026.jpg',
    imageAlt: 'Abdul Latheef receiving his Elevado Softwares Pvt Ltd industrial visit certificate in Coimbatore',
  },
  {
    id: 6,
    badge: 'Team Leader · 15 Teams Showcase',
    title: 'EXPO 2025: Team Leader',
    quote:
      'Led a team of 5 at our college\'s EXPO 2025, where 15 teams showcased their projects. Our project, "Squid Game", was a real-time interactive game that students and volunteers played live at our stall. Our Principal and College Administrator visited the stall and congratulated us on the demo.',
    author: 'Team of 5 · "Squid Game" Interactive Demo',
    role: 'Congratulated by Principal & College Administrator',
    company: 'College EXPO 2025',
    image: '/src/assets/images/win_expo_2025_leader.jpg',
    imageAlt: 'Abdul Latheef leading a team of 5 demonstrating Squid Game live to visitors at EXPO 2025',
  },
  {
    id: 7,
    badge: '1-Month Internship · 2nd Year',
    title: 'Deep Learning Intern: Marcello Tech, Trichy',
    quote:
      'Completed a 1-month internship in Deep Learning using Python during my 2nd year. Worked hands-on with real-world problems and learned to build AI models from scratch.',
    author: 'Deep Learning with Python',
    role: 'Hands-on AI Model Building',
    company: 'Marcello Tech · Trichy',
    image: '/src/assets/images/win_marcello_intern.jpg',
    imageAlt: 'Abdul Latheef coding Python deep learning models during his internship at Marcello Tech, Trichy',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'what-i-do',
    question: 'What do you do?',
    answer:
      'I design and build web products, from Figma designs to full-stack MERN apps with AI features and automated deployment.',
  },
  {
    id: 'technologies',
    question: 'What technologies do you work with?',
    answer:
      'React, Vite, Tailwind CSS, Node.js, Express, MongoDB, Firebase, Gemini API, Git and GitHub Actions. I design in Figma, Canva and Photoshop.',
  },
  {
    id: 'projects',
    question: 'What projects have you built?',
    answer:
      'Docume (AI README generator), GrowMate (student mentorship platform), Titan Tech Fest 2026 (symposium website) and Myzo Plus (automated job alert bot).',
  },
  {
    id: 'design-and-code',
    question: 'Do you design as well as code?',
    answer: 'Yes. I design the interface in Figma first, then build it in React.',
  },
  {
    id: 'availability',
    question: 'Are you open to internships or freelance work?',
    answer: "Yes, I'm open to frontend and MERN stack opportunities.",
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'cert-node-mongodb',
    title: 'Intermediate Back-end Development: Node & MongoDB',
    label: 'Coursera · IBM',
    readTime: 'Verified',
    published: 'Sep 2026',
    image: '/src/assets/images/cert_node_mongodb.jpg',
    imageAlt: 'Coursera and IBM professional certificate in Intermediate Back-end Development: Node & MongoDB awarded to Abdul Latheef J',
    excerpt: 'Professional certification covering Node.js, Express, and MongoDB backend engineering.',
    body: [
      'Successfully satisfied the requirements for Intermediate Back-end Development: Node & MongoDB issued by Coursera and powered by IBM.',
      'Demonstrated rigorous understanding of server-side architecture, asynchronous JavaScript, database modeling with MongoDB, and RESTful API development.',
    ],
  },
  {
    id: 'cert-infosys-html',
    title: 'Infosys Springboard - Html',
    label: 'Infosys Springboard',
    readTime: 'Verified',
    published: 'Dec 2025',
    image: '/src/assets/images/cert_infosys_html.jpg',
    imageAlt: 'Infosys Springboard course completion certificate for HTML5 - The Language awarded to Abdul Latheef J',
    excerpt: 'Course completion certificate for HTML5 - The Language issued by Infosys Springboard.',
    body: [
      'Successfully completed the course for HTML5 - The Language awarded by Infosys Springboard on December 3, 2025.',
      'Covered semantic web markup, modern document structures, accessibility standards, and responsive web foundations.',
    ],
  },
  {
    id: 'cert-infosys-css',
    title: 'Infosys Springboard - Css',
    label: 'Infosys Springboard',
    readTime: 'Verified',
    published: 'Dec 2025',
    image: '/src/assets/images/cert_infosys_css.jpg',
    imageAlt: 'Infosys Springboard course completion certificate for CSS3 awarded to Abdul Latheef J',
    excerpt: 'Course completion certificate for CSS3 issued by Infosys Springboard.',
    body: [
      'Successfully completed the course for CSS3 awarded by Infosys Springboard on December 3, 2025.',
      'Mastered modern styling systems, CSS Grid, Flexbox, responsive design principles, and visual layout composition.',
    ],
  },
  {
    id: 'cert-infosys-js',
    title: 'Infosys Springboard - Javascript',
    label: 'Infosys Springboard',
    readTime: 'Verified',
    published: 'Dec 2025',
    image: '/src/assets/images/cert_infosys_js.jpg',
    imageAlt: 'Infosys Springboard course completion certificate for JavaScript awarded to Abdul Latheef J',
    excerpt: 'Course completion certificate for JavaScript issued by Infosys Springboard.',
    body: [
      'Successfully completed the course for JavaScript awarded by Infosys Springboard on December 3, 2025.',
      'Demonstrated proficiency in ES6+ syntax, asynchronous programming, DOM manipulation, and interactive client-side logic.',
    ],
  },
  {
    id: 'cert-nptel-hci',
    title: 'NPTEL - Human Computer Interaction',
    label: 'NPTEL Online',
    readTime: 'Elite 85%',
    published: 'Jan-Apr 2026',
    image: '/src/assets/images/cert_nptel_hci.jpg',
    imageAlt: 'NPTEL Online Certification in Human Computer Interaction awarded to Abdul Latheef J with Elite 85% score',
    excerpt: 'NPTEL Online Certification in Human Computer Interaction with Elite score of 85%.',
    body: [
      'Completed the 12-week NPTEL course in Human Computer Interaction (In English) funded by MoE, Govt. of India.',
      'Achieved an Elite score of 85% with 25/25 in Online Assignments and 60/75 in the Proctored Exam.',
    ],
  },
  {
    id: 'cert-nptel-cloud',
    title: 'NPTEL - Cloud Computing',
    label: 'NPTEL Online',
    readTime: 'Elite 61%',
    published: 'Jan-Apr 2026',
    image: '/src/assets/images/cert_nptel_cloud.jpg',
    imageAlt: 'NPTEL Online Certification in Cloud Computing awarded to Abdul Latheef J with Elite 61% score',
    excerpt: 'NPTEL Online Certification in Cloud Computing with Elite score of 61%.',
    body: [
      'Completed the 12-week NPTEL course in Cloud Computing offered by IIT Kharagpur, funded by MoE, Govt. of India.',
      'Achieved an Elite score of 61% with 25/25 in Online Assignments and 35.9/75 in the Proctored Exam.',
    ],
  },
  {
    id: 'cert-nptel-iot',
    title: 'NPTEL - Introduction to Internet of Things',
    label: 'NPTEL Online',
    readTime: 'Elite 61%',
    published: 'Jul-Oct 2025',
    image: '/src/assets/images/cert_nptel_iot.jpg',
    imageAlt: 'NPTEL Online Certification in Introduction to Internet of Things awarded to Abdul Latheef J with Elite 61% score',
    excerpt: 'NPTEL Online Certification in Introduction to Internet of Things with Elite score of 61%.',
    body: [
      'Completed the 12-week NPTEL course in Introduction to Internet of Things offered by IIT Kharagpur, funded by MoE, Govt. of India.',
      'Achieved an Elite score of 61% with 22.91/25 in Online Assignments and 38.27/75 in the Proctored Exam.',
    ],
  },
];
