import CTA from "@/shared/components/CTA";
import Hero from "@/shared/components/Hero";
import Achievements from "@/shared/components/Achievements";
import Certification from "@/shared/components/Certification";
import Features from "@/shared/components/Features";
import MarketAnalysis from "@/shared/components/MarketAnalysis";
import Recruiters from "@/shared/components/Recruiters";
import SkillsCovered from "@/shared/components/SkillsCovered";
import Numbers from "@/shared/components/Numbers";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Achievements />
        <Numbers />
        <Features />
        <Recruiters />
        <SkillsCovered />
        <MarketAnalysis />
        <Certification />
        <CTA />
      </main>
    </>
  );
}
