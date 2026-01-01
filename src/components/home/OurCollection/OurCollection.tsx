import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { getOurCollection } from "./services";
import CollectionItem from "./CollectionItem";
import styles from "./our-collection.module.css";

export default function OurCollection() {
  const { data } = useQuery({
    queryKey: ["collection"],
    queryFn: getOurCollection,
  });

  return (
    <section className={styles.collection}>
      <h2 className={clsx(styles.title, "text-9")}>Our Collection</h2>
      <div className={styles.inner}>
        {data?.map((item) => (
          <CollectionItem {...item} />
        ))}
      </div>
    </section>
  );
}
