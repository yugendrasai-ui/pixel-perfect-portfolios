import { motion } from "motion/react";
import { ArrowUpRight, Check, Github } from "lucide-react";
import { projects } from "@/data/projects";

/**
 * WORK SECTION — Showcases your projects.
 *
 * To EDIT projects (titles, images, links, etc.), open:
 *   src/data/projects.ts
 *
 * Images live in /public/projects/project-N/  (just drop your files there).
 */

// Subtle background glow behind each project card. Cycles through these.
const glows = [
  "from-indigo-500/25 via-violet-500/10 to-transparent",
  "from-rose-500/25 via-orange-500/10 to-transparent",
  "from-emerald-500/25 via-cyan-500/10 to-transparent",
  "from-amber-500/25 via-stone-500/10 to-transparent",
];

export function Work() {
  return (
    <section id="work" className="relative py-32 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" /> Selected projects
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1]">
            Landing pages I've <span className="font-serif italic text-gradient-warm">built so far.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            A small collection of recent work — each one focused on a clean
            layout, smooth motion and a great mobile experience.
          </p>
        </div>
        <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
          Start a project <ArrowUpRight className="size-4" />
        </a>
      </div>

      <div className="mt-20 space-y-32">
        {projects.map((p, i) => {
          const reverse = i % 2 === 1;
          const glow = glows[i % glows.length];
          return (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Large background glow — hidden on mobile to keep it clean */}


              <div className={`grid lg:grid-cols-12 gap-8 lg:gap-10 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* === Mockups (Clean Bundle: No Cut-offs, No Extra White) === */}
                <div className="lg:col-span-9 relative">
                  <div className="relative h-[650px] md:h-[850px] w-full flex items-center justify-center pt-24 pb-24">
                    
                    {/* 1. Laptop (Foundation - Hero View) */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="relative z-10 w-[85%] md:w-[80%] aspect-[16/10] shadow-[0_50px_120px_rgba(0,0,0,0.5)] overflow-hidden rounded-xl md:rounded-2xl border-[1px] border-white/10"
                    >
                      <img
                        src={p.images.desktop}
                        alt={`${p.title} desktop preview`}
                        loading="lazy"
                        className="w-full h-full object-contain scale-[1] object-top"
                      />
                    </motion.div>

                    {/* 2. Phone (Displaying the uploaded mockup as is) */}
                    <motion.div
                      initial={{ opacity: 0, x: -50, y: 50 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="absolute left-[-2%] bottom-[26%] md:bottom-[30%] z-30 w-[20%] md:w-[18%] shadow-[0_40px_90px_rgba(0,0,0,0.7)] rounded-xl md:rounded-[2.2rem] overflow-hidden"
                    >
                      <img
                        src={p.images.mobile}
                        alt={`${p.title} mobile design`}
                        className="w-full h-auto block"
                      />
                    </motion.div>

                    {/* 3. Tablet (Displaying the uploaded mockup as is) */}
                    <motion.div
                      initial={{ opacity: 0, x: 50, y: -50 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="absolute right-[-2%] top-[15%] md:top-[18%] z-20 w-[32%] md:w-[30%] shadow-[0_40px_90px_rgba(0,0,0,0.7)] rounded-xl md:rounded-3xl overflow-hidden"
                    >
                      <img
                        src={p.images.tablet || p.images.desktop}
                        alt={`${p.title} tablet design`}
                        className="w-full h-auto block"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* === Project info === */}
                <div className="lg:col-span-3 space-y-6">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">{p.tag}</span>
                    <span className="text-muted-foreground/40">·</span>
                    <span className="text-xs text-muted-foreground">{p.year}</span>
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl tracking-[-0.03em] leading-[1]">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{p.description}</p>

                  {/* Feature list */}
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

                  {/* Tech stack */}
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Tech stack</div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <span key={t} className="glass rounded-full px-2.5 py-1 text-[11px]">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2 pt-2 flex-wrap">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn relative btn-rgb-glow btn-shake-periodic inline-flex items-center gap-2 rounded-full bg-zinc-950 text-white pl-4 pr-1.5 py-1.5 text-sm font-medium transition-all duration-300 hover:scale-[1.02]"
                    >
                      Live preview
                      <span className="size-7 rounded-full bg-white/10 text-white grid place-items-center group-hover/btn:bg-white group-hover/btn:text-black group-hover/btn:rotate-45 transition-all duration-300">
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </a>
                    {/* GitHub button — only shows when githubUrl is set in projects.ts */}
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-2 text-xs hover:bg-white/10 transition-colors"
                      >
                        <Github className="size-3.5" /> Code
                      </a>
                    )}
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
