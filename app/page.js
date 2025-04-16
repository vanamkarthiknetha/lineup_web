"use client"
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
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
    <main className="flex flex-col bg-bghero max-w-7xl mx-auto">
      <HeroSection />      
      {/* <Footer/> */}
    </main>
  );
}
