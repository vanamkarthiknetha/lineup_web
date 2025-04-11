"use client"
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhoIsItFor from "@/components/WhoIsItFor";
import WhyChoose from "@/components/WhyChoose";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; 
  }
  return (
    <main className="flex flex-col bg-bgsec max-w-7xl mx-auto overflow-hidden">
      <HeroSection />
      <HowItWorks/>  
      <WhyChoose/>    
      <WhoIsItFor/>    
      <ComingSoon/>      
      <Footer/>
    </main>
  );
}
