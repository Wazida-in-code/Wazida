// ─── Portfolio Data ──────────────────────────────────────────────────────────
// All personal information, projects, skills, and contact details in one place.
// Replace placeholder values with your real information before deploying.

export type SocialIconName = "github" | "linkedin";

export type SkillIconName =
  | "html5"
  | "css3"
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "tailwind"
  | "daisyui"
  | "heroui"
  | "shadcn"
  | "git"
  | "github"
  | "vscode"
  | "antigravity"
  | "python"
  | "mongodb";

export interface SocialLink {
  name: string;
  url: string | null;
  icon: SocialIconName;
  placeholder?: string;
}

export interface Skill {
  name: string;
  icon: SkillIconName;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  titleBangla?: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string | null;
  image: string;
  features: ProjectFeature[];
  challenges: string[];
  futureImprovements: string[];
  detailsAreDraft: boolean;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

interface PersonalInfo {
  name: string;
  firstName: string;
  profession: string;
  tagline: string;
  heroIntro: string;
  aboutText: string[];
  profileImage: string;
  resumeUrl: string | null;
  resumePlaceholder: string;
}

interface ContactInfo {
  email: string | null;
  emailPlaceholder: string;
  phone: string | null;
  phonePlaceholder: string;
  whatsapp: string | null;
  whatsappPlaceholder: string;
  location: string;
}

// ─── Personal Info ───────────────────────────────────────────────────────────
export const personalInfo: PersonalInfo = {
    name: "Wazida Momtaz Esha",
    firstName: "Wazida",
    profession: "Frontend Developer",
    tagline: "Building Modern & User-Friendly Web Experiences",
    heroIntro: "I'm passionate about building responsive, accessible, and user-friendly web applications. I enjoy turning ideas into clean digital experiences using modern frontend technologies.",
    aboutText: [
        "Hi! I'm Wazida, working toward becoming a skilled frontend developer. My programming journey has grown into an interest in building modern websites and interactive web applications.",
        "I enjoy creating responsive user interfaces, solving coding problems, exploring new technologies, and turning creative ideas into functional products.",
        "I'm continuously improving my skills in JavaScript, React, Next.js, TypeScript, and modern styling techniques. My long-term goal is to grow into a full-stack developer and build useful digital experiences.",
        "Outside programming, I enjoy exploring creative ideas and technology, as well as drawing and painting.",
    ],
    profileImage: "/images/me-1.jpeg",
    resumeUrl: null,
    resumePlaceholder: "/resume.pdf",
};
// ─── Social Links ────────────────────────────────────────────────────────────
// TODO: Replace placeholder URLs with your real profile links.
export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/Wazida-in-code",
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/wazida-momtaz-esha2712",
        icon: "linkedin",
        placeholder: "Add your LinkedIn profile URL in src/data/portfolio.ts",
    },
];
// ─── Contact Info ────────────────────────────────────────────────────────────
// These three fields are the live values used to build the contact links
// (mailto:, tel:, https://wa.me/). Set a field to null to disable its link —
// the card then falls back to the *Placeholder text and renders disabled.
// Phone/WhatsApp need the country code, e.g. "+8801635676282".
export const contactInfo: ContactInfo = {
    email: "wazidamomtazesha@gmail.com",
    emailPlaceholder: "wazidamomtazesha@gmail.com",
    phone: "+8801635-676282",
    phonePlaceholder: "+8801635-676282",
    whatsapp: "+8801635-676282",
    whatsappPlaceholder: "+8801635-676282",
    location: "Chattogram, Bangladesh",
};
// ─── Education ───────────────────────────────────────────────────────────────
export const education: EducationEntry[] = [
    {
        institution: "Chattogram Polytechnic Institute",
        degree: "Diploma in Computer Science & Technology",
        period: "2025 — Present",
        description: "Currently pursuing a Diploma in Computer Science & Technology, building a strong foundation in programming, data structures, and modern web development.",
    },
];
// ─── Skills ──────────────────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend Development",
        skills: [
            { name: "HTML5", icon: "html5" },
            { name: "CSS3", icon: "css3" },
            { name: "JavaScript", icon: "javascript" },
            { name: "TypeScript", icon: "typescript" },
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "DaisyUI", icon: "daisyui" },
            { name: "Hero UI", icon: "heroui" },
            { name: "shadcn", icon: "shadcn" },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
            { name: "Visual Studio Code", icon: "vscode" },
            { name: "Antigravity AI", icon: "antigravity" },
        ],
    },
    {
        title: "Additional Knowledge",
        skills: [
            { name: "Python", icon: "python" },
            { name: "MongoDB", icon: "mongodb" },
        ],
    },
];
// ─── Projects ────────────────────────────────────────────────────────────────
export const projects: Project[] = [
    {
        slug: "bazardor",
        title: "BazarDor",
        titleBangla: "বাজার দর",
        description: "A web application designed to help users explore daily market prices in Bangladesh, browse products by category, sort prices, and compare market prices through a responsive interface.",
        longDescription: "A web application designed to help users explore daily market prices in Bangladesh, browse products by category, sort prices, and compare market prices through a responsive interface.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://bazardor-orcin.vercel.app/",
        githubUrl: "https://github.com/Wazida-in-code/bazardor",
        image: "/images/bazardor.png",
        features: [
            {
                title: "Category-Based Browsing",
                description: "Browse products organized into intuitive categories for quick access.",
            },
            {
                title: "Price Sorting & Filtering",
                description: "Sort products by price and filter by category to find the best deals.",
            },
            {
                title: "Market Price Comparison",
                description: "Compare prices across different markets to make informed purchasing decisions.",
            },
            {
                title: "Responsive Design",
                description: "Fully responsive interface that works seamlessly on mobile, tablet, and desktop.",
            },
        ],
        // TODO: Review and edit these draft challenge/improvement descriptions
        challenges: [
            "Designing an intuitive interface for browsing and comparing large sets of market price data.",
            "Implementing efficient client-side filtering and sorting for a smooth user experience.",
            "Creating a responsive layout that presents price data clearly across all device sizes.",
        ],
        futureImprovements: [
            "Add real-time price update notifications.",
            "Implement user accounts for saving favorite products and markets.",
            "Add price history charts to visualize trends over time.",
            "Integrate a location-based feature to show nearby markets.",
        ],
        detailsAreDraft: true,
    },
    {
        slug: "bangla-news",
        title: "Bangla News",
        description: "A Bengali-language news portal featuring headlines, featured stories, and category-based news in a clean and organized interface.",
        longDescription: "A Bengali-language news portal featuring headlines, featured stories, and category-based news in a clean and organized interface.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://bangla-news-wfbr.vercel.app/",
        githubUrl: "https://github.com/wazida-in-code/bangla-news",
        image: "/images/Bangla-News.png",
        features: [
            {
                title: "Headline Display",
                description: "Prominent headline section showcasing the most important news stories.",
            },
            {
                title: "Featured Stories",
                description: "Curated featured stories section highlighting significant articles.",
            },
            {
                title: "Category Navigation",
                description: "Browse news organized by categories such as politics, sports, technology, and more.",
            },
            {
                title: "Clean Interface",
                description: "Minimalist design focused on readability and easy content consumption.",
            },
        ],
        // TODO: Review and edit these draft challenge/improvement descriptions
        challenges: [
            "Designing a layout that supports Bengali typography and right reading patterns.",
            "Organizing diverse news content into a clean, navigable structure.",
            "Ensuring fast page loads while displaying rich news content with images.",
        ],
        futureImprovements: [
            "Add a search functionality for finding specific news articles.",
            "Implement a dark mode for comfortable reading at night.",
            "Add bookmarking feature for saving articles to read later.",
            "Integrate a commenting system for reader engagement.",
        ],
        detailsAreDraft: true,
    },
    {
        slug: "fitness-log",
        title: "Fitness Log",
        description: "A workout tracking web application for exploring exercises, organizing workout plans, and viewing fitness information through an interactive interface.",
        longDescription: "A workout tracking web application for exploring exercises, organizing workout plans, and viewing fitness information through an interactive interface.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "DaisyUI"],
        liveUrl: "https://fitness-log-514m.vercel.app/",
        githubUrl: "https://github.com/Wazida-in-code/Fitness-log",
        image: "/images/fitt-log.png",
        features: [
            {
                title: "Exercise Library",
                description: "Comprehensive library of exercises with detailed descriptions and categories.",
            },
            {
                title: "Workout Planning",
                description: "Create and organize custom workout plans tailored to personal fitness goals.",
            },
            {
                title: "Interactive Interface",
                description: "Engaging and intuitive UI built with DaisyUI for a polished user experience.",
            },
            {
                title: "Fitness Information",
                description: "Access detailed fitness information and exercise guides.",
            },
        ],
        // TODO: Review and edit these draft challenge/improvement descriptions
        challenges: [
            "Building an interactive exercise exploration system with filtering capabilities.",
            "Designing a user-friendly workout planning interface with drag-and-drop or similar interactions.",
            "Integrating DaisyUI components while maintaining a consistent custom design language.",
        ],
        futureImprovements: [
            "Add progress tracking with visual charts and statistics.",
            "Implement user authentication for personalized workout history.",
            "Add social features for sharing workout plans with others.",
            "Integrate a timer and rest period tracker for active workouts.",
        ],
        detailsAreDraft: true,
    },
];
// ─── Navigation ──────────────────────────────────────────────────────────────
export const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];
