import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  { img: p1, name: "Numera", tag: "SaaS · Fintech", year: "2026", metric: "+212% signups", color: "from-indigo-500/30 to-violet-500/10" },
  { img: p2, name: "Halo AI", tag: "AI · Startup", year: "2025", metric: "$1.4M raised post-launch", color: "from-rose-500/30 to-orange-500/10" },
  { img: p3, name: "Pretrosoft", tag: "Web3 · Crypto", year: "2025", metric: "120k waitlist", color: "from-emerald-500/30 to-cyan-500/10" },
  { img: p4, name: "Lessoca", tag: "E-commerce · Fashion", year: "2024", metric: "+88% AOV", color: "from-amber-500/30 to-stone-500/10" },
];

export function Work() {
  return (
    <section id="work" className="relative py-32 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" /> Selected work
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1]">
            Case studies that <span className="font-serif italic text-gradient-warm">moved the needle.</span>
          </h2>
        </div>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
          All projects <ArrowUpRight className="size-4" />
        </a>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href="#"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative rounded-3xl overflow-hidden glass-strong p-5 ${i % 3 === 0 ? "md:row-span-1" : ""}`}
          >
            <div className={`relative aspect-[16/11] rounded-2xl overflow-hidden bg-gradient-to-br ${p.color}`}>
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 right-4 size-12 rounded-full bg-foreground text-background grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ArrowUpRight className="size-5" />
              </motion.div>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <div className="font-display text-2xl tracking-tight">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{p.tag} · {p.year}</div>
              </div>
              <span className="glass rounded-full px-3 py-1.5 text-xs">{p.metric}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
