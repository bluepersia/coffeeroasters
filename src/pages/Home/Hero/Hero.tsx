import type { JSX } from "react/jsx-runtime";
import Btn from "../../../components/Btn/Btn";
import { CREATE_YOUR_PLAN_LINK } from "../../../core/linkCreation";
import imageMobile from "/src/assets/home/mobile/image-hero-coffeepress.jpg";
import imageTablet from "/src/assets/home/tablet/image-hero-coffeepress.jpg";
import imageDesktop from "/src/assets/home/desktop/image-hero-coffeepress.jpg";
import { BP_DESKTOP, BP_TABLET } from "../../../core/breakpoints";
import styles from "./Hero.module.scss";
import clsx from "clsx";

export default function Hero(): JSX.Element {
  return (
    <section className={clsx(styles.hero, "container")}>
      <div className={styles.inner}>
        <h1 className={clsx(styles.title, "text1")}>
          Great coffee made simple.
        </h1>
        <p className={clsx(styles.desc, "text6")}>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Btn to={CREATE_YOUR_PLAN_LINK} className={styles.btn}>
          Create your plan
        </Btn>

        <picture className={styles.picture}>
          <source srcSet={imageDesktop} media={`(min-width:${BP_DESKTOP}px)`} />
          <source srcSet={imageTablet} media={`(min-width:${BP_TABLET}px)`} />
          <img
            src={imageMobile}
            alt="Copper-and-glass French press with black handle brewing coffee, next to a milk frother and scattered coffee beans, on a dark background with negative space to the left."
            className={styles.img}
          />
        </picture>
      </div>
    </section>
  );
}
