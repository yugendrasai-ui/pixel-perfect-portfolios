import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Services } from "@/components/portfolio/Services";
import { Process } from "@/components/portfolio/Process";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yugendra Sai — Landing Page Designer & Developer" },
      {
        name: "description",
        content:
          "Freelance landing page designer & developer building clean, modern and responsive websites for growing brands.",
      },
      { property: "og:title", content: "Yugendra Sai — Landing Page Designer & Developer" },
      {
        property: "og:description",
        content: "Freelance landing page designer & developer building clean, modern, responsive websites.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
