import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import m1 from "@/assets/project-1-mobile.jpg";
import m2 from "@/assets/project-2-mobile.jpg";
import m3 from "@/assets/project-3-mobile.jpg";
import m4 from "@/assets/project-4-mobile.jpg";

const projects = [
  {
    desktop: p1,
    mobile: m1,
    name: "Numera",
    tag: "SaaS · Fintech",
    year: "2026",
    metric: "+212% signups",
    desc: "A modern fintech landing page rebuilt around a single conversion goal — frictionless signups for a new business banking product.",
    features: ["Hero with live dashboard preview", "Interactive pricing calculator", "Customer logo wall", "Animated feature reveals"],
    stack: ["Next.js", "Tailwind", "Framer Motion", "Sanity"],
    glow: "from-indigo-500/30 via-violet-500/10 to-transparent",
  },
  {
    desktop: p2,
    mobile: m2,
    name: "Halo AI",
    tag: "AI · Startup",
    year: "2025",
    metric: "$1.4M raised",
    desc: "An AI productivity startup launching out of stealth. Cinematic storytelling, bold typography, and a launch flow that converted investors and users alike.",
    features: ["Cinematic hero video", "Product walkthrough sections", "Waitlist with referrals", "Press & investor section"],
    stack: ["Astro", "GSAP", "Tailwind", "Resend"],
    glow: "from-rose-500/30 via-orange-500/10 to-transparent",
  },
  {
    desktop: p3,
    mobile: m3,
    name: "Pretrosoft",
    tag: "Web3 · Crypto",
    year: "2025",
    metric: "120k waitlist",
    desc: "A premium web3 product page balancing technical depth with mainstream clarity. Modular sections allowed the team to ship updates weekly.",
    features: ["Token utility explainer", "Live on-chain stats", "Multilingual support", "Wallet-aware CTAs"],
    stack: ["Next.js", "Wagmi", "Framer", "Vercel"],
    glow: "from-emerald-500/30 via-cyan-500/10 to-transparent",
  },
  {
    desktop: p4,
    mobile: m4,
    name: "Lessoca",
    tag: "E-commerce · Fashion",
    year: "2024",
    metric: "+88% AOV",
    desc: "An editorial-led e-commerce experience for an emerging luxury label. Storytelling-first product pages and a streamlined mobile checkout.",
    features: ["Editorial storytelling", "Lookbook galleries", "One-page checkout", "Shopify headless setup"],
    stack: ["Hydrogen", "Shopify", "Tailwind", "Sanity"],
    glow: "from-amber-500/30 via-stone-500/10 to-transparent",
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-32 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" /> Featured projects
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1]">
            Websites I've designed <span className="font-serif italic text-gradient-warm">& shipped.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            A close look at recent landing pages — desktop, mobile, and the details that made each one work.
          </p>
        </div>
        <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
          Start a project <ArrowUpRight className="size-4" />
        </a>
      </div>

      <div className="mt-20 space-y-32">
        {projects.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* glow */}
              <div className={`absolute -inset-x-10 -inset-y-10 -z-10 bg-gradient-to-br ${p.glow} blur-3xl opacity-50`} />

              <div className={`grid lg:grid-cols-12 gap-8 lg:gap-10 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* Mockups */}
                <div className="lg:col-span-8 relative">
                  <div className="relative">
                    {/* Desktop browser frame */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="glass-strong rounded-2xl p-3 shadow-card"
                    >
                      <div className="flex items-center gap-1.5 px-2 pb-2.5">
                        <span className="size-2.5 rounded-full bg-red-400/70" />
                        <span className="size-2.5 rounded-full bg-yellow-400/70" />
                        <span className="size-2.5 rounded-full bg-emerald-400/70" />
                        <div className="ml-3 flex-1 h-5 rounded-md bg-white/5 border border-border/60 px-3 flex items-center text-[10px] text-muted-foreground/80 font-mono">
                          {p.name.toLowerCase()}.com
                        </div>
                      </div>
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-card">
                        <img
                          src={p.desktop}
                          alt={`${p.name} desktop preview`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                    </motion.div>

                    {/* Mobile preview floating */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.9, delay: 0.2 }}
                      className={`hidden md:block absolute -bottom-10 ${reverse ? "-left-6" : "-right-6"} w-[26%] max-w-[180px]`}
                      style={{ animation: "float 7s ease-in-out infinite" }}
                    >
                      <div className="rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-card bg-black">
                        <img
                          src={p.mobile}
                          alt={`${p.name} mobile preview`}
                          loading="lazy"
                          className="w-full h-auto block"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">{p.tag}</span>
                    <span className="text-muted-foreground/40">·</span>
                    <span className="text-xs text-muted-foreground">{p.year}</span>
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl tracking-[-0.03em] leading-[1]">{p.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>

                  <div className="glass rounded-2xl p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Highlights</div>
                    <ul className="space-y-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="size-3.5 text-accent mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Tech stack</div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <span key={t} className="glass rounded-full px-2.5 py-1 text-[11px]">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="#"
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-4 pr-1.5 py-1.5 text-sm font-medium hover:scale-[1.02] transition-transform"
                    >
                      Live preview
                      <span className="size-7 rounded-full bg-background text-foreground grid place-items-center group-hover/btn:rotate-45 transition-transform">
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </a>
                    <span className="glass rounded-full px-3 py-1.5 text-xs">{p.metric}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
