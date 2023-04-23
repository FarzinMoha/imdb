import { Navbar } from "@/components/navbar/Navbar";
import SlideShow from "@/components/components/slider/SlideShow";
import HeroSection from "@/components/home-components/hero-section/HeroSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Navbar/>
      <HeroSection/>
    </main>
  )
}
