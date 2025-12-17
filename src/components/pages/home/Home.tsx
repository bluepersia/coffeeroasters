import OurCollection from "./Collection/OurCollection";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <OurCollection />
      <WhyChooseUs />
      <HowItWorks />
    </>
  );
}
