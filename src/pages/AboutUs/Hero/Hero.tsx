import type { JSX } from "react/jsx-runtime";
import styles from "./Hero.module.scss";
import imgDesktop from "/src/assets/about/desktop/image-hero-whitecup.jpg";
import imgTablet from "/src/assets/about/tablet/image-hero-whitecup.jpg";
import imgMobile from "/src/assets/about/mobile/image-hero-whitecup.jpg";
import { BP_DESKTOP, BP_TABLET } from "../../../core/breakpoints";
import clsx from "clsx";

export default function AboutUsHero(): JSX.Element {
  return (
    <section aria-labelledby="hero-title" className={styles.aboutUs}>
      <div className={clsx(styles.inner, "container")}>
        <h1 id="hero-title" className={clsx(styles.title, "text2")}>
          About Us
        </h1>
        <p className={styles.desc}>
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>

        <picture className={styles.picture}>
          <source srcSet={imgDesktop} media={`(min-width:${BP_DESKTOP}px)`} />
          <source srcSet={imgTablet} media={`(min-width:${BP_TABLET}px)`} />
          <img
            src={imgMobile}
            alt="Overhead shot of a white cup of hot chocolate with cocoa-dusted foam, served on a matching saucer with two cookies, against a dark wood table with empty space on the left for text."
            className={styles.img}
          />
        </picture>
      </div>
    </section>
  );
}
