import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  { n: "01", t: "Discovery", d: "Workshops, audits and positioning to find the sharpest angle for your launch." },
  { n: "02", t: "Wireframe", d: "Low-fidelity flows that lock narrative and conversion before pixels enter the room." },
  { n: "03", t: "UI Design", d: "Premium, opinionated visual systems crafted to feel inevitable on every breakpoint." },
  { n: "04", t: "Development", d: "Hand-built in Framer, Webflow or React with motion that's choreographed, not bolted on." },
  { n: "05", t: "Launch", d: "QA, analytics, A/B variants — and a 30-day iteration loop after you go live." },
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
        Five steps. <span className="font-serif italic text-gradient-warm">Zero noise.</span>
      </h2>

      <div ref={ref} className="relative mt-20 pl-8 md:pl-16">
        {/* line */}
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
