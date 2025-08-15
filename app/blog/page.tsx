import { AuroraBackground } from "@/components/ui/herosection/aurora-background";
import { LandingHeaderSection } from "@/components/ui/herosection/landing-header-section";
import React from "react";

export default function BlogPage() {
  return (
    <div>
      <AuroraBackground>
        <LandingHeaderSection />
      </AuroraBackground>
      <div className="about-page h-screen flex items-center justify-center bg-noise bg-no-repeat bg-center bg-cover bg-primaryShade overflow-hidden">
        <h1 className="text-black font-bold text-9xl">Blog Page</h1>

        <p className="text-black font-medium text-xl">
          Welcome to the blog page! Here you can find the latest articles and
          updates.
        </p>
      </div>
    </div>
  );
}
