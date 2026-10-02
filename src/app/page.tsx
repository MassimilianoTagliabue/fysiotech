import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
