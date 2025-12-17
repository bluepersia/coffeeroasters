import clsx from "clsx";
import Button from "../../../shared/Button/Button";
import styles from "./hero.module.scss";
import heroImg from "/src/assets/Hero.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={clsx(styles.title, "text-1")}>
        Great coffee made simple.
      </h1>
      <p className={clsx(styles.desc, "text-6")}>
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <img
        className={styles.img}
        alt="A golden coffee pot and coffee beans, in front of a dark background"
        src={heroImg}
      />
      <Button to="create-plan">Create your plan</Button>
    </section>
  );
}
