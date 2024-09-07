import Contact from "@/shared/components/Contact";
import Hero from "@/shared/components/Hero";
import WhatWeSupport from "@/shared/components/WhatWeSupport";
import Certification from "@/shared/components/Certification";
import Milestones from "@/shared/components/Milestones";
import MarketAnalysis from "@/shared/components/MarketAnalysis";
import Recruiters from "@/shared/components/Recruiters";
import Skills from "@/shared/components/Skills";
import Numbers from "@/shared/components/Numbers";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhatWeSupport />
        <Numbers />
        <Milestones />
        <Recruiters />
        <Skills />
        <MarketAnalysis />
        <Certification />
        <Contact />
      </main>
    </>
  );
}
