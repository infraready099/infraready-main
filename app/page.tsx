import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Logos from "@/components/logos";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import Features from "@/components/features";
import Comparison from "@/components/comparison";
import Pricing from "@/components/pricing";
import CtaBanner from "@/components/cta-banner";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Logos />
      <HowItWorks />
      <Testimonials />
      <Features />
      <Comparison />
      <Pricing />
      <CtaBanner />
      <Footer />
    </main>
  );
}
