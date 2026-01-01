import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import OurCollection from "./OurCollection/OurCollection";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main aria-label="Home Main Content">
      <Hero />
      <OurCollection />
      <WhyChooseUs />
      <HowItWorks />
    </main>
  );
}
