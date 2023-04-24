import { Navbar } from "@/components/navbar/Navbar";
import SlideShow from "@/components/components/slider/SlideShow";
import HeroSection from "@/components/home-components/hero-section/HeroSection";
import Title from "@/components/title/Title";
import FeatureSection from "@/components/home-components/feature-section/FeatureSection";
import WhatToWatch from "@/components/home-components/What-to-watch/WhatToWatch";

export default function Home() {
  return (
    <main className="w-screen">
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>  
      <WhatToWatch/>
    </main>
  )
}
