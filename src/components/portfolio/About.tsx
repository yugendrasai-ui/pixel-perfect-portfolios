import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/portrait.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const stats = [
  { v: 80, s: "+", l: "Projects shipped" },
  { v: 7, s: "yrs", l: "Designing the web" },
  { v: 12, s: "M+", l: "Visitors converted" },
  { v: 98, s: "%", l: "Client retention" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground"
      >
        <span className="size-1.5 rounded-full bg-accent" /> About
      </motion.div>

      <div className="mt-8 grid lg:grid-cols-12 gap-6">
        {/* portrait card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 relative rounded-3xl overflow-hidden glass-strong aspect-[4/5]"
        >
          <img src={portrait} alt="Portrait" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div>
              <div className="text-xs text-muted-foreground">Based in</div>
              <div className="font-display text-lg">Lisbon · Remote</div>
            </div>
            <span className="glass rounded-full px-3 py-1 text-xs">EST 2019</span>
          </div>
        </motion.div>

        {/* story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-8 glass-strong rounded-3xl p-8 md:p-12 flex flex-col justify-between"
        >
          <h2 className="font-display text-3xl md:text-5xl tracking-[-0.03em] leading-[1.05]">
            I help founders turn <span className="font-serif italic text-gradient-warm">complex ideas</span> into
            landing pages that feel inevitable — and convert like crazy.
          </h2>
          <p className="mt-8 text-muted-foreground max-w-2xl leading-relaxed">
            For seven years I've been the design partner founders call when their next launch has to land.
            From early-stage AI tools to Series-B SaaS, I obsess over the details that make a page feel
            premium — type that breathes, motion that earns its place, and copy hierarchy that does the selling.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.l} className="bg-card p-5">
                <div className="font-display text-3xl md:text-4xl tracking-tight">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
