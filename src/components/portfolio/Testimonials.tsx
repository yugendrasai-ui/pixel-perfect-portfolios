import { motion } from "motion/react";

const items = [
  { q: "Bruno doesn't ship pages — he ships inevitability. Our launch hit #2 on Product Hunt the same day.", n: "Sarah Chen", r: "Founder, Numera", c: "from-indigo-500 to-violet-500" },
  { q: "The level of taste and motion craft is rare. Felt like hiring a small studio in one person.", n: "Marcus Hale", r: "CEO, Halo AI", c: "from-rose-500 to-orange-500" },
  { q: "Conversion is up 184% since the rebuild. Worth every cent and then some.", n: "Yuki Tanaka", r: "Head of Growth, Pretrosoft", c: "from-emerald-500 to-cyan-500" },
  { q: "Working with Bruno changed how we think about marketing pages forever.", n: "Elena Rossi", r: "CMO, Lessoca", c: "from-amber-500 to-stone-500" },
];

export function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-accent" /> Praise
        </div>
        <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] max-w-3xl">
          Founders who'd <span className="font-serif italic text-gradient-warm">do it again.</span>
        </h2>
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
