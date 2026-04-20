import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoItIsFor from "@/components/WhoItIsFor";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import WhatYouGet from "@/components/WhatYouGet";
import PricingSection from "@/components/PricingSection";
import WhyDifferent from "@/components/WhyDifferent";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhoItIsFor />
        <ProblemSection />
        <HowItWorks />
        <WhatYouGet />
        <PricingSection />
        <WhyDifferent />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
