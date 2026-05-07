import { ScrollProgress, SmoothScroll } from "@/components/animations";
import { Footer, Nav } from "@/components/layout";
import { QualifyGateProvider } from "@/components/qualify";
import {
  About,
  BeforeAfter,
  Faq,
  FinalCta,
  Hero,
  Hook,
  HowItWorks,
  Included,
  Israel,
  Pricing,
  SmileIn24Hours,
  Testimonials,
  WhyIsrael,
} from "@/sections";

const Index = () => (
  <QualifyGateProvider>
    <div className="relative bg-ivory">
      <SmoothScroll />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Hook />
        <Included />
        <SmileIn24Hours />
        <Pricing />
        <WhyIsrael />
        <Israel />
        <About />
        <HowItWorks />
        <BeforeAfter />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  </QualifyGateProvider>
);

export default Index;
