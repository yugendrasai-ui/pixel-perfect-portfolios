import { motion } from "motion/react";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowUpRight, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden noise">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      {/* floating orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 size-[420px] rounded-full bg-accent/20 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-0 size-[500px] rounded-full bg-glow blur-[140px]"
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
          Available for Q3 2026 — 2 spots left
        </motion.div>

        <h1 className="mt-8 font-display font-medium tracking-[-0.04em] text-[clamp(3rem,9vw,9rem)] leading-[0.92]">
          {["Landing pages", "that ", "convert."].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.2 + i * 0.1 }}
              className="inline-block mr-[0.25em]"
            >
              {word === "that " ? (
                <span className="font-serif italic font-normal text-gradient-warm">that </span>
              ) : (
                <span className="text-gradient">{word}</span>
              )}
            </motion.span>
          ))}
        </h1>

        <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.6 }}
            className="md:col-span-5 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
          >
            I'm Bruno — an independent designer & developer crafting cinematic,
            high-converting landing pages for ambitious SaaS and AI startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="md:col-span-7 flex flex-wrap items-center gap-3 md:justify-end"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-5 pr-2 py-2 text-sm font-medium hover:scale-[1.02] transition-transform"
            >
              View selected work
              <span className="size-8 rounded-full bg-background text-foreground grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="size-4" />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm hover:bg-white/10 transition-colors"
            >
              <Sparkles className="size-3.5" /> Book a call
            </a>
          </motion.div>
        </div>

        {/* floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.9 }}
          className="hidden lg:block absolute right-10 top-44"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <div className="glass-strong rounded-2xl p-4 w-56 shadow-card">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Conv. rate</div>
            <div className="font-display text-3xl mt-1">+184%</div>
            <div className="text-xs text-muted-foreground mt-1">vs. previous build</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 1.1 }}
          className="hidden lg:block absolute left-10 bottom-32"
          style={{ animation: "float 7s ease-in-out infinite reverse" }}
        >
          <div className="glass-strong rounded-2xl p-4 w-60 shadow-card">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="size-7 rounded-full border-2 border-background bg-gradient-to-br from-accent to-glow" />
              ))}
            </div>
            <div className="text-xs text-muted-foreground mt-2">42+ founders trust the work</div>
          </div>
        </motion.div>
      </div>

      {/* logo marquee */}
      <div className="relative overflow-hidden border-y border-border/60 py-5">
        <div className="flex gap-16 whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, k) =>
            ["Linear", "Vercel", "Framer", "Stripe", "Notion", "Arc", "Raycast", "Cursor"].map((b) => (
              <span
                key={`${k}-${b}`}
                className="font-display text-2xl text-muted-foreground/60 tracking-tight"
              >
                {b}
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
