import clsx from "clsx";
import styles from "./why-choose-us.module.scss";
import beanImg from "/src/assets/Bean.png";
import giftImg from "/src/assets/Gift.png";
import truckImg from "/src/assets/Truck.png";
import Benefit from "./Benefit";

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <h2 className={clsx(styles.title, "text-2", "u-margin-center")}>
        Why choose us?
      </h2>
      <p className={clsx(styles.desc, "text-6", "u-margin-center")}>
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>
      <ul className={clsx(styles.benefits, "u-margin-center", "u-reset-list")}>
        <Benefit img={beanImg} title="Best quality">
          Discover an endless variety of the world’s best artisan coffee from
          each of our roasters.
        </Benefit>

        <Benefit img={giftImg} title="Exclusive benefits">
          Special offers and swag when you subscribe, including 30% off your
          first shipment.
        </Benefit>
        <Benefit img={truckImg} title="Free shipping">
          We cover the cost and coffee is delivered fast. Peak freshness:
          guaranteed.
        </Benefit>
      </ul>
    </section>
  );
}
