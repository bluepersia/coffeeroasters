import type { JSX } from "react/jsx-runtime";
import Hero from "./Hero/Hero";
import OurCollection from "./OurCollection/OurCollection";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <OurCollection />
    </>
  );
}
