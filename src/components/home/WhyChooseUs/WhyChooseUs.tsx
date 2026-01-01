import clsx from "clsx";
import Benefit from "./Benefit";
import styles from "./why-choose-us.module.css";
import beanImg from "../../../assets/home/whyChooseUs/bean.png";
import giftImg from "../../../assets/home/whyChooseUs/gift.png";
import truckImg from "../../../assets/home/whyChooseUs/truck.png";

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className={clsx(styles.inner, "radius-10")}>
        <h2 className={clsx(styles.title, "text-2")}>Why choose us?</h2>
        <p className={clsx(styles.desc, "text-6")}>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className={styles.benefits}>
        <Benefit
          icon={beanImg}
          title="Best quality"
          desc="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
        />
        <Benefit
          icon={giftImg}
          title="Exclusive benefits"
          desc="Special offers and swag when you subscribe, including 30% off your first shipment."
        />
        <Benefit
          icon={truckImg}
          title="Free shipping"
          desc="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
        />
      </div>
    </section>
  );
}
