import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Features } from "@/components/features";
import { FAQ } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { PhoneLookup } from "@/components/phone-lookup";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <div id="lookup">
        <PhoneLookup />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="about">
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}