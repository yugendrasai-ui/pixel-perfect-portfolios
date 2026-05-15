import { motion } from "motion/react";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowUpRight, Sparkles } from "lucide-react";

/**
 * HERO SECTION
 * To change the headline / intro text, edit the strings below.
 */

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden noise">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

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
          Available for freelance projects
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
            Hi, I'm <span className="text-foreground">Yugendra Sai</span> — a freelance
            landing page designer & developer passionate about building clean,
            modern and responsive websites for growing brands.
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
              View my projects
              <span className="size-8 rounded-full bg-background text-foreground grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="size-4" />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm hover:bg-white/10 transition-colors"
            >
              <Sparkles className="size-3.5" /> Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
