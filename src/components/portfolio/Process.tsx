import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * PROCESS SECTION
 * Edit the steps below to match how you like to work.
 */
const steps = [
  { n: "01", t: "Talk", d: "We chat about your idea, your brand and what you want the website to do." },
  { n: "02", t: "Plan", d: "I sketch a simple layout and structure so we both agree on the direction." },
  { n: "03", t: "Design", d: "I design a clean, modern landing page tailored to your brand." },
  { n: "04", t: "Build", d: "I build it as a fast, responsive website using modern web tools." },
  { n: "05", t: "Launch", d: "We review together, make small tweaks and put it live." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-32 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span className="size-1.5 rounded-full bg-accent" /> Process
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1]">
        Simple steps. <span className="font-serif italic text-gradient-warm">Clear results.</span>
      </h2>

      <div ref={ref} className="relative mt-20 pl-8 md:pl-16">
        <div className="absolute left-2 md:left-6 top-2 bottom-2 w-px bg-border" />
        <motion.div
          style={{ height: lineH }}
          className="absolute left-2 md:left-6 top-2 w-px bg-gradient-to-b from-accent via-glow to-transparent"
        />

        <div className="space-y-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="relative"
            >
              <div className="absolute -left-8 md:-left-16 top-1.5 size-4 rounded-full bg-background border-2 border-accent shadow-glow" />
              <div className="grid md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-2 font-display text-sm text-muted-foreground tracking-widest">{s.n}</div>
                <div className="md:col-span-10">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground max-w-xl leading-relaxed">{s.d}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
