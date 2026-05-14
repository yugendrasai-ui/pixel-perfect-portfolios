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
      { title: "Bruno Dev — Landing Page Designer & Developer" },
      {
        name: "description",
        content:
          "Independent landing page studio crafting cinematic, high-converting websites for ambitious SaaS, AI and Web3 founders.",
      },
      { property: "og:title", content: "Bruno Dev — Landing Page Designer & Developer" },
      {
        property: "og:description",
        content: "Cinematic, high-converting landing pages for ambitious founders.",
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
