import OrganicAnimation from "@/components/animation/organic-animation";
import SmoothScrollCardSection from "@/components/smoothScrollCardSection/SmoothScrollCardSection";
import { HeroSection2 } from "@/components/ui/Home/heroSection";
import HomeHeaderSection from "@/components/ui/Home/home-header-section";
import { ParallexScrollMultipleDemo } from "@/components/ui/Parallex/ParallaxScrollDemo";
import ZoomParallex from "@/components/ZoomParallex/ZoomParallex";

export default function Home() {
  return (
    <main className=" ">
      <HomeHeaderSection />
      <div className="h-screen flex items-center justify-center bg-noise bg-no-repeat bg-center bg-cover bg-primaryShade overflow-hidden"></div>

      <ParallexScrollMultipleDemo />

      {/* <StickyScrollRevealDemo /> */}
      <div className="mt-10"></div>
      <ZoomParallex />

      <div className="mt-40"></div>
      <SmoothScrollCardSection />

      <OrganicAnimation />
      <HeroSection2 />
    </main>
  );
}
