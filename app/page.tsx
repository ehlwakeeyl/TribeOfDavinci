import { Loader } from "@/components/layout/Loader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { Mission } from "@/components/sections/Mission";
import { Advantage } from "@/components/sections/Advantage";
import { Featured } from "@/components/sections/Featured";
import { StatsBand } from "@/components/sections/StatsBand";
import { Projects } from "@/components/sections/Projects";
import { Trust } from "@/components/sections/Trust";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Mission />
        <Advantage />
        <Featured />
        <StatsBand />
        <Projects />
        <Trust />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
