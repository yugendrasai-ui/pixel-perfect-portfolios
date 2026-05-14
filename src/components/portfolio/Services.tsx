import { motion } from "motion/react";
import { Smartphone, Zap, Sparkles, Search, Layout, MousePointerClick } from "lucide-react";

const features = [
  { icon: Smartphone, title: "Fully Responsive", desc: "Pixel-perfect from 360px phones to ultrawide displays." },
  { icon: Zap, title: "Lightning Fast", desc: "Sub-second loads with optimized assets and edge delivery." },
  { icon: Layout, title: "Modern UI / UX", desc: "Clean, premium interfaces that feel obvious to use." },
  { icon: MousePointerClick, title: "Mobile Friendly", desc: "Touch-first interactions and thumb-friendly layouts." },
  { icon: Sparkles, title: "Smooth Animations", desc: "Purposeful motion that guides — never distracts." },
  { icon: Search, title: "SEO Ready", desc: "Semantic markup, meta, and Core Web Vitals out of the box." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span className="size-1.5 rounded-full bg-accent" /> What you get
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] max-w-3xl">
        Every site, built to <span className="font-serif italic text-gradient-warm">a premium standard.</span>
      </h2>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative glass-strong rounded-3xl p-7 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 size-56 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex flex-col h-full min-h-[180px]">
                <div className="size-11 rounded-xl glass grid place-items-center mb-6">
                  <Icon className="size-5 text-accent" />
                </div>
                <div className="mt-auto">
                  <div className="font-display text-xl tracking-tight">{s.title}</div>
                  <div className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
