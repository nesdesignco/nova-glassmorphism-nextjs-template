import { VideoBackground } from "@/components/shared/VideoBackground";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <VideoBackground />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
