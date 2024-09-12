import Contact from "@/shared/components/Contact";
import Hero from "@/shared/components/Hero";
import WhatWeSupport from "@/shared/components/WhatWeSupport";
import Certification from "@/shared/components/Certification";
import Milestones from "@/shared/components/Milestones";
import MarketAnalysis from "@/shared/components/MarketAnalysis";
import Clients from "@/shared/components/Clients";
import Skills from "@/shared/components/Skills";
import Numbers from "@/shared/components/Numbers";
import Tools from "@/shared/components/Tools";
import type { Metadata } from 'next'
import Testimonials from "@/shared/components/Testimonials";
import Projects from "@/shared/components/Projects";
 
export const metadata: Metadata = {
  title: 'NSArrows | Data Science and Business Analytics Course in Pune',
  description: 'Enroll in the Data Science and Business Analytics Course in Pune at NSArrows. Ideal for fresh minds aiming to master data skills and excel in the business world.',
  keywords: 'Data Science, Business Analytics, Course, Pune, Fresh Minds, NSArrows, Analytics, Data Skills, Business Data, Data Science Course',
  authors: [{ name: 'NSArrows' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Data Science and Business Analytics Course in Pune | NSArrows',
    description: 'Enroll in the Data Science and Business Analytics Course in Pune at NSArrows. Ideal for fresh minds aiming to master data skills and excel in the business world.',
    url: 'https://nsarrows.com',
    siteName: 'NSArrows',
    images: [
      {
        url: 'https://nsarrows.com/images//collegegirl.jpg',
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
  
}

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Numbers />
        <WhatWeSupport />
        <Milestones />
        <Clients />
        <Skills />
        <Tools />
        <MarketAnalysis />
        <Certification />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
