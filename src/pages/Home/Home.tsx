import type { JSX } from "react/jsx-runtime";
import Hero from "./Hero/Hero";
import OurCollection from "./OurCollection/OurCollection";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <OurCollection />
      <WhyChooseUs />
    </>
  );
}
