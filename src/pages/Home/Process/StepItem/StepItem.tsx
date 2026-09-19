import type { JSX } from "react/jsx-runtime";
import type { StepItemData } from "../Process";
import clsx from "clsx";
import styles from "./StepItem.module.scss";

type StepItemProps = {
  stepItem: StepItemData;
};
export default function StepItem({
  stepItem: { num, title, description },
}: StepItemProps): JSX.Element {
  return (
    <div className={styles.stepItem}>
      <p className={clsx(styles.num, "text1")}>{num}</p>
      <h3 className={clsx(styles.title, "text3")}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}
