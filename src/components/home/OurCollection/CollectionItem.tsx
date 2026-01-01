import type { Props } from "./types";
import styles from "./collection-item.module.css";
import clsx from "clsx";

export default function CollectionItem(props: Props) {
  return (
    <article className={styles.item}>
      <img
        src={props.img}
        alt={`Bag of ${props.name}`}
        className={styles.img}
      />
      <div className={styles.content}>
        <h3 className={clsx(styles.name, "text-4")}>{props.name}</h3>
        <p className={clsx(styles.desc, "text-6")}>{props.desc}</p>
      </div>
    </article>
  );
}
