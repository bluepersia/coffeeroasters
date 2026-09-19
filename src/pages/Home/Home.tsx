import type { JSX } from "react/jsx-runtime";
import Hero from "./Hero/Hero";
import OurCollection from "./OurCollection/OurCollection";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Process from "./Process/Process";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <OurCollection />
      <WhyChooseUs />
      <Process />
    </>
  );
}
