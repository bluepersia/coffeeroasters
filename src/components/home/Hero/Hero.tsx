import { Link } from "react-router-dom";
import mainImg from "../../../assets/home/Hero.jpg";
import styles from "./hero.module.css";
import clsx from "clsx";

export default function Hero() {
  return (
    <section className={clsx(styles.hero, "radius-10")}>
      <h1 className={clsx(styles.title, "text-1")}>
        Great coffee made simple.
      </h1>
      <p className={clsx(styles.desc, "text-6")}>
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <Link to="/create-plan" className={clsx(styles.link, "btn")}>
        Create your plan
      </Link>
      <img
        src={mainImg}
        alt="Shimmering golden coffee pot and beans"
        className={clsx(styles.img, "radius-10")}
      />
    </section>
  );
}
