import { useQuery } from "@tanstack/react-query";
import type { JSX } from "react/jsx-runtime";
import Spinner from "../../../components/Spinner/Spinner";
import ErrorDisplay from "../../../components/ErrorDisplay/ErrorDisplay";
import { handleErrorMsg } from "../../../core/errorHandling";
import getOurCollection from "../../../api/coffees";
import CoffeeCard from "./CoffeeCard/CoffeeCard";
import clsx from "clsx";
import styles from "./OurCollection.module.scss";

export default function OurCollection(): JSX.Element {
  const {
    data: collection,
    isPending,
    error,
    refetch,
  } = useQuery({ queryKey: ["our-collection"], queryFn: getOurCollection });

  function render() {
    if (isPending) return <Spinner />;
    if (error)
      return <ErrorDisplay message={handleErrorMsg(error)} refetch={refetch} />;

    return (
      <>
        <h2 id="our-collection-title" className={styles.title}>
          Our Collection
        </h2>
        <ul className={clsx(styles.list, "innerContainer", "resetList")}>
          {collection.map((coffee) => (
            <li key={coffee.id} className={styles.item}>
              <CoffeeCard coffee={coffee} />
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <section
      aria-labelledby="our-collection-title"
      className={styles.ourCollection}
    >
      <div className={clsx(styles.inner, "container")}>{render()}</div>
    </section>
  );
}
