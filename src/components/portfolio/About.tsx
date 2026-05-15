import { motion } from "motion/react";
import portrait from "@/assets/portrait.jpg";

/**
 * ABOUT SECTION
 * To change the bio, edit the text below.
 * To change the portrait image, replace src/assets/portrait.jpg
 * (or import a new file).
 */

const focusItems = [
  { t: "Modern design", d: "Clean, minimal layouts with a premium feel." },
  { t: "Responsive", d: "Looks great on phones, tablets and desktops." },
  { t: "Smooth motion", d: "Subtle animations that feel natural." },
  { t: "Always learning", d: "Growing my skills with every new project." },
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 relative rounded-3xl overflow-hidden glass-strong aspect-[4/5]"
        >
          <img src={portrait} alt="Yugendra Sai" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div>
              <div className="text-xs text-muted-foreground">Freelance</div>
              <div className="font-display text-lg">Designer & Developer</div>
            </div>
            <span className="glass rounded-full px-3 py-1 text-xs">Open to work</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-8 glass-strong rounded-3xl p-8 md:p-12 flex flex-col justify-between"
        >
          <h2 className="font-display text-3xl md:text-5xl tracking-[-0.03em] leading-[1.05]">
            Hi, I'm Yugendra — passionate about building{" "}
            <span className="font-serif italic text-gradient-warm">modern web experiences</span>{" "}
            that feel clean, fast and friendly to use.
          </h2>
          <p className="mt-8 text-muted-foreground max-w-2xl leading-relaxed">
            I'm a freelance landing page designer and developer focused on clean
            UI/UX and responsive design. I love helping small brands and founders
            launch modern websites — and I'm learning and growing with every new
            project I take on.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden">
            {focusItems.map((s) => (
              <div key={s.t} className="bg-card p-5">
                <div className="font-display text-lg md:text-xl tracking-tight">{s.t}</div>
                <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{s.d}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
