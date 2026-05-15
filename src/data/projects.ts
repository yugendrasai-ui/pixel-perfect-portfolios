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
    thumbnail: string;
  };
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Numera",
    tag: "SaaS Landing Page",
    year: "2026",
    shortDesc: "A clean SaaS landing page built to convert.",
    description:
      "A modern SaaS landing page concept focused on a clear hero, simple pricing and a friendly call-to-action. Built as a practice project to explore conversion-focused layouts.",
    features: [
      "Hero with product preview",
      "Responsive pricing section",
      "Smooth scroll animations",
      "Optimized for mobile first",
    ],
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "",
    images: {
      desktop: "/projects/project-1/desktop-preview.png",
      mobile: "/projects/project-1/mobile-preview.png",
      thumbnail: "/projects/project-1/thumbnail.png",
    },
  },
  {
    id: "project-2",
    title: "Halo AI",
    tag: "AI Product Page",
    year: "2025",
    shortDesc: "A bold landing page for an AI productivity tool.",
    description:
      "A landing page concept for an AI productivity startup with a cinematic hero, feature sections and a simple waitlist form.",
    features: [
      "Cinematic hero section",
      "Feature highlights with icons",
      "Waitlist email capture",
      "Dark, modern aesthetic",
    ],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "",
    images: {
      desktop: "/projects/project-2/desktop-preview.png",
      mobile: "/projects/project-2/mobile-preview.png",
      thumbnail: "/projects/project-2/thumbnail.png",
    },
  },
  {
    id: "project-3",
    title: "Pretrosoft",
    tag: "Product Landing Page",
    year: "2025",
    shortDesc: "A clean product page with a focus on clarity.",
    description:
      "A practice landing page exploring how to balance information density with a calm, premium look. Built to feel fast and effortless on mobile.",
    features: [
      "Clear product explainer",
      "Mobile-first layout",
      "Accessible color contrast",
      "Reusable component design",
    ],
    stack: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "#",
    githubUrl: "",
    images: {
      desktop: "/projects/project-3/desktop-preview.png",
      mobile: "/projects/project-3/mobile-preview.png",
      thumbnail: "/projects/project-3/thumbnail.png",
    },
  },
  {
    id: "project-4",
    title: "Lessoca",
    tag: "E-commerce Landing Page",
    year: "2024",
    shortDesc: "An editorial-style landing page for a small brand.",
    description:
      "A small e-commerce landing page concept with a soft editorial layout, lookbook gallery and a simple call-to-action.",
    features: [
      "Editorial hero layout",
      "Lookbook image grid",
      "Smooth hover interactions",
      "Lightweight and fast",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "",
    images: {
      desktop: "/projects/project-4/desktop-preview.png",
      mobile: "/projects/project-4/mobile-preview.png",
      thumbnail: "/projects/project-4/thumbnail.png",
    },
  },
];
