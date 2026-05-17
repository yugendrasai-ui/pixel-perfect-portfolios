/**
 * ============================================================================
 *  PROJECTS DATA — EDIT THIS FILE TO ADD / UPDATE YOUR REAL PROJECTS
 * ============================================================================
 *
 *  HOW TO USE
 *  ----------
 *  1. To replace IMAGES for a project:
 *       Drop your files into:
 *         /public/projects/project-1/desktop-preview.png
 *         /public/projects/project-1/mobile-preview.png
 *         /public/projects/project-1/thumbnail.png
 *       (do the same for project-2, project-3, project-4, etc.)
 *
 *  2. To EDIT project details (title, description, tech stack, links):
 *       Just change the values in the array below.
 *
 *  3. To ADD a NEW project:
 *       a) Create a new folder: /public/projects/project-5/
 *       b) Add the 3 image files inside it.
 *       c) Copy one of the objects below and add it to the array.
 *       d) Update the `id`, `images.*` paths and details.
 *
 *  4. To REMOVE a project:
 *       Delete its object from the array (and its folder in /public/projects/).
 * ============================================================================
 */

export type Project = {
  /** Unique slug — also used as the folder name in /public/projects/ */
  id: string;
  /** Project / website name */
  title: string;
  /** Short category label, e.g. "SaaS Landing Page" */
  tag: string;
  /** Year the project was built */
  year: string;
  /** One-line short description (used on cards) */
  shortDesc: string;
  /** Longer description shown in the project showcase */
  description: string;
  /** Bullet points — what's good / notable about the page */
  features: string[];
  /** Tech stack tags */
  stack: string[];
  /** Live website URL (use "#" if not deployed yet) */
  liveUrl: string;
  /** Optional GitHub repo URL — leave empty string to hide the button */
  githubUrl?: string;
  /** Image paths (relative to /public). Replace files in those folders. */
  images: {
    desktop: string;
    mobile: string;
    tablet?: string;
    thumbnail: string;
  };
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Britly",
    tag: "Growth Agency",
    year: "2025",
    shortDesc: "A bold, modern landing page for a creative growth studio.",
    description:
      "A professional agency website designed to showcase services, case studies, and brand identity with a focus on typography, whitespace, and clean interactions.",
    features: [
      "Modern editorial layout",
      "Service spotlight sections",
      "Case study grid",
      "Responsive studio aesthetic",
    ],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://growth-studio-agency.yugendrasai797.workers.dev/",
    githubUrl: "",
    images: {
      desktop: "/projects/project-1/desktop.png",
      mobile: "/projects/project-1/mobile.png",
      tablet: "/projects/project-1/tablet.png",
      thumbnail: "/projects/project-1/thumbnail.png",
    },
  },
  {
    id: "project-2",
    title: "Time Reimagined",
    tag: "Luxury Watch Store",
    year: "2026",
    shortDesc: "A high-fidelity cinematic storefront for luxury timepieces.",
    description:
      "A premium e-commerce experience featuring smooth scroll animations, 3D-style product reveals, and a minimalist luxury aesthetic tailored for high-end watch collectors.",
    features: [
      "Cinematic hero animations",
      "Exploded view product modal",
      "Dynamic lighting effects",
      "Optimized for 60fps performance",
    ],
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://time-reimagined.pages.dev/",
    githubUrl: "",
    images: {
      desktop: "/projects/project-2/desktop.png",
      mobile: "/projects/project-2/mobile.png",
      tablet: "/projects/project-2/tablet.png",
      thumbnail: "/projects/project-2/thumbnail.png",
    },
  },
  {
    id: "project-3",
    title: "ExpertConnect",
    tag: "Consultation Platform",
    year: "2026",
    shortDesc: "A modern, high-fidelity scheduling system connecting clients with industry experts.",
    description:
      "A complete client scheduling and consultation booking platform. Designed to connect clients with industry-leading experts, featuring dynamic specialist discovery, appointment slot booking, secure registration, and interactive dashboard interfaces.",
    features: [
      "Interactive expert directory & filtering",
      "Real-time calendar slot booking system",
      "Comprehensive specialist profiles & reviews",
      "Secure client onboarding & dashboard",
    ],
    stack: ["React", "Tailwind CSS", "Vite", "REST API", "Lucide Icons"],
    liveUrl: "https://expert-booking-system-tau.vercel.app/",
    githubUrl: "",
    images: {
      desktop: "/projects/project-3/desktop.jpg",
      mobile: "/projects/project-3/mobile.png",
      tablet: "/projects/project-3/tablet.jpg",
      thumbnail: "/projects/project-3/desktop.jpg",
    },
  },
  {
    id: "project-4",
    title: "Ecom Express",
    tag: "E-commerce Storefront",
    year: "2025",
    shortDesc: "A high-performance modern e-commerce storefront with a sleek shopping experience.",
    description:
      "A fast, luxury-themed storefront featuring a clean grid layout, interactive cart drawer, premium banner collections, and smooth responsive views tailored for a seamless shopping flow.",
    features: [
      "Dynamic product display & grid filtering",
      "Interactive shopping cart sidebar",
      "Promotional spotlight slides & hero banners",
      "Fully optimized for all device widths",
    ],
    stack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    liveUrl: "https://nova-shop-ui.yugendrasai797.workers.dev/",
    githubUrl: "",
    images: {
      desktop: "/projects/project-4/desktop.jpg",
      mobile: "/projects/project-4/mobile.jpg",
      tablet: "/projects/project-4/tablet.jpg",
      thumbnail: "/projects/project-4/desktop.jpg",
    },
  },
  {
    id: "project-5",
    title: "Auth Portal",
    tag: "Authentication Page",
    year: "2026",
    shortDesc: "A polished login and registration interface with real-time field validation.",
    description:
      "A sleek, high-fidelity user onboarding and authentication portal. Featuring highly responsive input validation, secure form controls, error feedback, and smooth entry transitions.",
    features: [
      "Secure registration & login forms",
      "Real-time input validation & error feedback",
      "Elegant dark-themed user interface",
      "Interactive password visibility toggles",
    ],
    stack: ["React", "Tailwind CSS", "Vite", "Lucide Icons"],
    liveUrl: "https://aurora-login.yugendrasai797.workers.dev/",
    githubUrl: "",
    images: {
      desktop: "/projects/project-5/desktop.jpg",
      mobile: "/projects/project-5/mobile.jpg",
      tablet: "/projects/project-5/tablet.jpg",
      thumbnail: "/projects/project-5/desktop.jpg",
    },
  },
];
