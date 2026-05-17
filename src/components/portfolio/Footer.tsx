/**
 * FOOTER
 * Update the email and social links below with your real ones.
 */
import { toast } from "sonner";

const links = [
  { g: "Sitemap", items: ["Work", "About", "Services", "Contact"] },
  { g: "Connect", items: ["Twitter / X", "LinkedIn", "GitHub", "Dribbble"] },
  { g: "Contact", items: ["yugendrasai797@gmail.com", "+91 9390819729", "Available for freelance"] },
];

export function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-10 pb-16">
        <div className="md:col-span-5">
          <div className="font-display text-3xl md:text-4xl tracking-tight">
            Yugendra<span className="text-muted-foreground"> Sai</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs mt-3">
            Freelance landing page designer & developer building modern,
            responsive websites.
          </p>
        </div>
        {links.map((g) => (
          <div key={g.g} className="md:col-span-2 lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{g.g}</div>
            <ul className="space-y-2 text-sm">
              {g.items.map((l) => {
                if (l.includes("@")) {
                  return (
                    <li key={l}>
                      <a
                        href={`mailto:${l}`}
                        onClick={(e) => {
                          navigator.clipboard.writeText(l);
                          toast.success("Email copied to clipboard! Opening your mail client...", {
                            description: l,
                          });
                        }}
                        className="hover:text-accent transition-colors story-link"
                      >
                        {l}
                      </a>
                    </li>
                  );
                }
                
                let href = "#";
                if (l.startsWith("+")) {
                  href = `tel:${l.replace(/\s+/g, "")}`;
                } else if (g.g === "Sitemap") {
                  href = `#${l.toLowerCase()}`;
                }
                return (
                  <li key={l}>
                    <a href={href} className="hover:text-accent transition-colors story-link">{l}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Yugendra Sai — All rights reserved.</div>
        <div>Designed & built with care.</div>
      </div>
    </footer>
  );
}
