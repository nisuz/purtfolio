import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <AboutSection />
    </div>
  )
}