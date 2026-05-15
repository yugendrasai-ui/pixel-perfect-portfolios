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
              <div className={`absolute -inset-x-10 -inset-y-10 -z-10 bg-gradient-to-br ${glow} blur-3xl opacity-50`} />

              <div className={`grid lg:grid-cols-12 gap-8 lg:gap-10 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* === Mockups (desktop + floating mobile) === */}
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
                          {p.title.toLowerCase().replace(/\s+/g, "")}.com
                        </div>
                      </div>
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-card">
                        {/* Replace this image at: /public/projects/{p.id}/desktop-preview.png */}
                        <img
                          src={p.images.desktop}
                          alt={`${p.title} desktop preview`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                    </motion.div>

                    {/* Floating mobile preview */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.9, delay: 0.2 }}
                      className={`hidden md:block absolute -bottom-10 ${reverse ? "-left-6" : "-right-6"} w-[26%] max-w-[180px]`}
                      style={{ animation: "float 7s ease-in-out infinite" }}
                    >
                      <div className="rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-card bg-black">
                        {/* Replace this image at: /public/projects/{p.id}/mobile-preview.png */}
                        <img
                          src={p.images.mobile}
                          alt={`${p.title} mobile preview`}
                          loading="lazy"
                          className="w-full h-auto block"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* === Project info === */}
                <div className="lg:col-span-4 space-y-6">
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
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-4 pr-1.5 py-1.5 text-sm font-medium hover:scale-[1.02] transition-transform"
                    >
                      Live preview
                      <span className="size-7 rounded-full bg-background text-foreground grid place-items-center group-hover/btn:rotate-45 transition-transform">
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
