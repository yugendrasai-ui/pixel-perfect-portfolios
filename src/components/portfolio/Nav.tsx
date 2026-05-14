import { motion } from "motion/react";

const links = ["Work", "About", "Services", "Process", "Contact"];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1100px)]"
    >
      <div className="glass-strong rounded-full px-5 py-2.5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold tracking-tight">
          <span className="size-7 rounded-full bg-gradient-to-br from-accent to-accent/40 grid place-items-center text-[11px] text-accent-foreground font-bold">
            B
          </span>
          <span className="text-sm">brunodev<span className="text-muted-foreground">.studio</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-xs sm:text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
        >
          Let's talk
        </a>
      </div>
    </motion.header>
  );
}
