import type { JSX } from "react/jsx-runtime";
import mobileImg from "/src/assets/home/mobile/image-hero-coffeepress.jpg";
import tabletImg from "/src/assets/home/tablet/image-hero-coffeepress.jpg";
import desktopImg from "/src/assets/home/desktop/image-hero-coffeepress.jpg";
import Btn from "../../../components/Btn/Btn";
import { BP_DESKTOP, BP_TABLET } from "../../../core/breakpoints";
import { CREATE_PLAN_LINK } from "../../../core/linkCreation";
import styles from "./Hero.module.scss";
import clsx from "clsx";

export default function Hero(): JSX.Element {
  return (
    <section
      aria-labelledby="hero-title"
      className={clsx(styles.hero, "container")}
    >
      <div className={styles.content}>
        <h2 id="hero-title" className={clsx(styles.title, "text1")}>
          Great coffee made simple.
        </h2>
        <p className={styles.desc}>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Btn to={CREATE_PLAN_LINK} className={styles.btn}>
          Create your plan
        </Btn>

        <picture className={styles.picture}>
          <source srcSet={desktopImg} media={`(min-width:${BP_DESKTOP}px)`} />
          <source srcSet={tabletImg} media={`(min-width:${BP_TABLET}px)`} />
          <img
            src={mobileImg}
            alt="Copper-and-glass French press with black handle brewing coffee, next to a milk frother and scattered coffee beans, on a dark background with negative space to the left."
            className={styles.img}
          />
        </picture>
      </div>
    </section>
  );
}
