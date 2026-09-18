import type { JSX } from "react/jsx-runtime";
import type { CoffeeData } from "../../../../api/coffees";
import styles from "./CoffeeCard.module.scss";
import clsx from "clsx";

type CoffeeCardProps = {
  coffee: CoffeeData;
};

export default function CoffeeCard({
  coffee: { name, description, image },
}: CoffeeCardProps): JSX.Element {
  return (
    <article className={styles.coffeeCard}>
      <div className={styles.content}>
        <h3 className={clsx(styles.title, "text4")}>{name}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
      <img src={image} alt="" className={styles.img} />
    </article>
  );
}
