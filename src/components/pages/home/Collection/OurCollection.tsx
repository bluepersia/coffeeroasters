import styles from "./our-collection.module.scss";
import { getCollection } from "../../../../ts/api";
import { useEffect, useState } from "react";
import type { CollectionItem } from "../../../../data/collection.types";
import clsx from "clsx";

export default function OurCollection() {
  const [collection, setCollection] = useState([] as CollectionItem[]);

  useEffect(() => {
    getCollection().then((res) => setCollection(res));
  }, []);

  return (
    <section className={styles.ourCollection}>
      <h2 className={styles.title}>Our Collection</h2>
      <ul className={clsx(styles.list, "u-reset-list")}>
        {collection.map((item) => (
          <li className={styles.item}>
            <img
              src={`/src/assets/${item.img}`}
              alt=""
              className={styles.itemImg}
            />
            <div className={styles.content}>
              <h3 className={clsx(styles.itemTitle, "text-4")}>{item.title}</h3>
              <p className={clsx(styles.itemDesc, "text-6")}>{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
