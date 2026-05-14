import { motion } from "motion/react";
import { Layout, Zap, Globe, Boxes, MousePointerClick, Sparkle } from "lucide-react";

const services = [
  { icon: Layout, title: "Landing Page Design", desc: "Conversion-led design systems built for ambitious launches.", span: "md:col-span-2" },
  { icon: Zap, title: "Framer Development", desc: "Pixel-perfect Framer builds with native CMS & motion." },
  { icon: Globe, title: "Webflow Development", desc: "Scalable Webflow sites with clean structure and SEO baked-in." },
  { icon: Boxes, title: "SaaS Website Design", desc: "End-to-end marketing sites for SaaS and AI products.", span: "md:col-span-2" },
  { icon: MousePointerClick, title: "UI / UX Design", desc: "Product surfaces that feel obvious and delightful." },
  { icon: Sparkle, title: "Animation & Interaction", desc: "Motion direction that earns its place — never decorative." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span className="size-1.5 rounded-full bg-accent" /> Services
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] max-w-3xl">
        A focused toolkit. <span className="font-serif italic text-gradient-warm">Built to ship.</span>
      </h2>

      <div className="mt-14 grid md:grid-cols-3 gap-4">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group relative glass-strong rounded-3xl p-7 overflow-hidden ${s.span ?? ""}`}
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
