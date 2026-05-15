/**
 * FOOTER
 * Update the email and social links below with your real ones.
 */
const links = [
  { g: "Sitemap", items: ["Work", "About", "Services", "Contact"] },
  { g: "Connect", items: ["Twitter / X", "LinkedIn", "GitHub", "Dribbble"] },
  { g: "Contact", items: ["hello@yugendrasai.com", "Available for freelance"] },
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
              {g.items.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-accent transition-colors story-link">{l}</a>
                </li>
              ))}
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
