"use client"
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main className="flex flex-col bg-bgsec max-w-7xl mx-auto overflow-hidden">
      <HeroSection />
      <HowItWorks/>      
      <ComingSoon/>      
      <Footer/>
    </main>
  );
}
