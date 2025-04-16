"use client"
import Cover from "@/components/Cover";
import Footer from "@/components/Footer";
import ForWho from "@/components/ForWho";
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
    <main className="flex flex-col bg-bghero ">
      <HeroSection /> 
      <ForWho/>
      <Cover/>     
      <Footer/>
    </main>
  );
}
