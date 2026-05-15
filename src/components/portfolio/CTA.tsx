import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

/**
 * CONTACT / CTA SECTION
 * Replace the email below with your real email address.
 */
const EMAIL = "hello@yugendrasai.com";

export function CTA() {
  return (
    <section id="contact" className="relative py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2rem] glass-strong p-10 md:p-20 text-center"
      >
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse-glow" /> Open to new projects
          </div>
          <h2 className="mt-8 font-display text-5xl md:text-8xl tracking-[-0.04em] leading-[0.95]">
            Let's build your next <br />
            <span className="font-serif italic text-gradient-warm">landing page.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Have an idea or a brand you want to launch? Send me a quick message —
            I'd love to help you bring it to life.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-6 pr-2 py-2.5 text-sm font-medium hover:scale-[1.02] transition-transform"
            >
              {EMAIL}
              <span className="size-9 rounded-full bg-background text-foreground grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="size-4" />
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
