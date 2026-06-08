import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Materials } from "@/components/Materials";
import { Testimonials } from "@/components/Testimonials";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evergrove Landscape Studio — Luxury Outdoor Living, Ontario" },
      {
        name: "description",
        content:
          "Award-winning luxury landscape design, outdoor living, and architectural hardscaping for modern homes across Kitchener, Waterloo, Cambridge, Guelph & Milton.",
      },
      { property: "og:title", content: "Evergrove Landscape Studio" },
      {
        property: "og:description",
        content:
          "Outdoor spaces designed to inspire. Luxury landscaping crafted for modern homes.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-charcoal text-bone">
      <Nav />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Materials />
      <Testimonials />
      <ServiceAreas />
      <Contact />
      <Footer />
    </main>
  );
}
