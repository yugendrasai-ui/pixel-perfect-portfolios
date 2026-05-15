import { motion } from "motion/react";

/**
 * TESTIMONIALS — placeholder section.
 *
 * Since you're just starting out, these are placeholders.
 * Replace the items below with REAL quotes once you have client feedback.
 * To remove this section entirely, delete <Testimonials /> from src/routes/index.tsx.
 */
const items = [
  {
    q: "Placeholder testimonial — replace this with a real client quote once you have one.",
    n: "Client name",
    r: "Role, Company",
    c: "from-indigo-500 to-violet-500",
  },
  {
    q: "Placeholder testimonial — kind words from a happy client will look great here.",
    n: "Client name",
    r: "Role, Company",
    c: "from-rose-500 to-orange-500",
  },
  {
    q: "Placeholder testimonial — short, honest feedback works best in this section.",
    n: "Client name",
    r: "Role, Company",
    c: "from-emerald-500 to-cyan-500",
  },
  {
    q: "Placeholder testimonial — add 3–5 real ones over time as you grow.",
    n: "Client name",
    r: "Role, Company",
    c: "from-amber-500 to-stone-500",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-accent" /> Kind words
        </div>
        <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] max-w-3xl">
          What clients will <span className="font-serif italic text-gradient-warm">say soon.</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl text-sm">
          Placeholder testimonials — I'll replace these with real quotes as I work with more clients.
        </p>
      </div>

      <div className="relative mt-16 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-5 animate-marquee w-max">
          {[...items, ...items].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-3xl p-7 w-[380px] md:w-[440px] shrink-0 shadow-card"
            >
              <p className="font-display text-lg leading-snug tracking-tight">"{t.q}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className={`size-10 rounded-full bg-gradient-to-br ${t.c}`} />
                <div>
                  <div className="text-sm font-medium">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
