import type { JSX } from "react/jsx-runtime";
import coffeeBeanImg from "/src/assets/home/desktop/icon-coffee-bean.svg";
import giftImg from "/src/assets/home/desktop/icon-gift.svg";
import truckImg from "/src/assets/home/desktop/icon-truck.svg";
import FeatureCard from "./FeatureCard/FeatureCard";
import styles from "./WhyChooseUs.module.scss";
import clsx from "clsx";

type FeatureData = {
  image: string;
  title: string;
  description: string;
};
const FEATURES: FeatureData[] = [
  {
    image: coffeeBeanImg,
    title: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    image: giftImg,
    title: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    image: truckImg,
    title: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
] as const;

export default function WhyChooseUs(): JSX.Element {
  return (
    <section
      aria-labelledby="why-choose-us-title"
      className={styles.whyChooseUs}
    >
      <div className={clsx(styles.inner, "container")}>
        <div className={styles.content}>
          <h2 id="why-choose-us-title" className={clsx(styles.title, "text2")}>
            Why choose us?
          </h2>
          <p className={styles.desc}>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <ul className={clsx(styles.list, "resetList")}>
          {FEATURES.map((FEATURE) => (
            <li key={FEATURE.title} className={styles.item}>
              <FeatureCard feature={FEATURE} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export type { FeatureData };
